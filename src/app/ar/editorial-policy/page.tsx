import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'السياسة التحريرية | بروبرتي ويكي',
  description: 'السياسة التحريرية لبروبرتي ويكي ومعايير جودة المحتوى.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/editorial-policy',
  },
}

export default function EditorialPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">السياسة التحريرية</span>
        </nav>

        <article>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">السياسة التحريرية</h1>
          <p className="text-xl text-warm-600 mb-8">التزامنا بالجودة والدقة والحياد</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مبادئنا التحريرية</h2>
              <div className="space-y-4">
                <div className="bg-warm-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">الدقة والتحقق</h3>
                  <p className="text-warm-700 text-sm">نتحقق من جميع المعلومات من مصادر رسمية قبل النشر. نذكر المصادر عند الإمكان ونحدث المحتوى بانتظام.</p>
                </div>
                <div className="bg-warm-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">الحياد والاستقلالية</h3>
                  <p className="text-warm-700 text-sm">لا نقبل أي تمويل أو إعلانات من مطورين عقاريين. محتوانا مستقل تماماً عن أي مصالح تجارية.</p>
                </div>
                <div className="bg-warm-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">الشفافية</h3>
                  <p className="text-warm-700 text-sm">نوضح المخاطر والتكاليف الحقيقية دون تجميل. نعترف بأخطائنا ونصححها فوراً.</p>
                </div>
                <div className="bg-warm-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">الوضوح</h3>
                  <p className="text-warm-700 text-sm">نكتب بلغة واضحة ومفهومة للجميع، مع شرح المصطلحات التقنية والقانونية.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مصادر المعلومات</h2>
              <p className="text-warm-700 leading-relaxed mb-4">نعتمد على:</p>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  دائرة الأراضي والأملاك في دبي (DLD)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  مؤسسة التنظيم العقاري (RERA)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  هيئة كهرباء ومياه دبي (DEWA)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  الإدارة العامة للإقامة وشؤون الأجانب (GDRFA)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  تقارير وبيانات السوق من مؤسسات بحثية معتمدة
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">تصحيح الأخطاء</h2>
              <p className="text-warm-700 leading-relaxed">
                إذا وجدت معلومة غير دقيقة، نرجو إبلاغنا فوراً على{' '}
                <a href="mailto:corrections@propertywiki.ai" className="text-primary-600 hover:text-primary-700">
                  corrections@propertywiki.ai
                </a>
                . نلتزم بالتحقق والتصحيح خلال 48 ساعة.
              </p>
            </section>

            <div className="bg-primary-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">فريق التحرير</h3>
              <p className="text-warm-700 text-sm">
                يتكون فريقنا من خبراء في السوق العقاري الإماراتي، كتّاب متخصصين، ومراجعين للجودة. جميع المحتوى يمر بعملية مراجعة قبل النشر.
              </p>
            </div>
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
