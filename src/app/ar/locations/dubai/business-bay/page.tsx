import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الخليج التجاري (بزنس باي) | بروبرتي ويكي',
  description: 'دليل شامل لمنطقة الخليج التجاري في دبي. مركز الأعمال والسكن الحديث.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/locations/dubai/business-bay',
    title: 'الخليج التجاري (بزنس باي) | بروبرتي ويكي',
    description: 'دليل شامل لمنطقة الخليج التجاري في دبي. مركز الأعمال والسكن الحديث.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/locations/dubai/business-bay',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai/business-bay',
      'ar': 'https://propertywiki.ai/ar/locations/dubai/business-bay',
      'x-default': 'https://propertywiki.ai/locations/dubai/business-bay',
    },
  },
}

export default function BusinessBayPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 text-sm">المواقع</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">الخليج التجاري</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">الخليج التجاري (بزنس باي)</h1>
          <p className="text-xl text-warm-600 mb-8">مركز الأعمال الحديث على قناة دبي المائية</p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">متوسط الإيجار</p>
              <p className="text-lg font-bold text-gray-900">60-120 ألف درهم/سنة</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">سعر الشراء</p>
              <p className="text-lg font-bold text-gray-900">800 ألف - 5 مليون درهم</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">العائد الإيجاري</p>
              <p className="text-lg font-bold text-gray-900">6-7%</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              الخليج التجاري هو امتداد طبيعي لداون تاون دبي، يضم مزيجاً من الأبراج السكنية والتجارية على طول قناة دبي المائية. يوفر أسعاراً أقل من داون تاون مع موقع مركزي ممتاز.
            </p>
            <p className="text-warm-700 leading-relaxed">
              تشهد المنطقة نمواً مستمراً مع افتتاح مشاريع جديدة ومرافق ترفيهية على ضفاف القناة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المميزات</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">🌊</span>
                <div>
                  <p className="font-medium text-gray-900">قناة دبي المائية</p>
                  <p className="text-sm text-warm-600">إطلالات خلابة وممشى جميل</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏢</span>
                <div>
                  <p className="font-medium text-gray-900">مكاتب ومقرات شركات</p>
                  <p className="text-sm text-warm-600">قريب من مكان العمل</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🚇</span>
                <div>
                  <p className="font-medium text-gray-900">محطة مترو</p>
                  <p className="text-sm text-warm-600">اتصال ممتاز بالمدينة</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🍽️</span>
                <div>
                  <p className="font-medium text-gray-900">مطاعم ومقاهي</p>
                  <p className="text-sm text-warm-600">خيارات متنوعة على القناة</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناسب لـ</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">رجال الأعمال</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">المحترفين الشباب</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">المستثمرين</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">الأزواج</span>
            </div>
          </section>
        </article>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">داون تاون دبي</p>
            </Link>
            <Link href="/ar/locations/dubai/difc" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">مركز دبي المالي</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/guides/business-bay-vs-downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">بزنس باي مقابل داون تاون</p>
            </Link>
            <Link href="/ar/guides/best-areas-under-1m-good-roi" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل المناطق تحت مليون بعائد جيد</p>
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
