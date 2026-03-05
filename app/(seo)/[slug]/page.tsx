import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Container from "@/components/Container"
import { seoPages } from "@/content/seoPages"
import RelatedSeoPages from "@/components/RelatedSeoPages"

function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }
}

type Params = { slug: string }

// ważne: tu Next w Twojej wersji traktuje params jako Promise
type Props = {
  params: Promise<Params>
}

function getPage(slug: string) {
  return seoPages.find((p) => p.slug === slug)
}

export function generateStaticParams(): Params[] {
  return seoPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `https://jobbleder.no/${page.slug}`,
    },
  }
}

export default async function SEOPage({ params }: Props) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) return notFound()
    const faqJsonLd = page.faqs?.length ? buildFaqJsonLd(page.faqs) : null;

  return (
    <main className="py-16">
      {faqJsonLd && (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        )}
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">{page.h1}</h1>
          <p className="mt-4 text-lg text-gray-600">{page.intro}</p>

          <ul className="mt-8 space-y-2">
            {page.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href="https://app.jobbleder.no"
              className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              {page.ctaLabel ?? "Start gratis"}
            </a>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold">Ofte stilte spørsmål</h2>
            <div className="mt-6 space-y-6">
              {page.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border bg-white p-6">
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 text-gray-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <RelatedSeoPages currentSlug={page.slug} />
      </Container>
    </main>
  )
}