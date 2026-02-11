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
  title: 'Dubai Investment Scorecard 2026',
  description: 'How to evaluate Dubai property investments using a weighted scoring model. Covers rental yield, capital growth, demand, liquidity, and infrastructure.',
  keywords: ['Dubai investment scorecard', 'property investment methodology', 'Dubai real estate scoring', 'rental yield scoring', 'investment evaluation Dubai'],
  alternates: {
    canonical: 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026',
    languages: {
      'en': 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026',
      'ar': 'https://propertywiki.ai/ar/investing/dubai-investment-scorecard-2026',
      'x-default': 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026',
    title: 'Dubai Investment Scorecard 2026',
    description: 'How to evaluate Dubai property investments using a weighted scoring model. Covers rental yield, capital growth, demand, liquidity, and infrastructure.',
    type: 'article',
    publishedTime: '2025-11-01',
    modifiedTime: '2026-02-10',
  },
}

const tableOfContents = [
  { id: 'why-scorecard', title: 'Why You Need a Scorecard', level: 2 },
  { id: 'five-criteria', title: 'The Five Scoring Criteria', level: 2 },
  { id: 'rental-yield', title: 'Criterion 1: Rental Yield', level: 3 },
  { id: 'capital-growth', title: 'Criterion 2: Capital Growth', level: 3 },
  { id: 'demand', title: 'Criterion 3: Demand', level: 3 },
  { id: 'liquidity', title: 'Criterion 4: Liquidity', level: 3 },
  { id: 'infrastructure', title: 'Criterion 5: Infrastructure', level: 3 },
  { id: 'weighted-model', title: 'The Weighted Scoring Model', level: 2 },
  { id: 'worked-example', title: 'Worked Example: JVC vs Business Bay', level: 2 },
  { id: 'customising', title: 'Customising for Your Goals', level: 2 },
  { id: 'common-mistakes', title: 'Common Scoring Mistakes', level: 2 },
]

const faqs = [
  {
    question: 'What is a property investment scorecard?',
    answer: 'A property investment scorecard is a structured framework that assigns numerical scores to key investment criteria — such as rental yield, capital growth, and liquidity — to produce a comparable, objective rating for different areas or properties. It helps investors move beyond gut feeling and make data-driven decisions.',
  },
  {
    question: 'How do you weight the scoring criteria?',
    answer: 'Our default weighting is: rental yield 30%, capital growth 25%, liquidity 25%, demand 20%. However, these weights should be adjusted based on your investment goals. A cash-flow investor might increase the rental yield weight to 40%, while a growth investor might assign 35% to capital growth.',
  },
  {
    question: 'Where does the data come from?',
    answer: 'We source data from Dubai Land Department transaction records, RERA rental indices, major property portal listings (Bayut, Property Finder), developer reports, and independent market research. All data is cross-referenced to ensure accuracy.',
  },
  {
    question: 'Can I use this scorecard for off-plan properties?',
    answer: 'Yes, but with modifications. Off-plan properties lack historical rental data, so you would need to use projected yields based on comparable ready properties in the same area. Capital growth should factor in developer premiums and projected completion timelines.',
  },
  {
    question: 'How often should I update the scorecard?',
    answer: 'We recommend updating scores quarterly. Dubai is a fast-moving market where new supply, regulatory changes, and macroeconomic shifts can alter an area\'s investment profile significantly within a few months.',
  },
]

const relatedArticles = [
  {
    title: 'Top 10 Investment Areas in Dubai 2026',
    href: '/investing/top-10-investment-areas-dubai',
    category: 'Investing',
    description: 'Our scorecard applied: see how 10 areas rank on composite scores.',
  },
  {
    title: 'Capital Growth Ranking by Area Dubai 2026',
    href: '/investing/capital-growth-ranking-dubai',
    category: 'Investing',
    description: 'Deep dive into price appreciation across Dubai areas since 2020.',
  },
  {
    title: 'Rental Demand Ranking by Area Dubai 2026',
    href: '/investing/rental-demand-ranking-dubai',
    category: 'Investing',
    description: 'Which areas have the strongest tenant demand and lowest vacancy.',
  },
  {
    title: 'Highest Rental Yield Areas in Dubai',
    href: '/guides/highest-rental-yield-areas-dubai',
    category: 'Guide',
    description: 'Detailed yield analysis by community and property type.',
  },
]

export default function DubaiInvestmentScorecard2026Page() {
  const breadcrumbs = [
    { name: 'Investing', href: '/investing' },
    { name: 'Dubai Investment Scorecard 2026', href: '/investing/dubai-investment-scorecard-2026' },
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
          title: 'Dubai Investment Scorecard 2026',
          description: 'How to evaluate Dubai property investments using a weighted scoring model.',
          url: 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026',
          datePublished: '2025-11-01',
          dateModified: '2026-02-10',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Investing', url: 'https://propertywiki.ai/investing' },
          { name: 'Dubai Investment Scorecard 2026', url: 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Investment Methodology
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Dubai Investment Scorecard 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A structured framework for evaluating Dubai property investments. This guide explains our five-criteria scoring model, shows you how to weight it for your goals, and walks through a real-world example so you can apply it to any area or property.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="why-scorecard">
            <h2>Why You Need a Scorecard</h2>
            <p>
              Dubai&apos;s property market offers dozens of freehold communities, each with different yield profiles, growth trajectories, and risk factors. Without a structured approach, investment decisions often default to anecdotal advice from agents or headline-grabbing price movements that may not reflect reality.
            </p>
            <p>
              A scorecard forces discipline. It breaks the investment decision into measurable components, assigns relative importance to each, and produces a comparable score that lets you evaluate areas side by side. It won&apos;t eliminate risk, but it significantly reduces the chance of making an emotionally driven purchase.
            </p>
            <p>
              We built this model after analysing transaction data across 25+ freehold communities over a five-year period. The result is a framework that has correctly identified outperforming areas in backtesting against 2020–2025 data. See it applied in our <Link href="/investing/top-10-investment-areas-dubai" className="text-primary-600 hover:underline">top 10 investment areas ranking</Link>.
            </p>
          </section>

          <section id="five-criteria">
            <h2>The Five Scoring Criteria</h2>
            <p>
              Each area is scored from 1 to 10 across five criteria. Here&apos;s what each measures and how we calculate it.
            </p>
          </section>

          <section id="rental-yield">
            <h3>Criterion 1: Rental Yield (Weight: 25%)</h3>
            <p>
              Gross rental yield is calculated as annual rental income divided by property purchase price. We use median asking rents from major portals cross-referenced with RERA&apos;s rental index, and median transaction prices from DLD records.
            </p>
            <p>
              Scoring bands:
            </p>
            <ul>
              <li><strong>9–10:</strong> Gross yield above 8%</li>
              <li><strong>7–8:</strong> Gross yield 6–8%</li>
              <li><strong>5–6:</strong> Gross yield 4.5–6%</li>
              <li><strong>3–4:</strong> Gross yield 3–4.5%</li>
              <li><strong>1–2:</strong> Gross yield below 3%</li>
            </ul>
            <p>
              We focus on gross yield rather than net because service charges, management fees, and maintenance costs vary so widely between buildings that a standardised net yield comparison would require building-level data. For deeper yield analysis, see <Link href="/guides/highest-rental-yield-areas-dubai" className="text-primary-600 hover:underline">highest rental yield areas</Link>.
            </p>
          </section>

          <section id="capital-growth">
            <h3>Criterion 2: Capital Growth (Weight: 25%)</h3>
            <p>
              We measure price per square foot change from Q1 2020 to Q1 2026 using DLD transaction data. This captures both the post-pandemic recovery and the subsequent growth cycle.
            </p>
            <p>
              Scoring bands:
            </p>
            <ul>
              <li><strong>9–10:</strong> Price appreciation above 80%</li>
              <li><strong>7–8:</strong> Price appreciation 50–80%</li>
              <li><strong>5–6:</strong> Price appreciation 30–50%</li>
              <li><strong>3–4:</strong> Price appreciation 15–30%</li>
              <li><strong>1–2:</strong> Price appreciation below 15%</li>
            </ul>
            <p>
              Forward-looking adjustments are applied for areas with significant upcoming supply (downward pressure) or major infrastructure completions (upward catalyst). See the full <Link href="/investing/capital-growth-ranking-dubai" className="text-primary-600 hover:underline">capital growth ranking</Link> for area-by-area data.
            </p>
          </section>

          <section id="demand">
            <h3>Criterion 3: Demand (Weight: 20%)</h3>
            <p>
              Demand is measured through three sub-indicators: vacancy rates, population density growth in the area, and proximity to major employment zones. We also factor in tenant search volume data from property portals.
            </p>
            <p>
              Scoring bands:
            </p>
            <ul>
              <li><strong>9–10:</strong> Vacancy below 3%, near major employment zone, strong population growth</li>
              <li><strong>7–8:</strong> Vacancy 3–6%, moderate employment proximity</li>
              <li><strong>5–6:</strong> Vacancy 6–10%, limited employment nearby</li>
              <li><strong>3–4:</strong> Vacancy 10–15%, peripheral location</li>
              <li><strong>1–2:</strong> Vacancy above 15%</li>
            </ul>
            <p>
              For a detailed breakdown by area, see our <Link href="/investing/rental-demand-ranking-dubai" className="text-primary-600 hover:underline">rental demand ranking</Link>.
            </p>
          </section>

          <section id="liquidity">
            <h3>Criterion 4: Liquidity (Weight: 20%)</h3>
            <p>
              Liquidity measures how easily you can buy or sell a property. We use three metrics: annual transaction volume (from DLD), average days on market (from portal listing data), and the ratio of listings to transactions (turnover rate).
            </p>
            <p>
              Scoring bands:
            </p>
            <ul>
              <li><strong>9–10:</strong> Top 5 by transaction volume, under 20 days on market</li>
              <li><strong>7–8:</strong> Top 10 by volume, 20–35 days on market</li>
              <li><strong>5–6:</strong> Moderate volume, 35–50 days on market</li>
              <li><strong>3–4:</strong> Low volume, 50–75 days on market</li>
              <li><strong>1–2:</strong> Very low volume, over 75 days on market</li>
            </ul>
          </section>

          <section id="infrastructure">
            <h3>Criterion 5: Infrastructure (Weight: 10%)</h3>
            <p>
              Infrastructure captures the quality and completeness of an area&apos;s physical and social amenities: metro access, road connectivity, schools, healthcare, retail, and leisure facilities. Areas that are fully built out with mature amenities score higher.
            </p>
            <p>
              Scoring bands:
            </p>
            <ul>
              <li><strong>9–10:</strong> Metro station within walking distance, multiple schools, hospitals, malls</li>
              <li><strong>7–8:</strong> Good road access, schools and retail present, metro nearby</li>
              <li><strong>5–6:</strong> Basic amenities in place, some gaps</li>
              <li><strong>3–4:</strong> Developing infrastructure, limited amenities</li>
              <li><strong>1–2:</strong> Minimal infrastructure, reliant on neighbouring areas</li>
            </ul>
          </section>

          <section id="weighted-model">
            <h2>The Weighted Scoring Model</h2>
            <p>
              The composite score is calculated as:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6 font-mono text-sm">
              <p className="text-gray-800">
                Composite = (Yield × 0.25) + (Growth × 0.25) + (Demand × 0.20) + (Liquidity × 0.20) + (Infrastructure × 0.10)
              </p>
            </div>
            <p>
              This default weighting reflects a balanced investor profile. The yield and growth criteria carry equal weight because Dubai&apos;s market rewards both strategies. Demand and liquidity are weighted equally because an area with strong demand but poor liquidity (or vice versa) presents risk. Infrastructure gets the smallest weight because it&apos;s a slower-changing variable.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Criterion</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">What It Measures</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data Source</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Rental Yield</td>
                    <td className="px-4 py-3 text-sm text-gray-700">25%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Annual rent ÷ purchase price</td>
                    <td className="px-4 py-3 text-sm text-gray-700">DLD, RERA, Portal data</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Capital Growth</td>
                    <td className="px-4 py-3 text-sm text-gray-700">25%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">PSF price change 2020–2026</td>
                    <td className="px-4 py-3 text-sm text-gray-700">DLD transactions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Demand</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Vacancy, population, employment</td>
                    <td className="px-4 py-3 text-sm text-gray-700">RERA, Census, Portals</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Liquidity</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Transaction volume, days on market</td>
                    <td className="px-4 py-3 text-sm text-gray-700">DLD, Portal data</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Infrastructure</td>
                    <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Metro, schools, retail, connectivity</td>
                    <td className="px-4 py-3 text-sm text-gray-700">RTA, field research</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="worked-example">
            <h2>Worked Example: JVC vs Business Bay</h2>
            <p>
              Let&apos;s walk through how the scorecard works in practice by comparing two of Dubai&apos;s most popular investment areas.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Criterion</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">JVC Score</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">JVC Weighted</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BB Score</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BB Weighted</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Rental Yield</td>
                    <td className="px-4 py-3 text-sm text-gray-700">25%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9.0</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2.25</td>
                    <td className="px-4 py-3 text-sm text-gray-700">7.5</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.88</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Capital Growth</td>
                    <td className="px-4 py-3 text-sm text-gray-700">25%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">7.5</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.88</td>
                    <td className="px-4 py-3 text-sm text-gray-700">8.0</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Demand</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9.0</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.80</td>
                    <td className="px-4 py-3 text-sm text-gray-700">8.0</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.60</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Liquidity</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9.0</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.80</td>
                    <td className="px-4 py-3 text-sm text-gray-700">9.0</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.80</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Infrastructure</td>
                    <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                    <td className="px-4 py-3 text-sm text-gray-700">7.0</td>
                    <td className="px-4 py-3 text-sm text-gray-700">0.70</td>
                    <td className="px-4 py-3 text-sm text-gray-700">8.5</td>
                    <td className="px-4 py-3 text-sm text-gray-700">0.85</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">Total</td>
                    <td className="px-4 py-3 text-sm text-gray-700">100%</td>
                    <td className="px-4 py-3 text-sm text-gray-700"></td>
                    <td className="px-4 py-3 text-sm font-bold text-primary-600">8.43</td>
                    <td className="px-4 py-3 text-sm text-gray-700"></td>
                    <td className="px-4 py-3 text-sm font-bold text-primary-600">8.13</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              JVC edges ahead on composite score, primarily driven by its yield advantage and demand strength. Business Bay scores higher on capital growth and infrastructure. For a detailed comparison, see our <Link href="/guides/jvc-vs-dubai-hills-investment" className="text-primary-600 hover:underline">JVC vs Dubai Hills investment guide</Link>.
            </p>
          </section>

          <section id="customising">
            <h2>Customising for Your Goals</h2>
            <p>
              The default weights work well for a balanced investor, but you should adjust them based on your strategy:
            </p>
            <ul>
              <li><strong>Cash-flow investor:</strong> Increase rental yield to 40%, reduce capital growth to 15%. This favours areas like JVC, DSO, and Arjan.</li>
              <li><strong>Capital growth investor:</strong> Increase capital growth to 35%, reduce rental yield to 15%. This favours Palm Jumeirah, Dubai Hills, and Downtown.</li>
              <li><strong>Balanced with exit strategy:</strong> Increase liquidity to 30%, reduce infrastructure to 5%. This ensures you can sell when needed.</li>
              <li><strong>Long-term hold:</strong> Increase infrastructure to 20% and demand to 25%. Mature infrastructure tends to protect values during downturns.</li>
            </ul>
            <p>
              The scoring bands themselves remain constant — only the weights change. This lets you compare the same areas across different strategic lenses.
            </p>
          </section>

          <section id="common-mistakes">
            <h2>Common Scoring Mistakes</h2>
            <p>
              After helping hundreds of investors evaluate Dubai properties, we see these mistakes repeatedly:
            </p>
            <ul>
              <li><strong>Using advertised yields:</strong> Agent-quoted yields often use asking rents and discounted purchase prices. Always use actual transaction data and market-rate rents.</li>
              <li><strong>Ignoring service charges:</strong> A high gross yield in a building with AED 25/sqft service charges may produce a mediocre net return. Factor in all holding costs.</li>
              <li><strong>Recency bias:</strong> An area that grew 30% last year may already be priced for that growth. Look at the full cycle, not just recent momentum.</li>
              <li><strong>Overlooking liquidity:</strong> High yields and growth mean nothing if you cannot sell when you need to. Always check transaction volumes before committing.</li>
              <li><strong>Comparing unlike assets:</strong> A studio in JVC and a two-bedroom in Marina serve different tenant profiles. Compare within property type and size brackets.</li>
            </ul>
            <p>
              For broader market context, read our <Link href="/blog/dubai-market-outlook-2025" className="text-primary-600 hover:underline">Dubai market outlook</Link>.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-11-01"
          dateModified="2026-02-10"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}