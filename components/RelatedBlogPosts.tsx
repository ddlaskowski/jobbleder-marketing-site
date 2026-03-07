import Link from "next/link"
import Container from "@/components/Container"
import { blogPosts } from "@/content/blogPosts"

type Props = {
  currentSlug: string
  relatedTopic?: "timeliste" | "faktura" | "tilbud" | "oversikt"
}

export default function RelatedBlogPosts({
  currentSlug,
  relatedTopic,
}: Props) {
  const sameTopic = blogPosts.filter(
    (post) => post.slug !== currentSlug && post.relatedTopic === relatedTopic
  )

  const fallback = blogPosts.filter((post) => post.slug !== currentSlug)

  const related = [...sameTopic, ...fallback]
    .filter((post, index, arr) => arr.findIndex((p) => p.slug === post.slug) === index)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="border-t bg-gray-50 py-16">
      <Container>
        <h2 className="text-2xl font-bold text-gray-900">Relaterte artikler</h2>
        <p className="mt-2 text-gray-600">
          Flere artikler om faktura, timelister og tilbud.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blogg/${post.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="text-sm text-gray-500">{post.category}</div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}