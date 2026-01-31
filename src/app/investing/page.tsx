import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Investment Insights - Fundamentals & Strategy',
  description: 'Learn the fundamentals of property investment including rental yields, capital appreciation, and strategic guidance for real estate investing.',
  alternates: {
    canonical: 'https://propertywiki.ai/investing',
  },
  openGraph: {
    title: 'Property Investment Insights | PropertyWiki',
    description: 'Learn the fundamentals of property investment and real estate investing strategies.',
  },
}

export default function InvestingPage() {
  const breadcrumbs = [{ name: 'Investing', href: '/investing' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Investing', url: 'https://propertywiki.ai/investing' },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Property Investment Insights
          </h1>
          <p className="text-xl text-gray-600">
            Strategic guidance for property investors. Learn about yields, appreciation, 
            risk management, and portfolio building.
          </p>
        </header>

        <section className="mb-12">
          <div className="bg-primary-50 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">
              Investment Fundamentals
            </h2>
            <p className="text-gray-700 mb-4">
              Property investment can provide both rental income and capital appreciation. 
              Understanding the fundamentals is key to making informed decisions.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-1">Rental Yield</h3>
                <p className="text-sm text-gray-600">Annual rental income as a percentage of property value</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-1">Capital Growth</h3>
                <p className="text-sm text-gray-600">Increase in property value over time</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-1">Total Return</h3>
                <p className="text-sm text-gray-600">Combined rental income and capital appreciation</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-buy-property-in-dubai" className="luxury-card p-6 group">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                How to Buy Property in Dubai
              </h3>
              <p className="text-sm text-gray-600">Complete guide to purchasing property in Dubai as a foreigner.</p>
            </Link>
            <Link href="/locations/dubai/dubai-marina" className="luxury-card p-6 group">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                Dubai Marina Property Guide
              </h3>
              <p className="text-sm text-gray-600">Explore property prices and investment potential in Dubai Marina.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
