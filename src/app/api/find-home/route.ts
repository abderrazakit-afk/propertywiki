import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { connectToDatabase, connectToTransactionsDb, incrementEmailUsage, getEmailUsageToday, DAILY_LIMIT } from '@/lib/mongodb'

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

async function queryMarketData(budget: number, propertyType?: string, bedrooms?: string) {
  const { db } = await connectToTransactionsDb()

  const budgetMin = budget * 0.5
  const budgetMax = budget * 1.5

  const matchStage: Record<string, unknown> = {
    transaction_amount: { $gte: budgetMin, $lte: budgetMax },
    bayut_leaf_location_name_en: { $ne: '' },
  }

  if (propertyType) {
    matchStage.bayut_property_type = propertyType
  }

  if (bedrooms) {
    matchStage.beds = bedrooms
  }

  const salesPipeline = [
    { $match: matchStage },
    {
      $group: {
        _id: {
          area: '$bayut_leaf_location_name_en',
          areaAr: '$bayut_leaf_location_name_ar',
          l4: '$bayut_location_l4_name_en',
        },
        avgPrice: { $avg: '$transaction_amount' },
        minPrice: { $min: '$transaction_amount' },
        maxPrice: { $max: '$transaction_amount' },
        totalTransactions: { $sum: 1 },
        avgPricePerSqm: { $avg: '$transaction_per_sqm_amount' },
        avgSize: { $avg: '$builtup_area_sqm' },
        propertyTypes: { $addToSet: '$bayut_property_type' },
        bedrooms: { $addToSet: '$beds' },
        avgServiceCharge: { $avg: '$service_charge_sqft_amount' },
        avgRentalYield: { $avg: '$current_estimated_rental_yield' },
        developers: { $addToSet: '$developer_name_en' },
      },
    },
    { $match: { totalTransactions: { $gte: 3 } } },
    { $sort: { totalTransactions: -1 as const } },
    { $limit: 15 },
  ]

  const salesData = await db.collection('sales').aggregate(salesPipeline).toArray()

  const topAreas = salesData.map((d) => d._id.l4 || d._id.area).filter(Boolean)

  const rentalMatchStage: Record<string, unknown> = {
    bayut_location_l4_name_en: { $in: topAreas },
    transaction_amount: { $gt: 0 },
  }

  if (bedrooms) {
    rentalMatchStage.beds = bedrooms
  }

  const rentalPipeline = [
    { $match: rentalMatchStage },
    {
      $group: {
        _id: {
          area: '$bayut_leaf_location_name_en',
          areaAr: '$bayut_leaf_location_name_ar',
        },
        avgRent: { $avg: '$transaction_amount' },
        minRent: { $min: '$transaction_amount' },
        maxRent: { $max: '$transaction_amount' },
        totalTransactions: { $sum: 1 },
        avgMonthlyRent: { $avg: '$contract_monthly_amount' },
        bedrooms: { $addToSet: '$beds' },
        propertyTypes: { $addToSet: '$bayut_property_type' },
      },
    },
    { $match: { totalTransactions: { $gte: 3 } } },
    { $sort: { totalTransactions: -1 as const } },
    { $limit: 15 },
  ]

  const rentalData = await db.collection('rentals').aggregate(rentalPipeline).toArray()

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
    bedrooms: d.bedrooms.filter(Boolean).sort(),
    buildings: [],
    avgServiceCharge: d.avgServiceCharge ? Math.round(d.avgServiceCharge * 100) / 100 : null,
    avgRentalYield: d.avgRentalYield ? Math.round(d.avgRentalYield * 100) / 100 : null,
    developers: d.developers.filter(Boolean).slice(0, 5),
  }))

  const rentalStats: RentalStats[] = rentalData.map((d) => ({
    area: d._id.area,
    areaAr: d._id.areaAr || '',
    avgRent: Math.round(d.avgRent),
    minRent: Math.round(d.minRent),
    maxRent: Math.round(d.maxRent),
    totalTransactions: d.totalTransactions,
    avgMonthlyRent: Math.round(d.avgMonthlyRent || 0),
    bedrooms: d.bedrooms.filter(Boolean).sort(),
    propertyTypes: d.propertyTypes.filter(Boolean),
  }))

  const overallStats = await db.collection('sales').aggregate([
    { $match: { transaction_amount: { $gte: budgetMin, $lte: budgetMax } } },
    {
      $group: {
        _id: null,
        totalTransactions: { $sum: 1 },
        avgPrice: { $avg: '$transaction_amount' },
        avgYield: { $avg: '$current_estimated_rental_yield' },
      },
    },
  ]).toArray()

  return {
    salesByArea: areaStats,
    rentalsByArea: rentalStats,
    marketOverview: overallStats[0] || { totalTransactions: 0, avgPrice: 0, avgYield: 0 },
  }
}

function parseUserInput(description: string, budget: number) {
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

  return { propertyType, bedrooms, budget }
}

export async function POST(request: NextRequest) {
  try {
    const { description, budget, email } = await request.json()

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

    if (!email) {
      return NextResponse.json(
        { error: 'Email verification is required.' },
        { status: 401 }
      )
    }

    const { db: appDb } = await connectToDatabase()
    const verification = await appDb.collection('email_verifications').findOne({
      email: email.toLowerCase(),
      verified: true,
    })

    if (!verification) {
      return NextResponse.json(
        { error: 'Please verify your email first.' },
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

    const { propertyType, bedrooms } = parseUserInput(description, budget)
    const marketData = await queryMarketData(budget, propertyType, bedrooms)

    const systemPrompt = `You are PropertyWiki's expert real estate analyst for the UAE market. You have access to REAL transaction data from Dubai Land Department.

Your task: Write a comprehensive, data-driven property report for a home seeker based on their preferences and REAL market data.

IMPORTANT RULES:
- Use ONLY the real transaction data provided below. Do NOT make up prices or statistics.
- Format all prices in AED with proper commas (e.g., AED 1,250,000)
- Be specific about buildings, areas, and communities
- Include actual data points (transaction counts, avg prices, yields)
- Write in a professional but friendly advisory tone
- The report should be detailed and actionable

REAL MARKET DATA:
${JSON.stringify(marketData, null, 2)}

Respond in JSON format with this exact structure:
{
  "reportTitle": "Your Personalized Property Report",
  "executiveSummary": "2-3 paragraphs summarizing what you found based on their needs and the data. Include specific numbers.",
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
      "whyRecommended": "2-3 sentences explaining why this area fits their needs, referencing real data",
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
${propertyType ? `- Preferred property type: ${propertyType}` : ''}
${bedrooms ? `- Bedrooms needed: ${bedrooms === '0' ? 'Studio' : bedrooms}` : ''}

Please analyze the real market data and generate a comprehensive property report for this home seeker.
Recommend the top 3-5 areas that best match their needs and budget.`

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

    const responseContent = completion.choices[0]?.message?.content
    if (!responseContent) {
      throw new Error('No response from AI')
    }

    const report = JSON.parse(responseContent)
    return NextResponse.json(report)
  } catch (error) {
    console.error('Find Home API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate your property report. Please try again.' },
      { status: 500 }
    )
  }
}
