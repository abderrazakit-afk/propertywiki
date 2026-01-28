'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ChatButton from '@/components/chat/ChatButton'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isArabic = pathname?.startsWith('/ar')

  if (isArabic) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}
