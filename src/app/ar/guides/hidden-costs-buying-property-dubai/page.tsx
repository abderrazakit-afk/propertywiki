import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'التكاليف الخفية لشراء عقار في دبي 2026 | بروبرتي ويكي',
  description: 'تعرف على جميع التكاليف والرسوم المخفية عند شراء عقار في دبي. من رسوم دائرة الأراضي إلى تكاليف الصيانة والتأمين.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/hidden-costs-buying-property-dubai',
    title: 'التكاليف الخفية لشراء عقار في دبي 2026 | بروبرتي ويكي',
    description: 'تعرف على جميع التكاليف والرسوم المخفية عند شراء عقار في دبي. من رسوم دائرة الأراضي إلى تكاليف الصيانة والتأمين.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/hidden-costs-buying-property-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/hidden-costs-buying-property-dubai',
      'x-default': 'https://propertywiki.ai/guides/hidden-costs-buying-property-dubai',
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
    title: 'دليل حاسبة رسوم دائرة الأراضي',
    href: '/ar/guides/dld-fees-calculator-guide',
    category: 'دليل',
    description: 'احسب رسوم دائرة الأراضي والأملاك بدقة قبل الشراء.',
  },
  {
    title: 'رسوم الخدمات حسب المنطقة',
    href: '/ar/guides/service-charges-by-area-dubai',
    category: 'دليل',
    description: 'مقارنة رسوم الخدمات في مناطق دبي المختلفة.',
  },
  {
    title: 'دليل ديوا للكهرباء والمياه',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن فواتير ديوا والتوصيلات.',
  },
  {
    title: 'مواقع دبي العقارية',
    href: '/ar/locations/dubai',
    category: 'موقع',
    description: 'استكشف أبرز المناطق العقارية في دبي.',
  },
]

export default function HiddenCostsBuyingPropertyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">التكاليف الخفية لشراء عقار في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            التكاليف الخفية لشراء عقار في دبي - دليل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            عند التخطيط لـ<Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">شراء عقار في دبي</Link>، كثير من المشترين يركزون على سعر العقار فقط ويتفاجأون بالتكاليف الإضافية. هذا الدليل يكشف جميع الرسوم والتكاليف التي يجب أخذها بالحسبان.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف ما قبل الشراء</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع التكلفة</th>
                    <th className="text-right py-3 px-4 font-semibold">المبلغ التقريبي</th>
                    <th className="text-right py-3 px-4 font-semibold">ملاحظات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">رسوم تقييم العقار</td>
                    <td className="py-3 px-4">2,500 - 3,500 درهم</td>
                    <td className="py-3 px-4">مطلوب عند التمويل العقاري</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم فحص العقار</td>
                    <td className="py-3 px-4">1,000 - 3,000 درهم</td>
                    <td className="py-3 px-4">اختياري لكن موصى به</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم المحامي</td>
                    <td className="py-3 px-4">5,000 - 15,000 درهم</td>
                    <td className="py-3 px-4">لمراجعة العقود والمستندات</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">رسوم المعاملة الرئيسية</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع الرسوم</th>
                    <th className="text-right py-3 px-4 font-semibold">النسبة/المبلغ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">رسوم دائرة الأراضي والأملاك (DLD)</td>
                    <td className="py-3 px-4">4% من سعر العقار</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم الإدارة (دائرة الأراضي)</td>
                    <td className="py-3 px-4">580 درهم (شقق) / 430 درهم (أراضي)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">عمولة الوسيط العقاري</td>
                    <td className="py-3 px-4">2% من سعر العقار + ضريبة القيمة المضافة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم شهادة عدم الممانعة (NOC)</td>
                    <td className="py-3 px-4">500 - 5,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم تسجيل الرهن (إن وجد)</td>
                    <td className="py-3 px-4">0.25% من مبلغ القرض + 290 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف ما بعد الشراء المستمرة</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-3">
              <li>
                <strong>رسوم الخدمات السنوية:</strong> تتراوح بين 10 و60 درهم للقدم المربع حسب المنطقة. راجع <Link href="/ar/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">دليل رسوم الخدمات حسب المنطقة</Link> للتفاصيل.
              </li>
              <li>
                <strong>فواتير ديوا (DEWA):</strong> الكهرباء والمياه و<Link href="/ar/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">رسوم التوصيل</Link> بالإضافة إلى رسوم الإسكان (5% من الإيجار السنوي).
              </li>
              <li>
                <strong>التأمين على العقار:</strong> 1,000 - 5,000 درهم سنوياً حسب قيمة العقار ونوعه.
              </li>
              <li>
                <strong>صيانة التكييف:</strong> 500 - 2,000 درهم سنوياً لعقود الصيانة الدورية.
              </li>
              <li>
                <strong>رسوم التبريد:</strong> في المناطق ذات التبريد المركزي، تُدفع رسوم شهرية منفصلة عن ديوا.
              </li>
              <li>
                <strong>رسوم مواقف السيارات:</strong> بعض المباني تفرض رسوماً إضافية على المواقف.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مثال عملي: التكلفة الإجمالية لشقة بمليون درهم</h2>
            <div className="bg-warm-50 rounded-2xl p-6">
              <div className="space-y-2 text-warm-700">
                <div className="flex justify-between"><span>سعر العقار</span><span className="font-semibold">1,000,000 درهم</span></div>
                <div className="flex justify-between"><span>رسوم دائرة الأراضي (4%)</span><span>40,000 درهم</span></div>
                <div className="flex justify-between"><span>عمولة الوسيط (2%)</span><span>20,000 درهم</span></div>
                <div className="flex justify-between"><span>رسوم التسجيل والإدارة</span><span>4,580 درهم</span></div>
                <div className="flex justify-between"><span>شهادة عدم الممانعة</span><span>2,000 درهم</span></div>
                <div className="flex justify-between"><span>رسوم أخرى تقديرية</span><span>5,000 درهم</span></div>
                <div className="border-t border-warm-300 pt-2 flex justify-between font-bold text-gray-900">
                  <span>الإجمالي التقريبي</span><span>1,071,580 درهم</span>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              خصص ما بين 7% إلى 8% من سعر العقار كميزانية إضافية للرسوم والتكاليف. استخدم <Link href="/ar/guides/dld-fees-calculator-guide" className="text-primary-600 hover:underline">حاسبة رسوم دائرة الأراضي</Link> للحصول على تقدير دقيق. لا تنسَ حساب التكاليف المستمرة مثل رسوم الخدمات وفواتير ديوا عند تقييم العائد الاستثماري.
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
