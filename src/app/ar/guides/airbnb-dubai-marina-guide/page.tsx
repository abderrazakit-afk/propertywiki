import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل إير بي إن بي دبي مارينا 2026 | بروبرتي ويكي',
  description: 'دليل شامل للتأجير قصير المدى عبر إير بي إن بي في دبي مارينا. أفضل الأبراج وسعر الليلة ومعدل الإشغال والعائد المتوقع.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/airbnb-dubai-marina-guide',
    title: 'دليل إير بي إن بي دبي مارينا 2026 | بروبرتي ويكي',
    description: 'دليل شامل للتأجير قصير المدى عبر إير بي إن بي في دبي مارينا. أفضل الأبراج وسعر الليلة ومعدل الإشغال والعائد المتوقع.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/airbnb-dubai-marina-guide',
    languages: {
      'en': 'https://propertywiki.ai/guides/airbnb-dubai-marina-guide',
      'ar': 'https://propertywiki.ai/ar/guides/airbnb-dubai-marina-guide',
      'x-default': 'https://propertywiki.ai/guides/airbnb-dubai-marina-guide',
    },
  },
}

const relatedArticles = [
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'دليل شامل لمنطقة دبي مارينا والعقارات المتاحة.',
  },
  {
    title: 'أفضل مناطق إير بي إن بي في دبي',
    href: '/ar/guides/best-areas-airbnb-dubai',
    category: 'دليل',
    description: 'مقارنة أفضل المناطق للتأجير قصير المدى في دبي.',
  },
  {
    title: 'عائد الإيجار قصير المدى في دبي',
    href: '/ar/guides/short-term-rental-roi-dubai',
    category: 'دليل',
    description: 'تحليل عوائد الاستثمار من الإيجار قصير المدى.',
  },
  {
    title: 'جميرا بيتش ريزيدنس',
    href: '/ar/locations/dubai/jbr',
    category: 'موقع',
    description: 'استكشف منطقة JBR المجاورة لدبي مارينا.',
  },
  {
    title: 'رخصة الإيجار قصير المدى في دبي',
    href: '/ar/guides/short-term-rental-license-dubai',
    category: 'دليل',
    description: 'متطلبات الترخيص للتأجير قصير المدى في دبي.',
  },
]

export default function AirbnbDubaiMarinaGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">دليل إير بي إن بي دبي مارينا</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            دليل إير بي إن بي دبي مارينا - الدليل الكامل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تُعد <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> من أكثر المناطق شعبية للإيجار قصير المدى في دبي. نستعرض في هذا الدليل كل ما يحتاجه المستثمر لبدء التأجير عبر إير بي إن بي في هذه المنطقة المميزة.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. لماذا دبي مارينا للإيجار قصير المدى؟</li>
              <li>2. أفضل الأبراج للتأجير</li>
              <li>3. الأسعار والعوائد المتوقعة</li>
              <li>4. خطوات البدء</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">لماذا دبي مارينا للإيجار قصير المدى؟</h2>
            <p className="text-warm-700 mb-4">
              تتميز دبي مارينا بموقعها الفريد على الواجهة البحرية مع قربها من شاطئ <Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">JBR</Link> ومراكز التسوق والمطاعم. تجذب المنطقة السياح ورجال الأعمال على حد سواء بفضل:
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>إطلالات بحرية مذهلة على المارينا والقناة المائية</li>
              <li>قرب من محطة مترو ومحطة ترام دبي مارينا</li>
              <li>ممشى دبي مارينا مع مطاعم ومقاهي عالمية</li>
              <li>وصول سهل إلى شاطئ JBR ومارينا مول</li>
              <li>منطقة <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> بالكامل للأجانب</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أفضل الأبراج للتأجير قصير المدى</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">أبراج الإطلالة البحرية</h3>
                <p className="text-warm-700 text-sm">أبراج مثل مارينا غيت وجميرا ليفينغ مارينا غيت توفر إطلالات مباشرة على البحر وتحقق أعلى أسعار الليلة، بمتوسط 800-1,400 درهم لشقة غرفة واحدة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">أبراج إطلالة المارينا</h3>
                <p className="text-warm-700 text-sm">أبراج مثل مارينا بروميناد وذا تورش تطل على قناة المارينا وتحقق أسعار جيدة مع إشغال مرتفع، بمتوسط 600-1,000 درهم لشقة غرفة واحدة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">أبراج الصف الثاني</h3>
                <p className="text-warm-700 text-sm">أبراج مثل مارينا دايموند وسلافة تور تقدم أسعار شراء أقل مع عوائد نسبية أعلى، بمتوسط 450-750 درهم لشقة غرفة واحدة.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الأسعار والعوائد المتوقعة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع العقار</th>
                    <th className="text-right py-3 px-4 font-semibold">سعر الليلة (درهم)</th>
                    <th className="text-right py-3 px-4 font-semibold">الإشغال السنوي</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد الصافي</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">استوديو</td><td className="py-3 px-4">450-700</td><td className="py-3 px-4">80-87%</td><td className="py-3 px-4">11-14%</td></tr>
                  <tr><td className="py-3 px-4">غرفة واحدة</td><td className="py-3 px-4">600-1,200</td><td className="py-3 px-4">78-85%</td><td className="py-3 px-4">10-13%</td></tr>
                  <tr><td className="py-3 px-4">غرفتان</td><td className="py-3 px-4">900-1,800</td><td className="py-3 px-4">72-80%</td><td className="py-3 px-4">9-12%</td></tr>
                  <tr><td className="py-3 px-4">3 غرف (بنتهاوس)</td><td className="py-3 px-4">1,500-3,500</td><td className="py-3 px-4">65-75%</td><td className="py-3 px-4">7-10%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">خطوات البدء بالتأجير في دبي مارينا</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. شراء العقار المناسب</h3>
                <p className="text-warm-700 text-sm">اختر عقاراً في برج يسمح بالتأجير قصير المدى، مع إطلالة جيدة ومرافق متكاملة. الاستوديوهات والشقق بغرفة واحدة تحقق أعلى عائد نسبي.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. الحصول على الرخصة</h3>
                <p className="text-warm-700 text-sm">قدم طلب <Link href="/ar/guides/short-term-rental-license-dubai" className="text-primary-600 hover:underline">رخصة الإيجار قصير المدى</Link> من دائرة السياحة والتسويق التجاري (DTCM). تستغرق العملية عادةً 5-10 أيام عمل.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. تأثيث وتجهيز العقار</h3>
                <p className="text-warm-700 text-sm">أثّث العقار بأسلوب عصري وعملي مع توفير جميع المستلزمات الأساسية. استثمر في التصوير الاحترافي لقائمتك على إير بي إن بي.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">4. إدراج العقار وإدارته</h3>
                <p className="text-warm-700 text-sm">أنشئ قائمة جذابة على منصات الإيجار قصير المدى. يمكنك إدارة العقار بنفسك أو التعاقد مع شركة إدارة عقارات متخصصة بنسبة 15-20% من الإيرادات.</p>
              </div>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من خبراء دبي مارينا</h3>
            <p className="text-accent-700 text-sm">
              الشقق ذات الإطلالة البحرية في الطوابق العليا تحقق أسعار ليلة أعلى بنسبة 25-35%. ركّز على الحصول على تقييمات إيجابية في الأشهر الأولى لتحسين ترتيب قائمتك. قارن أيضاً مع منطقة <Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link> للعقارات الفاخرة.
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
