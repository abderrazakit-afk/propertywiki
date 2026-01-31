import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Your Perfect Home in Dubai - AI Recommendations',
  description: 'Describe your ideal lifestyle and let our AI recommend the perfect Dubai property for you. Personalized recommendations for rent and purchase.',
  alternates: {
    canonical: 'https://propertywiki.ai/find-home',
    languages: {
      'en': 'https://propertywiki.ai/find-home',
      'ar': 'https://propertywiki.ai/ar/find-home',
      'x-default': 'https://propertywiki.ai/find-home',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/find-home',
    title: 'Find Your Perfect Home in Dubai - AI Recommendations',
    description: 'Describe your ideal lifestyle and let our AI recommend the perfect Dubai property.',
  },
}

export default function FindHomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
