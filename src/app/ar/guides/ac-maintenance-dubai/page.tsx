import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'صيانة المكيفات في دبي - دليل شامل | بروبرتي ويكي',
  description: 'دليل صيانة أنظمة التكييف في دبي. نصائح للحفاظ على برودة منزلك وتقليل فواتير الكهرباء.',
}

const relatedArticles = [
  {
    title: 'دليل ديوا للكهرباء والمياه',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'دليل',
    description: 'فهم فواتير الكهرباء وكيفية توفير الاستهلاك.',
  },
  {
    title: 'مرافق المباني السكنية',
    href: '/ar/guides/building-facilities-amenities-dubai',
    category: 'دليل',
    description: 'الخدمات المشتركة في المباني السكنية.',
  },
  {
    title: 'كيفية استئجار عقار',
    href: '/ar/guides/how-to-rent-property-in-uae',
    category: 'دليل',
    description: 'دليل المستأجر الشامل للعيش في الإمارات.',
  },
  {
    title: 'خدمات التنظيف المنزلي',
    href: '/ar/guides/home-cleaning-services-dubai',
    category: 'دليل',
    description: 'الحفاظ على نظافة المنزل والمكيفات.',
  },
  {
    title: 'داون تاون دبي',
    href: '/ar/locations/dubai/downtown-dubai',
    category: 'موقع',
    description: 'العقارات والخدمات في قلب دبي.',
  },
]

export default function ACMaintenancePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">صيانة المكيفات</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">صيانة المكيفات في دبي</h1>
          <p className="text-xl text-warm-600 mb-8">دليلك للحفاظ على برودة منزلك طوال العام</p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أهمية الصيانة الدورية</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              في دبي حيث تصل درجات الحرارة إلى 50 درجة مئوية، يعمل نظام التكييف لساعات طويلة يومياً. الصيانة الدورية ضرورية لتقليل فواتير <a href="https://www.dewa.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ديوا</a>:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">توفير الطاقة</p>
                <p className="text-sm text-warm-600">حتى 30% من <Link href="/ar/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">فاتورة الكهرباء</Link></p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">إطالة عمر الجهاز</p>
                <p className="text-sm text-warm-600">5-10 سنوات إضافية</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">جودة الهواء</p>
                <p className="text-sm text-warm-600">تقليل الغبار والبكتيريا</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">منع الأعطال</p>
                <p className="text-sm text-warm-600">تجنب الإصلاحات المكلفة</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">جدول الصيانة الموصى به</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">شهرياً</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• تنظيف أو استبدال فلاتر الهواء</li>
                  <li>• فحص مستوى التبريد</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">كل 3 أشهر</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• تنظيف المبخر والمكثف</li>
                  <li>• فحص خطوط التصريف</li>
                  <li>• فحص مستوى الفريون</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">سنوياً</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• صيانة شاملة من فني معتمد</li>
                  <li>• تنظيف عميق لجميع المكونات</li>
                  <li>• فحص الكهرباء والتوصيلات</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مسؤولية الصيانة</h2>
            <p className="text-warm-700 mb-4">
              إذا كنت <Link href="/ar/guides/how-to-rent-property-in-uae" className="text-primary-600 hover:underline">مستأجراً</Link>، فعادة ما يكون المالك مسؤولاً عن صيانة التكييف المركزي، بينما أنت مسؤول عن تنظيف الفلاتر. راجع <Link href="/ar/guides/building-facilities-amenities-dubai" className="text-primary-600 hover:underline">دليل مرافق المباني</Link> لفهم الخدمات المشمولة.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف الصيانة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">الخدمة</th>
                    <th className="text-right py-3 px-4 font-semibold">التكلفة التقريبية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">تنظيف أساسي (وحدة واحدة)</td>
                    <td className="py-3 px-4">100-150 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">صيانة شاملة (وحدة واحدة)</td>
                    <td className="py-3 px-4">200-350 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">عقد صيانة سنوي (شقة)</td>
                    <td className="py-3 px-4">800-1,500 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">عقد صيانة سنوي (فيلا)</td>
                    <td className="py-3 px-4">2,000-4,000 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة ذهبية</h3>
            <p className="text-accent-700 text-sm">
              ضبط الثرموستات على 24 درجة بدلاً من 20 درجة يوفر حتى 30% من الكهرباء. استخدم المراوح لتوزيع الهواء البارد بشكل أفضل. تابع استهلاكك عبر <a href="https://www.dewa.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">تطبيق ديوا</a>.
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
          <p className="text-sm text-warm-500 mb-4">آخر تحديث: يناير 2026 | بواسطة فريق بروبرتي ويكي</p>
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
