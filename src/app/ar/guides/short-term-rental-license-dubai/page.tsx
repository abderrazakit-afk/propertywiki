import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'رخصة الإيجار قصير المدى في دبي 2026 | بروبرتي ويكي',
  description: 'دليل شامل للحصول على رخصة الإيجار قصير المدى في دبي. المتطلبات والإجراءات والرسوم والشروط من دائرة السياحة DTCM.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/short-term-rental-license-dubai',
    title: 'رخصة الإيجار قصير المدى في دبي 2026 | بروبرتي ويكي',
    description: 'دليل شامل للحصول على رخصة الإيجار قصير المدى في دبي. المتطلبات والإجراءات والرسوم والشروط من دائرة السياحة DTCM.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/short-term-rental-license-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/short-term-rental-license-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/short-term-rental-license-dubai',
      'x-default': 'https://propertywiki.ai/guides/short-term-rental-license-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل مناطق إير بي إن بي في دبي',
    href: '/ar/guides/best-areas-airbnb-dubai',
    category: 'دليل',
    description: 'تعرف على أفضل المناطق للتأجير قصير المدى في دبي.',
  },
  {
    title: 'عائد الإيجار قصير المدى في دبي',
    href: '/ar/guides/short-term-rental-roi-dubai',
    category: 'دليل',
    description: 'تحليل العوائد من الإيجار قصير المدى مقارنة بالسنوي.',
  },
  {
    title: 'دليل إير بي إن بي دبي مارينا',
    href: '/ar/guides/airbnb-dubai-marina-guide',
    category: 'دليل',
    description: 'دليل تفصيلي للتأجير في دبي مارينا عبر إير بي إن بي.',
  },
  {
    title: 'التملك الحر في الإمارات',
    href: '/ar/definitions/freehold-property',
    category: 'تعريف',
    description: 'تعرف على نظام التملك الحر وحقوق المالكين الأجانب.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل خطوة بخطوة لشراء العقارات في دبي.',
  },
]

export default function ShortTermRentalLicenseDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">رخصة الإيجار قصير المدى في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            رخصة الإيجار قصير المدى في دبي - دليل شامل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            يتطلب تأجير عقارك لفترات قصيرة في دبي الحصول على رخصة من دائرة السياحة والتسويق التجاري (DTCM). نشرح في هذا الدليل جميع المتطلبات والإجراءات والرسوم اللازمة.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. ما هي رخصة الإيجار قصير المدى؟</li>
              <li>2. من يحتاج الرخصة؟</li>
              <li>3. متطلبات الحصول على الرخصة</li>
              <li>4. خطوات التقديم</li>
              <li>5. الرسوم والتكاليف</li>
              <li>6. الشروط والالتزامات</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">ما هي رخصة الإيجار قصير المدى؟</h2>
            <p className="text-warm-700 mb-4">
              رخصة الإيجار قصير المدى هي تصريح رسمي من دائرة السياحة والتسويق التجاري (DTCM) في دبي يسمح لمالكي العقارات بتأجير وحداتهم لفترات قصيرة (أقل من سنة) عبر منصات مثل إير بي إن بي وبوكينج وغيرها.
            </p>
            <p className="text-warm-700 mb-4">
              بدون هذه الرخصة، يُعتبر التأجير قصير المدى مخالفاً للقانون ويعرّض المالك لغرامات مالية قد تصل إلى 200,000 درهم.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">من يحتاج الرخصة؟</h2>
            <p className="text-warm-700 mb-4">يحتاج إلى رخصة DTCM كل من:</p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>مالكي العقارات الراغبين في التأجير لفترات أقل من سنة</li>
              <li>شركات إدارة العقارات المتخصصة في الإيجار قصير المدى</li>
              <li>الوسطاء العقاريون المُدرجون لعقارات على منصات التأجير القصير</li>
            </ul>
            <p className="text-warm-700 mt-4">
              يجب أن يكون العقار في منطقة <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> ومرخصة للتأجير قصير المدى.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">متطلبات الحصول على الرخصة</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">المستندات المطلوبة</h3>
                <ul className="list-disc pr-6 text-warm-700 text-sm space-y-1">
                  <li>نسخة من سند الملكية (Title Deed)</li>
                  <li>نسخة من جواز السفر والإقامة (إن وجدت)</li>
                  <li>نسخة من الهوية الإماراتية</li>
                  <li>شهادة عدم ممانعة من إدارة المبنى (HOA/Owners Association)</li>
                  <li>صور احترافية للعقار</li>
                  <li>شهادة تأمين على العقار</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">شروط العقار</h3>
                <ul className="list-disc pr-6 text-warm-700 text-sm space-y-1">
                  <li>العقار مؤثث بالكامل وجاهز للسكن</li>
                  <li>توفر جميع المرافق الأساسية (أثاث، أدوات مطبخ، مناشف، مفروشات)</li>
                  <li>مطابق لمعايير السلامة والصحة</li>
                  <li>عنوان واضح ومسجل في النظام</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">خطوات التقديم</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. التسجيل في نظام DTCM</h3>
                <p className="text-warm-700 text-sm">أنشئ حساباً على موقع دائرة السياحة والتسويق التجاري الإلكتروني أو عبر تطبيق دبي الآن.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. تقديم الطلب والمستندات</h3>
                <p className="text-warm-700 text-sm">ارفع جميع المستندات المطلوبة وصور العقار عبر المنصة الإلكترونية.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. فحص العقار</h3>
                <p className="text-warm-700 text-sm">قد تقوم DTCM بزيارة تفتيشية للتأكد من مطابقة العقار للمعايير المطلوبة.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">4. دفع الرسوم واستلام الرخصة</h3>
                <p className="text-warm-700 text-sm">بعد الموافقة، ادفع الرسوم المقررة واحصل على رقم الرخصة الذي يجب عرضه في جميع إعلاناتك.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الرسوم والتكاليف</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">نوع الرسوم</th>
                    <th className="text-right py-3 px-4 font-semibold">المبلغ (درهم)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">رسوم تسجيل الرخصة</td><td className="py-3 px-4">1,520</td></tr>
                  <tr><td className="py-3 px-4">رسوم التجديد السنوي</td><td className="py-3 px-4">1,070</td></tr>
                  <tr><td className="py-3 px-4">ضريبة السياحة (لكل ليلة)</td><td className="py-3 px-4">10-20 درهم حسب التصنيف</td></tr>
                  <tr><td className="py-3 px-4">رسوم البلدية</td><td className="py-3 px-4">7% من قيمة الإيجار</td></tr>
                  <tr><td className="py-3 px-4">ضريبة القيمة المضافة</td><td className="py-3 px-4">5%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الشروط والالتزامات</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>عرض رقم رخصة DTCM في جميع الإعلانات على منصات التأجير</li>
              <li>تسجيل جميع النزلاء في نظام DTCM خلال 24 ساعة من الوصول</li>
              <li>الالتزام بمعايير السلامة وتوفير طفاية حريق ومخرج طوارئ</li>
              <li>الحفاظ على نظافة العقار ومعايير الضيافة المطلوبة</li>
              <li>دفع الضرائب والرسوم في مواعيدها</li>
              <li>تجديد الرخصة سنوياً قبل انتهائها</li>
            </ul>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">تحذير مهم</h3>
            <p className="text-accent-700 text-sm">
              التأجير بدون رخصة يعرّضك لغرامات مالية كبيرة وقد يؤدي لإغلاق قائمتك على منصات التأجير. تأكد من الحصول على الرخصة قبل نشر أي إعلان. للمزيد عن المناطق المناسبة، اطلع على دليل <Link href="/ar/guides/best-areas-airbnb-dubai" className="text-primary-600 hover:underline">أفضل مناطق إير بي إن بي في دبي</Link>.
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
