import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { connectToDatabase, connectToTransactionsDb, incrementEmailUsage, getEmailUsageToday, DAILY_LIMIT, validateSessionToken } from '@/lib/mongodb'

export const maxDuration = 300

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface AreaStats {
  area: string
  areaAr: string
  avgPrice: number
  minPrice: number
  maxPrice: number
  totalTransactions: number
  avgPricePerSqm: number
  avgSize: number
  propertyTypes: string[]
  bedrooms: string[]
  buildings: string[]
  avgServiceCharge: number | null
  avgRentalYield: number | null
  developers: string[]
}

interface RentalStats {
  area: string
  areaAr: string
  avgRent: number
  minRent: number
  maxRent: number
  totalTransactions: number
  avgMonthlyRent: number
  bedrooms: string[]
  propertyTypes: string[]
}

async function queryMarketData(budget: number, analysis: PreAnalysis, sendProgress?: (msg: string) => void) {
  const t0 = Date.now()
  const { propertyType, bedrooms, targetAreas, targetL4Areas } = analysis
  console.log(`[FindHome] queryMarketData START - budget: ${budget}, type: ${propertyType || 'any'}, beds: ${bedrooms || 'any'}, l4Areas: ${targetL4Areas?.join(', ') || 'none'}`)

  const { db } = await connectToTransactionsDb()
  console.log(`[FindHome] DB connected in ${Date.now() - t0}ms`)
  sendProgress?.('Connected to database...')

  const budgetMin = budget * 0.5
  const budgetMax = budget * 1.5

  const toNum = (field: string) => ({
    $convert: { input: `$${field}`, to: 'double', onError: 0, onNull: 0 }
  })
  const toInt = (field: string) => ({
    $convert: { input: `$${field}`, to: 'int', onError: 0, onNull: 0 }
  })

  const convertFieldsStage = {
    $addFields: {
      _numAmount: toNum('transaction_amount'),
      _numPricePerSqm: toNum('transaction_per_sqm_amount'),
      _numArea: toNum('builtup_area_sqm'),
      _numServiceCharge: toNum('service_charge_sqft_amount'),
      _numYield: toNum('current_estimated_rental_yield'),
      _numMonthlyRent: toNum('contract_monthly_amount'),
      _numBeds: toInt('beds'),
    },
  }

  const salesMatchStage: Record<string, unknown> = {
    bayut_leaf_location_name_en: { $ne: '' },
  }
  if (propertyType && propertyType !== 'null') {
    salesMatchStage.bayut_property_type = propertyType
  }

  const hasAreaFilters = (targetL4Areas && targetL4Areas.length > 0) || (targetAreas && targetAreas.length > 0)
  if (hasAreaFilters) {
    const areaConditions: Record<string, unknown>[] = []
    if (targetL4Areas && targetL4Areas.length > 0) {
      const l4Regex = targetL4Areas.map(a => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
      areaConditions.push({ bayut_location_l4_name_en: { $regex: l4Regex, $options: 'i' } })
    }
    if (targetAreas && targetAreas.length > 0) {
      const leafRegex = targetAreas.map(a => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
      areaConditions.push({ bayut_leaf_location_name_en: { $regex: leafRegex, $options: 'i' } })
    }
    salesMatchStage.$or = areaConditions
  }

  const salesPipeline: Record<string, unknown>[] = [
    { $match: salesMatchStage },
    convertFieldsStage,
    { $match: { _numAmount: { $gte: budgetMin, $lte: budgetMax } } },
  ]

  if (bedrooms && bedrooms !== 'null') {
    salesPipeline.push({ $match: { _numBeds: parseInt(bedrooms) } })
  }

  salesPipeline.push(
    {
      $group: {
        _id: {
          area: '$bayut_leaf_location_name_en',
          areaAr: '$bayut_leaf_location_name_ar',
          l4: '$bayut_location_l4_name_en',
        },
        avgPrice: { $avg: '$_numAmount' },
        minPrice: { $min: '$_numAmount' },
        maxPrice: { $max: '$_numAmount' },
        totalTransactions: { $sum: 1 },
        avgPricePerSqm: { $avg: '$_numPricePerSqm' },
        avgSize: { $avg: '$_numArea' },
        propertyTypes: { $addToSet: '$bayut_property_type' },
        bedrooms: { $addToSet: '$_numBeds' },
        avgServiceCharge: { $avg: '$_numServiceCharge' },
        avgRentalYield: { $avg: '$_numYield' },
        developers: { $addToSet: '$developer_name_en' },
      },
    },
    { $match: { totalTransactions: { $gte: 3 } } },
    { $sort: { totalTransactions: -1 as const } },
    { $limit: 15 },
  )

  const aggOpts = { allowDiskUse: true }

  const t1 = Date.now()
  sendProgress?.('Querying 500,000+ property transactions...')
  let [salesData, overallStatsResult] = await Promise.all([
    db.collection('sales').aggregate(salesPipeline, aggOpts).toArray(),
    db.collection('sales').aggregate([
      { $match: salesMatchStage },
      { $addFields: { _numAmount: toNum('transaction_amount'), _numYield: toNum('current_estimated_rental_yield') } },
      { $match: { _numAmount: { $gte: budgetMin, $lte: budgetMax } } },
      {
        $group: {
          _id: null,
          totalTransactions: { $sum: 1 },
          avgPrice: { $avg: '$_numAmount' },
          avgYield: { $avg: '$_numYield' },
        },
      },
    ], aggOpts).toArray(),
  ])
  console.log(`[FindHome] Sales + OverallStats queries done in ${Date.now() - t1}ms - found ${salesData.length} areas`)

  if (salesData.length < 3 && hasAreaFilters) {
    console.log(`[FindHome] Too few results (${salesData.length}) with area filters, retrying without area restrictions...`)
    sendProgress?.('Expanding search to find more options...')

    const relaxedMatch: Record<string, unknown> = {
      bayut_leaf_location_name_en: { $ne: '' },
    }
    if (propertyType && propertyType !== 'null') {
      relaxedMatch.bayut_property_type = propertyType
    }
    const relaxedPipeline: Record<string, unknown>[] = [
      { $match: relaxedMatch },
      convertFieldsStage,
      { $match: { _numAmount: { $gte: budgetMin, $lte: budgetMax } } },
    ]
    if (bedrooms && bedrooms !== 'null') {
      relaxedPipeline.push({ $match: { _numBeds: parseInt(bedrooms) } })
    }
    relaxedPipeline.push(
      {
        $group: {
          _id: {
            area: '$bayut_leaf_location_name_en',
            areaAr: '$bayut_leaf_location_name_ar',
            l4: '$bayut_location_l4_name_en',
          },
          avgPrice: { $avg: '$_numAmount' },
          minPrice: { $min: '$_numAmount' },
          maxPrice: { $max: '$_numAmount' },
          totalTransactions: { $sum: 1 },
          avgPricePerSqm: { $avg: '$_numPricePerSqm' },
          avgSize: { $avg: '$_numArea' },
          propertyTypes: { $addToSet: '$bayut_property_type' },
          bedrooms: { $addToSet: '$_numBeds' },
          avgServiceCharge: { $avg: '$_numServiceCharge' },
          avgRentalYield: { $avg: '$_numYield' },
          developers: { $addToSet: '$developer_name_en' },
        },
      },
      { $match: { totalTransactions: { $gte: 3 } } },
      { $sort: { totalTransactions: -1 as const } },
      { $limit: 15 },
    )
    const fallbackData = await db.collection('sales').aggregate(relaxedPipeline, aggOpts).toArray()
    console.log(`[FindHome] Fallback query found ${fallbackData.length} areas`)
    if (fallbackData.length > salesData.length) {
      salesData.length = 0
      salesData.push(...fallbackData)
    }
  }

  sendProgress?.(`Found ${salesData.length} matching areas, analyzing rentals...`)

  const topAreas = salesData.map((d) => d._id.l4 || d._id.area).filter(Boolean)
  const topAreaNames = salesData.slice(0, 5).map((d) => d._id.area).filter(Boolean)

  const rentalMatchStage: Record<string, unknown> = {
    bayut_location_l4_name_en: { $in: topAreas },
  }

  const rentalPipeline: Record<string, unknown>[] = [
    { $match: rentalMatchStage },
    { $addFields: { _numAmount: toNum('transaction_amount'), _numMonthlyRent: toNum('contract_monthly_amount'), _numBeds: toInt('beds') } },
    { $match: { _numAmount: { $gt: 0 } } },
  ]

  if (bedrooms && bedrooms !== 'null' && !isNaN(parseInt(bedrooms))) {
    rentalPipeline.push({ $match: { _numBeds: parseInt(bedrooms) } })
  }

  rentalPipeline.push(
    {
      $group: {
        _id: {
          area: '$bayut_leaf_location_name_en',
          areaAr: '$bayut_leaf_location_name_ar',
        },
        avgRent: { $avg: '$_numAmount' },
        minRent: { $min: '$_numAmount' },
        maxRent: { $max: '$_numAmount' },
        totalTransactions: { $sum: 1 },
        avgMonthlyRent: { $avg: '$_numMonthlyRent' },
        bedrooms: { $addToSet: '$_numBeds' },
        propertyTypes: { $addToSet: '$bayut_property_type' },
      },
    },
    { $match: { totalTransactions: { $gte: 3 } } },
    { $sort: { totalTransactions: -1 as const } },
    { $limit: 15 },
  )

  const priceTrendPipeline = [
    {
      $match: {
        bayut_leaf_location_name_en: { $in: topAreaNames },
        date_transaction_nk: { $exists: true, $nin: ['', null, '1970-01-01'] },
      },
    },
    {
      $addFields: {
        _numAmount: toNum('transaction_amount'),
        _numPricePerSqm: toNum('transaction_per_sqm_amount'),
        parsedDate: {
          $dateFromString: { dateString: '$date_transaction_nk', onError: null }
        },
      },
    },
    { $match: { parsedDate: { $ne: null }, _numAmount: { $gt: 0 } } },
    {
      $group: {
        _id: {
          year: { $year: '$parsedDate' },
          quarter: { $ceil: { $divide: [{ $month: '$parsedDate' }, 3] } },
          area: '$bayut_leaf_location_name_en',
        },
        avgPrice: { $avg: '$_numAmount' },
        totalTransactions: { $sum: 1 },
        avgPricePerSqm: { $avg: '$_numPricePerSqm' },
      },
    },
    { $match: { totalTransactions: { $gte: 2 } } },
    { $sort: { '_id.year': 1 as const, '_id.quarter': 1 as const } },
  ]

  const rentalTrendPipeline = [
    {
      $match: {
        bayut_leaf_location_name_en: { $in: topAreaNames },
        date_start_nk: { $exists: true, $nin: ['', null, '1970-01-01'] },
      },
    },
    {
      $addFields: {
        _numMonthlyRent: toNum('contract_monthly_amount'),
        parsedDate: {
          $dateFromString: { dateString: '$date_start_nk', onError: null }
        },
      },
    },
    { $match: { parsedDate: { $ne: null }, _numMonthlyRent: { $gt: 0 } } },
    {
      $group: {
        _id: {
          year: { $year: '$parsedDate' },
          quarter: { $ceil: { $divide: [{ $month: '$parsedDate' }, 3] } },
          area: '$bayut_leaf_location_name_en',
        },
        avgRent: { $avg: '$_numMonthlyRent' },
        totalTransactions: { $sum: 1 },
      },
    },
    { $match: { totalTransactions: { $gte: 2 } } },
    { $sort: { '_id.year': 1 as const, '_id.quarter': 1 as const } },
  ]

  const t2 = Date.now()
  sendProgress?.('Comparing rental yields and price trends...')
  const [rentalData, priceTrendData, rentalTrendData] = await Promise.all([
    db.collection('rentals').aggregate(rentalPipeline, aggOpts).toArray(),
    db.collection('sales').aggregate(priceTrendPipeline, aggOpts).toArray(),
    db.collection('rentals').aggregate(rentalTrendPipeline, aggOpts).toArray(),
  ])
  console.log(`[FindHome] Rental + Trend queries done in ${Date.now() - t2}ms - rentals: ${rentalData.length}, priceTrends: ${priceTrendData.length}, rentalTrends: ${rentalTrendData.length}`)

  const areaStats: AreaStats[] = salesData.map((d) => ({
    area: d._id.area,
    areaAr: d._id.areaAr || '',
    avgPrice: Math.round(d.avgPrice),
    minPrice: Math.round(d.minPrice),
    maxPrice: Math.round(d.maxPrice),
    totalTransactions: d.totalTransactions,
    avgPricePerSqm: Math.round(d.avgPricePerSqm || 0),
    avgSize: Math.round(d.avgSize || 0),
    propertyTypes: d.propertyTypes.filter(Boolean),
    bedrooms: d.bedrooms.filter((b: number) => b > 0).sort().map(String),
    buildings: [],
    avgServiceCharge: d.avgServiceCharge ? Math.round(d.avgServiceCharge * 100) / 100 : null,
    avgRentalYield: d.avgRentalYield ? Math.round(d.avgRentalYield * 10000) / 100 : null,
    developers: d.developers.filter((dev: string) => dev && dev !== 'Unknown').slice(0, 5),
  }))

  const rentalStats: RentalStats[] = rentalData.map((d) => ({
    area: d._id.area,
    areaAr: d._id.areaAr || '',
    avgRent: Math.round(d.avgRent),
    minRent: Math.round(d.minRent),
    maxRent: Math.round(d.maxRent),
    totalTransactions: d.totalTransactions,
    avgMonthlyRent: Math.round(d.avgMonthlyRent || 0),
    bedrooms: d.bedrooms.filter(Boolean).sort().map(String),
    propertyTypes: d.propertyTypes.filter(Boolean),
  }))

  const chartData = {
    priceTrends: priceTrendData.map(d => ({
      period: `Q${d._id.quarter} ${d._id.year}`,
      year: d._id.year,
      quarter: d._id.quarter,
      area: d._id.area,
      avgPrice: Math.round(d.avgPrice),
      transactions: d.totalTransactions,
      avgPricePerSqm: Math.round(d.avgPricePerSqm || 0),
    })),
    rentalTrends: rentalTrendData.map(d => ({
      period: `Q${d._id.quarter} ${d._id.year}`,
      year: d._id.year,
      quarter: d._id.quarter,
      area: d._id.area,
      avgRent: Math.round(d.avgRent),
      transactions: d.totalTransactions,
    })),
    areaComparison: areaStats.slice(0, 5).map(a => ({
      area: a.area,
      avgPrice: a.avgPrice,
      avgPricePerSqm: a.avgPricePerSqm,
      transactions: a.totalTransactions,
      rentalYield: a.avgRentalYield || 0,
      avgSize: a.avgSize,
    })),
    yieldComparison: areaStats.slice(0, 5).map(a => {
      const rental = rentalStats.find(r => r.area === a.area)
      return {
        area: a.area,
        rentalYield: a.avgRentalYield || 0,
        avgPrice: a.avgPrice,
        avgRent: rental?.avgMonthlyRent || 0,
        annualRent: (rental?.avgMonthlyRent || 0) * 12,
      }
    }),
  }

  console.log(`[FindHome] queryMarketData TOTAL: ${Date.now() - t0}ms`)

  return {
    salesByArea: areaStats,
    rentalsByArea: rentalStats,
    marketOverview: overallStatsResult[0] || { totalTransactions: 0, avgPrice: 0, avgYield: 0 },
    chartData,
  }
}

interface PreAnalysis {
  propertyType?: string
  bedrooms?: string
  targetAreas: string[]
  targetL4Areas: string[]
  lifestyleTags: string[]
  reasoning: string
  priorityFactors: string[]
}

async function analyzeUserRequest(description: string, budget: number): Promise<PreAnalysis> {
  const t0 = Date.now()
  console.log(`[FindHome] AI pre-analysis START`)

  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `You are a Dubai real estate expert. Analyze the user's property request and extract structured search filters.

You must map the user's requirements to ACTUAL Dubai areas/communities. Use your knowledge of Dubai geography, metro lines, schools, beaches, lifestyle, etc.

IMPORTANT AREA MAPPING RULES:
- "near metro" → areas along Dubai Metro Red/Green lines: Business Bay, Dubai Marina, JLT, DIFC, Downtown Dubai, Dubai Internet City, Dubai Media City, Al Barsha, Deira, Bur Dubai, JVC (near future metro), Dubai Hills (near future metro), Creek Harbour
- "beachfront/beach" → Dubai Marina, JBR, Palm Jumeirah, La Mer, Bluewaters
- "family-friendly" → Arabian Ranches, Dubai Hills, JVC, Mirdif, Al Furjan, Motor City, Springs, Meadows, Town Square
- "near schools" → Arabian Ranches, Dubai Hills, JVC, Mirdif, Al Barsha, Motor City, Springs
- "luxury" → Palm Jumeirah, Downtown Dubai, DIFC, Emirates Hills, Dubai Hills, Bluewaters
- "affordable/budget" → JVC, Dubai Silicon Oasis, International City, Discovery Gardens, Sports City, Al Furjan, Town Square, Dubailand
- "investment/ROI" → JVC, Business Bay, Dubai Marina, Sports City, Dubai Silicon Oasis, Arjan
- "nightlife/entertainment" → Dubai Marina, JBR, Downtown Dubai, Business Bay, DIFC, City Walk
- "quiet/peaceful" → Arabian Ranches, Mirdif, Al Furjan, Springs, Meadows, Motor City
- "work in DIFC/Downtown" → DIFC, Downtown Dubai, Business Bay, Zabeel, World Trade Centre
- "new/modern" → Business Bay, Dubai Hills, Creek Harbour, MBR City, Sobha Hartland, JVC (newer buildings)

For targetAreas: Use the community/building-level names as they appear in Dubai transactions (e.g., "Binghatti Avenue", "Sobha Hartland Greens", "Park Heights"). These map to bayut_leaf_location_name_en.
For targetL4Areas: Use broader area names (e.g., "Business Bay", "Dubai Marina", "JVC", "Downtown Dubai"). These map to bayut_location_l4_name_en.

Property types in database: Villa, Apartment, Townhouse, Penthouse, Land, Hotel Apartment, Office
Bedrooms: 0 = Studio, 1, 2, 3, 4, 5+

Respond in JSON:
{
  "propertyType": "Villa|Apartment|Townhouse|Penthouse|Land|null",
  "bedrooms": "0|1|2|3|4|5|null",
  "targetAreas": ["specific community/building names that match - up to 20"],
  "targetL4Areas": ["broader area names - up to 10, ALWAYS include these based on lifestyle/location requirements"],
  "lifestyleTags": ["metro-adjacent", "beachfront", "family-friendly", etc.],
  "reasoning": "Brief explanation of why these areas were chosen based on the user's request",
  "priorityFactors": ["What matters most to this user - e.g., metro proximity, ROI, family amenities"]
}`
      },
      {
        role: 'user',
        content: `Budget: AED ${budget.toLocaleString()}\nRequest: ${description}`
      }
    ],
    response_format: { type: 'json_object' },
    temperature: 0.3,
    max_tokens: 1000,
  })

  const content = completion.choices[0]?.message?.content
  if (!content) {
    console.log(`[FindHome] AI pre-analysis failed, using fallback`)
    return fallbackParseInput(description)
  }

  const result = JSON.parse(content) as PreAnalysis
  console.log(`[FindHome] AI pre-analysis done in ${Date.now() - t0}ms - areas: ${result.targetL4Areas?.join(', ')}, type: ${result.propertyType || 'any'}, beds: ${result.bedrooms || 'any'}, tags: ${result.lifestyleTags?.join(', ')}`)
  return result
}

function fallbackParseInput(description: string): PreAnalysis {
  const descLower = description.toLowerCase()

  let propertyType: string | undefined
  if (descLower.includes('villa')) propertyType = 'Villa'
  else if (descLower.includes('townhouse')) propertyType = 'Townhouse'
  else if (descLower.includes('penthouse')) propertyType = 'Penthouse'
  else if (descLower.includes('apartment') || descLower.includes('flat')) propertyType = 'Apartment'
  else if (descLower.includes('land') || descLower.includes('plot')) propertyType = 'Land'

  let bedrooms: string | undefined
  const bedMatch = descLower.match(/(\d+)\s*(?:bed|bedroom|br|bhk)/i)
  if (bedMatch) bedrooms = bedMatch[1]
  if (descLower.includes('studio')) bedrooms = '0'

  return { propertyType, bedrooms, targetAreas: [], targetL4Areas: [], lifestyleTags: [], reasoning: '', priorityFactors: [] }
}

export async function POST(request: NextRequest) {
  const postStart = Date.now()

  const { description, budget, sessionToken } = await request.json()
  console.log(`[FindHome] POST request - budget: ${budget}`)

  if (!description || description.trim().length < 10) {
    return NextResponse.json(
      { error: 'Please provide a more detailed description of your dream home.' },
      { status: 400 }
    )
  }

  if (!budget || budget < 50000) {
    return NextResponse.json(
      { error: 'Please provide a valid budget (minimum AED 50,000).' },
      { status: 400 }
    )
  }

  if (!sessionToken) {
    return NextResponse.json(
      { error: 'Session expired. Please verify your email again.' },
      { status: 401 }
    )
  }

  const email = await validateSessionToken(sessionToken)
  if (!email) {
    return NextResponse.json(
      { error: 'Session expired. Please verify your email again.' },
      { status: 401 }
    )
  }

  const currentUsage = await getEmailUsageToday(email)
  if (currentUsage >= DAILY_LIMIT) {
    return NextResponse.json(
      { error: 'Daily limit reached. Please try again tomorrow.' },
      { status: 429 }
    )
  }
  await incrementEmailUsage(email)

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const sendProgress = (message: string) => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'progress', message })}\n\n`))
        } catch {}
      }

      const keepAlive = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'ping' })}\n\n`))
        } catch {
          clearInterval(keepAlive)
        }
      }, 5000)

      try {
        sendProgress('Understanding your requirements with AI...')

        let analysis: PreAnalysis
        try {
          analysis = await analyzeUserRequest(description, budget)
          if (analysis.propertyType === 'null') analysis.propertyType = undefined
          if (analysis.bedrooms === 'null') analysis.bedrooms = undefined
        } catch (e) {
          console.error('[FindHome] AI pre-analysis failed, using fallback:', e)
          analysis = fallbackParseInput(description)
        }
        sendProgress(`Identified ${analysis.targetL4Areas?.length || 0} target areas matching your needs...`)
        console.log(`[FindHome] AI analysis complete (${Date.now() - postStart}ms) - reasoning: ${analysis.reasoning}`)

        const marketData = await queryMarketData(budget, analysis, sendProgress)
        console.log(`[FindHome] Market data fetched (${Date.now() - postStart}ms total so far)`)

        sendProgress('Generating your personalized report...')

        const systemPrompt = `You are PropertyWiki's expert real estate analyst for the UAE market. You have access to REAL transaction data from Dubai Land Department.

Your task: Write a comprehensive, data-driven property report for a home seeker based on their preferences and REAL market data.

IMPORTANT CONTEXT FROM PRE-ANALYSIS:
The user's request was analyzed and the following was identified:
- Target areas: ${analysis.targetL4Areas?.join(', ') || 'All areas'}
- Lifestyle requirements: ${analysis.lifestyleTags?.join(', ') || 'None specified'}
- Priority factors: ${analysis.priorityFactors?.join(', ') || 'General search'}
- Analysis reasoning: ${analysis.reasoning || 'General property search'}

IMPORTANT RULES:
- Use ONLY the real transaction data provided below. Do NOT make up prices or statistics.
- Format all prices in AED with proper commas (e.g., AED 1,250,000)
- Be specific about buildings, areas, and communities
- Include actual data points (transaction counts, avg prices, yields)
- Write in a professional but friendly advisory tone
- The report should be detailed and actionable
- CRITICALLY: In the "whyRecommended" field, explain how each area matches the user's SPECIFIC requirements (e.g., metro proximity, beach access, family amenities). Reference the lifestyle tags and priority factors.

REAL MARKET DATA:
${JSON.stringify(marketData, null, 2)}

Respond in JSON format with this exact structure:
{
  "reportTitle": "Your Personalized Property Report",
  "executiveSummary": "2-3 paragraphs summarizing what you found based on their needs and the data. Include specific numbers. Reference how the areas match their specific lifestyle requirements.",
  "marketOverview": {
    "totalTransactionsAnalyzed": number,
    "averagePriceInRange": "formatted price string",
    "averageRentalYield": "percentage string or N/A",
    "marketInsight": "1-2 sentences about the market in their budget range"
  },
  "recommendedAreas": [
    {
      "rank": 1,
      "areaName": "Area name from data",
      "areaNameAr": "Arabic name if available",
      "matchScore": "Excellent/Very Good/Good",
      "whyRecommended": "2-3 sentences explaining why this area fits their SPECIFIC needs (metro proximity, beach access, schools, etc.), referencing real data",
      "priceRange": {
        "buyMin": "formatted",
        "buyMax": "formatted",
        "buyAvg": "formatted",
        "rentAvgAnnual": "formatted or N/A"
      },
      "propertyTypes": ["available types"],
      "bedroomOptions": ["available options"],
      "transactionVolume": number,
      "avgPricePerSqm": "formatted",
      "serviceCharge": "formatted per sqft or N/A",
      "rentalYield": "percentage or N/A",
      "developers": ["developer names"],
      "highlights": ["Key selling point 1", "Key selling point 2", "Key selling point 3"]
    }
  ],
  "costBreakdown": {
    "purchasePrice": "estimated based on budget",
    "dldFee": "4% of purchase price",
    "agencyFee": "2% of purchase price",
    "mortgageNote": "brief note about mortgage eligibility",
    "annualServiceCharge": "estimated range",
    "totalEstimatedCost": "purchase + fees"
  },
  "investmentInsights": {
    "rentalYieldAnalysis": "paragraph about rental yields in recommended areas with real numbers",
    "capitalAppreciation": "brief note about price trends if available",
    "recommendation": "Buy, rent, or wait recommendation with reasoning"
  },
  "nextSteps": ["Actionable step 1", "Actionable step 2", "Actionable step 3", "Actionable step 4"],
  "disclaimer": "Brief professional disclaimer about the data being historical and consulting a licensed agent"
}`

        const userMessage = `
Home Seeker Profile:
- Budget: AED ${budget.toLocaleString()}
- Description: ${description}
${analysis.propertyType && analysis.propertyType !== 'null' ? `- Preferred property type: ${analysis.propertyType}` : ''}
${analysis.bedrooms && analysis.bedrooms !== 'null' ? `- Bedrooms needed: ${analysis.bedrooms === '0' ? 'Studio' : analysis.bedrooms}` : ''}
- Lifestyle preferences: ${analysis.lifestyleTags?.join(', ') || 'None specified'}
- Key priorities: ${analysis.priorityFactors?.join(', ') || 'General search'}

Please analyze the real market data and generate a comprehensive property report for this home seeker.
Recommend the top 3-5 areas that best match their needs and budget, with special emphasis on how each area fulfills their specific requirements.`

        const tAI = Date.now()
        console.log(`[FindHome] Starting OpenAI call...`)
        const completion = await openai.chat.completions.create({
          model: 'gpt-4.1-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.4,
          max_tokens: 4000,
        })
        console.log(`[FindHome] OpenAI call done in ${Date.now() - tAI}ms`)

        const responseContent = completion.choices[0]?.message?.content
        if (!responseContent) {
          throw new Error('No response from AI')
        }

        const report = JSON.parse(responseContent)
        report.chartData = marketData.chartData

        sendProgress('Fetching recent transactions for recommended areas...')
        try {
          const { db: txDb } = await connectToTransactionsDb()
          const areaNames = (report.recommendedAreas || []).map((a: { areaName: string }) => a.areaName)
          const recentTransactions: Record<string, Array<{
            building: string
            propertyType: string
            bedrooms: string
            size: string
            price: string
            date: string
          }>> = {}

          const toNum = (field: string) => ({
            $convert: { input: `$${field}`, to: 'double', onError: 0, onNull: 0 }
          })

          await Promise.all(areaNames.map(async (areaName: string) => {
            const escapedName = areaName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            const txs = await txDb.collection('sales').aggregate([
              {
                $match: {
                  $or: [
                    { bayut_leaf_location_name_en: { $regex: escapedName, $options: 'i' } },
                    { bayut_location_l4_name_en: { $regex: escapedName, $options: 'i' } },
                  ],
                },
              },
              { $addFields: { _numAmount: toNum('transaction_amount'), _numArea: toNum('builtup_area_sqm') } },
              { $match: { _numAmount: { $gt: 0 } } },
              { $sort: { registration_date: -1 } },
              { $limit: 5 },
              {
                $project: {
                  building: { $ifNull: ['$bayut_leaf_location_name_en', 'N/A'] },
                  propertyType: { $ifNull: ['$bayut_property_type', 'N/A'] },
                  bedrooms: '$beds',
                  size: '$_numArea',
                  price: '$_numAmount',
                  date: '$registration_date',
                },
              },
            ]).toArray()

            recentTransactions[areaName] = txs.map((tx: Record<string, unknown>) => ({
              building: String(tx.building || 'N/A'),
              propertyType: String(tx.propertyType || 'N/A'),
              bedrooms: tx.bedrooms === 0 || tx.bedrooms === '0' ? 'Studio' : String(tx.bedrooms || 'N/A'),
              size: tx.size ? `${Math.round(Number(tx.size))} sqm` : 'N/A',
              price: tx.price ? `AED ${Math.round(Number(tx.price)).toLocaleString()}` : 'N/A',
              date: tx.date ? String(tx.date).split('T')[0] : 'N/A',
            }))
          }))

          report.recentTransactions = recentTransactions
        } catch (txErr) {
          console.error('[FindHome] Error fetching recent transactions:', txErr)
          report.recentTransactions = {}
        }

        console.log(`[FindHome] POST TOTAL: ${Date.now() - postStart}ms`)

        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'result', data: report })}\n\n`))
      } catch (error) {
        console.error('Find Home API error:', error)
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'Failed to generate your property report. Please try again.' })}\n\n`))
      } finally {
        clearInterval(keepAlive)
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
