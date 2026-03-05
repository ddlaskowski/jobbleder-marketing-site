export default function Footer() {
  return (
    <footer className="py-10 border-t mt-20">
      <div className="max-w-6xl mx-auto flex justify-between">

        <div>
          <strong>Jobbleder</strong>
          <p className="text-sm text-gray-500">
            Faktura, timelister og tilbud.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="/instruksjoner">Instruksjoner</a>
          <a href="/blogg">Blogg</a>
          <a href="/om-oss">Om oss</a>
        </div>

      </div>
    </footer>
  )
}