import { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Sell Property in UAE - Complete Seller\'s Guide',
  description: 'Complete guide to selling property in the UAE. Learn about documentation, NOC process, DLD transfer, agent selection, pricing strategy, and timeline.',
  keywords: ['sell property UAE', 'sell property Dubai', 'UAE property sale', 'DLD transfer', 'property seller guide'],
  alternates: {
    canonical: 'https://propertywiki.com/guides/how-to-sell-property-in-uae',
  },
  openGraph: {
    title: 'How to Sell Property in UAE - Complete Seller\'s Guide',
    description: 'Step-by-step guide to selling property in the UAE, including documentation and legal processes.',
    type: 'article',
    publishedTime: '2024-06-15',
    modifiedTime: '2024-12-20',
    url: 'https://propertywiki.com/guides/how-to-sell-property-in-uae',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Selling Property in the UAE', level: 2 },
  { id: 'preparing-to-sell', title: 'Preparing Your Property for Sale', level: 2 },
  { id: 'required-documents', title: 'Required Documents', level: 2 },
  { id: 'step-by-step-process', title: 'Step-by-Step Selling Process', level: 2 },
  { id: 'costs-and-fees', title: 'Costs and Fees for Sellers', level: 2 },
  { id: 'pricing-strategy', title: 'Pricing Strategy', level: 2 },
  { id: 'timeline', title: 'Expected Timeline', level: 2 },
  { id: 'tips-for-sellers', title: 'Tips for Sellers', level: 2 },
]

const faqs = [
  {
    question: 'How long does it take to sell a property in the UAE?',
    answer: 'The selling process typically takes 30-90 days from listing to completion. This includes finding a buyer (varies), signing the MOU, obtaining the NOC (7-14 days), and completing the transfer at DLD (1-2 days).',
  },
  {
    question: 'What fees do sellers pay when selling property in UAE?',
    answer: 'Sellers typically pay: agency commission (2% of sale price), NOC fee (AED 500-5,000 depending on developer), and share of DLD transfer fee (negotiable, often split with buyer). Some developers also charge an administrative transfer fee.',
  },
  {
    question: 'Can I sell my property if I still have a mortgage?',
    answer: 'Yes, you can sell a mortgaged property. The buyer or their bank will need to settle your outstanding mortgage as part of the transaction. This is handled through a process called mortgage release or liability transfer.',
  },
  {
    question: 'Do I need to be in the UAE to sell my property?',
    answer: 'No, you can appoint a representative with Power of Attorney (POA) to handle the sale on your behalf. The POA must be attested and registered with the Dubai Land Department.',
  },
  {
    question: 'What is an NOC and why do I need it?',
    answer: 'A No Objection Certificate (NOC) is issued by the developer confirming there are no outstanding service charges or violations. It is mandatory for property transfer at the Dubai Land Department.',
  },
]

const relatedArticles = [
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Complete guide to purchasing property in Dubai.',
  },
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership in the UAE.',
  },
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Market insights for Dubai Marina properties.',
  },
]

export default function HowToSellPropertyUAEPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'How to Sell Property in UAE', href: '/guides/how-to-sell-property-in-uae' },
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
          title: 'How to Sell Property in UAE - Complete Seller\'s Guide',
          description: 'Step-by-step guide to selling property in the UAE.',
          url: 'https://propertywiki.com/guides/how-to-sell-property-in-uae',
          datePublished: '2024-06-15',
          dateModified: '2024-12-20',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Guides', url: 'https://propertywiki.com/guides' },
          { name: 'How to Sell Property in UAE', url: 'https://propertywiki.com/guides/how-to-sell-property-in-uae' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Selling Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            How to Sell Property in the UAE
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide for property owners looking to sell in Dubai, Abu Dhabi, and other UAE emirates.
            From preparation to final transfer, everything you need to know.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/sell-property-uae.jpg"
            alt="Elegant interior of a luxury UAE property ready for sale, featuring spacious rooms and natural lighting through large windows"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Selling Property in the UAE</h2>
            <p>
              The UAE property market offers a transparent and efficient process for selling real estate.
              Whether you&apos;re selling an apartment in Dubai Marina or a villa in Abu Dhabi, the process
              follows clear steps regulated by government authorities.
            </p>
            <p>
              The key regulatory bodies are:
            </p>
            <ul>
              <li><strong>Dubai Land Department (DLD)</strong> - For properties in Dubai</li>
              <li><strong>Abu Dhabi Department of Municipalities and Transport</strong> - For Abu Dhabi properties</li>
              <li><strong>RERA (Real Estate Regulatory Agency)</strong> - Regulates real estate agents and brokers</li>
            </ul>
          </section>

          <section id="preparing-to-sell">
            <h2>Preparing Your Property for Sale</h2>
            <p>
              Proper preparation can significantly impact your sale price and timeline:
            </p>
            
            <h3>Property Presentation</h3>
            <ul>
              <li>Deep clean the property and consider professional cleaning services</li>
              <li>Complete any minor repairs (leaky faucets, scuffed walls, broken fixtures)</li>
              <li>Declutter and depersonalize to help buyers envision themselves in the space</li>
              <li>Consider light staging for vacant properties</li>
              <li>Arrange professional photography for listings</li>
            </ul>

            <h3>Financial Preparation</h3>
            <ul>
              <li>Pay all outstanding service charges to ensure smooth NOC issuance</li>
              <li>If mortgaged, obtain a liability letter from your bank showing the outstanding amount</li>
              <li>Review your original purchase documents and title deed</li>
            </ul>
          </section>

          <section id="required-documents">
            <h2>Required Documents</h2>
            <p>
              Gather these documents before listing your property:
            </p>
            <div className="bg-primary-50 rounded-xl p-6 my-6">
              <h3 className="font-medium text-gray-900 mb-4">Essential Documents Checklist</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Original Title Deed
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Valid passport copy
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Emirates ID (if UAE resident)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Service charge receipts
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Power of Attorney (if selling remotely)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mortgage liability letter (if applicable)
                </li>
              </ul>
            </div>
          </section>

          <section id="step-by-step-process">
            <h2>Step-by-Step Selling Process</h2>
            
            <h3>Step 1: Appoint a Real Estate Agent</h3>
            <p>
              Choose a RERA-registered agent with experience in your property type and area.
              Sign a listing agreement specifying the commission rate (typically 2%) and listing period.
            </p>

            <h3>Step 2: List and Market Your Property</h3>
            <p>
              Your agent will create listings on property portals like Property Finder, Bayut, and Dubizzle.
              They&apos;ll arrange viewings and handle buyer inquiries.
            </p>

            <h3>Step 3: Receive and Negotiate Offers</h3>
            <p>
              Review offers from potential buyers. Your agent will help negotiate terms including price,
              payment timeline, and any conditions.
            </p>

            <h3>Step 4: Sign the MOU (Form F)</h3>
            <p>
              Once terms are agreed, both parties sign the Memorandum of Understanding. The buyer typically
              pays a 10% deposit at this stage, held by the agent or an escrow account.
            </p>

            <h3>Step 5: Apply for NOC</h3>
            <p>
              Apply for a No Objection Certificate from the developer. This requires:
            </p>
            <ul>
              <li>Payment of any outstanding service charges</li>
              <li>Application fee (varies by developer, AED 500-5,000)</li>
              <li>Processing time: typically 7-14 business days</li>
            </ul>

            <h3>Step 6: Settle Any Mortgage</h3>
            <p>
              If your property is mortgaged, coordinate with the buyer&apos;s bank to settle the outstanding
              amount. The buyer&apos;s funds or their bank will pay off your mortgage.
            </p>

            <h3>Step 7: Transfer at Dubai Land Department</h3>
            <p>
              Both parties attend the DLD trustee office or authorized transfer center. The buyer pays
              the remaining balance, and ownership is transferred to their name.
            </p>
          </section>

          <section id="costs-and-fees">
            <h2>Costs and Fees for Sellers</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fee Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Agency Commission</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2% of sale price</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Standard rate, negotiable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">NOC Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 500 - 5,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Varies by developer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DLD Transfer Fee Share</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0-2% of property value</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Negotiable, often paid by buyer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mortgage Release Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">~AED 1,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">If property is mortgaged</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="pricing-strategy">
            <h2>Pricing Strategy</h2>
            <p>
              Setting the right price is crucial for a successful sale:
            </p>
            <ul>
              <li><strong>Research comparable sales:</strong> Look at recent transactions in your building or community</li>
              <li><strong>Consider current market conditions:</strong> Is it a buyer&apos;s or seller&apos;s market?</li>
              <li><strong>Account for unique features:</strong> Views, upgrades, floor level, and parking can affect value</li>
              <li><strong>Get a professional valuation:</strong> Consider hiring a certified valuer for an objective assessment</li>
              <li><strong>Price competitively:</strong> Overpricing leads to longer listing times and eventual price reductions</li>
            </ul>
          </section>

          <section id="timeline">
            <h2>Expected Timeline</h2>
            <div className="bg-gray-50 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-500">Week 1-2</div>
                  <div className="text-gray-700">Property preparation and listing</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-500">Week 2-8</div>
                  <div className="text-gray-700">Marketing, viewings, and offers (varies by market)</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-500">Week 9</div>
                  <div className="text-gray-700">MOU signing and deposit collection</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-500">Week 10-11</div>
                  <div className="text-gray-700">NOC application and processing</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-500">Week 12</div>
                  <div className="text-gray-700">Transfer completion at DLD</div>
                </div>
              </div>
            </div>
          </section>

          <section id="tips-for-sellers">
            <h2>Tips for Sellers</h2>
            <ul>
              <li><strong>Clear all service charges:</strong> Outstanding payments can delay or block the NOC</li>
              <li><strong>Be flexible with viewings:</strong> More access means more potential buyers</li>
              <li><strong>Respond quickly to offers:</strong> Serious buyers move fast in competitive markets</li>
              <li><strong>Consider tenant situation:</strong> If tenanted, factor in notice periods and potential buyer preferences</li>
              <li><strong>Keep documents organized:</strong> Having everything ready speeds up the process</li>
              <li><strong>Be realistic about timeline:</strong> Rushing can lead to lower prices</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-06-15"
          dateModified="2024-12-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
