"use client"

import { useState } from "react"

type FAQ = {
  q: string
  a: string
}

type Props = {
  items: FAQ[]
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="mt-8 space-y-4">
      {items.map((f, i) => (
        <div
          key={f.q}
          className="rounded-xl border border-gray-200 bg-white"
        >
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-semibold text-gray-900">{f.q}</span>

            <span className="text-gray-500">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          {openIndex === i && (
            <div className="px-6 pb-5 text-gray-600">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}