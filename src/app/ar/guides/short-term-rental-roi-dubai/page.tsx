import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'عائد الإيجار قصير المدى في دبي 2026 | بروبرتي ويكي',
  description: 'تحليل شامل لعائد الاستثمار من الإيجار قصير المدى في دبي. مقارنة العوائد بين المناطق وأنواع العقارات مع حسابات تفصيلية.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/short-term-rental-roi-dubai',
    title: 'عائد الإيجار قصير المدى في دبي 2026 | بروبرتي ويكي',
    description: 'تحليل شامل لعائد الاستثمار من الإيجار قصير المدى في دبي. مقارنة العوائد بين المناطق وأنواع العقارات مع حسابات تفصيلية.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/short-term-rental-roi-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/short-term-rental-roi-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/short-term-rental-roi-dubai',
      'x-default': 'https://propertywiki.ai/guides/short-term-rental-roi-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل مناطق إير بي إن بي في دبي',
    href: '/ar/guides/best-areas-airbnb-dubai',
    category: 'دليل',
    description: 'تعرف على أفضل المناطق للتأجير قصير المدى في دبي.',
  },
  {
    title: 'أعلى مناطق سعر الليلة في دبي',
    href: '/ar/guides/highest-nightly-rate-areas-dubai',
    category: 'دليل',
    description: 'المناطق التي تحقق أعلى سعر لليلة الواحدة في دبي.',
  },
  {
    title: 'رخصة الإيجار قصير المدى في دبي',
    href: '/ar/guides/short-term-rental-license-dubai',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن ترخيص الإيجار قصير المدى.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'تعرف على نظام التملك الحر وحقوق المالكين الأجانب.',
  },
  {
    title: 'أعلى مناطق العائد الإيجاري في دبي',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'دليل',
    description: 'المناطق التي تحقق أعلى عائد إيجاري سنوي.',
  },
]

export default function ShortTermRentalRoiDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">عائد الإيجار قصير المدى في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            عائد الإيجار قصير المدى في دبي - تحليل شامل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يُحقق الإيجار قصير المدى في دبي عوائد تتفوق بشكل كبير على الإيجار التقليدي طويل المدى. نقدم في هذا الدليل تحليلاً تفصيلياً للعوائد المتوقعة مع حسابات واقعية للتكاليف والأرباح.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. الإيجار قصير المدى مقابل طويل المدى</li>
              <li>2. حساب العائد على الاستثمار</li>
              <li>3. العوائد حسب المنطقة ونوع العقار</li>
              <li>4. التكاليف التشغيلية</li>
              <li>5. عوامل تؤثر على العائد</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الإيجار قصير المدى مقابل طويل المدى</h2>
            <p className="text-warm-700 mb-4">
              يُمكن للإيجار قصير المدى أن يحقق عوائد أعلى بنسبة 30-80% مقارنة بالإيجار السنوي، لكنه يتطلب إدارة أكثر نشاطاً وتكاليف تشغيلية إضافية. المفتاح هو اختيار المنطقة المناسبة والحفاظ على معدل إشغال مرتفع.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المعيار</th>
                    <th className="text-right py-3 px-4 font-semibold">إيجار قصير المدى</th>
                    <th className="text-right py-3 px-4 font-semibold">إيجار سنوي</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">العائد السنوي</td><td className="py-3 px-4">8-15%</td><td className="py-3 px-4">5-8%</td></tr>
                  <tr><td className="py-3 px-4">الإدارة</td><td className="py-3 px-4">مكثفة / شركة إدارة</td><td className="py-3 px-4">بسيطة</td></tr>
                  <tr><td className="py-3 px-4">الترخيص</td><td className="py-3 px-4">رخصة DTCM مطلوبة</td><td className="py-3 px-4">عقد إيجاري فقط</td></tr>
                  <tr><td className="py-3 px-4">المرونة</td><td className="py-3 px-4">عالية (استخدام شخصي ممكن)</td><td className="py-3 px-4">محدودة</td></tr>
                  <tr><td className="py-3 px-4">التكاليف التشغيلية</td><td className="py-3 px-4">15-25% من الإيرادات</td><td className="py-3 px-4">5-10%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">حساب العائد على الاستثمار</h2>
            <p className="text-warm-700 mb-4">مثال عملي: شقة استوديو في <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></p>
            <div className="bg-primary-50 rounded-xl p-5 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">بيانات الاستثمار</h3>
              <ul className="text-warm-700 text-sm space-y-2">
                <li>سعر الشراء: 750,000 درهم</li>
                <li>متوسط سعر الليلة: 650 درهم</li>
                <li>معدل الإشغال السنوي: 80% (292 ليلة)</li>
                <li>الإيرادات السنوية: 189,800 درهم</li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-xl p-5 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">التكاليف السنوية</h3>
              <ul className="text-warm-700 text-sm space-y-2">
                <li>رسوم الخدمات: 15,000 درهم</li>
                <li>كهرباء ومياه (DEWA): 8,000 درهم</li>
                <li>إنترنت وتلفزيون: 4,800 درهم</li>
                <li>تنظيف وصيانة: 18,000 درهم</li>
                <li>عمولة شركة الإدارة (20%): 37,960 درهم</li>
                <li>رخصة DTCM ورسوم: 3,500 درهم</li>
                <li>تأمين ومصاريف أخرى: 5,000 درهم</li>
                <li><strong>إجمالي التكاليف: 92,260 درهم</strong></li>
              </ul>
            </div>
            <div className="bg-accent-50 rounded-xl p-5 border border-accent-200">
              <h3 className="font-semibold text-accent-800 mb-2">صافي العائد</h3>
              <p className="text-accent-700 text-sm">
                صافي الربح السنوي: 97,540 درهم | العائد الصافي: 13% | مقارنة بالإيجار السنوي (6-7%): تفوق بنسبة ~90%
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">العوائد حسب المنطقة ونوع العقار</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">استوديو</th>
                    <th className="text-right py-3 px-4 font-semibold">غرفة واحدة</th>
                    <th className="text-right py-3 px-4 font-semibold">غرفتان</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">دبي مارينا</td><td className="py-3 px-4">11-13%</td><td className="py-3 px-4">10-12%</td><td className="py-3 px-4">9-11%</td></tr>
                  <tr><td className="py-3 px-4">نخلة جميرا</td><td className="py-3 px-4">8-10%</td><td className="py-3 px-4">8-11%</td><td className="py-3 px-4">7-10%</td></tr>
                  <tr><td className="py-3 px-4">JBR</td><td className="py-3 px-4">10-12%</td><td className="py-3 px-4">9-11%</td><td className="py-3 px-4">8-10%</td></tr>
                  <tr><td className="py-3 px-4">داون تاون</td><td className="py-3 px-4">9-11%</td><td className="py-3 px-4">9-11%</td><td className="py-3 px-4">8-10%</td></tr>
                  <tr><td className="py-3 px-4">الخليج التجاري</td><td className="py-3 px-4">11-14%</td><td className="py-3 px-4">10-12%</td><td className="py-3 px-4">9-11%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">عوامل تؤثر على العائد</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">الموسمية</h3>
                <p className="text-warm-700 text-sm">تشهد دبي موسم ذروة (أكتوبر-أبريل) بأسعار أعلى بنسبة 40-60% وإشغال يتجاوز 90%، بينما ينخفض الطلب في أشهر الصيف.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">القرب من المعالم</h3>
                <p className="text-warm-700 text-sm">العقارات القريبة من الشاطئ أو المعالم السياحية تحقق أسعار ليلة أعلى بنسبة 20-35% مع إشغال أفضل.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">جودة التأثيث والتصوير</h3>
                <p className="text-warm-700 text-sm">العقارات المؤثثة بشكل أنيق مع صور احترافية تحقق حجوزات أكثر بنسبة 25-40% وتقييمات أعلى.</p>
              </div>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة استثمارية</h3>
            <p className="text-accent-700 text-sm">
              ابدأ بعقار في منطقة ذات طلب مرتفع مثل <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> أو <Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">JBR</Link> لتحقيق أفضل عائد. احسب جميع التكاليف التشغيلية قبل الشراء واحصل على <Link href="/ar/guides/short-term-rental-license-dubai" className="text-primary-600 hover:underline">الرخصة المطلوبة</Link> لتجنب الغرامات.
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
              <p className="font-medium text-gray-900 mt-1">جميرا بيتش ريزيدنس</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/best-areas-airbnb-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مناطق إير بي إن بي في دبي</p>
            </Link>
            <Link href="/ar/guides/highest-nightly-rate-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أعلى مناطق سعر الليلة في دبي</p>
            </Link>
            <Link href="/ar/guides/short-term-rental-license-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">رخصة الإيجار قصير المدى في دبي</p>
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
