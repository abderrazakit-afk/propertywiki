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
  title: 'Property Near Red Line Metro Dubai',
  description: 'Guide to property near Dubai Red Line Metro stations from Rashidiya to Jebel Ali. Prices, rental yields, and investment potential along the busiest metro corridor.',
  keywords: ['Red Line Metro Dubai property', 'Dubai Metro Red Line', 'property near metro station Dubai', 'Rashidiya to Jebel Ali property'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/property-near-red-line-metro-dubai',
      'x-default': 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai',
    title: 'Property Near Red Line Metro Dubai',
    description: 'Guide to property near Dubai Red Line Metro stations from Rashidiya to Jebel Ali.',
    type: 'article',
    publishedTime: '2025-07-15',
    modifiedTime: '2026-02-01',
  },
}

const tableOfContents = [
  { id: 'red-line-overview', title: 'Red Line Overview', level: 2 },
  { id: 'eastern-corridor', title: 'Eastern Corridor: Rashidiya to DIFC', level: 2 },
  { id: 'central-corridor', title: 'Central Corridor: Downtown to Internet City', level: 2 },
  { id: 'western-corridor', title: 'Western Corridor: Marina to Jebel Ali', level: 2 },
  { id: 'station-price-map', title: 'Station-by-Station Price Map', level: 2 },
  { id: 'best-value-stations', title: 'Best Value Red Line Stations', level: 2 },
  { id: 'future-developments', title: 'Future Developments', level: 2 },
]

const faqs = [
  {
    question: 'How many stations are on the Dubai Metro Red Line?',
    answer: 'The Red Line has 29 stations stretching 52.1 kilometers from Rashidiya (near Dubai International Airport Terminal 3) to Jebel Ali, plus the Route 2020 extension adding 7 more stations to Expo City Dubai. It is the longer and busier of the two main metro lines.',
  },
  {
    question: 'Which Red Line station has the cheapest property nearby?',
    answer: 'Rashidiya and Deira City Centre stations on the eastern end of the Red Line offer the most affordable property. Studios near Rashidiya start from around AED 250,000, while areas near Deira City Centre have studios from AED 320,000. These older neighborhoods offer strong rental yields of 8-10%.',
  },
  {
    question: 'Is property near Business Bay metro station a good investment?',
    answer: 'Business Bay is one of the strongest investment zones on the Red Line. Studios start from AED 550,000, one-bedrooms from AED 900,000, and gross rental yields average 6-7%. The area benefits from proximity to Downtown Dubai, the Dubai Water Canal, and a growing commercial district.',
  },
  {
    question: 'How does the Red Line connect to Dubai airports?',
    answer: 'The Red Line directly serves Dubai International Airport with three stations: Terminal 1, Terminal 3, and Airport Free Zone. This makes property along the Red Line particularly attractive to frequent flyers and airport workers. Al Maktoum International Airport (DWC) is accessible via Route 2020.',
  },
  {
    question: 'What is the busiest Red Line metro station?',
    answer: 'Burj Khalifa/Dubai Mall station is consistently the busiest on the Red Line, serving both Downtown Dubai residents and the millions of annual visitors to Dubai Mall. Union station, which provides interchange to the Green Line, is also among the busiest.',
  },
]

const redLineStations = [
  { station: 'Rashidiya', area: 'Rashidiya', studioFrom: 'AED 250K', oneBedFrom: 'AED 400K', yield: '8-10%', segment: 'Eastern' },
  { station: 'Airport Terminal 3', area: 'Al Garhoud', studioFrom: 'AED 350K', oneBedFrom: 'AED 550K', yield: '7-8%', segment: 'Eastern' },
  { station: 'Deira City Centre', area: 'Deira', studioFrom: 'AED 320K', oneBedFrom: 'AED 500K', yield: '7-9%', segment: 'Eastern' },
  { station: 'BurJuman', area: 'Bur Dubai', studioFrom: 'AED 380K', oneBedFrom: 'AED 580K', yield: '7-8%', segment: 'Eastern' },
  { station: 'Financial Centre', area: 'DIFC', studioFrom: 'AED 900K', oneBedFrom: 'AED 1.5M', yield: '5-6%', segment: 'Central' },
  { station: 'Burj Khalifa/Dubai Mall', area: 'Downtown', studioFrom: 'AED 800K', oneBedFrom: 'AED 1.4M', yield: '5-6%', segment: 'Central' },
  { station: 'Business Bay', area: 'Business Bay', studioFrom: 'AED 550K', oneBedFrom: 'AED 900K', yield: '6-7%', segment: 'Central' },
  { station: 'Mall of the Emirates', area: 'Al Barsha', studioFrom: 'AED 400K', oneBedFrom: 'AED 650K', yield: '6-7%', segment: 'Central' },
  { station: 'Dubai Internet City', area: 'TECOM/Barsha Heights', studioFrom: 'AED 420K', oneBedFrom: 'AED 680K', yield: '6-7%', segment: 'Central' },
  { station: 'DMCC', area: 'JLT/Dubai Marina', studioFrom: 'AED 450K', oneBedFrom: 'AED 750K', yield: '7-8%', segment: 'Western' },
  { station: 'Nakheel', area: 'Ibn Battuta area', studioFrom: 'AED 320K', oneBedFrom: 'AED 480K', yield: '7-8%', segment: 'Western' },
  { station: 'Jebel Ali', area: 'Jebel Ali', studioFrom: 'AED 280K', oneBedFrom: 'AED 420K', yield: '8-10%', segment: 'Western' },
]

const relatedArticles = [
  {
    title: 'Best Areas Near Dubai Metro for Property',
    href: '/guides/best-areas-near-dubai-metro',
    category: 'Guide',
    description: 'Overview of the best areas across all Dubai Metro lines.',
  },
  {
    title: 'Walking Distance Metro Communities',
    href: '/guides/walking-distance-metro-communities',
    category: 'Guide',
    description: 'Specific buildings and communities within walking distance to metro stations.',
  },
  {
    title: 'Downtown Dubai Property Guide',
    href: '/locations/dubai/downtown-dubai',
    category: 'Location',
    description: 'Complete guide to Downtown Dubai real estate, home to the iconic Burj Khalifa station.',
  },
]

export default function PropertyNearRedLineMetroPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Property Near Red Line Metro Dubai', href: '/guides/property-near-red-line-metro-dubai' },
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
          title: 'Property Near Red Line Metro Dubai - Station by Station Guide',
          description: 'Guide to property near Dubai Red Line Metro stations from Rashidiya to Jebel Ali.',
          url: 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai',
          datePublished: '2025-07-15',
          dateModified: '2026-02-01',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Property Near Red Line Metro Dubai', url: 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Metro & Transport Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Property Near Red Line Metro Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Red Line is Dubai&apos;s busiest metro corridor, cutting across the city from
            Rashidiya to Jebel Ali. Here&apos;s what you can buy — and what you&apos;ll pay —
            at every major station along the way.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="red-line-overview">
            <h2>Red Line Overview</h2>
            <p>
              The Red Line is the spine of Dubai&apos;s metro network. Stretching 52.1 kilometers
              with 29 stations, it connects the airport in the east to Jebel Ali in the west,
              passing through virtually every major commercial and residential hub along the way.
              It opened in 2009 and remains the most heavily used metro line in the city.
            </p>
            <p>
              For property investors, the Red Line is essentially a price gradient. At the eastern
              end (Rashidiya, Deira), you&apos;ll find the most affordable options — studios from
              AED 250,000. In the middle (Downtown, DIFC), prices peak with studios from AED 800,000+.
              And at the western end (Dubai Marina, Jebel Ali), there&apos;s a mix of mid-range and
              premium options.
            </p>
            <p>
              What makes the Red Line particularly valuable is that it connects both Dubai airports,
              the main business districts, and the most popular residential areas. A tenant living
              near any Red Line station can reach almost anywhere in the city without a car.
            </p>
          </section>

          <section id="eastern-corridor">
            <h2>Eastern Corridor: Rashidiya to DIFC</h2>
            <p>
              The eastern stretch of the Red Line runs through Dubai&apos;s older, more established
              neighborhoods. This is where you&apos;ll find the best yields — often 7-10% — but
              with older building stock and a very different lifestyle to the western corridor.
            </p>

            <h3>Rashidiya &amp; Al Qusais</h3>
            <p>
              These are primarily residential neighborhoods popular with families and mid-income
              earners. Property here is genuinely affordable — studios from AED 250,000 — and
              rental demand is strong thanks to proximity to the airport and commercial areas
              in Deira. The trade-off is that the areas feel more suburban, and the building
              quality varies significantly.
            </p>

            <h3>Al Garhoud &amp; Deira</h3>
            <p>
              Al Garhoud, near Airport Terminal 3 station, offers a slightly more upscale feel
              with proximity to Dubai Creek Golf Club and several international schools. Studios
              start around AED 350,000. Deira City Centre station serves the commercial heart
              of old Dubai, with affordable apartments nearby starting from AED 320,000.
            </p>

            <h3>BurJuman &amp; DIFC</h3>
            <p>
              The BurJuman interchange is one of the most connected points on the network (Red
              and Green lines meet here). The area around the station is well-established with
              a mix of older and newer buildings. Moving toward <Link href="/locations/dubai/difc" className="text-primary-600 hover:underline">DIFC</Link>,
              prices jump significantly — the Financial Centre station area is premium territory
              with studios from AED 900,000 and a distinctly upscale atmosphere.
            </p>
          </section>

          <section id="central-corridor">
            <h2>Central Corridor: Downtown to Internet City</h2>
            <p>
              This is the heart of New Dubai, and where the Red Line passes through the city&apos;s
              most iconic developments. Prices are highest here, but so is demand.
            </p>

            <h3>Downtown &amp; Business Bay</h3>
            <p>
              The Burj Khalifa/Dubai Mall station puts you at the center of everything. <Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">Downtown</Link> is
              where prestige meets convenience, though you&apos;ll pay for the privilege. <Link href="/locations/dubai/business-bay" className="text-primary-600 hover:underline">Business Bay</Link> station,
              just one stop away, offers better value — studios from AED 550,000 versus AED 800,000
              in Downtown — with nearly identical connectivity.
            </p>

            <h3>Al Barsha &amp; Mall of the Emirates</h3>
            <p>
              Mall of the Emirates station is a major transit hub, and the surrounding Al Barsha
              neighborhood is popular with families. One of the advantages here is the direct
              connection through the mall — you can walk from your building to the metro entirely
              through air-conditioned spaces if you live close enough. One-beds from AED 650,000.
            </p>

            <h3>TECOM &amp; Internet City</h3>
            <p>
              Dubai Internet City and Media City stations serve the TECOM district, home to
              hundreds of tech and media companies. Barsha Heights (formerly TECOM) has a large
              supply of apartments popular with professionals working in these free zones.
              Studios from AED 420,000 and yields of 6-7%.
            </p>
          </section>

          <section id="western-corridor">
            <h2>Western Corridor: Marina to Jebel Ali</h2>
            <p>
              The western end of the Red Line serves some of Dubai&apos;s most popular freehold
              communities, from the upscale Marina to the more affordable Jebel Ali.
            </p>

            <h3>JLT &amp; Dubai Marina (DMCC Station)</h3>
            <p>
              DMCC station is the gateway to two of Dubai&apos;s biggest freehold communities.
              <Link href="/locations/dubai/dubai-marina" className="text-primary-600 hover:underline"> Dubai Marina</Link> offers
              the waterfront lifestyle premium, while JLT provides similar connectivity at lower
              prices. Together, they represent one of the most active rental markets in the city.
              JLT studios from AED 450,000; Marina studios from AED 700,000.
            </p>

            <h3>Ibn Battuta &amp; Nakheel</h3>
            <p>
              Further west, the Nakheel and Ibn Battuta stations serve more affordable communities
              including Discovery Gardens and parts of Al Furjan. Studios start from AED 320,000,
              and the area has seen significant value growth since the Route 2020 extension improved
              connectivity. Ibn Battuta Mall provides a major retail anchor for the area.
            </p>

            <h3>Jebel Ali</h3>
            <p>
              At the western terminus, Jebel Ali is one of the most affordable metro-connected
              areas in Dubai. Studios from AED 280,000 and yields pushing 8-10%. The area is
              industrial in character but is transforming as new residential developments come
              online. Proximity to Jebel Ali Free Zone makes it popular with logistics and
              manufacturing sector employees.
            </p>
          </section>

          <section id="station-price-map">
            <h2>Station-by-Station Price Map</h2>
            <p>
              Here&apos;s a comprehensive overview of property prices near key Red Line stations:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Station</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Area</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Studio From</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">1-Bed From</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Yield</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {redLineStations.map((row) => (
                    <tr key={row.station}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.station}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.area}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.studioFrom}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.oneBedFrom}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.yield}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="best-value-stations">
            <h2>Best Value Red Line Stations</h2>
            <p>
              If you&apos;re looking for the best balance of price, yield, and lifestyle, here are
              our top picks on the Red Line:
            </p>
            <ul>
              <li><strong>Best overall value:</strong> Business Bay — strong yields (6-7%), reasonable
              entry prices (studios from AED 550K), and a prime central location walkable to Downtown.</li>
              <li><strong>Best for yield:</strong> Rashidiya or Jebel Ali — yields of 8-10% with the
              lowest entry prices on the line, ideal for pure investment plays.</li>
              <li><strong>Best for lifestyle:</strong> DMCC (Dubai Marina/JLT) — the waterfront location,
              vibrant nightlife, and beach access make this the top lifestyle choice on the Red Line.</li>
              <li><strong>Best for capital growth:</strong> Business Bay and Downtown — these central
              locations have shown the strongest capital appreciation over the past decade and continue
              to benefit from new infrastructure.</li>
            </ul>
          </section>

          <section id="future-developments">
            <h2>Future Developments</h2>
            <p>
              The RTA has announced plans for further metro expansion that will affect property
              values along the Red Line:
            </p>
            <ul>
              <li><strong>Blue Line:</strong> A planned new metro line that will intersect with
              the Red Line at several points, improving connectivity for Red Line adjacent areas.</li>
              <li><strong>Station upgrades:</strong> Several stations are being upgraded with
              improved pedestrian access and connections to bus and tram networks.</li>
              <li><strong>Transit-oriented development:</strong> The RTA and Dubai Municipality are
              actively promoting higher-density development around metro stations, which should
              increase both supply and demand in station-adjacent areas.</li>
            </ul>
            <p>
              Keep an eye on areas around stations earmarked for upgrades — early investment
              before infrastructure improvements complete has historically delivered strong
              returns in Dubai.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-07-15"
          dateModified="2026-02-01"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Business Bay Property Guide</p>
            </Link>
            <Link href="/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Downtown Dubai Property Guide</p>
            </Link>
            <Link href="/locations/dubai/difc" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">DIFC Property Guide</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What Is Freehold Property?</p>
            </Link>
            <Link href="/guides/best-areas-near-dubai-metro" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Areas Near Dubai Metro</p>
            </Link>
            <Link href="/guides/walking-distance-metro-communities" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Walking Distance Metro Communities</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
