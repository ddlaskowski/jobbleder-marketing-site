import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">

        <div className="font-bold text-xl">
          Jobbleder
        </div>

        <div className="flex gap-6 items-center">

          <Link href="/">Hjem</Link>
          <Link href="/instruksjoner">Instruksjoner</Link>
          <Link href="/blogg">Blogg</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/kontakt">Kontakt</Link>

          <a
            href="https://app.jobbleder.no"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </a>

        </div>

      </div>
    </nav>
  )
}