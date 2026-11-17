"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"

const archColors = [
  "var(--r1)",
  "var(--r2)",
  "var(--r3)",
  "var(--r4)",
  "var(--r5)",
  "var(--r6)",
  "var(--r7)",
] as const

type LoadingPhase = "visible" | "fading" | "gone"

export function LoadingScreen() {
  const [phase, setPhase] = useState<LoadingPhase>("visible")
  const overlayRef = useRef<HTMLDivElement>(null)
  const isGone = phase === "gone"

  useEffect(() => {
    if (isGone || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const previousOverflow = document.body.style.overflow
    const backgroundElements = Array.from(document.body.children)
      .filter((element) => element !== overlayRef.current)
      .map((element) => {
        const htmlElement = element as HTMLElement
        const wasInert = htmlElement.inert
        htmlElement.inert = true
        return { element: htmlElement, wasInert }
      })

    document.body.style.overflow = "hidden"

    const fadeTimer = window.setTimeout(() => setPhase("fading"), 2000)
    const finishTimer = window.setTimeout(() => setPhase("gone"), 2700)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(finishTimer)
      document.body.style.overflow = previousOverflow
      backgroundElements.forEach(({ element, wasInert }) => {
        element.inert = wasInert
      })
    }
  }, [isGone])

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const fadeTimer = window.setTimeout(
      () => setPhase(reducedMotion ? "gone" : "fading"),
      reducedMotion ? 0 : 2000,
    )
    const finishTimer = reducedMotion
      ? undefined
      : window.setTimeout(() => setPhase("gone"), 2700)

    return () => {
      window.clearTimeout(fadeTimer)
      if (finishTimer !== undefined) window.clearTimeout(finishTimer)
    }
  }, [])

  if (phase === "gone") return null

  return (
    <div
      ref={overlayRef}
      className={`loading-screen${phase === "fading" ? " loading-screen--fading" : ""}`}
      role="status"
      aria-label="Loading Rainbow Paws Grooming"
    >
      <div className="loading-screen__rainbow" aria-hidden="true">
        {archColors.map((color, index) => (
          <span
            className="loading-screen__arch"
            key={color}
            style={{
              "--arch-color": color,
              "--arch-inset": `${index * 11.3}%`,
              "--arch-delay": `${0.1 + index * 0.1}s`,
            } as CSSProperties}
          />
        ))}
        <Image
          className="loading-screen__logo"
          src="/logo/rainbow-paws-dog-mark.png"
          alt=""
          width={189}
          height={189}
          priority
        />
      </div>
      <p className="loading-screen__name">Rainbow Paws Grooming</p>
    </div>
  )
}
