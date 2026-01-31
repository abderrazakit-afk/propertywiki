import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مخاطر الاستثمار في العقارات على المخطط | بروبرتي ويكي',
  description: 'تعرف على مخاطر شراء العقارات على المخطط في دبي وكيفية تجنبها. دليل شامل للمستثمرين.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/blog/off-plan-investment-risks',
  },
}

export default function OffPlanRisksPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/blog" className="text-primary-600 hover:text-primary-700 text-sm">المدونة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مخاطر العقارات على المخطط</span>
        </nav>

        <article>
          <div className="mb-8">
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">تحذير مستثمر</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-4 mb-4">
              مخاطر الاستثمار في العقارات على المخطط
            </h1>
            <p className="text-warm-500 text-sm">يناير 2025 • 7 دقائق قراءة</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-warm-600 mb-8">
              شراء العقارات على المخطط (Off-Plan) يحمل فرصاً ومخاطر. تعرف على المخاطر الشائعة وكيفية حماية استثمارك.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المخاطر الرئيسية</h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">1. تأخر التسليم</h3>
                  <p className="text-red-700 text-sm">قد يتأخر المشروع عن موعد التسليم المحدد بأشهر أو سنوات. هذا يؤثر على خططك السكنية أو الاستثمارية.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">2. اختلاف المواصفات</h3>
                  <p className="text-red-700 text-sm">قد يختلف المنتج النهائي عن التصاميم والمخططات المعروضة في البداية.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">3. تقلبات السوق</h3>
                  <p className="text-red-700 text-sm">قد تنخفض أسعار العقارات بحلول وقت التسليم، مما يؤدي لخسارة رأس المال.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">4. إلغاء المشروع</h3>
                  <p className="text-red-700 text-sm">في حالات نادرة، قد يُلغى المشروع وتتأخر استعادة أموالك.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">كيف تحمي نفسك؟</h2>
              <div className="space-y-4">
                <div className="bg-accent-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">ابحث عن المطور</h3>
                  <p className="text-warm-700 text-sm">تحقق من سجل المطور في إنجاز المشاريع في الوقت المحدد. المطورون الكبار مثل إعمار ونخيل لديهم سجل أفضل.</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">تأكد من تسجيل RERA</h3>
                  <p className="text-warm-700 text-sm">تأكد أن المشروع مسجل في دائرة الأراضي (RERA) ولديه حساب ضمان عقاري.</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">اقرأ العقد بعناية</h3>
                  <p className="text-warm-700 text-sm">افهم شروط الإلغاء والتعويضات وجدول الدفع قبل التوقيع.</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">لا تدفع خارج الحساب الرسمي</h3>
                  <p className="text-warm-700 text-sm">جميع المدفوعات يجب أن تكون لحساب الضمان العقاري المعتمد.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">متى يكون الشراء على المخطط مناسباً؟</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  لديك أفق استثماري طويل (3-5 سنوات)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  تريد الاستفادة من أسعار الإطلاق المنخفضة
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  تستطيع تحمل خطة دفع مرنة
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  اخترت مطوراً موثوقاً بسجل حافل
                </li>
              </ul>
            </section>

            <div className="bg-warm-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">الخلاصة</h3>
              <p className="text-warm-700 text-sm">
                الشراء على المخطط يمكن أن يكون استثماراً ممتازاً مع البحث الصحيح والحذر المناسب. افهم المخاطر، اختر المطور بعناية، واحمِ حقوقك بالتأكد من التسجيل الرسمي.
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
