import Container from "@/components/Container"
import Link from "next/link"

const steps = [
  {
    title: "Registrer timer",
    desc: "Før arbeidstid daglig – raskt og oversiktlig.",
  },
  {
    title: "Lag tilbud",
    desc: "Send et profesjonelt tilbud til kunden.",
  },
  {
    title: "Generer faktura",
    desc: "Gjør tilbud eller timer om til faktura med ett klikk.",
  },
  {
    title: "Last ned PDF",
    desc: "Last ned, send på e-post eller skriv ut.",
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
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold">
                  {idx + 1}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-gray-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/timeliste-mal"
            className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Se timeliste mal →
          </Link>
        </div>
      </Container>
    </section>
  )
}