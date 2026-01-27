'use client'

import Link from 'next/link'
import { useState } from 'react'
import FindHomeModal from '../find-home/FindHomeModal'

const navigation = [
  { name: 'Definitions', href: '/definitions' },
  { name: 'Locations', href: '/locations' },
  { name: 'Guides', href: '/guides' },
  { name: 'Investing', href: '/investing' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [findHomeOpen, setFindHomeOpen] = useState(false)

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-warm-100 sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-18 items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <svg 
                  width="36" 
                  height="36" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 group-hover:scale-105 transition-transform"
                >
                  <rect width="40" height="40" rx="10" fill="#9b7260"/>
                  <path 
                    d="M12 32V12L20 8L28 12V18" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path 
                    d="M14 18H22C24.2091 18 26 19.7909 26 22C26 24.2091 24.2091 26 22 26H14V18Z" 
                    fill="white"
                  />
                  <rect x="14" y="26" width="3" height="6" fill="white"/>
                </svg>
                <span className="font-serif text-xl font-bold text-gray-900">PropertyWiki</span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-warm-700 hover:text-accent-600 hover:bg-warm-50 rounded-lg transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <div className="relative">
                <label htmlFor="desktop-search" className="sr-only">Search articles</label>
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search articles..."
                  className="w-52 pl-10 pr-4 py-2.5 text-sm bg-warm-50 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:bg-white transition-all placeholder:text-warm-400"
                />
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                onClick={() => setFindHomeOpen(true)}
                className="bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Find Home
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setFindHomeOpen(true)}
                className="bg-primary-600 text-white p-2.5 rounded-xl shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </button>
              <button
                type="button"
                className="p-2.5 text-warm-600 hover:bg-warm-50 rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-warm-100">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-3 text-base font-medium text-warm-700 hover:text-accent-600 hover:bg-warm-50 rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-warm-100 space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setFindHomeOpen(true)
                  }}
                  className="w-full bg-primary-600 text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Find Home
                </button>
                <div className="relative">
                  <label htmlFor="mobile-search" className="sr-only">Search articles</label>
                  <input
                    id="mobile-search"
                    type="search"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 pl-11 text-sm bg-warm-50 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 placeholder:text-warm-400"
                  />
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <FindHomeModal isOpen={findHomeOpen} onClose={() => setFindHomeOpen(false)} />
    </>
  )
}
