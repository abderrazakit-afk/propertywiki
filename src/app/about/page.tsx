import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About Us - PropertyWiki',
  description: 'Learn about PropertyWiki and the team behind Dubai real estate knowledge hub.',
  alternates: {
    canonical: 'https://propertywiki.ai/about',
    languages: {
      'en': 'https://propertywiki.ai/about',
      'ar': 'https://propertywiki.ai/ar/about',
      'x-default': 'https://propertywiki.ai/about',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/about',
    title: 'About Us - PropertyWiki',
    description: 'Learn about PropertyWiki and the team behind Dubai real estate knowledge hub.',
  },
}

export default function AboutPage() {
  const breadcrumbs = [{ name: 'About', href: '/about' }]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          About PropertyWiki
        </h1>
        <p className="text-xl text-gray-600">
          Your trusted source for comprehensive real estate knowledge.
        </p>
      </header>

      <div className="article-content">
        <section className="mb-12">
          <h2>Our Mission</h2>
          <p>
            PropertyWiki was founded with a simple mission: to democratize access to quality 
            real estate information. We believe that everyone deserves access to the same 
            knowledge that industry professionals use to make informed property decisions.
          </p>
          <p>
            Unlike traditional real estate websites focused on listings and sales, PropertyWiki 
            is an educational resource first. We provide in-depth explanations, unbiased analysis, 
            and practical guides without pushing any particular agenda.
          </p>
        </section>

        <section className="mb-12">
          <h2>What We Do</h2>
          <ul>
            <li><strong>Definitions:</strong> Clear explanations of real estate terminology</li>
            <li><strong>Location Guides:</strong> In-depth analysis of property markets worldwide</li>
            <li><strong>Buying Guides:</strong> Step-by-step instructions for property purchases</li>
            <li><strong>Investment Insights:</strong> Strategic advice for property investors</li>
            <li><strong>Market Analysis:</strong> Regular updates on market trends and opportunities</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>Our Editorial Standards</h2>
          <p>
            Every article on PropertyWiki is written or reviewed by experienced real estate 
            professionals. We adhere to strict editorial standards:
          </p>
          <ul>
            <li>Factual accuracy verified through multiple sources</li>
            <li>Regular updates to reflect current market conditions</li>
            <li>Clear disclosure of any limitations or assumptions</li>
            <li>No sponsored content or paid placements in editorial</li>
            <li>Transparency about author qualifications and expertise</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or want to contribute? We&apos;d love to hear from you. 
            Reach out to our editorial team at <strong>editorial@propertywiki.ai</strong>.
          </p>
        </section>
      </div>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
          Start Exploring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/guides/how-to-buy-property-in-dubai" className="group luxury-card p-5">
            <span className="inline-block text-xs font-medium text-primary-600 uppercase tracking-wider mb-2">Guide</span>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">How to Buy Property in Dubai</h3>
            <p className="text-sm text-gray-600 line-clamp-2">Complete step-by-step guide for foreign buyers.</p>
          </Link>
          <Link href="/definitions/freehold-property" className="group luxury-card p-5">
            <span className="inline-block text-xs font-medium text-primary-600 uppercase tracking-wider mb-2">Definition</span>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">What is Freehold Property?</h3>
            <p className="text-sm text-gray-600 line-clamp-2">Understand freehold ownership in Dubai.</p>
          </Link>
          <Link href="/locations/dubai/dubai-marina" className="group luxury-card p-5">
            <span className="inline-block text-xs font-medium text-primary-600 uppercase tracking-wider mb-2">Location</span>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">Dubai Marina Guide</h3>
            <p className="text-sm text-gray-600 line-clamp-2">Explore Dubai&apos;s premier waterfront community.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
