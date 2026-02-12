import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مناطق العيش بدون سيارة في دبي 2026 | بروبرتي ويكي',
  description: 'اكتشف أفضل المناطق في دبي للعيش بدون سيارة خاصة. مناطق متصلة بالمترو والترام والحافلات مع جميع الخدمات على مسافة مشي.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides/car-free-living-areas-dubai',
    title: 'مناطق العيش بدون سيارة في دبي 2026 | بروبرتي ويكي',
    description: 'اكتشف أفضل المناطق في دبي للعيش بدون سيارة خاصة. مناطق متصلة بالمترو والترام والحافلات مع جميع الخدمات على مسافة مشي.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides/car-free-living-areas-dubai',
    languages: {
      'en': 'https://propertywiki.ai/guides/car-free-living-areas-dubai',
      'ar': 'https://propertywiki.ai/ar/guides/car-free-living-areas-dubai',
      'x-default': 'https://propertywiki.ai/guides/car-free-living-areas-dubai',
    },
  },
}

const relatedArticles = [
  {
    title: 'أفضل المناطق القريبة من مترو دبي',
    href: '/ar/guides/best-areas-near-dubai-metro',
    category: 'دليل',
    description: 'دليل شامل لأفضل المناطق بالقرب من شبكة مترو دبي.',
  },
  {
    title: 'مجتمعات على مسافة مشي من المترو',
    href: '/ar/guides/walking-distance-metro-communities',
    category: 'دليل',
    description: 'مجتمعات سكنية على بُعد دقائق سيراً من محطات المترو.',
  },
  {
    title: 'عقارات قرب الخط الأحمر لمترو دبي',
    href: '/ar/guides/property-near-red-line-metro-dubai',
    category: 'دليل',
    description: 'العقارات والمناطق على امتداد الخط الأحمر لمترو دبي.',
  },
  {
    title: 'الخليج التجاري',
    href: '/ar/locations/dubai/business-bay',
    category: 'موقع',
    description: 'منطقة الخليج التجاري المتصلة بشبكة المترو والمواصلات.',
  },
  {
    title: 'دبي مارينا',
    href: '/ar/locations/dubai/dubai-marina',
    category: 'موقع',
    description: 'دبي مارينا - واحدة من أفضل مناطق العيش بدون سيارة.',
  },
]

export default function CarFreeLivingAreasDubaiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/guides" className="text-primary-600 hover:text-primary-700 text-sm">الأدلة</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">مناطق العيش بدون سيارة في دبي</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            مناطق العيش بدون سيارة في دبي - دليل 2026
          </h1>

          <p className="text-lg text-warm-600 mb-8">
            رغم أن دبي تُعرف بثقافة السيارات، إلا أن هناك مناطق عديدة يمكنك العيش فيها بشكل مريح بدون امتلاك سيارة خاصة، بفضل شبكة المترو والترام والحافلات المتطورة وتوفر جميع الخدمات على مسافة مشي.
          </p>

          <div className="bg-warm-50 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <ol className="space-y-2 text-warm-700">
              <li>1. لماذا العيش بدون سيارة في دبي؟</li>
              <li>2. أفضل المناطق للعيش بدون سيارة</li>
              <li>3. وسائل المواصلات المتاحة</li>
              <li>4. تكلفة المعيشة بدون سيارة</li>
              <li>5. نصائح عملية</li>
            </ol>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">لماذا العيش بدون سيارة في دبي؟</h2>
            <p className="text-warm-700 mb-4">
              يمكنك توفير ما بين 2,000 إلى 4,000 درهم شهرياً عند الاستغناء عن السيارة، تشمل أقساط السيارة والتأمين والوقود ومواقف السيارات والصيانة. كما أن استخدام المواصلات العامة يقلل من ضغوط الازدحام المروري اليومي.
            </p>
            <div className="bg-green-50 rounded-xl p-4 mb-4">
              <p className="text-green-800 text-sm font-medium">💰 التوفير السنوي المقدر: 24,000 - 48,000 درهم عند العيش بدون سيارة في دبي.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">أفضل المناطق للعيش بدون سيارة</h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">1. <Link href="/ar/locations/dubai/dubai-marina" className="text-primary-600 hover:underline">دبي مارينا</Link></h3>
                <p className="text-warm-700 text-sm">من أفضل المناطق للعيش بدون سيارة في دبي. تتوفر فيها محطات مترو وترام ومراكز تسوق ومطاعم وممشى المارينا ووصول مباشر للشاطئ. تضم سوبرماركت وصيدليات ومراكز طبية على مسافة مشي. اطلع على دليل <Link href="/ar/guides/walking-distance-metro-communities" className="text-primary-600 hover:underline">مجتمعات على مسافة مشي من المترو</Link> لمعرفة المزيد.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">2. <Link href="/ar/locations/dubai/downtown-dubai" className="text-primary-600 hover:underline">داون تاون دبي</Link></h3>
                <p className="text-warm-700 text-sm">قلب دبي مع محطة مترو برج خليفة/دبي مول ودبي مول أكبر مركز تسوق في العالم. كل ما تحتاجه متوفر على مسافة مشي بما في ذلك المطاعم والمقاهي والحدائق ومرافق الترفيه.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3. <Link href="/ar/locations/dubai/business-bay" className="text-primary-600 hover:underline">الخليج التجاري</Link></h3>
                <p className="text-warm-700 text-sm">منطقة مركزية متصلة بالمترو وقريبة من داون تاون. توفر خيارات سكنية بأسعار أقل مع نفس مستوى الخدمات. ممشى قناة دبي المائية يوفر مسارات للمشي وركوب الدراجات.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">4. أبراج بحيرات الجميرا (JLT)</h3>
                <p className="text-warm-700 text-sm">مجتمع مخطط بعناية مع محطة مترو مخصصة ومتاجر ومطاعم في الطابق الأرضي لكل مجموعة أبراج. بيئة صديقة للمشاة مع حدائق وبحيرات اصطناعية.</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">5. بر دبي</h3>
                <p className="text-warm-700 text-sm">من أقدم مناطق دبي وأكثرها اكتفاءً ذاتياً. شبكة مترو وحافلات ممتازة مع أسواق ومحلات تجارية ومستشفيات على مسافة مشي. الخيار الأقل تكلفة للعيش بدون سيارة.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">وسائل المواصلات المتاحة</h2>
            <ul className="list-disc pr-6 text-warm-700 space-y-2">
              <li><strong>المترو:</strong> خطان رئيسيان (الأحمر والأخضر) يغطيان معظم مناطق دبي. للمزيد اطلع على دليل <Link href="/ar/guides/property-near-red-line-metro-dubai" className="text-primary-600 hover:underline">عقارات قرب الخط الأحمر</Link>.</li>
              <li><strong>الترام:</strong> يربط مناطق المارينا وJBR والصفوح.</li>
              <li><strong>الحافلات:</strong> شبكة واسعة تغطي جميع أنحاء دبي مع تكييف كامل.</li>
              <li><strong>التاكسي والتطبيقات:</strong> كريم وأوبر وتاكسي دبي متوفرة على مدار الساعة.</li>
              <li><strong>العبرة والفيري:</strong> وسائل نقل مائية بين ضفتي خور دبي.</li>
              <li><strong>الدراجات الكهربائية:</strong> محطات تأجير دراجات منتشرة في المناطق الرئيسية.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">مقارنة تكلفة المعيشة</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="text-right py-3 px-4 font-semibold">البند</th>
                    <th className="text-right py-3 px-4 font-semibold">مع سيارة</th>
                    <th className="text-right py-3 px-4 font-semibold">بدون سيارة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr><td className="py-3 px-4">أقساط/إيجار السيارة</td><td className="py-3 px-4">1,500 - 2,500 درهم</td><td className="py-3 px-4">0 درهم</td></tr>
                  <tr><td className="py-3 px-4">التأمين</td><td className="py-3 px-4">200 - 400 درهم</td><td className="py-3 px-4">0 درهم</td></tr>
                  <tr><td className="py-3 px-4">الوقود</td><td className="py-3 px-4">400 - 800 درهم</td><td className="py-3 px-4">0 درهم</td></tr>
                  <tr><td className="py-3 px-4">مواصلات عامة وتاكسي</td><td className="py-3 px-4">100 درهم</td><td className="py-3 px-4">400 - 600 درهم</td></tr>
                  <tr className="font-semibold"><td className="py-3 px-4">الإجمالي الشهري</td><td className="py-3 px-4">2,200 - 3,700 درهم</td><td className="py-3 px-4">400 - 600 درهم</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <h3 className="font-semibold text-accent-800 mb-2">نصيحة من الخبراء</h3>
            <p className="text-accent-700 text-sm">
              قبل اتخاذ قرار العيش بدون سيارة، اقضِ أسبوعاً في المنطقة المستهدفة واستخدم المواصلات العامة فقط. جرّب التنقل في أوقات الذروة وعطلات نهاية الأسبوع. احصل على بطاقة نول الفضية أو الذهبية للاستفادة من أسعار مخفضة. اطلع على دليل <Link href="/ar/guides/best-areas-near-dubai-metro" className="text-primary-600 hover:underline">أفضل المناطق القريبة من مترو دبي</Link> لاختيار الموقع المناسب.
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
            <Link href="/ar/locations/dubai/downtown-dubai" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">داون تاون دبي</p>
            </Link>
            <Link href="/ar/locations/dubai/dubai-marina" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">دبي مارينا</p>
            </Link>
            <Link href="/ar/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">تعريف</span>
              <p className="font-medium text-gray-900 mt-1">التملك الحر</p>
            </Link>
            <Link href="/ar/guides/best-areas-near-dubai-metro" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">أفضل المناطق القريبة من مترو دبي</p>
            </Link>
            <Link href="/ar/guides/walking-distance-metro-communities" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">مجتمعات على مسافة مشي من المترو</p>
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
