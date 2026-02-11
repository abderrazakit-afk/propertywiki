import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Guides - Buy, Sell & Rent Dubai',
  description: 'Guides to buying, selling, and renting property in Dubai and UAE.',
  alternates: {
    canonical: 'https://propertywiki.ai/guides',
    languages: {
      'en': 'https://propertywiki.ai/guides',
      'ar': 'https://propertywiki.ai/ar/guides',
      'x-default': 'https://propertywiki.ai/guides',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides',
    title: 'Property Guides - Buy, Sell & Rent Dubai',
    description: 'Guides to buying, selling, and renting property in Dubai and UAE.',
  },
}

const guides = [
  {
    title: 'How to Buy Property in the UAE',
    slug: 'how-to-buy-property-in-uae',
    description: 'Comprehensive guide to buying property across all UAE emirates. Learn about ownership laws, procedures, costs, and residency visas.',
    readTime: '18 min read',
    category: 'Buying',
    featured: true,
  },
  {
    title: 'How to Buy Property in Dubai',
    slug: 'how-to-buy-property-in-dubai',
    description: 'Complete step-by-step guide to purchasing property in Dubai as a foreigner, including visa requirements, freehold zones, and legal processes.',
    readTime: '15 min read',
    category: 'Buying',
  },
  {
    title: 'How to Sell Property in the UAE',
    slug: 'how-to-sell-property-in-uae',
    description: 'Complete seller\'s guide covering documentation, NOC process, DLD transfer, pricing strategy, and timeline for selling property in the UAE.',
    readTime: '14 min read',
    category: 'Selling',
    featured: true,
  },
  {
    title: 'How to Rent Property in the UAE',
    slug: 'how-to-rent-property-in-uae',
    description: 'Everything you need to know about renting in the UAE: Ejari registration, tenancy contracts, tenant rights, costs, and utilities setup.',
    readTime: '16 min read',
    category: 'Renting',
    featured: true,
  },
  {
    title: 'DEWA Electricity & Water Guide',
    slug: 'dewa-electricity-water-guide',
    description: 'Complete guide to setting up DEWA services in Dubai. Learn about registration, deposits, documents required, and bill payment options.',
    readTime: '10 min read',
    category: 'Homeowner',
  },
  {
    title: 'AC Maintenance in Dubai',
    slug: 'ac-maintenance-dubai',
    description: 'Essential guide to AC maintenance in Dubai. Types of systems, maintenance tips, finding technicians, and reducing energy bills.',
    readTime: '12 min read',
    category: 'Homeowner',
  },
  {
    title: 'Home Cleaning Services in Dubai',
    slug: 'home-cleaning-services-dubai',
    description: 'Complete guide to finding cleaning services in Dubai. Popular companies, pricing, hiring maids, and legal requirements.',
    readTime: '10 min read',
    category: 'Homeowner',
  },
  {
    title: 'Building Facilities & Amenities',
    slug: 'building-facilities-amenities-dubai',
    description: 'Understanding building amenities in Dubai. Service charges, gym & pool access, parking, security, and community rules.',
    readTime: '11 min read',
    category: 'Homeowner',
  },
  {
    title: 'Highest Rental Yield Areas in Dubai',
    slug: 'highest-rental-yield-areas-dubai',
    description: 'Discover the areas in Dubai offering the highest rental yields. Data-driven analysis of ROI by community for property investors.',
    readTime: '12 min read',
    category: 'Investment',
  },
  {
    title: 'Best Areas for 8%+ ROI in Dubai',
    slug: 'best-areas-8-percent-roi-dubai',
    description: 'Find Dubai communities consistently delivering 8% or higher rental returns. Detailed breakdown by property type and area.',
    readTime: '10 min read',
    category: 'Investment',
  },
  {
    title: 'JVC vs Dubai Hills: Investment Comparison',
    slug: 'jvc-vs-dubai-hills-investment',
    description: 'Head-to-head investment comparison of JVC and Dubai Hills Estate. Prices, yields, capital growth, and lifestyle factors.',
    readTime: '11 min read',
    category: 'Investment',
  },
  {
    title: 'Best Areas Under AED 1M with Good ROI',
    slug: 'best-areas-under-1m-good-roi',
    description: 'Top Dubai areas where you can buy property under AED 1 million and still achieve strong rental returns.',
    readTime: '10 min read',
    category: 'Investment',
  },
  {
    title: 'Studio Rental Yield by Area',
    slug: 'studio-rental-yield-by-area',
    description: 'Compare studio apartment rental yields across Dubai communities. Find the best-performing areas for studio investments.',
    readTime: '9 min read',
    category: 'Investment',
  },
  {
    title: 'Best Areas to Buy Property Under AED 500K',
    slug: 'best-areas-buy-property-under-500k',
    description: 'Affordable Dubai properties under AED 500,000. Best communities, property types, and expected returns at this price point.',
    readTime: '10 min read',
    category: 'Budget',
  },
  {
    title: 'Where to Buy Under AED 1 Million in Dubai',
    slug: 'where-to-buy-under-1-million-dubai',
    description: 'Complete guide to buying property in Dubai under AED 1 million. Best areas, property types, and what to expect.',
    readTime: '11 min read',
    category: 'Budget',
  },
  {
    title: 'Cheapest Freehold Areas in Dubai',
    slug: 'cheapest-freehold-areas-dubai',
    description: 'Most affordable freehold areas in Dubai where foreigners can own property. Prices, amenities, and investment potential.',
    readTime: '10 min read',
    category: 'Budget',
  },
  {
    title: 'Affordable Areas Near the Metro in Dubai',
    slug: 'affordable-areas-near-metro-dubai',
    description: 'Budget-friendly Dubai communities with convenient metro access. Prices, connectivity, and lifestyle benefits.',
    readTime: '9 min read',
    category: 'Budget',
  },
  {
    title: 'Best Areas for First-Time Buyers in Dubai',
    slug: 'best-areas-first-time-buyers-dubai',
    description: 'Top Dubai areas recommended for first-time property buyers. Affordable entry points, growth potential, and community highlights.',
    readTime: '12 min read',
    category: 'Budget',
  },
  {
    title: 'Best Areas Near Dubai Metro',
    slug: 'best-areas-near-dubai-metro',
    description: 'Top residential communities within walking distance of Dubai Metro stations. Connectivity, prices, and commute advantages.',
    readTime: '10 min read',
    category: 'Transport',
  },
  {
    title: 'Walking Distance Metro Communities',
    slug: 'walking-distance-metro-communities',
    description: 'Dubai communities where you can walk to the metro. Detailed distances, station maps, and property options.',
    readTime: '9 min read',
    category: 'Transport',
  },
  {
    title: 'Property Near Red Line Metro Dubai',
    slug: 'property-near-red-line-metro-dubai',
    description: 'Residential areas along the Dubai Metro Red Line. Station-by-station guide to nearby communities and property prices.',
    readTime: '11 min read',
    category: 'Transport',
  },
  {
    title: 'Car-Free Living Areas in Dubai',
    slug: 'car-free-living-areas-dubai',
    description: 'Dubai communities where you can live comfortably without a car. Public transport, walkability, and nearby amenities.',
    readTime: '10 min read',
    category: 'Transport',
  },
  {
    title: 'Best Off-Plan Projects Under AED 1M',
    slug: 'best-off-plan-projects-under-1m',
    description: 'Top off-plan developments in Dubai under AED 1 million. Developer reputation, payment plans, and expected completion dates.',
    readTime: '12 min read',
    category: 'Off-Plan',
  },
  {
    title: 'Off-Plan vs Ready Property: ROI Comparison',
    slug: 'off-plan-vs-ready-property-roi',
    description: 'Compare returns between off-plan and ready properties in Dubai. Risk-adjusted analysis with real market data.',
    readTime: '11 min read',
    category: 'Off-Plan',
  },
  {
    title: 'Safest Off-Plan Areas in Dubai',
    slug: 'safest-off-plan-areas-dubai',
    description: 'Lowest-risk areas for off-plan property investment in Dubai. Developer track records, escrow compliance, and delivery rates.',
    readTime: '10 min read',
    category: 'Off-Plan',
  },
  {
    title: 'Payment Plan Communities in Dubai',
    slug: 'payment-plan-communities-dubai',
    description: 'Dubai communities offering attractive developer payment plans. Compare installment structures and post-handover options.',
    readTime: '10 min read',
    category: 'Off-Plan',
  },
  {
    title: '1% Payment Plan Properties in Dubai',
    slug: '1-percent-payment-plan-dubai',
    description: 'Guide to 1% monthly payment plan properties in Dubai. How they work, best projects, and what to watch out for.',
    readTime: '9 min read',
    category: 'Off-Plan',
  },
  {
    title: 'Best Areas for Families in Dubai',
    slug: 'best-areas-families-dubai',
    description: 'Top family-friendly communities in Dubai. Schools, parks, safety, healthcare access, and community amenities.',
    readTime: '13 min read',
    category: 'Family',
  },
  {
    title: 'Best Areas Near Schools in Dubai',
    slug: 'best-areas-near-schools-dubai',
    description: 'Dubai communities with the best school proximity. Top-rated schools, distances, and family housing options.',
    readTime: '11 min read',
    category: 'Family',
  },
  {
    title: 'Gated Communities in Dubai',
    slug: 'gated-communities-dubai',
    description: 'Guide to gated communities in Dubai. Security features, amenities, community rules, and property prices.',
    readTime: '10 min read',
    category: 'Family',
  },
  {
    title: 'Villa Communities Under AED 2M in Dubai',
    slug: 'villa-communities-under-2m-dubai',
    description: 'Affordable villa communities in Dubai under AED 2 million. Space, privacy, and family living at accessible prices.',
    readTime: '11 min read',
    category: 'Family',
  },
  {
    title: 'Quiet Residential Areas in Dubai',
    slug: 'quiet-residential-areas-dubai',
    description: 'Peaceful and quiet residential areas in Dubai away from the hustle. Low-density communities with a relaxed lifestyle.',
    readTime: '9 min read',
    category: 'Family',
  },
  {
    title: 'Best Areas for Airbnb in Dubai',
    slug: 'best-areas-airbnb-dubai',
    description: 'Top Dubai areas for Airbnb and short-term rental income. Occupancy rates, nightly rates, and regulatory compliance.',
    readTime: '12 min read',
    category: 'Airbnb',
  },
  {
    title: 'Short-Term Rental ROI in Dubai',
    slug: 'short-term-rental-roi-dubai',
    description: 'Analyze short-term rental returns across Dubai. Compare Airbnb yields to long-term rental income by area.',
    readTime: '11 min read',
    category: 'Airbnb',
  },
  {
    title: 'Airbnb Dubai Marina Guide',
    slug: 'airbnb-dubai-marina-guide',
    description: 'Complete guide to running an Airbnb in Dubai Marina. Earnings potential, regulations, and management tips.',
    readTime: '10 min read',
    category: 'Airbnb',
  },
  {
    title: 'Short-Term Rental License in Dubai',
    slug: 'short-term-rental-license-dubai',
    description: 'How to get a short-term rental license in Dubai. DTCM requirements, application process, fees, and compliance.',
    readTime: '9 min read',
    category: 'Airbnb',
  },
  {
    title: 'Highest Nightly Rate Areas in Dubai',
    slug: 'highest-nightly-rate-areas-dubai',
    description: 'Dubai areas commanding the highest nightly rates for short-term rentals. Premium locations and seasonal pricing.',
    readTime: '10 min read',
    category: 'Airbnb',
  },
  {
    title: 'Service Charges by Area in Dubai',
    slug: 'service-charges-by-area-dubai',
    description: 'Compare service charges across Dubai communities. Annual costs per sq ft and what they include.',
    readTime: '10 min read',
    category: 'Costs',
  },
  {
    title: 'Hidden Costs of Buying Property in Dubai',
    slug: 'hidden-costs-buying-property-dubai',
    description: 'All the costs beyond the purchase price when buying in Dubai. DLD fees, agent commission, mortgage costs, and more.',
    readTime: '11 min read',
    category: 'Costs',
  },
  {
    title: 'DLD Fees Calculator Guide',
    slug: 'dld-fees-calculator-guide',
    description: 'Understanding Dubai Land Department fees. Transfer fees, registration costs, and how to calculate total DLD charges.',
    readTime: '8 min read',
    category: 'Costs',
  },
  {
    title: 'Maintenance Costs by Community in Dubai',
    slug: 'maintenance-cost-by-community-dubai',
    description: 'Annual maintenance and upkeep costs across Dubai communities. Budgeting for repairs, replacements, and common expenses.',
    readTime: '10 min read',
    category: 'Costs',
  },
  {
    title: 'DEWA & Cooling Charges Comparison',
    slug: 'dewa-cooling-charges-comparison',
    description: 'Compare DEWA electricity, water, and district cooling charges across Dubai communities. Monthly cost estimates.',
    readTime: '9 min read',
    category: 'Costs',
  },
  {
    title: 'Business Bay vs Downtown Dubai',
    slug: 'business-bay-vs-downtown-dubai',
    description: 'Detailed comparison of Business Bay and Downtown Dubai. Prices, yields, lifestyle, and investment potential.',
    readTime: '12 min read',
    category: 'Comparison',
  },
  {
    title: 'Dubai Marina vs JBR',
    slug: 'dubai-marina-vs-jbr',
    description: 'Marina vs JBR comparison for buyers and investors. Beach access, pricing, rental demand, and community vibe.',
    readTime: '11 min read',
    category: 'Comparison',
  },
  {
    title: 'Palm Jumeirah vs Emirates Hills',
    slug: 'palm-jumeirah-vs-emirates-hills',
    description: 'Luxury living comparison between Palm Jumeirah and Emirates Hills. Villas, privacy, amenities, and price points.',
    readTime: '12 min read',
    category: 'Comparison',
  },
  {
    title: 'Abu Dhabi vs Dubai: Property Investment',
    slug: 'abu-dhabi-vs-dubai-investment',
    description: 'Compare property investment in Abu Dhabi and Dubai. Market size, yields, regulations, and growth outlook.',
    readTime: '13 min read',
    category: 'Comparison',
  },
  {
    title: 'JVC Property Investment Guide',
    slug: 'property-jvc-investment-guide',
    description: 'Complete investment guide to Jumeirah Village Circle. Prices, rental yields, upcoming developments, and growth trajectory.',
    readTime: '12 min read',
    category: 'Area Guide',
  },
  {
    title: 'Dubai Silicon Oasis Investment Guide',
    slug: 'dubai-silicon-oasis-investment',
    description: 'Investment analysis of Dubai Silicon Oasis. Affordable pricing, tech hub proximity, and rental demand drivers.',
    readTime: '11 min read',
    category: 'Area Guide',
  },
  {
    title: 'Al Furjan Investment Guide',
    slug: 'al-furjan-investment-guide',
    description: 'Al Furjan community and investment guide. Family-friendly living, metro connectivity, and property market trends.',
    readTime: '10 min read',
    category: 'Area Guide',
  },
  {
    title: 'Arabian Ranches: Pros & Cons',
    slug: 'arabian-ranches-pros-cons',
    description: 'Honest review of Arabian Ranches. Villa living benefits, drawbacks, community features, and resale value analysis.',
    readTime: '11 min read',
    category: 'Area Guide',
  },
]

export default function GuidesPage() {
  const breadcrumbs = [{ name: 'Guides', href: '/guides' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Property Guides
          </h1>
          <p className="text-xl text-gray-600">
            Expert guides to help you navigate buying, selling, and renting property in the UAE.
            Step-by-step procedures, costs, and legal requirements explained.
          </p>
        </header>

        <div className="space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block luxury-card p-6 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{guide.readTime}</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {guide.title}
                  </h2>
                  <p className="text-gray-600">{guide.description}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 mt-1 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
