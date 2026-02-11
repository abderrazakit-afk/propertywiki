import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل الاستثمار في الفرجان 2026 | بروبرتي ويكي',
  description: 'دليل شامل للاستثمار العقاري في الفرجان دبي. الفلل والتاون هاوس، العائد الإيجاري، محطة المترو، والبنية التحتية المتطورة.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/al-furjan-investment-guide',
    title: 'دليل الاستثمار في الفرجان 2026 | بروبرتي ويكي',
    description: 'دليل شامل للاستثمار العقاري في الفرجان دبي. الفلل والتاون هاوس، العائد الإيجاري، محطة المترو، والبنية التحتية المتطورة.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/al-furjan-investment-guide',
    languages: {
      'en': 'https://propertywiki.ai/guides/al-furjan-investment-guide',
      'ar': 'https://propertywiki.ai/ar/guides/al-furjan-investment-guide',
      'x-default': 'https://propertywiki.ai/guides/al-furjan-investment-guide',
    },
  },
}

const relatedArticles = [
  {
    title: 'دليل الاستثمار في قرية جميرا الدائرية',
    href: '/ar/guides/property-jvc-investment-guide',
    category: 'دليل',
    description: 'تحليل شامل لفرص الاستثمار في JVC وعوائدها.',
  },
  {
    title: 'المرابع العربية: المزايا والعيوب',
    href: '/ar/guides/arabian-ranches-pros-cons',
    category: 'دليل',
    description: 'تحليل شامل لمزايا وعيوب السكن في المرابع العربية.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'تعرف على نظام التملك الحر وحقوق المالكين الأجانب.',
  },
  {
    title: 'دليل الاستثمار في واحة دبي للسيليكون',
    href: '/ar/guides/dubai-silicon-oasis-investment',
    category: 'دليل',
    description: 'تحليل فرص الاستثمار في واحة دبي للسيليكون.',
  },
]

export default function AlFurjanInvestmentGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">دليل الاستثمار في الفرجان</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            دليل الاستثمار في الفرجان - 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تُعد الفرجان من المجتمعات السكنية الأسرع نمواً في دبي، وتتميز بموقع استراتيجي قريب من محطة مترو وشبكة طرق رئيسية. تستقطب المنطقة العائلات بفضل فللها الواسعة وبيئتها الهادئة مع أسعار تنافسية مقارنة بالمناطق المجاورة.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. نبذة عن الفرجان</li>
              <li>2. أسباب الاستثمار في الفرجان</li>
              <li>3. أنواع العقارات والأسعار</li>
              <li>4. الربط بشبكة المترو</li>
              <li>5. المرافق والبنية التحتية</li>
              <li>6. نصائح الاستثمار</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نبذة عن الفرجان</h2>
            <p className="text-warm-700 mb-4">
              الفرجان هو مجمع سكني طوّرته شركة نخيل العقارية ويقع بين شارع الشيخ زايد وشارع محمد بن زايد، بالقرب من ديسكفري غاردنز وابن بطوطة مول. يضم المجمع فللاً وتاون هاوس وشققاً سكنية في بيئة عائلية هادئة.
            </p>
            <p className="text-warm-700 mb-4">
              تتميز المنطقة بكونها منطقة <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> مفتوحة لجميع الجنسيات، مع تصاميم معمارية عربية وعصرية تمزج بين الأصالة والحداثة. شهدت الفرجان طفرة تطويرية كبيرة بعد افتتاح محطة مترو الفرجان على خط المسار 2020.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أسباب الاستثمار في الفرجان</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">ربط مباشر بالمترو</h3>
                <p className="text-warm-700 text-sm">افتتاح محطة مترو الفرجان عزز من جاذبية المنطقة بشكل كبير، مما سهّل الوصول إلى مراكز الأعمال في دبي دون الحاجة لسيارة خاصة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">أسعار تنافسية للفلل</h3>
                <p className="text-warm-700 text-sm">تُعد أسعار الفلل في الفرجان أقل بنسبة 20-30% مقارنة بمناطق مثل <Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link>، مع مساحات مماثلة وجودة بناء عالية.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">بيئة عائلية مثالية</h3>
                <p className="text-warm-700 text-sm">تتوفر في المنطقة مدارس ومساجد وحدائق ومسارات للدراجات، مما يجعلها بيئة مثالية للعائلات الباحثة عن سكن هادئ وآمن.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">إمكانية نمو رأس المال</h3>
                <p className="text-warm-700 text-sm">مع استمرار تطوير البنية التحتية وافتتاح مشاريع جديدة، تشهد أسعار العقارات في الفرجان ارتفاعاً مطرداً بنسبة 10-15% سنوياً.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أنواع العقارات والأسعار</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع العقار</th>
                    <th className="text-right py-3 px-4 font-semibold">متوسط السعر (درهم)</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد المتوقع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">شقة غرفة واحدة</td>
                    <td className="py-3 px-4">550,000 - 800,000</td>
                    <td className="py-3 px-4">7% - 8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">شقة غرفتين</td>
                    <td className="py-3 px-4">800,000 - 1,200,000</td>
                    <td className="py-3 px-4">6% - 7%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">تاون هاوس 3 غرف</td>
                    <td className="py-3 px-4">1,400,000 - 2,200,000</td>
                    <td className="py-3 px-4">5.5% - 6.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">فيلا 4-5 غرف</td>
                    <td className="py-3 px-4">2,500,000 - 4,000,000</td>
                    <td className="py-3 px-4">5% - 6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المرافق والبنية التحتية</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>محطة مترو الفرجان على خط المسار 2020 للربط المباشر بوسط المدينة</li>
              <li>قرب من ابن بطوطة مول وديسكفري غاردنز للتسوق والترفيه</li>
              <li>مدارس دولية متعددة تشمل مناهج بريطانية وأمريكية وهندية</li>
              <li>ذا بافيليون: مركز مجتمعي يضم مطاعم ومتاجر ومرافق ترفيهية</li>
              <li>حدائق ومساحات خضراء ومسارات للمشي وركوب الدراجات</li>
              <li>قرب من مطار آل مكتوم الدولي ومنطقة إكسبو</li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصائح للمستثمرين في الفرجان</h3>
            <p className="text-accent-700 text-sm">
              اختر العقارات القريبة من محطة المترو لضمان طلب إيجاري أعلى. الفلل والتاون هاوس تناسب المستثمرين الباحثين عن استقرار طويل الأمد، بينما الشقق تحقق عوائد إيجارية أعلى. قارن الأسعار مع <Link href="/ar/guides/property-jvc-investment-guide" className="text-primary-600 hover:underline">قرية جميرا الدائرية</Link> لاتخاذ قرار مدروس. للمزيد عن إجراءات الشراء، راجع <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">دليل شراء العقارات في دبي</Link>.
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
