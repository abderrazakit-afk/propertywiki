import { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact PropertyWiki - Get in Touch',
  description: 'Contact the PropertyWiki team for questions, feedback, or partnership inquiries.',
}

export default function ContactPage() {
  const breadcrumbs = [{ name: 'Contact', href: '/contact' }]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600">
          We&apos;d love to hear from you. Get in touch with the PropertyWiki team.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Editorial Inquiries</h3>
              <p className="text-gray-600">
                For content-related questions, corrections, or contributions:
              </p>
              <p className="text-primary-600 font-medium">editorial@propertywiki.ai</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">General Inquiries</h3>
              <p className="text-gray-600">
                For general questions about PropertyWiki:
              </p>
              <p className="text-primary-600 font-medium">info@propertywiki.ai</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Partnership Opportunities</h3>
              <p className="text-gray-600">
                Interested in working with us?
              </p>
              <p className="text-primary-600 font-medium">partnerships@propertywiki.ai</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            Frequently Asked
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-1">Can I contribute content?</h3>
              <p className="text-sm text-gray-600">
                Yes! We welcome contributions from real estate professionals. 
                Contact our editorial team with your proposal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-1">Found an error?</h3>
              <p className="text-sm text-gray-600">
                Please let us know! We strive for accuracy and appreciate corrections.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-1">Need property advice?</h3>
              <p className="text-sm text-gray-600">
                PropertyWiki provides educational content only. For personalized advice, 
                please consult a licensed real estate professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
