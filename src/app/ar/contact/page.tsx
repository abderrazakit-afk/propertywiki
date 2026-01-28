import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تواصل معنا | بروبرتي ويكي',
  description: 'تواصل مع فريق بروبرتي ويكي لأي استفسارات أو اقتراحات.',
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">تواصل معنا</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">تواصل معنا</h1>
          <p className="text-xl text-warm-600 mb-8">نسعد بسماع آرائكم واستفساراتكم</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-warm-50 rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">معلومات التواصل</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-medium text-gray-900">البريد الإلكتروني</p>
                    <a href="mailto:hello@propertywiki.ai" className="text-primary-600 hover:text-primary-700 text-sm">
                      hello@propertywiki.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium text-gray-900">الموقع</p>
                    <p className="text-warm-600 text-sm">دبي، الإمارات العربية المتحدة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">ساعات العمل</h2>
              <div className="space-y-2 text-warm-700">
                <div className="flex justify-between">
                  <span>الأحد - الخميس</span>
                  <span>9:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span>مغلق</span>
                </div>
                <div className="flex justify-between">
                  <span>السبت</span>
                  <span>10:00 ص - 2:00 م</span>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أسئلة شائعة</h2>
            <div className="space-y-4">
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">هل خدماتكم مجانية؟</h3>
                <p className="text-warm-700 text-sm">نعم، جميع المحتوى والأدلة على الموقع مجانية تماماً.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">هل تبيعون عقارات؟</h3>
                <p className="text-warm-700 text-sm">لا، نحن موقع معلوماتي فقط ولا نبيع أو نؤجر عقارات.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">كيف أحصل على استشارة؟</h3>
                <p className="text-warm-700 text-sm">يمكنك استخدام أداة &quot;ابحث عن منزل&quot; للحصول على توصيات مخصصة بناءً على احتياجاتك.</p>
              </div>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">اقتراحات وتحسينات</h3>
            <p className="text-accent-700 text-sm">
              نرحب باقتراحاتكم لتحسين المحتوى. إذا وجدتم معلومة غير دقيقة أو لديكم فكرة لمحتوى جديد، راسلونا على البريد الإلكتروني.
            </p>
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
