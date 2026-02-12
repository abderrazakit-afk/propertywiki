import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أبوظبي مقابل دبي للاستثمار العقاري 2026 | بروبرتي ويكي',
  description: 'مقارنة شاملة بين أبوظبي ودبي للاستثمار العقاري. الأسعار والعائد الإيجاري والنمو الرأسمالي والقوانين. أيهما الأفضل للمستثمرين العقاريين؟',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/abu-dhabi-vs-dubai-investment',
    title: 'أبوظبي مقابل دبي للاستثمار العقاري 2026 | بروبرتي ويكي',
    description: 'مقارنة شاملة بين أبوظبي ودبي للاستثمار العقاري. الأسعار والعائد الإيجاري والنمو الرأسمالي والقوانين.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/abu-dhabi-vs-dubai-investment',
    languages: {
      'en': 'https://propertywiki.ai/guides/abu-dhabi-vs-dubai-investment',
      'ar': 'https://propertywiki.ai/ar/guides/abu-dhabi-vs-dubai-investment',
      'x-default': 'https://propertywiki.ai/guides/abu-dhabi-vs-dubai-investment',
    },
  },
}

const relatedArticles = [
  {
    title: 'كيفية شراء عقار في الإمارات',
    href: '/ar/guides/how-to-buy-property-in-uae',
    category: 'دليل',
    description: 'دليل شامل للتملك العقاري في جميع الإمارات.',
  },
  {
    title: 'أفضل المناطق بعائد 8% وأكثر',
    href: '/ar/guides/best-areas-8-percent-roi-dubai',
    category: 'دليل',
    description: 'المناطق التي تحقق أعلى عائد استثماري في دبي.',
  },
  {
    title: 'داون تاون دبي',
    href: '/ar/locations/dubai/downtown-dubai',
    category: 'موقع',
    description: 'كل ما تحتاج معرفته عن داون تاون دبي للاستثمار.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'نظام التملك الحر وحقوق المالكين الأجانب.',
  },
  {
    title: 'العقارات على الخارطة مقابل الجاهزة',
    href: '/ar/guides/off-plan-vs-ready-property-roi',
    category: 'دليل',
    description: 'مقارنة بين عوائد العقارات على الخارطة والجاهزة.',
  },
]

export default function AbuDhabiVsDubaiInvestmentPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">أبوظبي مقابل دبي للاستثمار العقاري</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            أبوظبي مقابل دبي للاستثمار العقاري - مقارنة 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تستقطب كل من أبوظبي ودبي المستثمرين العقاريين من حول العالم. رغم أنهما تقعان في دولة واحدة، إلا أن سوقيهما العقاريين يختلفان بشكل جوهري من حيث الأسعار والعائدات والقوانين. نستعرض في هذا الدليل أهم الفروقات لمساعدة المستثمرين على اختيار السوق الأنسب.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظرة عامة على السوقين</h2>
            <p className="text-warm-700 mb-4">
              تتميز دبي بسوق عقاري ناضج وديناميكي مع حجم تداولات مرتفع وتنوع كبير في المشاريع. تُعرف بسرعة النمو والابتكار في التطوير العقاري مع مناطق <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> عديدة. أما أبوظبي فتتميز بسوق أكثر استقراراً وتحفظاً، مع أسعار أقل نسبياً ومشاريع حكومية ضخمة مثل جزيرة السعديات وجزيرة ياس. فتحت أبوظبي باب التملك الحر للأجانب مؤخراً في مناطق استثمارية محددة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">جدول المقارنة الاستثمارية</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">معيار المقارنة</th>
                    <th className="text-right py-3 px-4 font-semibold">أبوظبي</th>
                    <th className="text-right py-3 px-4 font-semibold">دبي</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4 font-medium">متوسط سعر القدم المربع</td>
                    <td className="py-3 px-4">800 - 1,500 درهم</td>
                    <td className="py-3 px-4">1,200 - 3,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">العائد الإيجاري السنوي</td>
                    <td className="py-3 px-4">6% - 8.5%</td>
                    <td className="py-3 px-4">5% - 8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">رسوم التسجيل العقاري</td>
                    <td className="py-3 px-4">2% من سعر العقار</td>
                    <td className="py-3 px-4">4% من سعر العقار (DLD)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">رسوم الخدمات السنوية</td>
                    <td className="py-3 px-4">أقل بنسبة 20-30%</td>
                    <td className="py-3 px-4">أعلى نسبياً</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">مناطق التملك الحر</td>
                    <td className="py-3 px-4">محدودة - تتوسع تدريجياً</td>
                    <td className="py-3 px-4">واسعة - أكثر من 50 منطقة</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">حجم السوق</td>
                    <td className="py-3 px-4">أصغر - سيولة أقل</td>
                    <td className="py-3 px-4">أكبر - سيولة عالية</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">التأجير السياحي</td>
                    <td className="py-3 px-4">نمو متسارع</td>
                    <td className="py-3 px-4">سوق ناضج ومزدهر</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">استقرار الأسعار</td>
                    <td className="py-3 px-4">أكثر استقراراً</td>
                    <td className="py-3 px-4">تقلبات أعلى</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مزايا الاستثمار في أبوظبي</h2>
            <p className="text-warm-700 mb-4">
              توفر أبوظبي أسعار دخول أقل مع عوائد إيجارية تنافسية. رسوم التسجيل العقاري 2% فقط مقارنة بـ 4% في دبي مما يوفر تكاليف الشراء الأولية. السوق أكثر استقراراً مع تقلبات أقل في الأسعار. مشاريع مثل جزيرة السعديات وجزيرة ياس تقدم فرصاً استثمارية واعدة مع خطط تطوير حكومية ضخمة. تكاليف المعيشة ورسوم الخدمات أقل بشكل عام.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مزايا الاستثمار في دبي</h2>
            <p className="text-warm-700 mb-4">
              تتميز دبي بسيولة عالية في السوق العقاري مما يسهّل البيع والشراء. تنوع كبير في المناطق والمشاريع يناسب مختلف الميزانيات من <Link href="/ar/guides/best-areas-buy-property-under-500k" className="text-primary-600 hover:underline">عقارات تحت 500 ألف درهم</Link> إلى <Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">فلل فاخرة في نخلة جميرا</Link>. البنية التحتية السياحية المتطورة تدعم سوق التأجير قصير المدى. نظام قانوني واضح ومتطور للتملك الحر مع إجراءات مبسطة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أيهما الأفضل للمستثمر؟</h2>
            <p className="text-warm-700 mb-4">
              يعتمد الاختيار على أهدافك الاستثمارية. إذا كنت تبحث عن أسعار دخول منخفضة واستقرار أكبر مع عوائد قوية، فإن أبوظبي خيار ممتاز. أما إذا كنت تفضل سوقاً أكثر نشاطاً مع خيارات متنوعة وسيولة عالية، فإن دبي تظل الوجهة الأولى. يمكنك أيضاً تنويع محفظتك بالاستثمار في كلتا الإمارتين للاستفادة من مزايا كل سوق.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              قبل الاستثمار في أي من الإمارتين، ادرس القوانين المحلية جيداً واستعن بوكيل عقاري مرخص. راجع دليل <Link href="/ar/guides/how-to-buy-property-in-uae" className="text-primary-600 hover:underline">شراء عقار في الإمارات</Link> لفهم الإجراءات القانونية. لا تنسَ حساب جميع التكاليف بما فيها <Link href="/ar/guides/hidden-costs-buying-property-dubai" className="text-primary-600 hover:underline">الرسوم والتكاليف الخفية</Link>.
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
            <Link href="/ar/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">داون تاون دبي</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر في الإمارات</p>
            </Link>
            <Link href="/ar/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أعلى مناطق العائد الإيجاري</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/investing" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">الاستثمار العقاري</p>
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
