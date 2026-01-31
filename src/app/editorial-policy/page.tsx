import { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Editorial Policy - PropertyWiki',
  description: 'PropertyWiki editorial standards and guidelines. Learn about our commitment to accuracy, transparency, and quality content.',
  alternates: {
    canonical: 'https://propertywiki.ai/editorial-policy',
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
    </div>
  )
}
