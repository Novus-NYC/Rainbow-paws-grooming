"use client"

import { useEffect } from "react"

export default function GalleryRevealObserver() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".gallery-page")
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const items = page.querySelectorAll<HTMLElement>("[data-gallery-reveal]")
    if (!("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2 },
    )

    page.classList.add("gallery-page--reveal-ready")
    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      page.classList.remove("gallery-page--reveal-ready")
    }
  }, [])

  return null
}
