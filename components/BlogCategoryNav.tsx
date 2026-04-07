import Link from "next/link"

type Props = {
  active?: string
}

const categories = [
  { label: "Alle", href: "/blogg" },
  { label: "Timeliste", href: "/blogg/kategori/timeliste" },
  { label: "Faktura", href: "/blogg/kategori/faktura" },
  { label: "Tilbud", href: "/blogg/kategori/tilbud" },
  { label: "Kontrakt", href: "/blogg/kategori/kontrakt" },
  { label: "Oversikt", href: "/blogg/kategori/oversikt" },
]

export default function BlogCategoryNav({ active }: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = active === category.label

        return (
          <Link
            key={category.href}
            href={category.href}
            className={
              isActive
                ? "rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white"
            }
          >
            {category.label}
          </Link>
        )
      })}
    </div>
  )
}