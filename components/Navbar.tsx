import Link from "next/link"
import Container from "@/components/Container"

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/instruksjoner", label: "Instruksjoner" },
  { href: "/blogg", label: "Blogg" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Jobbleder
          </Link>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://app.jobbleder.no"
              className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Login
            </a>
          </div>
        </div>
      </Container>
    </nav>
  )
}