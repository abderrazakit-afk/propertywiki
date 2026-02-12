import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تعريفات عقارية | بروبرتي ويكي',
  description: 'دليل المصطلحات العقارية في دبي والإمارات. الملكية الحرة، حق الانتفاع، والعقارات على المخطط.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/definitions',
    title: 'تعريفات عقارية | بروبرتي ويكي',
    description: 'دليل المصطلحات العقارية في دبي والإمارات. الملكية الحرة، حق الانتفاع، والعقارات على المخطط.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/definitions',
    languages: {
      'en': 'https://propertywiki.ai/definitions',
      'ar': 'https://propertywiki.ai/ar/definitions',
      'x-default': 'https://propertywiki.ai/definitions',
    },
  },
}

const definitions = [
  {
    term: 'الملكية الحرة',
    termEn: 'Freehold Property',
    definition: 'ملكية كاملة للعقار والأرض بدون حد زمني. يمكن للأجانب التملك في مناطق محددة في دبي والإمارات.',
    href: '/ar/definitions/freehold-property',
  },
  {
    term: 'حق الانتفاع',
    termEn: 'Leasehold',
    definition: 'ملكية العقار لفترة محددة (عادة 99 سنة)، ثم تعود الملكية للمالك الأصلي للأرض.',
    href: '/ar/definitions/leasehold',
  },
  {
    term: 'العقارات على المخطط',
    termEn: 'Off-Plan Property',
    definition: 'شراء العقارات قبل أو أثناء البناء. غالباً بأسعار أقل 10-30% من العقارات الجاهزة مع خطط دفع مرنة.',
    href: '/ar/definitions/off-plan-property',
  },
  {
    term: 'عائد الاستثمار',
    termEn: 'ROI - Return on Investment',
    definition: 'نسبة العائد السنوي على الاستثمار العقاري. في دبي، يتراوح العائد الإيجاري بين 5-8% سنوياً.',
    href: '/ar/definitions/roi',
  },
  {
    term: 'رسوم الخدمات',
    termEn: 'Service Charges',
    definition: 'رسوم سنوية تدفع لإدارة المبنى لتغطية صيانة المناطق المشتركة والمرافق والأمن.',
    href: '/ar/definitions/service-charges',
  },
  {
    term: 'إيجاري',
    termEn: 'Ejari',
    definition: 'نظام تسجيل عقود الإيجار الرسمي في دبي. مطلوب لجميع عقود الإيجار السكنية والتجارية.',
    href: '/ar/definitions/ejari',
  },
]

export default function DefinitionsPageAr() {
  return (
    <div className="bg-warm-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <nav className="mb-6">
            <Link href="/ar" className="text-primary-600 hover:text-primary-700 text-sm">
              الرئيسية
            </Link>
            <span className="mx-2 text-warm-400">/</span>
            <span className="text-warm-600 text-sm">التعريفات</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            تعريفات عقارية
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            دليل شامل لفهم المصطلحات العقارية الأساسية في دبي والإمارات
          </p>
        </div>

        <div className="grid gap-6">
          {definitions.map((def) => (
            <Link
              key={def.term}
              href={def.href}
              className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-warm-100"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {def.term}
                  </h2>
                  <p className="text-sm text-primary-600 mb-3">{def.termEn}</p>
                  <p className="text-warm-600 leading-relaxed">
                    {def.definition}
                  </p>
                </div>
                <svg className="w-5 h-5 text-warm-400 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="استكشف المزيد">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">استكشف بروبرتي ويكي</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/ar/locations/dubai/dubai-marina" className="block p-4 bg-white rounded-xl hover:bg-warm-100 transition-colors border border-warm-100">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">دبي مارينا</p>
            </Link>
            <Link href="/ar/locations/dubai/palm-jumeirah" className="block p-4 bg-white rounded-xl hover:bg-warm-100 transition-colors border border-warm-100">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">نخلة جميرا</p>
            </Link>
            <Link href="/ar/locations/dubai/downtown-dubai" className="block p-4 bg-white rounded-xl hover:bg-warm-100 transition-colors border border-warm-100">
              <span className="text-xs font-medium text-primary-600 uppercase">موقع</span>
              <p className="font-medium text-gray-900 mt-1">داون تاون دبي</p>
            </Link>
            <Link href="/ar/guides/how-to-buy-property-in-dubai" className="block p-4 bg-white rounded-xl hover:bg-warm-100 transition-colors border border-warm-100">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية شراء عقار في دبي</p>
            </Link>
            <Link href="/ar/guides/how-to-rent-property-in-uae" className="block p-4 bg-white rounded-xl hover:bg-warm-100 transition-colors border border-warm-100">
              <span className="text-xs font-medium text-primary-600 uppercase">دليل</span>
              <p className="font-medium text-gray-900 mt-1">كيفية استئجار عقار في الإمارات</p>
            </Link>
            <Link href="/ar/investing/top-10-investment-areas-dubai" className="block p-4 bg-white rounded-xl hover:bg-warm-100 transition-colors border border-warm-100">
              <span className="text-xs font-medium text-primary-600 uppercase">استثمار</span>
              <p className="font-medium text-gray-900 mt-1">أفضل 10 مناطق استثمارية</p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
