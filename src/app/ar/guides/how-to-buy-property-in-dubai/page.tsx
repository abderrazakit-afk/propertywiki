import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'كيفية شراء عقار في دبي - دليل شامل 2026',
  description: 'دليل خطوة بخطوة لشراء العقارات في دبي. تعرف على المتطلبات والإجراءات والتكاليف للمقيمين والأجانب.',
}

export default function BuyPropertyGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">كيفية شراء عقار في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            كيفية شراء عقار في دبي - دليل شامل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            دليل شامل خطوة بخطوة لشراء العقارات في دبي كمقيم أو أجنبي. يشمل المتطلبات القانونية والإجراءات والتكاليف المتوقعة.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. من يمكنه شراء عقار في دبي؟</li>
              <li>2. أنواع الملكية العقارية</li>
              <li>3. خطوات الشراء</li>
              <li>4. التكاليف والرسوم</li>
              <li>5. نصائح مهمة</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">من يمكنه شراء عقار في دبي؟</h2>
            <p className="text-warm-700 mb-4">
              يمكن لجميع الجنسيات شراء العقارات في دبي في المناطق المخصصة للتملك الحر (Freehold). تشمل هذه المناطق:
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>دبي مارينا</li>
              <li>نخلة جميرا</li>
              <li>داون تاون دبي</li>
              <li>الخليج التجاري</li>
              <li>جميرا بيتش ريزيدنس</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">خطوات الشراء</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. تحديد الميزانية والموقع</h3>
                <p className="text-warm-700 text-sm">حدد ميزانيتك الكاملة (السعر + الرسوم 7-8%) واختر المنطقة المناسبة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. البحث والمعاينة</h3>
                <p className="text-warm-700 text-sm">ابحث عن العقارات المناسبة وقم بمعاينتها شخصياً.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. توقيع مذكرة التفاهم (MOU)</h3>
                <p className="text-warm-700 text-sm">اتفق على السعر والشروط ووقع مذكرة التفاهم مع دفع عربون 10%.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">4. شهادة عدم ممانعة (NOC)</h3>
                <p className="text-warm-700 text-sm">يحصل البائع على شهادة عدم ممانعة من المطور.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">5. نقل الملكية</h3>
                <p className="text-warm-700 text-sm">إتمام عملية نقل الملكية في دائرة الأراضي والأملاك.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">التكاليف والرسوم</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع الرسوم</th>
                    <th className="text-right py-3 px-4 font-semibold">النسبة/المبلغ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">رسوم دائرة الأراضي (DLD)</td>
                    <td className="py-3 px-4">4% من سعر العقار</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم التسجيل</td>
                    <td className="py-3 px-4">~4,000 درهم</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">عمولة الوسيط</td>
                    <td className="py-3 px-4">2% من سعر العقار</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">رسوم الرهن (إن وجد)</td>
                    <td className="py-3 px-4">0.25% من مبلغ القرض</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              تأكد من فحص العقار جيداً قبل الشراء واستعن بمحامٍ عقاري لمراجعة جميع المستندات. احسب التكاليف الإجمالية بما فيها رسوم الخدمات السنوية.
            </p>
          </div>
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
