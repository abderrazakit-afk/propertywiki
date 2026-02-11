import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تكاليف الصيانة حسب المجتمع في دبي 2026 | بروبرتي ويكي',
  description: 'مقارنة تفصيلية لتكاليف الصيانة والخدمات في مختلف المجتمعات السكنية في دبي. فلل وشقق وتاون هاوس.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/maintenance-cost-by-community-dubai',
    title: 'تكاليف الصيانة حسب المجتمع في دبي 2026 | بروبرتي ويكي',
    description: 'مقارنة تفصيلية لتكاليف الصيانة والخدمات في مختلف المجتمعات السكنية في دبي. فلل وشقق وتاون هاوس.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/maintenance-cost-by-community-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/maintenance-cost-by-community-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/maintenance-cost-by-community-dubai',
      'x-default': 'https://propertywiki.ai/guides/maintenance-cost-by-community-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'رسوم الخدمات حسب المنطقة',
    href: '/ar/guides/service-charges-by-area-dubai',
    category: 'دليل',
    description: 'مقارنة رسوم الخدمات السنوية في مناطق دبي المختلفة.',
  },
  {
    title: 'مقارنة رسوم التبريد والتكييف',
    href: '/ar/guides/dewa-cooling-charges-comparison',
    category: 'دليل',
    description: 'مقارنة بين أنظمة التبريد المركزي والفردي وتكاليفها.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي.',
  },
  {
    title: 'المرابع العربية',
    href: '/ar/locations/dubai/arabian-ranches',
    category: 'موقع',
    description: 'استكشف مجتمع المرابع العربية وتكاليف المعيشة فيه.',
  },
  {
    title: 'دليل ديوا للكهرباء والمياه',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'دليل',
    description: 'كل ما تحتاج معرفته عن فواتير ديوا والتوصيلات.',
  },
]

export default function MaintenanceCostByCommunityPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">تكاليف الصيانة حسب المجتمع في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            تكاليف الصيانة حسب المجتمع في دبي - دليل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            تختلف تكاليف الصيانة بشكل ملحوظ بين المجتمعات السكنية في دبي. يشمل هذا الدليل تفاصيل تكاليف الصيانة للفلل والشقق والتاون هاوس في أبرز المجتمعات لمساعدتك في التخطيط المالي عند <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">شراء عقار في دبي</Link>.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف صيانة الفلل</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المجتمع</th>
                    <th className="text-right py-3 px-4 font-semibold">رسوم الخدمات (درهم/قدم مربع/سنة)</th>
                    <th className="text-right py-3 px-4 font-semibold">التكلفة السنوية التقديرية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link></td>
                    <td className="py-3 px-4">3.5 - 5 درهم</td>
                    <td className="py-3 px-4">15,000 - 25,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">دبي هيلز استيت</td>
                    <td className="py-3 px-4">4 - 6 درهم</td>
                    <td className="py-3 px-4">18,000 - 30,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link></td>
                    <td className="py-3 px-4">5 - 8 درهم</td>
                    <td className="py-3 px-4">30,000 - 60,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">داماك هيلز</td>
                    <td className="py-3 px-4">4 - 7 درهم</td>
                    <td className="py-3 px-4">20,000 - 35,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">المرابع العربية 2</td>
                    <td className="py-3 px-4">3 - 4.5 درهم</td>
                    <td className="py-3 px-4">12,000 - 20,000 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف صيانة الشقق</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">رسوم الخدمات (درهم/قدم مربع/سنة)</th>
                    <th className="text-right py-3 px-4 font-semibold">شقة غرفة واحدة (تقديري)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></td>
                    <td className="py-3 px-4">30 - 50 درهم</td>
                    <td className="py-3 px-4">25,000 - 40,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></td>
                    <td className="py-3 px-4">18 - 30 درهم</td>
                    <td className="py-3 px-4">14,000 - 24,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></td>
                    <td className="py-3 px-4">15 - 25 درهم</td>
                    <td className="py-3 px-4">12,000 - 20,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">قرية جميرا الدائرية</td>
                    <td className="py-3 px-4">10 - 18 درهم</td>
                    <td className="py-3 px-4">8,000 - 14,000 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ما تشمله رسوم الصيانة</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>صيانة المناطق المشتركة (ممرات، مداخل، ردهات)</li>
              <li>خدمات الأمن والحراسة على مدار الساعة</li>
              <li>صيانة المصاعد والأنظمة الميكانيكية</li>
              <li>تنظيف المناطق المشتركة وجمع النفايات</li>
              <li>صيانة المسابح وصالات الرياضة والحدائق</li>
              <li>التأمين على المبنى (وليس الوحدة الفردية)</li>
              <li>صيانة أنظمة إطفاء الحريق والسلامة</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف إضافية يجب مراعاتها</h2>
            <p className="text-warm-700 mb-4">
              بالإضافة إلى <Link href="/ar/guides/service-charges-by-area-dubai" className="text-primary-600 hover:underline">رسوم الخدمات السنوية</Link>، يتحمل مالكو العقارات تكاليف صيانة داخلية مثل:
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>صيانة أنظمة التكييف: 500 - 2,000 درهم سنوياً</li>
              <li>صيانة السباكة والأعمال الكهربائية: حسب الحاجة</li>
              <li>الطلاء والتجديدات: كل 3-5 سنوات</li>
              <li>فواتير <Link href="/ar/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">ديوا للكهرباء والمياه</Link></li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              عند مقارنة العقارات، لا تنظر فقط إلى سعر الشراء. احسب التكلفة الإجمالية للملكية شاملة رسوم الخدمات والصيانة وفواتير ديوا. المجتمعات ذات رسوم الخدمات المنخفضة جداً قد تعاني من ضعف الصيانة مما يؤثر على قيمة العقار على المدى الطويل.
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
