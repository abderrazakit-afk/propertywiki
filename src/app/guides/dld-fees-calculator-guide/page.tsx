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
  title: 'DLD Fees Calculator Guide Dubai 2026',
  description: 'Calculate Dubai Land Department fees: 4% transfer fee, AED 580 admin fee, 0.25% innovation fee & mortgage registration. Examples at every price point.',
  keywords: ['DLD fees Dubai', 'Dubai Land Department fees', 'DLD calculator', 'property transfer fee Dubai', 'DLD registration fee'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/dld-fees-calculator-guide',
    languages: {
      'en': 'https://propertywiki.ai/guides/dld-fees-calculator-guide',
      'ar': 'https://propertywiki.ai/ar/guides/dld-fees-calculator-guide',
      'x-default': 'https://propertywiki.ai/guides/dld-fees-calculator-guide',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/dld-fees-calculator-guide',
    title: 'DLD Fees Calculator Guide Dubai 2026',
    description: 'Calculate Dubai Land Department fees with examples at every price point.',
    type: 'article',
    publishedTime: '2025-09-15',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'what-is-dld', title: 'What is the Dubai Land Department?', level: 2 },
  { id: 'fee-breakdown', title: 'Complete DLD Fee Breakdown', level: 2 },
  { id: 'transfer-fee', title: 'Transfer Fee (4%)', level: 2 },
  { id: 'admin-fee', title: 'Admin Fee (AED 580)', level: 2 },
  { id: 'innovation-fee', title: 'Innovation Fee (0.25%)', level: 2 },
  { id: 'mortgage-fees', title: 'Mortgage Registration Fees', level: 2 },
  { id: 'calculation-examples', title: 'Calculation Examples', level: 2 },
  { id: 'who-pays', title: 'Who Pays the DLD Fee?', level: 2 },
  { id: 'payment-methods', title: 'How to Pay DLD Fees', level: 2 },
  { id: 'off-plan-fees', title: 'DLD Fees for Off-Plan Properties', level: 2 },
]

const faqs = [
  {
    question: 'How much is the DLD transfer fee in Dubai?',
    answer: 'The DLD transfer fee is 4% of the property\'s sale price, plus an admin fee of AED 580, and an innovation fee of 0.25% of the property value. For a AED 1 million property, total DLD fees come to approximately AED 43,080.',
  },
  {
    question: 'Can the DLD fee be negotiated or reduced?',
    answer: 'The DLD fee itself is fixed at 4% and cannot be negotiated with the government. However, who pays it (buyer or seller) is negotiable between the parties. Some developers offer to cover the DLD fee as a promotional incentive on off-plan purchases.',
  },
  {
    question: 'Do I pay DLD fees on off-plan property?',
    answer: 'Yes, off-plan properties also attract the 4% DLD fee. However, this is typically paid at the time of registration (either at booking or upon handover), not upfront. Some developers split the fee payment across the payment plan.',
  },
  {
    question: 'Is VAT charged on DLD fees?',
    answer: 'No, DLD transfer fees are exempt from VAT. However, VAT (5%) does apply to agency commissions and some professional services involved in the transaction, such as legal and valuation fees.',
  },
  {
    question: 'How long does DLD registration take?',
    answer: 'DLD registration is typically completed on the same day if all documents are in order. The process takes about 30-60 minutes at a DLD trustee office. Online registration through the Dubai REST app can be even faster.',
  },
]

const relatedArticles = [
  {
    title: 'Hidden Costs of Buying Property in Dubai',
    href: '/guides/hidden-costs-buying-property-dubai',
    category: 'Guide',
    description: 'Complete breakdown of all costs beyond the property price.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to the entire buying process including DLD registration.',
  },
  {
    title: 'Service Charges by Area in Dubai',
    href: '/guides/service-charges-by-area-dubai',
    category: 'Guide',
    description: 'Compare ongoing service charge costs across Dubai communities.',
  },
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership and registration in Dubai.',
  },
]

export default function DLDFeesCalculatorGuidePage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'DLD Fees Calculator Guide', href: '/guides/dld-fees-calculator-guide' },
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
          title: 'DLD Fees Calculator Guide Dubai 2026 - Complete Fee Breakdown',
          description: 'Calculate Dubai Land Department fees with examples at every price point.',
          url: 'https://propertywiki.ai/guides/dld-fees-calculator-guide',
          datePublished: '2025-09-15',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'DLD Fees Calculator Guide', url: 'https://propertywiki.ai/guides/dld-fees-calculator-guide' },
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
            DLD Fees Calculator Guide Dubai 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Dubai Land Department fee is the single largest transaction cost when buying 
            property in Dubai. Here&apos;s exactly how it works, what you&apos;ll pay, and 
            how to calculate your total DLD costs at any price point.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="what-is-dld">
            <h2>What is the Dubai Land Department?</h2>
            <p>
              The <a href="https://www.dubailand.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Dubai Land Department</a> (DLD) 
              is the government body responsible for all property-related matters in Dubai. Every 
              property transaction — whether it&apos;s a purchase, sale, mortgage, or gift — must 
              be registered with DLD. They issue title deeds, maintain the property registry, and 
              regulate the real estate sector alongside RERA.
            </p>
            <p>
              When you buy a <Link href="/definitions/freehold-property" className="text-primary-600 hover:underline">freehold property</Link> in 
              Dubai, DLD registration is what makes you the legal owner. Without it, you have no 
              recognized claim to the property. The fees they charge fund the department&apos;s 
              operations and Dubai&apos;s real estate infrastructure.
            </p>
          </section>

          <section id="fee-breakdown">
            <h2>Complete DLD Fee Breakdown</h2>
            <p>
              DLD charges consist of several components. Here&apos;s the full picture:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fee Component</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Transfer Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">4% of sale price</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Main registration fee</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Admin Fee (Apartment)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 580</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Fixed processing fee</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Admin Fee (Land/Villa)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 430</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Fixed processing fee</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Innovation Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.25% of sale price</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Knowledge & innovation fee</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Title Deed Issuance</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 250</td>
                    <td className="px-4 py-3 text-sm text-gray-500">New title deed fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="transfer-fee">
            <h2>Transfer Fee (4%)</h2>
            <p>
              The transfer fee is calculated on the property&apos;s registered sale price — not 
              the market value or RERA-appraised value. This is important because it means the 
              fee is based on what you actually pay, not what the property might theoretically 
              be worth.
            </p>
            <p>
              For example, if you negotiate a property down from AED 2 million to AED 1.8 million, 
              the 4% fee is calculated on AED 1.8 million (AED 72,000), not AED 2 million. Every 
              dirham you negotiate off the price saves you 4 fils in DLD fees — an extra incentive 
              to negotiate well.
            </p>
            <p>
              The fee is payable in full at the time of transfer. DLD accepts manager&apos;s 
              cheques, and some trustee offices now accept bank transfers. Cash is not accepted 
              for the transfer fee.
            </p>
          </section>

          <section id="admin-fee">
            <h2>Admin Fee (AED 580)</h2>
            <p>
              The admin fee is a flat AED 580 for apartments and AED 430 for land or villa 
              transactions. It&apos;s a small fee in the grand scheme of things, but it&apos;s 
              worth noting because it&apos;s payable separately from the percentage-based fees.
            </p>
          </section>

          <section id="innovation-fee">
            <h2>Innovation Fee (0.25%)</h2>
            <p>
              Introduced as part of the Dubai government&apos;s innovation initiatives, this 
              0.25% fee is calculated on the property&apos;s sale price. On a AED 1 million 
              property, that&apos;s AED 2,500. It&apos;s often overlooked in fee calculations 
              but adds up on higher-value properties — AED 12,500 on a AED 5 million purchase.
            </p>
          </section>

          <section id="mortgage-fees">
            <h2>Mortgage Registration Fees</h2>
            <p>
              If you&apos;re financing the purchase with a mortgage, there are additional DLD 
              fees for registering the mortgage:
            </p>
            <ul>
              <li><strong>Mortgage registration fee:</strong> 0.25% of the loan amount</li>
              <li><strong>Mortgage admin fee:</strong> AED 290</li>
            </ul>
            <p>
              On a AED 1 million mortgage, that&apos;s AED 2,500 + AED 290 = AED 2,790. If you 
              later refinance or pay off the mortgage, a similar fee applies for removing the 
              mortgage from the title deed.
            </p>
          </section>

          <section id="calculation-examples">
            <h2>Calculation Examples</h2>
            <p>
              Here&apos;s what total DLD fees look like at different price points (cash purchase, apartment):
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property Price</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Transfer (4%)</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Innovation (0.25%)</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Admin + Title</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total DLD Fees</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">AED 500,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">20,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,250</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">830</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">22,080</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">AED 1,000,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">40,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">2,500</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">830</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">43,330</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">AED 1,500,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">60,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">3,750</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">830</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">64,580</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">AED 2,000,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">80,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">5,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">830</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">85,830</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">AED 5,000,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">200,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">12,500</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">830</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">213,330</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">AED 10,000,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">400,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">25,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">830</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">425,830</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              As you can see, the effective DLD fee rate is slightly above 4.25% due to the 
              innovation fee and fixed charges. On a AED 1 million property, you&apos;re paying 
              roughly 4.33% in total DLD fees. This percentage gets marginally lower on more 
              expensive properties as the fixed fees become proportionally smaller.
            </p>
          </section>

          <section id="who-pays">
            <h2>Who Pays the DLD Fee?</h2>
            <p>
              This is one of the most debated questions in Dubai real estate. Legally, the 4% 
              transfer fee is to be shared equally — 2% by the buyer and 2% by the seller. 
              That&apos;s what DLD&apos;s official guidelines say.
            </p>
            <p>
              In practice? It depends entirely on the deal:
            </p>
            <ul>
              <li><strong>Strong seller&apos;s market:</strong> Buyers often pay the full 4%</li>
              <li><strong>Buyer&apos;s market:</strong> Sellers may agree to split or cover their portion</li>
              <li><strong>Off-plan (from developer):</strong> Some developers offer &quot;DLD fee waiver&quot; promotions where they cover the 4%</li>
              <li><strong>Negotiated deals:</strong> Some sellers price the property higher and &quot;cover&quot; the DLD fee — effectively baking it into the price</li>
            </ul>
            <p>
              Always clarify this before signing the MOU. It should be explicitly stated who 
              bears the DLD fee. Don&apos;t leave it ambiguous — it&apos;s a significant amount 
              and a common source of disputes. For more on all the <Link href="/guides/hidden-costs-buying-property-dubai" className="text-primary-600 hover:underline">hidden costs of buying property</Link>, 
              check our detailed breakdown.
            </p>
          </section>

          <section id="payment-methods">
            <h2>How to Pay DLD Fees</h2>
            <p>
              DLD fees can be paid through several channels:
            </p>
            <ul>
              <li><strong>Trustee offices:</strong> Authorized DLD trustee offices handle transfers and accept manager&apos;s cheques</li>
              <li><strong>Dubai REST app:</strong> The official DLD mobile app allows digital payments for some services</li>
              <li><strong>Bank transfers:</strong> Some trustee offices accept wire transfers</li>
              <li><strong>Developer sales offices:</strong> For off-plan purchases, fees can often be paid at the developer&apos;s office</li>
            </ul>
            <p>
              Personal cheques and cash are generally not accepted for DLD transfer fees. 
              Make sure you have a manager&apos;s cheque ready on the day of transfer — 
              this is arranged through your bank.
            </p>
          </section>

          <section id="off-plan-fees">
            <h2>DLD Fees for Off-Plan Properties</h2>
            <p>
              Off-plan property purchases have the same 4% DLD fee, but the timing is different. 
              For off-plan deals, the fee is typically:
            </p>
            <ul>
              <li>Paid at the time of initial registration (booking stage)</li>
              <li>Based on the total purchase price, not just the amount paid so far</li>
              <li>Sometimes split across the payment plan by the developer</li>
            </ul>
            <p>
              Some developers run promotions where they cover the DLD fee, effectively giving 
              you a 4% discount. Always check if this is a genuine discount or if it&apos;s 
              been factored into a higher base price. Compare the developer&apos;s total cost 
              (price + fees) against similar properties in the area to see if you&apos;re 
              genuinely getting a better deal.
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