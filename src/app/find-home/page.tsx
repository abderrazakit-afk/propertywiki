import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FindHomeForm from '@/components/find-home/FindHomeForm'

export const metadata: Metadata = {
  title: 'Find Your Dream Home in Dubai | AI Property Report | PropertyWiki',
  description: 'Get a free AI-powered property report analyzing 500,000+ real Dubai transactions. Discover the best areas, prices, rental yields, and investment insights tailored to your budget and lifestyle.',
  alternates: {
    canonical: 'https://propertywiki.ai/find-home',
    languages: { 'ar': 'https://propertywiki.ai/ar/find-home', 'en': 'https://propertywiki.ai/find-home', 'x-default': 'https://propertywiki.ai/find-home' },
  },
  openGraph: {
    title: 'Find Your Dream Home in Dubai | AI Property Report',
    description: 'Free AI-powered property report analyzing 500,000+ real Dubai transactions.',
    url: 'https://propertywiki.ai/find-home',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'How does the AI property report work?',
    answer: 'We analyze over 500,000 real property transactions from the Dubai Land Department to provide data-driven recommendations based on your budget and preferences.',
  },
  {
    question: 'Is the property report really free?',
    answer: 'Yes, you get 3 free reports per day. Each report is personalized to your specific requirements.',
  },
  {
    question: 'What data sources do you use?',
    answer: 'Our database includes official Dubai Land Department transaction records, covering both sales and rental data across all major communities.',
  },
  {
    question: 'How accurate are the price estimates?',
    answer: 'Our prices are based on actual completed transactions, not listing prices. This gives you a realistic view of what properties actually sell and rent for.',
  },
  {
    question: 'Can I use this for investment decisions?',
    answer: 'Our reports provide valuable data points including rental yields, price trends, and area comparisons. We recommend also consulting with licensed real estate advisors for investment decisions.',
  },
  {
    question: 'Which areas of Dubai are covered?',
    answer: 'We cover all major Dubai communities including Dubai Marina, Downtown Dubai, JVC, Business Bay, Palm Jumeirah, and 50+ more areas.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const breadcrumbs = [{ name: 'Find Home', href: '/find-home' }]

export default function FindHomePage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <FindHomeForm />

        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">Set Your Budget &amp; Preferences</h3>
              <p className="text-gray-600 text-sm">Tell us your budget range and describe your ideal property.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">Verify Your Email</h3>
              <p className="text-gray-600 text-sm">Quick email verification to receive your personalized report.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">Get Your AI Report</h3>
              <p className="text-gray-600 text-sm">Our AI analyzes 500,000+ real transactions to find your perfect match.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">What You&apos;ll Get in Your Report</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-gray-600 text-sm">Transaction data, average prices, and market trends for your budget range.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Top Area Recommendations</h3>
              <p className="text-gray-600 text-sm">3-5 best-matching areas with detailed metrics and insights.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Price Insights</h3>
              <p className="text-gray-600 text-sm">Buy/rent ranges, price per sqm, and service charges by area.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Rental Yield Data</h3>
              <p className="text-gray-600 text-sm">Annual yields and rental demand analysis for each recommended area.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Cost Breakdown</h3>
              <p className="text-gray-600 text-sm">DLD fees, agency fees, and total purchase costs calculated for you.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Investment Outlook</h3>
              <p className="text-gray-600 text-sm">Capital appreciation potential and growth projections for your areas.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-serif font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </div>
  )
}