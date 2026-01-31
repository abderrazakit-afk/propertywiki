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
  title: 'Business Bay Property Guide - Prices & Investment',
  description: 'Complete guide to Business Bay real estate in Dubai. Explore property prices, rental yields of 7-8%, and investment opportunities in Dubai\'s CBD.',
  keywords: ['Business Bay', 'Business Bay property', 'Business Bay apartments', 'Business Bay Dubai', 'Business Bay prices', 'Dubai Canal property', 'Business Bay investment'],
  alternates: {
    canonical: 'https://propertywiki.ai/locations/dubai/business-bay',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai/business-bay',
      'ar': 'https://propertywiki.ai/ar/locations/dubai/business-bay',
      'x-default': 'https://propertywiki.ai/locations/dubai/business-bay',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/locations/dubai/business-bay',
    title: 'Business Bay Property Guide - Prices & Investment',
    description: 'Complete guide to Business Bay real estate with property prices and investment analysis.',
    type: 'article',
    publishedTime: '2024-03-15',
    modifiedTime: '2025-01-20',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Business Bay Overview', level: 2 },
  { id: 'property-types', title: 'Property Types & Prices', level: 2 },
  { id: 'rental-yields', title: 'Rental Yields & ROI', level: 2 },
  { id: 'lifestyle', title: 'Lifestyle & Amenities', level: 2 },
  { id: 'transportation', title: 'Transportation & Connectivity', level: 2 },
  { id: 'investment-outlook', title: 'Investment Outlook', level: 2 },
]

const faqs = [
  {
    question: 'Is Business Bay freehold for foreigners?',
    answer: 'Yes, Business Bay is a designated freehold zone where foreign nationals from any country can purchase and own property outright with full ownership rights, similar to other prime Dubai locations.',
  },
  {
    question: 'What are the rental yields in Business Bay?',
    answer: 'Business Bay offers some of the highest rental yields in Dubai, averaging 7-8% gross yield. This is due to strong demand from professionals working in the area and its proximity to Downtown Dubai and major business centers.',
  },
  {
    question: 'How close is Business Bay to Downtown Dubai?',
    answer: 'Business Bay is adjacent to Downtown Dubai, with many properties within walking distance to Dubai Mall and Burj Khalifa. The two communities share the Dubai Canal and are connected by pedestrian bridges and the metro.',
  },
  {
    question: 'What makes Business Bay a good investment?',
    answer: 'Business Bay offers competitive property prices compared to neighboring Downtown Dubai, higher rental yields of 7-8%, excellent connectivity via the Business Bay Metro station and Dubai Canal water taxi, and a mix of residential and commercial developments ensuring consistent demand.',
  },
  {
    question: 'What types of properties are available in Business Bay?',
    answer: 'Business Bay primarily offers high-rise apartments including studios, 1-3 bedroom apartments, and luxury penthouses. The area features modern towers with a mix of residential and commercial spaces, making it ideal for professionals seeking live-work proximity.',
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
    title: 'Downtown Dubai Property Guide',
    href: '/locations/dubai/downtown-dubai',
    category: 'Location',
    description: 'Explore the iconic Downtown Dubai with Burj Khalifa and Dubai Mall.',
  },
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership and what it means for buyers.',
  },
]

const propertyPrices = [
  { type: 'Studio', sizeRange: '350-550 sq ft', priceRange: 'AED 600K - 950K', avgRent: 'AED 45-65K/year' },
  { type: '1 Bedroom', sizeRange: '650-900 sq ft', priceRange: 'AED 900K - 1.5M', avgRent: 'AED 65-90K/year' },
  { type: '2 Bedroom', sizeRange: '1,000-1,400 sq ft', priceRange: 'AED 1.4M - 2.5M', avgRent: 'AED 90-130K/year' },
  { type: '3 Bedroom', sizeRange: '1,600-2,200 sq ft', priceRange: 'AED 2.2M - 4M', avgRent: 'AED 130-180K/year' },
  { type: 'Penthouse', sizeRange: '2,500-8,000 sq ft', priceRange: 'AED 5M - 30M+', avgRent: 'AED 250K+/year' },
]

export default function BusinessBayPage() {
  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: 'Dubai', href: '/locations/dubai' },
    { name: 'Business Bay', href: '/locations/dubai/business-bay' },
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
          title: 'Business Bay Property Guide - Prices, Investment & Lifestyle',
          description: 'Complete guide to Business Bay real estate with property prices, rental yields, and investment analysis in Dubai\'s central business district.',
          url: 'https://propertywiki.ai/locations/dubai/business-bay',
          datePublished: '2024-03-15',
          dateModified: '2025-01-20',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Locations', url: 'https://propertywiki.ai/locations' },
          { name: 'Dubai', url: 'https://propertywiki.ai/locations/dubai' },
          { name: 'Business Bay', url: 'https://propertywiki.ai/locations/dubai/business-bay' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Dubai, UAE
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Business Bay Property Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to Dubai&apos;s central business district along the Dubai Canal, 
            featuring property prices, investment analysis, and lifestyle insights for this dynamic mixed-use community.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/business-bay.jpg"
            alt="Business Bay Dubai skyline with modern high-rise towers along the Dubai Canal at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Business Bay Overview</h2>
            <p>
              Business Bay is Dubai&apos;s thriving central business district, strategically located along 
              the iconic Dubai Canal. Spanning approximately 64 million square feet, this master-planned 
              community has evolved into one of the most dynamic mixed-use developments in the region 
              since its inception in 2003.
            </p>
            <p>
              The district features an impressive collection of over 240 commercial and residential 
              towers, housing a diverse community of professionals, entrepreneurs, and families. 
              Its proximity to Downtown Dubai, with the Burj Khalifa and Dubai Mall just minutes away, 
              makes it an attractive alternative for those seeking similar prestige at more competitive prices.
            </p>
            <p>
              As a <a href="/definitions/freehold-property">freehold zone</a>, Business Bay allows 
              foreign nationals to purchase property with full ownership rights. The area&apos;s 
              continued development, combined with world-class infrastructure and the scenic Dubai 
              Canal waterfront, has established it as a premier destination for property investment.
            </p>
          </section>

          <section id="property-types">
            <h2>Property Types & Prices</h2>
            <p>
              Business Bay offers a diverse range of residential options, from compact studios ideal 
              for young professionals to expansive penthouses with panoramic canal and city views. 
              Here&apos;s a breakdown of current market prices as of early 2025:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size Range</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sale Price</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Annual Rent</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {propertyPrices.map((row) => (
                    <tr key={row.type}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.sizeRange}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.priceRange}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.avgRent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Premium developments like Damac Towers, The Opus by Zaha Hadid, Marasi Business Bay, 
              and Bay Gate command higher prices per square foot due to their architectural significance, 
              superior amenities, and prime waterfront locations along the Dubai Canal.
            </p>
          </section>

          <section id="rental-yields">
            <h2>Rental Yields & ROI</h2>
            <p>
              Business Bay stands out as one of Dubai&apos;s highest-yielding property markets, 
              driven by strong demand from professionals working in the area. Current yields average:
            </p>
            <ul>
              <li><strong>Studios:</strong> 7-8% gross yield</li>
              <li><strong>1-Bedroom:</strong> 7-8% gross yield</li>
              <li><strong>2-Bedroom:</strong> 6-7% gross yield</li>
              <li><strong>3-Bedroom:</strong> 5-6% gross yield</li>
            </ul>
            <p>
              These yields are notably higher than neighboring Downtown Dubai, making Business Bay 
              particularly attractive for investors seeking income-generating properties. The consistent 
              demand from corporate tenants and proximity to major business centers ensures healthy 
              occupancy rates throughout the year.
            </p>
            <p>
              The area&apos;s growing popularity for short-term rentals also provides landlords with 
              flexibility in rental strategies, with holiday home licenses available for properties 
              meeting specific criteria.
            </p>
          </section>

          <section id="lifestyle">
            <h2>Lifestyle & Amenities</h2>
            <p>
              Business Bay offers a sophisticated urban lifestyle with an excellent range of amenities:
            </p>
            <ul>
              <li><strong>Dubai Canal:</strong> 3.2km waterfront promenade with cycling and running paths</li>
              <li><strong>Marasi Promenade:</strong> Dining, retail, and entertainment along the canal</li>
              <li><strong>Dubai Mall:</strong> Walking distance to the world&apos;s largest shopping mall</li>
              <li><strong>Burj Khalifa:</strong> Iconic views and easy access to observation decks</li>
              <li><strong>Dining:</strong> Hundreds of restaurants from casual to fine dining</li>
              <li><strong>Fitness:</strong> Premium gyms, yoga studios, and outdoor exercise areas</li>
              <li><strong>Healthcare:</strong> Multiple clinics and Mediclinic facilities nearby</li>
              <li><strong>Education:</strong> Access to quality schools in neighboring communities</li>
            </ul>
            <p>
              The Dubai Canal water taxi service adds a unique dimension to the area&apos;s lifestyle, 
              offering scenic commutes and leisure cruises connecting Business Bay to other waterfront 
              destinations.
            </p>
          </section>

          <section id="transportation">
            <h2>Transportation & Connectivity</h2>
            <p>
              Business Bay benefits from excellent transportation infrastructure, making it one of 
              Dubai&apos;s most connected communities:
            </p>
            <ul>
              <li><strong>Metro:</strong> Business Bay Metro station on the Red Line provides direct access to the entire city</li>
              <li><strong>Water Taxi:</strong> Dubai Canal water taxi service connecting to Dubai Marina and beyond</li>
              <li><strong>Roads:</strong> Direct access to Sheikh Zayed Road (E11) and Al Khail Road (E44)</li>
              <li><strong>Airport:</strong> 15-20 minutes to Dubai International Airport (DXB)</li>
              <li><strong>Downtown:</strong> Walking distance to Downtown Dubai and Dubai Mall</li>
              <li><strong>DIFC:</strong> 5-minute drive to Dubai International Financial Centre</li>
            </ul>
            <p>
              The area&apos;s central location means most key Dubai destinations are within a 
              20-30 minute drive, making it ideal for professionals who need quick access to 
              various parts of the city.
            </p>
          </section>

          <section id="investment-outlook">
            <h2>Investment Outlook</h2>
            <p>
              Business Bay continues to demonstrate strong investment potential with several 
              factors supporting future growth:
            </p>
            <ul>
              <li>Strategic central location between Downtown Dubai and DIFC</li>
              <li>Ongoing development of the Dubai Canal waterfront</li>
              <li>Higher rental yields compared to neighboring premium areas</li>
              <li>Strong demand from corporate tenants and professionals</li>
              <li>Competitive pricing relative to Downtown Dubai</li>
              <li>Continued infrastructure improvements and new developments</li>
              <li>Growing appeal as a lifestyle destination, not just business hub</li>
            </ul>
            <p>
              For investors seeking a balance of strong rental income and capital appreciation 
              potential, Business Bay offers compelling value. Its position as Dubai&apos;s 
              emerging central business district, combined with attractive yields and ongoing 
              development, makes it a solid choice for both first-time and seasoned property investors.
            </p>
            <p>
              The area&apos;s transformation from a primarily commercial district to a vibrant 
              mixed-use community continues to attract diverse residents and businesses, 
              supporting long-term property value growth.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-03-15"
          dateModified="2025-01-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
