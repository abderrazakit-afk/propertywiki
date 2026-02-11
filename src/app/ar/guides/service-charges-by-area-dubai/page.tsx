import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'رسوم الخدمات حسب المنطقة في دبي 2026 | بروبرتي ويكي',
  description: 'مقارنة شاملة لرسوم الخدمات السنوية في مناطق دبي المختلفة. تعرف على تكاليف الصيانة ورسوم الخدمات لكل منطقة سكنية.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/service-charges-by-area-dubai',
    title: 'رسوم الخدمات حسب المنطقة في دبي 2026 | بروبرتي ويكي',
    description: 'مقارنة شاملة لرسوم الخدمات السنوية في مناطق دبي المختلفة. تعرف على تكاليف الصيانة ورسوم الخدمات لكل منطقة سكنية.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/service-charges-by-area-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/service-charges-by-area-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/service-charges-by-area-dubai',
      'x-default': 'https://propertywiki.ai/guides/service-charges-by-area-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي.',
  },
  {
    title: 'التكاليف الخفية لشراء عقار في دبي',
    href: '/ar/guides/hidden-costs-buying-property-dubai',
    category: 'دليل',
    description: 'تعرف على جميع التكاليف المخفية عند شراء عقار في دبي.',
  },
  {
    title: 'تكاليف الصيانة حسب المجتمع',
    href: '/ar/guides/maintenance-cost-by-community-dubai',
    category: 'دليل',
    description: 'مقارنة تفصيلية لتكاليف الصيانة في مجتمعات دبي.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'استكشف منطقة دبي مارينا ورسوم الخدمات فيها.',
  },
  {
    title: 'دليل ديوا للكهرباء والمياه',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن فواتير ديوا للكهرباء والمياه.',
  },
]

export default function ServiceChargesByAreaPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">رسوم الخدمات حسب المنطقة في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            رسوم الخدمات حسب المنطقة في دبي - مقارنة شاملة 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تختلف رسوم الخدمات السنوية بشكل كبير من منطقة لأخرى في دبي. يقدم هذا الدليل مقارنة تفصيلية لرسوم الخدمات في أبرز المناطق السكنية لمساعدتك في اتخاذ قرار استثماري مدروس.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ما هي رسوم الخدمات؟</h2>
            <p className="text-warm-700 mb-4">
              رسوم الخدمات هي مبالغ سنوية يدفعها مالكو العقارات لتغطية تكاليف صيانة المرافق المشتركة والخدمات العامة في المجمعات السكنية. تُحتسب عادةً بالدرهم لكل قدم مربع وتشمل الصيانة والأمن والنظافة وصيانة المسابح والحدائق.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة رسوم الخدمات حسب المنطقة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">رسوم الخدمات (درهم/قدم مربع)</th>
                    <th className="text-right py-3 px-4 font-semibold">التصنيف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link></td>
                    <td className="py-3 px-4">35 - 60 درهم</td>
                    <td className="py-3 px-4">مرتفع</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></td>
                    <td className="py-3 px-4">30 - 50 درهم</td>
                    <td className="py-3 px-4">مرتفع</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td>
                    <td className="py-3 px-4">18 - 30 درهم</td>
                    <td className="py-3 px-4">متوسط</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></td>
                    <td className="py-3 px-4">15 - 25 درهم</td>
                    <td className="py-3 px-4">متوسط</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس</Link></td>
                    <td className="py-3 px-4">20 - 35 درهم</td>
                    <td className="py-3 px-4">متوسط - مرتفع</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">قرية جميرا الدائرية (JVC)</td>
                    <td className="py-3 px-4">10 - 18 درهم</td>
                    <td className="py-3 px-4">منخفض</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link></td>
                    <td className="py-3 px-4">3 - 5 درهم</td>
                    <td className="py-3 px-4">منخفض (فلل)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">دبي هيلز استيت</td>
                    <td className="py-3 px-4">12 - 22 درهم</td>
                    <td className="py-3 px-4">متوسط</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">العوامل المؤثرة في رسوم الخدمات</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>عمر المبنى وحالته - المباني الأقدم قد تتطلب صيانة أكثر</li>
              <li>المرافق المتاحة - مسابح، صالات رياضية، حدائق، أمن على مدار الساعة</li>
              <li>موقع العقار - المناطق الراقية تكون رسومها أعلى</li>
              <li>نظام التبريد - التبريد المركزي مقابل التبريد الفردي يؤثر على التكلفة</li>
              <li>عدد الوحدات في المبنى - كلما زادت الوحدات انخفضت التكلفة لكل وحدة</li>
              <li>جودة شركة إدارة المرافق المسؤولة عن الصيانة</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">كيف تحسب رسوم الخدمات لعقارك؟</h2>
            <p className="text-warm-700 mb-4">
              لحساب رسوم الخدمات السنوية، اضرب مساحة الوحدة بالقدم المربع في معدل رسوم الخدمات للمنطقة. مثلاً: شقة 1,000 قدم مربع في <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> بمعدل 25 درهم/قدم مربع = 25,000 درهم سنوياً.
            </p>
            <p className="text-warm-700 mb-4">
              تجدر الإشارة إلى أن رسوم الخدمات لا تشمل فواتير <Link href="/ar/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">ديوا للكهرباء والمياه</Link> التي تُدفع بشكل منفصل.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              قبل <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">شراء أي عقار في دبي</Link>، اطلب كشف حساب رسوم الخدمات للسنوات الثلاث الأخيرة. ارتفاع رسوم الخدمات المستمر قد يؤثر سلباً على العائد الاستثماري. قارن بين المناطق المختلفة لاختيار الأنسب لميزانيتك.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors"
              >
                <span className="text-xs text-primary-600 font-medium">{article.category}</span>
                <h4 className="font-semibold text-gray-900 mt-1">{article.title}</h4>
                <p className="text-sm text-warm-600 mt-1">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <p className="text-sm text-warm-500 mb-4">آخر تحديث: فبراير 2026 | بواسطة فريق بروبرتي ويكي</p>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة للأدلة
          </Link>
        </div>
      </div>
    </div>
  )
}
