import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'What is Leasehold Property? Definition & Guide',
  description: 'Learn what leasehold property means, how it differs from freehold, and key considerations for buyers. Complete guide with examples and FAQs.',
  keywords: ['leasehold property', 'leasehold definition', 'leasehold vs freehold', 'ground rent'],
  alternates: {
    canonical: 'https://propertywiki.ai/definitions/leasehold',
    languages: {
      'en': 'https://propertywiki.ai/definitions/leasehold',
      'ar': 'https://propertywiki.ai/ar/definitions/leasehold',
      'x-default': 'https://propertywiki.ai/definitions/leasehold',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/definitions/leasehold',
    title: 'What is Leasehold Property? Definition & Guide',
    description: 'Learn what leasehold property means, how it differs from freehold, and key considerations for buyers.',
    type: 'article',
  },
}

const tableOfContents = [
  { id: 'definition', title: 'Definition of Leasehold Property', level: 2 },
  { id: 'how-it-works', title: 'How Leasehold Ownership Works', level: 2 },
  { id: 'lease-length', title: 'Understanding Lease Length', level: 2 },
  { id: 'ground-rent', title: 'Ground Rent Explained', level: 2 },
  { id: 'advantages', title: 'Advantages of Leasehold', level: 2 },
  { id: 'disadvantages', title: 'Disadvantages of Leasehold', level: 2 },
]

const faqs = [
  {
    question: 'What is the difference between leasehold and freehold?',
    answer: 'With freehold, you own the property and land indefinitely. With leasehold, you own the property for a fixed period but not the land it stands on. Leasehold properties require ground rent payments to the freeholder.',
  },
  {
    question: 'How long should a leasehold lease be?',
    answer: 'Ideally, a lease should have at least 80+ years remaining. Leases under 80 years become increasingly difficult to mortgage and expensive to extend. New builds typically start with 99-999 year leases.',
  },
  {
    question: 'Can I extend my leasehold?',
    answer: 'Yes, after owning for 2 years, you have a legal right to extend your lease by 90 years for flats. The cost depends on the current lease length, property value, and ground rent.',
  },
]

const relatedArticles = [
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership and complete property rights.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai.',
  },
  {
    title: 'Off-Plan Property Explained',
    href: '/definitions/off-plan-property',
    category: 'Definition',
    description: 'Understanding pre-construction property purchases.',
  },
]

export default function LeaseholdPage() {
  const breadcrumbs = [
    { name: 'Definitions', href: '/definitions' },
    { name: 'Leasehold', href: '/definitions/leasehold' },
  ]

  const author = {
    name: 'PropertyWiki Team',
    role: 'Editorial Team',
    bio: 'The PropertyWiki editorial team brings together real estate experts, legal advisors, and market analysts to provide comprehensive property guidance across the UAE.',
  }

  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'What is Leasehold Property? Complete Definition & Guide',
          description: 'Learn what leasehold property means and how it differs from freehold.',
          url: 'https://propertywiki.ai/definitions/leasehold',
          datePublished: '2024-02-01',
          dateModified: '2024-11-20',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Definitions', url: 'https://propertywiki.ai/definitions' },
          { name: 'Leasehold', url: 'https://propertywiki.ai/definitions/leasehold' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Definition
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What is Leasehold Property?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to leasehold property ownership, including how it works,
            key considerations, and how it compares to freehold.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/leasehold.jpg"
            alt="Property contract and documents representing leasehold agreements and tenancy terms"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="definition">
            <h2>Definition of Leasehold Property</h2>
            <p>
              <strong>Leasehold property</strong> is a form of property tenure where you own the 
              building or unit for a fixed period of time, but not the land it stands on. The land 
              is owned by a freeholder (landlord), and you hold a lease that grants you the right 
              to occupy the property for a specified number of years.
            </p>
            <p>
              When you purchase a leasehold property, you are essentially buying the remaining 
              years on the lease. This is different from <Link href="/definitions/freehold-property">freehold ownership</Link>, 
              where you own both the property and the land indefinitely.
            </p>
          </section>

          <section id="how-it-works">
            <h2>How Leasehold Ownership Works</h2>
            <p>
              Under a leasehold arrangement, you purchase the right to live in or use the property 
              for the duration of the lease. This is common in areas like <Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:text-primary-700 underline">Downtown Dubai</Link> where many apartments are offered on leasehold terms. Key aspects include:
            </p>
            <ul>
              <li>You own the interior of the property but not the building structure or land</li>
              <li>You pay ground rent to the freeholder annually</li>
              <li>You may pay service charges for building maintenance</li>
              <li>The freeholder is responsible for the building&apos;s structure</li>
              <li>When the lease expires, ownership reverts to the freeholder</li>
            </ul>
          </section>

          <section id="lease-length">
            <h2>Understanding Lease Length</h2>
            <p>
              The remaining length of a lease is crucial for property value and mortgageability:
            </p>
            <ul>
              <li><strong>99+ years:</strong> Generally considered acceptable by lenders</li>
              <li><strong>80-99 years:</strong> May affect mortgage options and should consider extending</li>
              <li><strong>Under 80 years:</strong> Difficult to mortgage and expensive to extend</li>
              <li><strong>Under 60 years:</strong> Very limited mortgage options; significant value impact</li>
            </ul>
          </section>

          <section id="ground-rent">
            <h2>Ground Rent Explained</h2>
            <p>
              Ground rent is an annual fee paid by leaseholders to the freeholder. Key points:
            </p>
            <ul>
              <li>Amounts vary from nominal (£10-50/year) to substantial (£250+/year). Consider <Link href="/definitions/off-plan-property" className="text-primary-600 hover:text-primary-700 underline">off-plan properties</Link> which may offer more favourable lease terms</li>
              <li>Some leases have escalating ground rent clauses that increase over time</li>
              <li>High or escalating ground rents can affect property value and saleability</li>
              <li>Recent legislation in some countries has capped ground rent for new leases</li>
            </ul>
          </section>

          <section id="advantages">
            <h2>Advantages of Leasehold</h2>
            <ul>
              <li><strong>Lower purchase price:</strong> Generally cheaper than equivalent <Link href="/definitions/freehold-property" className="text-primary-600 hover:text-primary-700 underline">freehold</Link> properties</li>
              <li><strong>Less maintenance responsibility:</strong> Freeholder handles structural repairs</li>
              <li><strong>Prime locations:</strong> Often available in desirable areas where freehold is scarce</li>
              <li><strong>Apartment living:</strong> Most apartments are leasehold by nature</li>
            </ul>
          </section>

          <section id="disadvantages">
            <h2>Disadvantages of Leasehold</h2>
            <ul>
              <li><strong>Depreciating asset:</strong> Lease value decreases over time</li>
              <li><strong>Ongoing costs:</strong> Ground rent and <Link href="/guides/service-charges-by-area-dubai" className="text-primary-600 hover:text-primary-700 underline">service charges</Link></li>
              <li><strong>Less control:</strong> May need permission for alterations</li>
              <li><strong>Extension costs:</strong> Extending short leases can be expensive</li>
              <li><strong>Selling challenges:</strong> Short leases are harder to sell</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-02-01"
          dateModified="2024-11-20"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
            <Link href="/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Off-Plan Property?</p>
            </Link>
            <Link href="/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Downtown Dubai Property Guide</p>
            </Link>
            <Link href="/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Buy Property in Dubai</p>
            </Link>
            <Link href="/guides/how-to-rent-property-in-uae" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Rent Property in the UAE</p>
            </Link>
            <Link href="/guides/service-charges-by-area-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Service Charges by Area in Dubai</p>
            </Link>
            <Link href="/guides/dld-fees-calculator-guide" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">DLD Fees Calculator Guide</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
