import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الخليج التجاري مقابل داون تاون دبي 2026 | بروبرتي ويكي',
  description: 'مقارنة شاملة بين الخليج التجاري وداون تاون دبي من حيث الأسعار والعائد الاستثماري ورسوم الخدمات والمرافق. أيهما الأفضل للاستثمار والسكن؟',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/business-bay-vs-downtown-dubai',
    title: 'الخليج التجاري مقابل داون تاون دبي 2026 | بروبرتي ويكي',
    description: 'مقارنة شاملة بين الخليج التجاري وداون تاون دبي من حيث الأسعار والعائد الاستثماري ورسوم الخدمات والمرافق.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/business-bay-vs-downtown-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/business-bay-vs-downtown-dubai',
      'x-default': 'https://propertywiki.ai/guides/business-bay-vs-downtown-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'الخليج التجاري',
    href: '/ar/locations/dubai/business-bay',
    category: 'موقع',
    description: 'دليل شامل عن منطقة الخليج التجاري وأسعار العقارات فيها.',
  },
  {
    title: 'داون تاون دبي',
    href: '/ar/locations/dubai/downtown-dubai',
    category: 'موقع',
    description: 'كل ما تحتاج معرفته عن داون تاون دبي وبرج خليفة.',
  },
  {
    title: 'أفضل المناطق للعائد الاستثماري',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'دليل',
    description: 'تعرف على المناطق ذات أعلى عائد إيجاري في دبي.',
  },
  {
    title: 'رسوم الخدمات حسب المنطقة',
    href: '/ar/guides/service-charges-by-area-dubai',
    category: 'دليل',
    description: 'مقارنة رسوم الخدمات في مختلف مناطق دبي.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل خطوة بخطوة لشراء العقارات في دبي.',
  },
]

export default function BusinessBayVsDowntownPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">الخليج التجاري مقابل داون تاون دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            الخليج التجاري مقابل داون تاون دبي - مقارنة شاملة 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يُعد كل من <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link> و<Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link> من أبرز المناطق العقارية في قلب دبي. رغم تجاورهما الجغرافي، تختلف المنطقتان بشكل كبير من حيث الأسعار والعائد الاستثماري ونمط الحياة. في هذا الدليل نقدم مقارنة تفصيلية تساعدك على اتخاذ القرار الأنسب.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة على المنطقتين</h2>
            <p className="text-warm-700 mb-4">
              تقع منطقة داون تاون دبي حول برج خليفة ودبي مول، وتُعتبر الوجهة الأكثر شهرة في دبي. تتميز بالفخامة والمعالم السياحية العالمية. في المقابل، يمتد الخليج التجاري على طول قناة دبي المائية ويشهد نمواً سريعاً مع مشاريع جديدة متنوعة. يُعد الخليج التجاري بديلاً اقتصادياً أكثر جاذبية مع الحفاظ على الموقع المركزي.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">جدول المقارنة التفصيلي</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">معيار المقارنة</th>
                    <th className="text-right py-3 px-4 font-semibold">الخليج التجاري</th>
                    <th className="text-right py-3 px-4 font-semibold">داون تاون دبي</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4 font-medium">سعر القدم المربع (شقة)</td>
                    <td className="py-3 px-4">1,200 - 1,800 درهم</td>
                    <td className="py-3 px-4">2,000 - 3,500 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">العائد الإيجاري السنوي</td>
                    <td className="py-3 px-4">6.5% - 8%</td>
                    <td className="py-3 px-4">5% - 6.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">رسوم الخدمات (درهم/قدم²)</td>
                    <td className="py-3 px-4">12 - 18 درهم</td>
                    <td className="py-3 px-4">18 - 30 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">نمو رأس المال (5 سنوات)</td>
                    <td className="py-3 px-4">35% - 50%</td>
                    <td className="py-3 px-4">25% - 40%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">أقرب محطة مترو</td>
                    <td className="py-3 px-4">محطة الخليج التجاري</td>
                    <td className="py-3 px-4">محطة برج خليفة/دبي مول</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">التأجير قصير المدى</td>
                    <td className="py-3 px-4">متاح - عوائد جيدة</td>
                    <td className="py-3 px-4">متاح - طلب سياحي عالٍ</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">نوع العقارات السائدة</td>
                    <td className="py-3 px-4">استوديوهات وشقق 1-2 غرفة</td>
                    <td className="py-3 px-4">شقق فاخرة 1-3 غرف وبنتهاوس</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">الملاءمة للعائلات</td>
                    <td className="py-3 px-4">متوسطة</td>
                    <td className="py-3 px-4">جيدة - مدارس ومرافق قريبة</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الخليج التجاري: المزايا والعيوب</h2>
            <p className="text-warm-700 mb-4">
              يتميز الخليج التجاري بأسعار دخول أقل بنسبة 30-40% مقارنة بداون تاون دبي، مما يجعله خياراً مثالياً للمستثمرين الباحثين عن عائد إيجاري مرتفع. المنطقة تشهد تطوراً مستمراً مع افتتاح مطاعم ومتاجر جديدة على ضفاف القناة المائية. من أبرز العيوب أن بعض المباني لا تزال قيد الإنشاء، وتفتقر بعض المناطق إلى المرافق الاجتماعية المكتملة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">داون تاون دبي: المزايا والعيوب</h2>
            <p className="text-warm-700 mb-4">
              تتمتع داون تاون دبي بموقع استثنائي حول برج خليفة ونافورة دبي ودبي مول. تُعد المنطقة الأكثر طلباً من السياح والمستأجرين على المدى القصير. أسعار العقارات أعلى بشكل ملحوظ، ورسوم الخدمات تُعتبر من بين الأعلى في دبي. العائد الإيجاري أقل نسبياً بسبب ارتفاع سعر الشراء، لكن الطلب المستمر يضمن نسبة إشغال عالية.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أيهما الأفضل للاستثمار؟</h2>
            <p className="text-warm-700 mb-4">
              إذا كانت ميزانيتك محدودة وتبحث عن عائد إيجاري مرتفع، فإن <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link> هو الخيار الأنسب. أما إذا كنت تفضل الاستثمار في عقار فاخر بموقع مميز مع إمكانية نمو رأس المال على المدى الطويل، فإن <Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link> تبقى الخيار الأمثل. كلا المنطقتين تقعان في مناطق <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">التملك الحر</Link> وتتمتعان بطلب مستمر.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              قبل الشراء في أي من المنطقتين، تأكد من مقارنة رسوم الخدمات بين المباني المختلفة فقد تتفاوت بشكل كبير. راجع دليل <Link href="/ar/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">رسوم الخدمات حسب المنطقة</Link> و<Link href="/ar/guides/hidden-costs-buying-property-dubai" className="text-primary-600 hover:underline">التكاليف الخفية لشراء العقارات</Link> لتقدير إجمالي المصاريف السنوية.
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
