import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'بطاقة أداء الاستثمار العقاري في دبي 2026 | بروبرتي ويكي',
  description: 'بطاقة أداء شاملة متعددة المعايير للاستثمار العقاري في دبي 2026. تقييم المناطق حسب العائد والنمو والطلب والمخاطر.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/investing/dubai-investment-scorecard-2026',
    title: 'بطاقة أداء الاستثمار العقاري في دبي 2026 | بروبرتي ويكي',
    description: 'بطاقة أداء شاملة متعددة المعايير للاستثمار العقاري في دبي 2026. تقييم المناطق حسب العائد والنمو والطلب والمخاطر.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/investing/dubai-investment-scorecard-2026',
    languages: {
      'en': 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026',
      'ar': 'https://propertywiki.ai/ar/investing/dubai-investment-scorecard-2026',
      'x-default': 'https://propertywiki.ai/investing/dubai-investment-scorecard-2026',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل 10 مناطق استثمارية في دبي 2026',
    href: '/ar/investing/top-10-investment-areas-dubai',
    category: 'استثمار',
    description: 'تصنيف شامل لأفضل المناطق الاستثمارية في دبي.',
  },
  {
    title: 'تصنيف النمو الرأسمالي في دبي',
    href: '/ar/investing/capital-growth-ranking-dubai',
    category: 'استثمار',
    description: 'ترتيب المناطق حسب معدل النمو الرأسمالي المتوقع.',
  },
  {
    title: 'تصنيف الطلب الإيجاري في دبي',
    href: '/ar/investing/rental-demand-ranking-dubai',
    category: 'استثمار',
    description: 'ترتيب المناطق حسب قوة الطلب الإيجاري ومعدلات الإشغال.',
  },
  {
    title: 'أعلى مناطق العائد الإيجاري في دبي',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'دليل',
    description: 'دليل شامل لأعلى المناطق من حيث العائد الإيجاري.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'استكشف فرص الاستثمار في دبي مارينا.',
  },
]

export default function DubaiInvestmentScorecardPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/investing" className="text-primary-600 hover:text-primary-700 text-sm">الاستثمار</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">بطاقة أداء الاستثمار العقاري</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            بطاقة أداء الاستثمار العقاري في دبي 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            بطاقة أداء شاملة تقيّم سوق العقارات في دبي عبر معايير متعددة تشمل العائد الإيجاري والنمو الرأسمالي ومستوى المخاطر والسيولة. أداة أساسية لكل مستثمر يسعى لاتخاذ قرارات مبنية على البيانات.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">ما هي بطاقة الأداء الاستثمارية؟</h2>
            <p className="text-warm-700">
              بطاقة الأداء هي أداة تحليلية تجمع عدة مؤشرات في تقييم واحد شامل. تساعد المستثمرين على مقارنة المناطق المختلفة بشكل موضوعي وتحديد الفرص الأنسب لأهدافهم. تشمل المعايير الأساسية: العائد، النمو، الطلب، المخاطر، والسيولة.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">معايير التقييم التفصيلية</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. العائد الإيجاري الصافي (وزن 25%)</h3>
                <p className="text-warm-700 text-sm">صافي العائد الإيجاري السنوي بعد خصم رسوم الخدمات والصيانة. يشمل العائد من الإيجار طويل الأجل والإيجار قصير المدة. اطلع على <Link href="/ar/guides/highest-rental-yield-areas-dubai" className="text-primary-600 hover:underline">أعلى مناطق العائد الإيجاري</Link> لمزيد من التفاصيل.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. النمو الرأسمالي (وزن 25%)</h3>
                <p className="text-warm-700 text-sm">معدل ارتفاع قيمة العقار خلال السنوات الخمس الماضية والتوقعات المستقبلية. راجع <Link href="/ar/investing/capital-growth-ranking-dubai" className="text-primary-600 hover:underline">تصنيف النمو الرأسمالي</Link> للتفاصيل الكاملة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. الطلب الإيجاري (وزن 20%)</h3>
                <p className="text-warm-700 text-sm">معدلات الإشغال وسرعة تأجير الوحدات ونوعية المستأجرين. تفاصيل إضافية في <Link href="/ar/investing/rental-demand-ranking-dubai" className="text-primary-600 hover:underline">تصنيف الطلب الإيجاري</Link>.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">4. مستوى المخاطر (وزن 15%)</h3>
                <p className="text-warm-700 text-sm">تقييم المخاطر يشمل فائض المعروض، تقلبات الأسعار، والاعتماد على قطاع محدد. التقييم الأعلى يعني مخاطر أقل.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">5. السيولة وسهولة البيع (وزن 15%)</h3>
                <p className="text-warm-700 text-sm">سرعة بيع العقار وعدد المعاملات في المنطقة. المناطق ذات السيولة العالية توفر مرونة أكبر للمستثمر.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">بطاقة الأداء الشاملة — المناطق الرئيسية</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-3 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-3 font-semibold">العائد<br /><span className="font-normal text-xs">(25%)</span></th>
                    <th className="text-right py-3 px-3 font-semibold">النمو<br /><span className="font-normal text-xs">(25%)</span></th>
                    <th className="text-right py-3 px-3 font-semibold">الطلب<br /><span className="font-normal text-xs">(20%)</span></th>
                    <th className="text-right py-3 px-3 font-semibold">المخاطر<br /><span className="font-normal text-xs">(15%)</span></th>
                    <th className="text-right py-3 px-3 font-semibold">السيولة<br /><span className="font-normal text-xs">(15%)</span></th>
                    <th className="text-right py-3 px-3 font-semibold">النتيجة<br /><span className="font-normal text-xs">المرجحة</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr className="bg-yellow-50">
                    <td className="py-3 px-3 font-medium"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td>
                    <td className="py-3 px-3">8.5</td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3">9.5</td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3">9.0</td>
                    <td className="py-3 px-3 font-bold text-green-700">8.5</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium"><Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></td>
                    <td className="py-3 px-3">7.0</td>
                    <td className="py-3 px-3">9.0</td>
                    <td className="py-3 px-3">9.0</td>
                    <td className="py-3 px-3">7.5</td>
                    <td className="py-3 px-3">9.0</td>
                    <td className="py-3 px-3 font-bold text-green-700">8.3</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3">8.5</td>
                    <td className="py-3 px-3">8.5</td>
                    <td className="py-3 px-3">7.0</td>
                    <td className="py-3 px-3">8.5</td>
                    <td className="py-3 px-3 font-bold text-green-700">8.2</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium"><Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس</Link></td>
                    <td className="py-3 px-3">8.5</td>
                    <td className="py-3 px-3">7.5</td>
                    <td className="py-3 px-3">9.0</td>
                    <td className="py-3 px-3">7.5</td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3 font-bold text-green-700">8.2</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium"><Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link></td>
                    <td className="py-3 px-3">6.5</td>
                    <td className="py-3 px-3">9.5</td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3">8.5</td>
                    <td className="py-3 px-3">7.5</td>
                    <td className="py-3 px-3 font-bold text-green-700">8.0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium">قرية جميرا الدائرية</td>
                    <td className="py-3 px-3">9.0</td>
                    <td className="py-3 px-3">7.5</td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3">6.5</td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3 font-bold text-green-700">7.9</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium"><Link href="/ar/locations/dubai/difc" className="text-primary-600 hover:underline">مركز دبي المالي</Link></td>
                    <td className="py-3 px-3">7.0</td>
                    <td className="py-3 px-3">8.5</td>
                    <td className="py-3 px-3">7.5</td>
                    <td className="py-3 px-3">8.0</td>
                    <td className="py-3 px-3">7.0</td>
                    <td className="py-3 px-3 font-bold text-green-700">7.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">كيف تقرأ بطاقة الأداء؟</h2>
            <div className="space-y-3 text-warm-700">
              <p>
                <strong>النتيجة 8.0 وأعلى:</strong> منطقة استثمارية ممتازة مع توازن قوي بين العائد والنمو. مناسبة لمعظم أنواع المستثمرين.
              </p>
              <p>
                <strong>النتيجة 7.0 - 7.9:</strong> منطقة جيدة مع نقاط قوة واضحة في بعض المعايير. يُنصح بدراسة المعايير الفردية لتحديد مدى توافقها مع أهدافك.
              </p>
              <p>
                <strong>النتيجة أقل من 7.0:</strong> منطقة قد تناسب استراتيجيات استثمارية محددة. تتطلب دراسة أعمق وفهماً جيداً للسوق المحلي.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">توصيات حسب نوع المستثمر</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">💰 الباحث عن الدخل الإيجاري</h3>
                <p className="text-warm-700 text-sm">ركّز على المناطق ذات التقييم العالي في العائد والطلب: قرية جميرا الدائرية، دبي مارينا، جميرا بيتش ريزيدنس.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">📈 الباحث عن النمو الرأسمالي</h3>
                <p className="text-warm-700 text-sm">اختر المناطق ذات التقييم العالي في النمو والسيولة: نخلة جميرا، داون تاون دبي، الخليج التجاري.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🛡️ المستثمر المتحفظ</h3>
                <p className="text-warm-700 text-sm">أولوية للمناطق ذات مخاطر منخفضة وسيولة عالية: دبي مارينا، داون تاون دبي. جميع هذه المناطق <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link>.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 المستثمر المتوازن</h3>
                <p className="text-warm-700 text-sm">ابحث عن النتيجة المرجحة الأعلى التي تجمع بين جميع المعايير. راجع <Link href="/ar/investing/top-10-investment-areas-dubai" className="text-primary-600 hover:underline">أفضل 10 مناطق</Link> للتصنيف الكامل.</p>
              </div>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">إخلاء مسؤولية</h3>
            <p className="text-accent-700 text-sm">
              بطاقة الأداء هذه أداة تحليلية استرشادية ولا تُعد نصيحة استثمارية مباشرة. التقييمات مبنية على بيانات السوق المتاحة وقد تتغير. ننصح بالاستعانة بمستشار مالي مرخص قبل اتخاذ أي قرارات استثمارية.
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
          <Link href="/ar/investing" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة للاستثمار
          </Link>
        </div>
      </div>
    </div>
  )
}
