import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Dubai Building Facilities & Amenities Guide',
  description: 'Guide to building facilities and amenities in Dubai. Learn about service charges, gym & pool access, parking, security, and community rules.',
  keywords: ['Dubai building amenities', 'Dubai service charges', 'apartment facilities Dubai', 'building management Dubai', 'Dubai property amenities', 'residential facilities UAE'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/building-facilities-amenities-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/building-facilities-amenities-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/building-facilities-amenities-dubai',
      'x-default': 'https://propertywiki.ai/guides/building-facilities-amenities-dubai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/building-facilities-amenities-dubai',
    title: 'Dubai Building Facilities & Amenities Guide',
    description: 'Everything about building facilities, service charges, and amenities in Dubai properties.',
    type: 'article',
    publishedTime: '2024-06-15',
    modifiedTime: '2025-01-15',
    images: [
      {
        url: 'https://propertywiki.ai/images/building-facilities-amenities-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern building amenities in Dubai',
      },
    ],
  },
}

const tableOfContents = [
  { id: 'service-charges', title: 'Understanding Service Charges', level: 2 },
  { id: 'common-amenities', title: 'Common Building Amenities', level: 2 },
  { id: 'gym-pool', title: 'Gym & Pool Facilities', level: 2 },
  { id: 'parking-valet', title: 'Parking & Valet', level: 2 },
  { id: 'security', title: 'Security Features', level: 2 },
  { id: 'concierge', title: 'Concierge Services', level: 2 },
  { id: 'maintenance', title: 'Maintenance & Repairs', level: 2 },
  { id: 'community-rules', title: 'Community Rules', level: 2 },
]

const faqs = [
  {
    question: 'What do service charges cover in Dubai buildings?',
    answer: 'Service charges in Dubai typically cover building maintenance, common area cleaning, security, landscaping, pool and gym maintenance, elevator servicing, pest control, and building insurance. They may also include chiller/AC charges in some buildings, though this is sometimes billed separately.',
  },
  {
    question: 'How much are service charges in Dubai apartments?',
    answer: 'Service charges in Dubai range from AED 10-30 per square foot annually, depending on the building quality and amenities. Budget buildings charge AED 10-15/sq ft, mid-range buildings AED 15-20/sq ft, and luxury towers with premium amenities can charge AED 25-30/sq ft or more.',
  },
  {
    question: 'Are gym and pool facilities free for residents?',
    answer: 'Yes, gym and pool facilities are typically included in your service charges and free to use for residents. However, some premium amenities like tennis courts, spa services, or specialized fitness classes may require additional fees or booking charges.',
  },
  {
    question: 'What are quiet hours in Dubai residential buildings?',
    answer: 'Most Dubai buildings enforce quiet hours from 10:00 PM to 8:00 AM on weekdays and until 9:00 AM on weekends. During these hours, residents must minimize noise, avoid construction work, and refrain from hosting loud gatherings. Violations can result in warnings or fines from building management.',
  },
  {
    question: 'Can I have pets in Dubai apartments?',
    answer: 'Pet policies vary by building in Dubai. Many newer buildings allow pets with restrictions on size (typically under 15-20kg) and number (usually 1-2 pets). Some buildings prohibit pets entirely, while pet-friendly buildings may require a pet deposit and registration with management. Always check your building\'s specific pet policy before bringing in animals.',
  },
  {
    question: 'How do I submit a maintenance request in my building?',
    answer: 'Most Dubai buildings offer multiple ways to submit maintenance requests: through a building management app, via email to the property management company, through an online portal, or by calling the building reception or maintenance hotline. For emergencies like water leaks or electrical issues, buildings typically have 24/7 emergency contact numbers.',
  },
]

const relatedArticles = [
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Complete guide for foreigners looking to purchase property in Dubai.',
  },
  {
    title: 'DEWA Electricity & Water Guide',
    href: '/guides/dewa-electricity-water-guide',
    category: 'Guide',
    description: 'Everything you need to know about setting up and managing DEWA services.',
  },
  {
    title: 'AC Maintenance in Dubai',
    href: '/guides/ac-maintenance-dubai',
    category: 'Guide',
    description: 'Essential guide to maintaining your air conditioning in Dubai\'s climate.',
  },
  {
    title: 'How to Rent Property in UAE',
    href: '/guides/how-to-rent-property-in-uae',
    category: 'Guide',
    description: 'Step-by-step guide to renting property across the UAE.',
  },
  {
    title: 'Home Cleaning Services Guide',
    href: '/guides/home-cleaning-services-dubai',
    category: 'Guide',
    description: 'Find reliable home cleaning services in Dubai.',
  },
]

export default function BuildingFacilitiesAmenitiesPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'Building Facilities & Amenities Dubai', href: '/guides/building-facilities-amenities-dubai' },
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
          title: 'Building Facilities & Amenities Guide Dubai - Complete Overview',
          description: 'Comprehensive guide to building facilities and amenities in Dubai residential properties.',
          url: 'https://propertywiki.ai/guides/building-facilities-amenities-dubai',
          datePublished: '2024-06-15',
          dateModified: '2025-01-15',
          author: { name: author.name },
          image: 'https://propertywiki.ai/images/building-facilities-amenities-dubai.jpg',
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'Building Facilities & Amenities Dubai', url: 'https://propertywiki.ai/guides/building-facilities-amenities-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Property Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Building Facilities & Amenities in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to understanding building facilities, service charges, amenities, 
            and community rules in Dubai residential properties. Everything residents need to know 
            about their building&apos;s offerings and regulations.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/building-facilities-amenities-dubai.jpg"
            alt="Modern building amenities and facilities in Dubai"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="service-charges">
            <h2>Understanding Service Charges</h2>
            <p>
              Service charges are mandatory fees paid by property owners to cover the maintenance and 
              upkeep of common areas and shared facilities in residential buildings. In Dubai, these 
              charges are regulated by <a href="https://www.rera.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RERA (Real Estate Regulatory Agency)</a> and must be approved annually.
            </p>
            
            <h3>Typical Service Charge Rates</h3>
            <p>
              Service charges in Dubai vary significantly based on the building&apos;s age, location, and 
              amenities offered:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Building Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate (AED/sq ft/year)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Annual Cost (1,000 sq ft)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Budget/Older Buildings</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 10-15</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 10,000-15,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mid-Range Buildings</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 15-20</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 15,000-20,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Premium Towers</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 20-25</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 20,000-25,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ultra-Luxury Buildings</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 25-30+</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 25,000-30,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>What Service Charges Cover</h3>
            <ul>
              <li><strong>Common area maintenance:</strong> Cleaning, lighting, and upkeep of lobbies, corridors, and shared spaces</li>
              <li><strong>Security services:</strong> 24/7 security personnel and monitoring systems</li>
              <li><strong>Landscaping:</strong> Garden maintenance, irrigation, and outdoor area upkeep</li>
              <li><strong>Facility maintenance:</strong> Pool, gym, and recreational facility upkeep</li>
              <li><strong>Elevator servicing:</strong> Regular maintenance and repairs of elevators</li>
              <li><strong>Building insurance:</strong> Master policy covering common areas</li>
              <li><strong>Pest control:</strong> Regular treatment of common areas</li>
              <li><strong>Waste management:</strong> Garbage collection and disposal services</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-sm text-yellow-700">
                <strong>Note:</strong> Chiller/district cooling charges for AC are sometimes included in 
                service charges but are often billed separately. See our <Link href="/guides/ac-maintenance-dubai" className="text-primary-600 hover:underline">AC maintenance guide</Link> for more on cooling systems. Always clarify this when purchasing or 
                renting a property.
              </p>
            </div>
          </section>

          <section id="common-amenities">
            <h2>Common Building Amenities</h2>
            <p>
              Dubai residential buildings are known for their extensive amenities. Here&apos;s what you 
              can typically expect in different building tiers:
            </p>

            <h3>Standard Amenities (Most Buildings)</h3>
            <ul>
              <li>Swimming pool (outdoor)</li>
              <li>Gymnasium with basic equipment</li>
              <li>Sauna and steam room</li>
              <li>Children&apos;s play area</li>
              <li>BBQ area</li>
              <li>Covered parking</li>
              <li>24/7 reception</li>
            </ul>

            <h3>Premium Amenities (Luxury Buildings)</h3>
            <ul>
              <li>Tennis courts</li>
              <li>Squash courts</li>
              <li>Private cinema room</li>
              <li>Business center</li>
              <li>Co-working spaces</li>
              <li>Indoor swimming pool</li>
              <li>Jacuzzi and spa facilities</li>
              <li>Yoga and meditation rooms</li>
              <li>Private dining rooms</li>
              <li>Sky lounges</li>
              <li>Golf simulators</li>
              <li>Pet grooming facilities</li>
            </ul>
          </section>

          <section id="gym-pool">
            <h2>Gym & Pool Facilities</h2>
            <p>
              Fitness and pool facilities are essential amenities in Dubai&apos;s climate and lifestyle. 
              Here&apos;s what to expect:
            </p>

            <h3>Gymnasium Facilities</h3>
            <p>
              Most building gyms in Dubai offer:
            </p>
            <ul>
              <li>Cardiovascular equipment (treadmills, ellipticals, bikes)</li>
              <li>Free weights and resistance machines</li>
              <li>Stretching and mat areas</li>
              <li>Changing rooms with showers</li>
              <li>Some buildings offer personal training services (additional fee)</li>
            </ul>

            <h3>Swimming Pool Access</h3>
            <p>
              Pool facilities typically include:
            </p>
            <ul>
              <li><strong>Operating hours:</strong> Usually 6:00 AM to 10:00 PM</li>
              <li><strong>Access:</strong> Via access card or building app</li>
              <li><strong>Guest policy:</strong> Residents can usually bring 1-2 guests</li>
              <li><strong>Separate pools:</strong> Many buildings have adults-only and family pools</li>
              <li><strong>Poolside amenities:</strong> Sun loungers, towel service in premium buildings</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-sm text-blue-700">
                <strong>Tip:</strong> Premium buildings often have temperature-controlled pools that remain 
                comfortable year-round, including cooling systems for summer months.
              </p>
            </div>
          </section>

          <section id="parking-valet">
            <h2>Parking & Valet</h2>
            <p>
              Parking arrangements in Dubai buildings vary significantly:
            </p>

            <h3>Allocated Parking</h3>
            <ul>
              <li><strong>Ownership:</strong> Apartments typically come with 1-2 allocated parking spaces</li>
              <li><strong>Studios/1BR:</strong> Usually 1 parking space</li>
              <li><strong>2BR+:</strong> Usually 2 parking spaces</li>
              <li><strong>Villas:</strong> Private garage or multiple spaces</li>
            </ul>

            <h3>Visitor Parking</h3>
            <ul>
              <li>Most buildings provide visitor parking areas</li>
              <li>Time limits typically apply (2-4 hours)</li>
              <li>Some buildings require visitor registration at reception</li>
              <li>Paid visitor parking in some premium locations</li>
            </ul>

            <h3>Valet Services</h3>
            <p>
              Luxury buildings may offer valet parking services:
            </p>
            <ul>
              <li>Available 24/7 or during peak hours</li>
              <li>May be included in service charges or charged separately</li>
              <li>Typical valet fee: AED 50-150 per use if not included</li>
              <li>Some buildings offer monthly valet packages</li>
            </ul>
          </section>

          <section id="security">
            <h2>Security Features</h2>
            <p>
              Dubai buildings are known for their comprehensive security measures:
            </p>

            <h3>Standard Security Features</h3>
            <ul>
              <li><strong>24/7 Security Guards:</strong> Stationed at entrances and lobby areas</li>
              <li><strong>CCTV Surveillance:</strong> Covering common areas, parking, and entrances</li>
              <li><strong>Access Cards:</strong> Electronic key cards for building entry, parking, and amenities</li>
              <li><strong>Intercom Systems:</strong> Video intercom connecting apartments to reception</li>
              <li><strong>Visitor Registration:</strong> All visitors logged at reception</li>
            </ul>

            <h3>Premium Security Features</h3>
            <ul>
              <li>Biometric access (fingerprint/facial recognition)</li>
              <li>Dedicated security control rooms</li>
              <li>In-apartment panic buttons</li>
              <li>Private elevator access to specific floors</li>
              <li>License plate recognition for parking</li>
            </ul>

            <h3>Emergency Systems</h3>
            <ul>
              <li>Fire detection and sprinkler systems</li>
              <li>Emergency evacuation procedures</li>
              <li>Backup generators for essential services</li>
              <li>Emergency lighting in common areas</li>
            </ul>
          </section>

          <section id="concierge">
            <h2>Concierge Services</h2>
            <p>
              Many Dubai buildings offer concierge services to enhance resident convenience:
            </p>

            <h3>Standard Concierge Services</h3>
            <ul>
              <li><strong>Parcel Collection:</strong> Secure storage and notification for deliveries</li>
              <li><strong>Dry Cleaning Pickup:</strong> Collection and delivery coordination</li>
              <li><strong>Maintenance Requests:</strong> Logging and tracking of work orders</li>
              <li><strong>Taxi Booking:</strong> Arranging transportation</li>
              <li><strong>Information Services:</strong> Local area information and recommendations</li>
            </ul>

            <h3>Premium Concierge Services</h3>
            <ul>
              <li>Restaurant reservations</li>
              <li>Travel and event bookings</li>
              <li>Personal shopping assistance</li>
              <li>Pet care coordination</li>
              <li>Home services coordination (cleaning, repairs)</li>
              <li>Move-in/move-out assistance</li>
            </ul>
          </section>

          <section id="maintenance">
            <h2>Maintenance & Repairs</h2>
            <p>
              Understanding how maintenance works in your building is essential for a smooth living experience:
            </p>

            <h3>Building Management</h3>
            <p>
              Buildings in Dubai are managed by either:
            </p>
            <ul>
              <li><strong>Developer Management:</strong> The original developer manages the property</li>
              <li><strong>Third-Party Management:</strong> Professional property management companies</li>
              <li><strong>Owners Association:</strong> Resident-led management in some communities</li>
            </ul>

            <h3>Submitting Work Orders</h3>
            <p>
              Common methods to request maintenance:
            </p>
            <ul>
              <li><strong>Building App:</strong> Most modern buildings have dedicated apps (e.g., Fazaa, Stratum)</li>
              <li><strong>Online Portal:</strong> Web-based maintenance request systems</li>
              <li><strong>Reception:</strong> In-person or phone requests</li>
              <li><strong>Email:</strong> Direct communication with property management</li>
            </ul>

            <h3>Response Times</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expected Response</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Emergency (water leak, power failure)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">1-4 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Urgent (AC issues, plumbing)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">24-48 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Standard (minor repairs)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">3-7 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Emergency Contacts</h3>
            <ul>
              <li><strong>Building Emergency Line:</strong> Available 24/7 for urgent issues</li>
              <li><strong>Civil Defense:</strong> 997 (fire emergencies)</li>
              <li><strong>Dubai Police:</strong> 999 (emergencies) or 901 (non-emergency)</li>
              <li><strong><a href="https://www.dewa.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DEWA</a>:</strong> 991 (electricity and water emergencies)</li>
              <li><strong>Dubai Municipality:</strong> 800 900 (pest control, health issues)</li>
            </ul>
          </section>

          <section id="community-rules">
            <h2>Community Rules</h2>
            <p>
              Dubai buildings have community rules to ensure harmonious living for all residents:
            </p>

            <h3>Quiet Hours</h3>
            <ul>
              <li><strong>Weekdays:</strong> 10:00 PM to 8:00 AM</li>
              <li><strong>Weekends:</strong> 10:00 PM to 9:00 AM</li>
              <li><strong>No construction/renovation work:</strong> During quiet hours</li>
              <li><strong>Parties and gatherings:</strong> Must end by 10:00 PM unless in designated areas</li>
            </ul>

            <h3>Pet Policies</h3>
            <ul>
              <li>Registration with building management required</li>
              <li>Size restrictions typically apply (usually under 15-20kg)</li>
              <li>Limited to 1-2 pets per apartment in most buildings</li>
              <li>Pets must be leashed in common areas</li>
              <li>Owners responsible for cleaning after pets</li>
              <li>Some buildings are completely pet-free</li>
            </ul>

            <h3>Balcony Regulations</h3>
            <ul>
              <li><strong>No hanging laundry:</strong> Visible from outside</li>
              <li><strong>BBQ restrictions:</strong> Open flames often prohibited on balconies</li>
              <li><strong>Satellite dishes:</strong> Usually not permitted on balconies</li>
              <li><strong>Storage:</strong> Excessive storage on balconies prohibited</li>
              <li><strong>Plants:</strong> Must be safely secured and maintained</li>
            </ul>

            <h3>Moving Rules</h3>
            <ul>
              <li><strong>Advance notice:</strong> 48-72 hours notification required</li>
              <li><strong>Service elevator:</strong> Must be booked for moves</li>
              <li><strong>Permitted hours:</strong> Usually 9:00 AM to 6:00 PM weekdays</li>
              <li><strong>Deposits:</strong> Refundable moving deposit may be required</li>
              <li><strong>Protection:</strong> Elevator and corridor protection often mandatory</li>
            </ul>

            <h3>General Rules</h3>
            <ul>
              <li>Subletting rules (varies by building)</li>
              <li>Short-term rental restrictions (Airbnb may require approval)</li>
              <li>Smoking prohibited in common areas</li>
              <li>Business activities from residential units may be restricted</li>
              <li>Exterior modifications require approval</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <p className="text-sm text-green-700">
                <strong>Tip:</strong> Always request a copy of the community rules before purchasing or 
                renting a property. These rules are legally binding and violations can result in fines 
                or other penalties.
              </p>
            </div>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-06-15"
          dateModified="2025-01-15"
        />

        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Marina</p>
            </Link>
            <Link href="/locations/dubai/arabian-ranches" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Arabian Ranches</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">Freehold Property</p>
            </Link>
            <Link href="/guides/home-cleaning-services-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Home Cleaning Services in Dubai</p>
            </Link>
            <Link href="/guides/service-charges-by-area-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Service Charges by Area in Dubai</p>
            </Link>
            <Link href="/guides/gated-communities-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Gated Communities in Dubai</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
