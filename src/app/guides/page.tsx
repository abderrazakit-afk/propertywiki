import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Guides - Buy, Sell & Rent in UAE',
  description: 'Comprehensive guides to buying, selling, and renting property in the UAE. Expert advice on procedures, documentation, costs, and legal requirements.',
  alternates: {
    canonical: 'https://propertywiki.ai/guides',
  },
  openGraph: {
    title: 'Property Guides - Buy, Sell & Rent in UAE | PropertyWiki',
    description: 'Expert guides to buying, selling, and renting property across the UAE.',
  },
}

const guides = [
  {
    title: 'How to Buy Property in the UAE',
    slug: 'how-to-buy-property-in-uae',
    description: 'Comprehensive guide to buying property across all UAE emirates. Learn about ownership laws, procedures, costs, and residency visas.',
    readTime: '18 min read',
    category: 'Buying',
    featured: true,
  },
  {
    title: 'How to Buy Property in Dubai',
    slug: 'how-to-buy-property-in-dubai',
    description: 'Complete step-by-step guide to purchasing property in Dubai as a foreigner, including visa requirements, freehold zones, and legal processes.',
    readTime: '15 min read',
    category: 'Buying',
  },
  {
    title: 'How to Sell Property in the UAE',
    slug: 'how-to-sell-property-in-uae',
    description: 'Complete seller\'s guide covering documentation, NOC process, DLD transfer, pricing strategy, and timeline for selling property in the UAE.',
    readTime: '14 min read',
    category: 'Selling',
    featured: true,
  },
  {
    title: 'How to Rent Property in the UAE',
    slug: 'how-to-rent-property-in-uae',
    description: 'Everything you need to know about renting in the UAE: Ejari registration, tenancy contracts, tenant rights, costs, and utilities setup.',
    readTime: '16 min read',
    category: 'Renting',
    featured: true,
  },
  {
    title: 'DEWA Electricity & Water Guide',
    slug: 'dewa-electricity-water-guide',
    description: 'Complete guide to setting up DEWA services in Dubai. Learn about registration, deposits, documents required, and bill payment options.',
    readTime: '10 min read',
    category: 'Homeowner',
  },
  {
    title: 'AC Maintenance in Dubai',
    slug: 'ac-maintenance-dubai',
    description: 'Essential guide to AC maintenance in Dubai. Types of systems, maintenance tips, finding technicians, and reducing energy bills.',
    readTime: '12 min read',
    category: 'Homeowner',
  },
  {
    title: 'Home Cleaning Services in Dubai',
    slug: 'home-cleaning-services-dubai',
    description: 'Complete guide to finding cleaning services in Dubai. Popular companies, pricing, hiring maids, and legal requirements.',
    readTime: '10 min read',
    category: 'Homeowner',
  },
  {
    title: 'Building Facilities & Amenities',
    slug: 'building-facilities-amenities-dubai',
    description: 'Understanding building amenities in Dubai. Service charges, gym & pool access, parking, security, and community rules.',
    readTime: '11 min read',
    category: 'Homeowner',
  },
]

export default function GuidesPage() {
  const breadcrumbs = [{ name: 'Guides', href: '/guides' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Property Guides
          </h1>
          <p className="text-xl text-gray-600">
            Expert guides to help you navigate buying, selling, and renting property in the UAE.
            Step-by-step procedures, costs, and legal requirements explained.
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
