import Link from "next/link"

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
          <Link href="/instruksjoner">Instruksjoner</Link>
          <Link href="/blogg">Blogg</Link>
          <Link href="/om-oss">Om oss</Link>
        </div>

      </div>
    </footer>
  )
}
