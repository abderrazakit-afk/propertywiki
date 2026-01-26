import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Downtown Dubai Property Guide - Prices, Investment & Lifestyle',
  description: 'Complete guide to Downtown Dubai real estate. Home to Burj Khalifa and Dubai Mall, explore property prices, rental yields, and investment opportunities.',
  keywords: ['Downtown Dubai', 'Downtown Dubai property', 'Burj Khalifa apartments', 'Dubai property investment'],
}

const tableOfContents = [
  { id: 'overview', title: 'Downtown Dubai Overview', level: 2 },
  { id: 'property-types', title: 'Property Types & Prices', level: 2 },
  { id: 'landmarks', title: 'Key Landmarks & Attractions', level: 2 },
  { id: 'investment', title: 'Investment Potential', level: 2 },
]

const faqs = [
  {
    question: 'Is Downtown Dubai freehold?',
    answer: 'Yes, Downtown Dubai is a designated freehold zone where foreign nationals can purchase property with full ownership rights.',
  },
  {
    question: 'What are property prices in Downtown Dubai?',
    answer: 'Prices range from approximately AED 1.5 million for studios to AED 50 million+ for premium penthouses. Average prices per square foot are among the highest in Dubai.',
  },
  {
    question: 'Is Downtown Dubai a good investment?',
    answer: 'Downtown Dubai offers stable investment potential due to its iconic status, prime location, and strong rental demand from tourists and professionals. Rental yields average 5-6%.',
  },
]

const relatedArticles = [
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Explore Dubai Marina\'s waterfront living options.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai.',
  },
  {
    title: 'What is Freehold Property?',
    href: '/definitions/freehold-property',
    category: 'Definition',
    description: 'Understanding freehold ownership in Dubai.',
  },
]

export default function DowntownDubaiPage() {
  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: 'Dubai', href: '/locations/dubai' },
    { name: 'Downtown Dubai', href: '/locations/dubai/downtown-dubai' },
  ]

  const author = {
    name: 'PropertyWiki Team',
    role: 'Editorial Team',
    bio: 'The PropertyWiki editorial team brings together real estate experts, legal advisors, and market analysts to provide comprehensive property guidance across the UAE.',
  }

  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Downtown Dubai Property Guide - Prices, Investment & Lifestyle',
          description: 'Complete guide to Downtown Dubai real estate.',
          url: 'https://propertywiki.com/locations/dubai/downtown-dubai',
          datePublished: '2024-03-01',
          dateModified: '2024-12-10',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.com' },
          { name: 'Locations', url: 'https://propertywiki.com/locations' },
          { name: 'Dubai', url: 'https://propertywiki.com/locations/dubai' },
          { name: 'Downtown Dubai', url: 'https://propertywiki.com/locations/dubai/downtown-dubai' },
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
            Downtown Dubai Property Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the iconic heart of Dubai, home to the world&apos;s tallest building and 
            some of the city&apos;s most prestigious residential addresses.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/downtown-dubai.jpg"
            alt="Downtown Dubai at night with Burj Khalifa illuminated and the Dubai Fountain, showcasing premium urban living"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="overview">
            <h2>Downtown Dubai Overview</h2>
            <p>
              Downtown Dubai, developed by Emaar Properties, is the prestigious urban center 
              that defines Dubai&apos;s skyline. Spanning 2 square kilometers, this 
              mixed-use district is home to the Burj Khalifa, The Dubai Mall, and the Dubai 
              Opera, making it one of the most visited destinations in the world.
            </p>
            <p>
              The area offers a unique blend of residential, commercial, and entertainment 
              options, with residents enjoying unparalleled access to luxury amenities and 
              cultural attractions. As a <Link href="/definitions/freehold-property">freehold zone</Link>, 
              it attracts investors and residents from around the globe.
            </p>
          </section>

          <section id="property-types">
            <h2>Property Types & Prices</h2>
            <p>
              Downtown Dubai offers primarily high-rise apartment living with a range of options:
            </p>
            <ul>
              <li><strong>Studios:</strong> AED 1.2M - 2.5M</li>
              <li><strong>1-Bedroom:</strong> AED 1.5M - 4M</li>
              <li><strong>2-Bedroom:</strong> AED 2.5M - 7M</li>
              <li><strong>3-Bedroom:</strong> AED 4M - 15M</li>
              <li><strong>Penthouses:</strong> AED 15M - 100M+</li>
            </ul>
            <p>
              Premium buildings include The Address residences, Burj Khalifa apartments, 
              Boulevard Point, and the Opera District developments.
            </p>
          </section>

          <section id="landmarks">
            <h2>Key Landmarks & Attractions</h2>
            <ul>
              <li><strong>Burj Khalifa:</strong> World&apos;s tallest building at 828 meters</li>
              <li><strong>The Dubai Mall:</strong> One of the world&apos;s largest shopping centers</li>
              <li><strong>Dubai Fountain:</strong> Spectacular choreographed fountain shows</li>
              <li><strong>Dubai Opera:</strong> World-class performing arts venue</li>
              <li><strong>Souk Al Bahar:</strong> Traditional Arabian marketplace</li>
            </ul>
          </section>

          <section id="investment">
            <h2>Investment Potential</h2>
            <p>
              Downtown Dubai offers compelling investment characteristics:
            </p>
            <ul>
              <li>Rental yields of 5-6% gross</li>
              <li>Strong demand from tourists for short-term rentals</li>
              <li>Premium pricing power due to iconic location</li>
              <li>Limited new supply maintains property values</li>
              <li>Proximity to DIFC and Business Bay business districts</li>
            </ul>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-03-01"
          dateModified="2024-12-10"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
