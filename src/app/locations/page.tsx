import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Location Guides - Property Markets Worldwide',
  description: 'Explore comprehensive property market guides for cities and neighborhoods worldwide. In-depth analysis of Dubai, UAE, and more.',
  openGraph: {
    title: 'Location Guides - Property Markets Worldwide | PropertyWiki',
    description: 'Explore comprehensive property market guides for cities and neighborhoods worldwide.',
  },
}

const locations = [
  {
    country: 'United Arab Emirates',
    cities: [
      {
        name: 'Dubai',
        slug: 'dubai',
        description: 'The UAE\'s commercial hub and a global real estate hotspot with world-class developments.',
        areas: [
          { name: 'Dubai Marina', slug: 'dubai-marina' },
          { name: 'Downtown Dubai', slug: 'downtown-dubai' },
          { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
        ],
      },
    ],
  },
]

export default function LocationsPage() {
  const breadcrumbs = [{ name: 'Locations', href: '/locations' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Locations', url: 'https://propertywiki.com/locations' },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Location Guides
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive guides to property markets around the world. Explore cities, neighborhoods, 
            and discover investment opportunities.
          </p>
        </header>

        <div className="space-y-12">
          {locations.map((region) => (
            <section key={region.country}>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                {region.country}
              </h2>
              <div className="grid gap-6">
                {region.cities.map((city) => (
                  <div key={city.slug} className="luxury-card p-6">
                    <Link href={`/locations/${city.slug}`}>
                      <h3 className="text-xl font-medium text-gray-900 hover:text-primary-600 transition-colors mb-2">
                        {city.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{city.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {city.areas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/locations/${city.slug}/${area.slug}`}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
