import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الاستثمار العقاري | بروبرتي ويكي',
  description: 'دليل الاستثمار العقاري في دبي والإمارات. استراتيجيات وتحليلات للمستثمرين.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/investing',
    title: 'الاستثمار العقاري | بروبرتي ويكي',
    description: 'دليل الاستثمار العقاري في دبي والإمارات. استراتيجيات وتحليلات للمستثمرين.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/investing',
    languages: {
      'en': 'https://propertywiki.ai/investing',
      'ar': 'https://propertywiki.ai/ar/investing',
      'x-default': 'https://propertywiki.ai/investing',
    },
  },
}

const topics = [
  {
    title: 'أساسيات الاستثمار العقاري',
    description: 'تعرف على أساسيات الاستثمار العقاري وكيفية تحقيق عوائد مستدامة.',
    icon: '📊',
  },
  {
    title: 'حساب العائد على الاستثمار',
    description: 'كيفية حساب ROI وتقييم الفرص الاستثمارية.',
    icon: '💰',
  },
  {
    title: 'استراتيجيات التمويل',
    description: 'خيارات التمويل العقاري وكيفية اختيار الأنسب.',
    icon: '🏦',
  },
  {
    title: 'إدارة العقارات الاستثمارية',
    description: 'نصائح لإدارة عقاراتك وتعظيم العوائد.',
    icon: '🏢',
  },
]

export default function InvestingPageAr() {
  return (
    <div className="bg-warm-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <nav className="mb-6">
            <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">
              الرئيسية
            </Link>
            <span className="mx-2 text-warm-400">/</span>
            <span className="text-warm-600 text-sm">الاستثمار</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            الاستثمار العقاري
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            استراتيجيات ونصائح للاستثمار العقاري الناجح في دبي
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white rounded-2xl p-6 border border-warm-100"
            >
              <span className="text-3xl mb-4 block">{topic.icon}</span>
              <h2 className="text-lg font-serif font-bold text-gray-900 mb-2">
                {topic.title}
              </h2>
              <p className="text-warm-600 text-sm">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-warm-500 mt-12">
          محتوى إضافي قريباً...
        </p>
      </div>
    </div>
  )
}
