import type { Metadata } from 'next'
import AccountPage from '@/components/account/AccountPage'

export const metadata: Metadata = {
  title: 'My Account - Property Reports | PropertyWiki',
  description: 'View your AI-generated property reports and account details on PropertyWiki.',
  alternates: {
    canonical: 'https://propertywiki.ai/account',
    languages: { 'ar': 'https://propertywiki.ai/ar/account', 'en': 'https://propertywiki.ai/account', 'x-default': 'https://propertywiki.ai/account' },
  },
  robots: { index: false, follow: true },
}

export default function AccountPageRoute() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <AccountPage />
      </div>
    </div>
  )
}
