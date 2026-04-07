import Container from "@/components/Container"

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Tilbud</h3>
            <p className="mt-3 text-gray-600">
              Lag profesjonelle tilbud og vinn oppdrag.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-gray-900">Kontrakt</h3>
              <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600 ring-1 ring-green-200">
                Ny
              </span>
            </div>
            <p className="mt-3 text-gray-600">
              Opprett kontrakter og sikre avtalen med kunden.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Timeliste</h3>
            <p className="mt-3 text-gray-600">
              Registrer arbeidstid enkelt hver dag.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Faktura</h3>
            <p className="mt-3 text-gray-600">
              Send faktura basert på arbeid eller avtale.
            </p>
          </div>

        </div>
      </Container>
    </section>
  )
}