import { Author } from '@/lib/content'

interface AuthorBoxProps {
  author: Author
  datePublished: string
  dateModified: string
}

export default function AuthorBox({ author, datePublished, dateModified }: AuthorBoxProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="border-t border-b border-gray-100 py-6 my-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-semibold text-xl">
              {author.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900">{author.name}</h3>
              <p className="text-sm text-primary-600">{author.role}</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>Published: {formatDate(datePublished)}</p>
              <p>Updated: {formatDate(dateModified)}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{author.bio}</p>
        </div>
      </div>
    </div>
  )
}
