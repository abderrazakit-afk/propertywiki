import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مجتمعات الفلل بأقل من 2 مليون درهم في دبي 2026 | بروبرتي ويكي',
  description: 'أفضل مجتمعات الفلل بأسعار أقل من 2 مليون درهم في دبي. فلل عائلية بأسعار معقولة في مجتمعات راقية.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/villa-communities-under-2m-dubai',
    title: 'مجتمعات الفلل بأقل من 2 مليون درهم في دبي 2026 | بروبرتي ويكي',
    description: 'أفضل مجتمعات الفلل بأسعار أقل من 2 مليون درهم في دبي. فلل عائلية بأسعار معقولة في مجتمعات راقية.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/villa-communities-under-2m-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/villa-communities-under-2m-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/villa-communities-under-2m-dubai',
      'x-default': 'https://propertywiki.ai/guides/villa-communities-under-2m-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل مناطق السكن للعائلات في دبي',
    href: '/ar/guides/best-areas-families-dubai',
    category: 'دليل',
    description: 'أفضل المناطق السكنية المناسبة للعائلات في دبي.',
  },
  {
    title: 'المجتمعات المسورة في دبي',
    href: '/ar/guides/gated-communities-dubai',
    category: 'دليل',
    description: 'دليل شامل للمجتمعات المسورة والآمنة في دبي.',
  },
  {
    title: 'المرابع العربية',
    href: '/ar/locations/dubai/arabian-ranches',
    category: 'موقع',
    description: 'مجتمع فلل فاخر مع مرافق عائلية متكاملة.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل خطوة بخطوة لشراء العقارات في دبي.',
  },
  {
    title: 'أفضل المناطق لشراء عقار بأقل من 500 ألف',
    href: '/ar/guides/best-areas-buy-property-under-500k',
    category: 'دليل',
    description: 'خيارات عقارية بأسعار مناسبة في مناطق متميزة.',
  },
]

export default function VillaCommunitiesUnder2mDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مجتمعات الفلل بأقل من 2 مليون درهم</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            مجتمعات الفلل بأقل من 2 مليون درهم في دبي - دليل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            لا يتطلب امتلاك فيلا في دبي ميزانية ضخمة دائماً. توجد مجتمعات فلل متميزة تقدم وحدات بأسعار تبدأ من مليون درهم وتصل إلى مليوني درهم، مع مرافق عائلية ممتازة وموقع جيد.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. تاون سكوير</li>
              <li>2. فلل فيلانوفا</li>
              <li>3. إعمار ساوث</li>
              <li>4. ريم</li>
              <li>5. مقارنة الأسعار والمواصفات</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">1. تاون سكوير</h2>
            <p className="text-warm-700 mb-4">
              يُقدم مشروع تاون سكوير من نشاما تاون هاوس بأسعار تبدأ من حوالي 1.1 مليون درهم لوحدات 3 غرف نوم. يتميز بحديقة مركزية ضخمة ومرافق ترفيهية للعائلات.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>تاون هاوس من 3 و4 غرف نوم</li>
              <li>حديقة مركزية بمساحة 37,000 متر مربع</li>
              <li>رسوم خدمات منخفضة نسبياً</li>
              <li>مسابح ومناطق لعب أطفال مجتمعية</li>
              <li>قرب من شارع الخيل والمرابطة الدائري</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">2. فلل فيلانوفا</h2>
            <p className="text-warm-700 mb-4">
              مجتمع فلل من إعمار بتصميم إيطالي أنيق في منطقة دبي لاند. تتوفر تاون هاوس من 3 و4 غرف نوم بأسعار تبدأ من حوالي 1.3 مليون درهم.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>تصاميم معمارية مستوحاة من الطراز الإيطالي</li>
              <li>حدائق مركزية ومسارات للمشي</li>
              <li>نادي رياضي ومسابح مجتمعية</li>
              <li>قرب من <Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link></li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">3. إعمار ساوث</h2>
            <p className="text-warm-700 mb-4">
              يوفر إعمار ساوث فللاً وتاون هاوس بأسعار تنافسية تبدأ من حوالي 1.2 مليون درهم. يتميز بقربه من إكسبو سيتي وملعب غولف إعمار ومطار آل مكتوم الدولي.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>تاون هاوس وفلل بتصاميم عصرية</li>
              <li>إطلالات على ملعب الغولف</li>
              <li>مرافق مجتمعية متكاملة</li>
              <li>نمو متوقع في القيمة مع تطور المنطقة</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">4. ريم</h2>
            <p className="text-warm-700 mb-4">
              مجتمع تاون هاوس متكامل ضمن مشروع ميرا أوازيس يقع في منطقة ريم بالقرب من المرابع العربية. يقدم وحدات بأسعار تبدأ من حوالي 1.4 مليون درهم.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>تاون هاوس من 3 و4 غرف نوم مع حدائق</li>
              <li>حدائق مجتمعية ومناطق لعب أطفال</li>
              <li>قرب من مدارس ومراكز تسوق</li>
              <li>بيئة هادئة ومناسبة للعائلات</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة الأسعار والمواصفات</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المجتمع</th>
                    <th className="text-right py-3 px-4 font-semibold">السعر التقريبي</th>
                    <th className="text-right py-3 px-4 font-semibold">غرف النوم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">تاون سكوير</td>
                    <td className="py-3 px-4">1.1 - 1.6 مليون درهم</td>
                    <td className="py-3 px-4">3-4 غرف</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">فيلانوفا</td>
                    <td className="py-3 px-4">1.3 - 1.9 مليون درهم</td>
                    <td className="py-3 px-4">3-4 غرف</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">إعمار ساوث</td>
                    <td className="py-3 px-4">1.2 - 1.8 مليون درهم</td>
                    <td className="py-3 px-4">3-4 غرف</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">ريم</td>
                    <td className="py-3 px-4">1.4 - 2.0 مليون درهم</td>
                    <td className="py-3 px-4">3-4 غرف</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة للمشترين</h3>
            <p className="text-accent-700 text-sm">
              تحقق من رسوم الخدمات السنوية قبل الشراء فقد تختلف بشكل كبير بين المجتمعات. اطلع على <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">دليل شراء العقارات في دبي</Link> لفهم جميع التكاليف المتوقعة. وتأكد من زيارة <Link href="/ar/guides/best-areas-families-dubai" className="text-primary-600 hover:underline">أفضل مناطق السكن للعائلات</Link> لاختيار المنطقة الأنسب.
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
            <Link href="/ar/locations/dubai/arabian-ranches" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">المرابع العربية</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/gated-communities-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">المجتمعات المسورة في دبي</p>
            </Link>
            <Link href="/ar/guides/best-areas-families-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل مناطق السكن للعائلات</p>
            </Link>
            <Link href="/ar/guides/best-areas-buy-property-under-500k" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل المناطق لشراء عقار بأقل من 500 ألف</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
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
