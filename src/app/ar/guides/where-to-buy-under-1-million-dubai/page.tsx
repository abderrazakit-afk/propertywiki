import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أين تشتري عقار بأقل من مليون درهم في دبي | بروبرتي ويكي',
  description: 'أفضل المناطق لشراء شقة أو عقار بأقل من مليون درهم في دبي. مقارنة شاملة للأسعار والمواقع والعوائد الإيجارية.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/where-to-buy-under-1-million-dubai',
    title: 'أين تشتري عقار بأقل من مليون درهم في دبي | بروبرتي ويكي',
    description: 'أفضل المناطق لشراء شقة أو عقار بأقل من مليون درهم في دبي. مقارنة شاملة للأسعار والمواقع والعوائد.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/where-to-buy-under-1-million-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/where-to-buy-under-1-million-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/where-to-buy-under-1-million-dubai',
      'x-default': 'https://propertywiki.ai/guides/where-to-buy-under-1-million-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل مناطق شراء عقار بأقل من 500 ألف درهم',
    href: '/ar/guides/best-areas-buy-property-under-500k',
    category: 'دليل',
    description: 'خيارات لمن يبحث عن عقارات بميزانيات أقل من نصف مليون درهم.',
  },
  {
    title: 'أرخص مناطق التملك الحر في دبي',
    href: '/ar/guides/cheapest-freehold-areas-dubai',
    category: 'دليل',
    description: 'أقل المناطق سعراً في نظام التملك الحر بدبي.',
  },
  {
    title: 'مناطق سكنية بأسعار معقولة قرب المترو',
    href: '/ar/guides/affordable-areas-near-metro-dubai',
    category: 'دليل',
    description: 'عقارات بأسعار مناسبة مع سهولة الوصول لشبكة المترو.',
  },
  {
    title: 'كيفية شراء عقار في دبي',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'دليل',
    description: 'دليل خطوة بخطوة لشراء العقارات في دبي كمقيم أو أجنبي.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'استكشف منطقة دبي مارينا والعقارات المتاحة فيها.',
  },
]

export default function WhereToByUnder1MillionDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">أين تشتري عقار بأقل من مليون درهم في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            أين تشتري عقار بأقل من مليون درهم في دبي
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            ميزانية المليون درهم تفتح أمامك خيارات واسعة في سوق دبي العقاري. يمكنك الحصول على شقة بغرفة أو غرفتين في مناطق رئيسية، أو وحدات أكبر في المناطق النامية. نستعرض هنا أفضل الخيارات المتاحة لهذه الميزانية.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. قرية جميرا الدائرية (JVC)</li>
              <li>2. الخليج التجاري (Business Bay)</li>
              <li>3. أبراج بحيرات جميرا (JLT)</li>
              <li>4. واحة دبي للسيليكون (DSO)</li>
              <li>5. مقارنة شاملة للمناطق</li>
              <li>6. عوامل يجب مراعاتها</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">قرية جميرا الدائرية (JVC)</h2>
            <p className="text-warm-700 mb-4">
              تُعد قرية جميرا الدائرية الوجهة المفضلة للباحثين عن قيمة ممتازة مقابل السعر. بميزانية مليون درهم، يمكنك الحصول على شقة بغرفتين وصالة في مبنى حديث مع مرافق متكاملة. المنطقة تتميز بطابعها العائلي وقربها من الطرق الرئيسية.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>شقق غرفتين وصالة: 650,000 - 950,000 درهم</li>
              <li>شقق غرفة وصالة فسيحة: 500,000 - 750,000 درهم</li>
              <li>العائد الإيجاري: 7% - 8.5% سنوياً</li>
              <li>منطقة <Link href="/ar/definitions/freehold-property" className="text-primary-600 hover:underline">تملك حر</Link> كاملة</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">الخليج التجاري (Business Bay)</h2>
            <p className="text-warm-700 mb-4">
              يُعد <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link> من أكثر المناطق المرغوبة في دبي بفضل موقعه المتميز بجوار برج خليفة ودبي مول. بميزانية أقل من مليون درهم، يمكنك امتلاك استوديو فاخر أو شقة بغرفة وصالة في هذا الموقع الاستراتيجي.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>استوديوهات: 550,000 - 750,000 درهم</li>
              <li>شقق غرفة وصالة: 750,000 - 950,000 درهم</li>
              <li>العائد الإيجاري: 6.5% - 7.5% سنوياً</li>
              <li>طلب إيجاري مرتفع من المهنيين ورجال الأعمال</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أبراج بحيرات جميرا (JLT)</h2>
            <p className="text-warm-700 mb-4">
              تقع أبراج بحيرات جميرا بجوار <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link> مباشرة، وتوفر أسعاراً أقل بنسبة 20-30% مقارنة بالمارينا. تضم المنطقة مطاعم ومحلات تجارية ومحطة مترو قريبة.
            </p>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li>شقق غرفة وصالة: 600,000 - 850,000 درهم</li>
              <li>شقق غرفتين وصالة: 800,000 - 1,000,000 درهم</li>
              <li>العائد الإيجاري: 6.5% - 8% سنوياً</li>
              <li>مناسبة للسكن والاستثمار على حد سواء</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة شاملة للمناطق</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">المنطقة</th>
                    <th className="text-right py-3 px-4 font-semibold">نوع الوحدة المتاحة</th>
                    <th className="text-right py-3 px-4 font-semibold">نطاق الأسعار</th>
                    <th className="text-right py-3 px-4 font-semibold">العائد الإيجاري</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="py-3 px-4">قرية جميرا الدائرية</td>
                    <td className="py-3 px-4">غرفة / غرفتين</td>
                    <td className="py-3 px-4">500,000 - 950,000</td>
                    <td className="py-3 px-4">7 - 8.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">الخليج التجاري</td>
                    <td className="py-3 px-4">استوديو / غرفة</td>
                    <td className="py-3 px-4">550,000 - 950,000</td>
                    <td className="py-3 px-4">6.5 - 7.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">أبراج بحيرات جميرا</td>
                    <td className="py-3 px-4">غرفة / غرفتين</td>
                    <td className="py-3 px-4">600,000 - 1,000,000</td>
                    <td className="py-3 px-4">6.5 - 8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">واحة دبي للسيليكون</td>
                    <td className="py-3 px-4">غرفتين / ثلاث غرف</td>
                    <td className="py-3 px-4">450,000 - 850,000</td>
                    <td className="py-3 px-4">7 - 9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">عوامل يجب مراعاتها قبل الشراء</h3>
            <p className="text-accent-700 text-sm mb-3">
              لا تنظر فقط لسعر العقار؛ احسب التكاليف الإجمالية شاملة رسوم التسجيل والوسيط. راجع <Link href="/ar/guides/how-to-buy-property-in-dubai" className="text-primary-600 hover:underline">دليل شراء العقارات</Link> للتفاصيل الكاملة.
            </p>
            <p className="text-accent-700 text-sm">
              إذا كنت <Link href="/ar/guides/best-areas-first-time-buyers-dubai" className="text-primary-600 hover:underline">مشترياً لأول مرة</Link>، ابدأ بمنطقة ذات طلب إيجاري مرتفع لتأمين دخل ثابت. وللميزانيات الأقل، اطلع على <Link href="/ar/guides/best-areas-buy-property-under-500k" className="text-primary-600 hover:underline">أفضل المناطق بأقل من 500 ألف درهم</Link>.
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

        <nav className="mt-10 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/locations/dubai/business-bay" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">الخليج التجاري</p>
            </Link>
            <Link href="/ar/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">دبي مارينا</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/best-areas-buy-property-under-500k" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">شراء عقار بأقل من 500 ألف درهم</p>
            </Link>
            <Link href="/ar/guides/best-areas-under-1m-good-roi" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل المناطق بأقل من مليون بعائد جيد</p>
            </Link>
            <Link href="/ar/guides/affordable-areas-near-metro-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">مناطق بأسعار معقولة قرب المترو</p>
            </Link>
          </div>
        </nav>

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
