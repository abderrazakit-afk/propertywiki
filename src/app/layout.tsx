import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://propertywiki.com'),
  title: {
    default: 'PropertyWiki - Your Complete Real Estate Knowledge Hub',
    template: '%s | PropertyWiki',
  },
  description: 'PropertyWiki is the definitive resource for real estate knowledge. Explore property definitions, location guides, investing strategies, and expert insights.',
  keywords: ['real estate', 'property', 'investing', 'dubai', 'property guide', 'real estate wiki'],
  authors: [{ name: 'PropertyWiki Team' }],
  creator: 'PropertyWiki',
  publisher: 'PropertyWiki',
  alternates: {
    canonical: 'https://propertywiki.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://propertywiki.com',
    siteName: 'PropertyWiki',
    title: 'PropertyWiki - Your Complete Real Estate Knowledge Hub',
    description: 'PropertyWiki is the definitive resource for real estate knowledge. Explore property definitions, location guides, investing strategies, and expert insights.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PropertyWiki - Your Complete Real Estate Knowledge Hub',
    description: 'PropertyWiki is the definitive resource for real estate knowledge.',
    creator: '@propertywiki',
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
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
