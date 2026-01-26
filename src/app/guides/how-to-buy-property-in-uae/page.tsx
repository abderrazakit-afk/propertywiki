import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Buy Property in UAE - Complete Buyer\'s Guide for All Emirates',
  description: 'Comprehensive guide to buying property in the UAE including Dubai, Abu Dhabi, Sharjah, and other emirates. Learn about ownership laws, procedures, costs, and residency visas.',
  keywords: ['buy property UAE', 'UAE property guide', 'Dubai real estate', 'Abu Dhabi property', 'foreigner buy property UAE'],
  openGraph: {
    title: 'How to Buy Property in UAE - Complete Buyer\'s Guide',
    description: 'Comprehensive guide to buying property across all UAE emirates for foreign investors.',
    type: 'article',
    publishedTime: '2024-04-01',
    modifiedTime: '2024-12-20',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Buying Property in the UAE', level: 2 },
  { id: 'ownership-types', title: 'Types of Property Ownership', level: 2 },
  { id: 'emirates-comparison', title: 'Property Buying by Emirate', level: 2 },
  { id: 'buyer-requirements', title: 'Requirements for Foreign Buyers', level: 2 },
  { id: 'buying-process', title: 'The Buying Process', level: 2 },
  { id: 'costs-breakdown', title: 'Complete Cost Breakdown', level: 2 },
  { id: 'financing', title: 'Financing Your Purchase', level: 2 },
  { id: 'residency-visas', title: 'Residency Visas Through Property', level: 2 },
  { id: 'investment-tips', title: 'Investment Tips', level: 2 },
]

const faqs = [
  {
    question: 'Can foreigners buy property anywhere in the UAE?',
    answer: 'Foreign nationals can purchase freehold property in designated zones in Dubai, Abu Dhabi, and some other emirates. Each emirate has different regulations and designated areas where foreign ownership is permitted.',
  },
  {
    question: 'Which UAE emirate is best for property investment?',
    answer: 'Dubai offers the most mature market with high liquidity and rental yields of 5-8%. Abu Dhabi provides stability with government-backed projects. Sharjah and other emirates offer lower entry prices but with different ownership rules.',
  },
  {
    question: 'What is the minimum property value for a UAE visa?',
    answer: 'In Dubai, properties worth AED 750,000+ qualify for a 2-year investor visa. Properties worth AED 2 million+ qualify for the 10-year Golden Visa. Abu Dhabi has similar requirements.',
  },
  {
    question: 'Do I need to be in the UAE to buy property?',
    answer: 'No, you can purchase property remotely using Power of Attorney. Many developers and agents facilitate remote transactions for international buyers.',
  },
  {
    question: 'What are the ongoing costs of property ownership in UAE?',
    answer: 'Ongoing costs include annual service charges (varies by building, typically AED 10-30 per sq ft), property management fees (8-10% of rent if applicable), municipality fees, and utility connections.',
  },
]

const relatedArticles = [
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Detailed guide specific to Dubai property purchases.',
  },
  {
    title: 'How to Sell Property in UAE',
    href: '/guides/how-to-sell-property-in-uae',
    category: 'Guide',
    description: 'Complete guide to selling property in the UAE.',
  },
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership rights.',
  },
]

export default function HowToBuyPropertyUAEPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'How to Buy Property in UAE', href: '/guides/how-to-buy-property-in-uae' },
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
          title: 'How to Buy Property in UAE - Complete Buyer\'s Guide',
          description: 'Comprehensive guide to buying property across all UAE emirates.',
          url: 'https://propertywiki.com/guides/how-to-buy-property-in-uae',
          datePublished: '2024-04-01',
          dateModified: '2024-12-20',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Guides', url: 'https://propertywiki.com/guides' },
          { name: 'How to Buy Property in UAE', url: 'https://propertywiki.com/guides/how-to-buy-property-in-uae' },
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
            How to Buy Property in the UAE
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your complete guide to purchasing property across the United Arab Emirates.
            From Dubai to Abu Dhabi, understand the rules, process, and opportunities in each emirate.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/buy-property-uae.jpg"
            alt="UAE skyline with modern buildings"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Buying Property in the UAE</h2>
            <p>
              The United Arab Emirates has become one of the world&apos;s most attractive property markets for
              international investors. With tax-free ownership, world-class infrastructure, and strong rental
              yields, the UAE offers compelling opportunities across its seven emirates.
            </p>
            <p>
              Key advantages of UAE property investment:
            </p>
            <ul>
              <li><strong>No property tax:</strong> Zero annual property taxes on ownership</li>
              <li><strong>No income tax:</strong> Rental income is tax-free</li>
              <li><strong>Strong yields:</strong> Rental returns of 5-10% depending on location</li>
              <li><strong>Residency pathway:</strong> Property purchase can qualify for UAE residency</li>
              <li><strong>Currency stability:</strong> AED is pegged to the US Dollar</li>
            </ul>
          </section>

          <section id="ownership-types">
            <h2>Types of Property Ownership</h2>
            <p>
              The UAE offers different ownership structures depending on the emirate and zone:
            </p>

            <h3>Freehold Ownership</h3>
            <p>
              Complete ownership of the property and land in perpetuity. Available to all nationalities in
              designated areas. This is the most common form of ownership for foreign buyers in Dubai and
              Abu Dhabi.
            </p>
            <p>
              <Link href="/definitions/freehold-property" className="text-primary-600 hover:underline">
                Learn more about freehold property →
              </Link>
            </p>

            <h3>Leasehold Ownership</h3>
            <p>
              Ownership of the property for a fixed term (typically 99 years) with rights to use and rent.
              Common in some older developments and certain emirates.
            </p>
            <p>
              <Link href="/definitions/leasehold" className="text-primary-600 hover:underline">
                Learn more about leasehold property →
              </Link>
            </p>

            <h3>Usufruct Rights</h3>
            <p>
              The right to use and benefit from a property for a specified period. This is more common in
              Abu Dhabi for certain zones.
            </p>
          </section>

          <section id="emirates-comparison">
            <h2>Property Buying by Emirate</h2>
            
            <div className="space-y-6 my-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dubai</h3>
                <p className="text-gray-700 mb-3">
                  The UAE&apos;s most active property market with over 50 freehold zones open to foreign buyers.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Transfer fee: 4% of property value</li>
                  <li>• Average yields: 5-8%</li>
                  <li>• Popular areas: Dubai Marina, Downtown, Palm Jumeirah, JVC</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Abu Dhabi</h3>
                <p className="text-gray-700 mb-3">
                  The capital offers freehold ownership in designated Investment Zones with a more stable,
                  government-backed market.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Transfer fee: 2% of property value</li>
                  <li>• Average yields: 5-7%</li>
                  <li>• Popular areas: Saadiyat Island, Yas Island, Al Reem Island, Al Raha Beach</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sharjah</h3>
                <p className="text-gray-700 mb-3">
                  Offers usufruct rights (100-year leases) to foreign buyers. More affordable entry point
                  with proximity to Dubai.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Ownership: 100-year usufruct</li>
                  <li>• Lower property prices than Dubai</li>
                  <li>• Popular areas: Al Mamzar, Al Khan</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ras Al Khaimah</h3>
                <p className="text-gray-700 mb-3">
                  Growing market with freehold ownership for foreigners in designated areas. Known for
                  luxury resorts and more affordable options.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Transfer fee: 2% of property value</li>
                  <li>• Popular areas: Marjan Island, Al Hamra Village</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="buyer-requirements">
            <h2>Requirements for Foreign Buyers</h2>
            <p>
              The UAE has minimal requirements for foreign property buyers:
            </p>
            <ul>
              <li><strong>Nationality:</strong> No restrictions - buyers from any country welcome</li>
              <li><strong>Age:</strong> Must be 21 or older</li>
              <li><strong>Residency:</strong> Not required - you don&apos;t need to live in the UAE to buy</li>
              <li><strong>Documentation:</strong> Valid passport is the primary requirement</li>
              <li><strong>Financing:</strong> Can be cash or mortgage (banks offer loans to non-residents)</li>
            </ul>
          </section>

          <section id="buying-process">
            <h2>The Buying Process</h2>
            
            <h3>1. Research and Property Selection</h3>
            <p>
              Work with a registered real estate agent (RERA-certified in Dubai) to identify suitable
              properties based on your budget, goals, and preferred location.
            </p>

            <h3>2. Due Diligence</h3>
            <p>
              Verify the property title, check for any outstanding mortgages or disputes, and review
              service charge history. Your agent should provide these details.
            </p>

            <h3>3. Offer and Negotiation</h3>
            <p>
              Make an offer through your agent. In the secondary market, prices are often negotiable.
              Off-plan properties from developers typically have fixed pricing.
            </p>

            <h3>4. Sales Agreement (MOU)</h3>
            <p>
              Sign the Memorandum of Understanding outlining terms of sale. Pay the initial deposit
              (typically 10%) at this stage.
            </p>

            <h3>5. Developer NOC</h3>
            <p>
              For secondary market purchases, the seller obtains a No Objection Certificate from the
              original developer, confirming all dues are cleared.
            </p>

            <h3>6. Transfer of Ownership</h3>
            <p>
              Complete the transfer at the relevant Land Department. Pay remaining funds and receive
              your title deed.
            </p>
          </section>

          <section id="costs-breakdown">
            <h2>Complete Cost Breakdown</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dubai</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Abu Dhabi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Transfer Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">4%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Agency Commission</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">NOC Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 500-5,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 500-2,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Admin Fees</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 580</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 1,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mortgage Registration</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.25%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.1%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">Estimated Total</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">~7-8%</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">~5-6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="financing">
            <h2>Financing Your Purchase</h2>
            <p>
              UAE banks offer mortgages to both residents and non-residents:
            </p>

            <h3>For UAE Residents</h3>
            <ul>
              <li>Loan-to-value: Up to 80% for first property</li>
              <li>Interest rates: 3.5-5% variable</li>
              <li>Maximum tenure: 25 years</li>
            </ul>

            <h3>For Non-Residents</h3>
            <ul>
              <li>Loan-to-value: Up to 50-75%</li>
              <li>Interest rates: 4-6% variable</li>
              <li>Maximum tenure: 15-25 years</li>
              <li>Additional documentation required (income proof from home country)</li>
            </ul>
          </section>

          <section id="residency-visas">
            <h2>Residency Visas Through Property</h2>
            <p>
              Property investment can qualify you for UAE residency:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-primary-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">2-Year Investor Visa</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Minimum: AED 750,000</li>
                  <li>• Property must be ready (not off-plan)</li>
                  <li>• Renewable</li>
                </ul>
              </div>
              <div className="bg-primary-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">10-Year Golden Visa</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Minimum: AED 2,000,000</li>
                  <li>• Can include off-plan property</li>
                  <li>• Includes family members</li>
                  <li>• No sponsor required</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="investment-tips">
            <h2>Investment Tips</h2>
            <ul>
              <li><strong>Research the developer:</strong> For off-plan, verify the developer&apos;s track record</li>
              <li><strong>Understand service charges:</strong> These vary significantly and affect your net returns</li>
              <li><strong>Consider liquidity:</strong> Dubai offers the most liquid market for resale</li>
              <li><strong>Factor in management:</strong> If not residing in UAE, budget for property management</li>
              <li><strong>Plan for currency:</strong> AED is pegged to USD; consider your base currency exposure</li>
              <li><strong>Keep documentation:</strong> Maintain records for visa applications and future sales</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-04-01"
          dateModified="2024-12-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
