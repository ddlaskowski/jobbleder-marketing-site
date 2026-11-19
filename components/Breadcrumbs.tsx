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
        <nav aria-label="Brødsmuler" className="text-sm text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-foreground">
            Hjem
          </Link>

          <span className="mx-2">/</span>

          <span>{topicName}</span>

          <span className="mx-2">/</span>

          <span aria-current="page" className="text-foreground">{page.h1}</span>
        </nav>
      </Container>
    </section>
  )
}
