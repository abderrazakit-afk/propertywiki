import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Definitions - Real Estate Terms',
  description: 'Glossary of Dubai real estate terms. Learn freehold, leasehold, off-plan meanings.',
  alternates: {
    canonical: 'https://propertywiki.ai/definitions',
    languages: {
      'en': 'https://propertywiki.ai/definitions',
      'ar': 'https://propertywiki.ai/ar/definitions',
      'x-default': 'https://propertywiki.ai/definitions',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/definitions',
    title: 'Property Definitions - Real Estate Terms',
    description: 'Glossary of Dubai real estate terms. Learn freehold, leasehold, off-plan meanings.',
  },
}

const definitions = [
  {
    letter: 'F',
    terms: [
      {
        title: 'Freehold Property',
        slug: 'freehold-property',
        description: 'A type of property ownership where the buyer owns both the building and the land it stands on indefinitely.',
      },
    ],
  },
  {
    letter: 'L',
    terms: [
      {
        title: 'Leasehold Property',
        slug: 'leasehold',
        description: 'A form of property tenure where the buyer owns the property for a fixed period but not the land.',
      },
    ],
  },
  {
    letter: 'O',
    terms: [
      {
        title: 'Off-Plan Property',
        slug: 'off-plan-property',
        description: 'Property purchased before construction is completed, typically at a discounted price.',
      },
    ],
  },
]

export default function DefinitionsPage() {
  const breadcrumbs = [{ name: 'Definitions', href: '/definitions' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Definitions', url: 'https://propertywiki.ai/definitions' },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Property Definitions
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive glossary of real estate terms and concepts. Clear, expert explanations 
            to help you understand the language of property.
          </p>
        </header>

        <div className="space-y-12">
          {definitions.map((section) => (
            <section key={section.letter}>
              <h2 className="text-2xl font-serif font-bold text-primary-600 mb-6 pb-2 border-b border-gray-100">
                {section.letter}
              </h2>
              <div className="grid gap-6">
                {section.terms.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/definitions/${term.slug}`}
                    className="group luxury-card p-6"
                  >
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {term.title}
                    </h3>
                    <p className="text-gray-600">{term.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
            <Link href="/definitions/leasehold" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">Understanding Leasehold Property</p>
            </Link>
            <Link href="/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Off-Plan Property?</p>
            </Link>
            <Link href="/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Buy Property in Dubai</p>
            </Link>
            <Link href="/guides/how-to-rent-property-in-uae" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Rent Property in the UAE</p>
            </Link>
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
          </div>
        </nav>
      </div>
    </>
  )
}
