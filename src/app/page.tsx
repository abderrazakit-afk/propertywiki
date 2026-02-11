import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { generateOrganizationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'PropertyWiki - Dubai Real Estate Knowledge Hub',
  description: 'Your complete guide to Dubai real estate. Expert insights on buying, selling, and renting property in Dubai and UAE.',
  alternates: {
    canonical: 'https://propertywiki.ai',
    languages: {
      'en': 'https://propertywiki.ai',
      'ar': 'https://propertywiki.ai/ar',
      'x-default': 'https://propertywiki.ai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai',
    title: 'PropertyWiki - Dubai Real Estate Knowledge Hub',
    description: 'Your complete guide to Dubai real estate. Expert insights on buying, selling, and renting property.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PropertyWiki',
  },
}

const categories = [
  {
    title: 'Property Definitions',
    description: 'Clear explanations of real estate terminology and concepts',
    href: '/definitions',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    articles: [
      { title: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah' },
      { title: 'Dubai Marina', href: '/locations/dubai/dubai-marina' },
      { title: 'Business Bay', href: '/locations/dubai/business-bay' },
      { title: 'JBR Beach Residence', href: '/locations/dubai/jbr' },
      { title: 'Arabian Ranches', href: '/locations/dubai/arabian-ranches' },
    ],
  },
  {
    title: 'Homeowner Guides',
    description: 'Essential guides for living in Dubai properties',
    href: '/guides',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    articles: [
      { title: 'How to Buy Property in Dubai', href: '/guides/how-to-buy-property-in-dubai' },
      { title: 'DEWA Electricity & Water Setup', href: '/guides/dewa-electricity-water-guide' },
      { title: 'AC Maintenance Guide', href: '/guides/ac-maintenance-dubai' },
      { title: 'Home Cleaning Services', href: '/guides/home-cleaning-services-dubai' },
      { title: 'Building Facilities & Amenities', href: '/guides/building-facilities-amenities-dubai' },
    ],
  },
  {
    title: 'Investment Insights',
    description: 'Strategic advice for property investment decisions',
    href: '/investing',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    articles: [
      { title: 'Top 10 Investment Areas 2026', href: '/investing/top-10-investment-areas-dubai' },
      { title: 'Highest Rental Yield Areas', href: '/guides/highest-rental-yield-areas-dubai' },
      { title: 'Investment Scorecard 2026', href: '/investing/dubai-investment-scorecard-2026' },
    ],
  },
  {
    title: 'Buyer Guides',
    description: 'Budget areas, first-time buyer tips, and cost breakdowns',
    href: '/guides',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    articles: [
      { title: 'Best Areas Under 500K AED', href: '/guides/best-areas-buy-property-under-500k' },
      { title: 'First-Time Buyer Guide', href: '/guides/best-areas-first-time-buyers-dubai' },
      { title: 'Hidden Costs of Buying', href: '/guides/hidden-costs-buying-property-dubai' },
      { title: 'DLD Fees Calculator', href: '/guides/dld-fees-calculator-guide' },
    ],
  },
  {
    title: 'Lifestyle & Comparisons',
    description: 'Area comparisons, family guides, and Airbnb insights',
    href: '/guides',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    articles: [
      { title: 'Best Areas for Families', href: '/guides/best-areas-families-dubai' },
      { title: 'Best Areas for Airbnb', href: '/guides/best-areas-airbnb-dubai' },
      { title: 'Marina vs JBR', href: '/guides/dubai-marina-vs-jbr' },
      { title: 'Areas Near Metro', href: '/guides/best-areas-near-dubai-metro' },
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
    featured: true,
  },
  {
    title: 'Dubai Marina: A Comprehensive Property Analysis',
    description: 'An in-depth look at one of Dubai\'s most sought-after waterfront communities, including property prices, amenities, and investment potential.',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    readTime: '12 min read',
    featured: false,
  },
  {
    title: 'Understanding Freehold vs Leasehold Property Rights',
    description: 'A clear explanation of the differences between freehold and leasehold property ownership, and what they mean for buyers and investors.',
    href: '/definitions/freehold-property',
    category: 'Definition',
    readTime: '8 min read',
    featured: false,
  },
  {
    title: 'Top 10 Investment Areas in Dubai — Ranked by ROI',
    description: 'Our data-driven ranking of the best investment areas in Dubai for 2026, scored by rental yield, capital growth, and demand.',
    href: '/investing/top-10-investment-areas-dubai',
    category: 'Investment',
    readTime: '14 min read',
    featured: false,
  },
  {
    title: 'Service Charges by Area in Dubai — Full Comparison',
    description: 'Compare annual service charges across every major Dubai community. Find out which areas offer the best value.',
    href: '/guides/service-charges-by-area-dubai',
    category: 'Costs',
    readTime: '10 min read',
    featured: false,
  },
  {
    title: 'Best Areas for Airbnb in Dubai 2026',
    description: 'Discover which Dubai neighborhoods deliver the highest short-term rental returns and how to get started.',
    href: '/guides/best-areas-airbnb-dubai',
    category: 'Airbnb',
    readTime: '12 min read',
    featured: false,
  },
]

const stats = [
  { number: '500+', label: 'Expert Articles', description: 'Comprehensive guides and insights' },
  { number: '50+', label: 'Locations Covered', description: 'From Dubai to Abu Dhabi' },
  { number: '100+', label: 'Definitions', description: 'Clear terminology explanations' },
  { number: '10K+', label: 'Monthly Readers', description: 'Trusted by investors worldwide' },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      
      <section className="bg-warm-gradient py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-50/50 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Trusted by 10,000+ property investors
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight mb-6 text-balance">
              Your Complete Real Estate Knowledge Hub
            </h1>
            <p className="text-lg md:text-xl text-warm-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Expert-curated guides, market insights, and comprehensive property knowledge 
              to help you make confident real estate decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/find-home" className="luxury-button">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Find Your Perfect Home
              </Link>
              <Link href="/definitions" className="text-link inline-flex items-center">
                Or explore property definitions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-warm-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Explore Knowledge Categories</h2>
            <p className="section-subtitle">Comprehensive resources organized for easy discovery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.title} 
                className={`luxury-card p-8 lg:p-10 group hover:-translate-y-1 transition-all duration-300 ${index === 0 ? 'md:row-span-2 luxury-card-featured' : ''}`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl flex items-center justify-center text-accent-600 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold text-gray-900 mb-1">
                      <Link href={category.href} className="hover:text-accent-600 transition-colors">
                        {category.title}
                      </Link>
                    </h3>
                    <p className="text-warm-500 text-sm">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {category.articles.map((article) => (
                    <li key={article.href}>
                      <Link
                        href={article.href}
                        className="flex items-center text-warm-700 hover:text-accent-600 transition-colors group/link"
                      >
                        <svg className="w-4 h-4 mr-3 text-accent-400 group-hover/link:text-accent-500 group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-body">{article.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.href}
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors group/link"
                >
                  View all {category.title.toLowerCase()}
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle">Essential reads selected by our editorial team</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredArticles.map((article, index) => (
              <Link
                key={article.href}
                href={article.href}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                  index === 0 
                    ? 'lg:col-span-2 lg:row-span-2 luxury-card-featured hover:-translate-y-1' 
                    : 'luxury-card hover:-translate-y-1 hover:shadow-card-hover'
                }`}
              >
                <div className={`p-8 ${index === 0 ? 'lg:p-10' : ''} h-full flex flex-col`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="category-tag">
                      {article.category}
                    </span>
                    <span className="metadata">{article.readTime}</span>
                  </div>
                  <h3 className={`font-serif font-semibold text-gray-900 group-hover:text-accent-600 transition-colors mb-4 ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {article.title}
                  </h3>
                  <p className={`text-warm-600 leading-relaxed flex-grow ${index === 0 ? 'text-body-lg' : ''}`}>
                    {article.description}
                  </p>
                  <div className="mt-6 flex items-center text-accent-600 font-medium group-hover:text-accent-700">
                    Read article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-10 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-500/20 via-transparent to-transparent" />
            
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-100 text-sm font-medium mb-6 backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Trusted by professionals
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-5">
                Expert Knowledge at Your Fingertips
              </h2>
              <p className="text-lg text-primary-100 mb-10 leading-relaxed">
                PropertyWiki is curated by real estate professionals with decades of combined experience. 
                Our content is regularly updated to reflect current market conditions and regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/guides" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Exploring
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
