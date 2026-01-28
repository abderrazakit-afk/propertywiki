import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن | بروبرتي ويكي',
  description: 'تعرف على بروبرتي ويكي - مصدرك الموثوق للمعلومات العقارية في الإمارات.',
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">من نحن</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">من نحن</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مهمتنا</h2>
            <p className="text-warm-700 leading-relaxed mb-4">
              بروبرتي ويكي هو مصدرك الموثوق للمعلومات العقارية في الإمارات العربية المتحدة. نهدف إلى تمكين المشترين والمستأجرين والمستثمرين بالمعرفة اللازمة لاتخاذ قرارات عقارية مستنيرة.
            </p>
            <p className="text-warm-700 leading-relaxed">
              نؤمن بأن المعلومات الدقيقة والشفافة هي حق لكل من يبحث عن عقار في الإمارات، سواء كان مواطناً أو مقيماً أو مستثمراً دولياً.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ماذا نقدم</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">أدلة شاملة</h3>
                <p className="text-warm-600 text-sm">خطوة بخطوة للشراء والبيع والإيجار</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">معلومات المناطق</h3>
                <p className="text-warm-600 text-sm">تفاصيل عن كل منطقة سكنية في دبي</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">مصطلحات عقارية</h3>
                <p className="text-warm-600 text-sm">شرح مبسط للمفاهيم والمصطلحات</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">تحليلات السوق</h3>
                <p className="text-warm-600 text-sm">توقعات وتحديثات عن سوق العقارات</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">قيمنا</h2>
            <ul className="space-y-3 text-warm-700">
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">الدقة:</span>
                <span>نتحقق من جميع المعلومات ونحدثها بانتظام</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">الحياد:</span>
                <span>لا نروج لمطورين أو مشاريع محددة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">الشفافية:</span>
                <span>نوضح المخاطر والتكاليف الحقيقية</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">سهولة الوصول:</span>
                <span>محتوى مجاني للجميع بالعربية والإنجليزية</span>
              </li>
            </ul>
          </section>

          <div className="bg-primary-50 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">تواصل معنا</h3>
            <p className="text-warm-700 text-sm mb-4">
              نرحب بأسئلتكم واقتراحاتكم. فريقنا متاح للمساعدة.
            </p>
            <Link href="/ar/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              صفحة التواصل ←
            </Link>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
