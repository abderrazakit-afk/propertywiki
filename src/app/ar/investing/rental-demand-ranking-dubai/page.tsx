import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تصنيف الطلب الإيجاري في دبي | بروبرتي ويكي',
  description: 'تصنيف مناطق دبي حسب قوة الطلب الإيجاري ومعدلات الإشغال وسرعة التأجير. دليل المستثمر لاختيار المنطقة ذات الطلب الأقوى.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/investing/rental-demand-ranking-dubai',
    title: 'تصنيف الطلب الإيجاري في دبي | بروبرتي ويكي',
    description: 'تصنيف مناطق دبي حسب قوة الطلب الإيجاري ومعدلات الإشغال وسرعة التأجير. دليل المستثمر لاختيار المنطقة ذات الطلب الأقوى.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/investing/rental-demand-ranking-dubai',
    languages: {
      'en': 'https://propertywiki.ai/investing/rental-demand-ranking-dubai',
      'ar': 'https://propertywiki.ai/ar/investing/rental-demand-ranking-dubai',
      'x-default': 'https://propertywiki.ai/investing/rental-demand-ranking-dubai',
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
    title: 'تصنيف النمو الرأسمالي في دبي',
    href: '/ar/investing/capital-growth-ranking-dubai',
    category: 'استثمار',
    description: 'ترتيب المناطق حسب معدل النمو الرأسمالي المتوقع.',
  },
  {
    title: 'أعلى مناطق العائد الإيجاري في دبي',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'دليل',
    description: 'دليل تفصيلي لأعلى المناطق من حيث العائد الإيجاري.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'تعرف على نظام التملك الحر وحقوق المالكين الأجانب.',
  },
]

export default function RentalDemandRankingDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/investing" className="text-primary-600 hover:text-primary-700 text-sm">الاستثمار</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">تصنيف الطلب الإيجاري</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            تصنيف الطلب الإيجاري في دبي
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يُعد الطلب الإيجاري من أهم العوامل التي يجب دراستها قبل الاستثمار العقاري. منطقة ذات طلب إيجاري قوي تعني إشغالاً مرتفعاً ودخلاً ثابتاً. نستعرض هنا تصنيف مناطق دبي الرئيسية حسب قوة الطلب الإيجاري ومعدلات الإشغال.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">معايير تقييم الطلب الإيجاري</h2>
            <ul className="space-y-2 text-warm-700">
              <li>📊 <strong>معدل الإشغال</strong> — نسبة الوحدات المؤجرة من إجمالي الوحدات المتاحة</li>
              <li>⏱️ <strong>سرعة التأجير</strong> — متوسط عدد الأيام لتأجير وحدة شاغرة</li>
              <li>👥 <strong>تنوع المستأجرين</strong> — التوزيع بين عائلات ومهنيين وسياح</li>
              <li>📈 <strong>نمو الإيجارات</strong> — معدل الزيادة السنوية في الإيجارات</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تصنيف المناطق حسب الطلب الإيجاري</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">الترتيب</th>
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">معدل الإشغال</th>
                    <th className="text-right py-3 px-4 font-semibold">سرعة التأجير</th>
                    <th className="text-right py-3 px-4 font-semibold">نمو الإيجارات</th>
                    <th className="text-right py-3 px-4 font-semibold">التقييم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr className="bg-yellow-50">
                    <td className="py-3 px-4 font-bold">1</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td>
                    <td className="py-3 px-4 text-green-700">96%</td>
                    <td className="py-3 px-4">5 أيام</td>
                    <td className="py-3 px-4 text-green-700">+14%</td>
                    <td className="py-3 px-4 font-bold">9.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">2</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></td>
                    <td className="py-3 px-4 text-green-700">95%</td>
                    <td className="py-3 px-4">6 أيام</td>
                    <td className="py-3 px-4 text-green-700">+13%</td>
                    <td className="py-3 px-4 font-bold">9.0/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">3</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس</Link></td>
                    <td className="py-3 px-4 text-green-700">94%</td>
                    <td className="py-3 px-4">7 أيام</td>
                    <td className="py-3 px-4 text-green-700">+12%</td>
                    <td className="py-3 px-4 font-bold">9.0/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">4</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></td>
                    <td className="py-3 px-4 text-green-700">93%</td>
                    <td className="py-3 px-4">8 أيام</td>
                    <td className="py-3 px-4 text-green-700">+11%</td>
                    <td className="py-3 px-4 font-bold">8.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">5</td>
                    <td className="py-3 px-4">قرية جميرا الدائرية</td>
                    <td className="py-3 px-4 text-green-700">92%</td>
                    <td className="py-3 px-4">9 أيام</td>
                    <td className="py-3 px-4 text-green-700">+10%</td>
                    <td className="py-3 px-4 font-bold">8.0/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">6</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link></td>
                    <td className="py-3 px-4 text-green-700">91%</td>
                    <td className="py-3 px-4">12 يوماً</td>
                    <td className="py-3 px-4 text-green-700">+15%</td>
                    <td className="py-3 px-4 font-bold">8.0/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">7</td>
                    <td className="py-3 px-4">واحة دبي للسيليكون</td>
                    <td className="py-3 px-4 text-green-700">90%</td>
                    <td className="py-3 px-4">10 أيام</td>
                    <td className="py-3 px-4 text-green-700">+8%</td>
                    <td className="py-3 px-4 font-bold">7.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">8</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/difc" className="text-primary-600 hover:underline">مركز دبي المالي العالمي</Link></td>
                    <td className="py-3 px-4 text-green-700">89%</td>
                    <td className="py-3 px-4">14 يوماً</td>
                    <td className="py-3 px-4 text-green-700">+9%</td>
                    <td className="py-3 px-4 font-bold">7.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">9</td>
                    <td className="py-3 px-4">دبي هيلز استيت</td>
                    <td className="py-3 px-4 text-green-700">88%</td>
                    <td className="py-3 px-4">15 يوماً</td>
                    <td className="py-3 px-4 text-green-700">+9%</td>
                    <td className="py-3 px-4 font-bold">7.5/10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">10</td>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link></td>
                    <td className="py-3 px-4 text-green-700">87%</td>
                    <td className="py-3 px-4">18 يوماً</td>
                    <td className="py-3 px-4 text-green-700">+7%</td>
                    <td className="py-3 px-4 font-bold">7.0/10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تحليل محركات الطلب الإيجاري</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🏢 القرب من مراكز العمل</h3>
                <p className="text-warm-700 text-sm">المناطق القريبة من المناطق التجارية الرئيسية مثل <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link> و<Link href="/ar/locations/dubai/difc" className="text-primary-600 hover:underline">مركز دبي المالي</Link> تستقطب المهنيين العاملين في القطاعات المالية والتقنية.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🏖️ نمط الحياة والترفيه</h3>
                <p className="text-warm-700 text-sm">المناطق الساحلية مثل <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> و<Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس</Link> تتمتع بطلب استثنائي من المقيمين والسياح بفضل نمط الحياة الفريد.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">💰 القدرة على تحمل التكاليف</h3>
                <p className="text-warm-700 text-sm">المناطق ذات الأسعار المعقولة مثل قرية جميرا الدائرية وواحة دبي للسيليكون تجذب شريحة واسعة من المستأجرين ذوي الدخل المتوسط، مما يضمن طلباً مستقراً. اطلع على <Link href="/ar/guides/highest-rental-yield-areas-dubai" className="text-primary-600 hover:underline">أعلى مناطق العائد الإيجاري</Link> لمزيد من التفاصيل.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🚇 شبكة المواصلات</h3>
                <p className="text-warm-700 text-sm">المناطق المتصلة بشبكة المترو والمواصلات العامة تشهد طلباً أعلى. القرب من محطات المترو يزيد من جاذبية العقار للمستأجرين الذين يعتمدون على المواصلات العامة.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الإيجار قصير المدة مقابل طويل المدة</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">📅 الإيجار طويل المدة</h3>
                <p className="text-warm-700 text-sm">دخل ثابت ومستقر مع إدارة أقل. مناسب للمستثمرين الباحثين عن استقرار في الدخل. المناطق الأعلى طلباً: دبي مارينا، الخليج التجاري، قرية جميرا الدائرية.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🏨 الإيجار قصير المدة</h3>
                <p className="text-warm-700 text-sm">عائد أعلى محتمل لكن مع تقلبات موسمية وإدارة أكثر تعقيداً. المناطق الأعلى طلباً: داون تاون دبي، جميرا بيتش ريزيدنس، نخلة جميرا.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الربط بين الطلب الإيجاري والاستثمار</h2>
            <p className="text-warm-700 mb-3">
              الطلب الإيجاري القوي هو أحد أعمدة الاستثمار العقاري الناجح. لكنه ليس المعيار الوحيد — يجب دراسته إلى جانب <Link href="/ar/investing/capital-growth-ranking-dubai" className="text-primary-600 hover:underline">النمو الرأسمالي</Link> ومستوى المخاطر والسيولة.
            </p>
            <p className="text-warm-700">
              للحصول على صورة متكاملة، راجع <Link href="/ar/investing/dubai-investment-scorecard-2026" className="text-primary-600 hover:underline">بطاقة أداء الاستثمار الشاملة</Link> و<Link href="/ar/investing/top-10-investment-areas-dubai" className="text-primary-600 hover:underline">أفضل 10 مناطق استثمارية</Link>. تذكر أن جميع المناطق المذكورة هي مناطق <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> مفتوحة للمستثمرين من جميع الجنسيات.
            </p>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">ملاحظة</h3>
            <p className="text-accent-700 text-sm">
              البيانات المذكورة مبنية على تحليل سوق الإيجارات في دبي ومصادر متعددة تشمل بيانات دائرة الأراضي والأملاك. معدلات الإشغال وسرعة التأجير قد تختلف حسب نوع الوحدة وحجمها وطابقها.
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
