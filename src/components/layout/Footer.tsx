import Link from 'next/link'

const footerNavigation = {
  knowledge: [
    { name: 'All Definitions', href: '/definitions' },
    { name: 'Property Glossary', href: '/definitions' },
    { name: 'Buying Guides', href: '/guides' },
    { name: 'Investment Tips', href: '/investing' },
  ],
  locations: [
    { name: 'Dubai', href: '/locations/dubai' },
    { name: 'Dubai Marina', href: '/locations/dubai/dubai-marina' },
    { name: 'All Locations', href: '/locations' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Editorial Policy', href: '/editorial-policy' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <rect width="40" height="40" rx="8" fill="#9b7260"/>
                <path 
                  d="M12 32V12L20 8L28 12V18" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="none"
                />
                <path 
                  d="M14 18H22C24.2091 18 26 19.7909 26 22C26 24.2091 24.2091 26 22 26H14V18Z" 
                  fill="white"
                />
                <rect x="14" y="26" width="3" height="6" fill="white"/>
              </svg>
              <span className="font-serif text-xl font-bold text-gray-900">PropertyWiki</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Your comprehensive resource for real estate knowledge. Expert insights, detailed guides, and location-specific information to help you make informed property decisions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Knowledge Base</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.knowledge.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Locations</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.locations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} PropertyWiki. All rights reserved. Content is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
