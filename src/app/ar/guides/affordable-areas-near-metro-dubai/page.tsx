import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مناطق سكنية بأسعار معقولة قرب المترو في دبي | بروبرتي ويكي',
  description: 'أفضل المناطق السكنية بأسعار معقولة القريبة من محطات مترو دبي. مقارنة الأسعار والعوائد الإيجارية للعقارات قرب الخط الأحمر والأخضر.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/affordable-areas-near-metro-dubai',
    title: 'مناطق سكنية بأسعار معقولة قرب المترو في دبي | بروبرتي ويكي',
    description: 'أفضل المناطق السكنية بأسعار معقولة القريبة من محطات مترو دبي. مقارنة الأسعار والعوائد الإيجارية.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/affordable-areas-near-metro-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/affordable-areas-near-metro-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/affordable-areas-near-metro-dubai',
      'x-default': 'https://propertywiki.ai/guides/affordable-areas-near-metro-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل مناطق شراء عقار بأقل من 500 ألف درهم',
    href: '/ar/guides/best-areas-buy-property-under-500k',
    category: 'دليل',
    description: 'عقارات بأسعار تبدأ من 180 ألف درهم في مناطق دبي.',
  },
  {
    title: 'أرخص مناطق التملك الحر في دبي',
    href: '/ar/guides/cheapest-freehold-areas-dubai',
    category: 'دليل',
    description: 'ترتيب أرخص مناطق التملك الحر الكامل في دبي.',
  },
  {
    title: 'أين تشتري عقار بأقل من مليون درهم',
    href: '/ar/guides/where-to-buy-under-1-million-dubai',
    category: 'دليل',
    description: 'أفضل المناطق بميزانية تصل إلى مليون درهم.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'خطوات ومتطلبات شراء العقارات في دبي.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'دليل شامل لمنطقة دبي مارينا القريبة من محطة المترو.',
  },
]

export default function AffordableAreasNearMetroDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مناطق سكنية بأسعار معقولة قرب المترو</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            مناطق سكنية بأسعار معقولة قرب المترو في دبي
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            القرب من محطات المترو يُعد من أهم عوامل جذب المستأجرين في دبي. العقارات القريبة من المترو تتمتع بطلب إيجاري أعلى وقيمة إعادة بيع أفضل. نستعرض في هذا الدليل أفضل المناطق التي تجمع بين الأسعار المعقولة والقرب من شبكة المترو.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">لماذا القرب من المترو مهم؟</h2>
            <ul className="space-y-2 text-warm-700">
              <li>• العقارات القريبة من المترو تحقق إيجارات أعلى بنسبة 10-15%</li>
              <li>• طلب إيجاري مستمر من المهنيين الذين يعتمدون على المواصلات العامة</li>
              <li>• نمو رأسمالي أفضل على المدى الطويل</li>
              <li>• توفير تكاليف النقل للسكان (لا حاجة لسيارة)</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ديسكفري جاردنز - الخط الأحمر</h2>
            <p className="text-warm-700 mb-4">
              تقع ديسكفري جاردنز على بُعد دقائق من محطة مترو ابن بطوطة على الخط الأحمر. منطقة <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> تتميز بالمساحات الخضراء والحدائق المنسقة. أسعارها من أكثر الأسعار تنافسية في المناطق القريبة من المترو.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>استوديوهات: 280,000 - 380,000 درهم</li>
              <li>غرفة وصالة: 400,000 - 550,000 درهم</li>
              <li>العائد الإيجاري: 7% - 8.5%</li>
              <li>مسافة المشي للمترو: 5-10 دقائق</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أبراج بحيرات جميرا (JLT) - الخط الأحمر</h2>
            <p className="text-warm-700 mb-4">
              تمتلك أبراج بحيرات جميرا محطة مترو خاصة بها (DMCC)، مما يجعلها من أفضل المواقع للمستثمرين. تقع بجوار <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> وتوفر أسعاراً أقل بكثير.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>استوديوهات: 400,000 - 550,000 درهم</li>
              <li>غرفة وصالة: 600,000 - 850,000 درهم</li>
              <li>العائد الإيجاري: 6.5% - 8%</li>
              <li>محطة مترو DMCC ملاصقة للمنطقة</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الفرجان - الخط الأحمر</h2>
            <p className="text-warm-700 mb-4">
              الفرجان منطقة سكنية هادئة تخدمها محطة مترو الفرجان. تجمع بين الأسعار المعقولة والطابع العائلي الهادئ. مثالية لمن يبحث عن تاون هاوس أو شقق بمساحات كبيرة بأسعار معقولة.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>شقق غرفة وصالة: 450,000 - 650,000 درهم</li>
              <li>شقق غرفتين: 600,000 - 900,000 درهم</li>
              <li>العائد الإيجاري: 6.5% - 7.5%</li>
              <li>بيئة عائلية مع مدارس وحدائق قريبة</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة المناطق القريبة من المترو</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">خط المترو</th>
                    <th className="text-right py-3 px-4 font-semibold">أقل سعر</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">ديسكفري جاردنز</td>
                    <td className="py-3 px-4">الأحمر</td>
                    <td className="py-3 px-4">280,000 درهم</td>
                    <td className="py-3 px-4">7 - 8.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">أبراج بحيرات جميرا</td>
                    <td className="py-3 px-4">الأحمر</td>
                    <td className="py-3 px-4">400,000 درهم</td>
                    <td className="py-3 px-4">6.5 - 8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">الفرجان</td>
                    <td className="py-3 px-4">الأحمر</td>
                    <td className="py-3 px-4">450,000 درهم</td>
                    <td className="py-3 px-4">6.5 - 7.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">الخليج التجاري</td>
                    <td className="py-3 px-4">الأحمر</td>
                    <td className="py-3 px-4">550,000 درهم</td>
                    <td className="py-3 px-4">6.5 - 7.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة استثمارية</h3>
            <p className="text-accent-700 text-sm">
              عند الاستثمار قرب المترو، ابحث عن العقارات ضمن مسافة مشي لا تتجاوز 10 دقائق من المحطة. المسافات الأطول تقلل من الميزة التنافسية. إذا كنت <Link href="/ar/guides/best-areas-first-time-buyers-dubai" className="text-primary-600 hover:underline">مشترياً لأول مرة</Link>، فالمناطق القريبة من المترو خيار آمن للبداية. وللميزانيات المحدودة، راجع <Link href="/ar/guides/best-areas-buy-property-under-500k" className="text-primary-600 hover:underline">أفضل المناطق بأقل من 500 ألف درهم</Link>.
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
