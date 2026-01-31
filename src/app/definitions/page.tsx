import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Definitions - Real Estate Glossary',
  description: 'Comprehensive glossary of real estate terms and definitions. Learn the meaning of property terminology from freehold to off-plan and everything in between.',
  alternates: {
    canonical: 'https://propertywiki.ai/definitions',
  },
  openGraph: {
    title: 'Property Definitions - Real Estate Glossary | PropertyWiki',
    description: 'Comprehensive glossary of real estate terms and definitions.',
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
      </div>
    </>
  )
}
