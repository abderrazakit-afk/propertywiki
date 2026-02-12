import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Editorial Policy - PropertyWiki',
  description: 'PropertyWiki editorial standards ensuring accurate real estate content.',
  alternates: {
    canonical: 'https://propertywiki.ai/editorial-policy',
    languages: {
      'en': 'https://propertywiki.ai/editorial-policy',
      'ar': 'https://propertywiki.ai/ar/editorial-policy',
      'x-default': 'https://propertywiki.ai/editorial-policy',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/editorial-policy',
    title: 'Editorial Policy - PropertyWiki',
    description: 'PropertyWiki editorial standards ensuring accurate real estate content.',
  },
}

export default function EditorialPolicyPage() {
  const breadcrumbs = [{ name: 'Editorial Policy', href: '/editorial-policy' }]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Editorial Policy
        </h1>
        <p className="text-xl text-gray-600">
          Our commitment to accuracy, transparency, and quality content.
        </p>
      </header>

      <div className="article-content">
        <section className="mb-8">
          <h2>Our Standards</h2>
          <p>
            PropertyWiki is committed to providing accurate, unbiased, and comprehensive 
            real estate information. Our editorial standards ensure that every piece of 
            content meets the highest quality benchmarks.
          </p>
        </section>

        <section className="mb-8">
          <h2>Accuracy</h2>
          <p>
            All content is fact-checked using multiple authoritative sources. Market data, 
            regulations, and statistics are verified before publication and regularly 
            reviewed for accuracy.
          </p>
          <ul>
            <li>Primary sources are preferred over secondary reporting</li>
            <li>Data is attributed to its original source</li>
            <li>Corrections are made promptly when errors are identified</li>
            <li>Articles include &quot;Last Updated&quot; dates for transparency</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Author Expertise</h2>
          <p>
            Our content is created by qualified professionals with relevant experience:
          </p>
          <ul>
            <li>Authors must have verifiable expertise in their subject area</li>
            <li>Author credentials are displayed on all articles</li>
            <li>Content undergoes editorial review before publication</li>
            <li>External contributors are vetted for expertise</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Independence</h2>
          <p>
            Editorial independence is paramount to our mission:
          </p>
          <ul>
            <li>No paid placements in editorial content</li>
            <li>Sponsored content (if any) is clearly labeled</li>
            <li>Recommendations are based on merit, not compensation</li>
            <li>We do not accept payment for reviews or coverage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Updates and Corrections</h2>
          <p>
            Real estate markets change constantly. We maintain content accuracy through:
          </p>
          <ul>
            <li>Regular review of published content</li>
            <li>Prompt correction of identified errors</li>
            <li>Transparent disclosure of significant updates</li>
            <li>Clear dating of content currency</li>
          </ul>
        </section>

        <section>
          <h2>Feedback</h2>
          <p>
            We welcome feedback on our content. If you believe information is inaccurate 
            or outdated, please contact us at <strong>editorial@propertywiki.ai</strong>.
          </p>
        </section>
      </div>

      <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/about" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Company</span>
            <p className="font-medium text-gray-900 mt-1">About PropertyWiki</p>
          </Link>
          <Link href="/contact" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Contact</span>
            <p className="font-medium text-gray-900 mt-1">Get in Touch</p>
          </Link>
          <Link href="/privacy" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Policy</span>
            <p className="font-medium text-gray-900 mt-1">Privacy Policy</p>
          </Link>
          <Link href="/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Guide</span>
            <p className="font-medium text-gray-900 mt-1">How to Buy Property in Dubai</p>
          </Link>
          <Link href="/locations/dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Location</span>
            <p className="font-medium text-gray-900 mt-1">Dubai Property Areas</p>
          </Link>
          <Link href="/blog" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Blog</span>
            <p className="font-medium text-gray-900 mt-1">Property Blog & Market News</p>
          </Link>
        </div>
      </nav>
    </div>
  )
}
