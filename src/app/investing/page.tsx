import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Investment Guides - Strategies & Insights',
  description: 'Expert property investment guides covering rental yields, capital appreciation, portfolio diversification, and market analysis for smart investment decisions.',
  openGraph: {
    title: 'Property Investment Guides - Strategies & Insights | PropertyWiki',
    description: 'Expert property investment guides for smart real estate decisions.',
  },
}

const articles = [
  {
    title: 'Understanding Rental Yield',
    slug: 'rental-yield-explained',
    description: 'Learn how to calculate and interpret rental yields, and what constitutes a good yield in different markets.',
    readTime: '8 min read',
  },
  {
    title: 'Capital Appreciation Guide',
    slug: 'capital-appreciation',
    description: 'Understanding property value growth and the factors that drive capital appreciation in real estate.',
    readTime: '10 min read',
  },
  {
    title: 'Diversifying Your Property Portfolio',
    slug: 'portfolio-diversification',
    description: 'Strategies for building a balanced property investment portfolio across different markets and property types.',
    readTime: '12 min read',
  },
]

export default function InvestingPage() {
  const breadcrumbs = [{ name: 'Investing', href: '/investing' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Investing', url: 'https://propertywiki.com/investing' },
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
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Investment Articles</h2>
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/investing/${article.slug}`}
                className="block luxury-card p-6 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 mb-2 block">{article.readTime}</span>
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600">{article.description}</p>
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
