import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Investment Insights - Strategy Guide',
  description: 'Learn the fundamentals of property investment including rental yields, capital appreciation, and strategic guidance for real estate investing.',
  alternates: {
    canonical: 'https://propertywiki.ai/investing',
    languages: {
      'en': 'https://propertywiki.ai/investing',
      'ar': 'https://propertywiki.ai/ar/investing',
      'x-default': 'https://propertywiki.ai/investing',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/investing',
    title: 'Property Investment Insights - Strategy Guide',
    description: 'Learn the fundamentals of property investment and real estate investing strategies.',
  },
}

const investingArticles = [
  {
    title: 'Top 10 Investment Areas in Dubai 2026',
    slug: 'top-10-investment-areas-dubai',
    description: 'Data-driven ranking of the best areas to invest in Dubai property. Yields, capital growth, and overall scores.',
  },
  {
    title: 'Dubai Investment Scorecard 2026',
    slug: 'dubai-investment-scorecard-2026',
    description: 'Comprehensive scorecard rating Dubai communities across yield, growth, liquidity, and risk factors.',
  },
  {
    title: 'Capital Growth Ranking by Area',
    slug: 'capital-growth-ranking-dubai',
    description: 'Which Dubai areas have seen the strongest price appreciation? Historical and projected capital growth data.',
  },
  {
    title: 'Rental Demand Ranking by Area',
    slug: 'rental-demand-ranking-dubai',
    description: 'Ranking Dubai areas by rental demand strength. Occupancy rates, tenant pool size, and rental velocity.',
  },
]

const relatedGuides = [
  {
    title: 'Highest Rental Yield Areas in Dubai',
    href: '/guides/highest-rental-yield-areas-dubai',
    description: 'Discover the areas offering the highest rental yields with data-driven analysis.',
  },
  {
    title: 'Best Areas for 8%+ ROI in Dubai',
    href: '/guides/best-areas-8-percent-roi-dubai',
    description: 'Communities consistently delivering 8% or higher rental returns.',
  },
  {
    title: 'Off-Plan vs Ready Property: ROI Comparison',
    href: '/guides/off-plan-vs-ready-property-roi',
    description: 'Compare returns between off-plan and ready properties with real market data.',
  },
  {
    title: 'Business Bay vs Downtown Dubai',
    href: '/guides/business-bay-vs-downtown-dubai',
    description: 'Detailed investment comparison of two of Dubai\'s most popular areas.',
  },
  {
    title: 'Best Areas Under AED 1M with Good ROI',
    href: '/guides/best-areas-under-1m-good-roi',
    description: 'Top areas where you can buy under AED 1 million and still achieve strong returns.',
  },
  {
    title: 'Service Charges by Area in Dubai',
    href: '/guides/service-charges-by-area-dubai',
    description: 'Compare service charges across communities to understand true net yields.',
  },
]

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

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Investment Analysis & Rankings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {investingArticles.map((article) => (
              <Link key={article.slug} href={`/investing/${article.slug}`} className="luxury-card p-6 group">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Related Investment Guides</h2>
          <div className="space-y-4">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="block luxury-card p-5 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 mt-1 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
