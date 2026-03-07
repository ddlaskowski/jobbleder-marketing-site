import Container from "@/components/Container"

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Faktura</h3>
            <p className="mt-3 text-gray-600">
              Lag profesjonelle fakturaer på sekunder.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Timeliste</h3>
            <p className="mt-3 text-gray-600">
              Registrer arbeidstid enkelt hver dag.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Tilbud</h3>
            <p className="mt-3 text-gray-600">
              Lag tilbud og konverter til faktura.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}