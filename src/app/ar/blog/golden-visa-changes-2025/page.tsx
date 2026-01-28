import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تغييرات الإقامة الذهبية 2025 | بروبرتي ويكي',
  description: 'آخر تحديثات الإقامة الذهبية في الإمارات لعام 2025. الشروط الجديدة والمتطلبات.',
}

export default function GoldenVisaChangesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/blog" className="text-primary-600 hover:text-primary-700 text-sm">المدونة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">الإقامة الذهبية 2025</span>
        </nav>

        <article>
          <div className="mb-8">
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">تأشيرات وإقامة</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-4 mb-4">
              تغييرات الإقامة الذهبية 2025
            </h1>
            <p className="text-warm-500 text-sm">يناير 2025 • 6 دقائق قراءة</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-warm-600 mb-8">
              دليل شامل لآخر تحديثات نظام الإقامة الذهبية في الإمارات، بما في ذلك الفئات الجديدة والمتطلبات المحدثة.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ما هي الإقامة الذهبية؟</h2>
              <p className="text-warm-700 leading-relaxed mb-4">
                الإقامة الذهبية هي تأشيرة إقامة طويلة الأمد (5 أو 10 سنوات) تمنح للمستثمرين ورواد الأعمال والمواهب الاستثنائية. لا تتطلب كفيلاً وتسمح بإقامة العائلة.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">فئات الإقامة الذهبية للمستثمرين العقاريين</h2>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">إقامة 10 سنوات</h3>
                  <p className="text-warm-700 text-sm mb-2">للمستثمرين بعقارات بقيمة 2 مليون درهم أو أكثر.</p>
                  <ul className="text-warm-600 text-sm space-y-1">
                    <li>• يمكن أن تكون عقارات متعددة</li>
                    <li>• يجب أن تكون ملكية حرة (Freehold)</li>
                    <li>• قابلة للتجديد</li>
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">إقامة 5 سنوات</h3>
                  <p className="text-warm-700 text-sm mb-2">للمستثمرين بعقارات بقيمة 750,000 درهم - 2 مليون درهم.</p>
                  <ul className="text-warm-600 text-sm space-y-1">
                    <li>• عقار واحد أو أكثر</li>
                    <li>• يشمل العقارات على المخطط (Off-plan)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المستندات المطلوبة</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  جواز سفر ساري (6 أشهر على الأقل)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  سند ملكية العقار (Title Deed)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  تأمين صحي ساري في الإمارات
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  صورة شخصية بخلفية بيضاء
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مزايا الإقامة الذهبية</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent-50 rounded-xl p-4">
                  <p className="font-medium text-gray-900 mb-1">إقامة طويلة الأمد</p>
                  <p className="text-sm text-warm-600">5 أو 10 سنوات قابلة للتجديد</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <p className="font-medium text-gray-900 mb-1">بدون كفيل</p>
                  <p className="text-sm text-warm-600">استقلالية تامة في الإقامة</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <p className="font-medium text-gray-900 mb-1">كفالة العائلة</p>
                  <p className="text-sm text-warm-600">الزوج/الزوجة والأبناء</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <p className="font-medium text-gray-900 mb-1">بدون حد للإقامة خارج الدولة</p>
                  <p className="text-sm text-warm-600">السفر بحرية دون فقدان الإقامة</p>
                </div>
              </div>
            </section>

            <div className="bg-primary-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">كيف تتقدم؟</h3>
              <p className="text-warm-700 text-sm">
                يمكنك التقديم عبر تطبيق ICP أو GDRFA أو زيارة مراكز آمر. الرسوم تتراوح بين 2,000-4,000 درهم حسب نوع الإقامة.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <p className="text-sm text-warm-500 mb-4">بواسطة فريق بروبرتي ويكي</p>
          <Link href="/ar/blog" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة للمدونة
          </Link>
        </div>
      </div>
    </div>
  )
}
