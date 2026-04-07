import Container from "@/components/Container"
import Link from "next/link"

const steps = [
  {
    title: "Lag tilbud",
    desc: "Opprett et profesjonelt tilbud og send til kunden.",
  },
  {
    title: "Opprett kontrakt",
    desc: "Gjør tilbudet om til kontrakt og sikre avtalen.",
  },
  {
    title: "Registrer arbeid",
    desc: "Før timer og arbeid etter avtalen.",
  },
  {
    title: "Send faktura",
    desc: "Generer faktura basert på kontrakt eller timer.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Slik fungerer Jobbleder</h2>
          <p className="mt-3 text-gray-600">
            Fra registrering til PDF – på få minutter.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold shadow-sm">
                  {idx + 1}
                </div>

                <div>
                  <h3 className="text-lg font-semibold  text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/instruksjoner"
            className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-900 hover:bg-gray-100"
          >
            Se instruksjoner
          </Link>
        </div>
      </Container>
    </section>
  )
}