import Container from "@/components/Container"

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="rounded-2xl border bg-gray-50 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Start gratis i dag</h2>
            <p className="mt-3 text-gray-600">
              Lag faktura, timeliste og tilbud på minutter. Ingen installasjon – alt i nettleseren.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://app.jobbleder.no"
              className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Start gratis
            </a>
            <a
              href="/timeliste-mal"
              className="inline-flex rounded-lg border bg-white px-6 py-3 font-medium hover:bg-gray-100"
            >
              Se timeliste mal
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}