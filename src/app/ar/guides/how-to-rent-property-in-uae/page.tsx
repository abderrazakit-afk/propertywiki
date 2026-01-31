import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'كيفية استئجار عقار في الإمارات - دليل المستأجر | بروبرتي ويكي',
  description: 'دليل شامل لاستئجار العقارات في الإمارات. عقود الإيجار، إيجاري، حقوق المستأجر والمزيد.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/how-to-rent-property-in-uae',
  },
}

const relatedArticles = [
  {
    title: 'دليل ديوا للكهرباء والمياه',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'دليل',
    description: 'كيفية تفعيل خدمات الكهرباء والمياه عند الانتقال.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'استكشف خيارات الإيجار في دبي مارينا.',
  },
  {
    title: 'الخليج التجاري',
    href: '/ar/locations/dubai/business-bay',
    category: 'موقع',
    description: 'شقق للإيجار في قلب دبي التجاري.',
  },
  {
    title: 'خدمات التنظيف المنزلي',
    href: '/ar/guides/home-cleaning-services-dubai',
    category: 'دليل',
    description: 'خدمات التنظيف عند الانتقال للشقة الجديدة.',
  },
  {
    title: 'صيانة المكيفات',
    href: '/ar/guides/ac-maintenance-dubai',
    category: 'دليل',
    description: 'نصائح للحفاظ على برودة منزلك المستأجر.',
  },
]

export default function RentPropertyGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">كيفية استئجار عقار</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">كيفية استئجار عقار في الإمارات</h1>
          <p className="text-xl text-warm-600 mb-8">دليل المستأجر الشامل للعيش في الإمارات</p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المستندات المطلوبة</h2>
            <div className="bg-warm-50 rounded-xl p-4">
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  نسخة من جواز السفر (ساري المفعول)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  نسخة من تأشيرة الإقامة
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  نسخة من الهوية الإماراتية
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  شيكات مؤجلة للإيجار
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">نظام إيجاري</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              إيجاري هو نظام تسجيل عقود الإيجار الإلزامي في دبي، وتديره <a href="https://www.rera.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">مؤسسة التنظيم العقاري (RERA)</a>. يوفر حماية قانونية لكل من المالك والمستأجر.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">رسوم التسجيل</p>
                <p className="text-sm text-warm-600">160-220 درهم</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <p className="font-medium text-gray-900 mb-1">مدة التسجيل</p>
                <p className="text-sm text-warm-600">خلال 14 يوم من توقيع العقد</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تكاليف الاستئجار</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">البند</th>
                    <th className="text-right py-3 px-4 font-semibold">التكلفة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">تأمين الإيجار (قابل للاسترداد)</td>
                    <td className="py-3 px-4">5% من الإيجار السنوي</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">عمولة الوكيل</td>
                    <td className="py-3 px-4">5% من الإيجار السنوي</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">تسجيل إيجاري</td>
                    <td className="py-3 px-4">160-220 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">تفعيل <Link href="/ar/guides/dewa-electricity-water-guide" className="text-primary-600 hover:underline">ديوا</Link></td>
                    <td className="py-3 px-4">2,000-4,000 درهم (تأمين)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">حقوق المستأجر</h2>
            <p className="text-warm-700 mb-4">
              تحمي <a href="https://www.rera.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RERA</a> حقوق المستأجرين في دبي:
            </p>
            <ul className="space-y-3 text-warm-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                لا يمكن للمالك رفع الإيجار بأكثر من النسبة المحددة من RERA
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                إشعار 90 يوماً قبل أي تغيير في شروط العقد
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                المالك مسؤول عن الصيانة الهيكلية
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أفضل المناطق للإيجار</h2>
            <p className="text-warm-700 mb-4">
              استكشف أشهر المناطق السكنية في دبي:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ar/locations/dubai/dubai-marina" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">دبي مارينا</h4>
                <p className="text-sm text-warm-600">حياة عصرية على الواجهة البحرية</p>
              </Link>
              <Link href="/ar/locations/dubai/downtown-dubai" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">داون تاون دبي</h4>
                <p className="text-sm text-warm-600">قلب دبي النابض بالحياة</p>
              </Link>
              <Link href="/ar/locations/dubai/jbr" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">جميرا بيتش ريزيدنس</h4>
                <p className="text-sm text-warm-600">شاطئ ومرافق عائلية</p>
              </Link>
              <Link href="/ar/locations/dubai/business-bay" className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors">
                <h4 className="font-semibold text-gray-900">الخليج التجاري</h4>
                <p className="text-sm text-warm-600">قريب من مراكز الأعمال</p>
              </Link>
            </div>
          </section>
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
