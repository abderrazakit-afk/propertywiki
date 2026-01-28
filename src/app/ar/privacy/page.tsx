import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | بروبرتي ويكي',
  description: 'سياسة الخصوصية لموقع بروبرتي ويكي وكيفية حماية بياناتك.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">سياسة الخصوصية</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">سياسة الخصوصية</h1>
          <p className="text-warm-500 text-sm mb-8">آخر تحديث: يناير 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقدمة</h2>
              <p className="text-warm-700 leading-relaxed">
                في بروبرتي ويكي، نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">المعلومات التي نجمعها</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  معلومات الاستخدام: الصفحات التي تزورها ومدة التصفح
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  معلومات الجهاز: نوع المتصفح ونظام التشغيل
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  المعلومات المقدمة طوعاً: عند استخدام أداة البحث عن منزل
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">كيف نستخدم المعلومات</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  تحسين تجربة المستخدم على الموقع
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  تقديم توصيات مخصصة عند طلبها
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  تحليل أداء الموقع وتحسينه
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-warm-700 leading-relaxed">
                نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح. يمكنك تعطيلها من إعدادات المتصفح، لكن بعض ميزات الموقع قد لا تعمل بشكل صحيح.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">حماية البيانات</h2>
              <p className="text-warm-700 leading-relaxed">
                نتخذ إجراءات أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الإفصاح.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">حقوقك</h2>
              <p className="text-warm-700 leading-relaxed mb-4">لديك الحق في:</p>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  طلب الوصول إلى بياناتك الشخصية
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  طلب تصحيح أو حذف بياناتك
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  الاعتراض على معالجة بياناتك
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">التواصل</h2>
              <p className="text-warm-700 leading-relaxed">
                لأي استفسارات تتعلق بالخصوصية، تواصل معنا على:{' '}
                <a href="mailto:privacy@propertywiki.ai" className="text-primary-600 hover:text-primary-700">
                  privacy@propertywiki.ai
                </a>
              </p>
            </section>
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
