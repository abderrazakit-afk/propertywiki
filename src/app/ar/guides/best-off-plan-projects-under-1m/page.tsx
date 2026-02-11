import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أفضل مشاريع على الخارطة بأقل من مليون درهم | بروبرتي ويكي',
  description: 'دليل شامل لأفضل المشاريع العقارية على الخارطة في دبي بأسعار أقل من مليون درهم. مقارنة المطورين والمواقع وخطط الدفع.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/best-off-plan-projects-under-1m',
    title: 'أفضل مشاريع على الخارطة بأقل من مليون درهم | بروبرتي ويكي',
    description: 'دليل شامل لأفضل المشاريع العقارية على الخارطة في دبي بأسعار أقل من مليون درهم. مقارنة المطورين والمواقع وخطط الدفع.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/best-off-plan-projects-under-1m',
    languages: {
      'en': 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m',
      'ar': 'https://propertywiki.ai/ar/guides/best-off-plan-projects-under-1m',
      'x-default': 'https://propertywiki.ai/guides/best-off-plan-projects-under-1m',
    },
  },
}

const relatedArticles = [
  {
    title: 'العقارات على الخارطة',
    href: '/ar/definitions/off-plan-property',
    category: 'تعريف',
    description: 'كل ما تحتاج معرفته عن شراء العقارات قيد الإنشاء في دبي.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل خطوة بخطوة لشراء العقارات في دبي كمقيم أو أجنبي.',
  },
  {
    title: 'أفضل المناطق بأقل من مليون درهم',
    href: '/ar/guides/where-to-buy-under-1-million-dubai',
    category: 'دليل',
    description: 'أفضل المناطق لشراء عقار في دبي بميزانية أقل من مليون درهم.',
  },
  {
    title: 'مقارنة العائد: على الخارطة مقابل الجاهز',
    href: '/ar/guides/off-plan-vs-ready-property-roi',
    category: 'دليل',
    description: 'تحليل مفصل لعوائد الاستثمار بين العقارات على الخارطة والجاهزة.',
  },
  {
    title: 'مجتمعات خطط الدفع في دبي',
    href: '/ar/guides/payment-plan-communities-dubai',
    category: 'دليل',
    description: 'أفضل المجتمعات التي توفر خطط دفع مرنة للمشترين.',
  },
]

export default function BestOffPlanUnder1MPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">أفضل مشاريع على الخارطة بأقل من مليون درهم</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            أفضل مشاريع على الخارطة بأقل من مليون درهم في دبي 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يُعد الاستثمار في <Link href="/ar/definitions/off-plan-property" className="text-primary-600 hover:underline">العقارات على الخارطة</Link> بأسعار أقل من مليون درهم من أذكى الخيارات للمستثمرين المبتدئين في دبي. نستعرض في هذا الدليل أبرز المشاريع التي تجمع بين السعر المناسب والموقع المتميز وسمعة المطور العقاري.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. لماذا الاستثمار في مشاريع على الخارطة بأقل من مليون؟</li>
              <li>2. أبرز المناطق والمشاريع</li>
              <li>3. مقارنة المشاريع حسب السعر والموقع</li>
              <li>4. معايير اختيار المشروع المناسب</li>
              <li>5. نصائح قبل الشراء</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">لماذا الاستثمار في مشاريع على الخارطة بأقل من مليون درهم؟</h2>
            <p className="text-warm-700 mb-4">
              توفر المشاريع على الخارطة بأقل من مليون درهم فرصة دخول سوق دبي العقاري بتكلفة أولية منخفضة. يحصل المشتري عادةً على خطة دفع مرنة تمتد من 3 إلى 7 سنوات، مع دفعة أولى تبدأ من 10% فقط. كما أن أسعار الشراء على الخارطة تكون أقل بنسبة 15-25% مقارنة بالعقارات الجاهزة في نفس المنطقة.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>دفعة أولى منخفضة تبدأ من 10% من قيمة العقار</li>
              <li>خطط دفع مرنة تمتد حتى ما بعد التسليم</li>
              <li>أسعار أقل من السوق الحالي بنسبة 15-25%</li>
              <li>إمكانية تحقيق أرباح رأسمالية عند التسليم</li>
              <li>عقارات جديدة بتشطيبات حديثة ومرافق متكاملة</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أبرز المناطق والمشاريع</h2>
            <p className="text-warm-700 mb-4">
              تتركز أفضل المشاريع على الخارطة بأقل من مليون درهم في مناطق النمو مثل قرية جميرا الدائرية (JVC) ودبي لاند ودبي الجنوب وتاون سكوير. هذه المناطق تتميز بموقعها الاستراتيجي وقربها من الطرق الرئيسية والمرافق الخدمية.
            </p>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">قرية جميرا الدائرية (JVC)</h3>
                <p className="text-warm-700 text-sm">تعد من أكثر المناطق طلباً للمشاريع على الخارطة. تتوفر شقق استوديو بأسعار تبدأ من 450,000 درهم وشقق غرفة وصالة من 650,000 درهم. مطورون بارزون مثل داماك وبن غاطي وأزيزي.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">دبي لاند</h3>
                <p className="text-warm-700 text-sm">منطقة متنامية توفر شققاً بأسعار تبدأ من 400,000 درهم. قريبة من المعالم الترفيهية وتتميز بمساحات واسعة ومجتمعات متكاملة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">دبي الجنوب</h3>
                <p className="text-warm-700 text-sm">بالقرب من مطار آل مكتوم الدولي وموقع إكسبو. شقق تبدأ من 380,000 درهم مع خطط دفع ممتدة حتى 5 سنوات بعد التسليم.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">تاون سكوير</h3>
                <p className="text-warm-700 text-sm">مجتمع من تطوير نشاما. شقق بأسعار تبدأ من 500,000 درهم في بيئة عائلية متكاملة مع حدائق ومرافق رياضية.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة المشاريع حسب السعر والموقع</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">نوع الوحدة</th>
                    <th className="text-right py-3 px-4 font-semibold">السعر التقريبي</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد المتوقع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">JVC</td>
                    <td className="py-3 px-4">استوديو</td>
                    <td className="py-3 px-4">450,000 - 550,000 درهم</td>
                    <td className="py-3 px-4">7-9%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">JVC</td>
                    <td className="py-3 px-4">غرفة وصالة</td>
                    <td className="py-3 px-4">650,000 - 850,000 درهم</td>
                    <td className="py-3 px-4">6-8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">دبي لاند</td>
                    <td className="py-3 px-4">استوديو</td>
                    <td className="py-3 px-4">400,000 - 500,000 درهم</td>
                    <td className="py-3 px-4">7-8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">دبي الجنوب</td>
                    <td className="py-3 px-4">استوديو</td>
                    <td className="py-3 px-4">380,000 - 480,000 درهم</td>
                    <td className="py-3 px-4">6-8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">تاون سكوير</td>
                    <td className="py-3 px-4">غرفة وصالة</td>
                    <td className="py-3 px-4">500,000 - 700,000 درهم</td>
                    <td className="py-3 px-4">6-7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">معايير اختيار المشروع المناسب</h2>
            <p className="text-warm-700 mb-4">
              عند اختيار مشروع على الخارطة بأقل من مليون درهم، يجب مراعاة عدة عوامل أساسية لضمان استثمار ناجح:
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li><strong>سمعة المطور العقاري:</strong> اختر مطورين لديهم سجل حافل في تسليم المشاريع في الوقت المحدد مثل إعمار وداماك ونخيل</li>
              <li><strong>موقع المشروع:</strong> القرب من الطرق الرئيسية ومحطات المترو والمرافق الخدمية</li>
              <li><strong>خطة الدفع:</strong> تفضيل المشاريع التي توفر خطط دفع ممتدة بعد التسليم</li>
              <li><strong>موعد التسليم:</strong> المشاريع القريبة من التسليم أقل مخاطرة</li>
              <li><strong>رسوم الخدمات المتوقعة:</strong> تأكد من معرفة رسوم الخدمات السنوية قبل الشراء</li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              قبل شراء عقار على الخارطة، تأكد من تسجيل المشروع في <a href="https://www.dubailand.gov.ae" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">دائرة الأراضي والأملاك</a> وأن المطور لديه حساب ضمان معتمد. اطلع على <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">دليل شراء العقارات في دبي</Link> للمزيد من التفاصيل.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-warm-50 rounded-xl p-4 hover:bg-warm-100 transition-colors"
              >
                <span className="text-xs text-primary-600 font-medium">{article.category}</span>
                <h4 className="font-semibold text-gray-900 mt-1">{article.title}</h4>
                <p className="text-sm text-warm-600 mt-1">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <p className="text-sm text-warm-500 mb-4">آخر تحديث: فبراير 2026 | بواسطة فريق بروبرتي ويكي</p>
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
