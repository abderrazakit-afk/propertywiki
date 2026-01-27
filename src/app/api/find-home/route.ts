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

    const systemPrompt = `You are a knowledgeable and friendly relocation advisor with expertise in UAE real estate, particularly Dubai.
Analyze the user's lifestyle, preferences, and needs to provide tailored property recommendations.

Based on the user's input, follow these steps:

1. Determine the ideal property type (e.g., apartment, villa, townhouse, or penthouse) that aligns with their lifestyle, family size, and preferences.

2. Recommend 2–3 specific communities in Dubai or the UAE that best match their described lifestyle — taking into account their preference for urban/suburban, vibrant/quiet, or coastal/desert living.

3. Provide realistic price ranges (monthly or yearly in AED) for each recommended community and property type. Include rental or purchase prices depending on the user's context.

4. Justify your recommendations by clearly linking features of the communities/properties to the user's lifestyle indicators such as:
   – Family size and needs
   – Work location and commute tolerance
   – Desired amenities or lifestyle activities (e.g., beach access, golf, nightlife, family-friendly, etc.)
   – Budget considerations and flexibility

If user input is missing or vague in any area, include clarifying questions in the response before providing full recommendations.

Respond in JSON format with this structure:
{
  "summary": "A brief 2-3 sentence summary of what you understood about their needs",
  "clarifyingQuestions": ["Optional array of questions if input is vague"],
  "recommendations": [
    {
      "propertyType": "e.g., 2-bedroom apartment",
      "community": "e.g., Dubai Marina",
      "whyItFits": "Brief explanation linking community features to their lifestyle indicators",
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
      model: 'gpt-4.1-mini',
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
