import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مناطق دبي السكنية | بروبرتي ويكي',
  description: 'استكشف أفضل المناطق السكنية في دبي. من المارينا إلى نخلة جميرا، اعرف أين تسكن.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/locations/dubai',
    title: 'مناطق دبي السكنية | بروبرتي ويكي',
    description: 'استكشف أفضل المناطق السكنية في دبي. من المارينا إلى نخلة جميرا، اعرف أين تسكن.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/locations/dubai',
    languages: {
      'en': 'https://propertywiki.ai/locations/dubai',
      'ar': 'https://propertywiki.ai/ar/locations/dubai',
      'x-default': 'https://propertywiki.ai/locations/dubai',
    },
  },
}

const communities = [
  {
    name: 'دبي مارينا',
    slug: 'dubai-marina',
    description: 'واجهة بحرية نابضة بالحياة مع ناطحات سحاب وممشى شهير.',
    priceRange: '80-150 ألف درهم/سنة',
    type: 'شقق'
  },
  {
    name: 'نخلة جميرا',
    slug: 'palm-jumeirah',
    description: 'جزيرة النخلة الأيقونية مع فلل وشقق فاخرة.',
    priceRange: '150-500+ ألف درهم/سنة',
    type: 'فلل وشقق'
  },
  {
    name: 'داون تاون دبي',
    slug: 'downtown-dubai',
    description: 'قلب دبي مع برج خليفة ودبي مول.',
    priceRange: '100-200 ألف درهم/سنة',
    type: 'شقق'
  },
  {
    name: 'الخليج التجاري',
    slug: 'business-bay',
    description: 'مركز أعمال حديث على قناة دبي المائية.',
    priceRange: '60-120 ألف درهم/سنة',
    type: 'شقق'
  },
  {
    name: 'جميرا بيتش ريزيدنس',
    slug: 'jbr',
    description: 'أشهر شاطئ في دبي مع حياة نابضة.',
    priceRange: '90-180 ألف درهم/سنة',
    type: 'شقق'
  },
  {
    name: 'المرابع العربية',
    slug: 'arabian-ranches',
    description: 'مجتمع فلل عائلي هادئ مع ملعب غولف.',
    priceRange: '180-400 ألف درهم/سنة',
    type: 'فلل'
  },
  {
    name: 'مركز دبي المالي',
    slug: 'difc',
    description: 'القلب المالي والثقافي لدبي.',
    priceRange: '120-250 ألف درهم/سنة',
    type: 'شقق'
  },
]

export default function DubaiLocationsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">الرئيسية</Link>
          <span className="mx-2 text-warm-400">/</span>
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 text-sm">المواقع</Link>
          <span className="mx-2 text-warm-400">/</span>
          <span className="text-warm-600 text-sm">دبي</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">مناطق دبي السكنية</h1>
          <p className="text-xl text-warm-600 max-w-2xl mx-auto">
            اكتشف أفضل المجتمعات السكنية في دبي. من الشقق الفاخرة على الشاطئ إلى الفلل العائلية الهادئة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Link
              key={community.slug}
              href={`/ar/locations/dubai/${community.slug}`}
              className="bg-warm-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-serif font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {community.name}
                </h2>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                  {community.type}
                </span>
              </div>
              <p className="text-warm-600 text-sm mb-4">{community.description}</p>
              <p className="text-primary-600 font-medium text-sm">{community.priceRange}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <Link href="/ar/locations" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            جميع المواقع
          </Link>
        </div>
      </div>
    </div>
  )
}
