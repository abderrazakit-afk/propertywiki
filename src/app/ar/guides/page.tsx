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
    description: 'دليل شامل خطوة بخطوة لشراء العقارات في دبي كمقيم أو أجنبي. يشمل المتطلبات والإجراءات والتكاليف.',
    href: '/ar/guides/how-to-buy-property-in-dubai',
    category: 'شراء',
    readTime: '15 دقيقة',
  },
  {
    title: 'كيفية بيع عقار في الإمارات',
    titleEn: 'How to Sell Property in UAE',
    description: 'الخطوات الكاملة لبيع عقارك في الإمارات. من التقييم إلى إتمام الصفقة.',
    href: '/ar/guides/how-to-sell-property-in-uae',
    category: 'بيع',
    readTime: '12 دقيقة',
  },
  {
    title: 'كيفية استئجار عقار في الإمارات',
    titleEn: 'How to Rent Property in UAE',
    description: 'كل ما تحتاج معرفته عن استئجار العقارات في الإمارات. من البحث إلى توقيع العقد.',
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
    description: 'دليل شامل لصيانة وإصلاح أنظمة التكييف في دبي. نصائح للحفاظ على كفاءة التبريد.',
    href: '/ar/guides/ac-maintenance-dubai',
    category: 'صيانة',
    readTime: '7 دقائق',
  },
]

const categoryColors: Record<string, string> = {
  'شراء': 'bg-blue-100 text-blue-700',
  'بيع': 'bg-green-100 text-green-700',
  'إيجار': 'bg-purple-100 text-purple-700',
  'مرافق': 'bg-orange-100 text-orange-700',
  'صيانة': 'bg-amber-100 text-amber-700',
}

export default function GuidesPageAr() {
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
        </div>

        <div className="grid gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-warm-100"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[guide.category]}`}>
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
      </div>
    </div>
  )
}
