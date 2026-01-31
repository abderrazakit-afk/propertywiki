import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'توقعات سوق دبي العقاري 2025 | بروبرتي ويكي',
  description: 'تحليل شامل لتوقعات سوق العقارات في دبي لعام 2025. الأسعار، الطلب، والفرص الاستثمارية.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/blog/dubai-market-outlook-2025',
    title: 'توقعات سوق دبي العقاري 2025 | بروبرتي ويكي',
    description: 'تحليل شامل لتوقعات سوق العقارات في دبي لعام 2025. الأسعار، الطلب، والفرص الاستثمارية.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/blog/dubai-market-outlook-2025',
    languages: {
      'en': 'https://propertywiki.ai/blog/dubai-market-outlook-2025',
      'ar': 'https://propertywiki.ai/ar/blog/dubai-market-outlook-2025',
      'x-default': 'https://propertywiki.ai/blog/dubai-market-outlook-2025',
    },
  },
}

export default function DubaiMarketOutlookPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/blog" className="text-primary-600 hover:text-primary-700 text-sm">المدونة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">توقعات السوق 2025</span>
        </nav>

        <article>
          <div className="mb-8">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">تحليل السوق</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-4 mb-4">
              توقعات سوق دبي العقاري 2025
            </h1>
            <p className="text-warm-500 text-sm">يناير 2025 • 8 دقائق قراءة</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-warm-600 mb-8">
              يستمر سوق العقارات في دبي في إظهار مرونة استثنائية، مع توقعات إيجابية لعام 2025 رغم التحديات الاقتصادية العالمية.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أهم التوقعات لعام 2025</h2>
              <div className="space-y-4">
                <div className="bg-accent-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">ارتفاع الأسعار بنسبة 5-10%</h3>
                  <p className="text-warm-700 text-sm">من المتوقع استمرار ارتفاع الأسعار في المناطق الرئيسية مع تزايد الطلب.</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">زيادة الطلب على الفلل</h3>
                  <p className="text-warm-700 text-sm">استمرار الطلب القوي على الفلل والتاون هاوس مع تغير أنماط العمل.</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">نمو سوق الإيجارات</h3>
                  <p className="text-warm-700 text-sm">ارتفاع الإيجارات بنسبة 8-15% في المناطق المرغوبة.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المناطق الأكثر جاذبية</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-warm-100">
                      <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                      <th className="text-right py-3 px-4 font-semibold">نمو متوقع</th>
                      <th className="text-right py-3 px-4 font-semibold">العائد</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-100">
                    <tr>
                      <td className="py-3 px-4">دبي مارينا</td>
                      <td className="py-3 px-4">+8%</td>
                      <td className="py-3 px-4">6-7%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">الخليج التجاري</td>
                      <td className="py-3 px-4">+10%</td>
                      <td className="py-3 px-4">6-7%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">دبي هيلز</td>
                      <td className="py-3 px-4">+12%</td>
                      <td className="py-3 px-4">5-6%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">JVC</td>
                      <td className="py-3 px-4">+15%</td>
                      <td className="py-3 px-4">7-8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">عوامل داعمة للسوق</h2>
              <ul className="space-y-3 text-warm-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  تدفق المستثمرين الدوليين خاصة من روسيا وأوروبا والهند
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  برنامج الإقامة الذهبية وتأشيرات المستثمرين
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  مشاريع البنية التحتية الضخمة (المترو، المطار الجديد)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  بيئة ضريبية جاذبة (0% ضريبة دخل)
                </li>
              </ul>
            </section>

            <div className="bg-primary-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">نصيحة للمستثمرين</h3>
              <p className="text-warm-700 text-sm">
                ركز على العقارات الجاهزة في المناطق المثبتة للحصول على عوائد فورية. العقارات على المخطط تناسب من يبحث عن نمو رأسمالي طويل الأجل.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <p className="text-sm text-warm-500 mb-4">بواسطة فريق بروبرتي ويكي</p>
          <Link href="/ar/blog" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة للمدونة
          </Link>
        </div>
      </div>
    </div>
  )
}
