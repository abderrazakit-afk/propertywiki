import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'كيفية بيع عقار في الإمارات | بروبرتي ويكي',
  description: 'دليل شامل لبيع العقارات في الإمارات. من التقييم إلى إتمام الصفقة، كل ما تحتاج معرفته.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/how-to-sell-property-in-uae',
    title: 'كيفية بيع عقار في الإمارات | بروبرتي ويكي',
    description: 'دليل شامل لبيع العقارات في الإمارات. من التقييم إلى إتمام الصفقة، كل ما تحتاج معرفته.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/how-to-sell-property-in-uae',
    languages: {
      'en': 'https://propertywiki.ai/guides/how-to-sell-property-in-uae',
      'ar': 'https://propertywiki.ai/ar/guides/how-to-sell-property-in-uae',
      'x-default': 'https://propertywiki.ai/guides/how-to-sell-property-in-uae',
    },
  },
}

const relatedArticles = [
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل المشتري لفهم عملية الشراء من منظور البائع.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'فهم أنواع الملكية وكيف تؤثر على البيع.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'أسعار العقارات واتجاهات السوق في دبي مارينا.',
  },
  {
    title: 'نخلة جميرا',
    href: '/ar/locations/dubai/palm-jumeirah',
    category: 'موقع',
    description: 'سوق العقارات الفاخرة في نخلة جميرا.',
  },
  {
    title: 'كيفية شراء عقار في الإمارات',
    href: '/ar/guides/how-to-buy-property-in-uae',
    category: 'دليل',
    description: 'دليل شامل للتملك العقاري في جميع الإمارات.',
  },
]

export default function SellPropertyGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">كيفية بيع عقار</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">كيفية بيع عقار في الإمارات</h1>
          <p className="text-xl text-warm-600 mb-8">الخطوات الكاملة لبيع عقارك في الإمارات بأفضل سعر</p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. تقييم العقار</li>
              <li>2. تجهيز العقار للبيع</li>
              <li>3. التسويق والإعلان</li>
              <li>4. التفاوض وإتمام الصفقة</li>
              <li>5. التكاليف والرسوم</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تقييم العقار</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              الخطوة الأولى هي معرفة القيمة السوقية الحقيقية لعقارك. يمكنك:
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>الاستعانة بمقيّم عقاري معتمد من <a href="https://www.rera.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">مؤسسة التنظيم العقاري (RERA)</a></li>
              <li>مقارنة أسعار العقارات المماثلة في المنطقة</li>
              <li>استشارة وكلاء عقاريين موثوقين</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">خطوات البيع</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. الحصول على شهادة عدم ممانعة (NOC)</h3>
                <p className="text-warm-700 text-sm">احصل على NOC من المطور لتأكيد عدم وجود مستحقات. هذه الخطوة إلزامية لنقل ملكية <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">العقار الحر</Link>.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. توقيع مذكرة التفاهم (MOU)</h3>
                <p className="text-warm-700 text-sm">اتفق مع المشتري على السعر والشروط واستلم عربون 10%.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. نقل الملكية</h3>
                <p className="text-warm-700 text-sm">إتمام عملية النقل في <a href="https://www.dubailand.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">دائرة الأراضي والأملاك</a>.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف البيع</h2>
            <p className="text-warm-700 mb-4">
              جميع الوكلاء العقاريين يجب أن يكونوا مرخصين من <a href="https://www.rera.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RERA</a>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">البند</th>
                    <th className="text-right py-3 px-4 font-semibold">التكلفة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">عمولة الوكيل العقاري</td>
                    <td className="py-3 px-4">2% من سعر البيع</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">شهادة عدم الممانعة (NOC)</td>
                    <td className="py-3 px-4">500-5,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم التسوية المبكرة (إن وجد رهن)</td>
                    <td className="py-3 px-4">1% من المبلغ المتبقي</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة للبائعين</h3>
            <p className="text-accent-700 text-sm">
              جهّز عقارك جيداً قبل العرض. التصوير الاحترافي والتنظيف الشامل يمكن أن يرفعا سعر البيع بنسبة 5-10%. اطلع على <Link href="/ar/guides/home-cleaning-services-dubai" className="text-primary-600 hover:underline">دليل خدمات التنظيف</Link> للحصول على عقار نظيف ومرتب.
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
          <p className="text-sm text-warm-500 mb-4">آخر تحديث: يناير 2026 | بواسطة فريق بروبرتي ويكي</p>
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
