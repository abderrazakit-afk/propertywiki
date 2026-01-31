import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'propertywiki-indexnow-key'

const allPages = [
  '',
  '/about',
  '/contact',
  '/privacy',
  '/editorial-policy',
  '/definitions',
  '/definitions/freehold-property',
  '/definitions/leasehold',
  '/definitions/off-plan-property',
  '/locations',
  '/locations/dubai',
  '/locations/dubai/dubai-marina',
  '/locations/dubai/downtown-dubai',
  '/locations/dubai/palm-jumeirah',
  '/locations/dubai/business-bay',
  '/locations/dubai/jbr',
  '/locations/dubai/arabian-ranches',
  '/locations/dubai/difc',
  '/guides',
  '/guides/how-to-buy-property-in-dubai',
  '/guides/how-to-buy-property-in-uae',
  '/guides/how-to-sell-property-in-uae',
  '/guides/how-to-rent-property-in-uae',
  '/guides/dewa-electricity-water-guide',
  '/guides/ac-maintenance-dubai',
  '/guides/home-cleaning-services-dubai',
  '/guides/building-facilities-amenities-dubai',
  '/blog',
  '/blog/dubai-market-outlook-2025',
  '/blog/golden-visa-changes-2025',
  '/blog/off-plan-investment-risks',
  '/investing',
  '/find-home',
  '/ar',
  '/ar/about',
  '/ar/contact',
  '/ar/privacy',
  '/ar/editorial-policy',
  '/ar/definitions',
  '/ar/definitions/freehold-property',
  '/ar/definitions/leasehold',
  '/ar/definitions/off-plan-property',
  '/ar/locations',
  '/ar/locations/dubai',
  '/ar/locations/dubai/dubai-marina',
  '/ar/locations/dubai/downtown-dubai',
  '/ar/locations/dubai/palm-jumeirah',
  '/ar/locations/dubai/business-bay',
  '/ar/locations/dubai/jbr',
  '/ar/locations/dubai/arabian-ranches',
  '/ar/locations/dubai/difc',
  '/ar/guides',
  '/ar/guides/how-to-buy-property-in-dubai',
  '/ar/guides/how-to-buy-property-in-uae',
  '/ar/guides/how-to-sell-property-in-uae',
  '/ar/guides/how-to-rent-property-in-uae',
  '/ar/guides/dewa-electricity-water-guide',
  '/ar/guides/ac-maintenance-dubai',
  '/ar/guides/home-cleaning-services-dubai',
  '/ar/guides/building-facilities-amenities-dubai',
  '/ar/blog',
  '/ar/blog/dubai-market-outlook-2025',
  '/ar/blog/golden-visa-changes-2025',
  '/ar/blog/off-plan-investment-risks',
  '/ar/investing',
  '/ar/find-home',
]

export async function POST(request: NextRequest) {
  try {
    const baseUrl = 'https://propertywiki.ai'
    const urlList = allPages.map(path => `${baseUrl}${path}`)

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'propertywiki.ai',
        key: INDEXNOW_KEY,
        keyLocation: `${baseUrl}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    })

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: `Submitted ${urlList.length} URLs to IndexNow`,
        urls: urlList.length,
      })
    } else {
      const errorText = await response.text()
      return NextResponse.json({ 
        success: false, 
        error: errorText,
        status: response.status,
      }, { status: response.status })
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API endpoint. Use POST to submit URLs.',
    totalPages: allPages.length,
  })
}
