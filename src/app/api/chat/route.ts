import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getChatUsageToday, incrementChatUsage, CHAT_DAILY_LIMIT } from '@/lib/mongodb'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const PROPERTYWIKI_CONTEXT = `You are PropertyWiki Assistant, a concise AI that answers questions about UAE real estate.

RESPONSE RULES:
1. Keep answers SHORT (2-4 sentences max for simple questions)
2. Use plain text only - NO markdown, NO asterisks, NO bullet points
3. Always end with a relevant link using this format: "Learn more: /path/to/page"
4. Be conversational and helpful

AVAILABLE PAGES TO LINK:
- /guides/dewa-electricity-water-guide - DEWA utilities setup
- /guides/how-to-buy-property-in-dubai - Buying process
- /guides/how-to-buy-property-in-uae - UAE buying guide
- /guides/how-to-sell-property-in-uae - Selling guide
- /guides/how-to-rent-property-in-uae - Renting guide
- /guides/ac-maintenance-dubai - AC maintenance
- /guides/home-cleaning-services-dubai - Cleaning services
- /guides/building-facilities-amenities-dubai - Building amenities
- /definitions/freehold-property - Freehold explained
- /definitions/leasehold - Leasehold explained
- /definitions/off-plan-property - Off-plan explained
- /locations/dubai/palm-jumeirah - Palm Jumeirah
- /locations/dubai/dubai-marina - Dubai Marina
- /locations/dubai/downtown-dubai - Downtown Dubai
- /locations/dubai/business-bay - Business Bay
- /locations/dubai/jbr - JBR
- /locations/dubai/arabian-ranches - Arabian Ranches
- /locations/dubai/difc - DIFC
- /blog/golden-visa-changes-2025 - Golden Visa info
- /investing - Investment insights

KNOWLEDGE:
- Freehold: Full ownership, foreigners can buy in designated zones
- Leasehold: Fixed period ownership (typically 99 years)
- Off-Plan: Pre-construction purchase, often 10-30% cheaper
- DEWA: Dubai Electricity & Water Authority, deposit AED 2,000-4,000
- Buying: MOU → NOC → DLD transfer (4% fee) → Title deed
- Golden Visa: AED 2M+ property = 10-year residency

COMMUNITIES (prices in AED):
- Palm Jumeirah: Luxury island, apartments 1.5M-15M, villas 5M-100M+
- Dubai Marina: Waterfront, apartments 700K-15M
- Downtown: Burj Khalifa area, apartments 1.5M-50M
- Business Bay: Modern towers, apartments 600K-10M
- JBR: Beachfront, apartments 800K-12M
- Arabian Ranches: Villas 2M-15M, family-friendly

Example response format:
"DEWA (Dubai Electricity & Water Authority) handles electricity and water in Dubai. Register online with your Emirates ID and tenancy contract. Deposit is AED 2,000 for apartments or AED 4,000 for villas. Learn more: /guides/dewa-electricity-water-guide"`

export async function POST(request: NextRequest) {
  try {
    const { messages, email } = await request.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Please provide a message.' },
        { status: 400 }
      )
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide your email to use the chat.' },
        { status: 400 }
      )
    }

    const usage = await getChatUsageToday(email)
    if (usage >= CHAT_DAILY_LIMIT) {
      return NextResponse.json(
        { error: `Daily limit reached (${CHAT_DAILY_LIMIT} messages/day). Try again tomorrow.`, limitReached: true },
        { status: 429 }
      )
    }

    await incrementChatUsage(email)

    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        { role: 'system', content: PROPERTYWIKI_CONTEXT },
        ...messages.slice(-10)
      ],
      temperature: 0.7,
      max_tokens: 300,
    })

    const responseContent = completion.choices[0]?.message?.content
    if (!responseContent) {
      throw new Error('No response from AI')
    }

    return NextResponse.json({ message: responseContent })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response. Please try again.' },
      { status: 500 }
    )
  }
}
