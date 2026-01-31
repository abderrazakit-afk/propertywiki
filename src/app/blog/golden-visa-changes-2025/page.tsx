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
  title: 'Golden Visa Changes 2025 - What Property Investors Need to Know',
  description: 'Comprehensive guide to UAE Golden Visa updates for 2025. Learn about property investment requirements, application process, and benefits for foreign investors.',
  keywords: ['UAE Golden Visa', 'Dubai Golden Visa property', 'UAE residency visa', 'property investor visa'],
  alternates: {
    canonical: 'https://propertywiki.ai/blog/golden-visa-changes-2025',
  },
  openGraph: {
    title: 'Golden Visa Changes 2025 - What Property Investors Need to Know',
    description: 'Comprehensive guide to UAE Golden Visa updates for 2025.',
    type: 'article',
    publishedTime: '2025-01-05',
    modifiedTime: '2025-01-05',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'What is the UAE Golden Visa?', level: 2 },
  { id: 'property-requirements', title: 'Property Investment Requirements', level: 2 },
  { id: '2025-changes', title: '2025 Updates & Changes', level: 2 },
  { id: 'application-process', title: 'Application Process', level: 2 },
  { id: 'benefits', title: 'Benefits of Golden Visa', level: 2 },
  { id: 'comparison', title: 'Visa Categories Comparison', level: 2 },
]

const faqs = [
  {
    question: 'What is the minimum property value for a Golden Visa?',
    answer: 'As of 2025, the minimum property investment for a 10-year Golden Visa is AED 2 million. This can be a single property or multiple properties totaling this amount. The property must be fully paid (not under mortgage for the qualifying portion).',
  },
  {
    question: 'Can I include my family in the Golden Visa?',
    answer: 'Yes, Golden Visa holders can sponsor their spouse, children of any age, and unlimited domestic helpers. Parents can also be sponsored for a separate renewable visa.',
  },
  {
    question: 'Can I get a Golden Visa with an off-plan property?',
    answer: 'Yes, off-plan properties can qualify for a Golden Visa provided you have paid at least AED 2 million to the developer and the property is in an approved project registered with RERA.',
  },
  {
    question: 'Does the Golden Visa require me to live in the UAE?',
    answer: 'No, unlike standard residency visas, the Golden Visa does not have minimum stay requirements. You can maintain your visa status without residing in the UAE.',
  },
  {
    question: 'What happens if property value drops below AED 2 million?',
    answer: 'The qualifying amount is based on the purchase price, not current market value. As long as you paid AED 2 million or more, market fluctuations do not affect your visa eligibility.',
  },
]

const relatedArticles = [
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai as a foreigner.',
  },
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership and your property rights in the UAE.',
  },
  {
    title: 'Dubai Market Outlook 2025',
    href: '/blog/dubai-market-outlook-2025',
    category: 'Blog',
    description: 'Analysis of Dubai\'s property market and 2025 predictions.',
  },
]

export default function GoldenVisaChanges2025() {
  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: 'Golden Visa Changes 2025', href: '/blog/golden-visa-changes-2025' },
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
          title: 'Golden Visa Changes 2025 - What Property Investors Need to Know',
          description: 'Comprehensive guide to UAE Golden Visa updates for 2025.',
          url: 'https://propertywiki.ai/blog/golden-visa-changes-2025',
          datePublished: '2025-01-05',
          dateModified: '2025-01-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Blog', url: 'https://propertywiki.ai/blog' },
          { name: 'Golden Visa Changes 2025', url: 'https://propertywiki.ai/blog/golden-visa-changes-2025' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Regulations
            </span>
            <span className="text-gray-400">|</span>
            <time className="text-sm text-gray-500">January 5, 2025</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Golden Visa Changes 2025
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Recent updates to the UAE Golden Visa program and how they affect property 
            investors seeking long-term residency.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/blog/golden-visa.jpg"
            alt="UAE passport and visa documents representing the Golden Visa residency program for property investors"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>What is the UAE Golden Visa?</h2>
            <p>
              The UAE Golden Visa is a long-term residency program introduced in 2019, offering 
              5 or 10-year renewable visas to investors, entrepreneurs, exceptional talents, 
              and their families. For property investors, it provides a pathway to stable 
              residency in the UAE through real estate investment.
            </p>
            <p>
              Unlike standard employment or investor visas that require renewal every 2-3 years 
              and depend on sponsorship, the Golden Visa offers independence and long-term security. 
              Holders can live, work, and study in the UAE without needing a national sponsor.
            </p>

            <div className="my-8 p-6 bg-primary-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Golden Visa at a Glance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10</div>
                  <div className="text-sm text-gray-600">Years Validity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">AED 2M</div>
                  <div className="text-sm text-gray-600">Min. Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">0</div>
                  <div className="text-sm text-gray-600">Min. Stay Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-gray-600">Renewable</div>
                </div>
              </div>
            </div>
          </section>

          <section id="property-requirements">
            <h2>Property Investment Requirements</h2>
            <p>
              To qualify for a Golden Visa through property investment, you must meet 
              specific requirements:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Requirement</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Details</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Minimum Value</td>
                    <td className="border border-gray-200 px-4 py-3">AED 2,000,000</td>
                    <td className="border border-gray-200 px-4 py-3">Based on purchase price, not current value</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Property Type</td>
                    <td className="border border-gray-200 px-4 py-3"><Link href="/definitions/freehold-property">Freehold</Link> or Usufruct (99 years)</td>
                    <td className="border border-gray-200 px-4 py-3">Residential properties only</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Payment Status</td>
                    <td className="border border-gray-200 px-4 py-3">Fully paid or max 50% mortgage</td>
                    <td className="border border-gray-200 px-4 py-3">Unmortgaged portion must be AED 2M+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Multiple Properties</td>
                    <td className="border border-gray-200 px-4 py-3">Allowed</td>
                    <td className="border border-gray-200 px-4 py-3">Combined value must meet threshold</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Off-Plan Properties</td>
                    <td className="border border-gray-200 px-4 py-3">Allowed</td>
                    <td className="border border-gray-200 px-4 py-3">Must have paid AED 2M+ to developer</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Property Retention</td>
                    <td className="border border-gray-200 px-4 py-3">Must maintain ownership</td>
                    <td className="border border-gray-200 px-4 py-3">For duration of visa validity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Properties can be located anywhere in the UAE, including Dubai, Abu Dhabi, 
              Sharjah, or other emirates. Popular areas for Golden Visa investments include 
              <Link href="/locations/dubai/dubai-marina">Dubai Marina</Link>, 
              <Link href="/locations/dubai/downtown-dubai">Downtown Dubai</Link>, and 
              <Link href="/locations/dubai/palm-jumeirah">Palm Jumeirah</Link>.
            </p>
          </section>

          <section id="2025-changes">
            <h2>2025 Updates & Changes</h2>
            <p>
              The UAE government continues to refine the Golden Visa program. Key updates 
              for 2025 include:
            </p>

            <div className="my-8 space-y-4">
              <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Streamlined Application Process</h3>
                <p className="text-gray-700 text-sm">
                  The application process has been simplified with a unified digital platform. 
                  Most applications are now processed within 72 hours, compared to 2-4 weeks 
                  previously.
                </p>
              </div>

              <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Expanded Family Sponsorship</h3>
                <p className="text-gray-700 text-sm">
                  Golden Visa holders can now sponsor children of any age (previously capped 
                  at 25 for males) and an unlimited number of domestic helpers (previously 
                  limited to 3).
                </p>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">New Mortgage Flexibility</h3>
                <p className="text-gray-700 text-sm">
                  Properties with up to 50% mortgage now qualify, as long as the unmortgaged 
                  portion equals or exceeds AED 2 million. This makes the Golden Visa more 
                  accessible to property buyers using financing.
                </p>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Off-Plan Recognition</h3>
                <p className="text-gray-700 text-sm">
                  <Link href="/definitions/off-plan-property">Off-plan properties</Link> now 
                  fully qualify for Golden Visa based on payments made, even before construction 
                  completion. This encourages investment in new developments.
                </p>
              </div>
            </div>
          </section>

          <section id="application-process">
            <h2>Application Process</h2>
            <p>
              The Golden Visa application for property investors follows these steps:
            </p>

            <div className="my-8">
              <div className="relative">
                {[
                  { step: 1, title: 'Property Purchase', desc: 'Complete property purchase and obtain title deed or Oqood certificate for off-plan' },
                  { step: 2, title: 'Document Preparation', desc: 'Gather passport, photos, title deed, payment proof, medical insurance, bank statements' },
                  { step: 3, title: 'Online Application', desc: 'Submit application through ICP or GDRFA portal with all required documents' },
                  { step: 4, title: 'Medical Examination', desc: 'Complete medical fitness test at an approved center' },
                  { step: 5, title: 'Emirates ID', desc: 'Apply for Emirates ID at a typing center or service center' },
                  { step: 6, title: 'Visa Stamping', desc: 'Receive Golden Visa stamp in passport (valid for 10 years)' },
                ].map((item, index) => (
                  <div key={item.step} className="flex mb-4 last:mb-0">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      {index < 5 && <div className="w-0.5 h-full bg-primary-200 mt-2" />}
                    </div>
                    <div className="flex-1 pb-4">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Document</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Requirements</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Passport</td>
                    <td className="border border-gray-200 px-4 py-3">Valid for 6+ months, color copy</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">Required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Title Deed / Oqood</td>
                    <td className="border border-gray-200 px-4 py-3">Showing AED 2M+ value</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">Required</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Payment Evidence</td>
                    <td className="border border-gray-200 px-4 py-3">Bank statements or payment receipts</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">Required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Photographs</td>
                    <td className="border border-gray-200 px-4 py-3">White background, passport size</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">Required</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Health Insurance</td>
                    <td className="border border-gray-200 px-4 py-3">Valid UAE health insurance policy</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">Required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Bank Statement</td>
                    <td className="border border-gray-200 px-4 py-3">3 months, showing financial stability</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">Recommended</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="benefits">
            <h2>Benefits of Golden Visa</h2>
            <p>
              The Golden Visa offers numerous advantages for property investors:
            </p>

            <div className="my-8 grid md:grid-cols-2 gap-4">
              {[
                { icon: '10Y', title: 'Long-term Stability', desc: '10-year renewable residency without sponsor dependency' },
                { icon: '0', title: 'No Stay Requirements', desc: 'Maintain visa status without minimum time in UAE' },
                { icon: '100%', title: 'Full Ownership', desc: 'Retain 100% ownership of your business and assets' },
                { icon: 'Family', title: 'Family Inclusion', desc: 'Sponsor spouse, children (any age), and parents' },
                { icon: 'Banking', title: 'Banking Access', desc: 'Open bank accounts and access financial services' },
                { icon: 'Travel', title: 'Travel Freedom', desc: 'Multiple entry visa with easy travel' },
                { icon: 'Property', title: 'Property Rights', desc: 'Buy additional properties across the UAE' },
                { icon: 'Tax', title: 'Tax Benefits', desc: 'No income tax, capital gains, or property tax' },
              ].map((benefit) => (
                <div key={benefit.title} className="luxury-card p-4 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold text-sm">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="comparison">
            <h2>Visa Categories Comparison</h2>
            <p>
              Understanding how the property investor Golden Visa compares to other options:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Property Golden Visa</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Business Investor Visa</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Employment Visa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Duration</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">10 years</td>
                    <td className="border border-gray-200 px-4 py-3">10 years</td>
                    <td className="border border-gray-200 px-4 py-3">2-3 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Min. Investment</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">AED 2M property</td>
                    <td className="border border-gray-200 px-4 py-3">AED 10M+</td>
                    <td className="border border-gray-200 px-4 py-3">N/A</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Sponsor Required</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">No</td>
                    <td className="border border-gray-200 px-4 py-3">No</td>
                    <td className="border border-gray-200 px-4 py-3">Yes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Stay Requirement</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">None</td>
                    <td className="border border-gray-200 px-4 py-3">None</td>
                    <td className="border border-gray-200 px-4 py-3">6 months max absence</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Family Sponsorship</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">Unlimited</td>
                    <td className="border border-gray-200 px-4 py-3">Unlimited</td>
                    <td className="border border-gray-200 px-4 py-3">Salary dependent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Work Permit</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">Included</td>
                    <td className="border border-gray-200 px-4 py-3">Included</td>
                    <td className="border border-gray-200 px-4 py-3">Employer specific</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For most foreign investors looking to establish a presence in the UAE, the 
              property investor Golden Visa offers the best balance of accessibility, 
              benefits, and flexibility. Learn more about purchasing property in our 
              <Link href="/guides/how-to-buy-property-in-dubai">Dubai buying guide</Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 italic">
            Disclaimer: Visa regulations are subject to change. This article is for 
            informational purposes and does not constitute immigration advice. Always 
            verify current requirements with official UAE government sources or consult 
            with a qualified immigration advisor.
          </p>
        </div>

        <FAQSection faqs={faqs} />
        <AuthorBox author={author} datePublished="2025-01-05" dateModified="2025-01-05" />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
