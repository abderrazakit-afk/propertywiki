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
  title: 'Short-Term Rental License in Dubai Guide',
  description: 'Complete guide to obtaining a DTCM holiday home license in Dubai. Step-by-step process, costs, requirements, documents needed, and penalties for non-compliance.',
  keywords: ['DTCM license Dubai', 'holiday home license Dubai', 'short-term rental permit Dubai', 'Airbnb license Dubai', 'Dubai tourism license'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/short-term-rental-license-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/short-term-rental-license-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/short-term-rental-license-dubai',
      'x-default': 'https://propertywiki.ai/guides/short-term-rental-license-dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/short-term-rental-license-dubai',
    title: 'Short-Term Rental License in Dubai Guide',
    description: 'Complete guide to the DTCM holiday home license process in Dubai.',
    type: 'article',
    publishedTime: '2025-09-01',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'why-license', title: 'Why You Need a License', level: 2 },
  { id: 'dtcm-overview', title: 'What Is the DTCM License?', level: 2 },
  { id: 'requirements', title: 'Requirements and Eligibility', level: 2 },
  { id: 'documents-needed', title: 'Documents Needed', level: 2 },
  { id: 'application-process', title: 'Step-by-Step Application Process', level: 2 },
  { id: 'costs-fees', title: 'Costs and Fees Breakdown', level: 2 },
  { id: 'penalties', title: 'Penalties for Non-Compliance', level: 2 },
  { id: 'operator-vs-self', title: 'Using an Operator vs Self-Registration', level: 2 },
  { id: 'renewal-process', title: 'License Renewal', level: 2 },
]

const faqs = [
  {
    question: 'How much does a DTCM holiday home license cost in Dubai?',
    answer: 'The DTCM holiday home license costs approximately AED 1,520 per year per property. This includes the initial application fee and annual permit. Additional costs may include property inspection fees and Tourism Dirham registration. Some operators bundle these costs into their management fees.',
  },
  {
    question: 'How long does it take to get a short-term rental license in Dubai?',
    answer: 'The DTCM license typically takes 2-4 weeks from application to approval. The timeline depends on document completeness, property inspection scheduling, and DTCM processing times. Using an authorized holiday home operator can sometimes speed up the process as they have established relationships with DTCM.',
  },
  {
    question: 'Can a tenant get a short-term rental license in Dubai?',
    answer: 'Yes, tenants can obtain a DTCM license, but they need written consent from their landlord (a No Objection Certificate). The landlord must agree to the property being used for short-term rentals. This NOC must be submitted as part of the license application along with your tenancy contract.',
  },
  {
    question: 'What happens if I operate Airbnb in Dubai without a license?',
    answer: 'Operating without a DTCM license is illegal and can result in fines of AED 10,000 for the first offence, escalating to AED 50,000 for repeat violations. DTCM actively monitors platforms like Airbnb and Booking.com. Unlicensed listings can be reported and removed, and persistent offenders may face legal action.',
  },
  {
    question: 'Do I need a separate license for each property I list on Airbnb?',
    answer: 'Yes, each property requires its own DTCM holiday home permit. If you operate multiple units, you need a permit for each one. However, if you use a licensed holiday home operator, they may manage multiple properties under their master license, simplifying the process for you.',
  },
]

const relatedArticles = [
  {
    title: 'Best Areas for Airbnb in Dubai 2026',
    href: '/guides/best-areas-airbnb-dubai',
    category: 'Guide',
    description: 'Discover the top areas for Airbnb investment in Dubai.',
  },
  {
    title: 'Is Airbnb Allowed in Dubai Marina?',
    href: '/guides/airbnb-dubai-marina-guide',
    category: 'Guide',
    description: 'Everything you need to know about running an Airbnb in Dubai Marina.',
  },
  {
    title: 'Short-Term Rental ROI by Area in Dubai',
    href: '/guides/short-term-rental-roi-dubai',
    category: 'Guide',
    description: 'Compare STR vs long-term rental returns across Dubai areas.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Complete buying guide for foreign property investors in Dubai.',
  },
]

export default function ShortTermRentalLicenseDubaiPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Short-Term Rental License in Dubai', href: '/guides/short-term-rental-license-dubai' },
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
          title: 'Short-Term Rental License in Dubai - Complete Guide',
          description: 'Complete guide to the DTCM holiday home license process in Dubai.',
          url: 'https://propertywiki.ai/guides/short-term-rental-license-dubai',
          datePublished: '2025-09-01',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Short-Term Rental License in Dubai', url: 'https://propertywiki.ai/guides/short-term-rental-license-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Licensing Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Short-Term Rental License in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Want to list your Dubai property on Airbnb or Booking.com? You&apos;ll need a DTCM holiday 
            home license first. Here&apos;s exactly how to get one, what it costs, and what happens if 
            you skip it.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="why-license">
            <h2>Why You Need a License</h2>
            <p>
              Dubai doesn&apos;t take unlicensed short-term rentals lightly. The Department of Tourism 
              and Commerce Marketing (DTCM) regulates the entire holiday home sector, and every property 
              listed on platforms like Airbnb, Booking.com, or VRBO must hold a valid permit.
            </p>
            <p>
              The licensing system exists for several reasons: guest safety, quality standards, tax 
              collection (Tourism Dirham fees), and ensuring fair competition with hotels. From an 
              investor&apos;s perspective, the license is also a competitive advantage — licensed 
              properties can operate freely, command higher prices, and build legitimate business 
              reputations.
            </p>
            <p>
              DTCM actively monitors listing platforms and conducts inspections. Getting caught 
              without a license means fines starting at AED 10,000, so the AED 1,520 annual license 
              fee is a no-brainer investment.
            </p>
          </section>

          <section id="dtcm-overview">
            <h2>What Is the DTCM License?</h2>
            <p>
              The DTCM holiday home license is a government permit issued by Dubai&apos;s Department 
              of Tourism and Commerce Marketing. It authorizes you to rent out a residential property 
              on a short-term basis (less than one year) to tourists and visitors.
            </p>
            <p>
              There are two main categories:
            </p>
            <ul>
              <li><strong>Holiday Home Permit:</strong> For individual property owners renting out 
                their own property. This is what most Airbnb hosts need</li>
              <li><strong>Holiday Home Operator License:</strong> For companies managing multiple 
                properties on behalf of owners. This is a business license with different requirements</li>
            </ul>
            <p>
              The permit is property-specific — each unit you want to rent out needs its own permit. 
              The license is valid for one year and must be renewed annually.
            </p>
          </section>

          <section id="requirements">
            <h2>Requirements and Eligibility</h2>
            <p>
              To qualify for a DTCM holiday home license, you need to meet the following requirements:
            </p>
            <ul>
              <li><strong>Property ownership or authorized tenancy:</strong> You must own the property 
                (title deed required) or have a valid tenancy contract with the landlord&apos;s written 
                consent (NOC) for short-term rental use</li>
              <li><strong>Property in a freehold or approved area:</strong> The property must be in an 
                area where short-term rentals are permitted. All major freehold zones qualify, 
                including <Link href="/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">Dubai Marina</Link>, 
                <Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline"> Downtown Dubai</Link>, 
                <Link href="/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline"> Palm Jumeirah</Link>, 
                <Link href="/locations/dubai/jbr" className="text-primary-600 hover:underline"> JBR</Link>, and 
                <Link href="/locations/dubai/business-bay" className="text-primary-600 hover:underline"> Business Bay</Link></li>
              <li><strong>Fully furnished property:</strong> The property must be furnished to a 
                minimum standard, including beds, linens, kitchenware, and basic amenities</li>
              <li><strong>Safety compliance:</strong> Smoke detectors, fire extinguisher, first aid kit, 
                and emergency exit plan must be in place</li>
              <li><strong>No outstanding service charges:</strong> Your building service charges must be 
                up to date</li>
            </ul>
          </section>

          <section id="documents-needed">
            <h2>Documents Needed</h2>
            <p>
              Prepare the following documents before starting your application:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="font-medium text-gray-900 mb-3">Required Documents Checklist</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Title deed (or tenancy contract with landlord NOC)</li>
                <li>✓ Passport copy of the property owner</li>
                <li>✓ Emirates ID copy (if UAE resident)</li>
                <li>✓ Property photographs (interior and exterior)</li>
                <li>✓ Floor plan of the property</li>
                <li>✓ DEWA account statement (proves active utilities)</li>
                <li>✓ Building NOC (if required by your building management)</li>
                <li>✓ Professional indemnity insurance certificate (recommended)</li>
              </ul>
            </div>
          </section>

          <section id="application-process">
            <h2>Step-by-Step Application Process</h2>
            <p>
              Follow these steps to obtain your DTCM holiday home license:
            </p>

            <h3>Step 1: Create a DTCM Account</h3>
            <p>
              Visit the <a href="https://www.visitdubai.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DTCM 
              portal</a> and create an account. You&apos;ll need to provide your personal details, contact 
              information, and passport copy. Alternatively, you can register through an authorized 
              holiday home operator who will handle the process on your behalf.
            </p>

            <h3>Step 2: Submit Property Details</h3>
            <p>
              Fill in the property information form with your unit details: location, size, number of 
              bedrooms, amenities, and maximum guest capacity. Upload the required documents including 
              your title deed, photos, and floor plan.
            </p>

            <h3>Step 3: Pay the License Fee</h3>
            <p>
              Pay the application and license fee of approximately AED 1,520. Payment can be made 
              online through the DTCM portal. This fee covers your initial application and first 
              year of operation.
            </p>

            <h3>Step 4: Property Inspection</h3>
            <p>
              DTCM may schedule an inspection of your property to verify it meets the required 
              standards. The inspector will check furnishing quality, safety equipment, cleanliness, 
              and general condition. Not all properties are inspected, but you should be prepared.
            </p>

            <h3>Step 5: Receive Your Permit</h3>
            <p>
              Once approved, you&apos;ll receive your holiday home permit number. This number must be 
              displayed on all your listing platforms. The entire process typically takes 2-4 weeks 
              from submission to approval.
            </p>

            <h3>Step 6: Register for Tourism Dirham</h3>
            <p>
              As a licensed operator, you must collect the Tourism Dirham fee from guests (AED 10-15 
              per bedroom per night, depending on the property classification) and remit it to DTCM 
              on a monthly basis.
            </p>
          </section>

          <section id="costs-fees">
            <h2>Costs and Fees Breakdown</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fee Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DTCM License Fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 1,520</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Annual</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Tourism Dirham (Holiday Home)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 10-15/room/night</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Collected from guests, remitted monthly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Property Inspection (if required)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Included in license fee</td>
                    <td className="px-4 py-3 text-sm text-gray-500">At application and renewal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Insurance (recommended)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 1,000-3,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Annual</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The total annual regulatory cost is approximately AED 2,500-4,500 when you include the 
              license, insurance, and administrative costs. Compared to the potential revenue of 
              AED 100,000-250,000+ per year from a well-located property, this is a minimal expense.
            </p>
          </section>

          <section id="penalties">
            <h2>Penalties for Non-Compliance</h2>
            <p>
              DTCM enforces compliance strictly. Here&apos;s what you risk by operating without a license 
              or violating regulations:
            </p>
            <ul>
              <li><strong>First offence:</strong> Fine of AED 10,000</li>
              <li><strong>Second offence:</strong> Fine of AED 20,000</li>
              <li><strong>Third offence:</strong> Fine of AED 50,000 and potential listing removal</li>
              <li><strong>Repeated violations:</strong> Legal action and potential ban from operating 
                holiday homes in Dubai</li>
            </ul>
            <p>
              DTCM uses technology to scan listing platforms and identify unlicensed properties. They 
              also respond to reports from neighbours, building management, and guests. The risk of 
              getting caught is real and increasing every year as enforcement tightens.
            </p>
          </section>

          <section id="operator-vs-self">
            <h2>Using an Operator vs Self-Registration</h2>
            <p>
              You have two paths to getting licensed:
            </p>
            <ul>
              <li><strong>Self-registration:</strong> Apply directly through the DTCM portal. You 
                manage the entire process yourself, including guest registration, Tourism Dirham 
                collection, and annual renewal. Best for hands-on investors who live in Dubai</li>
              <li><strong>Through an operator:</strong> Licensed holiday home operators (like Frank 
                Porter, GuestReady, or bnbme) can register your property under their master license. 
                They handle all compliance, guest registration, and fee remittance. The operator 
                fee (typically 18-25% of revenue) covers license management as part of their service</li>
            </ul>
            <p>
              For most investors — particularly those based overseas — using an operator is the 
              simpler path. They handle the regulatory burden and ensure you stay compliant. If you 
              want to understand the full financial picture, our <Link href="/guides/short-term-rental-roi-dubai" className="text-primary-600 hover:underline">Short-Term 
              Rental ROI</Link> guide breaks down all costs including management fees.
            </p>
          </section>

          <section id="renewal-process">
            <h2>License Renewal</h2>
            <p>
              Your DTCM license must be renewed annually. The renewal process is simpler than the 
              initial application:
            </p>
            <ol>
              <li>Log into the DTCM portal 30 days before your license expires</li>
              <li>Update any property details that have changed</li>
              <li>Pay the renewal fee (AED 1,520)</li>
              <li>Your license is typically renewed within 1-2 weeks</li>
            </ol>
            <p>
              Don&apos;t let your license lapse. Operating with an expired license carries the same 
              penalties as operating without one. Set a calendar reminder 60 days before expiry to 
              give yourself plenty of time.
            </p>
            <p>
              Ready to find the best area for your Airbnb investment? Check our <Link href="/guides/best-areas-airbnb-dubai" className="text-primary-600 hover:underline">Best 
              Areas for Airbnb in Dubai</Link> guide, or dive into the specifics of <Link href="/guides/airbnb-dubai-marina-guide" className="text-primary-600 hover:underline">Airbnb 
              in Dubai Marina</Link>.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-09-01"
          dateModified="2026-02-05"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina</p>
            </Link>
            <Link href="/locations/dubai/jbr" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Jumeirah Beach Residence (JBR)</p>
            </Link>
            <Link href="/locations/dubai/palm-jumeirah" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Palm Jumeirah</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
            <Link href="/guides/best-areas-airbnb-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Areas for Airbnb in Dubai</p>
            </Link>
            <Link href="/guides/short-term-rental-roi-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Short-Term Rental ROI by Area in Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
