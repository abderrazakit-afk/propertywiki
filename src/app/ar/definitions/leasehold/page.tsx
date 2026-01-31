import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'حق الانتفاع (Leasehold) - تعريف ومعنى | بروبرتي ويكي',
  description: 'ما هو حق الانتفاع في دبي والإمارات؟ تعرف على مفهوم Leasehold والفرق بينه وبين الملكية الحرة.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/definitions/leasehold',
  },
}

export default function LeaseholdDefinitionPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/definitions" className="text-primary-600 hover:text-primary-700 text-sm">التعريفات</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">حق الانتفاع</span>
        </nav>

        <article>
          <div className="mb-8">
            <span className="text-sm text-primary-600 font-medium">Leasehold</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-2">حق الانتفاع</h1>
          </div>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-2">التعريف المختصر</h2>
            <p className="text-warm-700">
              حق الانتفاع (Leasehold) هو ملكية العقار لفترة زمنية محددة (عادة 99 سنة)، وبعد انتهاء المدة تعود الملكية للمالك الأصلي للأرض.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الفرق بين حق الانتفاع والملكية الحرة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المعيار</th>
                    <th className="text-right py-3 px-4 font-semibold">حق الانتفاع</th>
                    <th className="text-right py-3 px-4 font-semibold">الملكية الحرة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">مدة الملكية</td>
                    <td className="py-3 px-4">محددة (30-99 سنة)</td>
                    <td className="py-3 px-4">دائمة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">ملكية الأرض</td>
                    <td className="py-3 px-4">لا</td>
                    <td className="py-3 px-4">نعم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">السعر</td>
                    <td className="py-3 px-4">أقل عادة</td>
                    <td className="py-3 px-4">أعلى</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">التوريث</td>
                    <td className="py-3 px-4">للمدة المتبقية</td>
                    <td className="py-3 px-4">كاملة</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">متى يناسبك حق الانتفاع؟</h2>
            <ul className="space-y-3 text-warm-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                إذا كنت تبحث عن سعر أقل للدخول في السوق
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                للسكن المؤقت أو متوسط المدى
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                في مناطق لا تتوفر فيها الملكية الحرة
              </li>
            </ul>
          </section>
        </article>

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
