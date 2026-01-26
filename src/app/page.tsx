import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { generateOrganizationSchema } from '@/lib/seo'

const categories = [
  {
    title: 'Property Definitions',
    description: 'Clear explanations of real estate terminology and concepts',
    href: '/definitions',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    articles: [
      { title: 'What is Freehold Property?', href: '/definitions/freehold-property' },
      { title: 'Understanding Leasehold', href: '/definitions/leasehold' },
      { title: 'Off-Plan Property Explained', href: '/definitions/off-plan-property' },
    ],
  },
  {
    title: 'Location Guides',
    description: 'In-depth analysis of property markets and neighborhoods',
    href: '/locations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    articles: [
      { title: 'Dubai Real Estate Overview', href: '/locations/dubai' },
      { title: 'Dubai Marina Property Guide', href: '/locations/dubai/dubai-marina' },
      { title: 'Downtown Dubai Analysis', href: '/locations/dubai/downtown-dubai' },
    ],
  },
  {
    title: 'Buying Guides',
    description: 'Step-by-step guides for property purchase decisions',
    href: '/guides',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    articles: [
      { title: 'How to Buy Property in Dubai', href: '/guides/how-to-buy-property-in-dubai' },
      { title: 'First-Time Buyer\'s Checklist', href: '/guides/first-time-buyer-checklist' },
      { title: 'Property Inspection Guide', href: '/guides/property-inspection-guide' },
    ],
  },
  {
    title: 'Investment Insights',
    description: 'Strategic advice for property investment decisions',
    href: '/investing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    articles: [
      { title: 'Rental Yield Explained', href: '/investing/rental-yield-explained' },
      { title: 'Capital Appreciation Guide', href: '/investing/capital-appreciation' },
      { title: 'Diversifying Property Portfolio', href: '/investing/portfolio-diversification' },
    ],
  },
]

const featuredArticles = [
  {
    title: 'The Complete Guide to Buying Property in Dubai as a Foreigner',
    description: 'Everything you need to know about foreign property ownership in Dubai, including visa requirements, freehold zones, and legal considerations.',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    readTime: '15 min read',
  },
  {
    title: 'Dubai Marina: A Comprehensive Property Analysis',
    description: 'An in-depth look at one of Dubai\'s most sought-after waterfront communities, including property prices, amenities, and investment potential.',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    readTime: '12 min read',
  },
  {
    title: 'Understanding Freehold vs Leasehold Property Rights',
    description: 'A clear explanation of the differences between freehold and leasehold property ownership, and what they mean for buyers and investors.',
    href: '/definitions/freehold-property',
    category: 'Definition',
    readTime: '8 min read',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight mb-6">
              Your Complete Real Estate Knowledge Hub
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              PropertyWiki provides comprehensive, unbiased information about real estate markets, 
              property types, and investment strategies. Expert-curated content to help you make 
              informed property decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides"
                className="luxury-button"
              >
                Explore Guides
              </Link>
              <Link
                href="/definitions"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Browse Definitions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Knowledge Categories</h2>
            <p className="section-subtitle">Comprehensive resources organized for easy discovery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="luxury-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900">
                      <Link href={category.href} className="hover:text-primary-600 transition-colors">
                        {category.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article) => (
                    <li key={article.href}>
                      <Link
                        href={article.href}
                        className="flex items-center text-gray-700 hover:text-primary-600 transition-colors group"
                      >
                        <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.href}
                  className="inline-flex items-center text-primary-600 font-medium mt-6 hover:text-primary-700 transition-colors"
                >
                  View all {category.title.toLowerCase()}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle">Essential reads selected by our editorial team</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block text-xs font-semibold text-primary-600 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">
              Expert Knowledge at Your Fingertips
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              PropertyWiki is curated by real estate professionals with decades of combined experience. 
              Our content is regularly updated to reflect current market conditions and regulations.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="text-primary-200 text-sm">Articles</div>
              </div>
              <div>
                <div className="text-4xl font-bold">50+</div>
                <div className="text-primary-200 text-sm">Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold">100+</div>
                <div className="text-primary-200 text-sm">Definitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
