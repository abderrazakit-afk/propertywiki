import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'كيفية شراء عقار في الإمارات | بروبرتي ويكي',
  description: 'دليل شامل لشراء العقارات في جميع إمارات الدولة. القوانين والإجراءات والمتطلبات.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/how-to-buy-property-in-uae',
    title: 'كيفية شراء عقار في الإمارات | بروبرتي ويكي',
    description: 'دليل شامل لشراء العقارات في جميع إمارات الدولة. القوانين والإجراءات والمتطلبات.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/how-to-buy-property-in-uae',
    languages: {
      'en': 'https://propertywiki.ai/guides/how-to-buy-property-in-uae',
      'ar': 'https://propertywiki.ai/ar/guides/how-to-buy-property-in-uae',
      'x-default': 'https://propertywiki.ai/guides/how-to-buy-property-in-uae',
    },
  },
}

const relatedArticles = [
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل تفصيلي لشراء العقارات في دبي خطوة بخطوة.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'تعرف على نظام التملك الحر وحقوق المالكين الأجانب.',
  },
  {
    title: 'حق الانتفاع (Leasehold)',
    href: '/ar/definitions/leasehold',
    category: 'تعريف',
    description: 'فهم نظام حق الانتفاع وكيف يختلف عن التملك الحر.',
  },
  {
    title: 'داون تاون دبي',
    href: '/ar/locations/dubai/downtown-dubai',
    category: 'موقع',
    description: 'استكشف قلب دبي النابض والعقارات الفاخرة.',
  },
  {
    title: 'العقارات على الخارطة',
    href: '/ar/definitions/off-plan-property',
    category: 'تعريف',
    description: 'كل ما تحتاج معرفته عن شراء العقارات قيد الإنشاء.',
  },
]

export default function BuyPropertyUAEPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">شراء عقار في الإمارات</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">كيفية شراء عقار في الإمارات</h1>
          <p className="text-xl text-warm-600 mb-8">دليل شامل للتملك العقاري في جميع الإمارات</p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">التملك في كل إمارة</h2>
            <p className="text-warm-700 mb-4">
              تتيح الإمارات للأجانب تملك العقارات بنظام <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">التملك الحر</Link> أو <Link href="/ar/definitions/leasehold" className="text-primary-600 hover:underline">حق الانتفاع</Link> حسب الإمارة والمنطقة. تُنظم <a href="https://www.rera.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">مؤسسة التنظيم العقاري (RERA)</a> جميع المعاملات العقارية.
            </p>
            <div className="space-y-4">
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">دبي</h3>
                <p className="text-warm-700 text-sm">تملك حر 100% للأجانب في مناطق محددة. أكبر سوق عقاري في الإمارات. تسجل المعاملات في <a href="https://www.dubailand.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">دائرة الأراضي والأملاك</a>. اطلع على <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">دليل شراء عقار في دبي</Link> للتفاصيل.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">أبوظبي</h3>
                <p className="text-warm-700 text-sm">تملك حر للأجانب في 9 مناطق استثمارية منذ 2019.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">الشارقة</h3>
                <p className="text-warm-700 text-sm">حق انتفاع لمدة 100 عام للمواطنين الخليجيين، 25 عاماً لباقي الجنسيات.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">رأس الخيمة</h3>
                <p className="text-warm-700 text-sm">تملك حر للأجانب في مناطق محددة. أسعار أقل من دبي وأبوظبي.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">عجمان</h3>
                <p className="text-warm-700 text-sm">تملك حر للأجانب. أسعار منخفضة مقارنة بالإمارات الأخرى.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المتطلبات العامة</h2>
            <ul className="space-y-3 text-warm-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                جواز سفر ساري المفعول
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                إثبات مصدر الأموال (للمبالغ الكبيرة)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                لا يُشترط الإقامة في الإمارات
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">التكاليف المتوقعة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">الرسوم</th>
                    <th className="text-right py-3 px-4 font-semibold">دبي</th>
                    <th className="text-right py-3 px-4 font-semibold">أبوظبي</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">رسوم التسجيل</td>
                    <td className="py-3 px-4">4%</td>
                    <td className="py-3 px-4">2%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">عمولة الوكيل</td>
                    <td className="py-3 px-4">2%</td>
                    <td className="py-3 px-4">2%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم إدارية</td>
                    <td className="py-3 px-4">~4,000 درهم</td>
                    <td className="py-3 px-4">~3,000 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">تأشيرة المستثمر العقاري</h3>
            <p className="text-accent-700 text-sm">
              شراء عقار بقيمة 750,000 درهم أو أكثر يؤهلك للحصول على تأشيرة إقامة مستثمر لمدة 2 سنة. عقارات بقيمة 2 مليون درهم+ تؤهل للإقامة الذهبية 10 سنوات. اطلع على <Link href="/ar/blog/golden-visa-changes-2025" className="text-primary-600 hover:underline">تحديثات التأشيرة الذهبية</Link> لمزيد من المعلومات.
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
            <Link href="/ar/locations/dubai/palm-jumeirah" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">نخلة جميرا</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/guides/how-to-sell-property-in-uae" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية بيع عقار في الإمارات</p>
            </Link>
            <Link href="/ar/guides/hidden-costs-buying-property-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">التكاليف الخفية</p>
            </Link>
          </div>
        </nav>

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
