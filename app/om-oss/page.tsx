import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"

export const metadata: Metadata = {
  title: "Om Jobbleder",
  description:
    "Les mer om Jobbleder og hvorfor løsningen er laget for håndverkere og små bedrifter i Norge.",
  alternates: {
    canonical: "https://jobbleder.no/om-oss",
  },
}

export default function OmOssPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="border-b bg-gray-50 py-16">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-gray-900">Om Jobbleder</h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Jobbleder er laget for håndverkere og små bedrifter som vil bruke
                mindre tid på dokumentarbeid og mer tid på selve jobben.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="max-w-3xl space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Hva er Jobbleder?
                </h2>
                <p className="mt-4 leading-8 text-gray-700">
                  Jobbleder er en nettbasert løsning for å lage faktura, timeliste
                  og tilbud på en enkel og oversiktlig måte. Målet er å gjøre
                  dokumentarbeid lettere i hverdagen, uten kompliserte systemer
                  eller unødvendig oppsett.
                </p>
                <p className="mt-4 leading-8 text-gray-700">
                  Alt fungerer direkte i nettleseren, slik at du raskt kan opprette
                  dokumenter, holde oversikt over kunder og prosjekter, og laste ned
                  PDF når du trenger det.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Hvem er løsningen laget for?
                </h2>
                <p className="mt-4 leading-8 text-gray-700">
                  Jobbleder er først og fremst laget for håndverkere og små
                  bedrifter i Norge. Løsningen passer godt for deg som trenger en
                  enkel måte å holde orden på tilbud, timelister og fakturaer uten å
                  bruke tid på store og tunge systemer.
                </p>
                <p className="mt-4 leading-8 text-gray-700">
                  Den passer også for selvstendig næringsdrivende og andre som vil ha
                  en mer praktisk og strukturert dokumentflyt i arbeidshverdagen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Hvorfor ble Jobbleder laget?
                </h2>
                <p className="mt-4 leading-8 text-gray-700">
                  Mange bruker fortsatt unødvendig mye tid på manuelle dokumenter,
                  gamle maler og rotete arbeidsrutiner. Jobbleder ble laget for å
                  gjøre denne prosessen enklere, raskere og mer oversiktlig.
                </p>
                <p className="mt-4 leading-8 text-gray-700">
                  Tanken bak løsningen er enkel: færre unødvendige steg, mindre
                  papirarbeid og bedre kontroll på dokumentene som brukes i det
                  daglige arbeidet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Enklere dokumentarbeid i praksis
                </h2>
                <p className="mt-4 leading-8 text-gray-700">
                  Med Jobbleder kan du lage dokumenter raskt, gjenbruke informasjon,
                  arbeide mer strukturert og få bedre oversikt over det som er sendt,
                  lagret og klart til bruk.
                </p>
                <p className="mt-4 leading-8 text-gray-700">
                  Målet er ikke å gjøre ting mer avansert – men å gjøre dem enklere.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t bg-gray-50 py-16">
          <Container>
            <div className="max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Klar til å prøve Jobbleder?
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Opprett faktura, timeliste og tilbud direkte i nettleseren – enkelt,
                raskt og oversiktlig.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://app.jobbleder.no"
                  className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                >
                  Start gratis
                </a>

                <Link
                  href="/instruksjoner"
                  className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-900 hover:bg-gray-100"
                >
                  Se instruksjoner
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}