import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الاستثمار العقاري | بروبرتي ويكي',
  description: 'دليل الاستثمار العقاري في دبي والإمارات. استراتيجيات وتحليلات للمستثمرين.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/investing',
    title: 'الاستثمار العقاري | بروبرتي ويكي',
    description: 'دليل الاستثمار العقاري في دبي والإمارات. استراتيجيات وتحليلات للمستثمرين.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/investing',
    languages: {
      'en': 'https://propertywiki.ai/investing',
      'ar': 'https://propertywiki.ai/ar/investing',
      'x-default': 'https://propertywiki.ai/investing',
    },
  },
}

const investingPages = [
  {
    title: 'أفضل 10 مناطق استثمارية في دبي 2026',
    titleEn: 'Top 10 Investment Areas Dubai',
    description: 'تصنيف شامل لأفضل مناطق الاستثمار العقاري في دبي مع نظام تقييم متعدد المعايير.',
    href: '/ar/investing/top-10-investment-areas-dubai',
    icon: '🏆',
  },
  {
    title: 'بطاقة أداء الاستثمار العقاري 2026',
    titleEn: 'Dubai Investment Scorecard 2026',
    description: 'بطاقة أداء شاملة لتقييم فرص الاستثمار العقاري في دبي حسب معايير متعددة.',
    href: '/ar/investing/dubai-investment-scorecard-2026',
    icon: '📊',
  },
  {
    title: 'تصنيف النمو الرأسمالي في دبي',
    titleEn: 'Capital Growth Ranking Dubai',
    description: 'تصنيف مناطق دبي حسب معدلات النمو الرأسمالي التاريخية والمتوقعة.',
    href: '/ar/investing/capital-growth-ranking-dubai',
    icon: '📈',
  },
  {
    title: 'تصنيف الطلب الإيجاري في دبي',
    titleEn: 'Rental Demand Ranking Dubai',
    description: 'تحليل الطلب الإيجاري في مختلف مناطق دبي مع معدلات الإشغال.',
    href: '/ar/investing/rental-demand-ranking-dubai',
    icon: '🏠',
  },
]

const topics = [
  {
    title: 'أساسيات الاستثمار العقاري',
    description: 'تعرف على أساسيات الاستثمار العقاري وكيفية تحقيق عوائد مستدامة.',
    icon: '📊',
  },
  {
    title: 'حساب العائد على الاستثمار',
    description: 'كيفية حساب ROI وتقييم الفرص الاستثمارية.',
    icon: '💰',
  },
  {
    title: 'استراتيجيات التمويل',
    description: 'خيارات التمويل العقاري وكيفية اختيار الأنسب.',
    icon: '🏦',
  },
  {
    title: 'إدارة العقارات الاستثمارية',
    description: 'نصائح لإدارة عقاراتك وتعظيم العوائد.',
    icon: '🏢',
  },
]

export default function InvestingPageAr() {
  return (
    <div className="bg-warm-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <nav className="mb-6">
            <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">
              الرئيسية
            </Link>
            <span className="mx-2 text-warm-400">/</span>
            <span className="text-warm-600 text-sm">الاستثمار</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            الاستثمار العقاري
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            استراتيجيات ونصائح للاستثمار العقاري الناجح في دبي
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">تقارير الاستثمار</h2>
          <div className="grid gap-4">
            {investingPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-warm-100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{page.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                      {page.title}
                    </h3>
                    <p className="text-sm text-primary-600 mb-2">{page.titleEn}</p>
                    <p className="text-warm-600 text-sm">{page.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-warm-400 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">مواضيع استثمارية</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-white rounded-2xl p-6 border border-warm-100"
              >
                <span className="text-3xl mb-4 block">{topic.icon}</span>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-warm-600 text-sm">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <nav className="mt-10 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/investing/top-10-investment-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">أفضل 10 مناطق استثمارية</p>
            </Link>
            <Link href="/ar/investing/dubai-investment-scorecard-2026" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">بطاقة أداء الاستثمار 2026</p>
            </Link>
            <Link href="/ar/investing/capital-growth-ranking-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">تصنيف النمو الرأسمالي</p>
            </Link>
            <Link href="/ar/investing/rental-demand-ranking-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">تصنيف الطلب الإيجاري</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/locations/dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">مجتمعات دبي</p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
