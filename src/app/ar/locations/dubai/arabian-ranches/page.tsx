import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المرابع العربية (Arabian Ranches) - دليل المنطقة | بروبرتي ويكي',
  description: 'دليل شامل لمنطقة المرابع العربية في دبي. الفلل العائلية والمجتمع الهادئ.',
}

export default function ArabianRanchesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 text-sm">المواقع</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">المرابع العربية</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">المرابع العربية (Arabian Ranches)</h1>
          <p className="text-xl text-warm-600 mb-8">مجتمع الفلل العائلية الأول في دبي</p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">متوسط الإيجار (فيلا)</p>
              <p className="text-lg font-bold text-gray-900">180-400 ألف درهم/سنة</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">سعر الشراء</p>
              <p className="text-lg font-bold text-gray-900">2.5-15 مليون درهم</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-sm text-warm-500 mb-1">العائد الإيجاري</p>
              <p className="text-lg font-bold text-gray-900">4-5%</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              المرابع العربية هي مجتمع فلل متكامل يوفر نمط حياة هادئ بعيداً عن صخب المدينة. تم تطويرها من قبل إعمار وتتميز بتصاميم مستوحاة من الطراز العربي والإسباني والمتوسطي.
            </p>
            <p className="text-warm-700 leading-relaxed">
              يضم المجتمع ملعب غولف 18 حفرة، ومدارس دولية، ومركز تسوق، وكل المرافق اللازمة للحياة العائلية المريحة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المميزات</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">⛳</span>
                <div>
                  <p className="font-medium text-gray-900">ملعب غولف</p>
                  <p className="text-sm text-warm-600">Arabian Ranches Golf Club</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏫</span>
                <div>
                  <p className="font-medium text-gray-900">مدارس دولية</p>
                  <p className="text-sm text-warm-600">JESS و Ranches Primary</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🛒</span>
                <div>
                  <p className="font-medium text-gray-900">مركز تسوق</p>
                  <p className="text-sm text-warm-600">Arabian Ranches Community Centre</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏇</span>
                <div>
                  <p className="font-medium text-gray-900">نادي فروسية</p>
                  <p className="text-sm text-warm-600">Emirates Equestrian Centre</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناسب لـ</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">العائلات الكبيرة</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">محبي الهدوء</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">لاعبي الغولف</span>
              <span className="bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm">محبي الفلل</span>
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
