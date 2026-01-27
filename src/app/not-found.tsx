import Link from 'next/link'

const suggestedLinks = [
  { title: 'Property Definitions', href: '/definitions', description: 'Learn real estate terminology' },
  { title: 'Dubai Communities', href: '/locations/dubai', description: 'Explore neighborhoods' },
  { title: 'Buying Guides', href: '/guides', description: 'Step-by-step property guides' },
  { title: 'Investment Insights', href: '/investing', description: 'Strategic investment advice' },
]

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center">
        <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
          404 Error
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It may have been moved or doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors mb-12"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
            Popular Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {suggestedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
