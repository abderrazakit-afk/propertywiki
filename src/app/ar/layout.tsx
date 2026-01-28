import type { Metadata } from 'next'
import { Inter, Noto_Sans_Arabic, Playfair_Display } from 'next/font/google'
import '../globals.css'
import HeaderAr from '@/components/layout/HeaderAr'
import FooterAr from '@/components/layout/FooterAr'
import ChatButtonAr from '@/components/chat/ChatButtonAr'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
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
  alternates: {
    canonical: 'https://propertywiki.ai/ar',
    languages: {
      'en': 'https://propertywiki.ai',
      'ar': 'https://propertywiki.ai/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_AE',
    url: 'https://propertywiki.ai/ar',
    siteName: 'بروبرتي ويكي',
    title: 'بروبرتي ويكي - مركز المعرفة العقارية الشامل',
    description: 'بروبرتي ويكي هو المصدر الموثوق للمعرفة العقارية.',
  },
}

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${playfair.variable} ${notoArabic.variable}`}>
      <body className="min-h-screen flex flex-col font-arabic">
        <HeaderAr />
        <main className="flex-grow">
          {children}
        </main>
        <FooterAr />
        <ChatButtonAr />
      </body>
    </html>
  )
}
