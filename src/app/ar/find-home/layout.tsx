import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ابحث عن منزلك المثالي في دبي | بروبرتي ويكي',
  description: 'صف نمط حياتك ودع الذكاء الاصطناعي يوصي لك بالعقار المثالي في دبي. توصيات للإيجار والشراء.',
  openGraph: {
    url: 'https://propertywiki.ai/ar/find-home',
    title: 'ابحث عن منزلك المثالي في دبي | بروبرتي ويكي',
    description: 'صف نمط حياتك ودع الذكاء الاصطناعي يوصي لك بالعقار المثالي في دبي. توصيات للإيجار والشراء.',
    locale: 'ar_AE',
  },
  alternates: {
    canonical: 'https://propertywiki.ai/ar/find-home',
    languages: {
      'en': 'https://propertywiki.ai/find-home',
      'ar': 'https://propertywiki.ai/ar/find-home',
      'x-default': 'https://propertywiki.ai/find-home',
    },
  },
}

export default function FindHomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
