import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مواقع عقارية في دبي - بروبرتي ويكي',
  description: 'استكشف أفضل المجتمعات السكنية في دبي. أدلة شاملة لكل حي تشمل الأسعار والمرافق ونمط الحياة.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/locations',
  },
}

const locations = [
  {
    name: 'دبي مارينا',
    nameEn: 'Dubai Marina',
    description: 'سكن على الواجهة البحرية مع إطلالات خلابة على المارينا. مثالي للمحترفين الشباب.',
    href: '/ar/locations/dubai/dubai-marina',
    priceRange: '700 ألف - 15 مليون درهم',
    type: 'شقق',
  },
  {
    name: 'نخلة جميرا',
    nameEn: 'Palm Jumeirah',
    description: 'جزيرة النخلة الشهيرة للسكن الفاخر على الشاطئ. فلل وشقق حصرية.',
    href: '/ar/locations/dubai/palm-jumeirah',
    priceRange: '1.5 مليون - 100 مليون درهم+',
    type: 'فلل وشقق',
  },
  {
    name: 'داون تاون دبي',
    nameEn: 'Downtown Dubai',
    description: 'قلب دبي مع برج خليفة ودبي مول. حياة حضرية فاخرة.',
    href: '/ar/locations/dubai/downtown-dubai',
    priceRange: '1.5 مليون - 50 مليون درهم',
    type: 'شقق',
  },
  {
    name: 'الخليج التجاري',
    nameEn: 'Business Bay',
    description: 'أبراج حديثة مع إطلالات على القناة المائية. مركز الأعمال الجديد.',
    href: '/ar/locations/dubai/business-bay',
    priceRange: '600 ألف - 10 مليون درهم',
    type: 'شقق',
  },
  {
    name: 'جميرا بيتش ريزيدنس',
    nameEn: 'JBR - Jumeirah Beach Residence',
    description: 'مجتمع شاطئي نابض بالحياة مع ممشى ومطاعم ومحلات.',
    href: '/ar/locations/dubai/jbr',
    priceRange: '1 مليون - 8 مليون درهم',
    type: 'شقق',
  },
  {
    name: 'المرابع العربية',
    nameEn: 'Arabian Ranches',
    description: 'مجتمع فلل عائلي هادئ مع حدائق وملاعب غولف ومدارس.',
    href: '/ar/locations/dubai/arabian-ranches',
    priceRange: '2.5 مليون - 15 مليون درهم',
    type: 'فلل',
  },
]

export default function LocationsPageAr() {
  return (
    <div className="bg-warm-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <nav className="mb-6">
            <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">
              الرئيسية
            </Link>
            <span className="mx-2 text-warm-400">/</span>
            <span className="text-warm-600 text-sm">المواقع</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            مجتمعات دبي السكنية
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            استكشف أفضل الأحياء للسكن والاستثمار في دبي
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location) => (
            <Link
              key={location.name}
              href={location.href}
              className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-warm-100"
            >
              <div className="mb-4">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {location.name}
                </h2>
                <p className="text-sm text-primary-600">{location.nameEn}</p>
              </div>
              <p className="text-warm-600 text-sm leading-relaxed mb-4">
                {location.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full">
                  {location.priceRange}
                </span>
                <span className="text-xs text-warm-500 bg-warm-100 px-2 py-1 rounded">
                  {location.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
