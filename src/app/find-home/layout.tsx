import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Your Perfect Home in Dubai - AI Property Recommendations',
  description: 'Describe your ideal lifestyle and let our AI recommend the perfect Dubai property for you. Personalized recommendations for rent and purchase.',
  alternates: {
    canonical: 'https://propertywiki.ai/find-home',
  },
}

export default function FindHomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
