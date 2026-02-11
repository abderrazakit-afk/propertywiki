import Link from 'next/link'

const footerNavigation = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Arabic Version', href: '/ar' },
    { name: 'Find Your Home', href: '/find-home' },
    { name: 'All Guides', href: '/guides' },
    { name: 'All Locations', href: '/locations' },
  ],
  knowledge: [
    { name: 'All Definitions', href: '/definitions' },
    { name: 'Buying Guides', href: '/guides' },
    { name: 'Investment Rankings', href: '/investing/top-10-investment-areas-dubai' },
    { name: 'Rental Yield Guide', href: '/guides/highest-rental-yield-areas-dubai' },
    { name: 'Service Charges', href: '/guides/service-charges-by-area-dubai' },
    { name: 'Areas Near Metro', href: '/guides/best-areas-near-dubai-metro' },
    { name: 'Airbnb Guide', href: '/guides/best-areas-airbnb-dubai' },
    { name: 'Hidden Costs', href: '/guides/hidden-costs-buying-property-dubai' },
  ],
  locations: [
    { name: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah' },
    { name: 'Dubai Marina', href: '/locations/dubai/dubai-marina' },
    { name: 'Business Bay', href: '/locations/dubai/business-bay' },
    { name: 'JBR', href: '/locations/dubai/jbr' },
    { name: 'Arabian Ranches', href: '/locations/dubai/arabian-ranches' },
    { name: 'DIFC', href: '/locations/dubai/difc' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Editorial Policy', href: '/editorial-policy' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

const trustSignals = [
  { icon: '📊', text: 'Data-driven insights' },
  { icon: '✓', text: 'Expert-verified content' },
  { icon: '🔄', text: 'Regularly updated' },
]

export default function Footer() {
  return (
    <footer className="bg-warm-50 border-t border-warm-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 group-hover:scale-105 transition-transform"
              >
                <rect width="40" height="40" rx="10" fill="#9b7260"/>
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
              <span className="font-serif text-2xl font-bold text-gray-900">PropertyWiki</span>
            </Link>
            <p className="mt-5 text-warm-600 leading-relaxed max-w-sm">
              Your comprehensive resource for real estate knowledge. Expert insights, detailed guides, and location-specific information to help you make informed property decisions.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {trustSignals.map((signal) => (
                <div key={signal.text} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-warm-200 text-sm text-warm-700">
                  <span>{signal.icon}</span>
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3.5">
              {footerNavigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-warm-600 hover:text-accent-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">Knowledge Base</h3>
            <ul className="space-y-3.5">
              {footerNavigation.knowledge.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-warm-600 hover:text-accent-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">Locations</h3>
            <ul className="space-y-3.5">
              {footerNavigation.locations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-warm-600 hover:text-accent-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">Company</h3>
            <ul className="space-y-3.5">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-warm-600 hover:text-accent-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-warm-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-warm-500">
              &copy; {new Date().getFullYear()} PropertyWiki. All rights reserved.
            </p>
            <p className="text-sm text-warm-500 text-center md:text-right">
              Content is for informational purposes only. Always consult with qualified professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
