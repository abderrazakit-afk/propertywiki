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
  title: 'Home Cleaning Services in Dubai - Guide 2025',
  description: 'Find the best home cleaning services in Dubai. Compare prices, companies, and learn about hiring full-time maids and visa requirements.',
  keywords: ['home cleaning Dubai', 'maid services Dubai', 'cleaning companies Dubai', 'domestic helper UAE', 'housekeeping Dubai', 'deep cleaning Dubai'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/home-cleaning-services-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/home-cleaning-services-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/home-cleaning-services-dubai',
      'x-default': 'https://propertywiki.ai/guides/home-cleaning-services-dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/home-cleaning-services-dubai',
    title: 'Home Cleaning Services in Dubai - Guide 2025',
    description: 'Find the best home cleaning services in Dubai. Compare prices and companies.',
    type: 'article',
    publishedTime: '2025-01-15',
    modifiedTime: '2025-01-27',
    images: [
      {
        url: 'https://propertywiki.ai/images/home-cleaning-services-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Cleaning Services in Dubai',
      },
    ],
  },
}

const tableOfContents = [
  { id: 'types-of-cleaning', title: 'Types of Cleaning Services', level: 2 },
  { id: 'finding-reliable-cleaners', title: 'Finding Reliable Cleaners', level: 2 },
  { id: 'popular-cleaning-companies', title: 'Popular Cleaning Companies', level: 2 },
  { id: 'pricing-guide', title: 'Pricing Guide', level: 2 },
  { id: 'fulltime-vs-parttime', title: 'Hiring Full-Time vs Part-Time Help', level: 2 },
  { id: 'live-in-maids', title: 'Live-In Maids', level: 2 },
  { id: 'legal-requirements', title: 'Legal Requirements', level: 2 },
  { id: 'tips-for-homeowners', title: 'Tips for Homeowners', level: 2 },
]

const faqs = [
  {
    question: 'How much does a part-time cleaner cost in Dubai?',
    answer: 'Part-time cleaners in Dubai typically charge between AED 40-60 per hour. Most cleaning sessions are 3-4 hours, so expect to pay AED 120-240 per visit. Regular weekly or bi-weekly arrangements may offer slight discounts.',
  },
  {
    question: 'Do I need a visa to hire a full-time maid in Dubai?',
    answer: 'Yes, if you hire a full-time domestic worker directly, you must sponsor their residence visa. This requires a minimum salary of AED 6,000 per month for the sponsor, a valid tenancy contract, and you must cover visa costs (approximately AED 5,000-7,000 for processing).',
  },
  {
    question: 'What is included in a deep cleaning service in Dubai?',
    answer: 'Deep cleaning typically includes thorough cleaning of all rooms, kitchen appliances (inside and out), bathroom descaling, window cleaning, cabinet interiors, light fixtures, AC vent cleaning, and removal of built-up grime. Move-in/move-out cleaning is similar but more intensive.',
  },
  {
    question: 'Can I hire a cleaner through my building management?',
    answer: 'Many residential buildings in Dubai have shared housekeeping staff for common areas. Some buildings also offer residents the option to book these staff members for private apartment cleaning at competitive rates. Check with your building management for availability.',
  },
  {
    question: 'Are cleaning companies in Dubai insured?',
    answer: 'Reputable cleaning companies like Justlife, ServiceMarket, and Helpling provide insurance coverage for their cleaners. This protects you against damage to property or theft. Always verify insurance coverage before booking with any service provider.',
  },
  {
    question: 'How do I find a trustworthy maid in Dubai?',
    answer: 'Use established platforms like Justlife or ServiceMarket that vet their cleaners, request references from previous employers, conduct background checks, and always start with a trial period. Written contracts clearly outlining duties and expectations are essential.',
  },
]

const relatedArticles = [
  {
    title: 'AC Maintenance Guide in Dubai',
    href: '/guides/ac-maintenance-dubai',
    category: 'Guide',
    description: 'Keep your home cool with proper AC maintenance tips and service providers.',
  },
  {
    title: 'DEWA Electricity & Water Guide',
    href: '/guides/dewa-electricity-water-guide',
    category: 'Guide',
    description: 'Everything you need to know about setting up and managing DEWA utilities.',
  },
  {
    title: 'How to Rent Property in UAE',
    href: '/guides/how-to-rent-property-in-uae',
    category: 'Guide',
    description: 'Complete guide to renting apartments and villas in the UAE.',
  },
  {
    title: 'Building Facilities & Amenities Guide',
    href: '/guides/building-facilities-amenities-dubai',
    category: 'Guide',
    description: 'Understanding building amenities and service charges.',
  },
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Comprehensive guide to Dubai Marina including property types.',
  },
]

export default function HomeCleaningServicesDubaiPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Home Cleaning Services Dubai', href: '/guides/home-cleaning-services-dubai' },
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
          title: 'Home Cleaning Services in Dubai - Complete Guide 2025',
          description: 'Find the best home cleaning services in Dubai. Compare prices, companies, and learn about hiring full-time maids and visa requirements.',
          url: 'https://propertywiki.ai/guides/home-cleaning-services-dubai',
          datePublished: '2025-01-15',
          dateModified: '2025-01-27',
          author: { name: author.name },
          image: 'https://propertywiki.ai/images/home-cleaning-services-dubai.jpg',
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Home Cleaning Services Dubai', url: 'https://propertywiki.ai/guides/home-cleaning-services-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Home Services Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Home Cleaning Services in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to finding reliable home cleaning services in Dubai. 
            From hourly cleaners to full-time maids, learn about pricing, legal requirements, 
            and how to hire the right help for your home.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/home-cleaning-services-dubai.jpg"
            alt="Professional home cleaning service in Dubai"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="types-of-cleaning">
            <h2>Types of Cleaning Services</h2>
            <p>
              Dubai offers a wide range of professional cleaning services to suit different needs 
              and budgets. Understanding the options available will help you choose the right 
              service for your home.
            </p>
            
            <h3>Regular Cleaning</h3>
            <p>
              Standard cleaning services include sweeping, mopping, dusting, bathroom cleaning, 
              and kitchen tidying. Ideal for weekly or bi-weekly maintenance to keep your home 
              consistently clean.
            </p>

            <h3>Deep Cleaning</h3>
            <p>
              Intensive cleaning that covers areas often missed in regular cleaning: inside 
              appliances, behind furniture, grout scrubbing, window tracks, AC vents, and 
              detailed kitchen degreasing. Recommended quarterly or before special occasions.
            </p>

            <h3>Move-In/Move-Out Cleaning</h3>
            <p>
              Thorough cleaning required when vacating or taking possession of a property. 
              This service ensures the property is in pristine condition and is often required 
              by landlords before returning security deposits.
            </p>

            <h3>Carpet & Upholstery Cleaning</h3>
            <p>
              Specialized cleaning using steam or dry cleaning methods for carpets, rugs, 
              sofas, and curtains. Essential in Dubai where dust and sand can quickly 
              accumulate in fabrics.
            </p>
          </section>

          <section id="finding-reliable-cleaners">
            <h2>Finding Reliable Cleaners</h2>
            <p>
              Finding trustworthy cleaning help in Dubai requires due diligence. Here are 
              the main channels to find reliable cleaners:
            </p>
            <ul>
              <li><strong>Cleaning Apps & Platforms:</strong> Services like Justlife, ServiceMarket, 
              and Helpling vet their cleaners and offer insurance coverage</li>
              <li><strong>Building Management:</strong> Many buildings have shared housekeeping 
              staff available for private bookings at competitive rates</li>
              <li><strong>Referrals:</strong> Ask neighbors, colleagues, or community groups 
              for recommendations of reliable cleaners</li>
              <li><strong>Recruitment Agencies:</strong> For full-time help, licensed agencies 
              can match you with vetted domestic workers</li>
            </ul>
            <p>
              Always verify credentials, request references, and start with a trial period 
              before committing to regular arrangements.
            </p>
          </section>

          <section id="popular-cleaning-companies">
            <h2>Popular Cleaning Companies</h2>
            <p>
              Several established companies offer professional home cleaning services in Dubai:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Justlife</td>
                    <td className="px-4 py-3 text-sm text-gray-500">On-demand cleaning, regular packages</td>
                    <td className="px-4 py-3 text-sm text-gray-500">App & Website</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">ServiceMarket</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Full range of home services</td>
                    <td className="px-4 py-3 text-sm text-gray-500">App & Website</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Helpling</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Recurring cleaning, vetted cleaners</td>
                    <td className="px-4 py-3 text-sm text-gray-500">App & Website</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">MaidAd</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Full-time maid placements</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Website</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Molly Maid</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Professional cleaning teams</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Phone & Website</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="pricing-guide">
            <h2>Pricing Guide</h2>
            <p>
              Cleaning service costs in Dubai vary based on the type of service, 
              frequency, and size of your property:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price Range</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Part-Time Cleaner</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 40-60/hour</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Minimum 3-4 hours per visit</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Deep Cleaning</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 300-800</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Depends on property size</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Regular Visits (Weekly)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 1,500-3,000/month</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Package rates available</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Full-Time Maid</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 2,000-4,000/month</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Plus visa and accommodation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Carpet Cleaning</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 100-300</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Per room or per carpet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="fulltime-vs-parttime">
            <h2>Hiring Full-Time vs Part-Time Help</h2>
            <p>
              Choosing between full-time and part-time cleaning help depends on your 
              household needs, budget, and lifestyle:
            </p>
            
            <h3>Part-Time Cleaners</h3>
            <ul>
              <li><strong>Best for:</strong> Studios, 1-2 bedroom apartments, couples, or small families</li>
              <li><strong>Frequency:</strong> Once or twice weekly is usually sufficient</li>
              <li><strong>Cost:</strong> AED 500-1,200 per month for weekly visits</li>
              <li><strong>Advantage:</strong> No visa sponsorship required when using agencies</li>
            </ul>

            <h3>Full-Time Maids</h3>
            <ul>
              <li><strong>Best for:</strong> Large villas, families with children, or elderly care needs</li>
              <li><strong>Services:</strong> Cleaning, cooking, laundry, childcare, errands</li>
              <li><strong>Cost:</strong> AED 2,000-4,000 monthly salary plus visa costs (AED 5,000-7,000)</li>
              <li><strong>Consideration:</strong> Requires visa sponsorship and accommodation</li>
            </ul>
          </section>

          <section id="live-in-maids">
            <h2>Live-In Maids</h2>
            <p>
              Many expat families in Dubai hire live-in domestic workers. This arrangement 
              requires providing:
            </p>
            <ul>
              <li><strong>Accommodation:</strong> A private room (legally required), usually a maid&apos;s room 
              in the property</li>
              <li><strong>Salary:</strong> AED 2,000-4,000 per month depending on experience and duties</li>
              <li><strong>Food:</strong> Either provided or a food allowance</li>
              <li><strong>Time Off:</strong> One day off per week (typically Friday)</li>
              <li><strong>Annual Leave:</strong> 30 days paid leave per year</li>
              <li><strong>Flight Tickets:</strong> Return ticket to home country annually</li>
            </ul>
            <p>
              Live-in arrangements are common for villas, especially in communities like 
              <Link href="/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">Arabian Ranches</Link>, Emirates Hills, and <Link href="/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">Palm Jumeirah</Link> where properties include 
              maid&apos;s quarters.
            </p>
          </section>

          <section id="legal-requirements">
            <h2>Legal Requirements</h2>
            <p>
              If you hire a domestic worker directly (not through an agency), you must 
              comply with UAE labor laws:
            </p>
            
            <h3>Visa Sponsorship Requirements</h3>
            <ul>
              <li><strong>Sponsor Salary:</strong> Minimum AED 6,000 per month income</li>
              <li><strong>Housing:</strong> Valid tenancy contract showing adequate space</li>
              <li><strong>Medical Insurance:</strong> Mandatory health coverage for the worker</li>
              <li><strong>Visa Costs:</strong> Approximately AED 5,000-7,000 for processing</li>
            </ul>

            <h3>Employment Contract</h3>
            <p>
              A written contract registered with the Ministry of Human Resources is mandatory. 
              The Tadbeer system manages domestic worker contracts and provides:
            </p>
            <ul>
              <li>Standard employment contracts</li>
              <li>Worker training and orientation</li>
              <li>Dispute resolution services</li>
              <li>Contract renewal and cancellation processing</li>
            </ul>

            <h3>Worker Rights</h3>
            <p>
              Domestic workers in the UAE are entitled to:
            </p>
            <ul>
              <li>Minimum 8 hours rest per day</li>
              <li>One day off per week</li>
              <li>30 days paid annual leave</li>
              <li>Sick leave and maternity leave</li>
              <li>End of service gratuity</li>
            </ul>
          </section>

          <section id="tips-for-homeowners">
            <h2>Tips for Homeowners</h2>
            <p>
              Follow these best practices when hiring cleaning help in Dubai:
            </p>
            <ul>
              <li><strong>Conduct Background Checks:</strong> Request references and verify 
              previous employment history</li>
              <li><strong>Use Written Contracts:</strong> Even for part-time help, document 
              expectations, duties, schedule, and payment terms</li>
              <li><strong>Set Clear Expectations:</strong> Provide detailed instructions and 
              a cleaning checklist for consistent results</li>
              <li><strong>Secure Valuables:</strong> Keep important documents and expensive 
              items in a secure location</li>
              <li><strong>Start with a Trial:</strong> Book a few sessions before committing 
              to regular arrangements</li>
              <li><strong>Communicate Respectfully:</strong> Clear, kind communication leads 
              to better working relationships</li>
              <li><strong>Pay Fairly and On Time:</strong> Reliable payment builds trust and 
              loyalty</li>
              <li><strong>Check Building Services:</strong> Many buildings offer resident 
              cleaning services at competitive rates through their shared housekeeping staff. Learn more in our <Link href="/guides/building-facilities-amenities-dubai" className="text-primary-600 hover:underline">building facilities guide</Link></li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-01-15"
          dateModified="2025-01-27"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">Freehold Property</p>
            </Link>
            <Link href="/guides/dewa-electricity-water-guide" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">DEWA Electricity & Water Guide</p>
            </Link>
            <Link href="/guides/ac-maintenance-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">AC Maintenance in Dubai</p>
            </Link>
            <Link href="/guides/building-facilities-amenities-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Building Facilities & Amenities</p>
            </Link>
            <Link href="/guides/service-charges-by-area-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Service Charges by Area in Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
