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
  title: 'Business Bay vs Downtown Dubai: Comparison',
  description: 'Business Bay vs Downtown Dubai comparison guide. Compare property prices, rental yields, lifestyle, walkability, and metro access with 2026 data.',
  keywords: ['Business Bay vs Downtown Dubai', 'Business Bay investment', 'Downtown Dubai property', 'Dubai area comparison', 'Business Bay rental yield'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/business-bay-vs-downtown-dubai',
      'x-default': 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai',
    title: 'Business Bay vs Downtown Dubai: Comparison',
    description: 'Side-by-side comparison of Business Bay and Downtown Dubai for property buyers and investors.',
    type: 'article',
    publishedTime: '2025-10-01',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Two Neighbours, Two Personalities', level: 2 },
  { id: 'comparison-table', title: 'Side-by-Side Comparison', level: 2 },
  { id: 'prices', title: 'Property Prices Breakdown', level: 2 },
  { id: 'rental-yields', title: 'Rental Yield Comparison', level: 2 },
  { id: 'lifestyle', title: 'Lifestyle & Walkability', level: 2 },
  { id: 'metro-access', title: 'Metro Access & Connectivity', level: 2 },
  { id: 'pros-and-cons', title: 'Pros and Cons', level: 2 },
  { id: 'verdict', title: 'Which Should You Choose?', level: 2 },
]

const faqs = [
  {
    question: 'Is Business Bay cheaper than Downtown Dubai?',
    answer: 'Yes, Business Bay is generally 25-40% cheaper than Downtown Dubai for comparable units. A one-bedroom in Business Bay averages AED 1M-1.4M compared to AED 1.5M-2.2M in Downtown. This price gap makes Business Bay attractive for investors seeking higher yields on a lower entry cost.',
  },
  {
    question: 'Which area has better rental yields, Business Bay or Downtown?',
    answer: 'Business Bay typically delivers higher gross rental yields of 7-8% compared to Downtown Dubai\'s 5-6%. The lower purchase prices in Business Bay combined with competitive rental rates create a wider yield gap, making it the better pure income play.',
  },
  {
    question: 'Can you walk between Business Bay and Downtown Dubai?',
    answer: 'Yes, the two areas share a border along the Dubai Water Canal. Walking from the northern end of Business Bay to the Burj Khalifa takes roughly 15-20 minutes. The canal promenade connects both areas with pedestrian-friendly paths, cafes, and waterfront dining.',
  },
  {
    question: 'Is Business Bay or Downtown better for families?',
    answer: 'Downtown Dubai is generally better for families thanks to established schools nearby, the Dubai Mall entertainment options, and more mature community infrastructure. Business Bay is more suited to young professionals and couples, though family-friendly towers like Damac Maison and newer developments are changing this.',
  },
  {
    question: 'Which area has better metro access?',
    answer: 'Both areas are well-served by the Dubai Metro Red Line. Downtown has the Burj Khalifa/Dubai Mall station, while Business Bay has its own dedicated station. Business Bay station is more centrally located within its community, giving more towers convenient walking access to the metro.',
  },
]

const relatedArticles = [
  {
    title: 'Business Bay Property Guide',
    href: '/locations/dubai/business-bay',
    category: 'Location',
    description: 'Complete guide to Business Bay including prices, yields, and community insights.',
  },
  {
    title: 'Downtown Dubai Property Guide',
    href: '/locations/dubai/downtown-dubai',
    category: 'Location',
    description: 'Everything you need to know about property in Downtown Dubai.',
  },
  {
    title: 'Highest Rental Yield Areas in Dubai',
    href: '/guides/highest-rental-yield-areas-dubai',
    category: 'Guide',
    description: 'Complete yield comparison across all major Dubai investment areas.',
  },
  {
    title: 'Dubai Marina vs JBR: Which Is Better?',
    href: '/guides/dubai-marina-vs-jbr',
    category: 'Guide',
    description: 'Waterfront living comparison between Dubai Marina and JBR.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai as a foreigner.',
  },
]

const comparisonData = [
  { metric: 'Developer Mix', businessBay: 'Multiple developers', downtown: 'Primarily Emaar' },
  { metric: 'Community Type', businessBay: 'Mixed-use business & residential', downtown: 'Premium lifestyle hub' },
  { metric: 'Studio Price (Avg)', businessBay: 'AED 600K - 900K', downtown: 'AED 900K - 1.4M' },
  { metric: '1BR Price (Avg)', businessBay: 'AED 1M - 1.4M', downtown: 'AED 1.5M - 2.2M' },
  { metric: '2BR Price (Avg)', businessBay: 'AED 1.5M - 2.5M', downtown: 'AED 2.5M - 4.5M' },
  { metric: 'Gross Rental Yield', businessBay: '7% - 8%', downtown: '5% - 6%' },
  { metric: 'Capital Appreciation (2023-2025)', businessBay: '30% - 40%', downtown: '25% - 35%' },
  { metric: 'Service Charges (per sq ft)', businessBay: 'AED 12 - 18', downtown: 'AED 18 - 30' },
  { metric: 'Metro Station', businessBay: 'Business Bay Station', downtown: 'Burj Khalifa/Dubai Mall' },
  { metric: 'Walk Score', businessBay: 'Moderate (varies by tower)', downtown: 'High (central core)' },
  { metric: 'Tenant Profile', businessBay: 'Young professionals, corporates', downtown: 'Tourists, executives, families' },
  { metric: 'Short-term Rental Potential', businessBay: 'High', downtown: 'Very High' },
]

const priceComparison = [
  { type: 'Studio', bbPrice: 'AED 600K - 900K', bbRent: 'AED 50K - 65K', dtPrice: 'AED 900K - 1.4M', dtRent: 'AED 55K - 75K' },
  { type: '1 Bedroom', bbPrice: 'AED 1M - 1.4M', bbRent: 'AED 70K - 95K', dtPrice: 'AED 1.5M - 2.2M', dtRent: 'AED 85K - 120K' },
  { type: '2 Bedroom', bbPrice: 'AED 1.5M - 2.5M', bbRent: 'AED 100K - 150K', dtPrice: 'AED 2.5M - 4.5M', dtRent: 'AED 140K - 220K' },
  { type: '3 Bedroom', bbPrice: 'AED 2.5M - 4M', bbRent: 'AED 150K - 220K', dtPrice: 'AED 4M - 8M', dtRent: 'AED 200K - 350K' },
]

export default function BusinessBayVsDowntownDubaiPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Business Bay vs Downtown Dubai', href: '/guides/business-bay-vs-downtown-dubai' },
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
          title: 'Business Bay vs Downtown Dubai: Complete Comparison Guide',
          description: 'Side-by-side comparison of Business Bay and Downtown Dubai for property buyers and investors.',
          url: 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai',
          datePublished: '2025-10-01',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Business Bay vs Downtown Dubai', url: 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Comparison Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Business Bay vs Downtown Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            They share a canal and a postcode, but these two neighbourhoods offer very different
            investment profiles. Here&apos;s how to decide between them.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Two Neighbours, Two Personalities</h2>
            <p>
              Stand on the Dubai Water Canal promenade and you can see both{' '}
              <Link href="/locations/dubai/business-bay" className="text-primary-600 hover:underline">Business Bay</Link>{' '}
              and{' '}
              <Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">Downtown Dubai</Link>{' '}
              stretching out on either side. They&apos;re neighbours in every sense &mdash; connected by
              bridges, walkways, and the Red Line metro. Yet they attract different buyers, different
              tenants, and different investment strategies.
            </p>
            <p>
              Downtown is the glamour play. It&apos;s home to the Burj Khalifa, the Dubai Mall, and
              the Dubai Fountain &mdash; arguably the most recognisable address in the Middle East.
              Properties here command a premium because of the brand, the views, and the lifestyle
              that comes with living in what many consider Dubai&apos;s city centre.
            </p>
            <p>
              Business Bay is the value play. It offers much of Downtown&apos;s convenience at a
              significant discount. Over the past few years, it&apos;s evolved from a purely commercial
              district into a thriving residential community with restaurants, cafes, and a genuine
              neighbourhood feel along the canal. Smart investors spotted this shift early, and the
              numbers have rewarded them.
            </p>
          </section>

          <section id="comparison-table">
            <h2>Side-by-Side Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Business Bay</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Downtown Dubai</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {comparisonData.map((row) => (
                    <tr key={row.metric}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.metric}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.businessBay}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.downtown}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="prices">
            <h2>Property Prices Breakdown</h2>
            <p>
              The price gap between these two areas is substantial and consistent across all unit types.
              Downtown commands a 40-60% premium over Business Bay for comparable apartments, driven
              largely by the Emaar brand, Burj Khalifa views, and the prestige factor.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BB Price</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BB Rent/Year</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">DT Price</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">DT Rent/Year</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {priceComparison.map((row) => (
                    <tr key={row.type}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.bbPrice}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.bbRent}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.dtPrice}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.dtRent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Here&apos;s the thing though &mdash; rental rates in Business Bay aren&apos;t 40-60% lower
              than Downtown. They&apos;re typically only 15-25% lower. That&apos;s the yield equation
              that makes Business Bay so attractive to income-focused investors.
            </p>
          </section>

          <section id="rental-yields">
            <h2>Rental Yield Comparison</h2>
            <p>
              Business Bay consistently outperforms Downtown on yield, and the maths is straightforward:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Business Bay Yields</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Studios:</strong> 7.5% - 8.5% gross</li>
                  <li><strong>1-Bedroom:</strong> 7% - 8% gross</li>
                  <li><strong>2-Bedroom:</strong> 6.5% - 7.5% gross</li>
                  <li><strong>3-Bedroom:</strong> 5.5% - 6.5% gross</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Downtown Dubai Yields</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Studios:</strong> 5.5% - 6.5% gross</li>
                  <li><strong>1-Bedroom:</strong> 5% - 6% gross</li>
                  <li><strong>2-Bedroom:</strong> 4.5% - 5.5% gross</li>
                  <li><strong>3-Bedroom:</strong> 4% - 5% gross</li>
                </ul>
              </div>
            </div>
            <p>
              That 1.5-2% yield gap is significant over time. On a AED 1.2 million one-bedroom in
              Business Bay yielding 7.5%, you&apos;re earning AED 90,000 per year. The same money in
              Downtown would buy you a studio yielding around 6%, or AED 72,000. That&apos;s AED 18,000
              more per year in your pocket from Business Bay.
            </p>
          </section>

          <section id="lifestyle">
            <h2>Lifestyle & Walkability</h2>
            <p>
              Downtown wins on walkability, hands down. The area around the Dubai Mall, Souk Al Bahar,
              and the Boulevard is designed for pedestrians. You can walk from your apartment to world-class
              dining, shopping, and entertainment without ever needing a car. The Dubai Fountain show every
              evening is essentially free entertainment right outside your door.
            </p>
            <p>
              Business Bay is catching up, particularly along the canal. The canal-side promenade has
              become a genuine lifestyle destination with restaurants, cafes, and jogging tracks. But
              the community is more spread out, and depending on which tower you&apos;re in, you might
              need to drive to reach amenities. The northern end of Business Bay (closer to Downtown)
              is significantly more walkable than the southern end.
            </p>
            <p>
              For dining and nightlife, both areas deliver. Business Bay has seen an explosion of
              restaurants and bars along the canal, while Downtown offers everything from the Dubai
              Mall food court to Michelin-starred restaurants. If anything, Business Bay&apos;s dining
              scene feels more local and less tourist-driven, which many residents prefer.
            </p>
          </section>

          <section id="metro-access">
            <h2>Metro Access & Connectivity</h2>
            <p>
              Both areas are served by the Dubai Metro Red Line, which is a significant advantage
              over many other Dubai communities. The Business Bay Metro Station sits right in the
              heart of the district, while the Burj Khalifa/Dubai Mall station serves Downtown.
            </p>
            <p>
              In practice, Business Bay&apos;s metro station is more useful to a larger percentage
              of its residents. The station is centrally located, putting most towers within a 5-10
              minute walk. Downtown&apos;s station, while well-connected, sits at the edge of the
              community, meaning residents in the Boulevard area might be 15-20 minutes on foot.
            </p>
            <p>
              By road, both areas are well-connected to Sheikh Zayed Road and Al Khail Road. Traffic
              can be heavy during peak hours in both communities, though Downtown tends to be worse
              on weekends due to mall traffic. Business Bay&apos;s multiple entry points distribute
              traffic more evenly.
            </p>
          </section>

          <section id="pros-and-cons">
            <h2>Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Business Bay Pros</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10003; Higher rental yields (7-8%)</li>
                  <li>&#10003; Lower entry prices</li>
                  <li>&#10003; Canal waterfront lifestyle</li>
                  <li>&#10003; Central metro station</li>
                  <li>&#10003; Growing dining and nightlife scene</li>
                </ul>
                <h3 className="font-semibold text-gray-900 mb-3 mt-4">Business Bay Cons</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10007; Inconsistent build quality across developers</li>
                  <li>&#10007; Less walkable in southern parts</li>
                  <li>&#10007; Less prestigious address</li>
                  <li>&#10007; Some towers lack adequate parking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Downtown Dubai Pros</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10003; Iconic address and views</li>
                  <li>&#10003; Excellent walkability (central core)</li>
                  <li>&#10003; Dubai Mall and Fountain access</li>
                  <li>&#10003; Emaar build quality</li>
                  <li>&#10003; Strong short-term rental demand</li>
                </ul>
                <h3 className="font-semibold text-gray-900 mb-3 mt-4">Downtown Dubai Cons</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10007; Lower rental yields (5-6%)</li>
                  <li>&#10007; Significantly higher prices</li>
                  <li>&#10007; Weekend traffic congestion</li>
                  <li>&#10007; Higher service charges (AED 18-30/sq ft)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="verdict">
            <h2>Which Should You Choose?</h2>
            <p>
              The decision really comes down to your priorities:
            </p>
            <ul>
              <li><strong>Choose Business Bay if:</strong> You want higher rental income, lower entry costs,
              and you&apos;re comfortable with a less established but rapidly improving community. It&apos;s
              the smarter financial play for pure investors.</li>
              <li><strong>Choose Downtown Dubai if:</strong> You value prestige, walkability, and the
              lifestyle factor. It&apos;s also the better bet for short-term holiday rentals thanks to
              tourist demand around the Burj Khalifa and Dubai Mall.</li>
              <li><strong>Consider both if:</strong> You have AED 2M+ and want to split between a
              yield-focused Business Bay unit and a capital-growth Downtown unit.</li>
            </ul>
            <p>
              Both areas are fundamentally sound investments backed by strong infrastructure and consistent
              demand. For more details on each area, explore our dedicated guides for{' '}
              <Link href="/locations/dubai/business-bay" className="text-primary-600 hover:underline">
                Business Bay
              </Link>{' '}
              and{' '}
              <Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">
                Downtown Dubai
              </Link>. If you&apos;re new to the Dubai market, start with our{' '}
              <Link href="/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">
                How to Buy Property in Dubai
              </Link>{' '}
              guide.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-10-01"
          dateModified="2026-02-05"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
