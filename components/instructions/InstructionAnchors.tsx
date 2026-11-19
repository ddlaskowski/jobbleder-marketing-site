"use client"

import { useEffect } from "react"

// Native disclosures remain usable without JS. Enhance incoming/same-page anchors
// so a direct instruction link also reveals its content and moves keyboard focus.
export default function InstructionAnchors() {
  useEffect(() => {
    const reveal = (hash: string) => {
      let id: string
      try { id = decodeURIComponent(hash.replace(/^#/, "")) } catch { return }
      const target = document.getElementById(id)
      if (!target || !target.closest("[data-instructions]")) return
      let disclosure = target.closest("details")
      while (disclosure) {
        disclosure.open = true
        disclosure = disclosure.parentElement?.closest("details") ?? null
      }
      const focusTarget = target instanceof HTMLDetailsElement ? target.querySelector("summary")
        : target.tagName === "SECTION" ? target.querySelector("h2, h4") ?? target : target
      if (focusTarget instanceof HTMLElement) focusTarget.focus({ preventScroll: true })
      target.scrollIntoView({ block: "start" })
    }
    const hashChange = () => reveal(window.location.hash)
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null
      if (!(link instanceof HTMLAnchorElement)) return
      const url = new URL(link.href)
      if (url.origin === location.origin && url.pathname === location.pathname && url.search === location.search && url.hash) reveal(url.hash)
    }
    hashChange()
    window.addEventListener("hashchange", hashChange)
    document.addEventListener("click", click)
    return () => { window.removeEventListener("hashchange", hashChange); document.removeEventListener("click", click) }
  }, [])
  return null
}
