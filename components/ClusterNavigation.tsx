import Link from "next/link"
import Container from "@/components/Container"
import { seoPages } from "@/content/seoPages"

type Props = {
  currentSlug: string
}

export default function ClusterNavigation({ currentSlug }: Props) {
  const current = seoPages.find((p) => p.slug === currentSlug)

  if (!current) return null

  const clusterPages = seoPages.filter((p) => p.topic === current.topic)

  if (clusterPages.length <= 1) return null

  return (
    <section className="pb-10 pt-10">
      <Container>
        <div className="max-w-3xl rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">
            Relaterte sider om {current.topic}
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {clusterPages.map((page) => {
              const isCurrent = page.slug === currentSlug

              return (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className={
                    isCurrent
                      ? "rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900"
                      : "rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800"
                  }
                >
                  {page.h1}
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}