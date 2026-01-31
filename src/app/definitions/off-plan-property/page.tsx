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
  title: 'What is Off-Plan Property? Risks & Benefits Guide',
  description: 'Learn what off-plan property means, the benefits and risks of buying pre-construction, and how to evaluate off-plan investments.',
  keywords: ['off-plan property', 'pre-construction', 'off-plan investment', 'property development'],
  alternates: {
    canonical: 'https://propertywiki.ai/definitions/off-plan-property',
    languages: {
      'en': 'https://propertywiki.ai/definitions/off-plan-property',
      'ar': 'https://propertywiki.ai/ar/definitions/off-plan-property',
      'x-default': 'https://propertywiki.ai/definitions/off-plan-property',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/definitions/off-plan-property',
    title: 'What is Off-Plan Property? Risks & Benefits Guide',
    description: 'Learn what off-plan property means, the benefits and risks of buying pre-construction.',
    type: 'article',
  },
}

const tableOfContents = [
  { id: 'definition', title: 'Definition of Off-Plan Property', level: 2 },
  { id: 'how-it-works', title: 'How Off-Plan Purchases Work', level: 2 },
  { id: 'benefits', title: 'Benefits of Buying Off-Plan', level: 2 },
  { id: 'risks', title: 'Risks and Considerations', level: 2 },
  { id: 'due-diligence', title: 'Due Diligence Checklist', level: 2 },
]

const faqs = [
  {
    question: 'Is buying off-plan risky?',
    answer: 'Off-plan purchases carry some risk as you are buying a property that does not yet exist. Risks include construction delays, developer insolvency, and the finished property differing from plans. However, reputable developers and proper due diligence can mitigate these risks.',
  },
  {
    question: 'Can I get a mortgage for off-plan property?',
    answer: 'Yes, many banks offer mortgages for off-plan purchases, though the loan is typically released at completion. During construction, you make staged payments according to the payment plan.',
  },
  {
    question: 'What happens if the developer goes bankrupt?',
    answer: 'In many jurisdictions, developers are required to hold buyer deposits in escrow accounts. This provides some protection, but rules vary by country. Always check local regulations and developer track record.',
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
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Comprehensive guide to Dubai Marina real estate.',
  },
]

export default function OffPlanPropertyPage() {
  const breadcrumbs = [
    { name: 'Definitions', href: '/definitions' },
    { name: 'Off-Plan Property', href: '/definitions/off-plan-property' },
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
          title: 'What is Off-Plan Property? Definition, Risks & Benefits',
          description: 'Learn what off-plan property means and how to evaluate off-plan investments.',
          url: 'https://propertywiki.ai/definitions/off-plan-property',
          datePublished: '2024-02-15',
          dateModified: '2024-11-15',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Definitions', url: 'https://propertywiki.ai/definitions' },
          { name: 'Off-Plan Property', url: 'https://propertywiki.ai/definitions/off-plan-property' },
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
            What is Off-Plan Property?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to buying property before it&apos;s built, including benefits,
            risks, and essential due diligence steps.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/off-plan-property.jpg"
            alt="Construction site with new buildings under development representing off-plan property investment opportunities"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="definition">
            <h2>Definition of Off-Plan Property</h2>
            <p>
              <strong>Off-plan property</strong> refers to real estate that is purchased before 
              construction is completed, often while still in the planning or early development 
              stages. Buyers commit to purchasing based on architectural plans, artist renderings, 
              and developer specifications rather than a finished product.
            </p>
            <p>
              This type of purchase is particularly common in rapidly developing markets like 
              Dubai, where major developments are frequently launched for sale years before 
              completion. The concept allows developers to secure funding while offering buyers 
              potential discounts and customization options.
            </p>
          </section>

          <section id="how-it-works">
            <h2>How Off-Plan Purchases Work</h2>
            <p>
              The typical off-plan buying process follows these stages:
            </p>
            <ol>
              <li><strong>Launch:</strong> Developer announces the project with plans and pricing</li>
              <li><strong>Reservation:</strong> Buyer reserves a unit with a small deposit (typically 5-10%)</li>
              <li><strong>Sales Agreement:</strong> Formal contract signed with payment schedule</li>
              <li><strong>Construction Payments:</strong> Staged payments linked to construction milestones</li>
              <li><strong>Completion:</strong> Final payment and handover of the property</li>
            </ol>
            <p>
              Payment plans vary significantly. Some developers offer 80/20 plans (80% during 
              construction, 20% at handover), while others provide post-handover payment plans 
              extending several years after completion.
            </p>
          </section>

          <section id="benefits">
            <h2>Benefits of Buying Off-Plan</h2>
            <ul>
              <li><strong>Lower prices:</strong> Typically 10-30% below completed property prices</li>
              <li><strong>Payment flexibility:</strong> Spread payments over the construction period</li>
              <li><strong>Capital appreciation:</strong> Value often increases as construction progresses</li>
              <li><strong>Choice of units:</strong> Early buyers get the best selection</li>
              <li><strong>Customization:</strong> Some developers allow interior modifications</li>
              <li><strong>New property:</strong> Modern specifications and warranties</li>
            </ul>
          </section>

          <section id="risks">
            <h2>Risks and Considerations</h2>
            <ul>
              <li><strong>Construction delays:</strong> Projects can be delayed months or years</li>
              <li><strong>Developer insolvency:</strong> Risk of losing deposits if developer fails</li>
              <li><strong>Quality concerns:</strong> Finished product may differ from expectations</li>
              <li><strong>Market changes:</strong> Property values could decline before completion</li>
              <li><strong>No immediate rental income:</strong> Cannot generate returns until completion</li>
              <li><strong>Financing challenges:</strong> Mortgage terms may change before completion</li>
            </ul>
          </section>

          <section id="due-diligence">
            <h2>Due Diligence Checklist</h2>
            <p>
              Before committing to an off-plan purchase, verify:
            </p>
            <ul>
              <li>Developer&apos;s track record and completed projects</li>
              <li>Escrow account protection for your payments</li>
              <li>All necessary permits and approvals are in place</li>
              <li>Clear terms for delays and compensation</li>
              <li>Penalty clauses if the final product differs from specifications</li>
              <li>Resale rights during construction</li>
              <li>Independent legal review of the contract</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-02-15"
          dateModified="2024-11-15"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
