import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import { authors } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Palm Jumeirah Property Guide - Villas, Apartments & Prices',
  description: 'Complete guide to Palm Jumeirah real estate. Explore luxury villas, waterfront apartments, prices, and investment opportunities on Dubai\'s iconic palm island.',
  keywords: ['Palm Jumeirah', 'Palm Jumeirah villas', 'Palm Jumeirah property', 'Dubai luxury real estate'],
}

const tableOfContents = [
  { id: 'overview', title: 'Palm Jumeirah Overview', level: 2 },
  { id: 'property-types', title: 'Property Types', level: 2 },
  { id: 'prices', title: 'Current Prices', level: 2 },
  { id: 'lifestyle', title: 'Lifestyle & Amenities', level: 2 },
  { id: 'investment', title: 'Investment Outlook', level: 2 },
]

const faqs = [
  {
    question: 'Can foreigners buy property on Palm Jumeirah?',
    answer: 'Yes, Palm Jumeirah is a freehold zone where foreign nationals can purchase and fully own property, including villas and apartments.',
  },
  {
    question: 'What is the average price of a villa on Palm Jumeirah?',
    answer: 'Villa prices on Palm Jumeirah range from AED 15 million for garden homes to over AED 200 million for signature beach villas with private pools.',
  },
  {
    question: 'Is Palm Jumeirah a good investment?',
    answer: 'Palm Jumeirah is considered a trophy asset location with strong value retention. While rental yields are modest (3-5%), the area offers excellent capital appreciation potential and prestige value.',
  },
]

const relatedArticles = [
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Explore Dubai Marina\'s waterfront apartments.',
  },
  {
    title: 'Downtown Dubai Guide',
    href: '/locations/dubai/downtown-dubai',
    category: 'Location',
    description: 'Discover Downtown Dubai\'s iconic properties.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Complete guide to purchasing property in Dubai.',
  },
]

export default function PalmJumeirahPage() {
  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: 'Dubai', href: '/locations/dubai' },
    { name: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah' },
  ]

  const author = authors['ahmed-hassan']

  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Palm Jumeirah Property Guide - Villas, Apartments & Prices',
          description: 'Complete guide to Palm Jumeirah real estate.',
          url: 'https://propertywiki.com/locations/dubai/palm-jumeirah',
          datePublished: '2024-03-15',
          dateModified: '2024-12-10',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Locations', url: 'https://propertywiki.com/locations' },
          { name: 'Dubai', url: 'https://propertywiki.com/locations/dubai' },
          { name: 'Palm Jumeirah', url: 'https://propertywiki.com/locations/dubai/palm-jumeirah' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Dubai, UAE
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Palm Jumeirah Property Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore Dubai&apos;s iconic palm-shaped island, home to luxury villas, 
            waterfront apartments, and world-class resorts.
          </p>
        </header>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Palm Jumeirah Overview</h2>
            <p>
              Palm Jumeirah is one of the world&apos;s most recognizable man-made islands, 
              developed by Nakheel. Shaped like a palm tree, the island adds 78 kilometers 
              of coastline to Dubai and is home to some of the city&apos;s most exclusive 
              residential properties.
            </p>
            <p>
              The island comprises the Trunk, 16 Fronds, and the Crescent. The Fronds offer 
              beachfront villas, the Trunk features high-rise apartments, and the Crescent 
              hosts luxury hotels including Atlantis, The Palm.
            </p>
          </section>

          <section id="property-types">
            <h2>Property Types</h2>
            <ul>
              <li><strong>Signature Villas:</strong> Beachfront mansions on the Fronds with private beaches</li>
              <li><strong>Garden Homes:</strong> Villa-style living with shared beach access</li>
              <li><strong>Townhouses:</strong> Multi-story homes in select developments</li>
              <li><strong>Apartments:</strong> High-rise living on the Trunk and Shoreline</li>
              <li><strong>Penthouses:</strong> Ultra-luxury units in premium buildings</li>
            </ul>
          </section>

          <section id="prices">
            <h2>Current Prices</h2>
            <p>Palm Jumeirah commands premium pricing:</p>
            <ul>
              <li><strong>1-Bed Apartment:</strong> AED 1.8M - 4M</li>
              <li><strong>2-Bed Apartment:</strong> AED 3M - 8M</li>
              <li><strong>Garden Homes:</strong> AED 15M - 35M</li>
              <li><strong>Signature Villas:</strong> AED 35M - 200M+</li>
              <li><strong>Penthouses:</strong> AED 20M - 150M+</li>
            </ul>
          </section>

          <section id="lifestyle">
            <h2>Lifestyle & Amenities</h2>
            <ul>
              <li>Private beaches for villa residents</li>
              <li>World-class hotels and resorts (Atlantis, One&Only, Fairmont)</li>
              <li>The Pointe entertainment and dining destination</li>
              <li>Nakheel Mall shopping center</li>
              <li>Palm Monorail connecting to Dubai Metro</li>
              <li>Water sports and yacht clubs</li>
            </ul>
          </section>

          <section id="investment">
            <h2>Investment Outlook</h2>
            <p>
              Palm Jumeirah represents a unique investment proposition:
            </p>
            <ul>
              <li>Trophy asset with global recognition</li>
              <li>Strong capital appreciation history</li>
              <li>Moderate rental yields (3-5%) offset by prestige value</li>
              <li>Limited supply ensures value retention</li>
              <li>Popular with ultra-high-net-worth individuals</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-03-15"
          dateModified="2024-12-10"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
