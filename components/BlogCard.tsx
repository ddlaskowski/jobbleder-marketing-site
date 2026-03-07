import Link from "next/link"

type Props = {
  title: string
  slug: string
  summary: string
  category: string
  createdAt: string
  tags: string[]
}

export default function BlogCard({
  title,
  slug,
  summary,
  category,
  createdAt,
  tags,
}: Props) {
  return (
    <Link
      href={`/blogg/${slug}`}
      className="group rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-700">
          {category}
        </span>
        <span className="text-gray-500">{createdAt}</span>
      </div>

      <h2 className="mt-4 text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h2>

      <p className="mt-3 text-gray-600 leading-7">{summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-6 text-sm font-medium text-blue-600">
        Les artikkel →
      </div>
    </Link>
  )
}