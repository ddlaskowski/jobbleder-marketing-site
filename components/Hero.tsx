import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Lag faktura, timeliste og tilbud på minutter
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Gratis nettbasert verktøy for håndverkere og små bedrifter i Norge.
            Ingen installasjon – alt fungerer i nettleseren.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://app.jobbleder.no"
              className="bg-blue-600 text-white px-6 py-3 rounded"
            >
              Start gratis
            </a>

            <a
              href="#how"
              className="border px-6 py-3 rounded"
            >
              Se hvordan det fungerer
            </a>
          </div>

        </div>

        <div>
          <Image
            src="/app-preview.png"
            alt="Jobbleder app"
            width={700}
            height={500}
            className="rounded shadow"
          />
        </div>

      </div>
    </section>
  )
}