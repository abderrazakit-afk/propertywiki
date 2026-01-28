import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChatButton from '@/components/chat/ChatButton'

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
  alternates: {
    canonical: 'https://propertywiki.ai',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://propertywiki.ai',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  )
}
