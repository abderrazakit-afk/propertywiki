import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    images?: { url: string; width?: number; height?: number; alt?: string }[]
    type?: 'article' | 'website'
    publishedTime?: string
    modifiedTime?: string
    authors?: string[]
  }
  keywords?: string[]
}

export function generatePageMetadata(config: SEOConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: config.canonical ? { canonical: config.canonical } : undefined,
    openGraph: {
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      type: config.openGraph?.type || 'website',
      images: config.openGraph?.images,
      publishedTime: config.openGraph?.publishedTime,
      modifiedTime: config.openGraph?.modifiedTime,
      authors: config.openGraph?.authors,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      images: config.openGraph?.images?.map(img => img.url),
    },
  }
}

export interface ArticleSchema {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  author: {
    name: string
    url?: string
  }
  image?: string
}

export function generateArticleSchema(article: ArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PropertyWiki',
      logo: {
        '@type': 'ImageObject',
        url: 'https://propertywiki.ai/logo.png',
      },
    },
    image: article.image,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PropertyWiki',
    url: 'https://propertywiki.ai',
    logo: 'https://propertywiki.ai/logo.png',
    sameAs: [
      'https://twitter.com/propertywiki',
      'https://linkedin.com/company/propertywiki',
    ],
  }
}
