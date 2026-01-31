import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'نخلة جميرا - دليل المنطقة | بروبرتي ويكي',
  description: 'دليل شامل لنخلة جميرا. الأسعار، الفلل، الشقق، والحياة الفاخرة على الجزيرة.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/locations/dubai/palm-jumeirah',
    title: 'نخلة جميرا - دليل المنطقة | بروبرتي ويكي',
    description: 'دليل شامل لنخلة جميرا. الأسعار، الفلل، الشقق، والحياة الفاخرة على الجزيرة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/locations/dubai/palm-jumeirah',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai/palm-jumeirah',
      'ar': 'https://propertywiki.ai/ar/locations/dubai/palm-jumeirah',
      'x-default': 'https://propertywiki.ai/locations/dubai/palm-jumeirah',
    },
  },
}

export default function PalmJumeirahPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 text-sm">المواقع</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">نخلة جميرا</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">نخلة جميرا</h1>
          <p className="text-xl text-warm-600 mb-8">جزيرة النخلة الشهيرة - رمز الفخامة في دبي</p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">متوسط الإيجار (فيلا)</p>
              <p className="text-lg font-bold text-gray-900">500 ألف - 2 مليون درهم</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">سعر الشراء</p>
              <p className="text-lg font-bold text-gray-900">1.5 - 100+ مليون درهم</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">العائد الإيجاري</p>
              <p className="text-lg font-bold text-gray-900">4-5%</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              نخلة جميرا هي أيقونة دبي العالمية - جزيرة صناعية على شكل نخلة تمتد داخل الخليج العربي. تضم أفخم الفلل والشقق في المدينة مع شواطئ خاصة وإطلالات بحرية لا مثيل لها.
            </p>
            <p className="text-warm-700 leading-relaxed">
              تستضيف الجزيرة فنادق عالمية مثل أتلانتس ذا بالم وفيرمونت، وتوفر أسلوب حياة استثنائي لسكانها.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أنواع العقارات</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-2">فلل السعف</p>
                <p className="text-sm text-warm-600">فلل فاخرة على السعف مع شاطئ خاص. 3-6 غرف نوم.</p>
                <p className="text-primary-600 font-medium mt-2">15 - 80 مليون درهم</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-2">شقق الجذع</p>
                <p className="text-sm text-warm-600">أبراج سكنية على الجذع مع مرافق فاخرة.</p>
                <p className="text-primary-600 font-medium mt-2">1.5 - 10 مليون درهم</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناسب لـ</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">العائلات الثرية</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">المشاهير</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">رجال الأعمال</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">محبي الخصوصية</span>
            </div>
          </section>
        </article>

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
