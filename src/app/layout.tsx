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
  authors: [{ name: 'PropertyWiki Editorial Team' }],
  creator: 'PropertyWiki',
  publisher: 'PropertyWiki',
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
