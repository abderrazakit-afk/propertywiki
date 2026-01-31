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
