import Link from "next/link"
import Container from "@/components/Container"
import { seoPages } from "@/content/seoPages"

type Props = {
  slug: string
}

export default function Breadcrumbs({ slug }: Props) {
  const page = seoPages.find((p) => p.slug === slug)

  if (!page) return null

  const topicLabel: Record<string, string> = {
    timeliste: "Timeliste",
    faktura: "Faktura",
    tilbud: "Tilbud",
  }

  const topicName = topicLabel[page.topic] ?? page.topic

  return (
    <section className="pt-6 pb-4">
      <Container>
        <nav className="text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Hjem
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-300">{topicName}</span>

          <span className="mx-2">/</span>

          <span className="text-white">{page.h1}</span>
        </nav>
      </Container>
    </section>
  )
}