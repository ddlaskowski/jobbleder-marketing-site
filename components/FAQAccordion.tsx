"use client"

import { useId, useState } from "react"

type FAQ = {
  q: string
  a: string
}

type Props = {
  items: FAQ[]
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const id = useId()

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
            type="button"
            aria-expanded={openIndex === i}
            aria-controls={`${id}-answer-${i}`}
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            <span className="font-semibold text-gray-900">{f.q}</span>

            <span aria-hidden="true" className="text-gray-500">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          <div id={`${id}-answer-${i}`} hidden={openIndex !== i} className="px-6 pb-5 text-gray-600">
            {f.a}
          </div>
        </div>
      ))}
    </div>
  )
}
