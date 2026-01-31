import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'جميرا بيتش ريزيدنس (JBR) | بروبرتي ويكي',
  description: 'دليل شامل لمنطقة JBR في دبي. الشاطئ، المطاعم، الأسعار ونمط الحياة.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/locations/dubai/jbr',
    title: 'جميرا بيتش ريزيدنس (JBR) | بروبرتي ويكي',
    description: 'دليل شامل لمنطقة JBR في دبي. الشاطئ، المطاعم، الأسعار ونمط الحياة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/locations/dubai/jbr',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai/jbr',
      'ar': 'https://propertywiki.ai/ar/locations/dubai/jbr',
      'x-default': 'https://propertywiki.ai/locations/dubai/jbr',
    },
  },
}

export default function JBRPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 text-sm">المواقع</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">جميرا بيتش ريزيدنس</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">جميرا بيتش ريزيدنس (JBR)</h1>
          <p className="text-xl text-warm-600 mb-8">أشهر شاطئ في دبي - حياة نابضة على الواجهة البحرية</p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">متوسط الإيجار</p>
              <p className="text-lg font-bold text-gray-900">90-180 ألف درهم/سنة</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">سعر الشراء</p>
              <p className="text-lg font-bold text-gray-900">1.2-8 مليون درهم</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">العائد الإيجاري</p>
              <p className="text-lg font-bold text-gray-900">5-6%</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              JBR هي أكبر منطقة سكنية على شاطئ واحد في العالم. تضم 40 برجاً سكنياً وممشى &quot;ذا ووك&quot; الشهير المليء بالمطاعم والمحلات والأنشطة الترفيهية.
            </p>
            <p className="text-warm-700 leading-relaxed">
              تتميز المنطقة بأجواء حيوية على مدار العام، وتعتبر وجهة مفضلة للسياح والمقيمين على حد سواء.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المميزات</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏖️</span>
                <div>
                  <p className="font-medium text-gray-900">شاطئ رملي عام</p>
                  <p className="text-sm text-warm-600">1.7 كم من الشاطئ المجاني</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🚶</span>
                <div>
                  <p className="font-medium text-gray-900">ممشى ذا ووك</p>
                  <p className="text-sm text-warm-600">مطاعم ومحلات ومقاهي</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🎡</span>
                <div>
                  <p className="font-medium text-gray-900">عين دبي</p>
                  <p className="text-sm text-warm-600">أكبر عجلة دوارة في العالم</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏊</span>
                <div>
                  <p className="font-medium text-gray-900">رياضات مائية</p>
                  <p className="text-sm text-warm-600">جت سكي، بانانا بوت، باراسيلنج</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناسب لـ</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">العائلات</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">محبي الشاطئ</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">السياح</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">الشباب</span>
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
