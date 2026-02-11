import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل حاسبة رسوم دائرة الأراضي والأملاك 2026 | بروبرتي ويكي',
  description: 'دليل شامل لحساب رسوم دائرة الأراضي والأملاك في دبي. تعرف على جميع الرسوم المطلوبة عند تسجيل العقار.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/dld-fees-calculator-guide',
    title: 'دليل حاسبة رسوم دائرة الأراضي والأملاك 2026 | بروبرتي ويكي',
    description: 'دليل شامل لحساب رسوم دائرة الأراضي والأملاك في دبي. تعرف على جميع الرسوم المطلوبة عند تسجيل العقار.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/dld-fees-calculator-guide',
    languages: {
      'en': 'https://propertywiki.ai/guides/dld-fees-calculator-guide',
      'ar': 'https://propertywiki.ai/ar/guides/dld-fees-calculator-guide',
      'x-default': 'https://propertywiki.ai/guides/dld-fees-calculator-guide',
    },
  },
}

const relatedArticles = [
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي.',
  },
  {
    title: 'التكاليف الخفية لشراء عقار في دبي',
    href: '/ar/guides/hidden-costs-buying-property-dubai',
    category: 'دليل',
    description: 'جميع التكاليف المخفية التي يجب معرفتها قبل الشراء.',
  },
  {
    title: 'رسوم الخدمات حسب المنطقة',
    href: '/ar/guides/service-charges-by-area-dubai',
    category: 'دليل',
    description: 'مقارنة رسوم الخدمات السنوية في مناطق دبي.',
  },
  {
    title: 'داون تاون دبي',
    href: '/ar/locations/dubai/downtown-dubai',
    category: 'موقع',
    description: 'استكشف عقارات داون تاون دبي وأسعارها.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'تعرف على نظام التملك الحر وحقوق المالكين.',
  },
]

export default function DldFeesCalculatorGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">دليل حاسبة رسوم دائرة الأراضي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            دليل حاسبة رسوم دائرة الأراضي والأملاك في دبي 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            دائرة الأراضي والأملاك في دبي (DLD) هي الجهة الحكومية المسؤولة عن تنظيم وتسجيل جميع المعاملات العقارية. يوضح هذا الدليل كيفية حساب الرسوم المطلوبة بدقة عند <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">شراء عقار في دبي</Link>.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">رسوم تسجيل دائرة الأراضي</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع الرسوم</th>
                    <th className="text-right py-3 px-4 font-semibold">النسبة/المبلغ</th>
                    <th className="text-right py-3 px-4 font-semibold">من يدفع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">رسوم نقل الملكية</td>
                    <td className="py-3 px-4">4% من قيمة العقار</td>
                    <td className="py-3 px-4">المشتري (عادةً)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم إدارية - شقق</td>
                    <td className="py-3 px-4">580 درهم</td>
                    <td className="py-3 px-4">المشتري</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم إدارية - أراضي</td>
                    <td className="py-3 px-4">430 درهم</td>
                    <td className="py-3 px-4">المشتري</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم إصدار شهادة الملكية</td>
                    <td className="py-3 px-4">250 درهم</td>
                    <td className="py-3 px-4">المشتري</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم خريطة الأرض</td>
                    <td className="py-3 px-4">225 درهم</td>
                    <td className="py-3 px-4">المشتري</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم الابتكار</td>
                    <td className="py-3 px-4">10 درهم</td>
                    <td className="py-3 px-4">المشتري</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم المعرفة</td>
                    <td className="py-3 px-4">10 درهم</td>
                    <td className="py-3 px-4">المشتري</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">رسوم الرهن العقاري</h2>
            <p className="text-warm-700 mb-4">
              عند الحصول على تمويل عقاري، تُضاف رسوم إضافية لتسجيل الرهن في دائرة الأراضي:
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>رسوم تسجيل الرهن: 0.25% من قيمة القرض</li>
              <li>رسوم إدارية للرهن: 290 درهم</li>
              <li>رسوم تقييم العقار: 2,500 - 3,500 درهم (يدفعها البنك أحياناً)</li>
              <li>رسوم معالجة القرض: 1% من قيمة القرض (تُدفع للبنك)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أمثلة حسابية</h2>
            <div className="space-y-6">
              <div className="bg-warm-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">شقة بقيمة 800,000 درهم (بدون تمويل)</h3>
                <div className="space-y-2 text-warm-700 text-sm">
                  <div className="flex justify-between"><span>رسوم نقل الملكية (4%)</span><span>32,000 درهم</span></div>
                  <div className="flex justify-between"><span>رسوم إدارية</span><span>580 درهم</span></div>
                  <div className="flex justify-between"><span>شهادة الملكية</span><span>250 درهم</span></div>
                  <div className="flex justify-between"><span>رسوم أخرى</span><span>245 درهم</span></div>
                  <div className="border-t border-warm-300 pt-2 flex justify-between font-bold text-gray-900">
                    <span>إجمالي رسوم دائرة الأراضي</span><span>33,075 درهم</span>
                  </div>
                </div>
              </div>

              <div className="bg-warm-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">فيلا بقيمة 3,000,000 درهم (مع تمويل 80%)</h3>
                <div className="space-y-2 text-warm-700 text-sm">
                  <div className="flex justify-between"><span>رسوم نقل الملكية (4%)</span><span>120,000 درهم</span></div>
                  <div className="flex justify-between"><span>رسوم إدارية</span><span>580 درهم</span></div>
                  <div className="flex justify-between"><span>رسوم تسجيل الرهن (0.25% × 2,400,000)</span><span>6,000 درهم</span></div>
                  <div className="flex justify-between"><span>رسوم إدارية للرهن</span><span>290 درهم</span></div>
                  <div className="flex justify-between"><span>رسوم أخرى</span><span>505 درهم</span></div>
                  <div className="border-t border-warm-300 pt-2 flex justify-between font-bold text-gray-900">
                    <span>إجمالي رسوم دائرة الأراضي</span><span>127,375 درهم</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نصائح لتقليل التكاليف</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>بعض المطورين يقدمون إعفاءً من رسوم دائرة الأراضي (4%) كعرض ترويجي</li>
              <li>تفاوض مع البائع على تقاسم رسوم النقل</li>
              <li>قارن عروض التمويل العقاري من عدة بنوك لتقليل رسوم المعالجة</li>
              <li>تحقق من <Link href="/ar/guides/hidden-costs-buying-property-dubai" className="text-primary-600 hover:underline">التكاليف الخفية الأخرى</Link> لتجنب المفاجآت</li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              رسوم دائرة الأراضي البالغة 4% هي الرسوم الأعلى عند شراء العقار. ابحث عن مشاريع يقدم فيها المطور تحمل هذه الرسوم. يمكنك أيضاً التقدم للحصول على خصومات عبر برنامج دبي ريست (Dubai REST) للمعاملات الإلكترونية.
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
