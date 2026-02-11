import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أعلى مناطق سعر الليلة في دبي 2026 | بروبرتي ويكي',
  description: 'تعرف على المناطق التي تحقق أعلى سعر لليلة الواحدة في الإيجار قصير المدى في دبي. مقارنة الأسعار والإشغال والعائد.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/highest-nightly-rate-areas-dubai',
    title: 'أعلى مناطق سعر الليلة في دبي 2026 | بروبرتي ويكي',
    description: 'تعرف على المناطق التي تحقق أعلى سعر لليلة الواحدة في الإيجار قصير المدى في دبي. مقارنة الأسعار والإشغال والعائد.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/highest-nightly-rate-areas-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/highest-nightly-rate-areas-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/highest-nightly-rate-areas-dubai',
      'x-default': 'https://propertywiki.ai/guides/highest-nightly-rate-areas-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل مناطق إير بي إن بي في دبي',
    href: '/ar/guides/best-areas-airbnb-dubai',
    category: 'دليل',
    description: 'دليل شامل لأفضل المناطق للتأجير قصير المدى.',
  },
  {
    title: 'عائد الإيجار قصير المدى في دبي',
    href: '/ar/guides/short-term-rental-roi-dubai',
    category: 'دليل',
    description: 'تحليل تفصيلي لعوائد الاستثمار من الإيجار القصير.',
  },
  {
    title: 'نخلة جميرا',
    href: '/ar/locations/dubai/palm-jumeirah',
    category: 'موقع',
    description: 'دليل شامل للعقارات في نخلة جميرا.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'استكشف عقارات دبي مارينا وفرص الاستثمار.',
  },
  {
    title: 'رخصة الإيجار قصير المدى في دبي',
    href: '/ar/guides/short-term-rental-license-dubai',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن ترخيص التأجير القصير.',
  },
]

export default function HighestNightlyRateAreasDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">أعلى مناطق سعر الليلة في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            أعلى مناطق سعر الليلة في دبي - تصنيف 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تختلف أسعار الليلة الواحدة في الإيجار قصير المدى بشكل كبير بين مناطق دبي. نستعرض المناطق التي تحقق أعلى سعر لليلة مع تحليل العوامل المؤثرة في التسعير.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. تصنيف المناطق حسب سعر الليلة</li>
              <li>2. العوامل المؤثرة في سعر الليلة</li>
              <li>3. سعر الليلة مقابل العائد الفعلي</li>
              <li>4. استراتيجيات التسعير</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تصنيف المناطق حسب سعر الليلة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">الترتيب</th>
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">سعر الليلة - غرفة واحدة (درهم)</th>
                    <th className="text-right py-3 px-4 font-semibold">سعر الليلة - غرفتان (درهم)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">1</td><td className="py-3 px-4"><Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link></td><td className="py-3 px-4">1,200-3,500</td><td className="py-3 px-4">2,000-6,000</td></tr>
                  <tr><td className="py-3 px-4">2</td><td className="py-3 px-4">داون تاون دبي</td><td className="py-3 px-4">800-1,800</td><td className="py-3 px-4">1,200-3,000</td></tr>
                  <tr><td className="py-3 px-4">3</td><td className="py-3 px-4">خليج جميرا (La Mer)</td><td className="py-3 px-4">750-1,600</td><td className="py-3 px-4">1,100-2,800</td></tr>
                  <tr><td className="py-3 px-4">4</td><td className="py-3 px-4"><Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">JBR</Link></td><td className="py-3 px-4">700-1,500</td><td className="py-3 px-4">1,000-2,500</td></tr>
                  <tr><td className="py-3 px-4">5</td><td className="py-3 px-4"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td><td className="py-3 px-4">600-1,200</td><td className="py-3 px-4">900-2,200</td></tr>
                  <tr><td className="py-3 px-4">6</td><td className="py-3 px-4">DIFC</td><td className="py-3 px-4">600-1,100</td><td className="py-3 px-4">900-2,000</td></tr>
                  <tr><td className="py-3 px-4">7</td><td className="py-3 px-4">الخليج التجاري</td><td className="py-3 px-4">500-1,000</td><td className="py-3 px-4">750-1,800</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 text-sm mt-3">* الأسعار تمثل متوسطات سنوية وتتغير حسب الموسم والطلب</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">العوامل المؤثرة في سعر الليلة</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">الموقع والإطلالة</h3>
                <p className="text-warm-700 text-sm">العقارات المطلة على البحر أو المعالم الرئيسية (برج خليفة، نافورة دبي) تحقق أسعاراً أعلى بنسبة 30-50%. الإطلالة المباشرة على الشاطئ في <Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link> ترفع السعر بشكل كبير.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">الموسمية والأحداث</h3>
                <p className="text-warm-700 text-sm">ترتفع الأسعار بنسبة 50-100% خلال موسم الذروة (ديسمبر-يناير) وفترات الأحداث الكبرى مثل معرض إكسبو وسباقات الفورمولا والمهرجانات.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">جودة العقار والتأثيث</h3>
                <p className="text-warm-700 text-sm">العقارات الفاخرة ذات التأثيث العصري والمرافق المتكاملة (مسبح خاص، صالة رياضية) تحقق أسعار ليلة أعلى بنسبة 20-40%.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">التقييمات والسمعة</h3>
                <p className="text-warm-700 text-sm">القوائم ذات التقييم 4.8+ على إير بي إن بي تحقق حجوزات أكثر بنسبة 35% وأسعار أعلى مقارنة بالقوائم الجديدة أو ذات التقييم المنخفض.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">سعر الليلة مقابل العائد الفعلي</h2>
            <p className="text-warm-700 mb-4">
              أعلى سعر لليلة لا يعني بالضرورة أعلى عائد استثماري. يجب مراعاة سعر الشراء ونسبة الإشغال والتكاليف التشغيلية. المناطق مثل الخليج التجاري و<Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> قد تحقق عائداً صافياً أعلى من نخلة جميرا رغم انخفاض سعر الليلة.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">متوسط سعر الليلة</th>
                    <th className="text-right py-3 px-4 font-semibold">متوسط الإشغال</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد الصافي</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">نخلة جميرا</td><td className="py-3 px-4">الأعلى</td><td className="py-3 px-4">70-78%</td><td className="py-3 px-4">8-11%</td></tr>
                  <tr><td className="py-3 px-4">دبي مارينا</td><td className="py-3 px-4">متوسط-عالي</td><td className="py-3 px-4">78-85%</td><td className="py-3 px-4">10-13%</td></tr>
                  <tr><td className="py-3 px-4">الخليج التجاري</td><td className="py-3 px-4">متوسط</td><td className="py-3 px-4">72-80%</td><td className="py-3 px-4">10-14%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">استراتيجيات التسعير الذكي</h3>
            <p className="text-accent-700 text-sm">
              استخدم أدوات التسعير الديناميكي لتعديل الأسعار تلقائياً حسب الطلب والموسم. ارفع الأسعار في عطلات نهاية الأسبوع والمناسبات الخاصة. قدّم خصومات للإقامات الطويلة (أسبوع أو أكثر) لتحسين الإشغال في المواسم الهادئة. تأكد من حصولك على <Link href="/ar/guides/short-term-rental-license-dubai" className="text-primary-600 hover:underline">الرخصة المطلوبة</Link> واحتساب جميع <Link href="/ar/guides/short-term-rental-roi-dubai" className="text-primary-600 hover:underline">التكاليف التشغيلية</Link> في تسعيرك.
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
