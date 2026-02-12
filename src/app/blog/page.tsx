import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Property Blog - Real Estate News & Analysis',
  description: 'Stay updated with the latest real estate news, market trends, and expert analysis from PropertyWiki\'s editorial team.',
  alternates: {
    canonical: 'https://propertywiki.ai/blog',
    languages: {
      'en': 'https://propertywiki.ai/blog',
      'ar': 'https://propertywiki.ai/ar/blog',
      'x-default': 'https://propertywiki.ai/blog',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/blog',
    title: 'Property Blog - Real Estate News & Analysis',
    description: 'Stay updated with the latest real estate news and market trends.',
  },
}

const posts = [
  {
    title: 'Dubai Property Market Outlook 2025',
    slug: 'dubai-market-outlook-2025',
    excerpt: 'Analysis of Dubai\'s property market performance and predictions for the coming year, including key drivers and areas to watch.',
    date: 'January 15, 2025',
    author: 'PropertyWiki Team',
    category: 'Market Analysis',
    image: '/images/blog/dubai-market-2025.jpg',
  },
  {
    title: 'Understanding Off-Plan Investment Risks',
    slug: 'off-plan-investment-risks',
    excerpt: 'A balanced look at the risks and rewards of investing in off-plan property, with strategies to protect your investment.',
    date: 'January 10, 2025',
    author: 'PropertyWiki Team',
    category: 'Investment',
    image: '/images/blog/off-plan-risks.jpg',
  },
  {
    title: 'Golden Visa Changes: What Property Investors Need to Know',
    slug: 'golden-visa-changes-2025',
    excerpt: 'Recent updates to the UAE Golden Visa program and how they affect property investors seeking residency.',
    date: 'January 5, 2025',
    author: 'PropertyWiki Team',
    category: 'Regulations',
    image: '/images/blog/golden-visa.jpg',
  },
]

export default function BlogPage() {
  const breadcrumbs = [{ name: 'Blog', href: '/blog' }]

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Blog', url: 'https://propertywiki.ai/blog' },
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
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <article className="luxury-card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-sm text-gray-500">By {post.author}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guides" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Guides</span>
              <p className="font-medium text-gray-900 mt-1">Property Guides</p>
            </Link>
            <Link href="/locations" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Locations</span>
              <p className="font-medium text-gray-900 mt-1">Explore Locations</p>
            </Link>
            <Link href="/definitions" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Definitions</span>
              <p className="font-medium text-gray-900 mt-1">Property Terms & Definitions</p>
            </Link>
            <Link href="/investing" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Investing</span>
              <p className="font-medium text-gray-900 mt-1">Property Investment Insights</p>
            </Link>
            <Link href="/blog/dubai-market-outlook-2025" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Article</span>
              <p className="font-medium text-gray-900 mt-1">Dubai Market Outlook 2025</p>
            </Link>
            <Link href="/blog/off-plan-investment-risks" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Article</span>
              <p className="font-medium text-gray-900 mt-1">Off-Plan Investment Risks</p>
            </Link>
            <Link href="/blog/golden-visa-changes-2025" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">Article</span>
              <p className="font-medium text-gray-900 mt-1">Golden Visa Changes 2025</p>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
