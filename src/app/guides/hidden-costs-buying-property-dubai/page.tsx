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
  title: 'Hidden Costs of Buying Property in Dubai',
  description: 'Complete breakdown of hidden property buying costs in Dubai: DLD fees (4%), agent commission, NOC fees, mortgage costs, insurance & more with real examples.',
  keywords: ['hidden costs Dubai property', 'buying property costs Dubai', 'DLD fees Dubai', 'Dubai property fees', 'property transaction costs Dubai'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/hidden-costs-buying-property-dubai',
      'x-default': 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai',
    title: 'Hidden Costs of Buying Property in Dubai',
    description: 'Complete breakdown of hidden property buying costs in Dubai with real examples on a 1.5M AED property.',
    type: 'article',
    publishedTime: '2025-09-15',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Why Hidden Costs Matter', level: 2 },
  { id: 'dld-transfer-fee', title: 'DLD Transfer Fee (4%)', level: 2 },
  { id: 'agency-commission', title: 'Agency Commission (2%)', level: 2 },
  { id: 'noc-fees', title: 'NOC Fees', level: 2 },
  { id: 'mortgage-costs', title: 'Mortgage Registration & Costs', level: 2 },
  { id: 'valuation-fees', title: 'Valuation Fees', level: 2 },
  { id: 'insurance', title: 'Insurance Costs', level: 2 },
  { id: 'maintenance-deposit', title: 'Maintenance Deposit', level: 2 },
  { id: 'moving-costs', title: 'Moving & Setup Costs', level: 2 },
  { id: 'real-example', title: 'Real Cost Example: 1.5M AED Property', level: 2 },
  { id: 'ongoing-costs', title: 'Ongoing Annual Costs', level: 2 },
]

const faqs = [
  {
    question: 'How much extra should I budget beyond the property price in Dubai?',
    answer: 'For a cash purchase, budget approximately 7-8% on top of the property price for DLD fees (4%), agency commission (2%), admin fees, and NOC. If using a mortgage, add another 1-2% for bank fees, valuation, and mortgage registration. Total additional costs range from 7-10%.',
  },
  {
    question: 'Who pays the DLD transfer fee in Dubai — buyer or seller?',
    answer: 'Officially, the 4% DLD transfer fee is split equally between buyer and seller (2% each). However, in practice, the buyer often pays the full 4% as part of the negotiation. Always clarify this before signing the MOU.',
  },
  {
    question: 'Are there any annual property taxes in Dubai?',
    answer: 'No, Dubai does not have annual property taxes, which is one of its biggest attractions for investors. However, you will pay annual service charges, DEWA deposits, and municipality housing fees (5% of annual rent if renting out the property).',
  },
  {
    question: 'Can I negotiate the agency commission in Dubai?',
    answer: 'The standard commission is 2% of the property value, and most agents charge this rate. Some agents may negotiate slightly lower rates on high-value properties. The commission is typically paid by the buyer, though this can be negotiated as part of the deal.',
  },
  {
    question: 'What is the NOC fee and why do I need it?',
    answer: 'A No Objection Certificate (NOC) is issued by the developer confirming no outstanding service charges or issues on the property. NOC fees range from AED 500 to AED 5,000 depending on the developer. It is required to complete the property transfer at DLD.',
  },
]

const relatedArticles = [
  {
    title: 'DLD Fees Calculator Guide Dubai 2026',
    href: '/guides/dld-fees-calculator-guide',
    category: 'Guide',
    description: 'Detailed breakdown of Dubai Land Department fees with calculation examples.',
  },
  {
    title: 'Service Charges by Area in Dubai',
    href: '/guides/service-charges-by-area-dubai',
    category: 'Guide',
    description: 'Compare service charge rates across Dubai\'s most popular residential areas.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to the property buying process in Dubai.',
  },
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership rights in Dubai.',
  },
]

export default function HiddenCostsBuyingPropertyDubaiPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Hidden Costs of Buying Property in Dubai', href: '/guides/hidden-costs-buying-property-dubai' },
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
          title: 'Hidden Costs of Buying Property in Dubai - Complete Breakdown',
          description: 'Complete breakdown of hidden property buying costs in Dubai with real examples.',
          url: 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai',
          datePublished: '2025-09-15',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Hidden Costs of Buying Property in Dubai', url: 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Cost Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Hidden Costs of Buying Property in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The listed price is never the final price. Between government fees, agent commissions, 
            bank charges, and a handful of costs nobody tells you about upfront, buying property 
            in Dubai will cost you 7-10% more than you might expect.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Why Hidden Costs Matter</h2>
            <p>
              Every week, first-time buyers in Dubai get a shock when they realize the AED 1.5 million 
              apartment they budgeted for actually requires closer to AED 1.65 million when all fees 
              are included. That&apos;s not a small difference — it can mean the difference between 
              affording the property or not.
            </p>
            <p>
              The good news? Dubai doesn&apos;t have annual property taxes, stamp duty, or capital 
              gains tax. The bad news? The upfront transaction costs are concentrated and can catch 
              you off guard if you haven&apos;t done your homework. Let&apos;s walk through every 
              single cost so there are no surprises when you&apos;re ready to <Link href="/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">buy your property</Link>.
            </p>
          </section>

          <section id="dld-transfer-fee">
            <h2>DLD Transfer Fee (4%)</h2>
            <p>
              The biggest single cost is the <Link href="/guides/dld-fees-calculator-guide" className="text-primary-600 hover:underline">Dubai Land Department transfer fee</Link> at 
              4% of the property&apos;s sale price. On a AED 1.5 million property, that&apos;s 
              AED 60,000 — due at the time of transfer.
            </p>
            <p>
              Officially, the fee is meant to be split 50/50 between buyer and seller. In reality, 
              market conditions dictate who pays. In a buyer&apos;s market, sellers may agree to 
              cover their half. In today&apos;s competitive market, buyers typically shoulder the 
              full 4%. This is always negotiable, so don&apos;t assume you&apos;re stuck paying 
              all of it without asking.
            </p>
            <p>
              On top of the 4%, there&apos;s a DLD admin fee of AED 580 and an innovation fee 
              of 0.25% of the property value (AED 3,750 on a AED 1.5M property). These smaller 
              fees add up.
            </p>
          </section>

          <section id="agency-commission">
            <h2>Agency Commission (2%)</h2>
            <p>
              The standard real estate agency commission in Dubai is 2% of the property price plus 
              5% VAT on the commission. On a AED 1.5 million property, that&apos;s AED 30,000 
              plus AED 1,500 VAT — totaling AED 31,500.
            </p>
            <p>
              This is typically paid by the buyer, though it&apos;s technically negotiable. Some 
              agencies charge a flat fee for lower-value properties, and a few offer reduced rates 
              on premium purchases. Always confirm the commission structure before engaging an 
              agent — get it in writing.
            </p>
          </section>

          <section id="noc-fees">
            <h2>NOC Fees</h2>
            <p>
              A No Objection Certificate from the developer is mandatory for completing any resale 
              transaction. The developer confirms that all service charges are paid up and there 
              are no outstanding issues with the property.
            </p>
            <p>
              NOC fees vary by developer:
            </p>
            <ul>
              <li><strong>Emaar:</strong> AED 500 (if no outstanding charges)</li>
              <li><strong>Nakheel:</strong> AED 500–1,000</li>
              <li><strong>Damac:</strong> AED 1,000–5,000</li>
              <li><strong>Dubai Properties:</strong> AED 500–1,500</li>
              <li><strong>Meraas:</strong> AED 500–1,000</li>
            </ul>
            <p>
              The seller is usually responsible for obtaining and paying for the NOC, but this 
              should be clearly stated in the MOU. Processing takes 3-7 working days on average.
            </p>
          </section>

          <section id="mortgage-costs">
            <h2>Mortgage Registration & Costs</h2>
            <p>
              If you&apos;re financing with a mortgage, several additional fees apply:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fee</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">On 1.5M Property</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mortgage Registration</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.25% of loan + AED 290</td>
                    <td className="px-4 py-3 text-sm text-gray-500">~AED 3,290</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Bank Processing Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">1% of loan amount</td>
                    <td className="px-4 py-3 text-sm text-gray-500">~AED 12,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Property Valuation</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 2,500–3,500</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 2,500–3,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Life Insurance</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.4-0.8% of loan/year</td>
                    <td className="px-4 py-3 text-sm text-gray-500">~AED 4,800/year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Property Insurance</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.03-0.05% of value</td>
                    <td className="px-4 py-3 text-sm text-gray-500">~AED 500–750/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For a AED 1.2 million mortgage (80% LTV on a AED 1.5M property), total upfront 
              mortgage-related costs come to roughly AED 18,000-19,000.
            </p>
          </section>

          <section id="valuation-fees">
            <h2>Valuation Fees</h2>
            <p>
              Banks require an independent property valuation before approving a mortgage. This 
              costs between AED 2,500 and AED 3,500, depending on the bank and property type. 
              The fee is non-refundable, even if the mortgage is declined or you change your mind.
            </p>
            <p>
              Some banks include the valuation fee in their processing package, so it&apos;s 
              worth asking upfront. Cash buyers can skip this entirely, which is one of the 
              reasons cash deals are simpler and faster in Dubai.
            </p>
          </section>

          <section id="insurance">
            <h2>Insurance Costs</h2>
            <p>
              If you&apos;re taking a mortgage, the bank will require both life insurance 
              (decreasing term covering the loan amount) and property insurance. Even for cash 
              buyers, property insurance is strongly recommended.
            </p>
            <ul>
              <li><strong>Life insurance (mortgage):</strong> AED 4,000–8,000 per year depending on age and loan amount</li>
              <li><strong>Property insurance:</strong> AED 500–1,500 per year for building and contents cover</li>
              <li><strong>Home contents insurance:</strong> AED 300–800 per year (optional but recommended)</li>
            </ul>
          </section>

          <section id="maintenance-deposit">
            <h2>Maintenance Deposit</h2>
            <p>
              When buying a new property directly from a developer, you&apos;ll typically need 
              to pay a maintenance deposit — usually equivalent to 2-3 years of <Link href="/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">service charges</Link>. 
              This goes into the building&apos;s sinking fund for future major maintenance.
            </p>
            <p>
              For resale properties, any outstanding service charges must be cleared before 
              transfer (handled through the NOC process). As a buyer, make sure the seller&apos;s 
              service charge account is fully up to date — you don&apos;t want to inherit 
              someone else&apos;s unpaid fees.
            </p>
          </section>

          <section id="moving-costs">
            <h2>Moving & Setup Costs</h2>
            <p>
              These are the costs people most often forget to budget for:
            </p>
            <ul>
              <li><strong>DEWA connection deposit:</strong> AED 2,000 (apartment) or AED 4,000 (villa) — refundable</li>
              <li><strong>Chiller deposit:</strong> AED 2,000–5,000 if using <Link href="/guides/dewa-cooling-charges-comparison" className="text-primary-600 hover:underline">district cooling</Link></li>
              <li><strong>Internet setup (du/Etisalat):</strong> AED 200–500 connection fee</li>
              <li><strong>Moving company:</strong> AED 1,500–5,000 depending on volume and distance</li>
              <li><strong>Access card/key deposit:</strong> AED 500–2,000 (some buildings)</li>
              <li><strong>Parking card:</strong> AED 200–1,000 (some buildings charge separately)</li>
            </ul>
          </section>

          <section id="real-example">
            <h2>Real Cost Example: 1.5M AED Property</h2>
            <p>
              Let&apos;s put it all together. Here&apos;s what buying a AED 1.5 million apartment 
              in <Link href="/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">Dubai Marina</Link> actually 
              costs with a mortgage (80% LTV):
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost Item</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount (AED)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Property Price</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,500,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DLD Transfer Fee (4%)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">60,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DLD Admin Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">580</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Innovation Fee (0.25%)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">3,750</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Agency Commission (2% + VAT)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">31,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">NOC Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mortgage Registration (0.25% + 290)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">3,290</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Bank Processing Fee (1%)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">12,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Property Valuation</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">3,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DEWA Deposit</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">2,000</td>
                  </tr>
                  <tr className="bg-gray-50 font-bold">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">Total Cost</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">1,616,620</td>
                  </tr>
                  <tr className="bg-primary-50">
                    <td className="px-4 py-3 text-sm font-bold text-primary-700">Additional Costs Beyond Price</td>
                    <td className="px-4 py-3 text-sm font-bold text-primary-700 text-right">116,620 (7.8%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              That&apos;s nearly AED 117,000 in additional costs — or about 7.8% on top of the 
              property price. For a cash purchase (no mortgage fees), the additional costs drop 
              to roughly AED 98,000 or 6.5%.
            </p>
          </section>

          <section id="ongoing-costs">
            <h2>Ongoing Annual Costs</h2>
            <p>
              Beyond the purchase, plan for these recurring expenses:
            </p>
            <ul>
              <li><strong>Service charges:</strong> AED 15,000–25,000/year for a Marina apartment (<Link href="/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">varies by area</Link>)</li>
              <li><strong>DEWA utilities:</strong> AED 500–1,500/month (<Link href="/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">DEWA guide</Link>)</li>
              <li><strong>Cooling charges:</strong> AED 200–800/month if chiller-paid</li>
              <li><strong>Property insurance:</strong> AED 500–1,500/year</li>
              <li><strong>Mortgage payments:</strong> AED 5,500–7,000/month (on AED 1.2M loan at 4.5%)</li>
              <li><strong>Municipality housing fee:</strong> 5% of annual rental value (if renting out)</li>
            </ul>
            <p>
              Understanding these costs upfront helps you make a more informed decision and 
              avoid financial surprises down the line. When calculating your <Link href="/guides/highest-rental-yield-areas-dubai" className="text-primary-600 hover:underline">rental yield</Link>, 
              always subtract all ongoing costs to get your true net return.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-09-15"
          dateModified="2026-02-05"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}