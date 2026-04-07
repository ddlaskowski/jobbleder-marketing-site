import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import { instructionSections } from "@/content/instructionContent"
import GuideClusters from "@/components/GuideClusters"

export const metadata: Metadata = {
  title: "Instruksjoner for Jobbleder",
  description:
    "Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.",
  alternates: {
    canonical: "https://jobbleder.no/instruksjoner",
  },
}

function hasVideo(video?: string) {
  return Boolean(video && video.trim().length > 0)
}

export default function InstruksjonerPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="border-b bg-gray-50 py-16">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Instruksjoner for Jobbleder
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Lær hvordan du bruker Jobbleder steg for steg – fra oppretting
                av dokumenter til arbeidsøkter, prosjekter, kunder og
                fakturering.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {instructionSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </Container>
        </section>

        {instructionSections.map((section) => (
          <section key={section.id} id={section.id} className="border-b py-16">
            <Container>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {section.title}
                </h2>

                {section.intro && (
                  <p className="mt-3 text-lg leading-8 text-gray-600">
                    {section.intro}
                  </p>
                )}
              </div>

              <div className="mt-10 space-y-10">
                {section.items.map((item) => {
                  const showVideo = hasVideo(item.video)

                  return (
                    <article
                      key={item.slug}
                      className={`rounded-2xl border border-gray-200 bg-white p-6 ${
                        showVideo ? "grid gap-8 md:grid-cols-2" : ""
                      }`}
                    >
                      {showVideo && (
                        <div>
                          <video
                            controls
                            className="w-full rounded-xl border border-gray-200 bg-black"
                          >
                            <source
                              src={`/instructions/${item.video}`}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      )}

                      <div className={showVideo ? "" : "max-w-4xl"}>
                        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                          {item.title}
                        </h3>

                        {item.summary && (
                          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                              Oppsummering
                            </div>
                            <p className="mt-2 text-gray-700">{item.summary}</p>
                          </div>
                        )}

                        {item.description && item.description.length > 0 && (
                          <div className="mt-5 space-y-4">
                            {item.description.map((paragraph, index) => (
                              <p
                                key={index}
                                className="leading-7 text-gray-600"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {item.steps && item.steps.length > 0 && (
                          <div className="mt-6">
                            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                              Steg for steg
                            </h4>
                            <ol className="mt-4 space-y-3">
                              {item.steps.map((step, index) => (
                                <li
                                  key={index}
                                  className="flex gap-3 text-gray-700"
                                >
                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 text-sm font-semibold text-gray-700">
                                    {index + 1}
                                  </span>
                                  <span className="leading-7">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {item.tip && (
                          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
                            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                              Tips
                            </div>
                            <p className="mt-2 text-green-900">{item.tip}</p>
                          </div>
                        )}

                        {item.warning && (
                          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
                              Viktig
                            </div>
                            <p className="mt-2 text-amber-900">
                              {item.warning}
                            </p>
                          </div>
                        )}

                        {item.actions && item.actions.length > 0 && (
                          <div className="mt-6">
                            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                              Kom i gang
                            </div>
                            <div className="mt-3 flex flex-wrap gap-3">
                              {item.actions.map((action, index) => (
                                <a
                                  key={`${item.slug}-action-${index}`}
                                  href={action.href}
                                  className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
                                >
                                  {action.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            </Container>
          </section>
        ))}
      </main>

      <GuideClusters />
      <Footer />
    </>
  )
}