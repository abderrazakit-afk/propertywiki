import Link from 'next/link'

const footerLinks = {
  الأدلة: [
    { name: 'كيفية شراء عقار في دبي', href: '/ar/guides/how-to-buy-property-in-dubai' },
    { name: 'كيفية بيع عقار في الإمارات', href: '/ar/guides/how-to-sell-property-in-uae' },
    { name: 'كيفية استئجار عقار', href: '/ar/guides/how-to-rent-property-in-uae' },
    { name: 'دليل ديوا للكهرباء والمياه', href: '/ar/guides/dewa-electricity-water-guide' },
  ],
  المواقع: [
    { name: 'دبي مارينا', href: '/ar/locations/dubai/dubai-marina' },
    { name: 'داون تاون دبي', href: '/ar/locations/dubai/downtown-dubai' },
    { name: 'نخلة جميرا', href: '/ar/locations/dubai/palm-jumeirah' },
    { name: 'الخليج التجاري', href: '/ar/locations/dubai/business-bay' },
  ],
  التعريفات: [
    { name: 'الملكية الحرة', href: '/ar/definitions/freehold-property' },
    { name: 'حق الانتفاع', href: '/ar/definitions/leasehold' },
    { name: 'العقارات على المخطط', href: '/ar/definitions/off-plan-property' },
  ],
  الشركة: [
    { name: 'من نحن', href: '/ar/about' },
    { name: 'اتصل بنا', href: '/ar/contact' },
    { name: 'سياسة الخصوصية', href: '/ar/privacy' },
    { name: 'السياسة التحريرية', href: '/ar/editorial-policy' },
  ],
}

export default function FooterAr() {
  return (
    <footer className="bg-warm-900 text-warm-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/ar" className="flex items-center space-x-3 space-x-reverse mb-6">
              <svg 
                width="36" 
                height="36" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="font-serif text-xl font-bold text-white">بروبرتي ويكي</span>
            </Link>
            <p className="text-warm-400 text-sm leading-relaxed mb-4">
              مصدرك الموثوق للمعرفة العقارية في الإمارات.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-sm text-warm-400 hover:text-white transition-colors"
              >
                English
              </Link>
              <span className="text-warm-600">|</span>
              <span className="text-sm text-white">العربية</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-warm-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-500 text-sm">
              © 2026 بروبرتي ويكي. جميع الحقوق محفوظة.
            </p>
            <p className="text-warm-500 text-sm">
              البريد الإلكتروني: hello@propertywiki.ai
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
