import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أفضل المناطق القريبة من مترو دبي 2026 | بروبرتي ويكي',
  description: 'دليل شامل لأفضل المناطق السكنية القريبة من محطات مترو دبي. اكتشف العقارات ذات الوصول السهل للمواصلات العامة.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/best-areas-near-dubai-metro',
    title: 'أفضل المناطق القريبة من مترو دبي 2026 | بروبرتي ويكي',
    description: 'دليل شامل لأفضل المناطق السكنية القريبة من محطات مترو دبي. اكتشف العقارات ذات الوصول السهل للمواصلات العامة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/best-areas-near-dubai-metro',
    languages: {
      'en': 'https://propertywiki.ai/guides/best-areas-near-dubai-metro',
      'ar': 'https://propertywiki.ai/ar/guides/best-areas-near-dubai-metro',
      'x-default': 'https://propertywiki.ai/guides/best-areas-near-dubai-metro',
    },
  },
}

const relatedArticles = [
  {
    title: 'مجتمعات على مسافة مشي من المترو',
    href: '/ar/guides/walking-distance-metro-communities',
    category: 'دليل',
    description: 'اكتشف المجتمعات السكنية التي يمكنك الوصول منها للمترو سيراً على الأقدام.',
  },
  {
    title: 'عقارات قرب الخط الأحمر لمترو دبي',
    href: '/ar/guides/property-near-red-line-metro-dubai',
    category: 'دليل',
    description: 'أفضل العقارات والمناطق على امتداد الخط الأحمر لمترو دبي.',
  },
  {
    title: 'مناطق العيش بدون سيارة في دبي',
    href: '/ar/guides/car-free-living-areas-dubai',
    category: 'دليل',
    description: 'مناطق في دبي يمكنك العيش فيها بدون الحاجة لسيارة خاصة.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'استكشف منطقة دبي مارينا القريبة من محطات المترو والترام.',
  },
  {
    title: 'الخليج التجاري',
    href: '/ar/locations/dubai/business-bay',
    category: 'موقع',
    description: 'تعرف على منطقة الخليج التجاري وقربها من شبكة المترو.',
  },
]

export default function BestAreasNearMetroPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">أفضل المناطق القريبة من مترو دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            أفضل المناطق القريبة من مترو دبي - دليل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يُعد مترو دبي من أهم وسائل المواصلات العامة في الإمارة، ويمتد على خطين رئيسيين يربطان أهم المناطق السكنية والتجارية. اختيار عقار قريب من المترو يوفر سهولة التنقل ويرفع من قيمة الاستثمار العقاري.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. لماذا القرب من المترو مهم؟</li>
              <li>2. أفضل المناطق على الخط الأحمر</li>
              <li>3. أفضل المناطق على الخط الأخضر</li>
              <li>4. متوسط الأسعار والعوائد</li>
              <li>5. نصائح للمشترين</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">لماذا القرب من المترو مهم؟</h2>
            <p className="text-warm-700 mb-4">
              تشير الدراسات إلى أن العقارات القريبة من محطات المترو تحقق عوائد إيجارية أعلى بنسبة 10-15% مقارنة بالمناطق البعيدة عن المواصلات العامة. كما أن الطلب على الإيجار يكون أعلى بشكل ملحوظ، خاصة من المستأجرين الذين يفضلون عدم امتلاك سيارة.
            </p>
            <p className="text-warm-700 mb-4">
              يمكنك أيضاً الاطلاع على دليل <Link href="/ar/guides/car-free-living-areas-dubai" className="text-primary-600 hover:underline">مناطق العيش بدون سيارة في دبي</Link> لمزيد من المعلومات حول نمط الحياة بدون سيارة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أفضل المناطق على الخط الأحمر</h2>
            <p className="text-warm-700 mb-4">
              يمتد الخط الأحمر من راشدية إلى جبل علي مروراً بأهم المناطق. للمزيد عن عقارات الخط الأحمر، اطلع على دليل <Link href="/ar/guides/property-near-red-line-metro-dubai" className="text-primary-600 hover:underline">عقارات قرب الخط الأحمر</Link>.
            </p>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></h3>
                <p className="text-warm-700 text-sm">تتميز بمحطتي مترو (دبي مارينا ومحطة دي إم سي سي) بالإضافة إلى خط الترام. منطقة نابضة بالحياة مع خيارات سكنية متنوعة من الاستوديوهات إلى البنتهاوس.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></h3>
                <p className="text-warm-700 text-sm">يخدمها محطة الخليج التجاري على الخط الأحمر. منطقة مركزية مثالية للمهنيين مع أسعار تنافسية مقارنة بداون تاون دبي المجاورة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. <Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></h3>
                <p className="text-warm-700 text-sm">تتميز بمحطة برج خليفة/دبي مول على الخط الأحمر. قلب دبي النابض ومركز الأعمال والترفيه مع أعلى الأسعار العقارية.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">4. البرشاء</h3>
                <p className="text-warm-700 text-sm">منطقة سكنية متطورة بأسعار معقولة قريبة من مول الإمارات ومحطة مترو شرف دي جي. خيار ممتاز للعائلات.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أفضل المناطق على الخط الأخضر</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. بر دبي والكرامة</h3>
                <p className="text-warm-700 text-sm">مناطق تاريخية بأسعار مناسبة على الخط الأخضر. توفر خيارات إيجارية اقتصادية مع وصول ممتاز للمترو والحافلات.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. ديرة</h3>
                <p className="text-warm-700 text-sm">تضم عدة محطات على الخط الأخضر. منطقة تجارية نشطة بأسعار عقارية تنافسية ومناسبة للمستثمرين الباحثين عن عوائد إيجارية مرتفعة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. القصيص والنهدة</h3>
                <p className="text-warm-700 text-sm">مناطق سكنية شعبية بأسعار معقولة مع محطات مترو قريبة. مثالية للعائلات والمستأجرين ذوي الميزانية المحدودة.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">متوسط الأسعار والعوائد</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">متوسط سعر الشقة</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد الإيجاري</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">دبي مارينا</td><td className="py-3 px-4">1.2 - 2.5 مليون درهم</td><td className="py-3 px-4">6-7%</td></tr>
                  <tr><td className="py-3 px-4">الخليج التجاري</td><td className="py-3 px-4">800 ألف - 1.8 مليون درهم</td><td className="py-3 px-4">6.5-8%</td></tr>
                  <tr><td className="py-3 px-4">داون تاون دبي</td><td className="py-3 px-4">1.5 - 3.5 مليون درهم</td><td className="py-3 px-4">5-6.5%</td></tr>
                  <tr><td className="py-3 px-4">البرشاء</td><td className="py-3 px-4">600 ألف - 1.2 مليون درهم</td><td className="py-3 px-4">7-8%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              عند البحث عن عقار قريب من المترو، تأكد من أن المسافة الفعلية لا تتجاوز 500 متر سيراً على الأقدام. بعض المشاريع تُسوّق على أنها "قريبة من المترو" لكنها تبعد أكثر من كيلومتر. اطلع على دليل <Link href="/ar/guides/walking-distance-metro-communities" className="text-primary-600 hover:underline">مجتمعات على مسافة مشي من المترو</Link> للتفاصيل.
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
