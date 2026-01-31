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
  title: 'AC Maintenance in Dubai - Complete Guide to Air Conditioning Care',
  description: 'Comprehensive guide to AC maintenance in Dubai. Learn about split units, central AC, district cooling, maintenance contracts, common problems, and tips for reducing AC bills.',
  keywords: ['AC maintenance Dubai', 'air conditioning Dubai', 'AC service Dubai', 'split AC maintenance', 'central AC Dubai', 'district cooling Dubai', 'Empower', 'Emicool', 'HVAC Dubai', 'AC repair Dubai'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/ac-maintenance-dubai',
  },
  openGraph: {
    title: 'AC Maintenance in Dubai - Complete Guide to Air Conditioning Care',
    description: 'Everything you need to know about AC maintenance in Dubai, from regular servicing to annual maintenance contracts.',
    type: 'article',
    publishedTime: '2024-06-15',
    modifiedTime: '2025-01-20',
    url: 'https://propertywiki.ai/guides/ac-maintenance-dubai',
    images: [
      {
        url: 'https://propertywiki.ai/images/ac-maintenance-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'AC Maintenance in Dubai',
      },
    ],
  },
}

const tableOfContents = [
  { id: 'why-ac-maintenance-matters', title: 'Why AC Maintenance Matters', level: 2 },
  { id: 'types-of-ac-systems', title: 'Types of AC Systems in Dubai', level: 2 },
  { id: 'maintenance-checklist', title: 'Regular Maintenance Checklist', level: 2 },
  { id: 'finding-technicians', title: 'Finding AC Technicians', level: 2 },
  { id: 'maintenance-contracts', title: 'AC Maintenance Contracts', level: 2 },
  { id: 'common-problems', title: 'Common AC Problems', level: 2 },
  { id: 'district-cooling-vs-split', title: 'District Cooling vs Split Units', level: 2 },
  { id: 'reducing-ac-bills', title: 'Tips for Reducing AC Bills', level: 2 },
]

const faqs = [
  {
    question: 'How often should I service my AC in Dubai?',
    answer: 'In Dubai, AC units should be professionally serviced at least every 3 months (quarterly) due to heavy usage. You should also clean or replace filters monthly, especially during summer months when the AC runs continuously.',
  },
  {
    question: 'How much does an AC maintenance contract cost in Dubai?',
    answer: 'Annual AC maintenance contracts in Dubai typically range from AED 400 to AED 1,500 depending on the number of units, type of AC system, and level of coverage. Basic contracts cover routine servicing, while comprehensive contracts include parts and emergency repairs.',
  },
  {
    question: 'What is the ideal AC temperature setting in Dubai?',
    answer: 'The recommended AC temperature setting is 24°C, which provides comfortable cooling while maintaining energy efficiency. Each degree lower than 24°C can increase energy consumption by 3-5%. Using ceiling fans alongside AC can allow for higher thermostat settings.',
  },
  {
    question: 'What is district cooling and how does it differ from split AC?',
    answer: 'District cooling is a centralized cooling system where chilled water is produced at a central plant and distributed to buildings through insulated pipes. It is used in many Dubai developments like Downtown Dubai and Dubai Marina. Unlike split units, you do not own the equipment - cooling is billed based on usage (measured in RT hours) and maintenance is handled by the provider (Empower or Emicool).',
  },
  {
    question: 'Why is my AC not cooling properly in Dubai?',
    answer: 'Common reasons for poor AC cooling include: dirty filters blocking airflow, low refrigerant levels due to leaks, blocked condenser coils, thermostat issues, or oversized/undersized units for the space. In Dubai\'s extreme heat, AC units work harder and may struggle if not properly maintained.',
  },
  {
    question: 'Can I clean my AC filters myself?',
    answer: 'Yes, cleaning AC filters is a simple maintenance task you can do yourself. Remove the filter, wash it with water and mild detergent, let it dry completely, and reinstall. This should be done monthly in Dubai. However, deep cleaning of coils and checking refrigerant levels should be done by professionals.',
  },
]

const relatedArticles = [
  {
    title: 'DEWA Electricity & Water Guide',
    href: '/guides/dewa-electricity-water-guide',
    category: 'Guide',
    description: 'Complete guide to setting up and managing DEWA utilities in Dubai.',
  },
  {
    title: 'How to Rent Property in UAE',
    href: '/guides/how-to-rent-property-in-uae',
    category: 'Guide',
    description: 'Everything you need to know about renting property in the UAE.',
  },
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Comprehensive guide to Dubai Marina including property types and amenities.',
  },
  {
    title: 'Building Facilities & Amenities Guide',
    href: '/guides/building-facilities-amenities-dubai',
    category: 'Guide',
    description: 'Understanding building amenities and service charges in Dubai.',
  },
  {
    title: 'Home Cleaning Services Guide',
    href: '/guides/home-cleaning-services-dubai',
    category: 'Guide',
    description: 'Find reliable home cleaning services in Dubai.',
  },
]

export default function ACMaintenanceDubaiPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'AC Maintenance in Dubai', href: '/guides/ac-maintenance-dubai' },
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
          title: 'AC Maintenance in Dubai - Complete Guide to Air Conditioning Care',
          description: 'Comprehensive guide to AC maintenance in Dubai including types of systems, maintenance tips, and cost-saving strategies.',
          url: 'https://propertywiki.ai/guides/ac-maintenance-dubai',
          datePublished: '2024-06-15',
          dateModified: '2025-01-20',
          author: { name: author.name },
          image: 'https://propertywiki.ai/images/ac-maintenance-dubai.jpg',
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'AC Maintenance in Dubai', url: 'https://propertywiki.ai/guides/ac-maintenance-dubai' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Home Maintenance Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            AC Maintenance in Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to air conditioning maintenance in Dubai. With AC running 
            8-10 months per year, proper maintenance is essential for comfort, efficiency, and cost savings.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/ac-maintenance-dubai.jpg"
            alt="AC maintenance service in Dubai"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="why-ac-maintenance-matters">
            <h2>Why AC Maintenance Matters</h2>
            <p>
              In Dubai, air conditioning is not a luxury—it is a necessity. With temperatures 
              regularly exceeding 40°C during summer months, your AC system runs continuously 
              for 8-10 months per year. This intense usage makes regular maintenance critical 
              for several reasons:
            </p>
            <ul>
              <li><strong>Energy Efficiency:</strong> A well-maintained AC uses 15-25% less energy than 
              a neglected unit, directly reducing your <Link href="/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">DEWA</Link> bills</li>
              <li><strong>System Longevity:</strong> Regular maintenance can extend your AC lifespan 
              from 8-10 years to 15+ years</li>
              <li><strong>Air Quality:</strong> Clean filters and coils prevent dust, mold, and bacteria 
              from circulating in your home</li>
              <li><strong>Avoid Breakdowns:</strong> Preventive maintenance catches small issues before 
              they become expensive repairs, especially critical during peak summer</li>
              <li><strong>Warranty Compliance:</strong> Many manufacturers require proof of regular 
              maintenance to honor warranty claims</li>
            </ul>
          </section>

          <section id="types-of-ac-systems">
            <h2>Types of AC Systems in Dubai</h2>
            <p>
              Dubai properties use several types of air conditioning systems, each with different 
              maintenance requirements:
            </p>

            <h3>Split AC Units</h3>
            <p>
              The most common type in apartments and smaller properties. Split units consist of an 
              indoor unit (evaporator) and outdoor unit (condenser). They are energy-efficient and 
              allow zone-by-zone temperature control. Maintenance involves cleaning both units and 
              checking refrigerant levels.
            </p>

            <h3>Central AC (Ducted)</h3>
            <p>
              Common in villas and larger apartments, central AC uses a network of ducts to 
              distribute cooled air throughout the property. While more powerful, they require 
              professional maintenance including duct cleaning and inspection of the central unit.
            </p>

            <h3>Window AC Units</h3>
            <p>
              Less common in newer buildings but still found in older properties and staff 
              accommodations. These self-contained units are simpler to maintain but less 
              energy-efficient than split systems.
            </p>

            <h3>District Cooling</h3>
            <p>
              Many newer Dubai developments use district cooling provided by <strong>Empower</strong> or 
              <strong>Emicool</strong>. Chilled water from a central plant cools your property through 
              fan coil units. You pay for usage (measured in Refrigeration Ton hours) rather than 
              owning the equipment. District cooling is separate from your <a href="https://www.dewa.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DEWA</a> electricity bill.
            </p>
          </section>

          <section id="maintenance-checklist">
            <h2>Regular Maintenance Checklist</h2>
            <p>
              Follow this maintenance schedule to keep your AC running efficiently:
            </p>

            <h3>Monthly Tasks (DIY)</h3>
            <ul>
              <li>Clean or replace air filters</li>
              <li>Check thermostat settings and batteries</li>
              <li>Inspect vents for blockages</li>
              <li>Ensure outdoor unit is clear of debris</li>
              <li>Check for unusual noises or odors</li>
            </ul>

            <h3>Quarterly Professional Service</h3>
            <ul>
              <li>Deep cleaning of indoor and outdoor coils</li>
              <li>Check and top up refrigerant levels</li>
              <li>Inspect electrical connections</li>
              <li>Clean condensate drain lines</li>
              <li>Check compressor operation</li>
              <li>Lubricate moving parts</li>
              <li>Test overall system performance</li>
            </ul>

            <h3>Annual Comprehensive Service</h3>
            <ul>
              <li>Complete system inspection</li>
              <li>Duct cleaning (for central AC)</li>
              <li>Check ductwork for leaks</li>
              <li>Inspect insulation</li>
              <li>Calibrate thermostat</li>
              <li>Review energy consumption patterns</li>
            </ul>
          </section>

          <section id="finding-technicians">
            <h2>Finding AC Technicians</h2>
            <p>
              Finding reliable AC technicians in Dubai requires due diligence:
            </p>
            <ul>
              <li><strong>Building Maintenance:</strong> Many buildings have approved maintenance 
              providers—check with your building management first</li>
              <li><strong>Service Apps:</strong> Platforms like ServiceMarket, Mr. Fixer, and HomeGenie 
              connect you with vetted technicians</li>
              <li><strong>Manufacturer Service:</strong> For warranty work or specific brands, use 
              authorized service centers (e.g., Samsung, LG, Daikin service centers)</li>
              <li><strong>Recommendations:</strong> Ask neighbors or your real estate agent for 
              trusted recommendations</li>
            </ul>
            <p>
              <strong>Tip:</strong> Always ask for RERA-approved (for building maintenance) or 
              manufacturer-certified technicians. Get a written quote before work begins and 
              request a service report after completion.
            </p>
          </section>

          <section id="maintenance-contracts">
            <h2>AC Maintenance Contracts</h2>
            <p>
              Annual Maintenance Contracts (AMCs) provide peace of mind and often cost less than 
              ad-hoc servicing. Here is what to expect:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contract Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost (Annual)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coverage</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Basic</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 400-600</td>
                    <td className="px-4 py-3 text-sm text-gray-500">2-4 routine services, filter cleaning</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Standard</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 600-1,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Quarterly services, minor repairs, priority response</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Comprehensive</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 1,000-1,500</td>
                    <td className="px-4 py-3 text-sm text-gray-500">All services, parts replacement, emergency calls</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Note:</strong> Prices vary based on the number of AC units, property size, 
              and AC type. Villas with multiple units will be at the higher end of these ranges.
            </p>
          </section>

          <section id="common-problems">
            <h2>Common AC Problems</h2>
            <p>
              Be aware of these common AC issues in Dubai:
            </p>

            <h3>Refrigerant Leaks</h3>
            <p>
              Symptoms include reduced cooling, ice formation on coils, and hissing sounds. 
              Refrigerant leaks require professional repair and recharging. Do not ignore this 
              issue as it damages the compressor.
            </p>

            <h3>Compressor Problems</h3>
            <p>
              The compressor is the heart of your AC. Common issues include overheating, electrical 
              failures, and mechanical wear. Compressor replacement is expensive (AED 2,000-5,000+), 
              making preventive maintenance crucial.
            </p>

            <h3>Drainage Issues</h3>
            <p>
              Clogged condensate drains cause water leaks and can lead to mold growth. In Dubai&apos;s 
              dusty environment, drain lines should be flushed during each service visit.
            </p>

            <h3>Electrical Issues</h3>
            <p>
              Corroded wires, failed capacitors, and faulty contactors can cause AC failure. 
              These should only be diagnosed and repaired by qualified technicians.
            </p>

            <h3>Frozen Evaporator Coils</h3>
            <p>
              Caused by restricted airflow (dirty filters) or low refrigerant. Turn off the AC 
              to let ice melt, then address the underlying cause.
            </p>
          </section>

          <section id="district-cooling-vs-split">
            <h2>District Cooling vs Split Units</h2>
            <p>
              Understanding the difference helps you manage costs and maintenance expectations:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">District Cooling</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Split Units</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ownership</td>
                    <td className="px-4 py-3 text-sm text-gray-500">You pay for usage; provider owns equipment</td>
                    <td className="px-4 py-3 text-sm text-gray-500">You own the AC units</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Billing</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Based on consumption (RT hours)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Electricity via DEWA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Maintenance</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Handled by Empower/Emicool</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Your responsibility</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Common Areas</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Downtown Dubai, Business Bay, Dubai Marina</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Villas, older buildings, JVC</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Repair Costs</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Included in service agreement</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Paid by owner</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Tip for Renters:</strong> Check your tenancy contract to understand who is 
              responsible for AC maintenance and district cooling bills. See our <Link href="/guides/how-to-rent-property-in-uae" className="text-primary-600 hover:underline">renting guide</Link> for more on tenant responsibilities.
            </p>
          </section>

          <section id="reducing-ac-bills">
            <h2>Tips for Reducing AC Bills</h2>
            <p>
              With AC accounting for 60-70% of electricity bills in Dubai, these strategies can 
              significantly reduce costs:
            </p>
            <ul>
              <li><strong>Set thermostat to 24°C:</strong> Each degree lower increases energy use 
              by 3-5%. 24°C is comfortable and efficient.</li>
              <li><strong>Clean filters monthly:</strong> Dirty filters make your AC work harder, 
              using more electricity.</li>
              <li><strong>Seal windows and doors:</strong> Prevent cool air from escaping and hot 
              air from entering. Check for gaps around windows and doors.</li>
              <li><strong>Use curtains and blinds:</strong> Block direct sunlight, especially on 
              south and west-facing windows.</li>
              <li><strong>Run ceiling fans:</strong> Fans allow you to set the AC a few degrees 
              higher while maintaining comfort.</li>
              <li><strong>Zone cooling:</strong> Close vents in unused rooms to focus cooling where 
              needed.</li>
              <li><strong>Schedule maintenance:</strong> A well-maintained AC is 15-25% more efficient.</li>
              <li><strong>Upgrade to inverter AC:</strong> Inverter technology adjusts compressor 
              speed to demand, saving 30-50% on electricity.</li>
              <li><strong>Use programmable thermostats:</strong> Reduce cooling when you&apos;re away 
              and pre-cool before you return.</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-06-15"
          dateModified="2025-01-20"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
