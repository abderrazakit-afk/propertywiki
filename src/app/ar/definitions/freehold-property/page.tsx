import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الملكية الحرة (Freehold) | بروبرتي ويكي',
  description: 'ما هي الملكية الحرة في دبي والإمارات؟ تعرف على مفهوم Freehold ومناطق التملك الحر.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/definitions/freehold-property',
    title: 'الملكية الحرة (Freehold) | بروبرتي ويكي',
    description: 'ما هي الملكية الحرة في دبي والإمارات؟ تعرف على مفهوم Freehold ومناطق التملك الحر.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/definitions/freehold-property',
    languages: {
      'en': 'https://propertywiki.ai/definitions/freehold-property',
      'ar': 'https://propertywiki.ai/ar/definitions/freehold-property',
      'x-default': 'https://propertywiki.ai/definitions/freehold-property',
    },
  },
}

export default function FreeholdDefinitionPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/definitions" className="text-primary-600 hover:text-primary-700 text-sm">التعريفات</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">الملكية الحرة</span>
        </nav>

        <article>
          <div className="mb-8">
            <span className="text-sm text-primary-600 font-medium">Freehold Property</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-2">الملكية الحرة</h1>
          </div>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-2">التعريف المختصر</h2>
            <p className="text-warm-700">
              الملكية الحرة (Freehold) هي ملكية كاملة للعقار والأرض التي يقع عليها بدون حد زمني. يحق للمالك التصرف في العقار بالبيع أو الإيجار أو التوريث.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">شرح مفصل</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              في دبي والإمارات، يمكن للأجانب والمقيمين شراء عقارات بنظام الملكية الحرة في مناطق محددة تسمى &quot;مناطق التملك الحر&quot;. هذا النظام يمنح المشتري ملكية كاملة للعقار والأرض إلى الأبد.
            </p>
            <p className="text-warm-700 leading-relaxed">
              يختلف نظام الملكية الحرة عن نظام حق الانتفاع (Leasehold) الذي يمنح ملكية محددة بفترة زمنية (عادة 99 سنة).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناطق التملك الحر في دبي</h2>
            <ul className="space-y-2 text-warm-700">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                دبي مارينا
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                نخلة جميرا
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                داون تاون دبي
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                الخليج التجاري
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                جميرا بيتش ريزيدنس
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مزايا الملكية الحرة</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">ملكية دائمة</p>
                <p className="text-sm text-warm-600">لا تنتهي الملكية بمرور الزمن</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">حرية التصرف</p>
                <p className="text-sm text-warm-600">بيع، إيجار، أو توريث بحرية</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">تأشيرة إقامة</p>
                <p className="text-sm text-warm-600">أهلية للحصول على تأشيرة مستثمر</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">قيمة استثمارية</p>
                <p className="text-sm text-warm-600">عادة أعلى من حق الانتفاع</p>
              </div>
            </div>
          </section>
        </article>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/definitions/leasehold" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">الإيجار الطويل</p>
            </Link>
            <Link href="/ar/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">العقارات على الخارطة</p>
            </Link>
            <Link href="/ar/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">دبي مارينا</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/guides/cheapest-freehold-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أرخص مناطق التملك الحر</p>
            </Link>
          </div>
        </nav>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <Link href="/ar/definitions" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة للتعريفات
          </Link>
        </div>
      </div>
    </div>
  )
}
