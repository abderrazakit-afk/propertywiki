export interface Author {
  name: string
  role: string
  avatar?: string
  bio: string
}

export interface Article {
  slug: string
  title: string
  description: string
  content: string
  category: 'definition' | 'guide' | 'location' | 'investing' | 'blog'
  author: Author
  datePublished: string
  dateModified: string
  readingTime: number
  tags: string[]
  relatedArticles: string[]
  faqs?: { question: string; answer: string }[]
  tableOfContents: { id: string; title: string; level: number }[]
}

export interface Location {
  slug: string
  name: string
  city: string
  country: string
  description: string
  overview: string
  propertyTypes: string[]
  averagePrices: {
    studio?: string
    oneBed?: string
    twoBed?: string
    threeBed?: string
    villa?: string
  }
  highlights: string[]
  nearbyAreas: string[]
  image?: string
}

export const authors: Record<string, Author> = {
  'james-wilson': {
    name: 'James Wilson',
    role: 'Senior Property Analyst',
    avatar: '/images/authors/james-wilson.jpg',
    bio: 'James Wilson is a senior property analyst with over 15 years of experience in Middle Eastern real estate markets. He specializes in market analysis and investment strategies for luxury properties.',
  },
  'sarah-chen': {
    name: 'Sarah Chen',
    role: 'Real Estate Editor',
    avatar: '/images/authors/sarah-chen.jpg',
    bio: 'Sarah Chen leads the editorial team at PropertyWiki. With a background in financial journalism, she brings clarity to complex real estate topics.',
  },
  'ahmed-hassan': {
    name: 'Ahmed Hassan',
    role: 'Dubai Market Specialist',
    avatar: '/images/authors/ahmed-hassan.jpg',
    bio: 'Ahmed Hassan is a Dubai-based property consultant with deep expertise in the UAE real estate market, particularly in freehold zones and off-plan investments.',
  },
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function extractTableOfContents(content: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const toc: { id: string; title: string; level: number }[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const title = match[2]
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    toc.push({ id, title, level })
  }

  return toc
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
