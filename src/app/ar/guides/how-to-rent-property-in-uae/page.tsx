import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'كيفية استئجار عقار في الإمارات - دليل المستأجر | بروبرتي ويكي',
  description: 'دليل شامل لاستئجار العقارات في الإمارات. عقود الإيجار، إيجاري، حقوق المستأجر والمزيد.',
}

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
              إيجاري هو نظام تسجيل عقود الإيجار الإلزامي في دبي. يوفر حماية قانونية لكل من المالك والمستأجر.
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
                    <td className="py-3 px-4">تفعيل ديوا</td>
                    <td className="py-3 px-4">2,000-4,000 درهم (تأمين)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">حقوق المستأجر</h2>
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
        </article>

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
