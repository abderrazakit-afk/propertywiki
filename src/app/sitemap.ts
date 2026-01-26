import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://propertywiki.ai'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/definitions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/investing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ]

  const definitions = [
    { slug: 'freehold-property', lastModified: '2024-12-10' },
    { slug: 'leasehold', lastModified: '2024-11-20' },
    { slug: 'off-plan-property', lastModified: '2024-11-15' },
  ]

  const locations = [
    { path: 'dubai', lastModified: '2024-12-15' },
    { path: 'dubai/dubai-marina', lastModified: '2024-12-15' },
    { path: 'dubai/downtown-dubai', lastModified: '2024-12-10' },
    { path: 'dubai/palm-jumeirah', lastModified: '2024-12-10' },
  ]

  const guides = [
    { slug: 'how-to-buy-property-in-dubai', lastModified: '2024-12-20' },
    { slug: 'how-to-buy-property-in-uae', lastModified: '2024-12-20' },
    { slug: 'how-to-sell-property-in-uae', lastModified: '2024-12-20' },
    { slug: 'how-to-rent-property-in-uae', lastModified: '2024-12-20' },
  ]

  const definitionUrls = definitions.map((def) => ({
    url: `${baseUrl}/definitions/${def.slug}`,
    lastModified: new Date(def.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const locationUrls = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.path}`,
    lastModified: new Date(loc.lastModified),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const guideUrls = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...definitionUrls, ...locationUrls, ...guideUrls]
}
