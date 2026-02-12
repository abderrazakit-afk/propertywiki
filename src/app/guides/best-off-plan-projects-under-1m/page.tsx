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
  title: 'Best Off-Plan Projects Under 1M AED Dubai',
  description: 'Discover the best off-plan projects in Dubai under 1 million AED. Compare payment plans, locations, and expected completion dates in JVC, Arjan, and more.',
  keywords: ['off-plan Dubai under 1M', 'affordable off-plan Dubai', 'JVC off-plan', 'Dubai South projects', 'cheap off-plan Dubai'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m',
    languages: {
      'en': 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m',
      'ar': 'https://propertywiki.ai/ar/guides/best-off-plan-projects-under-1m',
      'x-default': 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m',
    title: 'Best Off-Plan Projects Under 1M AED Dubai',
    description: 'Discover the best off-plan projects in Dubai under 1 million AED with flexible payment plans.',
    type: 'article',
    publishedTime: '2025-08-01',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'why-under-1m', title: 'Why Off-Plan Under 1M AED?', level: 2 },
  { id: 'jvc-projects', title: 'Jumeirah Village Circle (JVC)', level: 2 },
  { id: 'dubailand-projects', title: 'Dubailand & Arjan', level: 2 },
  { id: 'dubai-south-projects', title: 'Dubai South', level: 2 },
  { id: 'mbr-city-projects', title: 'MBR City', level: 2 },
  { id: 'payment-plans', title: 'Payment Plan Comparison', level: 2 },
  { id: 'how-to-choose', title: 'How to Choose the Right Project', level: 2 },
]

const faqs = [
  {
    question: 'What is the cheapest off-plan property in Dubai?',
    answer: 'Studios in areas like Dubai South and Dubailand start from around AED 350,000-400,000 off-plan. JVC studios typically begin at AED 450,000-550,000. These come with flexible payment plans, making the initial outlay even more accessible.',
  },
  {
    question: 'Are off-plan projects under 1M AED a good investment?',
    answer: 'Yes, they can be excellent investments. Areas like JVC and Arjan consistently deliver rental yields of 7-9%, well above Dubai averages. The key is choosing projects from reputable developers with strong track records of on-time delivery.',
  },
  {
    question: 'What payment plan can I expect for off-plan under 1M?',
    answer: 'Most developers offer 60/40 or 70/30 payment plans for projects in this price range. Some offer post-handover plans where you pay 50-60% during construction and the rest over 2-3 years after handover. A few developers even offer 1% monthly plans.',
  },
  {
    question: 'When will most off-plan projects under 1M be completed?',
    answer: 'Projects currently selling off-plan in this price range have expected completion dates between Q4 2026 and Q2 2028. Always verify the developer\'s track record for on-time delivery before committing.',
  },
  {
    question: 'Do I need a mortgage for off-plan under 1M AED?',
    answer: 'Not necessarily. Developer payment plans spread the cost over the construction period, often 2-4 years. For example, a AED 800,000 apartment on a 60/40 plan means paying AED 480,000 in instalments during construction and AED 320,000 at handover.',
  },
]

const relatedArticles = [
  {
    title: 'Off-Plan vs Ready Property: ROI Comparison',
    href: '/guides/off-plan-vs-ready-property-roi',
    category: 'Guide',
    description: 'Compare the returns, risks, and timelines of off-plan versus ready property investments.',
  },
  {
    title: 'What is Off-Plan Property?',
    href: '/definitions/off-plan-property',
    category: 'Definition',
    description: 'Understanding off-plan property purchases and what they mean for buyers.',
  },
  {
    title: 'Best Areas Under 1M with Good ROI',
    href: '/guides/best-areas-under-1m-good-roi',
    category: 'Guide',
    description: 'Top Dubai areas delivering strong returns for properties under AED 1 million.',
  },
  {
    title: '1% Payment Plan Projects in Dubai',
    href: '/guides/1-percent-payment-plan-dubai',
    category: 'Guide',
    description: 'Projects offering the popular 1% monthly payment plan structure.',
  },
  {
    title: 'Off-Plan Investment Risks',
    href: '/blog/off-plan-investment-risks',
    category: 'Blog',
    description: 'Understanding and mitigating the risks of off-plan property investment.',
  },
]

export default function BestOffPlanUnder1MPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Best Off-Plan Projects Under 1M AED', href: '/guides/best-off-plan-projects-under-1m' },
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
          title: 'Best Off-Plan Projects Under 1M AED in Dubai',
          description: 'Discover the best off-plan projects in Dubai under 1 million AED with flexible payment plans.',
          url: 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m',
          datePublished: '2025-08-01',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Best Off-Plan Projects Under 1M AED', url: 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Off-Plan Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Best Off-Plan Projects Under 1M AED in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You don&apos;t need millions to get into Dubai&apos;s off-plan market. Here are the best projects
            under AED 1 million with flexible payment plans, strong rental potential, and solid developers behind them.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="why-under-1m">
            <h2>Why Off-Plan Under 1M AED?</h2>
            <p>
              Dubai&apos;s off-plan market has exploded in recent years, but the sweet spot for most investors
              sits below AED 1 million. At this price point, you get access to newer communities with modern
              amenities, developer payment plans that spread your costs over 2-4 years, and rental yields
              that often outperform premium areas.
            </p>
            <p>
              The math is compelling. A studio or one-bedroom in JVC purchased off-plan at AED 600,000-800,000
              can generate rental yields of 7-9% once completed. Compare that to a similar ready property
              in Downtown Dubai at AED 1.5 million yielding 5-6%, and the value proposition becomes clear.
            </p>
            <ul>
              <li><strong>Lower entry point:</strong> Payment plans mean you can start with as little as 10-20% down</li>
              <li><strong>Capital appreciation:</strong> Off-plan prices typically rise 10-20% between launch and handover</li>
              <li><strong>Higher yields:</strong> Emerging areas deliver stronger rental returns than established zones</li>
              <li><strong>Modern specifications:</strong> New builds come with the latest finishes and smart home features</li>
              <li><strong>Developer warranties:</strong> Structural warranties of 10 years are standard on new builds</li>
            </ul>
          </section>

          <section id="jvc-projects">
            <h2>Jumeirah Village Circle (JVC)</h2>
            <p>
              JVC remains one of the most popular areas for affordable off-plan purchases, and for good reason.
              It&apos;s centrally located between Al Khail Road and Sheikh Mohammed Bin Zayed Road, making
              commutes to Downtown, Marina, and Business Bay surprisingly manageable. The community has matured
              significantly with retail outlets, schools, and parks now operational.
            </p>
            <h3>What&apos;s Available Under 1M</h3>
            <p>
              Studios in JVC start from around AED 450,000 off-plan, while one-bedroom apartments range
              between AED 650,000-950,000. Two-bedroom options occasionally dip below AED 1 million
              in certain projects, though they&apos;re becoming rarer as the area appreciates.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-gray-900 mb-3">JVC Off-Plan Snapshot</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Average studio price:</strong> AED 450,000 - 600,000</li>
                <li><strong>Average 1-bed price:</strong> AED 650,000 - 950,000</li>
                <li><strong>Expected rental yield:</strong> 7.5% - 9%</li>
                <li><strong>Key developers:</strong> Binghatti, Ellington, Sobha, Danube</li>
                <li><strong>Completion timeline:</strong> Q2 2027 - Q4 2028</li>
              </ul>
            </div>
            <p>
              The standout feature of JVC is its rental demand. With a mix of young professionals and
              small families, occupancy rates consistently hover above 90%. The area&apos;s affordability
              compared to neighbouring communities like Dubai Hills means tenants keep coming.
            </p>
          </section>

          <section id="dubailand-projects">
            <h2>Dubailand &amp; Arjan</h2>
            <p>
              Dubailand is a sprawling master development that encompasses several sub-communities, each
              with its own character. Arjan, one of the most active off-plan zones within Dubailand, has
              become a go-to for budget-conscious investors seeking brand-new apartments with genuine
              amenity packages.
            </p>
            <h3>Arjan Highlights</h3>
            <p>
              Arjan sits along Al Barsha South, close to Miracle Garden and Butterfly Garden, which gives
              it a unique appeal for tourists and residents alike. Studios here start from AED 380,000
              off-plan, making it one of the most affordable freehold areas in Dubai.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-gray-900 mb-3">Arjan Off-Plan Snapshot</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Average studio price:</strong> AED 380,000 - 550,000</li>
                <li><strong>Average 1-bed price:</strong> AED 550,000 - 800,000</li>
                <li><strong>Expected rental yield:</strong> 8% - 10%</li>
                <li><strong>Key developers:</strong> Binghatti, Danube, Samana, Vincitore</li>
                <li><strong>Completion timeline:</strong> Q1 2027 - Q3 2028</li>
              </ul>
            </div>
            <p>
              A word of caution though — Arjan has a lot of supply hitting the market simultaneously.
              While this keeps prices accessible, it means you need to pick projects carefully. Focus on
              developers with completed projects nearby and verify that amenities like pools, gyms, and
              parking are genuinely included, not just marketing promises.
            </p>
          </section>

          <section id="dubai-south-projects">
            <h2>Dubai South</h2>
            <p>
              Dubai South is the long-term play. Anchored by Al Maktoum International Airport and the Expo
              City district, this area is positioned for significant growth over the next decade. It&apos;s
              where Dubai&apos;s aviation expansion and the ongoing Expo legacy development converge, and
              the government has earmarked it as a key urban centre.
            </p>
            <p>
              Right now, prices here are the lowest among Dubai&apos;s freehold zones. Studios start
              from as little as AED 350,000, and one-bedrooms can be found under AED 600,000. The
              trade-off? Infrastructure is still developing, and rental demand hasn&apos;t fully caught
              up to supply yet.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-gray-900 mb-3">Dubai South Off-Plan Snapshot</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Average studio price:</strong> AED 350,000 - 500,000</li>
                <li><strong>Average 1-bed price:</strong> AED 500,000 - 750,000</li>
                <li><strong>Expected rental yield:</strong> 6.5% - 8% (projected)</li>
                <li><strong>Key developers:</strong> Emaar, Damac, Azizi, MAG</li>
                <li><strong>Completion timeline:</strong> Q3 2027 - Q2 2029</li>
              </ul>
            </div>
            <p>
              If you&apos;re buying in Dubai South, you&apos;re betting on infrastructure growth. The Route 2020
              Metro extension already connects the area, and the airport expansion will bring jobs and residents.
              This is a 5-7 year hold strategy, not a quick flip.
            </p>
          </section>

          <section id="mbr-city-projects">
            <h2>MBR City</h2>
            <p>
              Mohammed Bin Rashid City sits in a prime location between Downtown Dubai and Meydan, which
              immediately sets it apart from other affordable off-plan areas. While many MBR City projects
              exceed AED 1 million, there are still pockets — particularly in District 7 and District 11 —
              where studios and compact one-bedrooms fall within budget.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-gray-900 mb-3">MBR City Off-Plan Snapshot</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Average studio price:</strong> AED 550,000 - 750,000</li>
                <li><strong>Average 1-bed price:</strong> AED 750,000 - 1,000,000</li>
                <li><strong>Expected rental yield:</strong> 6.5% - 8%</li>
                <li><strong>Key developers:</strong> Sobha, Binghatti, Ellington</li>
                <li><strong>Completion timeline:</strong> Q4 2026 - Q4 2028</li>
              </ul>
            </div>
            <p>
              MBR City&apos;s advantage is location. You&apos;re close enough to Downtown and Business Bay
              that tenants working in these areas will consider MBR City for its relatively lower rents.
              The Crystal Lagoon and surrounding green spaces add lifestyle appeal that translates directly
              into rental demand.
            </p>
          </section>

          <section id="payment-plans">
            <h2>Payment Plan Comparison</h2>
            <p>
              One of the biggest advantages of buying off-plan under 1M is the payment plan flexibility.
              Here&apos;s what the major developers typically offer in this segment:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Developer</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Down Payment</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">During Construction</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">On Handover</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Post-Handover</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Danube</td>
                    <td className="px-4 py-3 text-sm text-gray-500">10%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">1% monthly</td>
                    <td className="px-4 py-3 text-sm text-gray-500">—</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Continues post-handover</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Binghatti</td>
                    <td className="px-4 py-3 text-sm text-gray-500">10-20%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">40-50%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">30-40%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Select projects only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Samana</td>
                    <td className="px-4 py-3 text-sm text-gray-500">10%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">50%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">10%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">30% over 30 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Sobha</td>
                    <td className="px-4 py-3 text-sm text-gray-500">20%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">50%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">30%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">—</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Azizi</td>
                    <td className="px-4 py-3 text-sm text-gray-500">10%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">50%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">40%</td>
                    <td className="px-4 py-3 text-sm text-gray-500">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="how-to-choose">
            <h2>How to Choose the Right Project</h2>
            <p>
              Not every off-plan project under 1M is worth your money. Here&apos;s what to look for
              before signing anything:
            </p>
            <ul>
              <li><strong>Developer track record:</strong> Check how many projects they&apos;ve delivered on time. RERA registration is mandatory — verify it</li>
              <li><strong>Location fundamentals:</strong> Proximity to metro, schools, supermarkets, and major roads matters more than fancy renders</li>
              <li><strong>Escrow account:</strong> Your payments should go into a <Link href="/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">RERA-regulated escrow account</Link>, not directly to the developer</li>
              <li><strong>Community maturity:</strong> Areas with existing residents and operational amenities carry less risk than brand-new master plans</li>
              <li><strong>Service charge estimates:</strong> Ask for projected service charges — they can significantly impact your net yield</li>
              <li><strong>Exit strategy:</strong> Consider whether you can resell before handover if needed, and whether the developer allows assignment</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-08-01"
          dateModified="2026-02-05"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Business Bay Property Guide</p>
            </Link>
            <Link href="/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What Is Off-Plan Property?</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What Is Freehold Property?</p>
            </Link>
            <Link href="/guides/off-plan-vs-ready-property-roi" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Off-Plan vs Ready Property ROI</p>
            </Link>
            <Link href="/guides/safest-off-plan-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Safest Off-Plan Areas in Dubai</p>
            </Link>
            <Link href="/guides/1-percent-payment-plan-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">1% Payment Plan Projects Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}