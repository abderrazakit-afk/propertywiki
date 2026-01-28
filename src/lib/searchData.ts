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
