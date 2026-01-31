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
  title: 'Dubai Marina Property Guide - Prices, Investment & Lifestyle',
  description: 'Complete guide to Dubai Marina real estate. Explore property prices, rental yields, amenities, and investment opportunities in this iconic waterfront community.',
  keywords: ['Dubai Marina', 'Dubai Marina property', 'Dubai Marina apartments', 'Dubai Marina prices'],
  alternates: {
    canonical: 'https://propertywiki.ai/locations/dubai/dubai-marina',
  },
  openGraph: {
    title: 'Dubai Marina Property Guide - Prices, Investment & Lifestyle',
    description: 'Complete guide to Dubai Marina real estate with property prices, rental yields, and investment analysis.',
    type: 'article',
    publishedTime: '2024-02-20',
    modifiedTime: '2024-12-15',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Dubai Marina Overview', level: 2 },
  { id: 'property-types', title: 'Property Types & Prices', level: 2 },
  { id: 'rental-yields', title: 'Rental Yields & ROI', level: 2 },
  { id: 'lifestyle', title: 'Lifestyle & Amenities', level: 2 },
  { id: 'transportation', title: 'Transportation & Connectivity', level: 2 },
  { id: 'investment-outlook', title: 'Investment Outlook', level: 2 },
]

const faqs = [
  {
    question: 'Is Dubai Marina freehold for foreigners?',
    answer: 'Yes, Dubai Marina is a designated freehold zone where foreign nationals from any country can purchase and own property outright with full ownership rights.',
  },
  {
    question: 'What are average property prices in Dubai Marina?',
    answer: 'As of 2024, studio apartments start from around AED 700,000, one-bedroom apartments from AED 1.2 million, and two-bedroom apartments from AED 1.8 million. Prices vary by building, floor, and view.',
  },
  {
    question: 'What is the rental yield in Dubai Marina?',
    answer: 'Dubai Marina offers attractive rental yields averaging 6-7% gross, with studios and one-bedroom apartments typically achieving higher yields due to strong demand from young professionals.',
  },
  {
    question: 'Is Dubai Marina a good investment?',
    answer: 'Dubai Marina remains one of the most popular areas for property investment in Dubai due to its waterfront location, established infrastructure, strong rental demand, and proximity to key business districts.',
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
    description: 'Understanding freehold ownership and what it means for buyers.',
  },
  {
    title: 'Dubai Real Estate Overview',
    href: '/locations/dubai',
    category: 'Location',
    description: 'Comprehensive guide to Dubai\'s property market.',
  },
]

const propertyPrices = [
  { type: 'Studio', sizeRange: '400-600 sq ft', priceRange: 'AED 700K - 1.2M', avgRent: 'AED 55-75K/year' },
  { type: '1 Bedroom', sizeRange: '700-1,000 sq ft', priceRange: 'AED 1.2M - 2M', avgRent: 'AED 75-100K/year' },
  { type: '2 Bedroom', sizeRange: '1,100-1,600 sq ft', priceRange: 'AED 1.8M - 3.5M', avgRent: 'AED 100-150K/year' },
  { type: '3 Bedroom', sizeRange: '1,800-2,500 sq ft', priceRange: 'AED 2.5M - 5M', avgRent: 'AED 150-220K/year' },
  { type: 'Penthouse', sizeRange: '3,000-10,000 sq ft', priceRange: 'AED 8M - 50M+', avgRent: 'AED 350K+/year' },
]

export default function DubaiMarinaPage() {
  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: 'Dubai', href: '/locations/dubai' },
    { name: 'Dubai Marina', href: '/locations/dubai/dubai-marina' },
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
          title: 'Dubai Marina Property Guide - Prices, Investment & Lifestyle',
          description: 'Complete guide to Dubai Marina real estate with property prices, rental yields, and investment analysis.',
          url: 'https://propertywiki.ai/locations/dubai/dubai-marina',
          datePublished: '2024-02-20',
          dateModified: '2024-12-15',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Locations', url: 'https://propertywiki.ai/locations' },
          { name: 'Dubai', url: 'https://propertywiki.ai/locations/dubai' },
          { name: 'Dubai Marina', url: 'https://propertywiki.ai/locations/dubai/dubai-marina' },
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
            Dubai Marina Property Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to one of Dubai&apos;s most prestigious waterfront communities, 
            featuring property prices, investment analysis, and lifestyle insights.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/dubai-marina.jpg"
            alt="Dubai Marina waterfront with luxury high-rise towers, yachts, and the iconic marina promenade at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Dubai Marina Overview</h2>
            <p>
              Dubai Marina is a stunning man-made canal city stretching along a 3-kilometer stretch 
              of the Persian Gulf shoreline. Developed by Emaar Properties, it has become one of 
              the most sought-after residential and leisure destinations in Dubai since its 
              development began in 2003.
            </p>
            <p>
              The community features over 200 residential towers housing approximately 120,000 residents, 
              along with the famous Marina Walk promenade lined with restaurants, cafes, and retail outlets. 
              Its proximity to JBR Beach, Dubai Media City, and Dubai Internet City makes it particularly 
              popular with professionals working in these areas.
            </p>
            <p>
              As a <a href="/definitions/freehold-property">freehold zone</a>, Dubai Marina allows 
              foreign nationals to purchase property with full ownership rights, making it an 
              attractive destination for international investors and expatriates looking to establish 
              a permanent base in Dubai.
            </p>
          </section>

          <section id="property-types">
            <h2>Property Types & Prices</h2>
            <p>
              Dubai Marina primarily offers apartment-style living in high-rise towers, ranging from 
              compact studios to sprawling penthouses. Here&apos;s a breakdown of current market prices 
              as of late 2024:
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
              Premium towers like Cayan Tower (the famous twisted tower), Marina Gate, and 
              The Address Dubai Marina command higher prices per square foot due to their 
              superior build quality, amenities, and brand value.
            </p>
          </section>

          <section id="rental-yields">
            <h2>Rental Yields & ROI</h2>
            <p>
              Dubai Marina consistently delivers attractive rental yields compared to many 
              international property markets. Current yields average:
            </p>
            <ul>
              <li><strong>Studios:</strong> 7-8% gross yield</li>
              <li><strong>1-Bedroom:</strong> 6-7% gross yield</li>
              <li><strong>2-Bedroom:</strong> 5-6% gross yield</li>
              <li><strong>3-Bedroom:</strong> 4-5% gross yield</li>
            </ul>
            <p>
              Smaller units typically achieve higher yields due to stronger demand from young 
              professionals and tourists (for short-term rentals). The area&apos;s proximity to 
              business districts and the beach ensures consistent occupancy rates.
            </p>
          </section>

          <section id="lifestyle">
            <h2>Lifestyle & Amenities</h2>
            <p>
              Dubai Marina offers a vibrant, cosmopolitan lifestyle with world-class amenities:
            </p>
            <ul>
              <li><strong>Marina Walk:</strong> A 7km waterfront promenade with restaurants, cafes, and boutiques</li>
              <li><strong>Beaches:</strong> Direct access to JBR Beach and The Beach at JBR</li>
              <li><strong>Dining:</strong> Hundreds of restaurants from casual to fine dining</li>
              <li><strong>Shopping:</strong> Marina Mall and nearby Mall of the Emirates</li>
              <li><strong>Recreation:</strong> Yacht clubs, water sports, and fitness facilities</li>
              <li><strong>Nightlife:</strong> Bars, lounges, and entertainment venues</li>
            </ul>
          </section>

          <section id="transportation">
            <h2>Transportation & Connectivity</h2>
            <p>
              Dubai Marina benefits from excellent transportation infrastructure:
            </p>
            <ul>
              <li><strong>Metro:</strong> Two stations on the Red Line (DMCC and Dubai Marina)</li>
              <li><strong>Tram:</strong> Dubai Tram runs through the community</li>
              <li><strong>Roads:</strong> Easy access to Sheikh Zayed Road (E11)</li>
              <li><strong>Airport:</strong> 30-40 minutes to Dubai International Airport</li>
            </ul>
          </section>

          <section id="investment-outlook">
            <h2>Investment Outlook</h2>
            <p>
              Dubai Marina remains one of the most resilient property markets in Dubai. Key 
              factors supporting future growth include:
            </p>
            <ul>
              <li>Continued infrastructure development and metro expansion</li>
              <li>Strong tourism sector driving short-term rental demand</li>
              <li>Established community with proven track record</li>
              <li>Limited new supply in the immediate area</li>
              <li>Proximity to Expo 2020 legacy district</li>
            </ul>
            <p>
              For investors seeking a balance of rental income and capital appreciation potential, 
              Dubai Marina continues to be a solid choice within the Dubai property market.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-02-20"
          dateModified="2024-12-15"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
