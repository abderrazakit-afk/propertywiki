import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مجتمعات على مسافة مشي من المترو في دبي 2026 | بروبرتي ويكي',
  description: 'اكتشف أفضل المجتمعات السكنية في دبي التي يمكنك الوصول منها لمحطات المترو سيراً على الأقدام خلال دقائق.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/walking-distance-metro-communities',
    title: 'مجتمعات على مسافة مشي من المترو في دبي 2026 | بروبرتي ويكي',
    description: 'اكتشف أفضل المجتمعات السكنية في دبي التي يمكنك الوصول منها لمحطات المترو سيراً على الأقدام خلال دقائق.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/walking-distance-metro-communities',
    languages: {
      'en': 'https://propertywiki.ai/guides/walking-distance-metro-communities',
      'ar': 'https://propertywiki.ai/ar/guides/walking-distance-metro-communities',
      'x-default': 'https://propertywiki.ai/guides/walking-distance-metro-communities',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل المناطق القريبة من مترو دبي',
    href: '/ar/guides/best-areas-near-dubai-metro',
    category: 'دليل',
    description: 'دليل شامل لأفضل المناطق السكنية بالقرب من شبكة مترو دبي.',
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
    title: 'داون تاون دبي',
    href: '/ar/locations/dubai/downtown-dubai',
    category: 'موقع',
    description: 'استكشف قلب دبي ومحطة مترو برج خليفة/دبي مول.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'تعرف على دبي مارينا ووصولها الممتاز لشبكة المترو والترام.',
  },
]

export default function WalkingDistanceMetroPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مجتمعات على مسافة مشي من المترو</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            مجتمعات على مسافة مشي من المترو في دبي
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يبحث كثير من السكان والمستثمرين عن عقارات يمكن الوصول منها إلى محطات المترو سيراً على الأقدام. هذا الدليل يستعرض أفضل المجتمعات السكنية التي تقع على بُعد 5-10 دقائق مشي من أقرب محطة مترو في دبي.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. ما هي مسافة المشي المثالية؟</li>
              <li>2. مجتمعات الخط الأحمر</li>
              <li>3. مجتمعات الخط الأخضر</li>
              <li>4. مجتمعات خط الترام</li>
              <li>5. مقارنة الأسعار</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ما هي مسافة المشي المثالية؟</h2>
            <p className="text-warm-700 mb-4">
              تُعتبر المسافة المثالية للمشي إلى محطة المترو هي 500 متر أو أقل، أي ما يعادل 5-7 دقائق سيراً. المناطق التي تقع ضمن هذا النطاق تحظى بطلب أعلى وعوائد إيجارية أفضل. للاطلاع على نظرة أشمل، راجع دليل <Link href="/ar/guides/best-areas-near-dubai-metro" className="text-primary-600 hover:underline">أفضل المناطق القريبة من مترو دبي</Link>.
            </p>
            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <p className="text-blue-800 text-sm font-medium">💡 العقارات ضمن 500 متر من المترو تحقق عوائد إيجارية أعلى بنسبة 10-15% وتُباع أسرع بنسبة 20%.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مجتمعات على مسافة مشي من الخط الأحمر</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> - محطة دبي مارينا</h3>
                <p className="text-warm-700 text-sm">أبراج سكنية متعددة تقع على بُعد 2-5 دقائق مشي من محطة مترو دبي مارينا. تتوفر أيضاً محطات ترام قريبة مما يوفر خيارات تنقل إضافية. أسعار الشقق تبدأ من 800 ألف درهم للاستوديو.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link> - محطة الخليج التجاري</h3>
                <p className="text-warm-700 text-sm">عشرات الأبراج السكنية والتجارية على بُعد دقائق من المحطة. منطقة مثالية للمهنيين العاملين في مركز دبي المالي أو داون تاون. أسعار تنافسية مع عوائد إيجارية تصل إلى 8%.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2"><Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link> - محطة برج خليفة/دبي مول</h3>
                <p className="text-warm-700 text-sm">المنطقة الأكثر شهرة في دبي مع وصول مباشر للمترو عبر ممرات مكيفة. مناسبة لمن يبحث عن نمط حياة فاخر مع سهولة التنقل بالمواصلات العامة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">أبراج بحيرات الجميرا (JLT) - محطة أبراج البحيرات</h3>
                <p className="text-warm-700 text-sm">مجتمع سكني متكامل مع محطة مترو مخصصة. أسعار أقل من دبي مارينا المجاورة مع نفس مستوى الوصول للمواصلات العامة.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مجتمعات على مسافة مشي من الخط الأخضر</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">الكرامة - محطة الكرامة</h3>
                <p className="text-warm-700 text-sm">من أكثر المناطق اقتصادية مع وصول ممتاز للمترو. مناسبة للمستأجرين ذوي الميزانية المحدودة والمستثمرين الباحثين عن عوائد مرتفعة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">بر دبي - محطات متعددة</h3>
                <p className="text-warm-700 text-sm">منطقة تاريخية تخدمها عدة محطات على الخط الأخضر. تتميز بقربها من الأسواق التقليدية والمرافق الحكومية.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة الأسعار حسب المسافة من المترو</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المسافة من المترو</th>
                    <th className="text-right py-3 px-4 font-semibold">فرق السعر</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد الإيجاري</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">أقل من 300 متر</td><td className="py-3 px-4">+15-20%</td><td className="py-3 px-4">7-9%</td></tr>
                  <tr><td className="py-3 px-4">300-500 متر</td><td className="py-3 px-4">+10-15%</td><td className="py-3 px-4">6.5-8%</td></tr>
                  <tr><td className="py-3 px-4">500 متر - 1 كم</td><td className="py-3 px-4">+5-10%</td><td className="py-3 px-4">6-7%</td></tr>
                  <tr><td className="py-3 px-4">أكثر من 1 كم</td><td className="py-3 px-4">السعر الأساسي</td><td className="py-3 px-4">5-6.5%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              تحقق دائماً من المسافة الفعلية بالمشي وليس المسافة الجوية. بعض المناطق قد تبدو قريبة على الخريطة لكن الطريق الفعلي أطول بسبب الطرق السريعة أو مناطق البناء. إذا كنت تبحث عن حياة بدون سيارة، اطلع على دليل <Link href="/ar/guides/car-free-living-areas-dubai" className="text-primary-600 hover:underline">مناطق العيش بدون سيارة في دبي</Link>.
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
