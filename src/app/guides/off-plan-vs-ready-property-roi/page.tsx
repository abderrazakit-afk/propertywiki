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
  title: 'Off-Plan vs Ready Property: ROI Comparison',
  description: 'Compare ROI, risks, and timelines of off-plan vs ready property in Dubai. Real numbers on capital gains, rental yields, and total cost of ownership.',
  keywords: ['off-plan vs ready Dubai', 'property ROI Dubai', 'off-plan returns', 'ready property investment', 'Dubai real estate comparison'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi',
    languages: {
      'en': 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi',
      'ar': 'https://propertywiki.ai/ar/guides/off-plan-vs-ready-property-roi',
      'x-default': 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi',
    title: 'Off-Plan vs Ready Property: ROI Comparison',
    description: 'Compare ROI, risks, and timelines of off-plan vs ready property in Dubai.',
    type: 'article',
    publishedTime: '2025-08-01',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Off-Plan vs Ready: The Basics', level: 2 },
  { id: 'capital-appreciation', title: 'Capital Appreciation Compared', level: 2 },
  { id: 'rental-yields', title: 'Rental Yield Analysis', level: 2 },
  { id: 'total-cost', title: 'Total Cost of Ownership', level: 2 },
  { id: 'risk-comparison', title: 'Risk Comparison', level: 2 },
  { id: 'roi-table', title: 'ROI Comparison Table', level: 2 },
  { id: 'which-is-right', title: 'Which Is Right for You?', level: 2 },
]

const faqs = [
  {
    question: 'Is off-plan or ready property a better investment in Dubai?',
    answer: 'It depends on your goals. Off-plan typically offers higher capital appreciation (15-30% from purchase to handover) and lower entry costs thanks to payment plans. Ready property provides immediate rental income and lower risk. For pure ROI over 5 years, off-plan has historically outperformed in growing areas like JVC and MBR City.',
  },
  {
    question: 'What is the average ROI for off-plan property in Dubai?',
    answer: 'Off-plan properties in Dubai have delivered average capital appreciation of 15-25% between purchase and handover over the past 3 years. Combined with rental yields of 6-9% once operational, the total ROI over a 5-year hold period can reach 50-80% in well-chosen locations.',
  },
  {
    question: 'What are the risks of buying off-plan vs ready?',
    answer: 'Off-plan risks include construction delays, developer insolvency, and market downturns during the build period. Ready property risks are lower but include potential maintenance issues, existing tenant problems, and paying full market price upfront. RERA escrow regulations have significantly reduced off-plan risks in Dubai.',
  },
  {
    question: 'Can I get rental income from an off-plan property?',
    answer: 'Not until the property is completed and handed over. During construction (typically 2-4 years), your capital is tied up without generating income. However, off-plan prices are usually 10-20% below expected ready market value, which compensates for the income gap.',
  },
  {
    question: 'How much cheaper is off-plan compared to ready property?',
    answer: 'Off-plan properties are typically priced 10-20% below comparable ready properties in the same area. Early-bird launches can offer even larger discounts of up to 25%. However, you must factor in the time value of money and opportunity cost of not earning rent during construction.',
  },
]

const relatedArticles = [
  {
    title: 'Best Off-Plan Projects Under 1M AED',
    href: '/guides/best-off-plan-projects-under-1m',
    category: 'Guide',
    description: 'Top affordable off-plan projects across Dubai with payment plan details.',
  },
  {
    title: 'Safest Off-Plan Areas in Dubai',
    href: '/guides/safest-off-plan-areas-dubai',
    category: 'Guide',
    description: 'Areas with proven developer track records for off-plan purchases.',
  },
  {
    title: 'Highest Rental Yield Areas in Dubai',
    href: '/guides/highest-rental-yield-areas-dubai',
    category: 'Guide',
    description: 'Discover which Dubai areas deliver the strongest rental returns.',
  },
  {
    title: 'What is Off-Plan Property?',
    href: '/definitions/off-plan-property',
    category: 'Definition',
    description: 'Understanding off-plan property purchases and what they mean for buyers.',
  },
  {
    title: 'Off-Plan Investment Risks',
    href: '/blog/off-plan-investment-risks',
    category: 'Blog',
    description: 'Understanding and mitigating the risks of off-plan property investment.',
  },
]

export default function OffPlanVsReadyROIPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Off-Plan vs Ready Property ROI', href: '/guides/off-plan-vs-ready-property-roi' },
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
          title: 'Off-Plan vs Ready Property: ROI Comparison in Dubai',
          description: 'Compare ROI, risks, and timelines of off-plan vs ready property in Dubai.',
          url: 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi',
          datePublished: '2025-08-01',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Off-Plan vs Ready Property ROI', url: 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Investment Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Off-Plan vs Ready Property: ROI Comparison
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Should you buy off-plan or go for a ready property? We break down the numbers — capital gains,
            rental yields, costs, and risks — so you can make an informed decision based on real Dubai market data.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Off-Plan vs Ready: The Basics</h2>
            <p>
              This is probably the most common question Dubai property investors ask, and the honest
              answer is: it depends on what you&apos;re optimising for. Both approaches have delivered
              strong returns in Dubai&apos;s market, but they suit different investor profiles.
            </p>
            <p>
              <Link href="/definitions/off-plan-property" className="text-primary-600 hover:underline">Off-plan property</Link> means
              buying before or during construction. You&apos;re essentially buying a promise — a unit that
              doesn&apos;t exist yet, from architectural plans and model apartments. The trade-off is a lower
              price and flexible payment terms in exchange for patience and some construction risk.
            </p>
            <p>
              Ready property is what it sounds like — completed, often with existing tenants, and available
              for immediate use or rental income. You pay more upfront, but you eliminate construction risk
              entirely and can start earning from day one.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Off-Plan Advantages</h3>
                <ul className="text-sm space-y-1">
                  <li>Lower purchase price (10-20% below ready)</li>
                  <li>Flexible payment plans over 2-4 years</li>
                  <li>Higher capital appreciation potential</li>
                  <li>Brand new with latest specifications</li>
                  <li>Developer warranties included</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Ready Property Advantages</h3>
                <ul className="text-sm space-y-1">
                  <li>Immediate rental income</li>
                  <li>No construction risk</li>
                  <li>What you see is what you get</li>
                  <li>Established community and amenities</li>
                  <li>Easier to finance with mortgages</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="capital-appreciation">
            <h2>Capital Appreciation Compared</h2>
            <p>
              Let&apos;s talk numbers. Over the past three years, off-plan properties in Dubai have shown
              capital appreciation of 15-30% between launch price and handover. In hot areas like JVC
              and Dubai Hills, some projects have appreciated even more.
            </p>
            <p>
              Ready properties, meanwhile, have seen price growth of around 8-15% annually in established
              areas like Dubai Marina, Downtown, and Business Bay. While the percentage looks smaller,
              remember that the base price is higher — so the absolute gain can be comparable.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-gray-900 mb-3">Capital Appreciation Example</h4>
              <p className="text-sm text-gray-600 mb-3">
                Comparing a AED 800,000 off-plan purchase vs a AED 1,000,000 ready purchase:
              </p>
              <ul className="space-y-2 text-sm">
                <li><strong>Off-plan (3 years):</strong> AED 800K → AED 1,040K = AED 240K gain (30%)</li>
                <li><strong>Ready (3 years):</strong> AED 1,000K → AED 1,250K = AED 250K gain (25%)</li>
                <li><strong>But:</strong> Off-plan only needed AED 200K upfront (payment plan) vs AED 250K+ down payment for ready</li>
                <li><strong>ROI on capital deployed:</strong> Off-plan 120% vs Ready ~55%</li>
              </ul>
            </div>
            <p>
              The leverage effect of payment plans is what makes off-plan so attractive. Your return
              on invested capital is significantly higher because you&apos;re controlling an asset worth
              AED 800K with just AED 200K-300K deployed during construction.
            </p>
          </section>

          <section id="rental-yields">
            <h2>Rental Yield Analysis</h2>
            <p>
              This is where ready property has a clear edge. You start earning rent immediately, while
              off-plan investors wait 2-4 years for handover. Let&apos;s quantify that gap:
            </p>
            <ul>
              <li><strong>Ready property in JVC:</strong> Average yield 7.5-8.5% — that&apos;s roughly AED 60,000-68,000 annually on an AED 800K property</li>
              <li><strong>Ready property in Dubai Marina:</strong> Average yield 5.5-6.5% — approximately AED 82,500-97,500 on a AED 1.5M property</li>
              <li><strong>Off-plan during construction:</strong> 0% — your money earns nothing until handover</li>
              <li><strong>Off-plan after handover:</strong> Yields typically match or slightly exceed ready properties in the same area</li>
            </ul>
            <p>
              Over a 3-year construction period, a ready property generating 7% yield on AED 800K
              would earn roughly AED 168,000 in rent. That&apos;s income the off-plan investor misses
              entirely. Factor that into your total return calculation.
            </p>
          </section>

          <section id="total-cost">
            <h2>Total Cost of Ownership</h2>
            <p>
              Beyond the purchase price, each approach carries different ongoing costs:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost Item</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Off-Plan</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ready</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DLD Fee (4%)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">On lower off-plan price</td>
                    <td className="px-4 py-3 text-sm text-gray-500">On full market price</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Agent Commission</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Often 0% (developer pays)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2% of property value</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Service Charges</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Start at handover only</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Immediate from purchase</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Maintenance</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Minimal (new build warranty)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Varies by age of building</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Financing</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Developer plan (interest-free)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Mortgage at 4-6% interest</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Opportunity Cost</td>
                    <td className="px-4 py-3 text-sm text-gray-500">No rental income during build</td>
                    <td className="px-4 py-3 text-sm text-gray-500">None — immediate income</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="risk-comparison">
            <h2>Risk Comparison</h2>
            <p>
              Let&apos;s be honest about the risks involved in each approach:
            </p>
            <h3>Off-Plan Risks</h3>
            <ul>
              <li><strong>Construction delays:</strong> Projects can be delayed by 6-18 months, tying up your capital longer than planned</li>
              <li><strong>Developer insolvency:</strong> Though rare under RERA regulation, it&apos;s still a possibility with smaller developers</li>
              <li><strong>Market correction:</strong> If the market drops during construction, your property could be worth less than you paid at handover</li>
              <li><strong>Quality gaps:</strong> The finished product may not match the showroom — common enough to warrant careful developer research</li>
            </ul>
            <h3>Ready Property Risks</h3>
            <ul>
              <li><strong>Hidden defects:</strong> Older buildings may have structural or maintenance issues not visible during viewing</li>
              <li><strong>Tenant issues:</strong> Buying with existing tenants means inheriting any disputes or below-market leases</li>
              <li><strong>Overpaying:</strong> FOMO in a hot market can lead to purchasing at peak prices</li>
              <li><strong>Higher capital requirement:</strong> You need more cash upfront, increasing your exposure to any single asset</li>
            </ul>
          </section>

          <section id="roi-table">
            <h2>ROI Comparison Table</h2>
            <p>
              Here&apos;s a side-by-side comparison using realistic Dubai market data for a 5-year
              investment horizon:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Off-Plan (JVC)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ready (JVC)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Purchase Price</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 750,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 900,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Capital Invested (Year 1)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 150,000 (20%)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 225,000 (25%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Est. Value at Year 5</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 1,050,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 1,170,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Capital Gain</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 300,000 (40%)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 270,000 (30%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Total Rent (5 years)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 180,000 (2 yrs rental)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 360,000 (5 yrs rental)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Total Return</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 480,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 630,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">ROI on Capital Deployed</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">64%</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="which-is-right">
            <h2>Which Is Right for You?</h2>
            <p>
              There&apos;s no universal answer, but here are some guidelines based on investor profiles:
            </p>
            <ul>
              <li><strong>Choose off-plan if:</strong> You have limited upfront capital, don&apos;t need immediate income, and can wait 2-4 years for returns. Best for investors who want to maximise leverage</li>
              <li><strong>Choose ready if:</strong> You want immediate rental income, prefer lower risk, and have the capital for a larger down payment. Best for income-focused investors</li>
              <li><strong>Consider both:</strong> Many experienced Dubai investors maintain a portfolio mix — off-plan for growth and ready for income. This balances risk and return across different timelines</li>
            </ul>
            <p>
              Whatever you choose, the fundamentals remain the same: location quality, developer
              reputation, realistic yield expectations, and a clear understanding of your investment
              timeline. Dubai&apos;s market rewards patient, well-researched investors regardless of
              whether they buy off-plan or ready.
            </p>
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
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina Property Guide</p>
            </Link>
            <Link href="/locations/dubai/palm-jumeirah" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Palm Jumeirah Property Guide</p>
            </Link>
            <Link href="/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What Is Off-Plan Property?</p>
            </Link>
            <Link href="/guides/best-off-plan-projects-under-1m" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Off-Plan Projects Under 1M AED</p>
            </Link>
            <Link href="/guides/safest-off-plan-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Safest Off-Plan Areas in Dubai</p>
            </Link>
            <Link href="/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Highest Rental Yield Areas Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}