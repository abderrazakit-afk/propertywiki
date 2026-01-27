import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { description } = await request.json()

    if (!description || description.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a more detailed description of your ideal home and lifestyle.' },
        { status: 400 }
      )
    }

    const systemPrompt = `You are a smart relocation advisor specializing in UAE real estate. Analyze the user's lifestyle description and provide personalized property recommendations.

Based on the user's input, you will:
1. Identify the most suitable type of property (apartment, villa, townhouse, penthouse)
2. Recommend specific communities in Dubai/UAE that match their lifestyle
3. Provide realistic price ranges in AED for each recommended property type and community
4. Consider factors like: family size, work location, commute preferences, lifestyle activities, budget indicators, community preferences (urban/suburban/quiet/vibrant)

Respond in JSON format with this structure:
{
  "summary": "A brief 2-3 sentence summary of what you understood about their needs",
  "recommendations": [
    {
      "propertyType": "e.g., 2-bedroom apartment",
      "community": "e.g., Dubai Marina",
      "whyItFits": "Brief explanation of why this matches their lifestyle",
      "priceRange": {
        "rentPerYear": "e.g., AED 80,000 - 120,000",
        "buyPrice": "e.g., AED 1.2M - 1.8M"
      },
      "highlights": ["Close to metro", "Walkable area", "Beach access"]
    }
  ],
  "additionalTips": "Any relevant advice for their property search"
}`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: description }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
      max_tokens: 1500,
    })

    const responseContent = completion.choices[0]?.message?.content
    if (!responseContent) {
      throw new Error('No response from AI')
    }

    const recommendations = JSON.parse(responseContent)
    return NextResponse.json(recommendations)

  } catch (error) {
    console.error('Find Home API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate recommendations. Please try again.' },
      { status: 500 }
    )
  }
}
