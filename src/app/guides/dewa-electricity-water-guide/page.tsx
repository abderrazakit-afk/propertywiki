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
  title: 'DEWA Guide - Dubai Electricity & Water Setup',
  description: 'Complete guide to setting up DEWA services. Learn about registration, required documents, deposits, fees, and bill payment options in Dubai.',
  keywords: ['DEWA Dubai', 'Dubai electricity', 'Dubai water', 'DEWA registration', 'DEWA deposit', 'DEWA smart home', 'Dubai utility setup', 'DEWA app', 'DEWA fees'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/dewa-electricity-water-guide',
    languages: {
      'en': 'https://propertywiki.ai/guides/dewa-electricity-water-guide',
      'ar': 'https://propertywiki.ai/ar/guides/dewa-electricity-water-guide',
      'x-default': 'https://propertywiki.ai/guides/dewa-electricity-water-guide',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/dewa-electricity-water-guide',
    title: 'DEWA Guide - Dubai Electricity & Water Setup',
    description: 'Complete guide to setting up DEWA services in Dubai including registration and deposits.',
    type: 'article',
    publishedTime: '2024-06-15',
    modifiedTime: '2025-01-20',
    images: [
      {
        url: 'https://propertywiki.ai/images/dewa-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'DEWA Dubai Electricity and Water Guide',
      },
    ],
  },
}

const tableOfContents = [
  { id: 'dewa-overview', title: 'DEWA Overview', level: 2 },
  { id: 'setting-up-account', title: 'Setting Up DEWA Account', level: 2 },
  { id: 'required-documents', title: 'Required Documents', level: 2 },
  { id: 'registration-process', title: 'Registration Process', level: 2 },
  { id: 'fees-deposits', title: 'DEWA Fees & Deposits', level: 2 },
  { id: 'smart-home-integration', title: 'Smart Home Integration', level: 2 },
  { id: 'bill-payment-options', title: 'Bill Payment Options', level: 2 },
  { id: 'tips-new-residents', title: 'Tips for New Residents', level: 2 },
]

const faqs = [
  {
    question: 'How long does it take to activate DEWA services?',
    answer: 'DEWA services are typically activated within 24-48 hours after completing the registration and paying the required deposit. For new connections in newly built properties, it may take up to 5 working days.',
  },
  {
    question: 'Is the DEWA deposit refundable?',
    answer: 'Yes, the DEWA security deposit is fully refundable when you terminate your account and move out of the property. The deposit will be refunded after deducting any outstanding bills, usually within 2-4 weeks via bank transfer or cheque.',
  },
  {
    question: 'Can I transfer my DEWA account to a new address?',
    answer: 'Yes, you can transfer your DEWA account when moving to a new property in Dubai. You need to apply for a move-out from your current address and move-in to the new address through the DEWA app or website. A new deposit may be required based on the property type.',
  },
  {
    question: 'How can I reduce my DEWA bill?',
    answer: 'You can reduce your DEWA bill by: using energy-efficient appliances with high star ratings, setting AC to 24°C, using LED lights, unplugging devices when not in use, taking shorter showers, fixing leaky taps, and using the DEWA smart home app to monitor consumption patterns.',
  },
  {
    question: 'What happens if I dont pay my DEWA bill on time?',
    answer: 'If you miss a DEWA payment, you will receive reminder notifications. Continued non-payment can result in disconnection of services, typically after 2-3 months of unpaid bills. A reconnection fee (around AED 100) will be charged to restore services after disconnection.',
  },
  {
    question: 'Does DEWA provide district cooling or only electricity for AC?',
    answer: 'DEWA provides electricity that powers individual AC units in most properties. District cooling (chilled water for AC) is provided by separate companies like Empower or Emicool in certain areas. District cooling bills are separate from DEWA and are charged per BTU consumption.',
  },
]

const relatedArticles = [
  {
    title: 'How to Rent Property in UAE',
    href: '/guides/how-to-rent-property-in-uae',
    category: 'Guide',
    description: 'Complete guide to renting property in the UAE including contracts, deposits, and tenant rights.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to buying property in Dubai as a foreigner.',
  },
  {
    title: 'Dubai Real Estate Overview',
    href: '/locations/dubai',
    category: 'Location',
    description: 'Overview of Dubai\'s property market and popular neighborhoods.',
  },
  {
    title: 'Building Facilities & Amenities Guide',
    href: '/guides/building-facilities-amenities-dubai',
    category: 'Guide',
    description: 'Understanding building amenities and service charges in Dubai.',
  },
  {
    title: 'AC Maintenance in Dubai',
    href: '/guides/ac-maintenance-dubai',
    category: 'Guide',
    description: 'Complete guide to maintaining your AC in Dubai\'s climate.',
  },
]

export default function DEWAGuidePage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'DEWA Electricity & Water Guide', href: '/guides/dewa-electricity-water-guide' },
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
          title: 'DEWA Guide - Dubai Electricity & Water Authority Setup for Residents',
          description: 'Complete guide to setting up DEWA services in Dubai including registration, deposits, fees, and smart home integration.',
          url: 'https://propertywiki.ai/guides/dewa-electricity-water-guide',
          datePublished: '2024-06-15',
          dateModified: '2025-01-20',
          author: { name: author.name },
          image: 'https://propertywiki.ai/images/dewa-guide.jpg',
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'DEWA Electricity & Water Guide', url: 'https://propertywiki.ai/guides/dewa-electricity-water-guide' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Utility Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            DEWA Guide: Dubai Electricity & Water Authority
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about setting up and managing your DEWA account in Dubai. 
            From registration and deposits to smart home features and bill payment options.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/dewa-guide.jpg"
            alt="Dubai electricity and water utility infrastructure"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="dewa-overview">
            <h2>DEWA Overview</h2>
            <p>
              The <a href="https://www.dewa.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Dubai Electricity and Water Authority (DEWA)</a> is the exclusive provider of electricity 
              and water services across Dubai. Established in 1992, DEWA serves over 1 million customers 
              and is known for its world-class infrastructure and digital services.
            </p>
            <p>
              Key facts about DEWA:
            </p>
            <ul>
              <li>Provides both electricity and desalinated water to all of Dubai</li>
              <li>One of the most efficient utilities in the world with minimal power outages</li>
              <li>Offers comprehensive digital services through the DEWA app and website</li>
              <li>Implements smart meters for real-time consumption monitoring</li>
              <li>Generates significant renewable energy through solar parks</li>
              <li>Customer service available in multiple languages including Arabic and English</li>
            </ul>
          </section>

          <section id="setting-up-account">
            <h2>Setting Up DEWA Account</h2>
            <p>
              Whether you are renting or purchasing property in Dubai, you need to set up a DEWA account 
              in your name to receive electricity and water services. The process is straightforward and 
              can be completed online or in person.
            </p>
            <p>
              There are three main ways to register for DEWA services:
            </p>
            <ul>
              <li><strong>DEWA App:</strong> Download the official DEWA app from App Store or Google Play for the fastest registration experience</li>
              <li><strong>DEWA Website:</strong> Visit dewa.gov.ae and use the online services portal</li>
              <li><strong>Customer Service Centers:</strong> Visit any DEWA customer happiness center in person with your documents</li>
            </ul>
            <p>
              The online registration through the app or website is recommended as it is available 24/7 
              and typically provides faster activation.
            </p>
          </section>

          <section id="required-documents">
            <h2>Required Documents</h2>
            <p>
              To register for DEWA services, you will need to provide the following documents:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">For Tenants (Renting)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Valid passport copy</li>
                <li>Valid UAE residence visa</li>
                <li>Emirates ID (front and back)</li>
                <li>Ejari-registered tenancy contract</li>
                <li>Move-out certificate from previous tenant (if applicable)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">For Property Owners</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Valid passport copy</li>
                <li>Valid UAE residence visa (if applicable)</li>
                <li>Emirates ID (front and back)</li>
                <li>Title deed from Dubai Land Department</li>
                <li>Completion certificate (for new properties)</li>
              </ul>
            </div>
            <p>
              <strong>Note:</strong> All documents must be clear, valid, and in PDF or image format 
              if applying online. The tenancy contract must be registered with Ejari to be accepted. 
              For more information about renting and Ejari registration, see our <Link href="/guides/how-to-rent-property-in-uae" className="text-primary-600 hover:underline">guide to renting property in the UAE</Link>.
            </p>
          </section>

          <section id="registration-process">
            <h2>Registration Process</h2>
            <p>
              Follow these steps to register for DEWA services:
            </p>
            
            <h3>Step 1: Gather Documents</h3>
            <p>
              Collect all required documents as listed above. Ensure your tenancy contract is 
              Ejari-registered and all documents are valid and clear.
            </p>

            <h3>Step 2: Choose Registration Method</h3>
            <p>
              Download the DEWA app or visit <a href="https://www.dewa.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">dewa.gov.ae</a>. Create an account using your Emirates ID 
              and mobile number if you do not already have one.
            </p>

            <h3>Step 3: Submit Application</h3>
            <p>
              Select &quot;Move In&quot; or &quot;New Connection&quot; from the services menu. Upload all required 
              documents and fill in your property details including the premise number.
            </p>

            <h3>Step 4: Pay Security Deposit</h3>
            <p>
              Pay the required security deposit online using your credit/debit card. Payment 
              confirmation will be sent to your email and mobile.
            </p>

            <h3>Step 5: Activation</h3>
            <p>
              DEWA services are typically activated within 24-48 hours. You will receive an SMS 
              and email confirmation once your connection is active.
            </p>
          </section>

          <section id="fees-deposits">
            <h2>DEWA Fees & Deposits</h2>
            <p>
              DEWA requires a refundable security deposit and may charge connection fees based on 
              your property type:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Security Deposit</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Connection Fee</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Apartment (Flat)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 2,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 100 - 200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Villa / Townhouse</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 4,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 200 - 400</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Commercial Property</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Varies (based on load)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Important notes about deposits:</strong>
            </p>
            <ul>
              <li>The security deposit is fully refundable when you close your account</li>
              <li>Deposits can be paid via credit/debit card, bank transfer, or cash at service centers</li>
              <li>Connection fees are non-refundable one-time charges</li>
              <li>Monthly bills include: electricity charges, water charges, housing fee (5% of annual rent), and sewage charges</li>
            </ul>
          </section>

          <section id="smart-home-integration">
            <h2>Smart Home Integration</h2>
            <p>
              DEWA offers advanced smart home features through its digital platform and smart meter 
              infrastructure:
            </p>
            
            <h3>Smart Meters</h3>
            <p>
              Most properties in Dubai are now equipped with DEWA smart meters that provide:
            </p>
            <ul>
              <li>Real-time electricity and water consumption data</li>
              <li>Automatic meter reading (no more estimated bills)</li>
              <li>Remote connection and disconnection capabilities</li>
              <li>Immediate detection of unusual consumption patterns</li>
            </ul>

            <h3>DEWA Smart Living App</h3>
            <p>
              The DEWA app offers comprehensive smart home features:
            </p>
            <ul>
              <li><strong>Consumption Monitoring:</strong> Track daily, weekly, and monthly usage patterns</li>
              <li><strong>Bill Prediction:</strong> Estimate your upcoming bill based on current consumption</li>
              <li><strong>Usage Alerts:</strong> Set custom alerts when consumption exceeds thresholds</li>
              <li><strong>Comparison Tools:</strong> Compare your usage with similar households</li>
              <li><strong>Green Tips:</strong> Personalized recommendations to reduce consumption</li>
              <li><strong>Solar Panel Integration:</strong> Monitor solar panel output if installed</li>
            </ul>
          </section>

          <section id="bill-payment-options">
            <h2>Bill Payment Options</h2>
            <p>
              DEWA offers multiple convenient ways to pay your bills:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Digital Payments</h3>
                <ul className="text-sm space-y-1">
                  <li>DEWA App (iOS & Android)</li>
                  <li>DEWA Website (dewa.gov.ae)</li>
                  <li>Auto-debit from bank account</li>
                  <li>Credit/Debit card online</li>
                  <li>Apple Pay / Samsung Pay</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Offline Payments</h3>
                <ul className="text-sm space-y-1">
                  <li>du & Etisalat payment machines</li>
                  <li>Supermarkets (Carrefour, Lulu, etc.)</li>
                  <li>ENBD & other bank ATMs</li>
                  <li>DEWA Customer Centers</li>
                  <li>Self-service kiosks</li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Recommended:</strong> Setting up auto-debit ensures you never miss a payment and 
              may qualify you for green bill discounts. Bills are generated monthly and payment is 
              due within 30 days.
            </p>
          </section>

          <section id="tips-new-residents">
            <h2>Tips for New Residents</h2>
            <p>
              Follow these tips to manage your DEWA services efficiently and reduce your utility costs:
            </p>
            
            <h3>Reducing Your Bills</h3>
            <ul>
              <li><strong>AC Settings:</strong> Set your AC to 24°C - each degree lower increases consumption by 5-6%</li>
              <li><strong>Energy-Efficient Appliances:</strong> Look for 5-star rated appliances when purchasing</li>
              <li><strong>LED Lighting:</strong> Replace all lights with LED bulbs to save up to 80% on lighting costs</li>
              <li><strong>Peak Hours:</strong> Run high-consumption appliances (washing machine, dishwasher) during off-peak hours</li>
              <li><strong>Water Conservation:</strong> Fix leaky taps promptly and take shorter showers</li>
              <li><strong>Standby Power:</strong> Unplug devices when not in use or use power strips</li>
            </ul>

            <h3>District Cooling vs Individual AC</h3>
            <p>
              Many newer developments in Dubai use district cooling (chilled water) instead of 
              individual AC units. Important differences:
            </p>
            <ul>
              <li><strong>District Cooling:</strong> Billed separately by providers like Empower or Emicool based on BTU consumption</li>
              <li><strong>Individual AC:</strong> Electricity cost included in your <a href="https://www.dewa.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DEWA</a> bill</li>
              <li>District cooling is generally more energy-efficient but may have higher or lower costs depending on usage patterns</li>
              <li>Check with your landlord or building management which system your property uses</li>
            </ul>
            <p>
              Learn more about AC systems and maintenance in our <Link href="/guides/ac-maintenance-dubai" className="text-primary-600 hover:underline">AC maintenance guide</Link>.
            </p>

            <h3>First-Time Setup Tips</h3>
            <ul>
              <li>Apply for DEWA connection before moving in to avoid delays</li>
              <li>Keep your account number saved in the DEWA app for easy access</li>
              <li>Register for SMS and email alerts to track consumption</li>
              <li>Download the DEWA app immediately after setup for best service access</li>
              <li>Check that all appliances work after connection is activated</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-06-15"
          dateModified="2025-01-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
