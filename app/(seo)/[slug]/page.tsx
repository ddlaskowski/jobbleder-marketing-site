import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Container from "@/components/Container"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { seoPages } from "@/content/seoPages"
import RelatedSeoPages from "@/components/RelatedSeoPages"
import FAQAccordion from "@/components/FAQAccordion"
import DownloadResources from "@/components/DownloadResources"
import ClusterNavigation from "@/components/ClusterNavigation"
import Breadcrumbs from "@/components/Breadcrumbs"

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
    <>
      <Navbar/>  
      <Breadcrumbs slug={page.slug} />
      <main className="py-16">
        {faqJsonLd && (
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          )}
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white">{page.h1}</h1>
            <p className="mt-4 text-lg text-gray-300">{page.intro}</p>

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

            {page.downloadResources && (
              <DownloadResources
                title={page.downloadResources.title}
                description={page.downloadResources.description}
                items={page.downloadResources.items}
              />
            )}

            <ClusterNavigation currentSlug={page.slug}/>

            {page.sections && page.sections.length > 0 && (
              <section className="pb-8">
                <Container>
                  <div className="max-w-3xl space-y-12">
                    {page.sections.map((section) => (
                      <div key={section.heading}>
                        <h2 className="text-2xl font-bold text-white">
                          {section.heading}
                        </h2>

                        <div className="mt-4 space-y-4">
                          {section.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-gray-300 leading-8">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Container>
              </section>
            )}
            <div className="mt-14  mb-16">
              <h2 className="text-2xl font-bold">Ofte stilte spørsmål</h2>
              <FAQAccordion items={page.faqs} />
            </div>
          </div>

          <RelatedSeoPages currentSlug={page.slug} />
        </Container>
      </main>
      <Footer/>
    </>
  )
}