import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مدونة العقارات - بروبرتي ويكي',
  description: 'آخر أخبار سوق العقارات في دبي والإمارات. تحليلات وتوقعات من خبراء العقارات.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/blog',
  },
}

const posts = [
  {
    title: 'توقعات سوق العقارات في دبي 2026',
    excerpt: 'تحليل شامل لاتجاهات السوق العقاري في دبي للعام القادم.',
    date: '15 يناير 2026',
    readTime: '8 دقائق',
  },
  {
    title: 'أفضل المناطق للاستثمار العقاري في 2026',
    excerpt: 'دليل للمناطق الواعدة للاستثمار العقاري في دبي.',
    date: '10 يناير 2026',
    readTime: '6 دقائق',
  },
]

export default function BlogPageAr() {
  return (
    <div className="bg-warm-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <nav className="mb-6">
            <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">
              الرئيسية
            </Link>
            <span className="mx-2 text-warm-400">/</span>
            <span className="text-warm-600 text-sm">المدونة</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            مدونة العقارات
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            آخر الأخبار والتحليلات من سوق العقارات في دبي
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl p-6 border border-warm-100"
            >
              <div className="flex items-center gap-4 mb-3 text-sm text-warm-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-warm-600">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-warm-500 mt-12">
          المزيد من المقالات قريباً...
        </p>
      </div>
    </div>
  )
}
