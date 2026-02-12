import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'عائد إيجار الاستوديو حسب المنطقة | بروبرتي ويكي',
  description: 'مقارنة شاملة لعوائد إيجار الاستوديوهات في مناطق دبي المختلفة. بيانات محدثة لعام 2026 مع تحليل لكل منطقة.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/studio-rental-yield-by-area',
    title: 'عائد إيجار الاستوديو حسب المنطقة | بروبرتي ويكي',
    description: 'مقارنة شاملة لعوائد إيجار الاستوديوهات في مناطق دبي المختلفة. بيانات محدثة لعام 2026 مع تحليل لكل منطقة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/studio-rental-yield-by-area',
    languages: {
      'en': 'https://propertywiki.ai/guides/studio-rental-yield-by-area',
      'ar': 'https://propertywiki.ai/ar/guides/studio-rental-yield-by-area',
      'x-default': 'https://propertywiki.ai/guides/studio-rental-yield-by-area',
    },
  },
}

const relatedArticles = [
  {
    title: 'أعلى مناطق العائد الإيجاري في دبي',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'استثمار',
    description: 'تحليل شامل لأعلى المناطق من حيث العائد الإيجاري في دبي.',
  },
  {
    title: 'أفضل مناطق بعائد 8% في دبي',
    href: '/ar/guides/best-areas-8-percent-roi-dubai',
    category: 'استثمار',
    description: 'المناطق التي تحقق عائداً استثمارياً يتجاوز 8% سنوياً.',
  },
  {
    title: 'أفضل المناطق بأقل من مليون درهم بعائد جيد',
    href: '/ar/guides/best-areas-under-1m-good-roi',
    category: 'استثمار',
    description: 'فرص استثمارية بميزانية أقل من مليون درهم مع عوائد مجزية.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'دليل شامل للعقارات والاستثمار في دبي مارينا.',
  },
  {
    title: 'الخليج التجاري',
    href: '/ar/locations/dubai/business-bay',
    category: 'موقع',
    description: 'دليل شامل للعقارات والاستثمار في الخليج التجاري.',
  },
]

export default function StudioRentalYieldByAreaPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">عائد إيجار الاستوديو حسب المنطقة</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            عائد إيجار الاستوديو حسب المنطقة
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تُعد شقق الاستوديو من أكثر أنواع العقارات طلباً في سوق الإيجار بدبي، وتحقق أعلى عوائد إيجارية نسبياً مقارنة بالوحدات الأكبر. يعود ذلك إلى انخفاض سعر الشراء مع إيجارات مرتفعة نسبياً، وهو ما يجعلها الخيار المفضل للمستثمرين الباحثين عن التدفق النقدي.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">لماذا الاستوديو؟</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-3">
              <li><strong>رأس مال أقل:</strong> أسعار شراء تبدأ من 250,000 درهم مما يتيح دخول السوق بسهولة.</li>
              <li><strong>طلب إيجاري مرتفع:</strong> يفضله المهنيون الشباب والعزاب الذين يشكلون شريحة كبيرة من سكان دبي.</li>
              <li><strong>سهولة الإدارة:</strong> تكاليف صيانة أقل ومعدل دوران مستأجرين أسرع.</li>
              <li><strong>عائد إيجاري أعلى:</strong> نسبة الإيجار إلى السعر أعلى من الوحدات الكبيرة في معظم المناطق.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">جدول مقارنة عوائد الاستوديو</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">سعر الشراء</th>
                    <th className="text-right py-3 px-4 font-semibold">الإيجار السنوي</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد الإيجاري</th>
                    <th className="text-right py-3 px-4 font-semibold">رسوم الخدمات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">المدينة العالمية</td>
                    <td className="py-3 px-4">250,000 درهم</td>
                    <td className="py-3 px-4">22,000 درهم</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">8.8%</td>
                    <td className="py-3 px-4">منخفضة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">JVC</td>
                    <td className="py-3 px-4">400,000 درهم</td>
                    <td className="py-3 px-4">34,000 درهم</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">8.5%</td>
                    <td className="py-3 px-4">متوسطة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">DSO</td>
                    <td className="py-3 px-4">350,000 درهم</td>
                    <td className="py-3 px-4">28,000 درهم</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">8.0%</td>
                    <td className="py-3 px-4">منخفضة-متوسطة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">المدينة الرياضية</td>
                    <td className="py-3 px-4">330,000 درهم</td>
                    <td className="py-3 px-4">26,000 درهم</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">7.9%</td>
                    <td className="py-3 px-4">متوسطة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">ديسكفري جاردنز</td>
                    <td className="py-3 px-4">370,000 درهم</td>
                    <td className="py-3 px-4">28,000 درهم</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">7.6%</td>
                    <td className="py-3 px-4">متوسطة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></td>
                    <td className="py-3 px-4">580,000 درهم</td>
                    <td className="py-3 px-4">42,000 درهم</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">7.2%</td>
                    <td className="py-3 px-4">متوسطة-مرتفعة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td>
                    <td className="py-3 px-4">700,000 درهم</td>
                    <td className="py-3 px-4">48,000 درهم</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">6.9%</td>
                    <td className="py-3 px-4">مرتفعة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">داون تاون دبي</td>
                    <td className="py-3 px-4">850,000 درهم</td>
                    <td className="py-3 px-4">52,000 درهم</td>
                    <td className="py-3 px-4">6.1%</td>
                    <td className="py-3 px-4">مرتفعة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">نخلة جميرا</td>
                    <td className="py-3 px-4">1,200,000 درهم</td>
                    <td className="py-3 px-4">65,000 درهم</td>
                    <td className="py-3 px-4">5.4%</td>
                    <td className="py-3 px-4">مرتفعة جداً</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تحليل النتائج</h2>
            <p className="text-warm-700 mb-4">
              يتضح من الجدول أن هناك علاقة عكسية بين سعر العقار والعائد الإيجاري. المناطق ذات الأسعار المنخفضة مثل المدينة العالمية وJVC تحقق أعلى العوائد، بينما المناطق الفاخرة مثل نخلة جميرا تحقق عوائد أقل لكنها تتميز بنمو رأس المال الأعلى.
            </p>
            <p className="text-warm-700 mb-4">
              عند اختيار الاستوديو المناسب للاستثمار، يجب مراعاة العائد الصافي بعد خصم رسوم الخدمات. المناطق ذات رسوم الخدمات المنخفضة مثل DSO والمدينة العالمية تحافظ على معظم العائد الإجمالي. في المقابل، مناطق مثل <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> قد تتأثر عوائدها الصافية برسوم الخدمات المرتفعة.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              عند شراء استوديو للاستثمار، تأكد من اختيار وحدة في طابق مرتفع مع إطلالة جيدة، فهذا يرفع قيمة الإيجار بنسبة 5-10%. كذلك، الوحدات المفروشة في المناطق السياحية مثل دبي مارينا والخليج التجاري تحقق عوائد أعلى بكثير من الوحدات الفارغة. تعرف على <Link href="/ar/guides/best-areas-under-1m-good-roi" className="text-primary-600 hover:underline">أفضل المناطق بأقل من مليون درهم</Link> لمزيد من خيارات الاستثمار.
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

        <nav className="mt-10 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">دبي مارينا</p>
            </Link>
            <Link href="/ar/locations/dubai/jbr" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">جي بي آر</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/best-areas-airbnb-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مناطق Airbnb في دبي</p>
            </Link>
            <Link href="/ar/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أعلى مناطق العائد الإيجاري في دبي</p>
            </Link>
            <Link href="/ar/guides/best-areas-8-percent-roi-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مناطق بعائد 8% في دبي</p>
            </Link>
          </div>
        </nav>

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
