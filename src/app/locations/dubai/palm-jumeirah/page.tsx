import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Palm Jumeirah Property Guide - Villas & Prices 2025',
  description: 'Complete guide to Palm Jumeirah real estate. Explore luxury villas, apartments, prices, rental yields, and investment opportunities on Dubai\'s iconic island.',
  keywords: ['Palm Jumeirah', 'Palm Jumeirah villas', 'Palm Jumeirah property', 'Dubai luxury real estate', 'Palm Jumeirah apartments', 'Atlantis residences', 'Dubai waterfront property', 'Palm Jumeirah prices'],
  alternates: {
    canonical: 'https://propertywiki.ai/locations/dubai/palm-jumeirah',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai/palm-jumeirah',
      'ar': 'https://propertywiki.ai/ar/locations/dubai/palm-jumeirah',
      'x-default': 'https://propertywiki.ai/locations/dubai/palm-jumeirah',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/locations/dubai/palm-jumeirah',
    title: 'Palm Jumeirah Property Guide - Villas & Prices 2025',
    description: 'Complete guide to Palm Jumeirah real estate with luxury property prices and investment analysis.',
    type: 'article',
    publishedTime: '2024-03-15',
    modifiedTime: '2025-01-15',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Palm Jumeirah Overview', level: 2 },
  { id: 'property-types', title: 'Property Types & Prices', level: 2 },
  { id: 'rental-yields', title: 'Rental Yields & ROI', level: 2 },
  { id: 'lifestyle', title: 'Lifestyle & Amenities', level: 2 },
  { id: 'transportation', title: 'Transportation & Connectivity', level: 2 },
  { id: 'investment-outlook', title: 'Investment Outlook', level: 2 },
]

const faqs = [
  {
    question: 'Can foreigners buy property on Palm Jumeirah?',
    answer: 'Yes, Palm Jumeirah is a designated freehold zone where foreign nationals from any country can purchase and fully own property with complete ownership rights, including villas, apartments, and penthouses.',
  },
  {
    question: 'What are the average property prices on Palm Jumeirah?',
    answer: 'As of 2025, studio apartments start from around AED 1.5 million, one-bedroom apartments from AED 2.5 million, two-bedroom apartments from AED 4 million, and villas range from AED 15 million to over AED 200 million for signature beachfront properties.',
  },
  {
    question: 'What is the rental yield on Palm Jumeirah?',
    answer: 'Palm Jumeirah offers rental yields averaging 4-6% gross, which is lower than some other Dubai areas due to the premium property prices. However, the area offers excellent capital appreciation potential and strong demand from high-net-worth tenants.',
  },
  {
    question: 'Is Palm Jumeirah a good investment?',
    answer: 'Palm Jumeirah is considered a trophy asset location with strong value retention and global recognition. While rental yields are moderate compared to other areas, the limited supply, prestigious address, and consistent demand from ultra-high-net-worth individuals make it an excellent long-term investment.',
  },
  {
    question: 'How is Palm Jumeirah connected to the rest of Dubai?',
    answer: 'Palm Jumeirah is connected via the Palm Monorail running from the Gateway Towers to Atlantis. The monorail connects to the Dubai Tram at Palm Gateway station, which links to the Dubai Metro Red Line. Road access is via a multi-lane tunnel and bridge system to Sheikh Zayed Road.',
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
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Explore Dubai Marina\'s waterfront apartments and lifestyle.',
  },
  {
    title: 'Downtown Dubai Guide',
    href: '/locations/dubai/downtown-dubai',
    category: 'Location',
    description: 'Discover Downtown Dubai\'s iconic properties near Burj Khalifa.',
  },
]

const propertyPrices = [
  { type: 'Studio', sizeRange: '500-800 sq ft', priceRange: 'AED 1.5M - 2.5M', avgRent: 'AED 80-120K/year' },
  { type: '1 Bedroom', sizeRange: '900-1,400 sq ft', priceRange: 'AED 2.5M - 4.5M', avgRent: 'AED 120-180K/year' },
  { type: '2 Bedroom', sizeRange: '1,400-2,200 sq ft', priceRange: 'AED 4M - 8M', avgRent: 'AED 180-280K/year' },
  { type: '3 Bedroom', sizeRange: '2,200-3,500 sq ft', priceRange: 'AED 6M - 15M', avgRent: 'AED 280-450K/year' },
  { type: '4 Bedroom', sizeRange: '3,500-5,000 sq ft', priceRange: 'AED 12M - 25M', avgRent: 'AED 400-650K/year' },
  { type: 'Villa', sizeRange: '5,000-15,000 sq ft', priceRange: 'AED 15M - 200M+', avgRent: 'AED 500K-2M+/year' },
  { type: 'Penthouse', sizeRange: '4,000-20,000 sq ft', priceRange: 'AED 20M - 150M+', avgRent: 'AED 600K-3M+/year' },
]

export default function PalmJumeirahPage() {
  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: 'Dubai', href: '/locations/dubai' },
    { name: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah' },
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
          title: 'Palm Jumeirah Property Guide - Luxury Villas, Apartments & Prices 2025',
          description: 'Complete guide to Palm Jumeirah real estate with luxury property prices, rental yields, and investment analysis on Dubai\'s iconic man-made island.',
          url: 'https://propertywiki.ai/locations/dubai/palm-jumeirah',
          datePublished: '2024-03-15',
          dateModified: '2025-01-15',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Locations', url: 'https://propertywiki.ai/locations' },
          { name: 'Dubai', url: 'https://propertywiki.ai/locations/dubai' },
          { name: 'Palm Jumeirah', url: 'https://propertywiki.ai/locations/dubai/palm-jumeirah' },
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
            Palm Jumeirah Property Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to Dubai&apos;s iconic palm-shaped island, featuring ultra-luxury villas, 
            signature residences, waterfront apartments, and world-class amenities.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/palm-jumeirah-hero.jpg"
            alt="Aerial view of Palm Jumeirah island in Dubai showing the iconic palm tree shape, luxury villas, waterfront properties, and the Atlantis hotel"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Palm Jumeirah Overview</h2>
            <p>
              Palm Jumeirah is one of the world&apos;s most recognizable and ambitious man-made islands, 
              developed by Nakheel and completed in 2006. Shaped like a palm tree when viewed from above, 
              this engineering marvel adds 78 kilometers of coastline to Dubai and has become synonymous 
              with ultra-luxury living in the Middle East.
            </p>
            <p>
              The island comprises three main sections: the Trunk (featuring high-rise apartments and hotels), 
              16 Fronds (home to exclusive beachfront villas), and the Crescent (hosting world-renowned 
              hotels including the iconic Atlantis, The Palm). With a resident population of over 80,000, 
              Palm Jumeirah offers an exclusive island lifestyle while remaining connected to mainland Dubai.
            </p>
            <p>
              As a <Link href="/definitions/freehold-property">freehold zone</Link>, Palm Jumeirah allows 
              foreign nationals to purchase property with full ownership rights. The area has attracted 
              celebrities, business magnates, and high-net-worth individuals from around the world, 
              cementing its status as one of Dubai&apos;s most prestigious addresses.
            </p>
          </section>

          <section id="property-types">
            <h2>Property Types & Prices</h2>
            <p>
              Palm Jumeirah offers diverse property options ranging from apartments to ultra-luxury 
              villas. The island features several distinct property categories including Shoreline 
              Apartments, Signature Villas, Garden Homes, and branded residences at Atlantis The Royal 
              and other premium developments.
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
              Premium developments like Atlantis The Royal Residences, One Palm, and FIVE Palm Jumeirah 
              command the highest prices due to their exceptional amenities, branded services, and 
              unparalleled waterfront locations. Signature Villas on the Fronds with private beaches 
              represent the pinnacle of luxury living on the island.
            </p>
          </section>

          <section id="rental-yields">
            <h2>Rental Yields & ROI</h2>
            <p>
              Palm Jumeirah offers moderate rental yields compared to other Dubai communities, 
              reflecting the premium property values. However, the area compensates with strong 
              capital appreciation and consistent demand from high-net-worth tenants.
            </p>
            <ul>
              <li><strong>Studios:</strong> 5-6% gross yield</li>
              <li><strong>1-2 Bedroom Apartments:</strong> 4-5% gross yield</li>
              <li><strong>3-4 Bedroom Apartments:</strong> 3-4% gross yield</li>
              <li><strong>Villas:</strong> 3-4% gross yield</li>
              <li><strong>Penthouses:</strong> 2-3% gross yield</li>
            </ul>
            <p>
              While yields are lower than areas like <Link href="/locations/dubai/dubai-marina">Dubai Marina</Link> or JVC, Palm Jumeirah properties 
              have historically shown strong capital appreciation. The limited supply of beachfront 
              land and global prestige of the address ensure sustained demand. <Link href="/guides/highest-nightly-rate-areas-dubai">Short-term rentals</Link> 
              through platforms like Airbnb can achieve significantly higher returns for furnished 
              apartments, particularly during peak tourist seasons.
            </p>
          </section>

          <section id="lifestyle">
            <h2>Lifestyle & Amenities</h2>
            <p>
              Palm Jumeirah delivers an unparalleled luxury lifestyle with world-class amenities:
            </p>
            <ul>
              <li><strong>Private Beaches:</strong> Exclusive beach access for villa and apartment residents</li>
              <li><strong>5-Star Hotels:</strong> Atlantis The Palm, Atlantis The Royal, One&Only, Fairmont, Waldorf Astoria, Jumeirah Zabeel Saray, and more</li>
              <li><strong>Fine Dining:</strong> Award-winning restaurants including Nobu, Gordon Ramsay&apos;s Bread Street Kitchen, and Ossiano</li>
              <li><strong>The Pointe:</strong> Waterfront dining and entertainment destination with stunning Atlantis views</li>
              <li><strong>Nakheel Mall:</strong> Premium shopping center with luxury boutiques and dining</li>
              <li><strong>Spas & Wellness:</strong> World-class spa facilities at major hotels</li>
              <li><strong>Water Sports:</strong> Jet skiing, paddleboarding, diving, and yacht charters</li>
              <li><strong>Aquaventure:</strong> The region&apos;s largest waterpark at Atlantis</li>
            </ul>
          </section>

          <section id="transportation">
            <h2>Transportation & Connectivity</h2>
            <p>
              Palm Jumeirah offers multiple transportation options connecting residents to mainland Dubai:
            </p>
            <ul>
              <li><strong>Palm Monorail:</strong> A 5.45km automated rail system running from Gateway Towers to Atlantis, connecting to Dubai Tram at Palm Gateway station</li>
              <li><strong>Dubai Tram Integration:</strong> Palm Gateway station connects to the Dubai Tram, which links to Dubai Metro Red Line at JLT and DMCC stations near <Link href="/locations/dubai/dubai-marina">Dubai Marina</Link></li>
              <li><strong>Road Access:</strong> Multi-lane undersea tunnel and bridge system connecting to Sheikh Zayed Road (E11)</li>
              <li><strong>Dubai Airport:</strong> 25-35 minutes to Dubai International Airport (DXB)</li>
              <li><strong>Al Maktoum Airport:</strong> 35-45 minutes to Dubai World Central (DWC)</li>
            </ul>
            <p>
              Future infrastructure improvements include planned expansions to the Dubai Metro network 
              that will further enhance connectivity to Palm Jumeirah, making the island even more 
              accessible while maintaining its exclusive character.
            </p>
          </section>

          <section id="investment-outlook">
            <h2>Investment Outlook</h2>
            <p>
              Palm Jumeirah represents a unique investment proposition in the global luxury real estate 
              market. Key factors supporting its investment appeal include:
            </p>
            <ul>
              <li><strong>Trophy Asset Status:</strong> Global recognition as one of the world&apos;s most iconic addresses</li>
              <li><strong>Finite Supply:</strong> No additional Fronds or land can be created, ensuring scarcity</li>
              <li><strong>Strong Capital Appreciation:</strong> Consistent price growth over the past decade</li>
              <li><strong>UHNW Demand:</strong> Continued interest from ultra-high-net-worth individuals and celebrities</li>
              <li><strong>Tourism Hub:</strong> World-class hotels drive visitor traffic and short-term rental potential</li>
              <li><strong>Golden Visa Eligibility:</strong> Properties above AED 2M qualify for UAE Golden Visa</li>
              <li><strong>Established Infrastructure:</strong> Mature community with complete amenities and services</li>
            </ul>
            <p>
              For investors seeking a prestigious address with strong value retention and long-term 
              appreciation potential, Palm Jumeirah remains one of Dubai&apos;s premier investment 
              destinations. The combination of limited supply, global brand recognition, and 
              continued development of ultra-luxury projects ensures the island&apos;s position at 
              the apex of Dubai&apos;s property market.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-03-15"
          dateModified="2025-01-15"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina Property Guide</p>
            </Link>
            <Link href="/locations/dubai/jbr" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">JBR Beachfront Property Guide</p>
            </Link>
            <Link href="/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Downtown Dubai Property Guide</p>
            </Link>
            <Link href="/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">How to Buy Property in Dubai</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
            <Link href="/guides/palm-jumeirah-vs-emirates-hills" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Palm Jumeirah vs Emirates Hills</p>
            </Link>
            <Link href="/guides/highest-nightly-rate-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Highest Nightly Rate Areas in Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
