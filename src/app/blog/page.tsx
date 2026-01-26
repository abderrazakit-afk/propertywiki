import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Blog - Latest Real Estate News & Analysis',
  description: 'Stay updated with the latest real estate news, market trends, and expert analysis from PropertyWiki\'s editorial team.',
  openGraph: {
    title: 'Property Blog - Latest Real Estate News & Analysis | PropertyWiki',
    description: 'Stay updated with the latest real estate news and market trends.',
  },
}

const posts = [
  {
    title: 'Dubai Property Market Outlook 2025',
    slug: 'dubai-market-outlook-2025',
    excerpt: 'Analysis of Dubai\'s property market performance and predictions for the coming year, including key drivers and areas to watch.',
    date: 'January 15, 2025',
    author: 'James Wilson',
    category: 'Market Analysis',
  },
  {
    title: 'Understanding Off-Plan Investment Risks',
    slug: 'off-plan-investment-risks',
    excerpt: 'A balanced look at the risks and rewards of investing in off-plan property, with strategies to protect your investment.',
    date: 'January 10, 2025',
    author: 'Sarah Chen',
    category: 'Investment',
  },
  {
    title: 'Golden Visa Changes: What Property Investors Need to Know',
    slug: 'golden-visa-changes-2025',
    excerpt: 'Recent updates to the UAE Golden Visa program and how they affect property investors seeking residency.',
    date: 'January 5, 2025',
    author: 'Ahmed Hassan',
    category: 'Regulations',
  },
]

export default function BlogPage() {
  const breadcrumbs = [{ name: 'Blog', href: '/blog' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Blog', url: 'https://propertywiki.com/blog' },
        ])}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Property Blog
          </h1>
          <p className="text-xl text-gray-600">
            Latest news, market analysis, and expert insights from the PropertyWiki editorial team.
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="luxury-card p-6">
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-sm text-gray-500">By {post.author}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
