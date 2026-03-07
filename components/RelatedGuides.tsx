import Link from "next/link"
import Container from "@/components/Container"
import { seoPages } from "@/content/seoPages"

type Props = {
  relatedTopic?: "timeliste" | "faktura" | "tilbud" | "oversikt"
}

export default function RelatedGuides({ relatedTopic }: Props) {
  if (!relatedTopic) return null

  let guides = []

  if (relatedTopic === "oversikt") {
    const pillarPages = seoPages.filter((page) => page.isPillar)
    guides = pillarPages.slice(0, 6)
  } else {
    const topicPages = seoPages.filter((page) => page.topic === relatedTopic)
    const pillarPages = seoPages.filter(
      (page) => page.topic !== relatedTopic && page.isPillar
    )

    guides = [...topicPages.slice(0, 3), ...pillarPages.slice(0, 3)].slice(0, 6)
  }

  if (guides.length === 0) return null

  return (
    <section className="border-t bg-white py-16">
      <Container>
        <h2 className="text-2xl font-bold text-gray-900">Relaterte guider</h2>
        <p className="mt-2 text-gray-600">
          Utforsk relevante guider og maler for å komme videre.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/${guide.slug}`}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-shadow hover:shadow-md"
            >
              <div className="text-sm text-gray-500 capitalize">
                {guide.topic}
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {guide.h1}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {guide.description}
              </p>

              <div className="mt-5 text-sm font-medium text-blue-600">
                Les guide →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}