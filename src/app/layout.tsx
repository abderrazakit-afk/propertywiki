import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'
import { headers } from 'next/headers'
import 'leaflet/dist/leaflet.css'
import './globals.css'
import ConditionalLayout from '@/components/layout/ConditionalLayout'
import PostHogProvider from '@/components/providers/PostHogProvider'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
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
    default: 'PropertyWiki - Your Complete Real Estate Knowledge Hub',
    template: '%s | PropertyWiki',
  },
  description: 'PropertyWiki is the definitive resource for real estate knowledge. Explore property definitions, location guides, investing strategies, and expert insights.',
  keywords: ['real estate', 'property', 'investing', 'dubai', 'property guide', 'real estate wiki'],
  authors: [{ name: 'PropertyWiki Team' }],
  creator: 'PropertyWiki',
  publisher: 'PropertyWiki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://propertywiki.ai',
    siteName: 'PropertyWiki',
    title: 'PropertyWiki - Your Complete Real Estate Knowledge Hub',
    description: 'PropertyWiki is the definitive resource for real estate knowledge. Explore property definitions, location guides, investing strategies, and expert insights.',
    images: [
      {
        url: 'https://propertywiki.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PropertyWiki - Dubai Real Estate Knowledge Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PropertyWiki - Your Complete Real Estate Knowledge Hub',
    description: 'PropertyWiki is the definitive resource for real estate knowledge.',
    creator: '@propertywiki',
    images: ['https://propertywiki.ai/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const locale = headersList.get('x-locale') || 'en'
  const isArabic = locale === 'ar'

  return (
    <html lang={locale} dir={isArabic ? 'rtl' : 'ltr'} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G9J1Q36DRM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9J1Q36DRM');
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="DBBWHsGJ9zfCW5ypDC5o7Q"
          strategy="afterInteractive"
          async
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Suspense fallback={null}>
          <PostHogProvider>
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  )
}
