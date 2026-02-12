import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تصنيف النمو الرأسمالي في دبي | بروبرتي ويكي',
  description: 'تصنيف مناطق دبي حسب معدل النمو الرأسمالي للعقارات. تحليل الأداء التاريخي والتوقعات المستقبلية لأسعار العقارات.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/investing/capital-growth-ranking-dubai',
    title: 'تصنيف النمو الرأسمالي في دبي | بروبرتي ويكي',
    description: 'تصنيف مناطق دبي حسب معدل النمو الرأسمالي للعقارات. تحليل الأداء التاريخي والتوقعات المستقبلية لأسعار العقارات.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/investing/capital-growth-ranking-dubai',
    languages: {
      'en': 'https://propertywiki.ai/investing/capital-growth-ranking-dubai',
      'ar': 'https://propertywiki.ai/ar/investing/capital-growth-ranking-dubai',
      'x-default': 'https://propertywiki.ai/investing/capital-growth-ranking-dubai',
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
    title: 'بطاقة أداء الاستثمار العقاري في دبي 2026',
    href: '/ar/investing/dubai-investment-scorecard-2026',
    category: 'استثمار',
    description: 'تقييم شامل متعدد المعايير للاستثمار العقاري.',
  },
  {
    title: 'تصنيف الطلب الإيجاري في دبي',
    href: '/ar/investing/rental-demand-ranking-dubai',
    category: 'استثمار',
    description: 'ترتيب المناطق حسب قوة الطلب الإيجاري.',
  },
  {
    title: 'أعلى مناطق العائد الإيجاري في دبي',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'دليل',
    description: 'دليل تفصيلي لأعلى المناطق من حيث العائد الإيجاري.',
  },
  {
    title: 'نخلة جميرا',
    href: '/ar/locations/dubai/palm-jumeirah',
    category: 'موقع',
    description: 'دليل شامل للاستثمار في نخلة جميرا.',
  },
]

export default function CapitalGrowthRankingDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/investing" className="text-primary-600 hover:text-primary-700 text-sm">الاستثمار</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">تصنيف النمو الرأسمالي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            تصنيف النمو الرأسمالي في دبي
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يقيس النمو الرأسمالي مدى ارتفاع قيمة العقار مع مرور الوقت. يُعد من أهم مؤشرات نجاح الاستثمار العقاري طويل الأجل. نقدم هنا تصنيفاً لأبرز مناطق دبي حسب أدائها في النمو الرأسمالي خلال الفترة 2021-2025 والتوقعات لعام 2026.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">ما هو النمو الرأسمالي؟</h2>
            <p className="text-warm-700">
              النمو الرأسمالي هو الزيادة في قيمة العقار بين سعر الشراء وقيمته السوقية الحالية أو سعر البيع. يُحسب كنسبة مئوية سنوية ويتأثر بعوامل مثل العرض والطلب، تطور البنية التحتية، والسياسات الحكومية. يمكنك الاطلاع على <Link href="/ar/investing/dubai-investment-scorecard-2026" className="text-primary-600 hover:underline">بطاقة الأداء الشاملة</Link> لفهم علاقته بالمعايير الأخرى.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تصنيف المناطق حسب النمو الرأسمالي</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">الترتيب</th>
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">النمو السنوي<br /><span className="font-normal text-xs">(2021-2025)</span></th>
                    <th className="text-right py-3 px-4 font-semibold">التوقع 2026</th>
                    <th className="text-right py-3 px-4 font-semibold">التقييم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr className="bg-yellow-50">
                    <td className="py-3 px-4 font-bold">1</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link></td>
                    <td className="py-3 px-4 text-green-700">+18.2%</td>
                    <td className="py-3 px-4 text-green-700">+12-15%</td>
                    <td className="py-3 px-4 font-bold">9.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">2</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></td>
                    <td className="py-3 px-4 text-green-700">+15.8%</td>
                    <td className="py-3 px-4 text-green-700">+10-13%</td>
                    <td className="py-3 px-4 font-bold">9.0/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">3</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/difc" className="text-primary-600 hover:underline">مركز دبي المالي العالمي</Link></td>
                    <td className="py-3 px-4 text-green-700">+14.5%</td>
                    <td className="py-3 px-4 text-green-700">+10-12%</td>
                    <td className="py-3 px-4 font-bold">8.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">4</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></td>
                    <td className="py-3 px-4 text-green-700">+13.2%</td>
                    <td className="py-3 px-4 text-green-700">+9-12%</td>
                    <td className="py-3 px-4 font-bold">8.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">5</td>
                    <td className="py-3 px-4">دبي هيلز استيت</td>
                    <td className="py-3 px-4 text-green-700">+12.8%</td>
                    <td className="py-3 px-4 text-green-700">+9-11%</td>
                    <td className="py-3 px-4 font-bold">8.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">6</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td>
                    <td className="py-3 px-4 text-green-700">+11.5%</td>
                    <td className="py-3 px-4 text-green-700">+8-10%</td>
                    <td className="py-3 px-4 font-bold">8.0/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">7</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link></td>
                    <td className="py-3 px-4 text-green-700">+10.8%</td>
                    <td className="py-3 px-4 text-green-700">+7-9%</td>
                    <td className="py-3 px-4 font-bold">8.0/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">8</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس</Link></td>
                    <td className="py-3 px-4 text-green-700">+10.2%</td>
                    <td className="py-3 px-4 text-green-700">+7-9%</td>
                    <td className="py-3 px-4 font-bold">7.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">9</td>
                    <td className="py-3 px-4">قرية جميرا الدائرية</td>
                    <td className="py-3 px-4 text-green-700">+9.5%</td>
                    <td className="py-3 px-4 text-green-700">+6-8%</td>
                    <td className="py-3 px-4 font-bold">7.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">10</td>
                    <td className="py-3 px-4">واحة دبي للسيليكون</td>
                    <td className="py-3 px-4 text-green-700">+7.8%</td>
                    <td className="py-3 px-4 text-green-700">+5-7%</td>
                    <td className="py-3 px-4 font-bold">6.5/10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">العوامل المؤثرة في النمو الرأسمالي</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📍 الموقع والندرة</h3>
                <p className="text-warm-700 text-sm">المناطق ذات المواقع الفريدة مثل <Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link> تتمتع بنمو أعلى بسبب محدودية المعروض. الإطلالات البحرية والمواقع المركزية تدعم ارتفاع الأسعار.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ مشاريع البنية التحتية</h3>
                <p className="text-warm-700 text-sm">المناطق القريبة من مشاريع البنية التحتية الجديدة مثل محطات المترو والطرق الرئيسية تشهد نمواً أسرع. مشاريع إكسبو ومطار آل مكتوم تدفع النمو في المناطق المحيطة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📊 العرض والطلب</h3>
                <p className="text-warm-700 text-sm">المناطق ذات الطلب المرتفع والمعروض المحدود تحقق أعلى معدلات النمو. تأكد من دراسة <Link href="/ar/investing/rental-demand-ranking-dubai" className="text-primary-600 hover:underline">تصنيف الطلب الإيجاري</Link> لفهم ديناميكيات السوق.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">النمو الرأسمالي مقابل العائد الإيجاري</h2>
            <p className="text-warm-700 mb-3">
              عادةً ما تكون هناك علاقة عكسية بين النمو الرأسمالي والعائد الإيجاري. المناطق الفاخرة مثل نخلة جميرا تقدم نمواً رأسمالياً أعلى لكن عائداً إيجارياً أقل نسبياً. بينما المناطق الناشئة مثل واحة دبي للسيليكون تقدم عائداً إيجارياً مرتفعاً مع نمو رأسمالي أقل.
            </p>
            <p className="text-warm-700">
              الاستراتيجية المثلى تعتمد على أهدافك: هل تبحث عن دخل شهري ثابت أم عن زيادة في رأس المال؟ راجع <Link href="/ar/investing/top-10-investment-areas-dubai" className="text-primary-600 hover:underline">أفضل 10 مناطق استثمارية</Link> للتقييم الشامل. جميع المناطق المذكورة هي مناطق <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> متاحة للمستثمرين الأجانب.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">ملاحظة</h3>
            <p className="text-accent-700 text-sm">
              معدلات النمو المذكورة مبنية على بيانات المعاملات الفعلية من دائرة الأراضي والأملاك في دبي. التوقعات المستقبلية تستند إلى تحليل الاتجاهات الحالية وقد تختلف عن النتائج الفعلية.
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
            <Link href="/ar/locations/dubai/palm-jumeirah" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">نخلة جميرا</p>
            </Link>
            <Link href="/ar/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">داون تاون دبي</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر في الإمارات</p>
            </Link>
            <Link href="/ar/investing/dubai-investment-scorecard-2026" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">بطاقة أداء الاستثمار 2026</p>
            </Link>
            <Link href="/ar/investing/rental-demand-ranking-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">تصنيف الطلب الإيجاري</p>
            </Link>
            <Link href="/ar/guides/highest-rental-yield-areas-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أعلى مناطق العائد الإيجاري</p>
            </Link>
          </div>
        </nav>

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
