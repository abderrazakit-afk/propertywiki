import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Dubai Real Estate Guide - Property Market Overview',
  description: 'Complete guide to Dubai\'s property market. Explore freehold zones, investment opportunities, and neighborhood guides for foreign buyers.',
  keywords: ['Dubai real estate', 'Dubai property', 'buy property Dubai', 'Dubai freehold zones'],
  alternates: {
    canonical: 'https://propertywiki.ai/locations/dubai',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai',
      'ar': 'https://propertywiki.ai/ar/locations/dubai',
      'x-default': 'https://propertywiki.ai/locations/dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/locations/dubai',
    title: 'Dubai Real Estate Guide - Property Market Overview',
    description: 'Complete guide to Dubai\'s property market for foreign buyers and investors.',
  },
}

const areas = [
  {
    name: 'Palm Jumeirah',
    slug: 'palm-jumeirah',
    description: 'The world-famous palm-shaped island offering exclusive villas and apartments.',
    priceRange: 'AED 1.5M - AED 100M+',
    propertyTypes: ['Villas', 'Apartments', 'Penthouses'],
  },
  {
    name: 'Dubai Marina',
    slug: 'dubai-marina',
    description: 'Vibrant waterfront community with luxury high-rises, restaurants, and yacht clubs.',
    priceRange: 'AED 700K - AED 15M+',
    propertyTypes: ['Apartments', 'Penthouses'],
  },
  {
    name: 'Business Bay',
    slug: 'business-bay',
    description: 'Dubai\'s central business district along the Dubai Canal with modern high-rise towers.',
    priceRange: 'AED 600K - AED 10M+',
    propertyTypes: ['Apartments', 'Penthouses'],
  },
  {
    name: 'JBR (Jumeirah Beach Residence)',
    slug: 'jbr',
    description: 'Iconic beachfront community with The Walk promenade and direct beach access.',
    priceRange: 'AED 800K - AED 12M+',
    propertyTypes: ['Apartments', 'Penthouses', 'Duplexes'],
  },
  {
    name: 'Downtown Dubai',
    slug: 'downtown-dubai',
    description: 'The iconic heart of Dubai featuring Burj Khalifa, Dubai Mall, and premium residences.',
    priceRange: 'AED 1.5M - AED 50M+',
    propertyTypes: ['Apartments', 'Penthouses', 'Serviced Residences'],
  },
  {
    name: 'Arabian Ranches',
    slug: 'arabian-ranches',
    description: 'Family-friendly villa community with golf course, schools, and green spaces.',
    priceRange: 'AED 2M - AED 15M+',
    propertyTypes: ['Villas', 'Townhouses'],
  },
  {
    name: 'DIFC',
    slug: 'difc',
    description: 'Dubai\'s financial hub with premium apartments and proximity to Emirates Towers.',
    priceRange: 'AED 1.8M - AED 25M+',
    propertyTypes: ['Apartments', 'Penthouses'],
  },
]

export default function DubaiPage() {
  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: 'Dubai', href: '/locations/dubai' },
  ]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Locations', url: 'https://propertywiki.ai/locations' },
          { name: 'Dubai', url: 'https://propertywiki.ai/locations/dubai' },
        ])}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            United Arab Emirates
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Dubai Real Estate Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Dubai&apos;s property market is one of the most dynamic in the world, attracting investors 
            from across the globe with its tax-free environment, world-class infrastructure, 
            and diverse range of properties.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/dubai-skyline.jpg"
            alt="Dubai skyline featuring modern skyscrapers and Burj Khalifa against a clear sky, showcasing the city's world-class real estate"
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Why Invest in Dubai?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Tax-Free Returns', desc: 'No property tax, capital gains tax, or income tax on rental income' },
              { title: 'Freehold Ownership', desc: 'Foreign nationals can own property outright in designated zones' },
              { title: 'Golden Visa', desc: 'Property investment can qualify for long-term residency visas' },
              { title: 'High Rental Yields', desc: 'Average yields of 5-8% compared to 2-4% in major Western cities' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Popular Areas</h2>
          <div className="space-y-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/dubai/${area.slug}`}
                className="block luxury-card p-6 group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {area.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.propertyTypes.map((type) => (
                        <span key={type} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Price Range</span>
                    <p className="font-medium text-gray-900">{area.priceRange}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Buying Process Overview</h2>
          <p className="text-gray-700 mb-4">
            Purchasing property in Dubai is straightforward, especially in freehold zones. The process 
            typically involves:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Selecting a property and agreeing on price with the seller</li>
            <li>Signing a Memorandum of Understanding (MOU) and paying a deposit (typically 10%)</li>
            <li>Obtaining a No Objection Certificate (NOC) from the developer</li>
            <li>Completing the transfer at the Dubai Land Department (DLD)</li>
            <li>Paying the DLD transfer fee (4% of property value) and registration fees</li>
          </ol>
          <p className="mt-4">
            <Link href="/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:text-primary-700 font-medium">
              Read our complete guide to buying property in Dubai →
            </Link>
          </p>
        </section>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/palm-jumeirah" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Palm Jumeirah Property Guide</p>
            </Link>
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina Property Guide</p>
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
            <Link href="/locations/dubai/difc" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">DIFC Property Guide</p>
            </Link>
            <Link href="/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Buy Property in Dubai</p>
            </Link>
            <Link href="/guides/best-areas-families-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Areas for Families in Dubai</p>
            </Link>
            <Link href="/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Highest Rental Yield Areas</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
            <Link href="/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Off-Plan Property?</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
