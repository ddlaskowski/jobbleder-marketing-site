import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import { instructionSections } from "@/content/instructionContent"
import GuideClusters from "@/components/GuideClusters"

export default function InstruksjonerPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="border-b bg-gray-50 py-16">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-gray-900">
                Instruksjoner for Jobbleder
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Lær hvordan du bruker Jobbleder til å lage faktura, tilbud og timelister – steg for steg.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {instructionSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </Container>
        </section>

        {instructionSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-b py-16"
          >
            <Container>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>

                {section.intro && (
                  <p className="mt-3 text-gray-600">{section.intro}</p>
                )}
              </div>

              <div className="mt-10 space-y-10">
                {section.items.map((item) => (
                  <div
                    key={item.slug}
                    className="grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-2"
                  >
                    <div>
                      <video
                        controls
                        className="w-full rounded-xl border border-gray-200"
                      >
                        <source src={`/instructions/${item.video}`} type="video/mp4" />
                      </video>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <div className="mt-4 space-y-4">
                        {item.description.map((paragraph, index) => (
                          <p key={index} className="text-gray-600 leading-7">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ))}
      </main>
      <GuideClusters/>
      <Footer />
    </>
  )
}