'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Fuse, { FuseResult } from 'fuse.js'
import { searchData, categoryLabels, categoryColors, type SearchItem } from '@/lib/searchData'

const fuse = new Fuse(searchData, {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'tags', weight: 0.3 }
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2
})

interface SearchBarProps {
  isMobile?: boolean
  onClose?: () => void
}

export default function SearchBar({ isMobile = false, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<FuseResult<SearchItem>[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery)
    if (searchQuery.trim().length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }
    const searchResults = fuse.search(searchQuery).slice(0, 8)
    setResults(searchResults)
    setIsOpen(searchResults.length > 0)
    setSelectedIndex(-1)
  }, [])

  const handleSelect = useCallback((href: string) => {
    router.push(href)
    setQuery('')
    setResults([])
    setIsOpen(false)
    setSelectedIndex(-1)
    onClose?.()
  }, [router, onClose])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].item.href)
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }, [isOpen, results, selectedIndex, handleSelect])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const inputId = isMobile ? 'mobile-search-input' : 'desktop-search-input'

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor={inputId} className="sr-only">Search articles</label>
      <div className="relative">
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
          placeholder="Search articles..."
          className={`${
            isMobile
              ? 'w-full px-4 py-3 pl-11 text-sm bg-warm-50 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 placeholder:text-warm-400'
              : 'w-52 pl-10 pr-4 py-2.5 text-sm bg-warm-50 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:bg-white transition-all placeholder:text-warm-400'
          }`}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-activedescendant={selectedIndex >= 0 ? `result-${selectedIndex}` : undefined}
        />
        <svg
          className={`absolute ${isMobile ? 'left-4' : 'left-3.5'} top-1/2 -translate-y-1/2 h-4 w-4 text-warm-400`}
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

      {isOpen && results.length > 0 && (
        <div
          id="search-results"
          role="listbox"
          className={`absolute ${isMobile ? 'left-0 right-0' : 'right-0 w-80'} mt-2 bg-white rounded-xl shadow-lg border border-warm-200 overflow-hidden z-50`}
        >
          <div className="py-2 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={result.item.href}
                id={`result-${index}`}
                role="option"
                aria-selected={selectedIndex === index}
                onClick={() => handleSelect(result.item.href)}
                className={`w-full px-4 py-3 text-left hover:bg-warm-50 transition-colors ${
                  selectedIndex === index ? 'bg-warm-50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[result.item.category]}`}>
                        {categoryLabels[result.item.category]}
                      </span>
                    </div>
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {result.item.title}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {result.item.description}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
          <div className="px-4 py-2 bg-warm-50 border-t border-warm-200">
            <p className="text-xs text-gray-500">
              Use <kbd className="px-1.5 py-0.5 bg-white rounded border text-xs">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white rounded border text-xs">↓</kbd> to navigate, <kbd className="px-1.5 py-0.5 bg-white rounded border text-xs">Enter</kbd> to select
            </p>
          </div>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className={`absolute ${isMobile ? 'left-0 right-0' : 'right-0 w-80'} mt-2 bg-white rounded-xl shadow-lg border border-warm-200 overflow-hidden z-50`}>
          <div className="px-4 py-6 text-center">
            <svg className="w-10 h-10 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-500">No results found for &quot;{query}&quot;</p>
            <p className="text-xs text-gray-400 mt-1">Try different keywords</p>
          </div>
        </div>
      )}
    </div>
  )
}
