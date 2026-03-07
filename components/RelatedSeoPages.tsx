import Link from "next/link"
import Container from "@/components/Container"
import { seoPages } from "@/content/seoPages"

type Props = {
  currentSlug: string
}

export default function RelatedSeoPages({ currentSlug }: Props) {
  const current = seoPages.find((p) => p.slug === currentSlug)

  if (!current) return null

  const sameTopicPages = seoPages
    .filter((p) => p.slug !== currentSlug && p.topic === current.topic)
    .slice(0, 3)

  const otherTopics = Array.from(
    new Set(
      seoPages
        .filter((p) => p.slug !== currentSlug && p.topic !== current.topic)
        .map((p) => p.topic)
    )
  )

  const otherTopicPages = otherTopics.flatMap((topic) =>
    seoPages
      .filter((p) => p.slug !== currentSlug && p.topic === topic)
      .slice(0, 2)
  )

  const related = [...sameTopicPages, ...otherTopicPages].slice(0, 6)

  return (
    <section className="pt-20 pb-16 bg-gray-50">
      <Container>
        <h2 className="text-2xl font-bold text-gray-900">Relaterte sider</h2>
        <p className="mt-2 text-gray-600">
          Flere maler og guider for faktura, timeliste og tilbud.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="font-semibold text-gray-900">{p.h1}</div>
              <div className="mt-2 text-sm text-gray-600">
                {p.description}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}