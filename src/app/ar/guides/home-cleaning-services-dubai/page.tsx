import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'خدمات تنظيف المنازل في دبي - دليل شامل | بروبرتي ويكي',
  description: 'دليل خدمات التنظيف المنزلي في دبي. الأنواع، الأسعار، وكيفية اختيار الخدمة المناسبة.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/home-cleaning-services-dubai',
  },
}

const relatedArticles = [
  {
    title: 'كيفية استئجار عقار',
    href: '/ar/guides/how-to-rent-property-in-uae',
    category: 'دليل',
    description: 'دليل شامل للاستئجار في الإمارات.',
  },
  {
    title: 'صيانة المكيفات',
    href: '/ar/guides/ac-maintenance-dubai',
    category: 'دليل',
    description: 'الحفاظ على جودة الهواء في منزلك.',
  },
  {
    title: 'مرافق المباني السكنية',
    href: '/ar/guides/building-facilities-amenities-dubai',
    category: 'دليل',
    description: 'خدمات التنظيف في المناطق المشتركة.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'خدمات التنظيف المتوفرة في المنطقة.',
  },
  {
    title: 'دليل ديوا',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'دليل',
    description: 'إعداد الخدمات عند الانتقال لمنزل جديد.',
  },
]

export default function HomeCleaningPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">خدمات التنظيف</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">خدمات تنظيف المنازل في دبي</h1>
          <p className="text-xl text-warm-600 mb-8">دليلك لاختيار خدمة التنظيف المناسبة</p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أنواع خدمات التنظيف</h2>
            <div className="space-y-4">
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">خادمة بدوام كامل</h3>
                <p className="text-warm-700 text-sm mb-2">عاملة منزلية تعيش في المنزل أو تأتي يومياً.</p>
                <p className="text-primary-600 font-medium">2,500-4,000 درهم/شهرياً</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">خدمة بالساعة</h3>
                <p className="text-warm-700 text-sm mb-2">حجز عاملات لساعات محددة حسب الحاجة.</p>
                <p className="text-primary-600 font-medium">35-50 درهم/ساعة</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">تنظيف عميق</h3>
                <p className="text-warm-700 text-sm mb-2">تنظيف شامل يشمل المطبخ والحمامات والستائر.</p>
                <p className="text-primary-600 font-medium">300-800 درهم/جلسة</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">تنظيف نهاية الإيجار</h3>
                <p className="text-warm-700 text-sm mb-2">تنظيف احترافي عند <Link href="/ar/guides/how-to-rent-property-in-uae" className="text-primary-600 hover:underline">مغادرة الشقة</Link> لاسترداد التأمين.</p>
                <p className="text-primary-600 font-medium">500-1,500 درهم</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">خدمات إضافية مهمة</h2>
            <p className="text-warm-700 mb-4">
              لا تنسَ هذه الخدمات عند الانتقال لمنزل جديد:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ar/guides/ac-maintenance-dubai" className="block bg-primary-50 rounded-xl p-4 hover:bg-primary-100 transition-colors">
                <h4 className="font-semibold text-gray-900">صيانة المكيفات</h4>
                <p className="text-sm text-warm-600">تنظيف الفلاتر والصيانة الدورية</p>
              </Link>
              <Link href="/ar/guides/dewa-electricity-water-guide" className="block bg-primary-50 rounded-xl p-4 hover:bg-primary-100 transition-colors">
                <h4 className="font-semibold text-gray-900">تفعيل ديوا</h4>
                <p className="text-sm text-warm-600">خدمات الكهرباء والمياه</p>
              </Link>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">شركات موثوقة</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              عند اختيار شركة تنظيف، تأكد من:
            </p>
            <ul className="space-y-2 text-warm-700">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ترخيص من دائرة التنمية الاقتصادية
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                تأمين ضد الأضرار
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                تقييمات إيجابية من العملاء
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                استخدام مواد تنظيف آمنة
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مناطق شائعة للخدمة</h2>
            <p className="text-warm-700 mb-4">
              تتوفر خدمات التنظيف في جميع مناطق دبي، بما في ذلك:
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link>
              <Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link>
              <Link href="/ar/locations/dubai/palm-jumeirah" className="text-primary-600 hover:underline">نخلة جميرا</Link>
              <Link href="/ar/locations/dubai/jbr" className="text-primary-600 hover:underline">جميرا بيتش ريزيدنس</Link>
              <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link>
              <Link href="/ar/locations/dubai/arabian-ranches" className="text-primary-600 hover:underline">المرابع العربية</Link>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة</h3>
            <p className="text-accent-700 text-sm">
              احجز خدمة التنظيف قبل الانتقال لشقة جديدة لضمان بيئة نظيفة وصحية من اليوم الأول. اطلع على <Link href="/ar/guides/building-facilities-amenities-dubai" className="text-primary-600 hover:underline">مرافق المباني</Link> لمعرفة الخدمات المشتركة المتوفرة.
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
