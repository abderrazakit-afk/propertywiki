import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'خطة الدفع 1% شهرياً في دبي | بروبرتي ويكي',
  description: 'دليل شامل لخطط الدفع بنسبة 1% شهرياً في دبي. المجتمعات والمطورين وشروط الأهلية ومزايا وعيوب هذا النوع من خطط الدفع.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/1-percent-payment-plan-dubai',
    title: 'خطة الدفع 1% شهرياً في دبي | بروبرتي ويكي',
    description: 'دليل شامل لخطط الدفع بنسبة 1% شهرياً في دبي. المجتمعات والمطورين وشروط الأهلية ومزايا وعيوب هذا النوع من خطط الدفع.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/1-percent-payment-plan-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/1-percent-payment-plan-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/1-percent-payment-plan-dubai',
      'x-default': 'https://propertywiki.ai/guides/1-percent-payment-plan-dubai',
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
    title: 'مجتمعات خطط الدفع في دبي',
    href: '/ar/guides/payment-plan-communities-dubai',
    category: 'دليل',
    description: 'أفضل المجتمعات التي توفر خطط دفع مرنة للمشترين في دبي.',
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
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'استكشف منطقة دبي مارينا والعقارات المتاحة.',
  },
]

export default function OnePercentPaymentPlanPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">خطة الدفع 1% شهرياً في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            خطة الدفع 1% شهرياً في دبي - دليل شامل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            أصبحت خطة الدفع بنسبة 1% شهرياً من أكثر خطط الدفع شعبية في سوق <Link href="/ar/definitions/off-plan-property" className="text-primary-600 hover:underline">العقارات على الخارطة</Link> في دبي. تتيح هذه الخطة للمشترين امتلاك عقار بأقساط شهرية ميسّرة تعادل تقريباً قيمة الإيجار الشهري.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. كيف تعمل خطة الدفع 1% شهرياً؟</li>
              <li>2. المجتمعات والمشاريع المتاحة</li>
              <li>3. مثال عملي على خطة الدفع</li>
              <li>4. مزايا وعيوب خطة 1%</li>
              <li>5. نصائح قبل الاشتراك</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">كيف تعمل خطة الدفع 1% شهرياً؟</h2>
            <p className="text-warm-700 mb-4">
              في خطة الدفع 1% شهرياً، يدفع المشتري دفعة أولى (عادةً 5-20% من قيمة العقار) ثم يدفع 1% من إجمالي قيمة العقار كل شهر حتى اكتمال السداد. تمتد هذه الخطة عادةً من 5 إلى 8 سنوات حسب المطور والمشروع.
            </p>
            <div className="bg-primary-50 rounded-xl p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">مثال عملي</h3>
              <p className="text-warm-700 text-sm mb-2">لعقار بقيمة 800,000 درهم بخطة 1% شهرياً:</p>
              <ul className="text-warm-700 text-sm space-y-1">
                <li>• الدفعة الأولى (10%): 80,000 درهم</li>
                <li>• القسط الشهري (1%): 8,000 درهم</li>
                <li>• مدة السداد: ~90 شهراً (7.5 سنوات)</li>
                <li>• لا فوائد أو رسوم إضافية في معظم الحالات</li>
              </ul>
            </div>
            <p className="text-warm-700">
              الميزة الرئيسية هي أن القسط الشهري يكون مشابهاً لقيمة الإيجار في نفس المنطقة، مما يعني أنك تدفع قسطاً بدلاً من إيجار شهري دون بناء ملكية.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المجتمعات والمشاريع المتاحة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المشروع / المجتمع</th>
                    <th className="text-right py-3 px-4 font-semibold">المطور</th>
                    <th className="text-right py-3 px-4 font-semibold">الدفعة الأولى</th>
                    <th className="text-right py-3 px-4 font-semibold">يبدأ من</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">داماك هيلز 2</td>
                    <td className="py-3 px-4">داماك</td>
                    <td className="py-3 px-4">10%</td>
                    <td className="py-3 px-4">550,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">مشاريع بن غاطي (JVC)</td>
                    <td className="py-3 px-4">بن غاطي</td>
                    <td className="py-3 px-4">10%</td>
                    <td className="py-3 px-4">450,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">سمانا (JVC / الفرجان)</td>
                    <td className="py-3 px-4">سمانا</td>
                    <td className="py-3 px-4">5-10%</td>
                    <td className="py-3 px-4">500,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">دانوب (عدة مواقع)</td>
                    <td className="py-3 px-4">دانوب</td>
                    <td className="py-3 px-4">10-20%</td>
                    <td className="py-3 px-4">600,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">أزيزي (الفرجان / JVC)</td>
                    <td className="py-3 px-4">أزيزي</td>
                    <td className="py-3 px-4">10%</td>
                    <td className="py-3 px-4">480,000 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مزايا وعيوب خطة 1% شهرياً</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">المزايا</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• أقساط شهرية منخفضة وميسّرة</li>
                  <li>• بدون فوائد في معظم الحالات</li>
                  <li>• دفعة أولى منخفضة (5-10%)</li>
                  <li>• بناء ملكية بدلاً من دفع إيجار</li>
                  <li>• مرونة في اختيار مدة السداد</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">العيوب</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• التزام مالي طويل الأمد (5-8 سنوات)</li>
                  <li>• قد تكون الأسعار أعلى من السوق</li>
                  <li>• سند الملكية لا يُصدر حتى السداد الكامل</li>
                  <li>• صعوبة إعادة البيع قبل إتمام السداد</li>
                  <li>• محدودية الخيارات في المناطق الراقية</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نصائح قبل الاشتراك في خطة 1%</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>تأكد من قدرتك المالية على الالتزام بالأقساط طوال مدة الخطة</li>
              <li>اقرأ العقد بعناية وتحقق من شروط التأخير والإلغاء</li>
              <li>قارن السعر الإجمالي مع أسعار العقارات المماثلة في نفس المنطقة</li>
              <li>تحقق من سمعة المطور العقاري وسجل مشاريعه المسلّمة</li>
              <li>اسأل عن موعد إصدار سند الملكية وشروط نقل الملكية</li>
              <li>افهم حقوقك في حال رغبت في إعادة البيع قبل إتمام السداد</li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              خطة 1% شهرياً مناسبة للمشترين الذين يدفعون إيجاراً حالياً ويرغبون في تحويل هذا المبلغ لبناء ملكية عقارية. لكن تأكد من مقارنة التكلفة الإجمالية مع خيارات التمويل العقاري التقليدية. للمزيد عن خطط الدفع الأخرى، اطلع على <Link href="/ar/guides/payment-plan-communities-dubai" className="text-primary-600 hover:underline">دليل مجتمعات خطط الدفع</Link>.
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
            <Link href="/ar/definitions/off-plan-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">العقارات على الخارطة</p>
            </Link>
            <Link href="/ar/guides/payment-plan-communities-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">مجتمعات خطط الدفع في دبي</p>
            </Link>
            <Link href="/ar/guides/best-off-plan-projects-under-1m" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مشاريع على الخارطة بأقل من مليون</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/guides/hidden-costs-buying-property-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">التكاليف الخفية لشراء عقار في دبي</p>
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
