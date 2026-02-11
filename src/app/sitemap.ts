import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://propertywiki.ai'
  const lastModified = new Date()

  const pages = [
    { path: '', priority: 1, changeFreq: 'weekly' as const },
    { path: '/definitions', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/locations', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/guides', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/investing', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/find-home', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/about', priority: 0.5, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.5, changeFreq: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/editorial-policy', priority: 0.4, changeFreq: 'yearly' as const },
  ]

  const definitions = [
    'freehold-property',
    'leasehold',
    'off-plan-property',
  ]

  const locations = [
    'dubai',
    'dubai/dubai-marina',
    'dubai/downtown-dubai',
    'dubai/palm-jumeirah',
    'dubai/business-bay',
    'dubai/jbr',
    'dubai/arabian-ranches',
    'dubai/difc',
  ]

  const guides = [
    'how-to-buy-property-in-dubai',
    'how-to-buy-property-in-uae',
    'how-to-sell-property-in-uae',
    'how-to-rent-property-in-uae',
    'dewa-electricity-water-guide',
    'ac-maintenance-dubai',
    'home-cleaning-services-dubai',
    'building-facilities-amenities-dubai',
    'highest-rental-yield-areas-dubai',
    'best-areas-8-percent-roi-dubai',
    'jvc-vs-dubai-hills-investment',
    'best-areas-under-1m-good-roi',
    'studio-rental-yield-by-area',
    'best-areas-buy-property-under-500k',
    'where-to-buy-under-1-million-dubai',
    'cheapest-freehold-areas-dubai',
    'affordable-areas-near-metro-dubai',
    'best-areas-first-time-buyers-dubai',
    'best-areas-near-dubai-metro',
    'walking-distance-metro-communities',
    'property-near-red-line-metro-dubai',
    'car-free-living-areas-dubai',
    'best-off-plan-projects-under-1m',
    'off-plan-vs-ready-property-roi',
    'safest-off-plan-areas-dubai',
    'payment-plan-communities-dubai',
    '1-percent-payment-plan-dubai',
    'best-areas-families-dubai',
    'best-areas-near-schools-dubai',
    'gated-communities-dubai',
    'villa-communities-under-2m-dubai',
    'quiet-residential-areas-dubai',
    'best-areas-airbnb-dubai',
    'short-term-rental-roi-dubai',
    'airbnb-dubai-marina-guide',
    'short-term-rental-license-dubai',
    'highest-nightly-rate-areas-dubai',
    'service-charges-by-area-dubai',
    'hidden-costs-buying-property-dubai',
    'dld-fees-calculator-guide',
    'maintenance-cost-by-community-dubai',
    'dewa-cooling-charges-comparison',
    'business-bay-vs-downtown-dubai',
    'dubai-marina-vs-jbr',
    'palm-jumeirah-vs-emirates-hills',
    'abu-dhabi-vs-dubai-investment',
    'property-jvc-investment-guide',
    'dubai-silicon-oasis-investment',
    'al-furjan-investment-guide',
    'arabian-ranches-pros-cons',
  ]

  const investingPages = [
    'top-10-investment-areas-dubai',
    'dubai-investment-scorecard-2026',
    'capital-growth-ranking-dubai',
    'rental-demand-ranking-dubai',
  ]

  const blogPosts = [
    'dubai-market-outlook-2025',
    'golden-visa-changes-2025',
    'off-plan-investment-risks',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  pages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          ar: `${baseUrl}/ar${page.path}`,
        },
      },
    })

    sitemapEntries.push({
      url: `${baseUrl}/ar${page.path}`,
      lastModified,
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          ar: `${baseUrl}/ar${page.path}`,
        },
      },
    })
  })

  definitions.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/definitions/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/definitions/${slug}`,
          ar: `${baseUrl}/ar/definitions/${slug}`,
        },
      },
    })

    sitemapEntries.push({
      url: `${baseUrl}/ar/definitions/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/definitions/${slug}`,
          ar: `${baseUrl}/ar/definitions/${slug}`,
        },
      },
    })
  })

  locations.forEach((path) => {
    sitemapEntries.push({
      url: `${baseUrl}/locations/${path}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/locations/${path}`,
          ar: `${baseUrl}/ar/locations/${path}`,
        },
      },
    })

    sitemapEntries.push({
      url: `${baseUrl}/ar/locations/${path}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/locations/${path}`,
          ar: `${baseUrl}/ar/locations/${path}`,
        },
      },
    })
  })

  guides.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/guides/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/${slug}`,
          ar: `${baseUrl}/ar/guides/${slug}`,
        },
      },
    })

    sitemapEntries.push({
      url: `${baseUrl}/ar/guides/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/${slug}`,
          ar: `${baseUrl}/ar/guides/${slug}`,
        },
      },
    })
  })

  investingPages.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/investing/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  blogPosts.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/blog/${slug}`,
          ar: `${baseUrl}/ar/blog/${slug}`,
        },
      },
    })

    sitemapEntries.push({
      url: `${baseUrl}/ar/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/blog/${slug}`,
          ar: `${baseUrl}/ar/blog/${slug}`,
        },
      },
    })
  })

  return sitemapEntries
}
