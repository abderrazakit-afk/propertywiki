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
  title: 'How to Buy Property in Dubai - Complete Guide for Foreigners',
  description: 'Step-by-step guide to buying property in Dubai as a foreigner. Learn about freehold zones, visa requirements, legal processes, costs, and financing options.',
  keywords: ['buy property Dubai', 'Dubai property guide', 'foreigner buy property Dubai', 'Dubai real estate'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/how-to-buy-property-in-dubai',
  },
  openGraph: {
    title: 'How to Buy Property in Dubai - Complete Guide for Foreigners',
    description: 'Step-by-step guide to buying property in Dubai as a foreigner, including freehold zones and legal processes.',
    type: 'article',
    publishedTime: '2024-03-01',
    modifiedTime: '2024-12-20',
    url: 'https://propertywiki.ai/guides/how-to-buy-property-in-dubai',
  },
}

const tableOfContents = [
  { id: 'can-foreigners-buy', title: 'Can Foreigners Buy Property in Dubai?', level: 2 },
  { id: 'freehold-zones', title: 'Freehold Zones in Dubai', level: 2 },
  { id: 'step-by-step-process', title: 'Step-by-Step Buying Process', level: 2 },
  { id: 'costs-and-fees', title: 'Costs and Fees', level: 2 },
  { id: 'financing-options', title: 'Financing Options', level: 2 },
  { id: 'golden-visa', title: 'Golden Visa Through Property', level: 2 },
  { id: 'tips-for-buyers', title: 'Tips for Buyers', level: 2 },
]

const faqs = [
  {
    question: 'Can foreigners buy property in Dubai?',
    answer: 'Yes, foreigners of any nationality can buy property in Dubai within designated freehold zones. You do not need to be a UAE resident or have a visa to purchase property.',
  },
  {
    question: 'How much deposit do I need to buy property in Dubai?',
    answer: 'Typically, you need a 10% deposit when signing the Memorandum of Understanding (MOU). If financing with a mortgage, non-residents usually need 20-25% down payment.',
  },
  {
    question: 'What are the total costs of buying property in Dubai?',
    answer: 'Total costs include: 4% DLD transfer fee, 2% agency commission (typically), AED 580 DLD admin fee, NOC fees (varies by developer), and mortgage registration fee (0.25% if applicable). Budget approximately 7-8% on top of the property price.',
  },
  {
    question: 'Do I get a visa if I buy property in Dubai?',
    answer: 'Yes, property investment can qualify you for a residency visa. Properties worth AED 750,000+ qualify for a 2-year visa, while AED 2 million+ qualifies for a 10-year Golden Visa.',
  },
  {
    question: 'Can I get a mortgage as a non-resident in Dubai?',
    answer: 'Yes, many UAE banks offer mortgages to non-residents, typically up to 50-75% of property value. Interest rates are usually 1-2% higher than for residents.',
  },
]

const relatedArticles = [
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership and what it means for property buyers.',
  },
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Comprehensive guide to one of Dubai\'s most popular freehold zones.',
  },
  {
    title: 'Dubai Real Estate Overview',
    href: '/locations/dubai',
    category: 'Location',
    description: 'Overview of Dubai\'s property market and investment opportunities.',
  },
]

export default function HowToBuyPropertyDubaiPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'How to Buy Property in Dubai', href: '/guides/how-to-buy-property-in-dubai' },
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
          title: 'How to Buy Property in Dubai - Complete Guide for Foreigners',
          description: 'Step-by-step guide to buying property in Dubai as a foreigner.',
          url: 'https://propertywiki.ai/guides/how-to-buy-property-in-dubai',
          datePublished: '2024-03-01',
          dateModified: '2024-12-20',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'How to Buy Property in Dubai', url: 'https://propertywiki.ai/guides/how-to-buy-property-in-dubai' },
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
            How to Buy Property in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide for foreign nationals looking to purchase property in Dubai. 
            Everything you need to know from legal requirements to closing the deal.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="can-foreigners-buy">
            <h2>Can Foreigners Buy Property in Dubai?</h2>
            <p>
              Yes, foreign nationals from any country can purchase property in Dubai. The UAE 
              government opened the real estate market to foreign ownership in 2002, making Dubai 
              one of the most accessible property markets in the Middle East.
            </p>
            <p>
              Key points about foreign property ownership in Dubai:
            </p>
            <ul>
              <li>No residency or visa requirements to purchase property</li>
              <li>Full <a href="/definitions/freehold-property">freehold ownership</a> rights in designated zones</li>
              <li>Property can be purchased remotely with power of attorney</li>
              <li>No restrictions on nationality, age, or number of properties</li>
              <li>Corporate entities can also purchase property</li>
            </ul>
          </section>

          <section id="freehold-zones">
            <h2>Freehold Zones in Dubai</h2>
            <p>
              Foreign nationals can only purchase property in designated freehold zones. 
              These include most popular residential and commercial areas:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Popular Residential</h3>
                <ul className="text-sm space-y-1">
                  <li><Link href="/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">Dubai Marina</Link></li>
                  <li><Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">Downtown Dubai</Link></li>
                  <li>Palm Jumeirah</li>
                  <li>Jumeirah Beach Residence (JBR)</li>
                  <li>Business Bay</li>
                  <li>Arabian Ranches</li>
                  <li>Dubai Hills Estate</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Emerging Areas</h3>
                <ul className="text-sm space-y-1">
                  <li>Dubai Creek Harbour</li>
                  <li>Mohammed Bin Rashid City</li>
                  <li>Dubai South</li>
                  <li>Jumeirah Village Circle (JVC)</li>
                  <li>Dubai Sports City</li>
                  <li>Damac Hills</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="step-by-step-process">
            <h2>Step-by-Step Buying Process</h2>
            <p>
              The property buying process in Dubai is straightforward and typically takes 
              30-60 days from agreement to completion:
            </p>
            
            <h3>Step 1: Property Search & Selection</h3>
            <p>
              Start your search on the UAE&apos;s leading property portals: <strong>Bayut</strong>, <strong>PropertyFinder</strong>, 
              and <strong>Dubizzle</strong>. These platforms offer comprehensive listings with filters for location, 
              price, property type, and amenities. Once you&apos;ve identified potential properties, work with a 
              RERA-registered real estate agent to arrange viewings and guide you through the process.
            </p>

            <h3>Step 2: Make an Offer</h3>
            <p>
              Once you&apos;ve found a property, make an offer through your agent. Negotiations 
              are common, especially in the secondary market.
            </p>

            <h3>Step 3: Sign the MOU (Form F)</h3>
            <p>
              The Memorandum of Understanding (MOU) is the initial sales agreement. At this 
              stage, you typically pay a 10% deposit to the seller via cheque.
            </p>

            <h3>Step 4: Obtain NOC from Developer</h3>
            <p>
              The seller must obtain a No Objection Certificate (NOC) from the original 
              developer. This confirms there are no outstanding service charges or issues.
            </p>

            <h3>Step 5: Transfer at Dubai Land Department</h3>
            <p>
              Both parties visit the DLD (or use a service center) to complete the transfer. 
              Payment of the remaining balance and fees is made at this stage.
            </p>

            <h3>Step 6: Receive Title Deed</h3>
            <p>
              Upon completion, you receive the title deed in your name, confirming your 
              ownership of the property.
            </p>
          </section>

          <section id="costs-and-fees">
            <h2>Costs and Fees</h2>
            <p>
              Budget for the following costs when buying property in Dubai:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fee Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid To</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DLD Transfer Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">4% of property value</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Dubai Land Department</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Agency Commission</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2% of property value</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Real Estate Agent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DLD Admin Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 580</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Dubai Land Department</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">NOC Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 500 - 5,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Developer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mortgage Registration</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.25% + AED 290</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Dubai Land Department</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="financing-options">
            <h2>Financing Options</h2>
            <p>
              Several financing options are available for property purchases in Dubai:
            </p>
            <ul>
              <li><strong>Bank Mortgages:</strong> UAE banks offer mortgages to both residents and 
              non-residents, typically financing 50-80% of the property value</li>
              <li><strong>Developer Payment Plans:</strong> Many off-plan properties offer payment 
              plans, sometimes extending post-handover</li>
              <li><strong>Cash Purchase:</strong> Often preferred for faster transactions and 
              potential price negotiations</li>
            </ul>
          </section>

          <section id="golden-visa">
            <h2>Golden Visa Through Property</h2>
            <p>
              Property investment can qualify you for UAE residency:
            </p>
            <ul>
              <li><strong>2-Year Investor Visa:</strong> Available for properties worth AED 750,000+</li>
              <li><strong>10-Year Golden Visa:</strong> Available for properties worth AED 2 million+</li>
            </ul>
            <p>
              The Golden Visa allows you to live, work, and study in the UAE without a national 
              sponsor, and includes family members.
            </p>
          </section>

          <section id="tips-for-buyers">
            <h2>Tips for Buyers</h2>
            <ul>
              <li><strong>Work with registered agents:</strong> Only use RERA-registered real estate agents</li>
              <li><strong>Verify the property:</strong> Check the title deed and ensure there are no 
              outstanding mortgages or disputes</li>
              <li><strong>Understand service charges:</strong> These can vary significantly between 
              buildings and affect your ongoing costs</li>
              <li><strong>Consider rental potential:</strong> If investing, research rental yields and 
              demand in your chosen area</li>
              <li><strong>Plan for currency:</strong> Property transactions are in AED; consider 
              exchange rate implications</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-03-01"
          dateModified="2024-12-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
