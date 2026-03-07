import Link from "next/link"
import Container from "@/components/Container"
import { seoPages } from "@/content/seoPages"

export default function GuideClusters() {
  const topics = ["timeliste", "faktura", "tilbud"]

  return (
    <section className="border-t bg-gray-50 py-16">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900">
          Guider og maler
        </h2>

        <p className="mt-3 text-gray-600">
          Utforsk våre guider for timelister, faktura og tilbud.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {topics.map((topic) => {
            const pages = seoPages.filter((p) => p.topic === topic)

            return (
              <div key={topic}>
                <h3 className="text-xl font-semibold capitalize text-gray-900">
                  {topic}
                </h3>

                <ul className="mt-4 space-y-3">
                  {pages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/${p.slug}`}
                        className="text-blue-600 hover:underline"
                      >
                        {p.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}