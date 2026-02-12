import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Location Guides - Markets Worldwide',
  description: 'Explore comprehensive property market guides for cities and neighborhoods worldwide. In-depth analysis of Dubai, UAE, and more.',
  alternates: {
    canonical: 'https://propertywiki.ai/locations',
    languages: {
      'en': 'https://propertywiki.ai/locations',
      'ar': 'https://propertywiki.ai/ar/locations',
      'x-default': 'https://propertywiki.ai/locations',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/locations',
    title: 'Property Location Guides - Markets Worldwide',
    description: 'Explore property market guides for cities and neighborhoods worldwide. In-depth analysis of Dubai, UAE.',
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
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Locations', url: 'https://propertywiki.ai/locations' },
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

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Real Estate Guide</p>
            </Link>
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina Property Guide</p>
            </Link>
            <Link href="/locations/dubai/palm-jumeirah" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Palm Jumeirah Property Guide</p>
            </Link>
            <Link href="/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Downtown Dubai Property Guide</p>
            </Link>
            <Link href="/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Business Bay Property Guide</p>
            </Link>
            <Link href="/locations/dubai/jbr" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">JBR Property Guide</p>
            </Link>
            <Link href="/locations/dubai/arabian-ranches" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Arabian Ranches Guide</p>
            </Link>
            <Link href="/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Buy Property in Dubai</p>
            </Link>
            <Link href="/guides/best-areas-families-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Areas for Families in Dubai</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
