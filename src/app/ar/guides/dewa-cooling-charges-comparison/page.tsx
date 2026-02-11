import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مقارنة رسوم التبريد والتكييف في دبي 2026 | بروبرتي ويكي',
  description: 'مقارنة شاملة بين أنظمة التبريد المركزي والفردي في دبي. تعرف على رسوم ديوا والتبريد وتكاليف التكييف حسب المنطقة.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/dewa-cooling-charges-comparison',
    title: 'مقارنة رسوم التبريد والتكييف في دبي 2026 | بروبرتي ويكي',
    description: 'مقارنة شاملة بين أنظمة التبريد المركزي والفردي في دبي. تعرف على رسوم ديوا والتبريد وتكاليف التكييف حسب المنطقة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/dewa-cooling-charges-comparison',
    languages: {
      'en': 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison',
      'ar': 'https://propertywiki.ai/ar/guides/dewa-cooling-charges-comparison',
      'x-default': 'https://propertywiki.ai/guides/dewa-cooling-charges-comparison',
    },
  },
}

const relatedArticles = [
  {
    title: 'دليل ديوا للكهرباء والمياه',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن فواتير ديوا والتوصيلات.',
  },
  {
    title: 'رسوم الخدمات حسب المنطقة',
    href: '/ar/guides/service-charges-by-area-dubai',
    category: 'دليل',
    description: 'مقارنة رسوم الخدمات السنوية في مناطق دبي.',
  },
  {
    title: 'تكاليف الصيانة حسب المجتمع',
    href: '/ar/guides/maintenance-cost-by-community-dubai',
    category: 'دليل',
    description: 'مقارنة تفصيلية لتكاليف الصيانة في مجتمعات دبي.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي.',
  },
  {
    title: 'نخلة جميرا',
    href: '/ar/locations/dubai/palm-jumeirah',
    category: 'موقع',
    description: 'استكشف عقارات نخلة جميرا وتكاليف المعيشة.',
  },
]

export default function DewaCoolingChargesComparisonPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مقارنة رسوم التبريد والتكييف</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            مقارنة رسوم التبريد والتكييف في دبي 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يمثل التبريد جزءاً كبيراً من تكاليف المعيشة في دبي. يقارن هذا الدليل بين أنظمة التبريد المختلفة وتكاليفها لمساعدتك في اختيار العقار المناسب وفهم فواتير <Link href="/ar/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">ديوا</Link> بشكل أفضل.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أنواع أنظمة التبريد في دبي</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">التبريد المركزي (District Cooling)</h3>
                <p className="text-warm-700 text-sm">نظام تبريد مركزي يخدم عدة مبانٍ من محطة واحدة. تُدار بواسطة شركات مثل إمباور وناشيونال سنترال كولينغ. الرسوم تشمل رسوم الطلب والاستهلاك الفعلي.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">التبريد الفردي (Individual AC)</h3>
                <p className="text-warm-700 text-sm">وحدات تكييف منفصلة لكل شقة أو فيلا. يُحسب الاستهلاك ضمن فاتورة ديوا للكهرباء. يتحمل المالك تكاليف صيانة الوحدات.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">التبريد المركزي للمبنى (Chiller)</h3>
                <p className="text-warm-700 text-sm">نظام تبريد مركزي خاص بالمبنى. تُوزع التكاليف على المالكين حسب المساحة أو من خلال عدادات فردية. تُدرج عادةً ضمن رسوم الخدمات.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة تكاليف التبريد الشهرية</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع العقار</th>
                    <th className="text-right py-3 px-4 font-semibold">تبريد مركزي (شهرياً)</th>
                    <th className="text-right py-3 px-4 font-semibold">تبريد فردي (شهرياً)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">استوديو</td>
                    <td className="py-3 px-4">400 - 700 درهم</td>
                    <td className="py-3 px-4">300 - 600 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">شقة غرفة واحدة</td>
                    <td className="py-3 px-4">600 - 1,200 درهم</td>
                    <td className="py-3 px-4">500 - 900 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">شقة غرفتين</td>
                    <td className="py-3 px-4">900 - 1,800 درهم</td>
                    <td className="py-3 px-4">700 - 1,400 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">فيلا 3 غرف</td>
                    <td className="py-3 px-4">1,500 - 3,000 درهم</td>
                    <td className="py-3 px-4">1,200 - 2,500 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-warm-500 mt-2">* الأسعار تقريبية وتختلف حسب الموسم والاستخدام. تكاليف الصيف أعلى بنسبة 40-60% من الشتاء.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المناطق حسب نوع التبريد</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">مناطق التبريد المركزي</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• <Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link></li>
                  <li>• <Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></li>
                  <li>• <Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس</Link></li>
                  <li>• <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link> (معظم المباني)</li>
                  <li>• <Link href="/ar/locations/dubai/difc" className="text-primary-600 hover:underline">مركز دبي المالي العالمي</Link></li>
                </ul>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">مناطق التبريد الفردي</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> (بعض المباني)</li>
                  <li>• قرية جميرا الدائرية (JVC)</li>
                  <li>• <Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link> (فلل)</li>
                  <li>• واحة دبي للسيليكون</li>
                  <li>• المدينة العالمية</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نصائح لتقليل تكاليف التبريد</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>اضبط المكيف على 24 درجة مئوية - كل درجة أقل تزيد الاستهلاك بنسبة 6-8%</li>
              <li>استخدم المؤقت لإيقاف التكييف عند الخروج من المنزل</li>
              <li>نظّف فلاتر المكيف شهرياً لتحسين الكفاءة</li>
              <li>استخدم ستائر عاكسة للحرارة على النوافذ المواجهة للشمس</li>
              <li>تأكد من عزل النوافذ والأبواب لمنع تسرب الهواء البارد</li>
              <li>اختر عقاراً بعزل حراري جيد عند <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">شراء عقار</Link></li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              عند اختيار عقار، اسأل عن نوع نظام التبريد وتكاليفه الفعلية. التبريد المركزي يكون أغلى في الغالب لكنه أكثر كفاءة وموثوقية. راجع <Link href="/ar/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">رسوم الخدمات حسب المنطقة</Link> لفهم التكاليف الشاملة واحتسب رسوم التبريد ضمن ميزانيتك الشهرية.
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
