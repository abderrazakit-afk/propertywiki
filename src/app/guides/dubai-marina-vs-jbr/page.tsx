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
  title: 'Dubai Marina vs JBR: Which Is Better?',
  description: 'Dubai Marina vs JBR comparison guide. Compare beach access, property prices, rental yields, lifestyle, and family-friendliness with real 2026 data.',
  keywords: ['Dubai Marina vs JBR', 'JBR property', 'Dubai Marina investment', 'Dubai waterfront comparison', 'JBR rental yield', 'Dubai Marina beach'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/dubai-marina-vs-jbr',
    languages: {
      'en': 'https://propertywiki.ai/guides/dubai-marina-vs-jbr',
      'ar': 'https://propertywiki.ai/ar/guides/dubai-marina-vs-jbr',
      'x-default': 'https://propertywiki.ai/guides/dubai-marina-vs-jbr',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/dubai-marina-vs-jbr',
    title: 'Dubai Marina vs JBR: Which Is Better?',
    description: 'Head-to-head comparison of Dubai Marina and JBR for property buyers and investors.',
    type: 'article',
    publishedTime: '2025-10-01',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Marina vs Beach: The Eternal Debate', level: 2 },
  { id: 'comparison-table', title: 'Side-by-Side Comparison', level: 2 },
  { id: 'beach-access', title: 'Beach Access & Waterfront Living', level: 2 },
  { id: 'prices', title: 'Property Prices by Unit Type', level: 2 },
  { id: 'rental-yields', title: 'Rental Yield Comparison', level: 2 },
  { id: 'lifestyle', title: 'Lifestyle & Entertainment', level: 2 },
  { id: 'family-friendliness', title: 'Family-Friendliness', level: 2 },
  { id: 'pros-and-cons', title: 'Pros and Cons', level: 2 },
  { id: 'verdict', title: 'Which Should You Choose?', level: 2 },
]

const faqs = [
  {
    question: 'Is JBR better than Dubai Marina for beach access?',
    answer: 'Yes, JBR has direct beach access with The Beach at JBR right at your doorstep. Dubai Marina is a marina-front community without its own beach, though JBR beach is just a 10-15 minute walk away. If daily beach access matters to you, JBR is the clear winner.',
  },
  {
    question: 'Which has higher rental yields, Dubai Marina or JBR?',
    answer: 'Dubai Marina generally offers slightly higher rental yields of 6.5-7.5% compared to JBR\'s 5.5-6.5%. Marina\'s larger inventory and wider price range create more opportunities for yield-focused investors, especially in studio and one-bedroom segments.',
  },
  {
    question: 'Is Dubai Marina or JBR better for short-term rentals?',
    answer: 'JBR tends to perform better for short-term holiday rentals due to its beachfront location and tourist appeal. The Walk at JBR and beach access drive strong nightly rates, especially during winter months. Dubai Marina performs well too, particularly towers with marina views, but JBR\'s tourist factor gives it an edge.',
  },
  {
    question: 'Can you walk between Dubai Marina and JBR?',
    answer: 'Absolutely. Dubai Marina and JBR are adjacent communities connected by walkways and the Dubai Marina Walk. You can stroll from the marina promenade to JBR beach in 10-15 minutes. The Dubai Tram also connects both areas with stops in each community.',
  },
  {
    question: 'Which area is better for families, Marina or JBR?',
    answer: 'JBR is generally more family-friendly with its beachfront, open-air dining at The Walk, and the Ain Dubai observation wheel nearby. The wider pavements and resort-like atmosphere suit families with young children. Dubai Marina is more of a young professional and couples\' neighbourhood, though several family-friendly towers exist.',
  },
]

const relatedArticles = [
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Complete guide to Dubai Marina including prices, yields, and community insights.',
  },
  {
    title: 'JBR Property Guide',
    href: '/locations/dubai/jbr',
    category: 'Location',
    description: 'Everything you need to know about property in Jumeirah Beach Residence.',
  },
  {
    title: 'Business Bay vs Downtown Dubai',
    href: '/guides/business-bay-vs-downtown-dubai',
    category: 'Guide',
    description: 'Side-by-side comparison of Business Bay and Downtown Dubai.',
  },
  {
    title: 'Best Areas for Airbnb in Dubai',
    href: '/guides/best-areas-airbnb-dubai',
    category: 'Guide',
    description: 'Top areas for short-term rental investment in Dubai.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai as a foreigner.',
  },
]

const comparisonData = [
  { metric: 'Developer', marina: 'Multiple (Emaar, Select Group, etc.)', jbr: 'Dubai Properties' },
  { metric: 'Community Type', marina: 'Marina-front high-rise', jbr: 'Beachfront resort-style' },
  { metric: 'Beach Access', marina: 'No (10-15 min walk to JBR beach)', jbr: 'Direct beachfront' },
  { metric: 'Studio Price (Avg)', marina: 'AED 700K - 1.1M', jbr: 'AED 900K - 1.3M' },
  { metric: '1BR Price (Avg)', marina: 'AED 1.1M - 1.7M', jbr: 'AED 1.4M - 2M' },
  { metric: '2BR Price (Avg)', marina: 'AED 1.7M - 3M', jbr: 'AED 2M - 3.5M' },
  { metric: 'Gross Rental Yield', marina: '6.5% - 7.5%', jbr: '5.5% - 6.5%' },
  { metric: 'Capital Appreciation (2023-2025)', marina: '25% - 35%', jbr: '20% - 30%' },
  { metric: 'Service Charges (per sq ft)', marina: 'AED 14 - 22', jbr: 'AED 18 - 28' },
  { metric: 'Metro Access', marina: 'DMCC & Dubai Marina stations', jbr: 'Dubai Tram (JBR stops)' },
  { metric: 'Tenant Profile', marina: 'Young professionals, couples', jbr: 'Families, tourists, couples' },
  { metric: 'Short-term Rental Potential', marina: 'High', jbr: 'Very High' },
]

const priceComparison = [
  { type: 'Studio', marinaPrice: 'AED 700K - 1.1M', marinaRent: 'AED 55K - 75K', jbrPrice: 'AED 900K - 1.3M', jbrRent: 'AED 58K - 78K' },
  { type: '1 Bedroom', marinaPrice: 'AED 1.1M - 1.7M', marinaRent: 'AED 80K - 110K', jbrPrice: 'AED 1.4M - 2M', jbrRent: 'AED 85K - 115K' },
  { type: '2 Bedroom', marinaPrice: 'AED 1.7M - 3M', marinaRent: 'AED 120K - 170K', jbrPrice: 'AED 2M - 3.5M', jbrRent: 'AED 130K - 180K' },
  { type: '3 Bedroom', marinaPrice: 'AED 2.8M - 5M', marinaRent: 'AED 170K - 260K', jbrPrice: 'AED 3.2M - 5.5M', jbrRent: 'AED 180K - 280K' },
]

export default function DubaiMarinaVsJBRPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Dubai Marina vs JBR', href: '/guides/dubai-marina-vs-jbr' },
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
          title: 'Dubai Marina vs JBR: Which Is Better for Property?',
          description: 'Head-to-head comparison of Dubai Marina and JBR for property buyers and investors.',
          url: 'https://propertywiki.ai/guides/dubai-marina-vs-jbr',
          datePublished: '2025-10-01',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Dubai Marina vs JBR', url: 'https://propertywiki.ai/guides/dubai-marina-vs-jbr' },
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
            Dubai Marina vs JBR: Which Is Better?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Marina views or beach access? Higher yields or tourist demand? Two of Dubai&apos;s most
            popular waterfront communities go head to head.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Marina vs Beach: The Eternal Debate</h2>
            <p>
              If you&apos;re looking at waterfront property in Dubai, chances are you&apos;ve narrowed
              it down to{' '}
              <Link href="/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">Dubai Marina</Link>{' '}
              or{' '}
              <Link href="/locations/dubai/jbr" className="text-primary-600 hover:underline">JBR</Link>.
              They&apos;re literally next to each other, connected by walkways and the Dubai Tram, but
              the experience of living in each is quite different.
            </p>
            <p>
              Dubai Marina is built around a man-made canal lined with yachts, restaurants, and
              gleaming towers. It&apos;s one of the most densely populated areas in Dubai, buzzing
              with energy at all hours. The Marina Walk is a lifestyle destination in itself, and the
              community has matured into one of the city&apos;s most established neighbourhoods.
            </p>
            <p>
              JBR, on the other hand, is all about the beach. The cluster of 40 residential towers sits
              right on the Arabian Gulf coast, with The Walk &mdash; a 1.7-kilometre outdoor shopping
              and dining promenade &mdash; running along its base. It feels more like a resort than a
              residential community, which is exactly what attracts both residents and tourists.
            </p>
          </section>

          <section id="comparison-table">
            <h2>Side-by-Side Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dubai Marina</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">JBR</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {comparisonData.map((row) => (
                    <tr key={row.metric}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.metric}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.marina}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.jbr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="beach-access">
            <h2>Beach Access & Waterfront Living</h2>
            <p>
              This is the biggest differentiator. JBR offers direct beach access &mdash; step out of
              your building, cross The Walk, and you&apos;re on the sand. The Beach at JBR is a
              well-maintained stretch with sun loungers, water sports, and beachfront dining. For
              many residents, this daily beach proximity is the entire reason they chose JBR.
            </p>
            <p>
              Dubai Marina doesn&apos;t have its own beach. What it has is a stunning marina-front
              promenade with yacht views, and JBR beach is roughly a 10-15 minute walk away. Some
              Marina residents consider this close enough; others find it a dealbreaker. The marina
              itself is beautiful &mdash; watching yachts glide past your window has its own charm
              &mdash; but it&apos;s not the same as hearing waves from your balcony.
            </p>
            <p>
              For water sports enthusiasts, both areas deliver. JBR offers jet skiing, parasailing,
              and paddleboarding right off the beach. Marina has yacht charters, fishing trips, and
              boat tours departing from the docks. It depends on whether your idea of water fun
              involves sand between your toes or a deck beneath your feet.
            </p>
          </section>

          <section id="prices">
            <h2>Property Prices by Unit Type</h2>
            <p>
              JBR generally commands a 15-25% premium over Dubai Marina for comparable units. The
              beachfront premium is real, though Marina offers better value per square foot in many
              cases because of its larger inventory and wider range of developers.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marina Price</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marina Rent/Year</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">JBR Price</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">JBR Rent/Year</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {priceComparison.map((row) => (
                    <tr key={row.type}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.type}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.marinaPrice}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.marinaRent}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.jbrPrice}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.jbrRent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="rental-yields">
            <h2>Rental Yield Comparison</h2>
            <p>
              Dubai Marina edges out JBR on rental yields, primarily because of its lower purchase
              prices relative to achievable rents:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Dubai Marina Yields</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Studios:</strong> 7% - 8% gross</li>
                  <li><strong>1-Bedroom:</strong> 6.5% - 7.5% gross</li>
                  <li><strong>2-Bedroom:</strong> 6% - 7% gross</li>
                  <li><strong>3-Bedroom:</strong> 5.5% - 6.5% gross</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">JBR Yields</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Studios:</strong> 6% - 7% gross</li>
                  <li><strong>1-Bedroom:</strong> 5.5% - 6.5% gross</li>
                  <li><strong>2-Bedroom:</strong> 5% - 6% gross</li>
                  <li><strong>3-Bedroom:</strong> 5% - 5.5% gross</li>
                </ul>
              </div>
            </div>
            <p>
              However, JBR can outperform Marina when it comes to short-term rentals. The beachfront
              location drives strong nightly rates during the winter tourist season (October to April),
              and well-managed Airbnb units in JBR can achieve effective annual yields of 8-10% when
              factoring in seasonal pricing. Check our{' '}
              <Link href="/guides/best-areas-airbnb-dubai" className="text-primary-600 hover:underline">
                Best Areas for Airbnb in Dubai
              </Link>{' '}
              guide for more on this strategy.
            </p>
          </section>

          <section id="lifestyle">
            <h2>Lifestyle & Entertainment</h2>
            <p>
              Dubai Marina is the livelier community overall. The Marina Walk and Marina Mall offer
              year-round dining and shopping, and the sheer density of the area means there&apos;s
              always something happening. Cafes are busy at breakfast, restaurants fill up at dinner,
              and the promenade buzzes with joggers and families throughout the day.
            </p>
            <p>
              JBR&apos;s lifestyle revolves around The Walk and the beach. During winter months
              (October to April), the atmosphere is electric &mdash; outdoor markets, live music,
              street performers, and packed restaurants. Summer is quieter, as the heat pushes
              activities indoors, though The Beach at JBR&apos;s air-conditioned retail area helps.
            </p>
            <p>
              For nightlife, Dubai Marina has a slight edge with a wider variety of bars and lounges.
              JBR has its share too, particularly at the hotel end of The Walk, but Marina&apos;s
              options feel more integrated into the residential fabric rather than hotel-dependent.
            </p>
          </section>

          <section id="family-friendliness">
            <h2>Family-Friendliness</h2>
            <p>
              JBR is the better choice for families, particularly those with younger children. The
              beach provides a natural playground, The Walk is stroller-friendly, and the area has a
              more relaxed, resort-like pace. Ain Dubai (the world&apos;s largest observation wheel)
              on Bluewaters Island is accessible via a pedestrian bridge from JBR, adding another
              family attraction.
            </p>
            <p>
              Dubai Marina is denser and faster-paced, which suits singles and couples more than
              families. That said, several Marina towers have excellent family amenities including
              pools, play areas, and gyms. Schools in the wider area are accessible, though not
              within walking distance of most towers.
            </p>
            <p>
              Both communities are safe and well-managed, with 24-hour security and CCTV coverage
              throughout. The choice for families really comes down to whether beach access or marina
              views are more important to your daily routine.
            </p>
          </section>

          <section id="pros-and-cons">
            <h2>Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Dubai Marina Pros</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10003; Higher long-term rental yields (6.5-7.5%)</li>
                  <li>&#10003; More affordable entry prices</li>
                  <li>&#10003; Excellent metro connectivity (2 stations)</li>
                  <li>&#10003; Vibrant dining and nightlife scene</li>
                  <li>&#10003; Wider property selection</li>
                </ul>
                <h3 className="font-semibold text-gray-900 mb-3 mt-4">Dubai Marina Cons</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10007; No direct beach access</li>
                  <li>&#10007; High density and crowds</li>
                  <li>&#10007; Traffic congestion at peak times</li>
                  <li>&#10007; Variable build quality across towers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">JBR Pros</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10003; Direct beach access</li>
                  <li>&#10003; Strong short-term rental income</li>
                  <li>&#10003; Family-friendly atmosphere</li>
                  <li>&#10003; The Walk outdoor promenade</li>
                  <li>&#10003; Resort-like lifestyle</li>
                </ul>
                <h3 className="font-semibold text-gray-900 mb-3 mt-4">JBR Cons</h3>
                <ul className="text-sm space-y-1">
                  <li>&#10007; Lower long-term rental yields</li>
                  <li>&#10007; Higher purchase prices</li>
                  <li>&#10007; Higher service charges (AED 18-28/sq ft)</li>
                  <li>&#10007; Limited metro access (tram only)</li>
                  <li>&#10007; Seasonal tourist crowds</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="verdict">
            <h2>Which Should You Choose?</h2>
            <p>
              Here&apos;s the simple version:
            </p>
            <ul>
              <li><strong>Choose Dubai Marina if:</strong> You prioritise rental yield, want more affordable
              entry, value metro access, and don&apos;t need beach at your doorstep. It&apos;s the
              better pure investment play.</li>
              <li><strong>Choose JBR if:</strong> Beach access is non-negotiable, you&apos;re targeting
              short-term holiday rentals, you have a family, or you want that resort-style living
              experience. The premium is worth it for the lifestyle.</li>
              <li><strong>Consider both if:</strong> You want to diversify between a yield-focused Marina
              studio and a short-term rental unit in JBR to capture both strategies.</li>
            </ul>
            <p>
              Both communities are mature, well-located, and in high demand. For detailed area profiles,
              visit our{' '}
              <Link href="/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">
                Dubai Marina
              </Link>{' '}
              and{' '}
              <Link href="/locations/dubai/jbr" className="text-primary-600 hover:underline">
                JBR
              </Link>{' '}
              guides. And if you&apos;re looking at luxury waterfront options, don&apos;t miss our{' '}
              <Link href="/guides/palm-jumeirah-vs-emirates-hills" className="text-primary-600 hover:underline">
                Palm Jumeirah vs Emirates Hills
              </Link>{' '}
              comparison.
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
            <Link href="/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Highest Rental Yield Areas in Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
