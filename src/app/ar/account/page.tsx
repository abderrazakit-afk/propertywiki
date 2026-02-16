import type { Metadata } from 'next'
import AccountPageAr from '@/components/account/AccountPageAr'

export const metadata: Metadata = {
  title: 'حسابي - تقاريري العقارية | بروبرتي ويكي',
  description: 'اعرض تقاريرك العقارية المولدة بالذكاء الاصطناعي وتفاصيل حسابك على بروبرتي ويكي.',
  alternates: {
    canonical: 'https://propertywiki.ai/ar/account',
    languages: { 'ar': 'https://propertywiki.ai/ar/account', 'en': 'https://propertywiki.ai/account', 'x-default': 'https://propertywiki.ai/account' },
  },
  robots: { index: false, follow: true },
}

export default function AccountPageArRoute() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <AccountPageAr />
      </div>
    </div>
  )
}
