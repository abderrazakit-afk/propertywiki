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
  title: 'Off-Plan Investment Risks - Complete Guide',
  description: 'A balanced analysis of off-plan property investment risks and rewards. Learn how to evaluate developers, payment plans, and protect your investment.',
  keywords: ['off-plan property risks', 'pre-construction investment', 'Dubai off-plan', 'property investment risks'],
  alternates: {
    canonical: 'https://propertywiki.ai/blog/off-plan-investment-risks',
    languages: {
      'en': 'https://propertywiki.ai/blog/off-plan-investment-risks',
      'ar': 'https://propertywiki.ai/ar/blog/off-plan-investment-risks',
      'x-default': 'https://propertywiki.ai/blog/off-plan-investment-risks',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/blog/off-plan-investment-risks',
    title: 'Off-Plan Investment Risks - Complete Guide',
    description: 'A balanced analysis of off-plan property investment risks and rewards.',
    type: 'article',
    publishedTime: '2025-01-10',
    modifiedTime: '2025-01-10',
  },
}

const tableOfContents = [
  { id: 'what-is-offplan', title: 'What is Off-Plan Property?', level: 2 },
  { id: 'benefits', title: 'Benefits of Off-Plan Investment', level: 2 },
  { id: 'risks', title: 'Key Risks to Consider', level: 2 },
  { id: 'risk-mitigation', title: 'Risk Mitigation Strategies', level: 2 },
  { id: 'developer-checklist', title: 'Developer Due Diligence Checklist', level: 2 },
  { id: 'payment-structures', title: 'Understanding Payment Structures', level: 2 },
]

const faqs = [
  {
    question: 'Is buying off-plan in Dubai safe?',
    answer: 'Off-plan purchases in Dubai are regulated by the Real Estate Regulatory Agency (RERA), which requires developers to register projects and maintain escrow accounts. However, all property investments carry risks, so thorough due diligence is essential.',
  },
  {
    question: 'What happens if the developer delays completion?',
    answer: 'Dubai regulations allow developers a grace period for completion. If delays exceed this period, buyers may have the right to cancel and receive a refund. The specific terms depend on your Sales and Purchase Agreement (SPA).',
  },
  {
    question: 'Can I sell my off-plan property before completion?',
    answer: 'Yes, most developers allow resale of off-plan properties after a certain percentage of the purchase price has been paid (typically 30-40%). This is subject to developer approval and a transfer fee.',
  },
  {
    question: 'What is an escrow account?',
    answer: 'An escrow account is a regulated bank account where buyer payments are held. Developers can only access these funds according to construction milestones verified by independent consultants.',
  },
]

const relatedArticles = [
  {
    title: 'What is Off-Plan Property?',
    href: '/definitions/off-plan-property',
    category: 'Definition',
    description: 'Complete definition and explanation of off-plan property purchases.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai.',
  },
  {
    title: 'Dubai Market Outlook 2025',
    href: '/blog/dubai-market-outlook-2025',
    category: 'Blog',
    description: 'Analysis of Dubai\'s property market and 2025 predictions.',
  },
]

export default function OffPlanInvestmentRisks() {
  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: 'Off-Plan Investment Risks', href: '/blog/off-plan-investment-risks' },
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
          title: 'Understanding Off-Plan Investment Risks',
          description: 'A balanced analysis of off-plan property investment risks and rewards.',
          url: 'https://propertywiki.ai/blog/off-plan-investment-risks',
          datePublished: '2025-01-10',
          dateModified: '2025-01-10',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Blog', url: 'https://propertywiki.ai/blog' },
          { name: 'Off-Plan Investment Risks', url: 'https://propertywiki.ai/blog/off-plan-investment-risks' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Investment
            </span>
            <span className="text-gray-400">|</span>
            <time className="text-sm text-gray-500">January 10, 2025</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Understanding Off-Plan Investment Risks
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A balanced look at the risks and rewards of investing in off-plan property, 
            with strategies to protect your investment.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/blog/off-plan-risks.jpg"
            alt="Architectural blueprints and property development plans representing off-plan investment considerations"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="what-is-offplan">
            <h2>What is Off-Plan Property?</h2>
            <p>
              <Link href="/definitions/off-plan-property">Off-plan property</Link> refers to 
              real estate purchased before construction is completed, often when the project 
              is still in the planning or early development stages. Buyers commit based on 
              architectural plans, renderings, and developer specifications rather than a 
              finished product.
            </p>
            <p>
              In Dubai, off-plan sales account for approximately 55% of all residential 
              transactions, making it a significant part of the market. While off-plan 
              purchases can offer attractive opportunities, they also come with unique 
              risks that buyers must understand.
            </p>
          </section>

          <section id="benefits">
            <h2>Benefits of Off-Plan Investment</h2>
            <p>
              Before examining risks, it&apos;s important to understand why off-plan properties 
              attract investors:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Benefit</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Description</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Typical Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Lower Entry Price</td>
                    <td className="border border-gray-200 px-4 py-3">Launch prices are often below market value for completed properties</td>
                    <td className="border border-gray-200 px-4 py-3">10-20% below comparable ready units</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Payment Plans</td>
                    <td className="border border-gray-200 px-4 py-3">Spread payments over construction period (2-4 years)</td>
                    <td className="border border-gray-200 px-4 py-3">Pay 10-20% upfront, rest in installments</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Capital Appreciation</td>
                    <td className="border border-gray-200 px-4 py-3">Value typically increases as construction progresses</td>
                    <td className="border border-gray-200 px-4 py-3">15-30% by completion in strong markets</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Unit Selection</td>
                    <td className="border border-gray-200 px-4 py-3">First pick of best units, floors, and views</td>
                    <td className="border border-gray-200 px-4 py-3">Premium units available at launch</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Modern Specifications</td>
                    <td className="border border-gray-200 px-4 py-3">Latest designs, technology, and building standards</td>
                    <td className="border border-gray-200 px-4 py-3">Brand new with warranties</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="risks">
            <h2>Key Risks to Consider</h2>
            <p>
              Every investment carries risk. Off-plan purchases have specific risks that 
              require careful consideration:
            </p>

            <div className="my-8 space-y-4">
              <div className="p-6 border-l-4 border-red-400 bg-red-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Construction Delays</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Projects may take longer than promised, delaying rental income or personal use.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-red-600">Risk Level:</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-red-500 rounded" />
                    <div className="w-4 h-2 bg-red-500 rounded" />
                    <div className="w-4 h-2 bg-red-500 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                  </div>
                  <span className="text-xs text-gray-600">Moderate</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-red-600 bg-red-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Developer Default</h3>
                <p className="text-gray-700 text-sm mb-3">
                  In rare cases, developers may face financial difficulties or bankruptcy.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-red-600">Risk Level:</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-red-500 rounded" />
                    <div className="w-4 h-2 bg-red-500 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                  </div>
                  <span className="text-xs text-gray-600">Low (with due diligence)</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-orange-400 bg-orange-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Quality Differences</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Finished property may differ from showrooms or marketing materials.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-orange-600">Risk Level:</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-orange-500 rounded" />
                    <div className="w-4 h-2 bg-orange-500 rounded" />
                    <div className="w-4 h-2 bg-orange-500 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                  </div>
                  <span className="text-xs text-gray-600">Moderate</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Market Fluctuations</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Property values may decrease during the construction period.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-yellow-600">Risk Level:</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-yellow-500 rounded" />
                    <div className="w-4 h-2 bg-yellow-500 rounded" />
                    <div className="w-4 h-2 bg-yellow-500 rounded" />
                    <div className="w-4 h-2 bg-yellow-500 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                  </div>
                  <span className="text-xs text-gray-600">Moderate-High</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Oversupply Risk</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Too many similar units completing at once can affect rental yields and resale values.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-yellow-600">Risk Level:</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-yellow-500 rounded" />
                    <div className="w-4 h-2 bg-yellow-500 rounded" />
                    <div className="w-4 h-2 bg-yellow-500 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                    <div className="w-4 h-2 bg-gray-200 rounded" />
                  </div>
                  <span className="text-xs text-gray-600">Moderate</span>
                </div>
              </div>
            </div>
          </section>

          <section id="risk-mitigation">
            <h2>Risk Mitigation Strategies</h2>
            <p>
              Prudent investors can significantly reduce off-plan risks through careful planning:
            </p>

            <ul>
              <li>
                <strong>Choose Established Developers:</strong> Focus on developers with a 
                proven track record of on-time delivery and quality construction. 
                Tier-1 developers like Emaar, DAMAC, and Nakheel have stronger reputations.
              </li>
              <li>
                <strong>Verify RERA Registration:</strong> All off-plan projects in Dubai 
                must be registered with the Real Estate Regulatory Agency (RERA). 
                Verify registration before purchasing.
              </li>
              <li>
                <strong>Check Escrow Account:</strong> Ensure buyer payments go into a 
                RERA-approved escrow account, protecting funds from misuse.
              </li>
              <li>
                <strong>Review the SPA Carefully:</strong> Have a lawyer review the Sales 
                and Purchase Agreement, paying attention to completion dates, penalty 
                clauses, and specifications.
              </li>
              <li>
                <strong>Assess Location Fundamentals:</strong> Consider areas with 
                established infrastructure, transport links, and proven demand rather 
                than entirely new districts.
              </li>
              <li>
                <strong>Diversify:</strong> Don&apos;t put all your investment into a 
                single off-plan project. Spread risk across multiple properties or 
                investment types.
              </li>
            </ul>
          </section>

          <section id="developer-checklist">
            <h2>Developer Due Diligence Checklist</h2>
            <p>
              Before committing to an off-plan purchase, research the developer thoroughly:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Check Item</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">What to Look For</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Track Record</td>
                    <td className="border border-gray-200 px-4 py-3">5+ completed projects, on-time delivery history</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded"></span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">RERA Registration</td>
                    <td className="border border-gray-200 px-4 py-3">Valid project registration number verifiable on DLD website</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Financial Stability</td>
                    <td className="border border-gray-200 px-4 py-3">Strong parent company, access to project finance</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded"></span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Escrow Account</td>
                    <td className="border border-gray-200 px-4 py-3">RERA-approved escrow with reputable bank</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Previous Projects Quality</td>
                    <td className="border border-gray-200 px-4 py-3">Visit completed projects, read resident reviews</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded"></span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Market Reputation</td>
                    <td className="border border-gray-200 px-4 py-3">Check industry awards, agent recommendations, news coverage</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">SPA Terms</td>
                    <td className="border border-gray-200 px-4 py-3">Fair cancellation policy, clear specifications, delay penalties</td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="payment-structures">
            <h2>Understanding Payment Structures</h2>
            <p>
              Off-plan payment plans vary significantly between developers and projects. 
              Understanding the structure helps with financial planning:
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-6">Typical Payment Plan Comparison</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Standard Construction-Linked (60/40)</h4>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="h-8 bg-primary-500 rounded flex items-center justify-center text-white text-sm font-medium" style={{ width: '60%' }}>
                        60% During Construction
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="h-8 bg-primary-300 rounded flex items-center justify-center text-white text-sm font-medium" style={{ width: '100%' }}>
                        40% On Handover
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Developer Incentive Plan (20/80)</h4>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm font-medium" style={{ width: '20%' }}>
                        20%
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="h-8 bg-green-300 rounded flex items-center justify-center text-white text-sm font-medium" style={{ width: '100%' }}>
                        80% Post-Handover (2-5 years)
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Premium Location Plan (80/20)</h4>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm font-medium" style={{ width: '80%' }}>
                        80% During Construction
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="h-8 bg-orange-300 rounded flex items-center justify-center text-white text-sm font-medium" style={{ width: '100%' }}>
                        20% On Handover
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Payment Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Typical %</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">When Due</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Booking Fee</td>
                    <td className="border border-gray-200 px-4 py-3">5-10%</td>
                    <td className="border border-gray-200 px-4 py-3">Immediately</td>
                    <td className="border border-gray-200 px-4 py-3">Often non-refundable</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Down Payment</td>
                    <td className="border border-gray-200 px-4 py-3">10-20%</td>
                    <td className="border border-gray-200 px-4 py-3">Within 30 days</td>
                    <td className="border border-gray-200 px-4 py-3">Triggers SPA signing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Construction Milestones</td>
                    <td className="border border-gray-200 px-4 py-3">30-50%</td>
                    <td className="border border-gray-200 px-4 py-3">During construction</td>
                    <td className="border border-gray-200 px-4 py-3">Linked to verified progress</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">Handover Payment</td>
                    <td className="border border-gray-200 px-4 py-3">20-40%</td>
                    <td className="border border-gray-200 px-4 py-3">On completion</td>
                    <td className="border border-gray-200 px-4 py-3">Mortgage possible</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">Post-Handover</td>
                    <td className="border border-gray-200 px-4 py-3">0-60%</td>
                    <td className="border border-gray-200 px-4 py-3">1-5 years after</td>
                    <td className="border border-gray-200 px-4 py-3">Developer financing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Post-handover payment plans can be attractive but typically come with slightly 
              higher unit prices. Always calculate the total cost including any implied 
              interest or premium.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 italic">
            Disclaimer: This article provides general information about off-plan property 
            investment risks. It is not financial or legal advice. Always consult with 
            qualified professionals and conduct thorough due diligence before making 
            investment decisions.
          </p>
        </div>

        <FAQSection faqs={faqs} />
        <AuthorBox author={author} datePublished="2025-01-10" dateModified="2025-01-10" />
        <RelatedArticles articles={relatedArticles} />

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
              <p className="font-medium text-gray-900 mt-1">Business Bay</p>
            </Link>
            <Link href="/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">Off-Plan Property</p>
            </Link>
            <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
              <p className="font-medium text-gray-900 mt-1">Freehold Property</p>
            </Link>
            <Link href="/guides/best-off-plan-projects-under-1m" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Best Off-Plan Projects Under AED 1M</p>
            </Link>
            <Link href="/guides/safest-off-plan-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
              <p className="font-medium text-gray-900 mt-1">Safest Off-Plan Areas in Dubai</p>
            </Link>
            <Link href="/blog/dubai-market-outlook-2025" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Blog</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Market Outlook 2025</p>
            </Link>
            <Link href="/blog/golden-visa-changes-2025" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Blog</span>
              <p className="font-medium text-gray-900 mt-1">Golden Visa Changes 2025</p>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}
