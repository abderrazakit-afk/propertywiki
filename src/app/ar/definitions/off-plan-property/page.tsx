import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'العقارات على المخطط (Off-Plan) | بروبرتي ويكي',
  description: 'ما هي العقارات على المخطط في دبي؟ تعرف على Off-Plan ومزاياه ومخاطره.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/definitions/off-plan-property',
    title: 'العقارات على المخطط (Off-Plan) | بروبرتي ويكي',
    description: 'ما هي العقارات على المخطط في دبي؟ تعرف على Off-Plan ومزاياه ومخاطره.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/definitions/off-plan-property',
    languages: {
      'en': 'https://propertywiki.ai/definitions/off-plan-property',
      'ar': 'https://propertywiki.ai/ar/definitions/off-plan-property',
      'x-default': 'https://propertywiki.ai/definitions/off-plan-property',
    },
  },
}

export default function OffPlanDefinitionPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/definitions" className="text-primary-600 hover:text-primary-700 text-sm">التعريفات</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">العقارات على المخطط</span>
        </nav>

        <article>
          <div className="mb-8">
            <span className="text-sm text-primary-600 font-medium">Off-Plan Property</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-2">العقارات على المخطط</h1>
          </div>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-2">التعريف المختصر</h2>
            <p className="text-warm-700">
              العقارات على المخطط (Off-Plan) هي عقارات يتم شراؤها قبل أو أثناء مرحلة البناء. يدفع المشتري بالتقسيط أثناء البناء ويستلم العقار عند الانتهاء.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مزايا الشراء على المخطط</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">أسعار أقل</p>
                <p className="text-sm text-warm-600">عادة 10-30% أقل من العقارات الجاهزة</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">خطط دفع مرنة</p>
                <p className="text-sm text-warm-600">دفعات على مراحل البناء أو بعد التسليم</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">عقار جديد</p>
                <p className="text-sm text-warm-600">تصاميم حديثة ومرافق جديدة</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">إمكانية الربح</p>
                <p className="text-sm text-warm-600">ارتفاع القيمة عند اكتمال البناء</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المخاطر المحتملة</h2>
            <ul className="space-y-3 text-warm-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500">⚠️</span>
                تأخر التسليم عن الموعد المحدد
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">⚠️</span>
                اختلاف المنتج النهائي عن التصاميم
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">⚠️</span>
                تقلبات السوق قد تؤثر على القيمة
              </li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة مهمة</h3>
            <p className="text-accent-700 text-sm">
              تأكد من شراء من مطورين مسجلين في RERA وتحقق من حساب الضمان العقاري. اطلع على سجل المطور في إنجاز المشاريع.
            </p>
          </div>
        </article>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/definitions/leasehold" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">الإيجار الطويل</p>
            </Link>
            <Link href="/ar/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">الخليج التجاري</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/guides/best-off-plan-projects-under-1m" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مشاريع على الخارطة تحت مليون</p>
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
