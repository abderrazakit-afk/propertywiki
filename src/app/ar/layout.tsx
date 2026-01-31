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
  },
}

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div dir="rtl" lang="ar" className={`min-h-screen flex flex-col font-arabic ${notoArabic.variable}`}>
      <HeaderAr />
      <main className="flex-grow">
        {children}
      </main>
      <FooterAr />
      <ChatButtonAr />
    </div>
  )
}
