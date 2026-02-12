import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مدونة العقارات | بروبرتي ويكي',
  description: 'آخر أخبار سوق العقارات في دبي والإمارات. تحليلات وتوقعات من خبراء العقارات.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/blog',
    title: 'مدونة العقارات | بروبرتي ويكي',
    description: 'آخر أخبار سوق العقارات في دبي والإمارات. تحليلات وتوقعات من خبراء العقارات.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/blog',
    languages: {
      'en': 'https://propertywiki.ai/blog',
      'ar': 'https://propertywiki.ai/ar/blog',
      'x-default': 'https://propertywiki.ai/blog',
    },
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

        <nav className="mt-10 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/blog/dubai-market-outlook-2025" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">مدونة</span>
              <p className="font-medium text-gray-900 mt-1">توقعات سوق دبي 2025</p>
            </Link>
            <Link href="/ar/blog/golden-visa-changes-2025" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">مدونة</span>
              <p className="font-medium text-gray-900 mt-1">تغييرات الإقامة الذهبية 2025</p>
            </Link>
            <Link href="/ar/blog/off-plan-investment-risks" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">مدونة</span>
              <p className="font-medium text-gray-900 mt-1">مخاطر الاستثمار على الخارطة</p>
            </Link>
            <Link href="/ar/guides" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">جميع الأدلة العقارية</p>
            </Link>
            <Link href="/ar/locations" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">جميع المواقع</p>
            </Link>
            <Link href="/ar/investing" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">الاستثمار العقاري</p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
