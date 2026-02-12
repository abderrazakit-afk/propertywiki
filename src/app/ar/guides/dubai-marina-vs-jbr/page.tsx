import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دبي مارينا مقابل جميرا بيتش ريزيدنس 2026 | بروبرتي ويكي',
  description: 'مقارنة تفصيلية بين دبي مارينا وجميرا بيتش ريزيدنس (JBR) من حيث الأسعار والعائد الإيجاري ونمط الحياة. أيهما الأفضل للسكن والاستثمار؟',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/dubai-marina-vs-jbr',
    title: 'دبي مارينا مقابل جميرا بيتش ريزيدنس 2026 | بروبرتي ويكي',
    description: 'مقارنة تفصيلية بين دبي مارينا وجميرا بيتش ريزيدنس (JBR) من حيث الأسعار والعائد الإيجاري ونمط الحياة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/dubai-marina-vs-jbr',
    languages: {
      'en': 'https://propertywiki.ai/guides/dubai-marina-vs-jbr',
      'ar': 'https://propertywiki.ai/ar/guides/dubai-marina-vs-jbr',
      'x-default': 'https://propertywiki.ai/guides/dubai-marina-vs-jbr',
    },
  },
}

const relatedArticles = [
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'دليل شامل عن دبي مارينا والعقارات المتاحة فيها.',
  },
  {
    title: 'جميرا بيتش ريزيدنس',
    href: '/ar/locations/dubai/jbr',
    category: 'موقع',
    description: 'استكشف منطقة JBR وأسعار العقارات على الواجهة البحرية.',
  },
  {
    title: 'دليل الإيجار قصير المدى في دبي',
    href: '/ar/guides/short-term-rental-roi-dubai',
    category: 'دليل',
    description: 'عوائد التأجير قصير المدى في مختلف مناطق دبي.',
  },
  {
    title: 'دليل Airbnb في دبي مارينا',
    href: '/ar/guides/airbnb-dubai-marina-guide',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن التأجير السياحي في دبي مارينا.',
  },
  {
    title: 'أعلى عائد إيجاري في دبي',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'دليل',
    description: 'المناطق ذات أفضل عائد إيجاري للمستثمرين.',
  },
]

export default function DubaiMarinaVsJbrPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">دبي مارينا مقابل جميرا بيتش ريزيدنس</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            دبي مارينا مقابل جميرا بيتش ريزيدنس - مقارنة 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تُعتبر <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> و<Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس (JBR)</Link> من أشهر الوجهات الساحلية في دبي. تتجاور المنطقتان لكن تختلفان في نمط الحياة والأسعار والعائد الاستثماري. نقدم لك مقارنة شاملة لمساعدتك في اختيار المنطقة المناسبة.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">لمحة عن كل منطقة</h2>
            <p className="text-warm-700 mb-4">
              تمتد دبي مارينا حول المرسى الصناعي وتضم أكثر من 200 برج سكني وتجاري. تتميز بممشى المارينا الشهير والمطاعم والمقاهي المطلة على المياه. أما جميرا بيتش ريزيدنس فهي مجمع سكني متكامل على الواجهة البحرية يضم 40 برجاً سكنياً مع شاطئ خاص وممشى The Walk الحيوي وجزيرة بلوواترز القريبة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">جدول المقارنة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">معيار المقارنة</th>
                    <th className="text-right py-3 px-4 font-semibold">دبي مارينا</th>
                    <th className="text-right py-3 px-4 font-semibold">جميرا بيتش ريزيدنس</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4 font-medium">سعر القدم المربع</td>
                    <td className="py-3 px-4">1,400 - 2,200 درهم</td>
                    <td className="py-3 px-4">1,600 - 2,500 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">العائد الإيجاري</td>
                    <td className="py-3 px-4">6% - 7.5%</td>
                    <td className="py-3 px-4">5.5% - 7%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">رسوم الخدمات (درهم/قدم²)</td>
                    <td className="py-3 px-4">14 - 22 درهم</td>
                    <td className="py-3 px-4">16 - 25 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">الإطلالة</td>
                    <td className="py-3 px-4">المرسى والأبراج</td>
                    <td className="py-3 px-4">البحر مباشرة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">الوصول للشاطئ</td>
                    <td className="py-3 px-4">مشي 10-15 دقيقة لشاطئ JBR</td>
                    <td className="py-3 px-4">شاطئ خاص مباشر</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">المترو</td>
                    <td className="py-3 px-4">محطة DMCC ومحطة دبي مارينا</td>
                    <td className="py-3 px-4">الترام - لا مترو مباشر</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">التأجير السياحي</td>
                    <td className="py-3 px-4">ممتاز - طلب عالٍ</td>
                    <td className="py-3 px-4">ممتاز - إطلالة بحرية</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">المطور الرئيسي</td>
                    <td className="py-3 px-4">إعمار ودبي للعقارات</td>
                    <td className="py-3 px-4">دبي للعقارات</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نمط الحياة والمرافق</h2>
            <p className="text-warm-700 mb-4">
              توفر دبي مارينا أسلوب حياة حضري نابض بالحيوية مع تنوع كبير في المطاعم والمتاجر والحياة الليلية. تُعد مثالية للمهنيين الشباب والأزواج. في المقابل، تقدم JBR تجربة معيشة على الشاطئ مع أجواء عائلية ومساحات مفتوحة. ممشى The Walk يوفر تجربة تسوق وترفيه فريدة، وقرب جزيرة بلوواترز يضيف قيمة ترفيهية إضافية.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أيهما الأفضل للاستثمار؟</h2>
            <p className="text-warm-700 mb-4">
              للاستثمار الإيجاري طويل المدى، تتفوق <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> بتنوع خيارات العقارات وأسعار دخول أقل نسبياً. أما للتأجير السياحي قصير المدى، فإن <Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">JBR</Link> تتميز بالإطلالة البحرية المباشرة التي تجذب السياح. كلتا المنطقتين في <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">مناطق التملك الحر</Link> وتحققان عوائد استثمارية قوية.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              إذا كنت تخطط للتأجير قصير المدى، اطلع على <Link href="/ar/guides/short-term-rental-license-dubai" className="text-primary-600 hover:underline">دليل تراخيص الإيجار قصير المدى</Link> لمعرفة المتطلبات القانونية. الشقق ذات الإطلالة البحرية في JBR تحقق أعلى سعر ليلي في المنطقة.
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
              <p className="font-medium text-gray-900 mt-1">التملك الحر في الإمارات</p>
            </Link>
            <Link href="/ar/guides/best-areas-airbnb-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مناطق إير بي إن بي</p>
            </Link>
            <Link href="/ar/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أعلى مناطق العائد الإيجاري</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
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
