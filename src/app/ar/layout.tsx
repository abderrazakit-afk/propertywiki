import type { Metadata } from 'next'
import { Noto_Sans_Arabic } from 'next/font/google'
import HeaderAr from '@/components/layout/HeaderAr'
import FooterAr from '@/components/layout/FooterAr'
import ChatButtonAr from '@/components/chat/ChatButtonAr'

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://propertywiki.ai'),
  title: {
    default: 'بروبرتي ويكي - مركز المعرفة العقارية الشامل',
    template: '%s | بروبرتي ويكي',
  },
  description: 'بروبرتي ويكي هو المصدر الموثوق للمعرفة العقارية. استكشف تعريفات العقارات، أدلة المواقع، استراتيجيات الاستثمار، ورؤى الخبراء.',
  keywords: ['عقارات', 'دبي', 'شراء عقار', 'استثمار عقاري', 'إيجار دبي'],
  authors: [{ name: 'فريق بروبرتي ويكي' }],
  openGraph: {
    type: 'website',
    locale: 'ar_AE',
    url: 'https://propertywiki.ai/ar',
    siteName: 'بروبرتي ويكي',
    title: 'بروبرتي ويكي - مركز المعرفة العقارية الشامل',
    description: 'بروبرتي ويكي هو المصدر الموثوق للمعرفة العقارية.',
    images: [
      {
        url: 'https://propertywiki.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'بروبرتي ويكي - دليل العقارات في دبي',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بروبرتي ويكي - دليل العقارات في دبي',
    description: 'دليلك الشامل للعقارات في دبي والإمارات.',
    images: ['https://propertywiki.ai/og-image.png'],
  },
}

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen flex flex-col font-arabic ${notoArabic.variable}`}>
      <HeaderAr />
      <main className="flex-grow">
        {children}
      </main>
      <FooterAr />
      <ChatButtonAr />
    </div>
  )
}
