import Link from "next/link"
import Container from "@/components/Container"

const posts = [
  {
    title: "Gratis timeliste mal – last ned og bruk",
    excerpt: "En enkel timeliste-mal du kan bruke i hverdagen. Tips + vanlige feil.",
    href: "/blogg/gratis-timeliste-mal",
  },
  {
    title: "Hva skal en faktura inneholde i Norge?",
    excerpt: "Krav til faktura og hva du bør huske for å unngå problemer.",
    href: "/blogg/hva-skal-en-faktura-inneholde",
  },
  {
    title: "Hvordan følge opp et sendt tilbud",
    excerpt: "Enkelt oppfølgingsoppsett som gir flere svar og flere ja.",
    href: "/blogg/hvordan-folge-opp-tilbud",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Tips og guider</h2>
            <p className="mt-3 text-gray-600">
              Lær beste praksis for faktura, timeliste og tilbud i Norge.
            </p>
          </div>

          <Link
            href="/blogg"
            className="hidden md:inline-flex rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Se alle artikler →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-600">{p.excerpt}</p>
              <p className="mt-6 text-sm font-medium text-blue-600">
                Les mer →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link
            href="/blogg"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Se alle artikler →
          </Link>
        </div>
      </Container>
    </section>
  )
}