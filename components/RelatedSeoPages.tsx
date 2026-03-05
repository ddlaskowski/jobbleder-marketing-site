import Link from "next/link"
import Container from "@/components/Container"
import { seoPages } from "@/content/seoPages"

type Props = { currentSlug: string }

export default function RelatedSeoPages({ currentSlug }: Props) {
  const related = seoPages.filter((p) => p.slug !== currentSlug).slice(0, 6)

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-2xl font-bold">Relaterte sider</h2>
        <p className="mt-2 text-gray-600">
          Flere maler og guider for faktura, timeliste og tilbud.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-xl border bg-white p-5 hover:shadow-sm transition-shadow"
            >
              <div className="font-semibold">{p.h1}</div>
              <div className="mt-2 text-sm text-gray-600">{p.description}</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}