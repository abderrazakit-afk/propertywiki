import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مجتمعات خطط الدفع في دبي | بروبرتي ويكي',
  description: 'دليل شامل لأفضل المجتمعات السكنية في دبي التي توفر خطط دفع مرنة للمشترين. مقارنة خطط الدفع والمطورين والمناطق.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/payment-plan-communities-dubai',
    title: 'مجتمعات خطط الدفع في دبي | بروبرتي ويكي',
    description: 'دليل شامل لأفضل المجتمعات السكنية في دبي التي توفر خطط دفع مرنة للمشترين. مقارنة خطط الدفع والمطورين والمناطق.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/payment-plan-communities-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/payment-plan-communities-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/payment-plan-communities-dubai',
      'x-default': 'https://propertywiki.ai/guides/payment-plan-communities-dubai',
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
    title: 'خطة الدفع 1% شهرياً في دبي',
    href: '/ar/guides/1-percent-payment-plan-dubai',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن خطط الدفع بنسبة 1% شهرياً في دبي.',
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

export default function PaymentPlanCommunitiesDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مجتمعات خطط الدفع في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            مجتمعات خطط الدفع في دبي - دليل شامل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تُعد خطط الدفع المرنة من أبرز مميزات سوق <Link href="/ar/definitions/off-plan-property" className="text-primary-600 hover:underline">العقارات على الخارطة</Link> في دبي. توفر العديد من المجتمعات السكنية خطط دفع تمتد لسنوات بعد التسليم، مما يسهّل على المستثمرين والمشترين دخول السوق بتكلفة أولية منخفضة.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. أنواع خطط الدفع المتاحة</li>
              <li>2. أفضل المجتمعات بخطط دفع مرنة</li>
              <li>3. مقارنة خطط الدفع حسب المطور</li>
              <li>4. نصائح لاختيار خطة الدفع المناسبة</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أنواع خطط الدفع المتاحة</h2>
            <p className="text-warm-700 mb-4">
              تتنوع خطط الدفع في سوق دبي العقاري لتناسب مختلف الميزانيات والأهداف الاستثمارية. فيما يلي أبرز أنواع خطط الدفع:
            </p>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">خطة الدفع خلال البناء</h3>
                <p className="text-warm-700 text-sm">النوع الأكثر شيوعاً. يدفع المشتري أقساطاً مرتبطة بمراحل البناء (مثال: 10% عند الحجز، 10% عند إنجاز 20% من البناء، وهكذا). تنتهي المدفوعات عند التسليم.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">خطة الدفع بعد التسليم</h3>
                <p className="text-warm-700 text-sm">يدفع المشتري جزءاً خلال البناء (40-60%) والباقي على أقساط بعد استلام العقار. قد تمتد لمدة 3-5 سنوات بعد التسليم.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">خطة الدفع الشهري (1%)</h3>
                <p className="text-warm-700 text-sm">خطة مبتكرة يدفع فيها المشتري 1% شهرياً من قيمة العقار. تفاصيل أكثر في <Link href="/ar/guides/1-percent-payment-plan-dubai" className="text-primary-600 hover:underline">دليل خطة الدفع 1% شهرياً</Link>.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أفضل المجتمعات بخطط دفع مرنة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المجتمع</th>
                    <th className="text-right py-3 px-4 font-semibold">المطور</th>
                    <th className="text-right py-3 px-4 font-semibold">نوع خطة الدفع</th>
                    <th className="text-right py-3 px-4 font-semibold">الدفعة الأولى</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">دبي هيلز استيت</td>
                    <td className="py-3 px-4">إعمار</td>
                    <td className="py-3 px-4">60/40 (بعد التسليم)</td>
                    <td className="py-3 px-4">10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">المرابع العربية 3</td>
                    <td className="py-3 px-4">إعمار</td>
                    <td className="py-3 px-4">60/40 (بعد التسليم)</td>
                    <td className="py-3 px-4">10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">تاون سكوير</td>
                    <td className="py-3 px-4">نشاما</td>
                    <td className="py-3 px-4">خلال البناء + بعد التسليم</td>
                    <td className="py-3 px-4">10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">داماك هيلز 2</td>
                    <td className="py-3 px-4">داماك</td>
                    <td className="py-3 px-4">1% شهرياً</td>
                    <td className="py-3 px-4">5-10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">دبي الجنوب</td>
                    <td className="py-3 px-4">دبي الجنوب</td>
                    <td className="py-3 px-4">50/50 (بعد التسليم)</td>
                    <td className="py-3 px-4">10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">قرية جميرا الدائرية</td>
                    <td className="py-3 px-4">متعدد</td>
                    <td className="py-3 px-4">متنوعة</td>
                    <td className="py-3 px-4">5-20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة خطط الدفع حسب المطور</h2>
            <p className="text-warm-700 mb-4">
              يختلف كل مطور عقاري في هيكلة خطط الدفع. المطورون الكبار مثل إعمار ونخيل يقدمون خطط دفع أكثر تنظيماً، بينما المطورون الأصغر قد يوفرون مرونة أكبر في التفاوض:
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li><strong>إعمار:</strong> خطط دفع 60/40 أو 70/30 مع دفعات مرتبطة بمراحل البناء. دفعة أولى عادةً 10%</li>
              <li><strong>داماك:</strong> خطط دفع مرنة تشمل 1% شهرياً وخطط ما بعد التسليم. دفعة أولى من 5%</li>
              <li><strong>نخيل:</strong> خطط دفع خلال البناء مع خيارات بعد التسليم في بعض المشاريع</li>
              <li><strong>أزيزي:</strong> خطط دفع ممتدة حتى 3 سنوات بعد التسليم في بعض مشاريع JVC</li>
              <li><strong>بن غاطي:</strong> خطط دفع 1% شهرياً مع دفعة أولى منخفضة في عدة مشاريع</li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              عند اختيار خطة دفع، تأكد من قدرتك على الالتزام بجميع الأقساط حتى نهاية الخطة. التخلف عن السداد قد يؤدي إلى فقدان المبالغ المدفوعة. اطلع على <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">دليل شراء العقارات في دبي</Link> لفهم الإجراءات القانونية المتعلقة بخطط الدفع.
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
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/1-percent-payment-plan-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">خطة الدفع 1% شهرياً في دبي</p>
            </Link>
            <Link href="/ar/guides/best-off-plan-projects-under-1m" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مشاريع على الخارطة بأقل من مليون</p>
            </Link>
            <Link href="/ar/guides/safest-off-plan-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أكثر مناطق شراء على الخارطة أماناً</p>
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
