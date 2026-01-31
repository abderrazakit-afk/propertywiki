import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'بروبرتي ويكي - دليل العقارات في دبي',
  description: 'دليلك الشامل للعقارات في دبي. نصائح خبراء لشراء وبيع واستئجار العقارات في دبي والإمارات.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar',
    languages: {
      'en': 'https://propertywiki.ai',
      'ar': 'https://propertywiki.ai/ar',
      'x-default': 'https://propertywiki.ai',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/ar',
    title: 'بروبرتي ويكي - دليل العقارات في دبي',
    description: 'دليلك الشامل للعقارات في دبي. نصائح خبراء لشراء وبيع واستئجار العقارات.',
    type: 'website',
    locale: 'ar_AE',
    siteName: 'PropertyWiki',
  },
}

const featuredGuides = [
  {
    title: 'كيفية شراء عقار في دبي',
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي كمقيم أو أجنبي.',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    icon: '🏠',
  },
  {
    title: 'دليل ديوا للكهرباء والمياه',
    description: 'كيفية إعداد خدمات الكهرباء والمياه مع هيئة كهرباء ومياه دبي.',
    href: '/ar/guides/dewa-electricity-water-guide',
    icon: '💡',
  },
  {
    title: 'كيفية استئجار عقار في الإمارات',
    description: 'كل ما تحتاج معرفته عن استئجار العقارات في الإمارات.',
    href: '/ar/guides/how-to-rent-property-in-uae',
    icon: '🔑',
  },
]

const communities = [
  {
    name: 'دبي مارينا',
    description: 'سكن على الواجهة البحرية مع إطلالات خلابة على المارينا',
    href: '/ar/locations/dubai/dubai-marina',
    priceRange: '700 ألف - 15 مليون درهم',
  },
  {
    name: 'نخلة جميرا',
    description: 'جزيرة النخلة الشهيرة للسكن الفاخر على الشاطئ',
    href: '/ar/locations/dubai/palm-jumeirah',
    priceRange: '1.5 مليون - 100 مليون درهم+',
  },
  {
    name: 'داون تاون دبي',
    description: 'قلب دبي مع برج خليفة ودبي مول',
    href: '/ar/locations/dubai/downtown-dubai',
    priceRange: '1.5 مليون - 50 مليون درهم',
  },
  {
    name: 'الخليج التجاري',
    description: 'أبراج حديثة مع إطلالات على القناة المائية',
    href: '/ar/locations/dubai/business-bay',
    priceRange: '600 ألف - 10 مليون درهم',
  },
]

const definitions = [
  {
    term: 'الملكية الحرة',
    definition: 'ملكية كاملة بدون حد زمني، يمكن للأجانب التملك في مناطق محددة.',
    href: '/ar/definitions/freehold-property',
  },
  {
    term: 'حق الانتفاع',
    definition: 'ملكية لفترة محددة (عادة 99 سنة)، ثم تعود للمالك الأصلي.',
    href: '/ar/definitions/leasehold',
  },
  {
    term: 'العقارات على المخطط',
    definition: 'شراء العقارات قبل اكتمال البناء، غالباً بأسعار أقل 10-30%.',
    href: '/ar/definitions/off-plan-property',
  },
]

export default function ArabicHomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-warm-50 via-white to-warm-50/30">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-warm-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-warm-700">موثوق به من أكثر من 10,000 مستثمر عقاري</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              مركز المعرفة العقارية الشامل
            </h1>
            <p className="text-lg sm:text-xl text-warm-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              أدلة متخصصة، رؤى سوقية، ومعرفة عقارية شاملة 
              لمساعدتك في اتخاذ قرارات عقارية واثقة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/ar/find-home" className="luxury-button">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                ابحث عن منزلك المثالي
              </Link>
              <Link href="/ar/definitions" className="text-link inline-flex items-center">
                أو استكشف تعريفات العقارات
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">الأدلة المميزة</h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              موارد أساسية للمشترين والبائعين والمستثمرين
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-warm-50 rounded-2xl p-8 hover:bg-warm-100 transition-all hover:shadow-lg"
              >
                <span className="text-4xl mb-4 block">{guide.icon}</span>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-warm-600 leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">مجتمعات دبي</h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              استكشف أكثر الأحياء طلباً في دبي
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-warm-100"
              >
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {community.name}
                </h3>
                <p className="text-sm text-warm-600 mb-4 leading-relaxed">
                  {community.description}
                </p>
                <p className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full inline-block">
                  {community.priceRange}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/ar/locations" className="text-link inline-flex items-center">
              عرض جميع المواقع
              <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">تعريفات عقارية</h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              فهم المصطلحات العقارية الرئيسية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {definitions.map((def) => (
              <Link
                key={def.term}
                href={def.href}
                className="group border border-warm-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {def.term}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {def.definition}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/ar/definitions" className="text-link inline-flex items-center">
              عرض جميع التعريفات
              <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
