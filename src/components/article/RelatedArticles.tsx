import Link from 'next/link'

interface RelatedArticle {
  title: string
  href: string
  category: string
  description: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null

  return (
    <section className="my-12" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-serif font-semibold text-gray-900 mb-6">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group luxury-card p-5"
          >
            <span className="inline-block text-xs font-medium text-primary-600 uppercase tracking-wider mb-2">
              {article.category}
            </span>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
