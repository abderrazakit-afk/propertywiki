import { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/article/TableOfContents'
import AuthorBox from '@/components/article/AuthorBox'
import FAQSection from '@/components/article/FAQSection'
import RelatedArticles from '@/components/article/RelatedArticles'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'What is Freehold Property? Complete Definition & Guide',
  description: 'Learn what freehold property means, how it differs from leasehold, and why it matters for property buyers and investors. Complete guide with examples.',
  keywords: ['freehold property', 'freehold definition', 'property ownership', 'freehold vs leasehold'],
  openGraph: {
    title: 'What is Freehold Property? Complete Definition & Guide',
    description: 'Learn what freehold property means, how it differs from leasehold, and why it matters for property buyers and investors.',
    type: 'article',
    publishedTime: '2024-01-15',
    modifiedTime: '2024-12-10',
    authors: ['James Wilson'],
  },
}

const tableOfContents = [
  { id: 'definition', title: 'Definition of Freehold Property', level: 2 },
  { id: 'how-it-works', title: 'How Freehold Ownership Works', level: 2 },
  { id: 'freehold-vs-leasehold', title: 'Freehold vs Leasehold', level: 2 },
  { id: 'advantages', title: 'Advantages of Freehold', level: 2 },
  { id: 'disadvantages', title: 'Disadvantages of Freehold', level: 2 },
  { id: 'dubai-freehold', title: 'Freehold Property in Dubai', level: 2 },
]

const faqs = [
  {
    question: 'What does freehold property mean?',
    answer: 'Freehold property means you own both the building and the land it stands on outright, with no time limit on your ownership. This is the most complete form of property ownership available.',
  },
  {
    question: 'Is freehold better than leasehold?',
    answer: 'Freehold is generally considered better because you have complete ownership with no ground rent or lease to worry about. However, leasehold properties can sometimes be more affordable or located in desirable areas where freehold isn\'t available.',
  },
  {
    question: 'Can foreigners buy freehold property in Dubai?',
    answer: 'Yes, foreigners can buy freehold property in Dubai within designated freehold zones. These include popular areas like Dubai Marina, Downtown Dubai, Palm Jumeirah, and many others.',
  },
  {
    question: 'Do you pay ground rent on freehold property?',
    answer: 'No, freehold property owners do not pay ground rent. Ground rent is only applicable to leasehold properties where you lease the land from a freeholder.',
  },
]

const relatedArticles = [
  {
    title: 'Understanding Leasehold Property',
    href: '/definitions/leasehold',
    category: 'Definition',
    description: 'Learn about leasehold ownership and how it compares to freehold.',
  },
  {
    title: 'How to Buy Property in Dubai',
    href: '/guides/how-to-buy-property-in-dubai',
    category: 'Guide',
    description: 'Step-by-step guide to purchasing property in Dubai as a foreigner.',
  },
  {
    title: 'Dubai Marina Property Guide',
    href: '/locations/dubai/dubai-marina',
    category: 'Location',
    description: 'Comprehensive guide to one of Dubai\'s premier freehold zones.',
  },
]

export default function FreeholdPropertyPage() {
  const breadcrumbs = [
    { name: 'Definitions', href: '/definitions' },
    { name: 'Freehold Property', href: '/definitions/freehold-property' },
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
          title: 'What is Freehold Property? Complete Definition & Guide',
          description: 'Learn what freehold property means, how it differs from leasehold, and why it matters for property buyers and investors.',
          url: 'https://propertywiki.ai/definitions/freehold-property',
          datePublished: '2024-01-15',
          dateModified: '2024-12-10',
          author: { name: author.name },
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://propertywiki.ai' },
          { name: 'Definitions', url: 'https://propertywiki.ai/definitions' },
          { name: 'Freehold Property', url: 'https://propertywiki.ai/definitions/freehold-property' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Definition
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What is Freehold Property?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive guide to freehold property ownership, including its definition, 
            advantages, and how it compares to other forms of property tenure.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/freehold-property.jpg"
            alt="Modern luxury residential building representing freehold property ownership with full ownership rights"
            fill
            className="object-cover"
            priority
          />
        </div>

        <TableOfContents items={tableOfContents} />

        <div className="article-content">
          <section id="definition">
            <h2>Definition of Freehold Property</h2>
            <p>
              <strong>Freehold property</strong> refers to a form of property ownership where the buyer 
              owns both the building and the land it stands on outright and indefinitely. Unlike leasehold 
              arrangements, there is no time limit on ownership, and the property can be passed down through 
              generations or sold at the owner&apos;s discretion.
            </p>
            <p>
              The term &quot;freehold&quot; comes from the concept of holding land &quot;free&quot; from any 
              obligations to a landlord. In legal terms, freehold is known as &quot;fee simple absolute&quot; 
              in many jurisdictions, representing the most complete form of property ownership available.
            </p>
          </section>

          <section id="how-it-works">
            <h2>How Freehold Ownership Works</h2>
            <p>
              When you purchase a freehold property, you acquire complete ownership rights to both the 
              structure and the land beneath it. This means you have the freedom to:
            </p>
            <ul>
              <li>Make modifications or improvements to the property without seeking permission from a landlord</li>
              <li>Sell the property at any time without restrictions</li>
              <li>Pass the property to heirs through inheritance</li>
              <li>Use the property as collateral for loans or mortgages</li>
              <li>Rent out the property to tenants</li>
            </ul>
            <p>
              However, freehold ownership doesn&apos;t mean complete freedom. Property owners must still 
              comply with local planning regulations, building codes, and any applicable homeowners&apos; 
              association rules.
            </p>
          </section>

          <section id="freehold-vs-leasehold">
            <h2>Freehold vs Leasehold</h2>
            <p>
              Understanding the difference between freehold and <a href="/definitions/leasehold">leasehold</a> is 
              crucial for any property buyer. Here are the key distinctions:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Freehold</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leasehold</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ownership Duration</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Indefinite</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fixed term (typically 99-999 years)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Land Ownership</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Included</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Not included</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ground Rent</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">None</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Payable annually</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Initial Cost</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Higher</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lower</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="advantages">
            <h2>Advantages of Freehold Property</h2>
            <p>
              Freehold ownership offers several significant benefits:
            </p>
            <ul>
              <li><strong>Complete ownership:</strong> You own the property and land outright with no expiration date</li>
              <li><strong>No ground rent:</strong> Unlike leasehold, you don&apos;t pay ongoing ground rent to a landlord</li>
              <li><strong>Greater control:</strong> Freedom to modify, extend, or renovate without landlord approval</li>
              <li><strong>Better investment:</strong> Properties typically appreciate better without lease depreciation concerns</li>
              <li><strong>Easier to sell:</strong> Buyers generally prefer freehold, making the property more marketable</li>
              <li><strong>Mortgage friendly:</strong> Lenders often offer better terms for freehold properties</li>
            </ul>
          </section>

          <section id="disadvantages">
            <h2>Disadvantages of Freehold Property</h2>
            <p>
              While freehold is often preferred, there are some considerations:
            </p>
            <ul>
              <li><strong>Higher purchase price:</strong> Freehold properties typically cost more than equivalent leaseholds</li>
              <li><strong>Full maintenance responsibility:</strong> You&apos;re responsible for all repairs and upkeep</li>
              <li><strong>Property taxes:</strong> May be higher due to land ownership</li>
              <li><strong>Limited availability:</strong> In some areas, particularly city centers, freehold options may be scarce</li>
            </ul>
          </section>

          <section id="dubai-freehold">
            <h2>Freehold Property in Dubai</h2>
            <p>
              Dubai introduced freehold property ownership for foreign nationals in 2002, revolutionizing 
              its real estate market. Foreign buyers can purchase freehold properties in designated 
              &quot;freehold zones&quot; which include many of Dubai&apos;s most prestigious developments:
            </p>
            <ul>
              <li><a href="/locations/dubai/dubai-marina">Dubai Marina</a> - Waterfront living with luxury apartments</li>
              <li><a href="/locations/dubai/downtown-dubai">Downtown Dubai</a> - Home to Burj Khalifa and Dubai Mall</li>
              <li><a href="/locations/dubai/palm-jumeirah">Palm Jumeirah</a> - Iconic man-made island with villas and apartments</li>
              <li><a href="/locations/dubai/jumeirah-beach-residence">JBR</a> - Beachfront residential and retail complex</li>
            </ul>
            <p>
              Owning freehold property in Dubai can also qualify foreign nationals for residency visas, 
              making it an attractive option for expatriates looking to establish a long-term presence 
              in the UAE.
            </p>
          </section>
        </div>

        <FAQSection faqs={faqs} />

        <AuthorBox
          author={author}
          datePublished="2024-01-15"
          dateModified="2024-12-10"
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  )
}
