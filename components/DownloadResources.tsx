import Link from "next/link"
import Container from "@/components/Container"

type ResourceItem = {
  label: string
  href: string
}

type Props = {
  title: string
  description?: string
  items: ResourceItem[]
}

export default function DownloadResources({
  title,
  description,
  items,
}: Props) {
  return (
    <section className="pt-12 pb-16">
      <Container>
        <div className="max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

          {description && (
            <p className="mt-3 text-gray-600">{description}</p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Vil du lage timelister automatisk i stedet? Bruk Jobbleder gratis i nettleseren.
          </p>
        </div>
      </Container>
    </section>
  )
}