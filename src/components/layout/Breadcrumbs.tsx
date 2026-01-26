import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-500 hover:text-primary-600 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="text-gray-500 hover:text-primary-600 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
