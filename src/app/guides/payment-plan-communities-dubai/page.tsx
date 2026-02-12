import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Payment Plan Communities in Dubai Guide',
  description: 'Complete guide to Dubai communities with developer payment plans. Compare 60/40, 70/30, and post-handover payment structures across top areas.',
  keywords: ['payment plan Dubai', 'post-handover payment plan', 'Dubai developer payment plan', '60/40 payment plan Dubai', 'buy property instalments Dubai'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/payment-plan-communities-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/payment-plan-communities-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/payment-plan-communities-dubai',
      'x-default': 'https://propertywiki.ai/guides/payment-plan-communities-dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/payment-plan-communities-dubai',
    title: 'Payment Plan Communities in Dubai Guide',
    description: 'Complete guide to Dubai communities offering developer payment plans.',
    type: 'article',
    publishedTime: '2025-08-01',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'how-payment-plans-work', title: 'How Payment Plans Work', level: 2 },
  { id: 'plan-structures', title: 'Common Payment Plan Structures', level: 2 },
  { id: 'communities-60-40', title: 'Communities with 60/40 Plans', level: 2 },
  { id: 'communities-post-handover', title: 'Communities with Post-Handover Plans', level: 2 },
  { id: 'communities-1-percent', title: 'Communities with 1% Monthly Plans', level: 2 },
  { id: 'payment-plan-vs-mortgage', title: 'Payment Plan vs Mortgage', level: 2 },
  { id: 'tips', title: 'Tips for Using Payment Plans', level: 2 },
]

const faqs = [
  {
    question: 'What is a post-handover payment plan in Dubai?',
    answer: 'A post-handover payment plan allows you to continue paying for your property after receiving the keys and moving in. Typically, 50-60% is paid during construction and the remaining 40-50% is spread over 2-5 years after handover. This means you can earn rental income while still paying off the property.',
  },
  {
    question: 'Do I pay interest on developer payment plans?',
    answer: 'Most developer payment plans in Dubai are interest-free, which is a major advantage over bank mortgages. The total price is fixed at purchase, and your payments are simply divided into instalments. However, some extended post-handover plans may carry a premium on the unit price.',
  },
  {
    question: 'Can I get a mortgage AND a payment plan?',
    answer: 'Generally, no. Developer payment plans and bank mortgages are separate financing options. You typically choose one or the other. However, some buyers use payment plans during construction and then arrange a mortgage at handover to cover the remaining balance.',
  },
  {
    question: 'What happens if I miss a payment plan instalment?',
    answer: 'Missing payments can result in penalties, typically 1-2% per month on the overdue amount. Repeated defaults may lead to contract cancellation, though developers usually offer grace periods and renegotiation options. Always communicate with the developer early if you anticipate payment difficulties.',
  },
  {
    question: 'Which Dubai developers offer the best payment plans?',
    answer: 'Danube is known for 1% monthly payment plans, Emaar offers standard 60/40 to 80/20 plans, Damac provides flexible post-handover options, and Samana offers 30% post-handover plans. The "best" plan depends on your cash flow needs — post-handover plans offer maximum flexibility but may have a price premium.',
  },
]

const relatedArticles = [
  {
    title: '1% Payment Plan Projects in Dubai',
    href: '/guides/1-percent-payment-plan-dubai',
    category: 'Guide',
    description: 'Projects offering the popular 1% monthly payment plan structure in Dubai.',
  },
  {
    title: 'Best Off-Plan Projects Under 1M AED',
    href: '/guides/best-off-plan-projects-under-1m',
    category: 'Guide',
    description: 'Top affordable off-plan projects across Dubai with payment plan details.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Complete step-by-step guide for foreigners buying property in Dubai.',
  },
  {
    title: 'What is Off-Plan Property?',
    href: '/definitions/off-plan-property',
    category: 'Definition',
    description: 'Understanding off-plan property purchases and what they mean for buyers.',
  },
]

export default function PaymentPlanCommunitiesDubaiPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Payment Plan Communities in Dubai', href: '/guides/payment-plan-communities-dubai' },
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
          title: 'Payment Plan Communities in Dubai - Complete Guide',
          description: 'Complete guide to Dubai communities offering developer payment plans.',
          url: 'https://propertywiki.ai/guides/payment-plan-communities-dubai',
          datePublished: '2025-08-01',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Payment Plan Communities in Dubai', url: 'https://propertywiki.ai/guides/payment-plan-communities-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Buying Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Payment Plan Communities in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Developer payment plans are one of Dubai&apos;s biggest draws for property investors. Here&apos;s
            which communities offer the best plans, how they work, and what to watch out for.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="how-payment-plans-work">
            <h2>How Payment Plans Work</h2>
            <p>
              Developer payment plans are essentially interest-free financing offered directly by the
              property developer. Instead of paying the full price upfront or taking a bank mortgage,
              you spread payments over the construction period — and sometimes beyond.
            </p>
            <p>
              This is one of the things that makes Dubai&apos;s property market so accessible compared
              to other global cities. Where else can you buy a property with 10-20% down and pay the
              rest in interest-free instalments over 3-7 years?
            </p>
            <p>
              Here&apos;s the basic mechanics: you sign the Sales and Purchase Agreement (SPA), pay
              a booking fee (typically 5-10%), and then follow a payment schedule tied to construction
              milestones or calendar dates. All payments go into a RERA-regulated escrow account, not
              directly to the developer.
            </p>
          </section>

          <section id="plan-structures">
            <h2>Common Payment Plan Structures</h2>
            <p>
              Not all payment plans are equal. Here are the main structures you&apos;ll encounter:
            </p>
            <div className="space-y-6 my-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">60/40 Plan (Standard)</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Pay 60% during construction, 40% on handover. This is the most common structure
                  offered by major developers like Emaar and Nakheel.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> AED 1M property → AED 100K booking + AED 500K during construction + AED 400K at handover
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">70/30 Plan</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Pay 70% during construction, 30% on handover. Slightly more front-loaded but
                  reduces your handover payment significantly.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> AED 1M property → AED 100K booking + AED 600K during construction + AED 300K at handover
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Post-Handover Plan (50/50 or 60/40)</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Pay 50-60% by handover, then continue payments for 2-5 years after receiving your keys.
                  This is the most flexible option and lets you earn rent while still paying.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> AED 1M property → AED 100K booking + AED 400K during construction + AED 500K over 3 years post-handover
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">1% Monthly Plan</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Pay just 1% of the property value each month. Popularised by Danube Properties,
                  this makes monthly outflows highly manageable.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> AED 800K property → AED 80K booking + AED 8K/month for the remaining balance
                </p>
              </div>
            </div>
          </section>

          <section id="communities-60-40">
            <h2>Communities with 60/40 Plans</h2>
            <p>
              The 60/40 structure is the industry standard in Dubai, offered by most tier-one developers.
              Here&apos;s where you&apos;ll find it:
            </p>
            <ul>
              <li><strong>Dubai Hills Estate (Emaar):</strong> Consistently offers 60/40 on new apartment and villa launches. Payment milestones tied to construction progress — typically 10% booking, then quarterly instalments</li>
              <li><strong>Dubai Creek Harbour (Emaar):</strong> Same structure as Dubai Hills. Emaar&apos;s standardised plans make budgeting predictable across their communities</li>
              <li><strong><Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">Downtown Dubai</Link> (Emaar):</strong> Premium pricing but straightforward 60/40 plans on new towers</li>
              <li><strong>Arabian Ranches III (Emaar):</strong> Villa community with 60/40 plans on townhouses and independent villas</li>
              <li><strong>Nakheel communities:</strong> Palm Jumeirah, Jumeirah Islands, and new Nakheel projects typically follow 60/40 or 70/30 structures</li>
            </ul>
          </section>

          <section id="communities-post-handover">
            <h2>Communities with Post-Handover Plans</h2>
            <p>
              Post-handover plans are the most investor-friendly structure because you can start earning
              rental income before fully paying off the property. These communities lead the way:
            </p>
            <ul>
              <li><strong>JVC (multiple developers):</strong> Samana, Binghatti, and several others offer 30-40% post-handover plans in JVC. Monthly post-handover payments can be partly covered by rental income</li>
              <li><strong>Damac Hills &amp; Damac Lagoons (Damac):</strong> Damac frequently offers 40/60 plans with extended post-handover periods of up to 4 years</li>
              <li><strong>Arjan (various developers):</strong> Samana&apos;s projects in Arjan typically include 30% post-handover over 30 months, making them particularly attractive for budget investors</li>
              <li><strong>MBR City (Sobha):</strong> Sobha Hartland projects occasionally offer post-handover plans, though they&apos;re more common during special promotions</li>
              <li><strong>Dubai South (various):</strong> Multiple developers in Dubai South offer extended post-handover plans to attract buyers to this still-developing area</li>
            </ul>
          </section>

          <section id="communities-1-percent">
            <h2>Communities with 1% Monthly Plans</h2>
            <p>
              The 1% monthly payment model has become incredibly popular, pioneered by Danube Properties.
              For a detailed breakdown, see our dedicated <Link href="/guides/1-percent-payment-plan-dubai" className="text-primary-600 hover:underline">1% payment plan guide</Link>.
            </p>
            <ul>
              <li><strong>JVC (Danube):</strong> Multiple projects including Diamondz, Elitz, and Bayz — all featuring 1% monthly plans</li>
              <li><strong>Arjan (Danube):</strong> Danube&apos;s Arjan projects follow the same 1% model with furnished units</li>
              <li><strong>Al Furjan (Danube):</strong> Sportz and other Danube communities near Discovery Gardens</li>
              <li><strong>Business Bay (select developers):</strong> Some newer developers have adopted the 1% model in <Link href="/locations/dubai/business-bay" className="text-primary-600 hover:underline">Business Bay</Link></li>
            </ul>
          </section>

          <section id="payment-plan-vs-mortgage">
            <h2>Payment Plan vs Mortgage</h2>
            <p>
              This is a question many buyers wrestle with. Here&apos;s a clear comparison:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Factor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Plan</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mortgage</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Interest</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0% (interest-free)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">4-6% per annum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Down Payment</td>
                    <td className="px-4 py-3 text-sm text-gray-500">10-20%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">20-25% (residents), 30-50% (non-residents)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Duration</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2-7 years</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Up to 25 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Property Type</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Off-plan only</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Ready (primary), some off-plan at handover</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Credit Check</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Usually not required</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Full credit assessment</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ownership</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Title deed at handover</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Title deed with mortgage lien</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="tips">
            <h2>Tips for Using Payment Plans</h2>
            <p>
              Payment plans are a powerful tool, but they need to be used wisely:
            </p>
            <ul>
              <li><strong>Budget for all payments:</strong> Map out your entire payment schedule before signing. Make sure you can comfortably cover every instalment, including the handover balloon payment</li>
              <li><strong>Set aside handover funds early:</strong> The largest single payment is usually at handover. Start saving for it from day one, even if it&apos;s 3 years away</li>
              <li><strong>Understand default consequences:</strong> Know exactly what happens if you miss a payment. Developer contracts vary — some are forgiving, others are not</li>
              <li><strong>Check for assignment rights:</strong> If you may need to sell before handover, verify that the developer allows contract assignment and what fees apply</li>
              <li><strong>Compare total cost:</strong> A 1% monthly plan might look attractive, but compare the total purchase price against similar properties with standard plans. Some developers build the financing cost into a higher unit price</li>
              <li><strong>Get everything in writing:</strong> Verbal promises about plan flexibility mean nothing. Every term should be in your SPA</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-08-01"
          dateModified="2026-02-05"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Business Bay Property Guide</p>
            </Link>
            <Link href="/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What Is Off-Plan Property?</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What Is Freehold Property?</p>
            </Link>
            <Link href="/guides/1-percent-payment-plan-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">1% Payment Plan Projects Dubai</p>
            </Link>
            <Link href="/guides/best-off-plan-projects-under-1m" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Off-Plan Projects Under 1M AED</p>
            </Link>
            <Link href="/guides/safest-off-plan-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Safest Off-Plan Areas in Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}