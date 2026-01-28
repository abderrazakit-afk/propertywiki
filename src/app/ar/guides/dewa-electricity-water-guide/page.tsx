import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل ديوا للكهرباء والمياه في دبي | بروبرتي ويكي',
  description: 'دليل شامل لإعداد خدمات الكهرباء والمياه مع هيئة كهرباء ومياه دبي (ديوا). التسجيل والفواتير والنصائح.',
}

export default function DewaGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">دليل ديوا</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            دليل ديوا للكهرباء والمياه
          </h1>
          <p className="text-xl text-warm-600 mb-8">
            كل ما تحتاج معرفته عن خدمات الكهرباء والمياه في دبي
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ما هي ديوا؟</h2>
            <p className="text-warm-700 leading-relaxed">
              هيئة كهرباء ومياه دبي (DEWA) هي المزود الحصري لخدمات الكهرباء والمياه في إمارة دبي. تأسست عام 1992 وتخدم أكثر من مليون عميل.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تفعيل الخدمة للمستأجرين</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">المستندات المطلوبة</h3>
                <ul className="text-warm-700 text-sm space-y-1">
                  <li>• نسخة من عقد الإيجار (إيجاري)</li>
                  <li>• نسخة من جواز السفر والتأشيرة</li>
                  <li>• نسخة من الهوية الإماراتية</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">التسجيل</h3>
                <p className="text-warm-700 text-sm">
                  يمكن التسجيل عبر تطبيق ديوا أو الموقع الإلكتروني أو زيارة مركز سعادة المتعاملين.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">وديعة التأمين</h3>
                <p className="text-warm-700 text-sm">
                  شقة: 2,000 درهم | فيلا: 4,000 درهم (قابلة للاسترداد)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">متوسط الفواتير الشهرية</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع السكن</th>
                    <th className="text-right py-3 px-4 font-semibold">صيفاً</th>
                    <th className="text-right py-3 px-4 font-semibold">شتاءً</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">استوديو</td>
                    <td className="py-3 px-4">300-500 درهم</td>
                    <td className="py-3 px-4">150-300 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">شقة غرفتين</td>
                    <td className="py-3 px-4">600-1,000 درهم</td>
                    <td className="py-3 px-4">300-500 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">فيلا 3 غرف</td>
                    <td className="py-3 px-4">1,500-3,000 درهم</td>
                    <td className="py-3 px-4">800-1,500 درهم</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة لتوفير الطاقة</h3>
            <p className="text-accent-700 text-sm">
              ضبط المكيف على 24 درجة بدلاً من 20 يمكن أن يوفر حتى 30% من فاتورة الكهرباء. استخدم برامج ديوا للمنازل الذكية لمراقبة استهلاكك.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-warm-200">
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
