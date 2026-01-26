import { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import { authors } from '@/lib/content'

export const metadata: Metadata = {
  title: 'How to Rent Property in UAE - Complete Tenant\'s Guide',
  description: 'Complete guide to renting property in the UAE. Learn about Ejari, tenancy contracts, tenant rights, security deposits, DEWA connections, and rental regulations.',
  keywords: ['rent property UAE', 'rent apartment Dubai', 'Ejari registration', 'UAE tenancy contract', 'tenant rights UAE'],
  openGraph: {
    title: 'How to Rent Property in UAE - Complete Tenant\'s Guide',
    description: 'Everything you need to know about renting property in Dubai, Abu Dhabi, and across the UAE.',
    type: 'article',
    publishedTime: '2024-05-01',
    modifiedTime: '2024-12-20',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Renting Property in the UAE', level: 2 },
  { id: 'finding-property', title: 'Finding a Rental Property', level: 2 },
  { id: 'tenancy-contract', title: 'Understanding the Tenancy Contract', level: 2 },
  { id: 'ejari-registration', title: 'Ejari and Tawtheeq Registration', level: 2 },
  { id: 'costs-and-fees', title: 'Costs and Fees', level: 2 },
  { id: 'tenant-rights', title: 'Tenant Rights and Protections', level: 2 },
  { id: 'utilities-setup', title: 'Setting Up Utilities', level: 2 },
  { id: 'end-of-tenancy', title: 'End of Tenancy Process', level: 2 },
  { id: 'tips-for-tenants', title: 'Tips for Tenants', level: 2 },
]

const faqs = [
  {
    question: 'What is Ejari and do I need it?',
    answer: 'Ejari is Dubai\'s mandatory rental contract registration system. All tenancy contracts in Dubai must be registered with Ejari. You need it for visa processing, utility connections, school enrollment, and to protect your legal rights as a tenant.',
  },
  {
    question: 'How many cheques are typical for rent in UAE?',
    answer: 'Traditionally, landlords preferred 1-4 cheques for the full year. However, the market now commonly accepts 4-6 cheques, and some landlords accept 12 monthly cheques, especially for longer-term tenants or in slower markets.',
  },
  {
    question: 'What is the maximum rent increase allowed in Dubai?',
    answer: 'Dubai\'s RERA Rental Calculator determines allowable rent increases based on how current rent compares to market averages. If rent is 10% below market, no increase is allowed. Increases range from 5-20% depending on how far below market the current rent is.',
  },
  {
    question: 'Can a landlord evict me before my contract ends?',
    answer: 'A landlord can only evict during a tenancy for specific reasons: non-payment of rent, subletting without permission, or using the property illegally. They must provide 30 days notice. At contract end, they need 12 months notice and valid reasons like personal use or sale.',
  },
  {
    question: 'What should I check before signing a rental contract?',
    answer: 'Verify: the landlord owns the property (title deed), property condition with photos, maintenance responsibilities, included amenities, cheque payment schedule, notice periods, security deposit terms, and any additional fees for parking or facilities.',
  },
]

const relatedArticles = [
  {
    title: 'How to Buy Property in UAE',
    href: '/guides/how-to-buy-property-in-uae',
    category: 'Guide',
    description: 'Consider buying? Compare ownership vs renting.',
  },
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Explore one of Dubai\'s most popular rental areas.',
  },
  {
    title: 'Downtown Dubai Guide',
    href: '/locations/dubai/downtown-dubai',
    category: 'Location',
    description: 'Prime rental location in the heart of Dubai.',
  },
]

export default function HowToRentPropertyUAEPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'How to Rent Property in UAE', href: '/guides/how-to-rent-property-in-uae' },
  ]

  const author = authors['james-wilson']

  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'How to Rent Property in UAE - Complete Tenant\'s Guide',
          description: 'Complete guide to renting property in the UAE.',
          url: 'https://propertywiki.com/guides/how-to-rent-property-in-uae',
          datePublished: '2024-05-01',
          dateModified: '2024-12-20',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Guides', url: 'https://propertywiki.com/guides' },
          { name: 'How to Rent Property in UAE', url: 'https://propertywiki.com/guides/how-to-rent-property-in-uae' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Rental Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            How to Rent Property in the UAE
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your comprehensive guide to renting apartments and villas in Dubai, Abu Dhabi, and across the UAE.
            From finding property to signing contracts and knowing your rights.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/rent-property-uae.jpg"
            alt="Modern apartment interior in UAE"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Renting Property in the UAE</h2>
            <p>
              The UAE offers a well-regulated rental market with strong tenant protections. Whether you&apos;re
              relocating for work, studying, or simply experiencing life in the Emirates, understanding the
              rental process will help you secure the right property and protect your interests.
            </p>
            <p>
              Key aspects of UAE rentals:
            </p>
            <ul>
              <li><strong>Annual contracts:</strong> Standard leases are for one year, renewable</li>
              <li><strong>Advance payment:</strong> Rent is typically paid upfront via post-dated cheques</li>
              <li><strong>Regulated increases:</strong> Rent increases are governed by official calculators</li>
              <li><strong>Mandatory registration:</strong> Contracts must be registered (Ejari in Dubai, Tawtheeq in Abu Dhabi)</li>
            </ul>
          </section>

          <section id="finding-property">
            <h2>Finding a Rental Property</h2>
            
            <h3>Online Property Portals</h3>
            <p>
              Major property portals in the UAE include:
            </p>
            <ul>
              <li><strong>Property Finder:</strong> Largest portal with verified listings</li>
              <li><strong>Bayut:</strong> Popular with detailed neighborhood information</li>
              <li><strong>Dubizzle:</strong> Good for direct landlord listings</li>
            </ul>

            <h3>Working with Agents</h3>
            <p>
              Real estate agents can help find properties and negotiate terms. In the UAE:
            </p>
            <ul>
              <li>Agents must be RERA-registered (Dubai) or DED-licensed (other emirates)</li>
              <li>Commission is typically 5% of annual rent (paid by tenant)</li>
              <li>Agents can arrange viewings and handle paperwork</li>
            </ul>

            <h3>What to Consider</h3>
            <ul>
              <li><strong>Location:</strong> Proximity to work, schools, metro, amenities</li>
              <li><strong>Budget:</strong> Factor in all costs, not just rent</li>
              <li><strong>Amenities:</strong> Pool, gym, parking, security</li>
              <li><strong>Furnished vs unfurnished:</strong> Furnished costs more but saves on setup</li>
              <li><strong>Contract terms:</strong> Cheque requirements, notice periods</li>
            </ul>
          </section>

          <section id="tenancy-contract">
            <h2>Understanding the Tenancy Contract</h2>
            <p>
              The tenancy contract (Unified Tenancy Contract in Dubai) is a legally binding agreement.
              Key elements include:
            </p>

            <div className="bg-primary-50 rounded-xl p-6 my-6">
              <h3 className="font-medium text-gray-900 mb-4">Contract Essentials</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Property details (address, size, type)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Landlord and tenant information
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rental amount and payment schedule (cheques)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Security deposit amount
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Contract duration and renewal terms
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Maintenance responsibilities
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Early termination clauses
                </li>
              </ul>
            </div>
          </section>

          <section id="ejari-registration">
            <h2>Ejari and Tawtheeq Registration</h2>
            
            <h3>Ejari (Dubai)</h3>
            <p>
              Ejari is Dubai&apos;s official system for registering tenancy contracts. It is mandatory and
              provides legal protection for both parties.
            </p>
            <p>
              <strong>Why you need Ejari:</strong>
            </p>
            <ul>
              <li>Required for residency visa processing</li>
              <li>Needed for DEWA (utility) connection</li>
              <li>Required for children&apos;s school enrollment</li>
              <li>Provides legal standing in disputes</li>
            </ul>
            <p>
              <strong>How to register:</strong>
            </p>
            <ul>
              <li>Online via Dubai REST app or Ejari website</li>
              <li>Through authorized typing centers</li>
              <li>At Real Estate Regulatory Agency (RERA) offices</li>
              <li>Fee: AED 220</li>
            </ul>

            <h3>Tawtheeq (Abu Dhabi)</h3>
            <p>
              Abu Dhabi uses the Tawtheeq system for tenancy registration. Similar to Ejari, it&apos;s
              mandatory for all rental contracts in the emirate and required for utility connections
              and visa processing.
            </p>
          </section>

          <section id="costs-and-fees">
            <h2>Costs and Fees</h2>
            <p>
              Budget for these costs when renting in the UAE:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">When Paid</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Security Deposit</td>
                    <td className="px-4 py-3 text-sm text-gray-500">5% of annual rent (unfurnished) / 10% (furnished)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Before move-in</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Agency Commission</td>
                    <td className="px-4 py-3 text-sm text-gray-500">5% of annual rent</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Upon signing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ejari Registration</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 220</td>
                    <td className="px-4 py-3 text-sm text-gray-500">After signing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DEWA Deposit</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 2,000 (apt) / 4,000 (villa)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">For utility connection</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Municipality Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">5% of annual rent (Dubai)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Monthly with DEWA bill</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="tenant-rights">
            <h2>Tenant Rights and Protections</h2>
            <p>
              UAE law provides strong protections for tenants:
            </p>

            <h3>Rent Increase Limits</h3>
            <p>
              Landlords cannot increase rent arbitrarily. Dubai&apos;s RERA Rental Index Calculator determines
              allowable increases based on market rates:
            </p>
            <ul>
              <li>If rent is 10% or less below market: No increase allowed</li>
              <li>If 11-20% below market: Maximum 5% increase</li>
              <li>If 21-30% below market: Maximum 10% increase</li>
              <li>If 31-40% below market: Maximum 15% increase</li>
              <li>If more than 40% below market: Maximum 20% increase</li>
            </ul>

            <h3>Eviction Protections</h3>
            <p>
              Landlords cannot evict tenants during a contract without valid cause. Even at contract end,
              they must provide 12 months written notice and have valid reasons such as:
            </p>
            <ul>
              <li>Personal use by the landlord or first-degree relatives</li>
              <li>Sale of the property</li>
              <li>Major renovation requiring vacancy</li>
              <li>Demolition of the building</li>
            </ul>

            <h3>Maintenance Responsibilities</h3>
            <p>
              Generally, landlords are responsible for major repairs and structural maintenance, while
              tenants handle minor repairs and day-to-day upkeep. Always clarify in the contract.
            </p>
          </section>

          <section id="utilities-setup">
            <h2>Setting Up Utilities</h2>
            
            <h3>DEWA (Dubai)</h3>
            <p>
              Dubai Electricity and Water Authority (DEWA) handles electricity and water. To connect:
            </p>
            <ul>
              <li>Apply online, via DEWA app, or at a customer service center</li>
              <li>Provide Ejari certificate, passport, and Emirates ID</li>
              <li>Pay security deposit (refundable when you leave)</li>
              <li>Connection is usually within 24 hours</li>
            </ul>

            <h3>Internet and TV</h3>
            <p>
              Etisalat and du are the main providers. Compare packages for home internet, TV, and mobile.
              Installation typically takes 3-7 days.
            </p>

            <h3>Gas (Villas)</h3>
            <p>
              If your villa uses gas, you&apos;ll need to register with EMGAS or the relevant provider and
              arrange for cylinder delivery or connection.
            </p>
          </section>

          <section id="end-of-tenancy">
            <h2>End of Tenancy Process</h2>
            
            <h3>If Not Renewing</h3>
            <ul>
              <li>Provide written notice as per contract (typically 2-3 months before expiry)</li>
              <li>Arrange final inspection with landlord</li>
              <li>Clear all DEWA bills and get final clearance</li>
              <li>Return keys and collect security deposit</li>
            </ul>

            <h3>Security Deposit Return</h3>
            <p>
              The landlord should return your security deposit within 30 days, minus any legitimate
              deductions for damages beyond normal wear and tear. Document the property condition
              at move-in and move-out with photos.
            </p>

            <h3>Early Termination</h3>
            <p>
              If you need to leave early, check your contract for break clauses. Typically, you may
              need to forfeit your security deposit or pay a penalty (often 2 months rent).
            </p>
          </section>

          <section id="tips-for-tenants">
            <h2>Tips for Tenants</h2>
            <ul>
              <li><strong>Document everything:</strong> Take photos/videos of the property condition before moving in</li>
              <li><strong>Get receipts:</strong> Always get receipts for deposits and payments</li>
              <li><strong>Read the contract carefully:</strong> Understand all terms before signing</li>
              <li><strong>Register Ejari immediately:</strong> Don&apos;t delay - you&apos;ll need it for many services</li>
              <li><strong>Know your rights:</strong> Familiarize yourself with tenant protection laws</li>
              <li><strong>Negotiate:</strong> In slower markets, you may be able to negotiate rent or cheque terms</li>
              <li><strong>Keep communication written:</strong> Email important discussions for records</li>
              <li><strong>Report issues promptly:</strong> Notify landlord of maintenance issues in writing</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-05-01"
          dateModified="2024-12-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
