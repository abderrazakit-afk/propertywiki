import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy - PropertyWiki',
  description: 'PropertyWiki privacy policy explaining how we collect and protect your data.',
  alternates: {
    canonical: 'https://propertywiki.ai/privacy',
    languages: {
      'en': 'https://propertywiki.ai/privacy',
      'ar': 'https://propertywiki.ai/ar/privacy',
      'x-default': 'https://propertywiki.ai/privacy',
    },
  },
  openGraph: {
    url: 'https://propertywiki.ai/privacy',
    title: 'Privacy Policy - PropertyWiki',
    description: 'PropertyWiki privacy policy explaining how we collect and protect your data.',
  },
}

export default function PrivacyPage() {
  const breadcrumbs = [{ name: 'Privacy Policy', href: '/privacy' }]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500">Last updated: January 2025</p>
      </header>

      <div className="article-content">
        <section className="mb-8">
          <h2>Introduction</h2>
          <p>
            PropertyWiki (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2>Information We Collect</h2>
          <p>We may collect information about you in various ways:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, and other contact information 
            you voluntarily provide when contacting us or subscribing to our newsletter.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website, 
            including pages visited, time spent, and navigation patterns.</li>
            <li><strong>Device Data:</strong> Information about your device, browser type, 
            IP address, and operating system.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our website</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates and newsletters (with your consent)</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Protect against fraud and unauthorized access</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our 
            website. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for analytics and functionality. These services 
            have their own privacy policies governing the use of your information.
          </p>
        </section>

        <section className="mb-8">
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <strong>privacy@propertywiki.ai</strong>.
          </p>
        </section>
      </div>

      <nav className="mt-12 pt-8 border-t border-warm-200" aria-label="Explore more">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Explore PropertyWiki</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/about" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Company</span>
            <p className="font-medium text-gray-900 mt-1">About PropertyWiki</p>
          </Link>
          <Link href="/contact" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Contact</span>
            <p className="font-medium text-gray-900 mt-1">Get in Touch</p>
          </Link>
          <Link href="/editorial-policy" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Policy</span>
            <p className="font-medium text-gray-900 mt-1">Editorial Policy</p>
          </Link>
          <Link href="/guides" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Guides</span>
            <p className="font-medium text-gray-900 mt-1">Property Guides</p>
          </Link>
          <Link href="/locations" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Locations</span>
            <p className="font-medium text-gray-900 mt-1">Explore Locations</p>
          </Link>
          <Link href="/definitions/freehold-property" className="block p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <span className="text-xs font-medium text-primary-600 uppercase">Definition</span>
            <p className="font-medium text-gray-900 mt-1">What is Freehold Property?</p>
          </Link>
        </div>
      </nav>
    </div>
  )
}
