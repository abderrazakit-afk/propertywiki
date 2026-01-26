import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Dubai Property Market Outlook 2025 - Analysis & Predictions',
  description: 'Comprehensive analysis of Dubai\'s property market for 2025. Explore price trends, investment hotspots, and expert predictions for the UAE real estate market.',
  keywords: ['Dubai property market 2025', 'UAE real estate forecast', 'Dubai property prices', 'property investment Dubai'],
  openGraph: {
    title: 'Dubai Property Market Outlook 2025 - Analysis & Predictions',
    description: 'Comprehensive analysis of Dubai\'s property market for 2025.',
    type: 'article',
    publishedTime: '2025-01-15',
    modifiedTime: '2025-01-15',
  },
}

const tableOfContents = [
  { id: 'market-overview', title: '2024 Market Performance', level: 2 },
  { id: 'price-trends', title: 'Price Trends by Area', level: 2 },
  { id: 'transaction-volume', title: 'Transaction Volume Analysis', level: 2 },
  { id: 'key-drivers', title: 'Key Market Drivers', level: 2 },
  { id: '2025-predictions', title: '2025 Predictions', level: 2 },
  { id: 'investment-hotspots', title: 'Investment Hotspots', level: 2 },
]

const relatedArticles = [
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai as a foreigner.',
  },
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Comprehensive guide to Dubai Marina real estate.',
  },
  {
    title: 'Understanding Off-Plan Investment Risks',
    href: '/blog/off-plan-investment-risks',
    category: 'Blog',
    description: 'A balanced look at off-plan property investment risks and rewards.',
  },
]

export default function DubaiMarketOutlook2025() {
  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: 'Dubai Market Outlook 2025', href: '/blog/dubai-market-outlook-2025' },
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
          title: 'Dubai Property Market Outlook 2025',
          description: 'Comprehensive analysis of Dubai\'s property market for 2025.',
          url: 'https://propertywiki.ai/blog/dubai-market-outlook-2025',
          datePublished: '2025-01-15',
          dateModified: '2025-01-15',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Blog', url: 'https://propertywiki.ai/blog' },
          { name: 'Dubai Market Outlook 2025', url: 'https://propertywiki.ai/blog/dubai-market-outlook-2025' },
        ])}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Market Analysis
            </span>
            <span className="text-gray-400">|</span>
            <time className="text-sm text-gray-500">January 15, 2025</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Dubai Property Market Outlook 2025
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Analysis of Dubai&apos;s property market performance and predictions for the coming year, 
            including key drivers and areas to watch.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/blog/dubai-market-2025.jpg"
            alt="Dubai cityscape with modern skyscrapers representing the dynamic real estate market in 2025"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="market-overview">
            <h2>2024 Market Performance</h2>
            <p>
              Dubai&apos;s property market continued its strong performance in 2024, building on the 
              momentum from previous years. The market recorded a total transaction value exceeding 
              AED 400 billion, marking a 15% increase from 2023. This growth was driven by sustained 
              demand from both local and international buyers seeking <Link href="/definitions/freehold-property">freehold properties</Link> in 
              prime locations.
            </p>
            <p>
              The luxury segment particularly thrived, with villas and penthouses in areas like 
              <Link href="/locations/dubai/palm-jumeirah">Palm Jumeirah</Link> and Emirates Hills 
              setting new price records. The villa market saw the highest appreciation, with average 
              prices increasing by 18% year-over-year.
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">2024 Market Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">AED 400B+</div>
                  <div className="text-sm text-gray-600">Total Transaction Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">+15%</div>
                  <div className="text-sm text-gray-600">YoY Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">+18%</div>
                  <div className="text-sm text-gray-600">Villa Price Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">120,000+</div>
                  <div className="text-sm text-gray-600">Transactions</div>
                </div>
              </div>
            </div>
          </section>

          <section id="price-trends">
            <h2>Price Trends by Area</h2>
            <p>
              Different areas of Dubai showed varying levels of price appreciation in 2024. 
              Prime locations continued to command premium prices, while emerging areas offered 
              better value for investors seeking higher rental yields.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Location</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Avg. Price/sqft (AED)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">YoY Change</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Rental Yield</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      <Link href="/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">Palm Jumeirah</Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">2,800</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+22%</td>
                    <td className="border border-gray-200 px-4 py-3">5.2%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      <Link href="/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">Downtown Dubai</Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">2,400</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+16%</td>
                    <td className="border border-gray-200 px-4 py-3">5.8%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      <Link href="/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">Dubai Marina</Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">1,850</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+14%</td>
                    <td className="border border-gray-200 px-4 py-3">6.5%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Business Bay</td>
                    <td className="border border-gray-200 px-4 py-3">1,600</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+12%</td>
                    <td className="border border-gray-200 px-4 py-3">7.0%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Jumeirah Village Circle</td>
                    <td className="border border-gray-200 px-4 py-3">950</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+10%</td>
                    <td className="border border-gray-200 px-4 py-3">7.5%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Dubai Hills Estate</td>
                    <td className="border border-gray-200 px-4 py-3">1,450</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">+18%</td>
                    <td className="border border-gray-200 px-4 py-3">5.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Palm Jumeirah led the price appreciation at 22%, driven by limited supply and 
              continued demand for waterfront living. <Link href="/locations/dubai/dubai-marina">Dubai Marina</Link> 
              maintained its position as the most popular area for expatriate renters, offering 
              attractive yields of 6.5%.
            </p>
          </section>

          <section id="transaction-volume">
            <h2>Transaction Volume Analysis</h2>
            <p>
              Transaction volumes in 2024 showed interesting patterns, with <Link href="/definitions/off-plan-property">off-plan sales</Link> 
              comprising approximately 55% of all residential transactions. Ready properties 
              continued to attract end-users and investors seeking immediate rental income.
            </p>

            <div className="my-8 p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Transaction Volume 2024</h3>
              <div className="flex items-end justify-between h-48 gap-1">
                {[
                  { month: 'Jan', value: 75 },
                  { month: 'Feb', value: 82 },
                  { month: 'Mar', value: 90 },
                  { month: 'Apr', value: 85 },
                  { month: 'May', value: 78 },
                  { month: 'Jun', value: 70 },
                  { month: 'Jul', value: 65 },
                  { month: 'Aug', value: 72 },
                  { month: 'Sep', value: 88 },
                  { month: 'Oct', value: 95 },
                  { month: 'Nov', value: 100 },
                  { month: 'Dec', value: 92 },
                ].map((item) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-primary-500 rounded-t transition-all hover:bg-primary-600"
                      style={{ height: `${item.value}%` }}
                    />
                    <span className="text-xs text-gray-600 mt-2">{item.month}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Transaction volume indexed to peak month (November = 100)
              </p>
            </div>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Off-Plan vs Ready Properties</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Off-Plan</span>
                      <span className="font-medium">55%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-primary-500 rounded-full" style={{ width: '55%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ready</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-primary-400 rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Buyer Nationality Mix</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>International</span>
                      <span className="font-medium">62%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-primary-500 rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>GCC Nationals</span>
                      <span className="font-medium">23%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-primary-400 rounded-full" style={{ width: '23%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>UAE Nationals</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-primary-300 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="key-drivers">
            <h2>Key Market Drivers</h2>
            <p>
              Several factors contributed to the sustained growth in Dubai&apos;s property market:
            </p>
            <ul>
              <li>
                <strong>Population Growth:</strong> Dubai&apos;s population grew by 3.5% in 2024, 
                creating organic demand for housing. The city&apos;s appeal as a global business 
                hub continues to attract professionals and entrepreneurs.
              </li>
              <li>
                <strong>Golden Visa Program:</strong> The expanded Golden Visa program for property 
                investors (AED 2 million threshold) drove significant international investment. 
                See our <Link href="/blog/golden-visa-changes-2025">Golden Visa guide</Link> for details.
              </li>
              <li>
                <strong>Tax Benefits:</strong> Zero income tax, no capital gains tax, and no property 
                tax continue to attract global investors seeking tax-efficient jurisdictions.
              </li>
              <li>
                <strong>Infrastructure Development:</strong> Continued investment in metro expansion, 
                new beaches, and entertainment districts enhanced property values in surrounding areas.
              </li>
              <li>
                <strong>Tourism Recovery:</strong> Record tourist arrivals of over 18 million visitors 
                supported short-term rental demand and holiday home purchases.
              </li>
            </ul>
          </section>

          <section id="2025-predictions">
            <h2>2025 Predictions</h2>
            <p>
              Based on current market indicators and economic forecasts, we expect the following 
              trends in 2025:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Metric</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">2024 Actual</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">2025 Forecast</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Average Price Growth</td>
                    <td className="border border-gray-200 px-4 py-3">+15%</td>
                    <td className="border border-gray-200 px-4 py-3">+8-12%</td>
                    <td className="border border-gray-200 px-4 py-3">High</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Villa Segment Growth</td>
                    <td className="border border-gray-200 px-4 py-3">+18%</td>
                    <td className="border border-gray-200 px-4 py-3">+10-15%</td>
                    <td className="border border-gray-200 px-4 py-3">High</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Apartment Segment Growth</td>
                    <td className="border border-gray-200 px-4 py-3">+12%</td>
                    <td className="border border-gray-200 px-4 py-3">+6-8%</td>
                    <td className="border border-gray-200 px-4 py-3">Medium</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Transaction Volume</td>
                    <td className="border border-gray-200 px-4 py-3">120,000</td>
                    <td className="border border-gray-200 px-4 py-3">125,000-135,000</td>
                    <td className="border border-gray-200 px-4 py-3">Medium</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Average Rental Yield</td>
                    <td className="border border-gray-200 px-4 py-3">6.2%</td>
                    <td className="border border-gray-200 px-4 py-3">5.8-6.0%</td>
                    <td className="border border-gray-200 px-4 py-3">High</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              We anticipate a more moderate pace of price growth compared to 2024, as the market 
              transitions from a rapid recovery phase to sustainable growth. The villa segment will 
              likely continue to outperform apartments due to persistent supply constraints in 
              established communities.
            </p>
          </section>

          <section id="investment-hotspots">
            <h2>Investment Hotspots for 2025</h2>
            <p>
              Based on our analysis, these areas offer the best investment potential in 2025:
            </p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="luxury-card p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Dubai Creek Harbour</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Emerging waterfront community with significant infrastructure investment 
                  and upcoming Dubai Creek Tower.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expected Growth</span>
                  <span className="font-medium text-green-600">+12-18%</span>
                </div>
              </div>
              <div className="luxury-card p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Dubai South</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Strategic location near Al Maktoum Airport and Expo City with 
                  attractive entry prices.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expected Growth</span>
                  <span className="font-medium text-green-600">+10-14%</span>
                </div>
              </div>
              <div className="luxury-card p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link href="/locations/dubai/dubai-marina">Dubai Marina</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Established community with strong rental demand and limited 
                  new supply maintaining value.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expected Growth</span>
                  <span className="font-medium text-green-600">+8-12%</span>
                </div>
              </div>
              <div className="luxury-card p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Mohammed Bin Rashid City</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Family-friendly community with excellent amenities and growing 
                  demand for villas.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expected Growth</span>
                  <span className="font-medium text-green-600">+10-15%</span>
                </div>
              </div>
            </div>

            <p>
              For detailed guidance on purchasing property in Dubai, refer to our comprehensive 
              <Link href="/guides/how-to-buy-property-in-dubai">buying guide</Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 italic">
            Disclaimer: This analysis is based on publicly available data and our market research. 
            Property investments carry risks, and past performance does not guarantee future results. 
            Always conduct your own due diligence and consult with qualified professionals before 
            making investment decisions.
          </p>
        </div>

        <AuthorBox author={author} datePublished="2025-01-15" dateModified="2025-01-15" />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
