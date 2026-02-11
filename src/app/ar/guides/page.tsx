import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أدلة عقارية | بروبرتي ويكي',
  description: 'أدلة شاملة لشراء وبيع واستئجار العقارات في دبي والإمارات. نصائح للمشترين والمستثمرين.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/guides',
    title: 'أدلة عقارية | بروبرتي ويكي',
    description: 'أدلة شاملة لشراء وبيع واستئجار العقارات في دبي والإمارات. نصائح للمشترين والمستثمرين.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/guides',
    languages: {
      'en': 'https://propertywiki.ai/guides',
      'ar': 'https://propertywiki.ai/ar/guides',
      'x-default': 'https://propertywiki.ai/guides',
    },
  },
}

const guides = [
  {
    title: 'كيفية شراء عقار في دبي',
    titleEn: 'How to Buy Property in Dubai',
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي كمقيم أو أجنبي.',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'شراء',
    readTime: '15 دقيقة',
  },
  {
    title: 'كيفية شراء عقار في الإمارات',
    titleEn: 'How to Buy Property in UAE',
    description: 'دليل شامل للتملك العقاري في جميع الإمارات.',
    href: '/ar/guides/how-to-buy-property-in-uae',
    category: 'شراء',
    readTime: '12 دقيقة',
  },
  {
    title: 'كيفية بيع عقار في الإمارات',
    titleEn: 'How to Sell Property in UAE',
    description: 'الخطوات الكاملة لبيع عقارك في الإمارات.',
    href: '/ar/guides/how-to-sell-property-in-uae',
    category: 'بيع',
    readTime: '12 دقيقة',
  },
  {
    title: 'كيفية استئجار عقار في الإمارات',
    titleEn: 'How to Rent Property in UAE',
    description: 'كل ما تحتاج معرفته عن استئجار العقارات في الإمارات.',
    href: '/ar/guides/how-to-rent-property-in-uae',
    category: 'إيجار',
    readTime: '10 دقائق',
  },
  {
    title: 'دليل ديوا للكهرباء والمياه',
    titleEn: 'DEWA Electricity & Water Guide',
    description: 'كيفية إعداد وإدارة خدمات الكهرباء والمياه مع هيئة كهرباء ومياه دبي.',
    href: '/ar/guides/dewa-electricity-water-guide',
    category: 'مرافق',
    readTime: '8 دقائق',
  },
  {
    title: 'صيانة المكيفات في دبي',
    titleEn: 'AC Maintenance Dubai',
    description: 'دليل شامل لصيانة وإصلاح أنظمة التكييف في دبي.',
    href: '/ar/guides/ac-maintenance-dubai',
    category: 'صيانة',
    readTime: '7 دقائق',
  },
  {
    title: 'خدمات التنظيف المنزلي في دبي',
    titleEn: 'Home Cleaning Services Dubai',
    description: 'دليل خدمات التنظيف والتدبير المنزلي في دبي.',
    href: '/ar/guides/home-cleaning-services-dubai',
    category: 'صيانة',
    readTime: '6 دقائق',
  },
  {
    title: 'مرافق المباني والخدمات',
    titleEn: 'Building Facilities & Amenities',
    description: 'دليل المرافق والخدمات المتوفرة في المجمعات السكنية.',
    href: '/ar/guides/building-facilities-amenities-dubai',
    category: 'مرافق',
    readTime: '7 دقائق',
  },
  {
    title: 'أعلى مناطق العائد الإيجاري في دبي',
    titleEn: 'Highest Rental Yield Areas Dubai',
    description: 'تعرف على المناطق التي تحقق أعلى عائد إيجاري في دبي.',
    href: '/ar/guides/highest-rental-yield-areas-dubai',
    category: 'عائد',
    readTime: '10 دقائق',
  },
  {
    title: 'أفضل مناطق بعائد 8% في دبي',
    titleEn: 'Best Areas 8% ROI Dubai',
    description: 'المناطق التي تحقق عائد استثماري 8% وأكثر.',
    href: '/ar/guides/best-areas-8-percent-roi-dubai',
    category: 'عائد',
    readTime: '9 دقائق',
  },
  {
    title: 'مقارنة: JVC مقابل دبي هيلز',
    titleEn: 'JVC vs Dubai Hills Investment',
    description: 'مقارنة استثمارية شاملة بين قرية جميرا الدائرية ودبي هيلز.',
    href: '/ar/guides/jvc-vs-dubai-hills-investment',
    category: 'مقارنة',
    readTime: '10 دقائق',
  },
  {
    title: 'أفضل المناطق بأقل من مليون بعائد جيد',
    titleEn: 'Best Areas Under 1M Good ROI',
    description: 'مناطق بأسعار أقل من مليون درهم مع عائد استثماري ممتاز.',
    href: '/ar/guides/best-areas-under-1m-good-roi',
    category: 'عائد',
    readTime: '8 دقائق',
  },
  {
    title: 'عائد إيجار الاستوديو حسب المنطقة',
    titleEn: 'Studio Rental Yield by Area',
    description: 'مقارنة عائد إيجار الاستوديو في مختلف مناطق دبي.',
    href: '/ar/guides/studio-rental-yield-by-area',
    category: 'عائد',
    readTime: '8 دقائق',
  },
  {
    title: 'شراء عقار بأقل من 500 ألف درهم',
    titleEn: 'Best Areas Under 500K',
    description: 'أفضل المناطق لشراء عقار بميزانية أقل من 500 ألف درهم.',
    href: '/ar/guides/best-areas-buy-property-under-500k',
    category: 'ميزانية',
    readTime: '8 دقائق',
  },
  {
    title: 'أين تشتري بأقل من مليون درهم',
    titleEn: 'Where to Buy Under 1 Million',
    description: 'أفضل المناطق لشراء عقار بأقل من مليون درهم في دبي.',
    href: '/ar/guides/where-to-buy-under-1-million-dubai',
    category: 'ميزانية',
    readTime: '9 دقائق',
  },
  {
    title: 'أرخص مناطق التملك الحر في دبي',
    titleEn: 'Cheapest Freehold Areas Dubai',
    description: 'دليل أرخص مناطق التملك الحر للمشترين بميزانية محدودة.',
    href: '/ar/guides/cheapest-freehold-areas-dubai',
    category: 'ميزانية',
    readTime: '7 دقائق',
  },
  {
    title: 'مناطق بأسعار معقولة قرب المترو',
    titleEn: 'Affordable Areas Near Metro',
    description: 'مناطق سكنية بأسعار مناسبة قريبة من محطات المترو.',
    href: '/ar/guides/affordable-areas-near-metro-dubai',
    category: 'ميزانية',
    readTime: '7 دقائق',
  },
  {
    title: 'أفضل المناطق للمشترين لأول مرة',
    titleEn: 'Best Areas First Time Buyers',
    description: 'دليل شامل للمشترين الذين يشترون عقارهم الأول في دبي.',
    href: '/ar/guides/best-areas-first-time-buyers-dubai',
    category: 'شراء',
    readTime: '10 دقائق',
  },
  {
    title: 'أفضل المناطق القريبة من المترو',
    titleEn: 'Best Areas Near Dubai Metro',
    description: 'المناطق السكنية الأقرب لمحطات مترو دبي.',
    href: '/ar/guides/best-areas-near-dubai-metro',
    category: 'مواصلات',
    readTime: '8 دقائق',
  },
  {
    title: 'مجتمعات على مسافة مشي من المترو',
    titleEn: 'Walking Distance Metro Communities',
    description: 'مجتمعات سكنية يمكن الوصول منها للمترو سيراً على الأقدام.',
    href: '/ar/guides/walking-distance-metro-communities',
    category: 'مواصلات',
    readTime: '7 دقائق',
  },
  {
    title: 'عقارات قرب الخط الأحمر للمترو',
    titleEn: 'Property Near Red Line Metro',
    description: 'أفضل العقارات القريبة من محطات الخط الأحمر لمترو دبي.',
    href: '/ar/guides/property-near-red-line-metro-dubai',
    category: 'مواصلات',
    readTime: '7 دقائق',
  },
  {
    title: 'العيش بدون سيارة في دبي',
    titleEn: 'Car-Free Living Areas Dubai',
    description: 'مناطق يمكنك العيش فيها بدون الحاجة لسيارة.',
    href: '/ar/guides/car-free-living-areas-dubai',
    category: 'مواصلات',
    readTime: '7 دقائق',
  },
  {
    title: 'أفضل مشاريع على الخارطة بأقل من مليون',
    titleEn: 'Best Off-Plan Projects Under 1M',
    description: 'أفضل المشاريع قيد الإنشاء بأسعار أقل من مليون درهم.',
    href: '/ar/guides/best-off-plan-projects-under-1m',
    category: 'على الخارطة',
    readTime: '9 دقائق',
  },
  {
    title: 'مقارنة العائد: على الخارطة مقابل الجاهز',
    titleEn: 'Off-Plan vs Ready Property ROI',
    description: 'مقارنة شاملة بين العائد من العقارات الجاهزة وقيد الإنشاء.',
    href: '/ar/guides/off-plan-vs-ready-property-roi',
    category: 'على الخارطة',
    readTime: '10 دقائق',
  },
  {
    title: 'أكثر مناطق شراء على الخارطة أماناً',
    titleEn: 'Safest Off-Plan Areas Dubai',
    description: 'المناطق الأكثر أماناً لشراء عقارات على الخارطة في دبي.',
    href: '/ar/guides/safest-off-plan-areas-dubai',
    category: 'على الخارطة',
    readTime: '8 دقائق',
  },
  {
    title: 'مجتمعات خطط الدفع في دبي',
    titleEn: 'Payment Plan Communities Dubai',
    description: 'مجتمعات تقدم خطط دفع مرنة للمشترين.',
    href: '/ar/guides/payment-plan-communities-dubai',
    category: 'على الخارطة',
    readTime: '7 دقائق',
  },
  {
    title: 'خطة الدفع 1% شهرياً في دبي',
    titleEn: '1% Payment Plan Dubai',
    description: 'دليل خطط الدفع بنسبة 1% شهرياً والمشاريع المتاحة.',
    href: '/ar/guides/1-percent-payment-plan-dubai',
    category: 'على الخارطة',
    readTime: '7 دقائق',
  },
  {
    title: 'أفضل مناطق السكن للعائلات',
    titleEn: 'Best Areas for Families Dubai',
    description: 'أفضل المناطق السكنية المناسبة للعائلات في دبي.',
    href: '/ar/guides/best-areas-families-dubai',
    category: 'عائلات',
    readTime: '10 دقائق',
  },
  {
    title: 'أفضل المناطق القريبة من المدارس',
    titleEn: 'Best Areas Near Schools Dubai',
    description: 'مناطق سكنية قريبة من أفضل المدارس في دبي.',
    href: '/ar/guides/best-areas-near-schools-dubai',
    category: 'عائلات',
    readTime: '8 دقائق',
  },
  {
    title: 'المجتمعات المسورة في دبي',
    titleEn: 'Gated Communities Dubai',
    description: 'دليل المجتمعات المسورة والآمنة في دبي.',
    href: '/ar/guides/gated-communities-dubai',
    category: 'عائلات',
    readTime: '8 دقائق',
  },
  {
    title: 'مجتمعات الفلل بأقل من 2 مليون',
    titleEn: 'Villa Communities Under 2M Dubai',
    description: 'أفضل مجتمعات الفلل بأسعار أقل من 2 مليون درهم.',
    href: '/ar/guides/villa-communities-under-2m-dubai',
    category: 'عائلات',
    readTime: '8 دقائق',
  },
  {
    title: 'مناطق سكنية هادئة في دبي',
    titleEn: 'Quiet Residential Areas Dubai',
    description: 'أهدأ المناطق السكنية للباحثين عن الراحة والسكينة.',
    href: '/ar/guides/quiet-residential-areas-dubai',
    category: 'عائلات',
    readTime: '7 دقائق',
  },
  {
    title: 'أفضل مناطق إير بي إن بي في دبي',
    titleEn: 'Best Areas Airbnb Dubai',
    description: 'أفضل المناطق للإيجار قصير المدى عبر إير بي إن بي.',
    href: '/ar/guides/best-areas-airbnb-dubai',
    category: 'إيجار قصير',
    readTime: '9 دقائق',
  },
  {
    title: 'عائد الإيجار قصير المدى في دبي',
    titleEn: 'Short Term Rental ROI Dubai',
    description: 'تحليل عائد الاستثمار في الإيجار قصير المدى.',
    href: '/ar/guides/short-term-rental-roi-dubai',
    category: 'إيجار قصير',
    readTime: '9 دقائق',
  },
  {
    title: 'دليل إير بي إن بي دبي مارينا',
    titleEn: 'Airbnb Dubai Marina Guide',
    description: 'دليل شامل لتأجير عقارك في دبي مارينا عبر إير بي إن بي.',
    href: '/ar/guides/airbnb-dubai-marina-guide',
    category: 'إيجار قصير',
    readTime: '8 دقائق',
  },
  {
    title: 'رخصة الإيجار قصير المدى في دبي',
    titleEn: 'Short Term Rental License Dubai',
    description: 'كيفية الحصول على رخصة الإيجار قصير المدى من DTCM.',
    href: '/ar/guides/short-term-rental-license-dubai',
    category: 'إيجار قصير',
    readTime: '8 دقائق',
  },
  {
    title: 'أعلى مناطق سعر الليلة في دبي',
    titleEn: 'Highest Nightly Rate Areas Dubai',
    description: 'المناطق التي تحقق أعلى سعر ليلة للإيجار السياحي.',
    href: '/ar/guides/highest-nightly-rate-areas-dubai',
    category: 'إيجار قصير',
    readTime: '7 دقائق',
  },
  {
    title: 'رسوم الخدمات حسب المنطقة',
    titleEn: 'Service Charges by Area Dubai',
    description: 'مقارنة رسوم الخدمات في مختلف مناطق دبي.',
    href: '/ar/guides/service-charges-by-area-dubai',
    category: 'تكاليف',
    readTime: '8 دقائق',
  },
  {
    title: 'التكاليف الخفية لشراء عقار',
    titleEn: 'Hidden Costs Buying Property Dubai',
    description: 'التكاليف الخفية التي يجب معرفتها قبل شراء عقار.',
    href: '/ar/guides/hidden-costs-buying-property-dubai',
    category: 'تكاليف',
    readTime: '9 دقائق',
  },
  {
    title: 'دليل رسوم دائرة الأراضي',
    titleEn: 'DLD Fees Calculator Guide',
    description: 'دليل شامل لحساب رسوم دائرة الأراضي والأملاك.',
    href: '/ar/guides/dld-fees-calculator-guide',
    category: 'تكاليف',
    readTime: '8 دقائق',
  },
  {
    title: 'تكاليف الصيانة حسب المجتمع',
    titleEn: 'Maintenance Cost by Community',
    description: 'مقارنة تكاليف الصيانة ورسوم الخدمات في المجتمعات السكنية.',
    href: '/ar/guides/maintenance-cost-by-community-dubai',
    category: 'تكاليف',
    readTime: '7 دقائق',
  },
  {
    title: 'مقارنة رسوم التبريد والتكييف',
    titleEn: 'DEWA Cooling Charges Comparison',
    description: 'مقارنة رسوم التبريد المختلفة في مناطق دبي.',
    href: '/ar/guides/dewa-cooling-charges-comparison',
    category: 'تكاليف',
    readTime: '7 دقائق',
  },
  {
    title: 'الخليج التجاري مقابل داون تاون',
    titleEn: 'Business Bay vs Downtown Dubai',
    description: 'مقارنة شاملة بين الخليج التجاري وداون تاون دبي.',
    href: '/ar/guides/business-bay-vs-downtown-dubai',
    category: 'مقارنة',
    readTime: '10 دقائق',
  },
  {
    title: 'دبي مارينا مقابل JBR',
    titleEn: 'Dubai Marina vs JBR',
    description: 'مقارنة بين دبي مارينا وجميرا بيتش ريزيدنس.',
    href: '/ar/guides/dubai-marina-vs-jbr',
    category: 'مقارنة',
    readTime: '9 دقائق',
  },
  {
    title: 'نخلة جميرا مقابل تلال الإمارات',
    titleEn: 'Palm Jumeirah vs Emirates Hills',
    description: 'مقارنة فاخرة بين نخلة جميرا وتلال الإمارات.',
    href: '/ar/guides/palm-jumeirah-vs-emirates-hills',
    category: 'مقارنة',
    readTime: '9 دقائق',
  },
  {
    title: 'أبوظبي مقابل دبي للاستثمار',
    titleEn: 'Abu Dhabi vs Dubai Investment',
    description: 'مقارنة فرص الاستثمار العقاري بين أبوظبي ودبي.',
    href: '/ar/guides/abu-dhabi-vs-dubai-investment',
    category: 'مقارنة',
    readTime: '10 دقائق',
  },
  {
    title: 'دليل الاستثمار في JVC',
    titleEn: 'Property JVC Investment Guide',
    description: 'دليل شامل للاستثمار في قرية جميرا الدائرية.',
    href: '/ar/guides/property-jvc-investment-guide',
    category: 'مناطق',
    readTime: '10 دقائق',
  },
  {
    title: 'الاستثمار في واحة دبي للسيليكون',
    titleEn: 'Dubai Silicon Oasis Investment',
    description: 'فرص الاستثمار العقاري في واحة دبي للسيليكون.',
    href: '/ar/guides/dubai-silicon-oasis-investment',
    category: 'مناطق',
    readTime: '8 دقائق',
  },
  {
    title: 'دليل الاستثمار في الفرجان',
    titleEn: 'Al Furjan Investment Guide',
    description: 'فرص الاستثمار والسكن في منطقة الفرجان.',
    href: '/ar/guides/al-furjan-investment-guide',
    category: 'مناطق',
    readTime: '8 دقائق',
  },
  {
    title: 'المرابع العربية: المزايا والعيوب',
    titleEn: 'Arabian Ranches Pros & Cons',
    description: 'تحليل شامل لمزايا وعيوب السكن في المرابع العربية.',
    href: '/ar/guides/arabian-ranches-pros-cons',
    category: 'مناطق',
    readTime: '9 دقائق',
  },
]

const categoryColors: Record<string, string> = {
  'شراء': 'bg-blue-100 text-blue-700',
  'بيع': 'bg-green-100 text-green-700',
  'إيجار': 'bg-purple-100 text-purple-700',
  'مرافق': 'bg-orange-100 text-orange-700',
  'صيانة': 'bg-amber-100 text-amber-700',
  'عائد': 'bg-emerald-100 text-emerald-700',
  'ميزانية': 'bg-cyan-100 text-cyan-700',
  'مواصلات': 'bg-indigo-100 text-indigo-700',
  'على الخارطة': 'bg-rose-100 text-rose-700',
  'عائلات': 'bg-pink-100 text-pink-700',
  'إيجار قصير': 'bg-violet-100 text-violet-700',
  'تكاليف': 'bg-red-100 text-red-700',
  'مقارنة': 'bg-teal-100 text-teal-700',
  'مناطق': 'bg-lime-100 text-lime-700',
}

const GUIDES_PER_PAGE = 10

export default function GuidesPageAr({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Math.max(1, parseInt(searchParams.page || '1', 10))
  const totalPages = Math.ceil(guides.length / GUIDES_PER_PAGE)
  const validPage = Math.min(currentPage, totalPages)
  const startIndex = (validPage - 1) * GUIDES_PER_PAGE
  const paginatedGuides = guides.slice(startIndex, startIndex + GUIDES_PER_PAGE)

  return (
    <div className="bg-warm-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <nav className="mb-6">
            <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">
              الرئيسية
            </Link>
            <span className="mx-2 text-warm-400">/</span>
            <span className="text-warm-600 text-sm">الأدلة</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            أدلة عقارية
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            موارد شاملة لمساعدتك في كل مراحل رحلتك العقارية
          </p>
          <p className="text-sm text-warm-500 mt-2">{guides.length} دليل متاح</p>
        </div>

        <div className="grid gap-6">
          {paginatedGuides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-warm-100"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[guide.category] || 'bg-gray-100 text-gray-700'}`}>
                      {guide.category}
                    </span>
                    <span className="text-xs text-warm-500">{guide.readTime}</span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-primary-600 mb-3">{guide.titleEn}</p>
                  <p className="text-warm-600 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
                <svg className="w-5 h-5 text-warm-400 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            {validPage > 1 && (
              <Link
                href={validPage === 2 ? '/ar/guides' : `/ar/guides?page=${validPage - 1}`}
                className="px-4 py-2 rounded-lg bg-white border border-warm-200 text-warm-700 hover:bg-warm-50 transition-colors text-sm"
              >
                السابق
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={page === 1 ? '/ar/guides' : `/ar/guides?page=${page}`}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  page === validPage
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-warm-200 text-warm-700 hover:bg-warm-50'
                }`}
              >
                {page}
              </Link>
            ))}
            {validPage < totalPages && (
              <Link
                href={`/ar/guides?page=${validPage + 1}`}
                className="px-4 py-2 rounded-lg bg-white border border-warm-200 text-warm-700 hover:bg-warm-50 transition-colors text-sm"
              >
                التالي
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
