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
  title: 'DEWA & Cooling Charges Comparison Dubai',
  description: 'Compare DEWA electricity tariffs, district cooling (Empower/Emicool) vs individual AC costs in Dubai. Monthly estimates by apartment size and area.',
  keywords: ['DEWA charges Dubai', 'cooling charges Dubai', 'Empower Dubai', 'Emicool Dubai', 'district cooling Dubai', 'chiller charges Dubai'],
  alternates: {
    canonical: 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison',
    languages: {
      'en': 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison',
      'ar': 'https://propertywiki.ai/ar/guides/dewa-cooling-charges-comparison',
      'x-default': 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison',
    title: 'DEWA & Cooling Charges Comparison Dubai',
    description: 'Compare DEWA tariffs, district cooling vs individual AC costs by apartment size and area in Dubai.',
    type: 'article',
    publishedTime: '2025-09-15',
    modifiedTime: '2026-02-05',
  },
}

const tableOfContents = [
  { id: 'overview', title: 'Understanding Dubai Utility Costs', level: 2 },
  { id: 'dewa-tariffs', title: 'DEWA Electricity Tariff Breakdown', level: 2 },
  { id: 'dewa-water', title: 'DEWA Water Tariff Breakdown', level: 2 },
  { id: 'district-cooling', title: 'District Cooling: Empower & Emicool', level: 2 },
  { id: 'individual-ac', title: 'Individual AC vs District Cooling', level: 2 },
  { id: 'monthly-estimates', title: 'Monthly Cost Estimates by Size', level: 2 },
  { id: 'area-comparison', title: 'Cooling Costs by Area', level: 2 },
  { id: 'saving-tips', title: 'Tips to Reduce Utility Bills', level: 2 },
]

const faqs = [
  {
    question: 'How much does DEWA cost per month in Dubai?',
    answer: 'Average monthly DEWA bills (electricity + water, excluding cooling) range from AED 300-500 for a studio, AED 500-800 for a 1-bedroom, AED 700-1,200 for a 2-bedroom apartment, and AED 1,500-3,000 for a villa. Summer months are significantly higher due to AC usage.',
  },
  {
    question: 'What is district cooling and how does it work?',
    answer: 'District cooling is a centralized AC system where chilled water is produced at a central plant and piped to buildings. Companies like Empower and Emicool operate these systems. You pay based on your consumption (BTU/ton-hour). It is generally more energy-efficient than individual AC units.',
  },
  {
    question: 'Is Empower more expensive than individual AC?',
    answer: 'Empower district cooling typically costs AED 300-800 per month for an apartment. Individual AC powered through DEWA can cost AED 200-600 in electricity but may result in higher total costs when factoring in AC maintenance and replacement. District cooling is usually more cost-effective for larger units.',
  },
  {
    question: 'What areas in Dubai use district cooling?',
    answer: 'Major district cooling areas include Dubai Marina, JBR, JLT, Downtown Dubai, Business Bay, Palm Jumeirah, and Dubai Hills. These areas are primarily served by Empower or Emicool. Older areas and villa communities typically use individual AC units powered through DEWA.',
  },
  {
    question: 'Do I pay cooling charges separately from DEWA?',
    answer: 'If your building uses district cooling (Empower/Emicool), you pay cooling charges separately from your DEWA bill. If your building has individual AC units, the electricity to run them is included in your DEWA bill. In chiller-free buildings, cooling is included in your service charge.',
  },
]

const relatedArticles = [
  {
    title: 'DEWA Electricity & Water Guide',
    href: '/guides/dewa-electricity-water-guide',
    category: 'Guide',
    description: 'Complete guide to DEWA connections, tariffs, and managing your utility bills.',
  },
  {
    title: 'Service Charges by Area in Dubai',
    href: '/guides/service-charges-by-area-dubai',
    category: 'Guide',
    description: 'Compare service charges per sq ft across Dubai communities.',
  },
  {
    title: 'Maintenance Cost by Community in Dubai',
    href: '/guides/maintenance-cost-by-community-dubai',
    category: 'Guide',
    description: 'Annual maintenance costs for different property types and communities.',
  },
  {
    title: 'Hidden Costs of Buying Property in Dubai',
    href: '/guides/hidden-costs-buying-property-dubai',
    category: 'Guide',
    description: 'All the fees and costs you need to budget for when buying property.',
  },
]

export default function DEWACoolingChargesComparisonPage() {
  const breadcrumbs = [
    { name: 'Guides', href: '/guides' },
    { name: 'DEWA & Cooling Charges Comparison', href: '/guides/dewa-cooling-charges-comparison' },
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
          title: 'DEWA & Cooling Charges Comparison Dubai - Complete Guide',
          description: 'Compare DEWA tariffs, district cooling vs individual AC costs by apartment size and area.',
          url: 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison',
          datePublished: '2025-09-15',
          dateModified: '2026-02-05',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Guides', url: 'https://propertywiki.ai/guides' },
          { name: 'DEWA & Cooling Charges Comparison', url: 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Cost Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            DEWA & Cooling Charges Comparison Dubai
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Utility and cooling bills are a significant monthly expense in Dubai, especially during 
            summer. Whether you&apos;re paying DEWA directly or through a district cooling provider, 
            here&apos;s what to expect and how to keep costs down.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Understanding Dubai Utility Costs</h2>
            <p>
              In Dubai, your utility costs break down into three main categories: electricity 
              (DEWA), water (DEWA), and cooling (either DEWA-powered AC, district cooling from 
              Empower/Emicool, or included in your <Link href="/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">service charges</Link> if 
              you&apos;re in a chiller-free building).
            </p>
            <p>
              For a detailed guide on setting up your <Link href="/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">DEWA connection</Link> and 
              understanding the basics, check our dedicated DEWA guide. This page focuses 
              specifically on comparing costs and helping you understand what you&apos;ll 
              pay based on your property type and location.
            </p>
            <p>
              The difference between a well-located chiller-free apartment and a chiller-paid 
              one in the same area can be AED 5,000-10,000 per year in cooling costs alone. 
              That&apos;s a meaningful amount that should factor into your purchasing decision.
            </p>
          </section>

          <section id="dewa-tariffs">
            <h2>DEWA Electricity Tariff Breakdown</h2>
            <p>
              DEWA uses a slab-based tariff system — the more you consume, the higher the 
              rate per kilowatt-hour (kWh). Here are the current residential rates:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Consumption (kWh/month)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate (AED/kWh)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">+ Fuel Surcharge</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">0 – 2,000 kWh</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.23</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.065</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">2,001 – 4,000 kWh</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.28</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.065</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">4,001 – 6,000 kWh</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.32</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.065</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Above 6,000 kWh</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.38</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.065</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              On top of the base tariff, DEWA adds a fuel surcharge and a 5% municipality 
              housing fee (calculated on 5% of your annual rental value if you&apos;re a tenant, 
              or a fixed amount for owners). The fuel surcharge is currently AED 0.065/kWh 
              but can fluctuate with global energy prices.
            </p>
          </section>

          <section id="dewa-water">
            <h2>DEWA Water Tariff Breakdown</h2>
            <p>
              Water is also billed on a slab system, charged per imperial gallon:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Consumption (Gallons/month)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate (AED/gallon)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">0 – 6,000 gallons</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.03</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">6,001 – 12,000 gallons</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.035</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Above 12,000 gallons</td>
                    <td className="px-4 py-3 text-sm text-gray-500">0.04</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Water bills are typically much lower than electricity — averaging AED 50-200 
              per month for apartments and AED 200-600 for villas (higher if you have a 
              garden with irrigation).
            </p>
          </section>

          <section id="district-cooling">
            <h2>District Cooling: Empower & Emicool</h2>
            <p>
              District cooling is a centralized system where a plant produces chilled water 
              and distributes it to buildings through underground pipes. Your apartment&apos;s 
              fan coil units use this chilled water for AC instead of having individual 
              compressors on each unit.
            </p>
            <h3>Empower</h3>
            <p>
              <a href="https://www.empower.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Empower</a> (Emirates 
              Central Cooling Systems) is Dubai&apos;s largest district cooling provider, 
              serving Dubai Marina, JBR, JLT, Business Bay, Downtown, Palm Jumeirah, and 
              several other areas. Charges are based on:
            </p>
            <ul>
              <li><strong>Demand charge:</strong> Fixed monthly fee based on your unit&apos;s registered cooling capacity (ton of refrigeration)</li>
              <li><strong>Consumption charge:</strong> Variable fee based on actual usage (AED per ton-hour)</li>
              <li><strong>Monthly typical range:</strong> AED 300-800 for a 1-2 bedroom apartment</li>
            </ul>
            <h3>Emicool</h3>
            <p>
              <a href="https://www.emicool.net" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Emicool</a> serves 
              areas like International City, Dubai Silicon Oasis, and parts of Mirdif. Their 
              pricing structure is similar to Empower with demand and consumption components.
            </p>
            <p>
              Both companies require a security deposit (typically AED 2,000-5,000) when you 
              open an account, which is refundable when you close it.
            </p>
          </section>

          <section id="individual-ac">
            <h2>Individual AC vs District Cooling</h2>
            <p>
              Here&apos;s the real question most buyers ask: which system is cheaper? The 
              honest answer is — it depends on your usage pattern.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Factor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">District Cooling</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Individual AC (DEWA)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Monthly cost (1BR)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 300–500</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 200–400 (electricity)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Summer spike</td>
                    <td className="px-4 py-3 text-sm text-gray-500">30-50% increase</td>
                    <td className="px-4 py-3 text-sm text-gray-500">50-100% increase</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Maintenance cost</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Minimal (provider handles)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 500-2,000/year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Replacement risk</td>
                    <td className="px-4 py-3 text-sm text-gray-500">None (not your equipment)</td>
                    <td className="px-4 py-3 text-sm text-gray-500">AED 3,000-8,000 per unit</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Noise level</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Very quiet</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Can be noisy (older units)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Energy efficiency</td>
                    <td className="px-4 py-3 text-sm text-gray-500">40% more efficient</td>
                    <td className="px-4 py-3 text-sm text-gray-500">Standard efficiency</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For most residents who use AC consistently, district cooling works out to a 
              similar or slightly lower total annual cost when you factor in maintenance 
              savings. However, if you travel frequently and keep the AC off for months, 
              individual AC is cheaper because you only pay DEWA for what you use.
            </p>
          </section>

          <section id="monthly-estimates">
            <h2>Monthly Cost Estimates by Size</h2>
            <p>
              Here are realistic monthly utility and cooling cost estimates for different 
              property sizes in Dubai (including DEWA + cooling, excluding service charges):
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property Size</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Winter (AED/mo)</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Summer (AED/mo)</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Annual Avg (AED/mo)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Studio (400-500 sq ft)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">400–600</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">700–1,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">550–800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">1BR Apt (700-900 sq ft)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">600–900</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,000–1,500</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">800–1,200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">2BR Apt (1,000-1,400 sq ft)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">800–1,200</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,400–2,200</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,100–1,700</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">3BR Apt (1,500-2,000 sq ft)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,000–1,600</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,800–3,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,400–2,300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">3BR Villa (3,000-4,000 sq ft)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">1,500–2,500</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">3,000–5,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">2,200–3,800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">5BR Villa (5,000+ sq ft)</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">2,500–4,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">5,000–8,000</td>
                    <td className="px-4 py-3 text-sm text-gray-500 text-right">3,800–6,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="area-comparison">
            <h2>Cooling Costs by Area</h2>
            <p>
              Not all areas cost the same to cool. Building design, insulation quality, 
              sun exposure, and the cooling system all play a role:
            </p>
            <ul>
              <li><strong>Dubai Marina (Empower district cooling):</strong> AED 400-700/month for a 1BR — well-insulated newer towers help</li>
              <li><strong>JBR (Empower district cooling):</strong> AED 450-750/month — beachfront buildings get more sun exposure</li>
              <li><strong>Downtown Dubai (Empower):</strong> AED 400-650/month for a 1BR — modern glass facades are better insulated</li>
              <li><strong>Business Bay (Empower):</strong> AED 350-600/month — varies significantly by building</li>
              <li><strong>JVC (Individual AC/DEWA):</strong> AED 250-500/month DEWA electricity for cooling — some newer buildings are chiller-free</li>
              <li><strong>Arabian Ranches (Individual AC):</strong> AED 1,500-3,000/month in summer — large villas with multiple AC units</li>
              <li><strong>Palm Jumeirah (Empower):</strong> AED 500-900/month apartments; villas can exceed AED 2,000-4,000/month</li>
            </ul>
          </section>

          <section id="saving-tips">
            <h2>Tips to Reduce Utility Bills</h2>
            <p>
              Dubai&apos;s climate means you can&apos;t avoid utility costs entirely, but 
              you can be smart about them:
            </p>
            <ul>
              <li><strong>Set AC to 24°C:</strong> Each degree lower adds roughly 5-8% to your cooling bill. 24°C is comfortable and efficient</li>
              <li><strong>Use timers:</strong> Don&apos;t cool empty rooms. Use programmable thermostats to reduce AC when you&apos;re out</li>
              <li><strong>Maintain your AC:</strong> Clean filters monthly and service units twice a year. Dirty filters increase energy consumption by 15-20%</li>
              <li><strong>Use LED lighting:</strong> Replace all bulbs with LEDs — they use 75% less energy and last 25 times longer</li>
              <li><strong>Choose chiller-free:</strong> When buying, prioritize chiller-free buildings for predictable and usually lower cooling costs</li>
              <li><strong>Install smart plugs:</strong> Turn off standby devices that silently consume power 24/7</li>
              <li><strong>Use DEWA&apos;s smart app:</strong> Monitor your consumption in real-time and identify usage spikes</li>
              <li><strong>Window treatments:</strong> Good curtains or blinds on sun-facing windows can reduce cooling load by 10-15%</li>
            </ul>
            <p>
              When calculating total property ownership costs, always combine your <Link href="/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">service charges</Link>, 
              DEWA bills, cooling charges, and <Link href="/guides/maintenance-cost-by-community-dubai" className="text-primary-600 hover:underline">maintenance costs</Link> to 
              get the full picture. For investors, these ongoing costs directly impact your 
              net <Link href="/guides/highest-rental-yield-areas-dubai" className="text-primary-600 hover:underline">rental yield</Link>.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2025-09-15"
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
            <Link href="/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Downtown Dubai</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
            </Link>
            <Link href="/guides/maintenance-cost-by-community-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Maintenance Cost by Community in Dubai</p>
            </Link>
            <Link href="/guides/service-charges-by-area-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Service Charges by Area in Dubai</p>
            </Link>
            <Link href="/guides/dewa-electricity-water-guide" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">DEWA Guide - Dubai Electricity &amp; Water Setup</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}