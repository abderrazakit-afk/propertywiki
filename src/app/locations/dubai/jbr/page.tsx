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
  title: 'JBR (Jumeirah Beach Residence) Property Guide - Prices, Investment & Lifestyle',
  description: 'Complete guide to JBR real estate. Explore property prices, rental yields, amenities, and investment opportunities in Dubai\'s iconic 1.7km beachfront community with The Walk promenade.',
  keywords: ['JBR', 'Jumeirah Beach Residence', 'JBR property', 'JBR apartments', 'JBR prices', 'The Walk Dubai', 'Dubai beachfront property', 'JBR holiday homes'],
  alternates: {
    canonical: 'https://propertywiki.ai/locations/dubai/jbr',
  },
  openGraph: {
    title: 'JBR (Jumeirah Beach Residence) Property Guide - Prices, Investment & Lifestyle',
    description: 'Complete guide to JBR real estate with property prices, rental yields, and investment analysis for Dubai\'s premier beachfront community.',
    type: 'article',
    publishedTime: '2024-03-15',
    modifiedTime: '2024-12-20',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'JBR Overview', level: 2 },
  { id: 'property-types', title: 'Property Types & Prices', level: 2 },
  { id: 'rental-yields', title: 'Rental Yields & ROI', level: 2 },
  { id: 'lifestyle', title: 'Lifestyle & Amenities', level: 2 },
  { id: 'transportation', title: 'Transportation & Connectivity', level: 2 },
  { id: 'investment-outlook', title: 'Investment Outlook', level: 2 },
]

const faqs = [
  {
    question: 'Is JBR freehold for foreigners?',
    answer: 'Yes, JBR (Jumeirah Beach Residence) is a designated freehold zone where foreign nationals from any country can purchase and own property outright with full ownership rights, including the ability to sell, lease, or inherit the property.',
  },
  {
    question: 'What are the average property prices in JBR?',
    answer: 'As of 2024, studio apartments in JBR start from around AED 800,000, one-bedroom apartments from AED 1.3 million, and two-bedroom apartments from AED 2 million. Premium units with full sea views or higher floors command significantly higher prices.',
  },
  {
    question: 'Can I do short-term rentals in JBR?',
    answer: 'Yes, JBR is one of the most popular areas in Dubai for holiday homes and short-term rentals. The beachfront location, proximity to attractions like Ain Dubai, and the vibrant Walk promenade make it highly attractive to tourists. Owners must obtain a holiday home license from the Department of Economy and Tourism (DET).',
  },
  {
    question: 'What is the rental yield in JBR?',
    answer: 'JBR offers attractive rental yields averaging 6-7% gross for long-term rentals. Short-term holiday rentals can achieve even higher returns during peak tourist seasons, with some units generating 8-10% yields when managed professionally.',
  },
  {
    question: 'What is the difference between JBR and Dubai Marina?',
    answer: 'While adjacent to each other, JBR offers direct beach access with a 1.7km beachfront promenade (The Walk), while Dubai Marina is centered around a man-made canal. JBR is more tourism-focused with stronger short-term rental demand, while Dubai Marina appeals more to young professionals seeking waterfront living.',
  },
]

const relatedArticles = [
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Explore the adjacent waterfront community with canal-side living.',
  },
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
]

const propertyPrices = [
  { type: 'Studio', sizeRange: '450-650 sq ft', priceRange: 'AED 800K - 1.4M', avgRent: 'AED 60-85K/year' },
  { type: '1 Bedroom', sizeRange: '800-1,200 sq ft', priceRange: 'AED 1.3M - 2.2M', avgRent: 'AED 85-120K/year' },
  { type: '2 Bedroom', sizeRange: '1,300-1,800 sq ft', priceRange: 'AED 2M - 3.8M', avgRent: 'AED 120-170K/year' },
  { type: '3 Bedroom', sizeRange: '2,000-2,800 sq ft', priceRange: 'AED 3M - 5.5M', avgRent: 'AED 170-250K/year' },
  { type: '4 Bedroom', sizeRange: '2,800-4,000 sq ft', priceRange: 'AED 4.5M - 8M', avgRent: 'AED 250-350K/year' },
  { type: 'Duplex/Penthouse', sizeRange: '3,500-8,000 sq ft', priceRange: 'AED 7M - 25M+', avgRent: 'AED 400K+/year' },
]

export default function JBRPage() {
  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: 'Dubai', href: '/locations/dubai' },
    { name: 'JBR', href: '/locations/dubai/jbr' },
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
          title: 'JBR (Jumeirah Beach Residence) Property Guide - Prices, Investment & Lifestyle',
          description: 'Complete guide to JBR real estate with property prices, rental yields, and investment analysis for Dubai\'s premier beachfront community.',
          url: 'https://propertywiki.ai/locations/dubai/jbr',
          datePublished: '2024-03-15',
          dateModified: '2024-12-20',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Locations', url: 'https://propertywiki.ai/locations' },
          { name: 'Dubai', url: 'https://propertywiki.ai/locations/dubai' },
          { name: 'JBR', url: 'https://propertywiki.ai/locations/dubai/jbr' },
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
            JBR (Jumeirah Beach Residence) Property Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to Dubai&apos;s iconic 1.7km beachfront community, featuring 
            The Walk promenade, property prices, investment analysis, and lifestyle insights.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/jbr.jpg"
            alt="JBR Jumeirah Beach Residence beachfront with luxury residential towers, The Walk promenade, and pristine beach at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>JBR Overview</h2>
            <p>
              Jumeirah Beach Residence (JBR) is one of Dubai&apos;s most iconic beachfront communities, 
              stretching 1.7 kilometers along the Persian Gulf coastline. Developed by Dubai Properties 
              between 2002 and 2010, JBR comprises 40 residential towers housing approximately 15,000 
              residential units, making it one of the largest single-phase residential developments in the world.
            </p>
            <p>
              The community is famous for The Walk at JBR, a bustling outdoor promenade featuring 
              restaurants, cafes, retail outlets, and entertainment venues. This pedestrian-friendly 
              beachfront boulevard has become one of Dubai&apos;s most popular destinations for both 
              residents and tourists alike.
            </p>
            <p>
              As a <a href="/definitions/freehold-property">freehold zone</a>, JBR allows foreign 
              nationals to purchase property with full ownership rights. The combination of beachfront 
              living, world-class amenities, and strong rental demand makes JBR particularly attractive 
              for investors seeking holiday homes and short-term rental income.
            </p>
          </section>

          <section id="property-types">
            <h2>Property Types & Prices</h2>
            <p>
              JBR offers a diverse range of residential options across its 40 towers, from compact 
              studios ideal for holiday rentals to luxurious penthouses with panoramic sea views. 
              Here&apos;s a breakdown of current market prices as of late 2024:
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
              The towers are organized into six clusters: Sadaf, Bahar, Murjan, Amwaj, Shams, and Rimal. 
              Shams towers, being the tallest with the best views, typically command premium prices. 
              Units with direct sea views can cost 20-40% more than those facing the community or 
              <a href="/locations/dubai/dubai-marina"> Dubai Marina</a>.
            </p>
          </section>

          <section id="rental-yields">
            <h2>Rental Yields & ROI</h2>
            <p>
              JBR consistently delivers attractive rental yields, with the added advantage of strong 
              short-term rental potential due to its tourist-friendly location. Current yields average:
            </p>
            <ul>
              <li><strong>Studios (Long-term):</strong> 7-8% gross yield</li>
              <li><strong>1-Bedroom (Long-term):</strong> 6-7% gross yield</li>
              <li><strong>2-Bedroom (Long-term):</strong> 5.5-6.5% gross yield</li>
              <li><strong>3+ Bedroom (Long-term):</strong> 5-6% gross yield</li>
              <li><strong>Holiday Homes (Short-term):</strong> 8-12% gross yield (when professionally managed)</li>
            </ul>
            <p>
              The strong tourism sector makes JBR one of Dubai&apos;s top destinations for holiday 
              home investments. Studios and one-bedroom apartments are particularly popular for 
              short-term rentals, achieving high occupancy rates during peak seasons (October-April).
            </p>
          </section>

          <section id="lifestyle">
            <h2>Lifestyle & Amenities</h2>
            <p>
              JBR offers an unparalleled beachfront lifestyle with world-class amenities at your doorstep:
            </p>
            <ul>
              <li><strong>The Walk:</strong> A 1.7km promenade with over 300 retail outlets, restaurants, and cafes</li>
              <li><strong>The Beach:</strong> A modern outdoor mall featuring shopping, dining, cinemas, and a water park</li>
              <li><strong>Ain Dubai:</strong> The world&apos;s largest observation wheel (210 meters), located on Bluewaters Island</li>
              <li><strong>JBR Beach:</strong> 1.7km of pristine sandy beach with sun loungers and water sports</li>
              <li><strong>Beach Clubs:</strong> Zero Gravity, Barasti, and other popular venues</li>
              <li><strong>Recreation:</strong> Swimming pools, gyms, tennis courts, and children&apos;s play areas in each cluster</li>
            </ul>
            <p>
              The community is particularly vibrant during evenings and weekends, with street performers, 
              outdoor markets, and events along The Walk making it feel like a perpetual holiday destination.
            </p>
          </section>

          <section id="transportation">
            <h2>Transportation & Connectivity</h2>
            <p>
              JBR benefits from excellent transportation infrastructure and strategic location:
            </p>
            <ul>
              <li><strong>Tram:</strong> Dubai Tram runs along JBR with multiple stops (JBR 1 and JBR 2 stations)</li>
              <li><strong>Metro:</strong> Connected to DMCC and Sobha Realty Metro stations via Dubai Tram</li>
              <li><strong>Roads:</strong> Direct access to Sheikh Zayed Road (E11) and Al Sufouh Road</li>
              <li><strong>Airport:</strong> 35-45 minutes to Dubai International Airport (DXB)</li>
              <li><strong>Palm Jumeirah:</strong> 10 minutes drive to the Palm</li>
              <li><strong>Dubai Marina:</strong> Walking distance to Dubai Marina Mall and Marina Walk</li>
            </ul>
          </section>

          <section id="investment-outlook">
            <h2>Investment Outlook</h2>
            <p>
              JBR remains one of the most resilient and sought-after property markets in Dubai. 
              Key factors supporting future growth include:
            </p>
            <ul>
              <li>Strong and growing tourism sector driving short-term rental demand</li>
              <li>Completion of nearby attractions including Ain Dubai and Bluewaters Island</li>
              <li>Limited beachfront land in Dubai making JBR a scarce asset</li>
              <li>Established community with mature infrastructure and proven track record</li>
              <li>Proximity to Dubai Marina, Palm Jumeirah, and key business districts</li>
              <li>Government initiatives supporting tourism and property investment</li>
            </ul>
            <p>
              For investors seeking a combination of lifestyle, rental income, and capital appreciation, 
              JBR offers a compelling proposition. The community is particularly well-suited for 
              holiday home investments, with the potential to generate both personal use value and 
              strong rental returns during peak tourist seasons.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-03-15"
          dateModified="2024-12-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
