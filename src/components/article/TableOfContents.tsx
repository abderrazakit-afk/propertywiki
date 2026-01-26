'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="bg-gray-50 rounded-xl p-6 mb-8" aria-label="Table of contents">
      <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
        Contents
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${item.level === 3 ? 'ml-4' : ''}`}
          >
            <a
              href={`#${item.id}`}
              className={`text-sm block py-1 transition-colors ${
                activeId === item.id
                  ? 'text-primary-600 font-medium'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
