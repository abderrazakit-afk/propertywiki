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
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
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
