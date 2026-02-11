import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مقارنة العائد: على الخارطة مقابل الجاهز | بروبرتي ويكي',
  description: 'تحليل شامل لمقارنة العائد على الاستثمار بين العقارات على الخارطة والعقارات الجاهزة في دبي. أيهما أفضل للمستثمر؟',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/off-plan-vs-ready-property-roi',
    title: 'مقارنة العائد: على الخارطة مقابل الجاهز | بروبرتي ويكي',
    description: 'تحليل شامل لمقارنة العائد على الاستثمار بين العقارات على الخارطة والعقارات الجاهزة في دبي. أيهما أفضل للمستثمر؟',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/off-plan-vs-ready-property-roi',
    languages: {
      'en': 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi',
      'ar': 'https://propertywiki.ai/ar/guides/off-plan-vs-ready-property-roi',
      'x-default': 'https://propertywiki.ai/guides/off-plan-vs-ready-property-roi',
    },
  },
}

const relatedArticles = [
  {
    title: 'العقارات على الخارطة',
    href: '/ar/definitions/off-plan-property',
    category: 'تعريف',
    description: 'كل ما تحتاج معرفته عن شراء العقارات قيد الإنشاء في دبي.',
  },
  {
    title: 'أعلى مناطق العائد الإيجاري في دبي',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'دليل',
    description: 'تعرف على المناطق التي تحقق أعلى عوائد إيجارية في دبي.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل خطوة بخطوة لشراء العقارات في دبي كمقيم أو أجنبي.',
  },
  {
    title: 'أفضل مشاريع على الخارطة بأقل من مليون',
    href: '/ar/guides/best-off-plan-projects-under-1m',
    category: 'دليل',
    description: 'أفضل المشاريع على الخارطة بأسعار أقل من مليون درهم في دبي.',
  },
  {
    title: 'أكثر مناطق شراء على الخارطة أماناً',
    href: '/ar/guides/safest-off-plan-areas-dubai',
    category: 'دليل',
    description: 'دليل المناطق الأكثر أماناً للاستثمار في العقارات على الخارطة.',
  },
]

export default function OffPlanVsReadyROIPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مقارنة العائد: على الخارطة مقابل الجاهز</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            مقارنة العائد على الاستثمار: على الخارطة مقابل العقار الجاهز 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يواجه المستثمر العقاري في دبي سؤالاً محورياً: هل الأفضل شراء <Link href="/ar/definitions/off-plan-property" className="text-primary-600 hover:underline">عقار على الخارطة</Link> أم عقار جاهز؟ نقدم في هذا الدليل تحليلاً مفصلاً للعائد على الاستثمار في كلا الخيارين لمساعدتك في اتخاذ القرار الأنسب.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. الفرق بين العقار على الخارطة والعقار الجاهز</li>
              <li>2. مقارنة العائد الإيجاري</li>
              <li>3. مقارنة النمو الرأسمالي</li>
              <li>4. جدول المقارنة الشاملة</li>
              <li>5. أي خيار يناسبك؟</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الفرق بين العقار على الخارطة والعقار الجاهز</h2>
            <p className="text-warm-700 mb-4">
              العقار على الخارطة هو عقار يتم شراؤه خلال مرحلة البناء من المطور العقاري مباشرةً، بينما العقار الجاهز هو وحدة مكتملة البناء ومتاحة للسكن أو التأجير فوراً. لكل منهما مزايا وعيوب تؤثر على العائد الاستثماري.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">مزايا على الخارطة</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• أسعار أقل بنسبة 15-25%</li>
                  <li>• خطط دفع مرنة وطويلة الأمد</li>
                  <li>• إمكانية تحقيق نمو رأسمالي كبير</li>
                  <li>• عقارات جديدة بتصاميم عصرية</li>
                  <li>• رسوم صيانة أقل في السنوات الأولى</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">مزايا العقار الجاهز</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• دخل إيجاري فوري من يوم الشراء</li>
                  <li>• معاينة العقار الفعلي قبل الشراء</li>
                  <li>• لا مخاطر تأخير في التسليم</li>
                  <li>• سهولة الحصول على تمويل عقاري</li>
                  <li>• موقع مُختبر مع بنية تحتية مكتملة</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة العائد الإيجاري</h2>
            <p className="text-warm-700 mb-4">
              يختلف العائد الإيجاري بشكل ملحوظ بين العقارات على الخارطة والجاهزة. العقار الجاهز يبدأ بتحقيق عائد إيجاري فور الشراء، بينما العقار على الخارطة لا يحقق دخلاً حتى التسليم. لكن عند حساب العائد على المبلغ المدفوع فعلياً، قد يتفوق العقار على الخارطة.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المعيار</th>
                    <th className="text-right py-3 px-4 font-semibold">على الخارطة</th>
                    <th className="text-right py-3 px-4 font-semibold">عقار جاهز</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">العائد الإيجاري السنوي</td>
                    <td className="py-3 px-4">7-10% (بعد التسليم)</td>
                    <td className="py-3 px-4">5-8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">بداية الدخل الإيجاري</td>
                    <td className="py-3 px-4">بعد 2-4 سنوات</td>
                    <td className="py-3 px-4">فوري</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">العائد على المبلغ المدفوع</td>
                    <td className="py-3 px-4">أعلى (بسبب خطة الدفع)</td>
                    <td className="py-3 px-4">أقل (دفع كامل)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">مستوى المخاطرة</td>
                    <td className="py-3 px-4">متوسط - مرتفع</td>
                    <td className="py-3 px-4">منخفض</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة النمو الرأسمالي</h2>
            <p className="text-warm-700 mb-4">
              تتفوق العقارات على الخارطة عادةً في النمو الرأسمالي خلال فترة البناء. في المناطق الناشئة مثل <Link href="/ar/locations/dubai" className="text-primary-600 hover:underline">دبي</Link>، يمكن أن ترتفع قيمة العقار على الخارطة بنسبة 20-40% من تاريخ الإطلاق وحتى التسليم.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">نمو على الخارطة (سنوياً)</th>
                    <th className="text-right py-3 px-4 font-semibold">نمو العقار الجاهز (سنوياً)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td>
                    <td className="py-3 px-4">8-12%</td>
                    <td className="py-3 px-4">5-8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></td>
                    <td className="py-3 px-4">10-15%</td>
                    <td className="py-3 px-4">6-9%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></td>
                    <td className="py-3 px-4">8-12%</td>
                    <td className="py-3 px-4">5-7%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">JVC</td>
                    <td className="py-3 px-4">10-18%</td>
                    <td className="py-3 px-4">7-10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أي خيار يناسبك؟</h2>
            <p className="text-warm-700 mb-4">
              يعتمد الاختيار بين على الخارطة والجاهز على أهدافك الاستثمارية وملفك المالي:
            </p>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">اختر على الخارطة إذا:</h3>
                <p className="text-warm-700 text-sm">كنت تبحث عن نمو رأسمالي طويل الأمد، وتملك سيولة محدودة للدفعة الأولى، ولا تحتاج لدخل إيجاري فوري. مناسب للمستثمرين الذين يتحملون مخاطر معتدلة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">اختر العقار الجاهز إذا:</h3>
                <p className="text-warm-700 text-sm">كنت تبحث عن دخل إيجاري فوري ومستقر، وتفضل استثماراً منخفض المخاطر، ولديك رأس مال كافٍ للشراء الكامل أو التمويل العقاري.</p>
              </div>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              التنويع بين العقارات على الخارطة والجاهزة هو استراتيجية ذكية لتحقيق التوازن بين الدخل الإيجاري الفوري والنمو الرأسمالي. ننصح بتخصيص 60% للعقارات الجاهزة و40% على الخارطة للمستثمرين المتحفظين. اطلع على <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">دليل شراء العقارات في دبي</Link> لمعرفة الإجراءات.
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
