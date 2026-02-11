export interface SearchItem {
  title: string
  description: string
  href: string
  category: 'guide' | 'location' | 'definition' | 'blog' | 'investing'
  tags: string[]
}

export const searchData: SearchItem[] = [
  {
    title: 'How to Buy Property in Dubai',
    description: 'Complete step-by-step guide to purchasing property in Dubai as a foreigner or resident.',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'guide',
    tags: ['buying', 'dubai', 'property purchase', 'investment', 'foreigner']
  },
  {
    title: 'How to Buy Property in UAE',
    description: 'Comprehensive guide covering property purchase across all UAE emirates.',
    href: '/guides/how-to-buy-property-in-uae',
    category: 'guide',
    tags: ['buying', 'uae', 'emirates', 'property purchase']
  },
  {
    title: 'How to Sell Property in UAE',
    description: 'Expert guide on selling your property in the UAE market.',
    href: '/guides/how-to-sell-property-in-uae',
    category: 'guide',
    tags: ['selling', 'uae', 'real estate agent', 'property sale']
  },
  {
    title: 'How to Rent Property in UAE',
    description: 'Everything you need to know about renting in the UAE.',
    href: '/guides/how-to-rent-property-in-uae',
    category: 'guide',
    tags: ['renting', 'tenancy', 'ejari', 'lease', 'tenant']
  },
  {
    title: 'DEWA Electricity & Water Guide',
    description: 'Complete guide to setting up utilities with DEWA in Dubai.',
    href: '/guides/dewa-electricity-water-guide',
    category: 'guide',
    tags: ['dewa', 'electricity', 'water', 'utilities', 'bills']
  },
  {
    title: 'AC Maintenance Dubai',
    description: 'Essential guide to air conditioning maintenance in Dubai properties.',
    href: '/guides/ac-maintenance-dubai',
    category: 'guide',
    tags: ['ac', 'air conditioning', 'maintenance', 'cooling', 'hvac']
  },
  {
    title: 'Home Cleaning Services Dubai',
    description: 'Guide to hiring cleaning services and maids in Dubai.',
    href: '/guides/home-cleaning-services-dubai',
    category: 'guide',
    tags: ['cleaning', 'maid', 'housekeeping', 'domestic help']
  },
  {
    title: 'Building Facilities & Amenities Dubai',
    description: 'Understanding building amenities and facilities management in Dubai.',
    href: '/guides/building-facilities-amenities-dubai',
    category: 'guide',
    tags: ['amenities', 'facilities', 'gym', 'pool', 'building management']
  },
  {
    title: 'Dubai Marina',
    description: 'Upscale waterfront living with stunning marina views and vibrant lifestyle.',
    href: '/locations/dubai/dubai-marina',
    category: 'location',
    tags: ['marina', 'waterfront', 'apartments', 'jbr', 'beach']
  },
  {
    title: 'Downtown Dubai',
    description: 'The heart of Dubai featuring Burj Khalifa and Dubai Mall.',
    href: '/locations/dubai/downtown-dubai',
    category: 'location',
    tags: ['downtown', 'burj khalifa', 'dubai mall', 'city center']
  },
  {
    title: 'Palm Jumeirah',
    description: 'Iconic palm-shaped island offering luxury beachfront living.',
    href: '/locations/dubai/palm-jumeirah',
    category: 'location',
    tags: ['palm', 'island', 'luxury', 'beachfront', 'villa', 'atlantis']
  },
  {
    title: 'Business Bay',
    description: 'Dynamic mixed-use district with modern high-rises and canal views.',
    href: '/locations/dubai/business-bay',
    category: 'location',
    tags: ['business bay', 'commercial', 'canal', 'office', 'apartments']
  },
  {
    title: 'JBR - Jumeirah Beach Residence',
    description: 'Beachfront community with retail, dining, and stunning sea views.',
    href: '/locations/dubai/jbr',
    category: 'location',
    tags: ['jbr', 'beach', 'jumeirah', 'the walk', 'beachfront']
  },
  {
    title: 'Arabian Ranches',
    description: 'Family-friendly villa community with golf course and green spaces.',
    href: '/locations/dubai/arabian-ranches',
    category: 'location',
    tags: ['arabian ranches', 'villa', 'family', 'golf', 'suburban']
  },
  {
    title: 'DIFC',
    description: 'Dubai International Financial Centre - premium financial district living.',
    href: '/locations/dubai/difc',
    category: 'location',
    tags: ['difc', 'financial', 'business', 'gate building', 'premium']
  },
  {
    title: 'Freehold Property',
    description: 'Understanding freehold ownership in Dubai and the UAE.',
    href: '/definitions/freehold-property',
    category: 'definition',
    tags: ['freehold', 'ownership', 'title deed', 'property rights']
  },
  {
    title: 'Leasehold',
    description: 'Understanding leasehold property arrangements in the UAE.',
    href: '/definitions/leasehold',
    category: 'definition',
    tags: ['leasehold', 'lease', 'tenure', 'usufruct']
  },
  {
    title: 'Off-Plan Property',
    description: 'Everything about buying off-plan properties in Dubai.',
    href: '/definitions/off-plan-property',
    category: 'definition',
    tags: ['off-plan', 'under construction', 'developer', 'payment plan']
  },
  {
    title: 'Dubai Market Outlook 2025',
    description: 'Expert analysis and predictions for Dubai real estate in 2025.',
    href: '/blog/dubai-market-outlook-2025',
    category: 'blog',
    tags: ['market', 'outlook', '2025', 'predictions', 'trends']
  },
  {
    title: 'Golden Visa Changes 2025',
    description: 'Latest updates to UAE Golden Visa requirements for property investors.',
    href: '/blog/golden-visa-changes-2025',
    category: 'blog',
    tags: ['golden visa', 'residency', 'immigration', 'investor visa']
  },
  {
    title: 'Off-Plan Investment Risks',
    description: 'Understanding the risks and rewards of off-plan property investment.',
    href: '/blog/off-plan-investment-risks',
    category: 'blog',
    tags: ['off-plan', 'risks', 'investment', 'developer risk']
  },
  {
    title: 'Dubai Real Estate Investment',
    description: 'Comprehensive investing insights for Dubai property market.',
    href: '/investing',
    category: 'investing',
    tags: ['investment', 'roi', 'rental yield', 'capital appreciation']
  },
  {
    title: 'Highest Rental Yield Areas Dubai 2026',
    description: 'Discover the highest rental yield areas in Dubai for maximum investment returns in 2026.',
    href: '/guides/highest-rental-yield-areas-dubai',
    category: 'guide',
    tags: ['rental yield', 'roi', 'investment', 'jvc', 'dubai']
  },
  {
    title: 'Best Areas 8%+ ROI Dubai',
    description: 'Find the best areas in Dubai delivering 8% or higher return on investment.',
    href: '/guides/best-areas-8-percent-roi-dubai',
    category: 'guide',
    tags: ['roi', 'return on investment', '8 percent', 'high yield']
  },
  {
    title: 'JVC vs Dubai Hills Investment',
    description: 'Detailed comparison of JVC and Dubai Hills for property investment potential.',
    href: '/guides/jvc-vs-dubai-hills-investment',
    category: 'guide',
    tags: ['jvc', 'dubai hills', 'comparison', 'investment', 'roi']
  },
  {
    title: 'Best Areas Under 1M Good ROI',
    description: 'Top areas in Dubai where you can buy property under AED 1 million with good ROI.',
    href: '/guides/best-areas-under-1m-good-roi',
    category: 'guide',
    tags: ['under 1 million', 'budget', 'roi', 'investment']
  },
  {
    title: 'Studio Rental Yield by Area',
    description: 'Compare studio apartment rental yields across different Dubai areas.',
    href: '/guides/studio-rental-yield-by-area',
    category: 'guide',
    tags: ['studio', 'rental yield', 'apartment', 'singles']
  },
  {
    title: 'Best Areas Buy Property Under 500K',
    description: 'Best areas to buy property in Dubai for under AED 500,000.',
    href: '/guides/best-areas-buy-property-under-500k',
    category: 'guide',
    tags: ['under 500k', 'budget', 'affordable', 'first time']
  },
  {
    title: 'Where to Buy Under 1 Million Dubai',
    description: 'Guide to buying property in Dubai for under AED 1 million.',
    href: '/guides/where-to-buy-under-1-million-dubai',
    category: 'guide',
    tags: ['under 1 million', 'budget', 'buying']
  },
  {
    title: 'Cheapest Freehold Areas Dubai',
    description: 'The most affordable freehold areas in Dubai for property buyers.',
    href: '/guides/cheapest-freehold-areas-dubai',
    category: 'guide',
    tags: ['cheapest', 'freehold', 'affordable', 'budget']
  },
  {
    title: 'Affordable Areas Near Metro',
    description: 'Affordable Dubai areas with easy access to the metro network.',
    href: '/guides/affordable-areas-near-metro-dubai',
    category: 'guide',
    tags: ['metro', 'affordable', 'transport', 'budget']
  },
  {
    title: 'Best Areas First-Time Buyers',
    description: 'Top recommended areas in Dubai for first-time property buyers.',
    href: '/guides/best-areas-first-time-buyers-dubai',
    category: 'guide',
    tags: ['first time buyer', 'beginner', 'starter home']
  },
  {
    title: 'Best Areas Near Dubai Metro',
    description: 'Best residential areas near Dubai Metro stations for easy commuting.',
    href: '/guides/best-areas-near-dubai-metro',
    category: 'guide',
    tags: ['metro', 'transport', 'red line', 'green line']
  },
  {
    title: 'Walking Distance Metro Communities',
    description: 'Dubai communities within walking distance of metro stations.',
    href: '/guides/walking-distance-metro-communities',
    category: 'guide',
    tags: ['walking', 'metro', 'walkable', 'commute']
  },
  {
    title: 'Property Near Red Line Metro',
    description: 'Properties and communities near the Dubai Metro Red Line.',
    href: '/guides/property-near-red-line-metro-dubai',
    category: 'guide',
    tags: ['red line', 'metro', 'rashidiya', 'jebel ali']
  },
  {
    title: 'Car-Free Living Areas',
    description: 'Dubai areas where you can live comfortably without a car.',
    href: '/guides/car-free-living-areas-dubai',
    category: 'guide',
    tags: ['car free', 'walkable', 'metro', 'no car']
  },
  {
    title: 'Best Off-Plan Projects Under 1M',
    description: 'Top off-plan projects in Dubai available for under AED 1 million.',
    href: '/guides/best-off-plan-projects-under-1m',
    category: 'guide',
    tags: ['off plan', 'under 1 million', 'new projects']
  },
  {
    title: 'Off-Plan vs Ready Property ROI',
    description: 'Compare ROI between off-plan and ready properties in Dubai.',
    href: '/guides/off-plan-vs-ready-property-roi',
    category: 'guide',
    tags: ['off plan', 'ready', 'comparison', 'roi']
  },
  {
    title: 'Safest Off-Plan Areas',
    description: 'The safest areas to buy off-plan property in Dubai with established developers.',
    href: '/guides/safest-off-plan-areas-dubai',
    category: 'guide',
    tags: ['off plan', 'safe', 'developer', 'established']
  },
  {
    title: 'Payment Plan Communities',
    description: 'Dubai communities offering attractive payment plans and post-handover options.',
    href: '/guides/payment-plan-communities-dubai',
    category: 'guide',
    tags: ['payment plan', 'installment', 'post handover']
  },
  {
    title: '1% Payment Plan Projects',
    description: 'Dubai projects offering 1% monthly payment plans for easy affordability.',
    href: '/guides/1-percent-payment-plan-dubai',
    category: 'guide',
    tags: ['1 percent', 'payment plan', 'monthly', 'danube']
  },
  {
    title: 'Best Areas for Families',
    description: 'Top family-friendly areas in Dubai with schools, parks, and safe environments.',
    href: '/guides/best-areas-families-dubai',
    category: 'guide',
    tags: ['families', 'kids', 'schools', 'parks', 'safe']
  },
  {
    title: 'Best Areas Near Schools',
    description: 'Best Dubai areas near top-rated schools for families with children.',
    href: '/guides/best-areas-near-schools-dubai',
    category: 'guide',
    tags: ['schools', 'education', 'gems', 'jess', 'kids']
  },
  {
    title: 'Gated Communities',
    description: 'Guide to gated communities in Dubai offering security and privacy.',
    href: '/guides/gated-communities-dubai',
    category: 'guide',
    tags: ['gated', 'security', 'villa', 'private', 'community']
  },
  {
    title: 'Villa Communities Under 2M',
    description: 'Affordable villa and townhouse communities in Dubai under AED 2 million.',
    href: '/guides/villa-communities-under-2m-dubai',
    category: 'guide',
    tags: ['villa', 'townhouse', 'under 2 million', 'affordable']
  },
  {
    title: 'Quiet Residential Areas',
    description: 'Peaceful and quiet residential areas in Dubai away from the hustle.',
    href: '/guides/quiet-residential-areas-dubai',
    category: 'guide',
    tags: ['quiet', 'peaceful', 'residential', 'family']
  },
  {
    title: 'Best Areas Airbnb',
    description: 'Best areas in Dubai for Airbnb and short-term rental investment.',
    href: '/guides/best-areas-airbnb-dubai',
    category: 'guide',
    tags: ['airbnb', 'short term rental', 'holiday home']
  },
  {
    title: 'Short-Term Rental ROI',
    description: 'Analyze short-term rental ROI across different Dubai areas.',
    href: '/guides/short-term-rental-roi-dubai',
    category: 'guide',
    tags: ['short term', 'rental', 'roi', 'airbnb', 'str']
  },
  {
    title: 'Airbnb Dubai Marina Guide',
    description: 'Complete guide to running an Airbnb in Dubai Marina with DTCM licensing.',
    href: '/guides/airbnb-dubai-marina-guide',
    category: 'guide',
    tags: ['airbnb', 'dubai marina', 'dtcm', 'license']
  },
  {
    title: 'Short-Term Rental License',
    description: 'How to obtain a DTCM short-term rental license in Dubai.',
    href: '/guides/short-term-rental-license-dubai',
    category: 'guide',
    tags: ['dtcm', 'license', 'short term', 'holiday home']
  },
  {
    title: 'Highest Nightly Rate Areas',
    description: 'Dubai areas commanding the highest nightly rates for short-term rentals.',
    href: '/guides/highest-nightly-rate-areas-dubai',
    category: 'guide',
    tags: ['nightly rate', 'premium', 'luxury', 'airbnb']
  },
  {
    title: 'Service Charges by Area',
    description: 'Compare service charges per sqft across different Dubai communities.',
    href: '/guides/service-charges-by-area-dubai',
    category: 'guide',
    tags: ['service charges', 'maintenance', 'fees', 'per sqft']
  },
  {
    title: 'Hidden Costs Buying Property',
    description: 'All the hidden costs and fees when buying property in Dubai.',
    href: '/guides/hidden-costs-buying-property-dubai',
    category: 'guide',
    tags: ['hidden costs', 'fees', 'dld', 'commission']
  },
  {
    title: 'DLD Fees Calculator Guide',
    description: 'Understanding DLD transfer fees and how to calculate them.',
    href: '/guides/dld-fees-calculator-guide',
    category: 'guide',
    tags: ['dld', 'fees', 'calculator', 'transfer fee', '4 percent']
  },
  {
    title: 'Maintenance Cost by Community',
    description: 'Annual maintenance costs compared across Dubai communities.',
    href: '/guides/maintenance-cost-by-community-dubai',
    category: 'guide',
    tags: ['maintenance', 'cost', 'annual', 'community']
  },
  {
    title: 'DEWA Cooling Charges Comparison',
    description: 'Compare DEWA and district cooling charges across Dubai areas.',
    href: '/guides/dewa-cooling-charges-comparison',
    category: 'guide',
    tags: ['dewa', 'cooling', 'empower', 'ac', 'electricity']
  },
  {
    title: 'Business Bay vs Downtown',
    description: 'Business Bay vs Downtown Dubai — which area is better for investment and living?',
    href: '/guides/business-bay-vs-downtown-dubai',
    category: 'guide',
    tags: ['business bay', 'downtown', 'comparison', 'vs']
  },
  {
    title: 'Dubai Marina vs JBR',
    description: 'Dubai Marina vs JBR comparison for buyers and renters.',
    href: '/guides/dubai-marina-vs-jbr',
    category: 'guide',
    tags: ['marina', 'jbr', 'comparison', 'beach', 'waterfront']
  },
  {
    title: 'Palm Jumeirah vs Emirates Hills',
    description: 'Luxury showdown — Palm Jumeirah vs Emirates Hills for high-end buyers.',
    href: '/guides/palm-jumeirah-vs-emirates-hills',
    category: 'guide',
    tags: ['palm', 'emirates hills', 'luxury', 'villa', 'comparison']
  },
  {
    title: 'Abu Dhabi vs Dubai Investment',
    description: 'Compare property investment opportunities in Abu Dhabi vs Dubai.',
    href: '/guides/abu-dhabi-vs-dubai-investment',
    category: 'guide',
    tags: ['abu dhabi', 'dubai', 'comparison', 'investment']
  },
  {
    title: 'Property JVC Investment Guide',
    description: 'Complete investment guide for Jumeirah Village Circle (JVC).',
    href: '/guides/property-jvc-investment-guide',
    category: 'guide',
    tags: ['jvc', 'investment', 'jumeirah village circle']
  },
  {
    title: 'Dubai Silicon Oasis Investment',
    description: 'Investment guide for Dubai Silicon Oasis — tech hub living.',
    href: '/guides/dubai-silicon-oasis-investment',
    category: 'guide',
    tags: ['dso', 'silicon oasis', 'investment', 'tech']
  },
  {
    title: 'Al Furjan Investment Guide',
    description: 'Investment guide for Al Furjan — metro-connected villa community.',
    href: '/guides/al-furjan-investment-guide',
    category: 'guide',
    tags: ['al furjan', 'investment', 'metro', 'villas']
  },
  {
    title: 'Arabian Ranches Pros Cons',
    description: 'Honest pros and cons of living in Arabian Ranches, Dubai.',
    href: '/guides/arabian-ranches-pros-cons',
    category: 'guide',
    tags: ['arabian ranches', 'pros cons', 'villa', 'family']
  },
  {
    title: 'Top 10 Investment Areas Dubai 2026',
    description: 'Ranked list of the top 10 best areas to invest in Dubai for 2026.',
    href: '/investing/top-10-investment-areas-dubai',
    category: 'investing',
    tags: ['top 10', 'investment', 'ranking', 'best areas']
  },
  {
    title: 'Dubai Investment Scorecard 2026',
    description: 'Data-driven scorecard rating Dubai areas for investment potential in 2026.',
    href: '/investing/dubai-investment-scorecard-2026',
    category: 'investing',
    tags: ['scorecard', 'methodology', 'rating', 'investment']
  },
  {
    title: 'Capital Growth Ranking Dubai',
    description: 'Ranking of Dubai areas by capital growth and price appreciation.',
    href: '/investing/capital-growth-ranking-dubai',
    category: 'investing',
    tags: ['capital growth', 'appreciation', 'ranking', 'price increase']
  },
  {
    title: 'Rental Demand Ranking Dubai',
    description: 'Ranking of Dubai areas by rental demand, vacancy rates, and rent growth.',
    href: '/investing/rental-demand-ranking-dubai',
    category: 'investing',
    tags: ['rental demand', 'vacancy', 'rent growth', 'occupancy']
  }
]

export const categoryLabels: Record<SearchItem['category'], string> = {
  guide: 'Guide',
  location: 'Location',
  definition: 'Definition',
  blog: 'Blog',
  investing: 'Investing'
}

export const categoryColors: Record<SearchItem['category'], string> = {
  guide: 'bg-blue-100 text-blue-700',
  location: 'bg-green-100 text-green-700',
  definition: 'bg-purple-100 text-purple-700',
  blog: 'bg-orange-100 text-orange-700',
  investing: 'bg-amber-100 text-amber-700'
}
