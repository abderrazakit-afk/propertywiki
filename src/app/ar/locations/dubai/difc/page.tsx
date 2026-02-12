import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مركز دبي المالي (DIFC) | بروبرتي ويكي',
  description: 'دليل شامل لمنطقة DIFC في دبي. المركز المالي والفني والثقافي.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/locations/dubai/difc',
    title: 'مركز دبي المالي (DIFC) | بروبرتي ويكي',
    description: 'دليل شامل لمنطقة DIFC في دبي. المركز المالي والفني والثقافي.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/locations/dubai/difc',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai/difc',
      'ar': 'https://propertywiki.ai/ar/locations/dubai/difc',
      'x-default': 'https://propertywiki.ai/locations/dubai/difc',
    },
  },
}

export default function DIFCPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 text-sm">المواقع</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مركز دبي المالي</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">مركز دبي المالي العالمي (DIFC)</h1>
          <p className="text-xl text-warm-600 mb-8">القلب المالي والثقافي لدبي</p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">متوسط الإيجار</p>
              <p className="text-lg font-bold text-gray-900">120-250 ألف درهم/سنة</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">سعر الشراء</p>
              <p className="text-lg font-bold text-gray-900">2-15 مليون درهم</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">العائد الإيجاري</p>
              <p className="text-lg font-bold text-gray-900">4-5%</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              DIFC هو المركز المالي الرائد في الشرق الأوسط وأفريقيا وجنوب آسيا. يضم مقرات أكبر البنوك والمؤسسات المالية العالمية، بالإضافة إلى بيئة تنظيمية مستقلة.
            </p>
            <p className="text-warm-700 leading-relaxed">
              أصبح DIFC أيضاً وجهة للفن والثقافة والمطاعم الفاخرة، مما يجعله مكاناً مثالياً للعمل والعيش والترفيه.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المميزات</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏦</span>
                <div>
                  <p className="font-medium text-gray-900">مركز مالي عالمي</p>
                  <p className="text-sm text-warm-600">500+ مؤسسة مالية</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🎨</span>
                <div>
                  <p className="font-medium text-gray-900">حي الفنون</p>
                  <p className="text-sm text-warm-600">غاليريهات وفعاليات فنية</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🍽️</span>
                <div>
                  <p className="font-medium text-gray-900">مطاعم فاخرة</p>
                  <p className="text-sm text-warm-600">أرقى المطاعم في دبي</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🚇</span>
                <div>
                  <p className="font-medium text-gray-900">مترو دبي</p>
                  <p className="text-sm text-warm-600">محطة DIFC مباشرة</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناسب لـ</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">المحترفين في القطاع المالي</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">رواد الأعمال</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">محبي الفن</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">الأثرياء</span>
            </div>
          </section>
        </article>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">الخليج التجاري</p>
            </Link>
            <Link href="/ar/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">داون تاون دبي</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/definitions/leasehold" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">الإيجار الطويل</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/guides/service-charges-by-area-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">رسوم الخدمات حسب المنطقة</p>
            </Link>
          </div>
        </nav>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة للمواقع
          </Link>
        </div>
      </div>
    </div>
  )
}
