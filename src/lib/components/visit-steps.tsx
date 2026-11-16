"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"
import { groomingSteps } from "@/lib/data/services"
import { primaryActions } from "@/lib/data/business"

const photoClipPath = Array.from({ length: 180 }, (_, index) => {
  const angle = (index / 180) * Math.PI * 2
  const radius = 0.425 + 0.075 * Math.abs(Math.sin(4.5 * angle))
  const x = (0.5 + radius * Math.cos(angle)).toFixed(3)
  const y = (0.5 + radius * Math.sin(angle)).toFixed(3)

  return `${index === 0 ? "M" : "L"}${x} ${y}`
}).join("") + "Z"

const pawPath =
  "M12 13c-2.8 0-5 2-5 4.2 0 1.6 1.3 2.8 3 2.8 1 0 1.4-.4 2-.4s1 .4 2 .4c1.7 0 3-1.2 3-2.8 0-2.2-2.2-4.2-5-4.2zM5.5 11c1.1 0 2-1.1 2-2.5S6.6 6 5.5 6s-2 1.1-2 2.5S4.4 11 5.5 11zm13 0c1.1 0 2-1.1 2-2.5S19.6 6 18.5 6s-2 1.1-2 2.5.9 2.5 2 2.5zM9.5 8.5c1.1 0 2-1.3 2-2.8S10.6 3 9.5 3s-2 1.2-2 2.7.9 2.8 2 2.8zm5 0c1.1 0 2-1.3 2-2.8S15.6 3 14.5 3s-2 1.2-2 2.7.9 2.8 2 2.8z"

const stepAccents = ["var(--r2)", "var(--r3)", "var(--r4)", "var(--r5)", "var(--r6)"]
const trailPaws = [
  { x: 14, y: 61, rotation: -58, scale: 0.935, opacity: 0.4 },
  { x: 42, y: 55, rotation: -38, scale: 1.045, opacity: 0.54 },
  { x: 72, y: 35, rotation: -14, scale: 1.155, opacity: 0.68 },
  { x: 104, y: 31, rotation: 16, scale: 1.265, opacity: 0.82 },
  { x: 134, y: 9, rotation: 44, scale: 1.375, opacity: 0.96 },
]

function TimelinePaw({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={pawPath} />
    </svg>
  )
}

export function VisitSteps() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !("IntersectionObserver" in window)) return

    const items = Array.from(
      section.querySelectorAll<HTMLElement>(".home-visit__step"),
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("in")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2 },
    )

    section.classList.add("home-visit--reveal-ready")
    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * 0.08}s`)
      observer.observe(item)
    })

    return () => {
      observer.disconnect()
      section.classList.remove("home-visit--reveal-ready")
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="home-visit section-rainbow"
      id="visit"
      aria-labelledby="home-visit-title"
    >
      <div className="home-visit__inner">
        <div className="home-visit__intro">
          <h2 id="home-visit-title">What your dog’s visit looks like</h2>
          <p>
            Owners of nervous dogs ask this first, so here it is, step by step.
          </p>
          <Link className="home-visit__button" href={primaryActions.booking.href}>
            {primaryActions.booking.label}
          </Link>

          <figure className="home-visit__photo">
            <svg className="home-visit__svg-defs" aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="home-visit-photo-clip" clipPathUnits="objectBoundingBox">
                  <path d={photoClipPath} />
                </clipPath>
              </defs>
            </svg>

            <div className="home-visit__photo-frame sh sc rr">
              <Image
                src="/wynter/wynter-2.webp"
                alt="The groomer gently drying a white dog."
                fill
                sizes="(max-width: 390px) 64vw, 250px"
                className="home-visit__image"
              />

              <span
                className="home-visit__doodle home-visit__blob"
                style={{ "--doodle-delay": "0s" } as CSSProperties}
                aria-hidden="true"
              >
                <b>
                  <svg viewBox="0 0 100 100">
                    <path d="M50 4C70 0 86 14 94 34 102 56 88 82 66 92 44 100 18 90 8 68 -2 46 10 12 50 4Z" />
                  </svg>
                </b>
              </span>

              <span
                className="home-visit__doodle home-visit__paw-trail"
                style={{ "--doodle-delay": "-0.9s" } as CSSProperties}
                aria-hidden="true"
              >
                <b>
                  <svg viewBox="0 0 150 84">
                    {trailPaws.map((paw, index) => (
                      <path
                        key={index}
                        d={pawPath}
                        transform={`translate(${paw.x} ${paw.y}) rotate(${paw.rotation}) scale(${paw.scale}) translate(-12 -12)`}
                        opacity={paw.opacity}
                      />
                    ))}
                  </svg>
                </b>
              </span>

              <span
                className="home-visit__doodle home-visit__heart"
                style={{ "--doodle-delay": "-1.8s" } as CSSProperties}
                aria-hidden="true"
              >
                <b>
                  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21C4.5 15.8 2 11.5 4.7 7.2 7 3.8 10.8 4.6 12 7.8 13.2 4.6 17 3.8 19.3 7.2 22 11.5 19.5 15.8 12 21Z" />
                  </svg>
                </b>
              </span>

              <span
                className="home-visit__doodle home-visit__sparkle"
                style={{ "--doodle-delay": "-2.7s" } as CSSProperties}
                aria-hidden="true"
              >
                <b>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 1.5c.9 6.5 3.6 9.6 10.5 10.5-6.9 1-9.6 4-10.5 10.5C11.1 16.5 8.4 13.5 1.5 12 8.4 11.1 11.1 8 12 1.5Z" />
                  </svg>
                </b>
              </span>
            </div>
          </figure>
        </div>

        <ol className="home-visit__steps">
          {groomingSteps.map((step, index) => (
            <li
              className="home-visit__step"
              key={step.title}
              style={
                {
                  "--step-accent": stepAccents[index],
                  "--reveal-delay": `${index * 0.08}s`,
                } as CSSProperties
              }
            >
              <TimelinePaw className="home-visit__marker" />
              <h3 className="home-visit__step-title">{step.title}</h3>
              <span className="home-visit__step-description">
                {step.description}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
