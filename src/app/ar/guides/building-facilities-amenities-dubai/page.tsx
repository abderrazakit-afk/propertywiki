import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مرافق المباني في دبي | بروبرتي ويكي',
  description: 'دليل مرافق المباني السكنية في دبي. الخدمات، رسوم الخدمات، وما يجب معرفته.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/building-facilities-amenities-dubai',
    title: 'مرافق المباني في دبي | بروبرتي ويكي',
    description: 'دليل مرافق المباني السكنية في دبي. الخدمات، رسوم الخدمات، وما يجب معرفته.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/building-facilities-amenities-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/building-facilities-amenities-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/building-facilities-amenities-dubai',
      'x-default': 'https://propertywiki.ai/guides/building-facilities-amenities-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل شامل للشراء وفهم رسوم الخدمات.',
  },
  {
    title: 'كيفية استئجار عقار',
    href: '/ar/guides/how-to-rent-property-in-uae',
    category: 'دليل',
    description: 'دليل المستأجر للمرافق والخدمات.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'مرافق المباني في دبي مارينا.',
  },
  {
    title: 'نخلة جميرا',
    href: '/ar/locations/dubai/palm-jumeirah',
    category: 'موقع',
    description: 'المرافق الفاخرة في نخلة جميرا.',
  },
  {
    title: 'التملك الحر',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'حقوق الملاك في رسوم الخدمات.',
  },
]

export default function BuildingFacilitiesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مرافق المباني</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">مرافق المباني السكنية في دبي</h1>
          <p className="text-xl text-warm-600 mb-8">ما تحتاج معرفته عن خدمات ومرافق المجتمعات السكنية</p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المرافق الشائعة</h2>
            <p className="text-warm-700 mb-4">
              تتميز المباني السكنية في <Link href="/ar/locations/dubai" className="text-primary-600 hover:underline">دبي</Link> بمرافق عصرية:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏊</span>
                <div>
                  <p className="font-medium text-gray-900">حمام سباحة</p>
                  <p className="text-sm text-warm-600">متوفر في معظم الأبراج الحديثة</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏋️</span>
                <div>
                  <p className="font-medium text-gray-900">صالة رياضية</p>
                  <p className="text-sm text-warm-600">مجهزة بأحدث الأجهزة</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🅿️</span>
                <div>
                  <p className="font-medium text-gray-900">مواقف سيارات</p>
                  <p className="text-sm text-warm-600">عادة 1-2 موقف لكل وحدة</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🛡️</span>
                <div>
                  <p className="font-medium text-gray-900">أمن 24 ساعة</p>
                  <p className="text-sm text-warm-600">حراسة وكاميرات مراقبة</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🧒</span>
                <div>
                  <p className="font-medium text-gray-900">منطقة ألعاب أطفال</p>
                  <p className="text-sm text-warm-600">داخلية أو خارجية</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🌳</span>
                <div>
                  <p className="font-medium text-gray-900">حدائق ومساحات خضراء</p>
                  <p className="text-sm text-warm-600">للاسترخاء والتنزه</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">رسوم الخدمات</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              رسوم الخدمات هي مبالغ سنوية تُدفع لصيانة المرافق المشتركة. تختلف حسب المنطقة ونوع المبنى. يجب على <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">ملاك العقارات</Link> دفع هذه الرسوم سنوياً.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع العقار</th>
                    <th className="text-right py-3 px-4 font-semibold">رسوم الخدمات/قدم مربع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">شقة عادية</td>
                    <td className="py-3 px-4">12-18 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">شقة فاخرة (<Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link>)</td>
                    <td className="py-3 px-4">18-35 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">فيلا في مجتمع (<Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link>)</td>
                    <td className="py-3 px-4">3-8 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">تاون هاوس</td>
                    <td className="py-3 px-4">5-12 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ماذا تشمل رسوم الخدمات؟</h2>
            <ul className="space-y-2 text-warm-700">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                صيانة المرافق المشتركة (مسبح، صالة رياضية)
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/ar/guides/home-cleaning-services-dubai" className="text-primary-600 hover:underline">تنظيف المناطق المشتركة</Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                خدمات الأمن والحراسة
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                صيانة المصاعد والبنية التحتية
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                تأمين المبنى
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/ar/guides/ac-maintenance-dubai" className="text-primary-600 hover:underline">صيانة التكييف المركزي</Link> (في بعض المباني)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناطق مميزة بمرافقها</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ar/locations/dubai/dubai-marina" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">دبي مارينا</h4>
                <p className="text-sm text-warm-600">ممشى، مراسي، مرافق عصرية</p>
              </Link>
              <Link href="/ar/locations/dubai/palm-jumeirah" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">نخلة جميرا</h4>
                <p className="text-sm text-warm-600">شاطئ خاص، مرافق فاخرة</p>
              </Link>
              <Link href="/ar/locations/dubai/downtown-dubai" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">داون تاون دبي</h4>
                <p className="text-sm text-warm-600">قرب برج خليفة، مرافق راقية</p>
              </Link>
              <Link href="/ar/locations/dubai/jbr" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">جميرا بيتش ريزيدنس</h4>
                <p className="text-sm text-warm-600">واجهة بحرية، مرافق عائلية</p>
              </Link>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة للمشترين</h3>
            <p className="text-accent-700 text-sm">
              عند <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">شراء عقار</Link>، اسأل عن رسوم الخدمات السنوية واحتسبها ضمن تكاليف الملكية. بعض المباني الفاخرة قد تصل رسومها إلى 30,000 درهم سنوياً.
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
            <Link href="/ar/locations/dubai/arabian-ranches" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">المرابع العربية</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/home-cleaning-services-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">خدمات التنظيف المنزلي</p>
            </Link>
            <Link href="/ar/guides/service-charges-by-area-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">رسوم الخدمات حسب المنطقة</p>
            </Link>
            <Link href="/ar/guides/gated-communities-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">المجتمعات المسوّرة في دبي</p>
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
