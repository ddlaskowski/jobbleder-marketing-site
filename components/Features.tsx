export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="text-xl font-semibold">Faktura</h3>
          <p className="mt-3 text-gray-600">
            Lag profesjonelle fakturaer på sekunder.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Timeliste</h3>
          <p className="mt-3 text-gray-600">
            Registrer arbeidstid enkelt hver dag.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Tilbud</h3>
          <p className="mt-3 text-gray-600">
            Lag tilbud og konverter til faktura.
          </p>
        </div>

      </div>
    </section>
  )
}