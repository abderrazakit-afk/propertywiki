import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Buying Guides - Step-by-Step Resources',
  description: 'Comprehensive property buying guides covering everything from first-time purchases to international real estate investment. Expert advice and step-by-step instructions.',
  openGraph: {
    title: 'Property Buying Guides - Step-by-Step Resources | PropertyWiki',
    description: 'Comprehensive property buying guides with expert advice and step-by-step instructions.',
  },
}

const guides = [
  {
    title: 'How to Buy Property in Dubai',
    slug: 'how-to-buy-property-in-dubai',
    description: 'Complete step-by-step guide to purchasing property in Dubai as a foreigner, including visa requirements, freehold zones, and legal processes.',
    readTime: '15 min read',
    category: 'International',
  },
  {
    title: 'First-Time Buyer\'s Checklist',
    slug: 'first-time-buyer-checklist',
    description: 'Essential checklist for first-time property buyers covering budgeting, mortgage preparation, and the purchase process.',
    readTime: '10 min read',
    category: 'Beginner',
  },
  {
    title: 'Property Inspection Guide',
    slug: 'property-inspection-guide',
    description: 'What to look for when inspecting a property, red flags to avoid, and questions to ask before making an offer.',
    readTime: '12 min read',
    category: 'Practical',
  },
]

export default function GuidesPage() {
  const breadcrumbs = [{ name: 'Guides', href: '/guides' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Guides', url: 'https://propertywiki.com/guides' },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Property Buying Guides
          </h1>
          <p className="text-xl text-gray-600">
            Expert guides to help you navigate the property buying process with confidence. 
            From first-time purchases to international investments.
          </p>
        </header>

        <div className="space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block luxury-card p-6 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{guide.readTime}</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {guide.title}
                  </h2>
                  <p className="text-gray-600">{guide.description}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 mt-1 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
