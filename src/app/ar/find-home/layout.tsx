import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ابحث عن منزلك المثالي في دبي - توصيات عقارية بالذكاء الاصطناعي',
  description: 'صف نمط حياتك المثالي ودع الذكاء الاصطناعي يوصي لك بالعقار المثالي في دبي. توصيات مخصصة للإيجار والشراء.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/find-home',
  },
}

export default function FindHomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
