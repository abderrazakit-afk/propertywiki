import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'عقارات قرب الخط الأحمر لمترو دبي 2026 | بروبرتي ويكي',
  description: 'دليل شامل للعقارات والمناطق السكنية على امتداد الخط الأحمر لمترو دبي. أسعار ومميزات كل منطقة.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/property-near-red-line-metro-dubai',
    title: 'عقارات قرب الخط الأحمر لمترو دبي 2026 | بروبرتي ويكي',
    description: 'دليل شامل للعقارات والمناطق السكنية على امتداد الخط الأحمر لمترو دبي. أسعار ومميزات كل منطقة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/property-near-red-line-metro-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/property-near-red-line-metro-dubai',
      'x-default': 'https://propertywiki.ai/guides/property-near-red-line-metro-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل المناطق القريبة من مترو دبي',
    href: '/ar/guides/best-areas-near-dubai-metro',
    category: 'دليل',
    description: 'نظرة شاملة على أفضل المناطق بالقرب من جميع خطوط المترو.',
  },
  {
    title: 'مجتمعات على مسافة مشي من المترو',
    href: '/ar/guides/walking-distance-metro-communities',
    category: 'دليل',
    description: 'مجتمعات سكنية يمكنك الوصول منها للمترو سيراً على الأقدام.',
  },
  {
    title: 'مناطق العيش بدون سيارة في دبي',
    href: '/ar/guides/car-free-living-areas-dubai',
    category: 'دليل',
    description: 'أفضل المناطق للعيش بدون سيارة خاصة في دبي.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'دليل شامل لمنطقة دبي مارينا على الخط الأحمر.',
  },
  {
    title: 'داون تاون دبي',
    href: '/ar/locations/dubai/downtown-dubai',
    category: 'موقع',
    description: 'استكشف داون تاون دبي ومحطة برج خليفة/دبي مول.',
  },
]

export default function PropertyNearRedLineMetroPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">عقارات قرب الخط الأحمر لمترو دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            عقارات قرب الخط الأحمر لمترو دبي - دليل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            الخط الأحمر هو الخط الرئيسي لمترو دبي ويمتد بطول 52 كيلومتراً من الراشدية شرقاً إلى جبل علي غرباً، مروراً بأهم المناطق السكنية والتجارية في دبي. يضم 29 محطة ويخدم ملايين الركاب شهرياً.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. نظرة عامة على الخط الأحمر</li>
              <li>2. المناطق الرئيسية على الخط الأحمر</li>
              <li>3. مقارنة الأسعار</li>
              <li>4. أفضل المحطات للاستثمار</li>
              <li>5. التطويرات المستقبلية</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة على الخط الأحمر</h2>
            <p className="text-warm-700 mb-4">
              يُعد الخط الأحمر العمود الفقري لشبكة المواصلات العامة في دبي. يربط بين المطار الدولي ومناطق الأعمال والترفيه الرئيسية. المناطق القريبة من محطاته تتميز بارتفاع الطلب على الإيجار وسهولة التنقل اليومي.
            </p>
            <p className="text-warm-700 mb-4">
              للاطلاع على جميع المناطق القريبة من المترو بما فيها الخط الأخضر، راجع دليل <Link href="/ar/guides/best-areas-near-dubai-metro" className="text-primary-600 hover:underline">أفضل المناطق القريبة من مترو دبي</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المناطق الرئيسية على الخط الأحمر</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">محطة <Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">برج خليفة/دبي مول</Link></h3>
                <p className="text-warm-700 text-sm">أشهر محطة على الخط الأحمر وتخدم منطقة داون تاون دبي. تحيط بها أبراج سكنية فاخرة ومراكز تجارية عالمية. العقارات هنا تُعد من الأعلى سعراً في دبي لكنها تحافظ على قيمتها الاستثمارية.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">محطة <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></h3>
                <p className="text-warm-700 text-sm">منطقة أعمال نشطة مع أبراج سكنية حديثة. تقدم أسعاراً أفضل من داون تاون المجاورة مع نفس مستوى الوصول للمترو. مثالية للمستثمرين الباحثين عن عوائد إيجارية مرتفعة من المستأجرين المهنيين.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">محطة مركز دبي المالي العالمي (DIFC)</h3>
                <p className="text-warm-700 text-sm">تخدم منطقة مركز دبي المالي العالمي. مناسبة للمهنيين في القطاع المالي مع مطاعم ومقاهي راقية. العقارات المحيطة تجذب مستأجرين ذوي دخل مرتفع.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">محطة <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></h3>
                <p className="text-warm-700 text-sm">تخدم منطقة المارينا النابضة بالحياة مع إطلالات بحرية. ترتبط أيضاً بخط الترام مما يوسع نطاق الوصول إلى JBR والمناطق المحيطة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">محطة مول الإمارات/البرشاء</h3>
                <p className="text-warm-700 text-sm">تخدم منطقة البرشاء السكنية ومول الإمارات. أسعار معقولة مقارنة بالمناطق الساحلية مع بنية تحتية ممتازة ومدارس ومستشفيات قريبة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">محطة ابن بطوطة</h3>
                <p className="text-warm-700 text-sm">تقع في الجهة الغربية من الخط الأحمر وتخدم مجمع ابن بطوطة ومنطقة ديسكفري غاردنز. خيار اقتصادي ممتاز للعائلات مع مساحات أكبر بأسعار أقل.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة الأسعار على الخط الأحمر</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المحطة/المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">سعر القدم المربع</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد الإيجاري</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">داون تاون دبي</td><td className="py-3 px-4">2,200 - 3,500 درهم</td><td className="py-3 px-4">5-6.5%</td></tr>
                  <tr><td className="py-3 px-4">الخليج التجاري</td><td className="py-3 px-4">1,400 - 2,200 درهم</td><td className="py-3 px-4">6.5-8%</td></tr>
                  <tr><td className="py-3 px-4">دبي مارينا</td><td className="py-3 px-4">1,800 - 2,800 درهم</td><td className="py-3 px-4">6-7%</td></tr>
                  <tr><td className="py-3 px-4">البرشاء</td><td className="py-3 px-4">900 - 1,500 درهم</td><td className="py-3 px-4">7-8%</td></tr>
                  <tr><td className="py-3 px-4">ديسكفري غاردنز</td><td className="py-3 px-4">600 - 900 درهم</td><td className="py-3 px-4">8-9%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">التطويرات المستقبلية</h2>
            <p className="text-warm-700 mb-4">
              تعمل هيئة الطرق والمواصلات في دبي على توسيع شبكة المترو بإضافة محطات جديدة وخطوط إضافية. من المتوقع أن ترتفع قيمة العقارات القريبة من المحطات الجديدة بشكل ملحوظ عند اكتمال التوسعات.
            </p>
            <p className="text-warm-700 mb-4">
              للتعرف على المجتمعات التي يمكنك المشي منها للمترو، اطلع على دليل <Link href="/ar/guides/walking-distance-metro-communities" className="text-primary-600 hover:underline">مجتمعات على مسافة مشي من المترو</Link>.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              استثمر في المناطق القريبة من محطات المترو المخطط لها مستقبلاً للحصول على أسعار أفضل قبل ارتفاعها. تابع إعلانات هيئة الطرق والمواصلات عن مشاريع التوسعة الجديدة. اطلع أيضاً على دليل <Link href="/ar/guides/car-free-living-areas-dubai" className="text-primary-600 hover:underline">مناطق العيش بدون سيارة</Link> لفهم اتجاهات التنقل الحديثة.
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
            <Link href="/ar/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">الخليج التجاري</p>
            </Link>
            <Link href="/ar/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">داون تاون دبي</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/best-areas-near-dubai-metro" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل المناطق القريبة من مترو دبي</p>
            </Link>
            <Link href="/ar/guides/walking-distance-metro-communities" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">مجتمعات على مسافة مشي من المترو</p>
            </Link>
            <Link href="/ar/guides/affordable-areas-near-metro-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">مناطق بأسعار معقولة قرب المترو</p>
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
