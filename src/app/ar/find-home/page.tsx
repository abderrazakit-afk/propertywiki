import type { Metadata } from 'next'
import Link from 'next/link'
import FindHomeFormAr from '@/components/find-home/FindHomeFormAr'

export const metadata: Metadata = {
  title: 'ابحث عن منزل أحلامك في دبي | تقرير عقاري بالذكاء الاصطناعي | بروبرتي ويكي',
  description: 'احصل على تقرير عقاري مجاني مدعوم بالذكاء الاصطناعي يحلل أكثر من 500,000 معاملة حقيقية في دبي. اكتشف أفضل المناطق والأسعار وعوائد الإيجار.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/find-home',
    languages: { 'ar': 'https://propertywiki.ai/ar/find-home', 'en': 'https://propertywiki.ai/find-home', 'x-default': 'https://propertywiki.ai/find-home' },
  },
  openGraph: {
    title: 'ابحث عن منزل أحلامك في دبي | تقرير عقاري بالذكاء الاصطناعي',
    description: 'تقرير عقاري مجاني بالذكاء الاصطناعي يحلل أكثر من 500,000 معاملة حقيقية في دبي.',
    url: 'https://propertywiki.ai/ar/find-home',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'كيف يعمل تقرير العقارات بالذكاء الاصطناعي؟',
    answer: 'نحلل أكثر من 500,000 معاملة عقارية حقيقية من دائرة الأراضي والأملاك في دبي لتقديم توصيات مبنية على البيانات بناءً على ميزانيتك وتفضيلاتك.',
  },
  {
    question: 'هل التقرير العقاري مجاني حقًا؟',
    answer: 'نعم، تحصل على 3 تقارير مجانية يوميًا. كل تقرير مخصص لمتطلباتك المحددة.',
  },
  {
    question: 'ما مصادر البيانات التي تستخدمونها؟',
    answer: 'تتضمن قاعدة بياناتنا سجلات المعاملات الرسمية من دائرة الأراضي والأملاك في دبي، تغطي بيانات البيع والإيجار عبر جميع المجتمعات الرئيسية.',
  },
  {
    question: 'ما مدى دقة تقديرات الأسعار؟',
    answer: 'أسعارنا مبنية على معاملات مكتملة فعلية، وليس أسعار الإعلانات. هذا يمنحك نظرة واقعية لأسعار البيع والإيجار الفعلية.',
  },
  {
    question: 'هل يمكنني استخدام هذا لاتخاذ قرارات استثمارية؟',
    answer: 'توفر تقاريرنا نقاط بيانات قيمة بما في ذلك عوائد الإيجار واتجاهات الأسعار ومقارنات المناطق. ننصح أيضًا بالتشاور مع مستشاري عقارات مرخصين.',
  },
  {
    question: 'ما المناطق المغطاة في دبي؟',
    answer: 'نغطي جميع مجتمعات دبي الرئيسية بما في ذلك دبي مارينا، وسط دبي، قرية جميرا الدائرية، الخليج التجاري، نخلة جميرا، وأكثر من 50 منطقة أخرى.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FindHomePageAr() {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8 text-center">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">ابحث عن منزل</span>
        </nav>

        <FindHomeFormAr />

        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">كيف يعمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">حدد ميزانيتك وتفضيلاتك</h3>
              <p className="text-gray-600 text-sm">أخبرنا بنطاق ميزانيتك وصف العقار المثالي لك.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">تحقق من بريدك الإلكتروني</h3>
              <p className="text-gray-600 text-sm">تحقق سريع من البريد الإلكتروني للحصول على تقريرك المخصص.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">احصل على تقريرك بالذكاء الاصطناعي</h3>
              <p className="text-gray-600 text-sm">يحلل الذكاء الاصطناعي أكثر من 500,000 معاملة حقيقية للعثور على أفضل تطابق لك.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">ما ستحصل عليه في تقريرك</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">تحليل السوق</h3>
              <p className="text-gray-600 text-sm">بيانات المعاملات ومتوسط الأسعار واتجاهات السوق</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">توصيات أفضل المناطق</h3>
              <p className="text-gray-600 text-sm">3-5 مناطق متطابقة مع مقاييس تفصيلية</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">رؤى الأسعار</h3>
              <p className="text-gray-600 text-sm">نطاقات الشراء/الإيجار، السعر لكل متر مربع، رسوم الخدمة</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">بيانات عائد الإيجار</h3>
              <p className="text-gray-600 text-sm">العوائد السنوية وتحليل الطلب على الإيجار</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">تفصيل التكاليف</h3>
              <p className="text-gray-600 text-sm">رسوم دائرة الأراضي، عمولة الوكيل، إجمالي تكاليف الشراء</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2">التوقعات الاستثمارية</h3>
              <p className="text-gray-600 text-sm">ارتفاع رأس المال وتوقعات النمو</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">الأسئلة الشائعة</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-right font-serif font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </div>
  )
}
