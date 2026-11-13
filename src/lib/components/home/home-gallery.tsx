"use client"

import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect, useRef, useState } from "react"
import {
  BurstDoodle,
  PawPrint,
  SparkleDoodle,
} from "@/lib/components/photo-accents"
import { primaryActions } from "@/lib/data/business"
import { homepageGalleryItems } from "@/lib/data/gallery"

const galleryColors = [
  "var(--r1)",
  "var(--r3)",
  "var(--r5)",
  "var(--r7)",
  "var(--r2)",
] as const

const galleryDecorations = [
  BurstDoodle,
  PawPrint,
  SparkleDoodle,
  BurstDoodle,
  PawPrint,
] as const

const progressColors = [
  "var(--r1)",
  "var(--r2)",
  "var(--r3)",
  "var(--r4)",
  "var(--r5)",
  "var(--r6)",
  "var(--r7)",
] as const

const progressPaws = Array.from({ length: 14 }, (_, index) => index)
const galleryGroups = [0, 1, 2]

export function HomeGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const groupsRef = useRef<Array<HTMLUListElement | null>>([])
  const loopRef = useRef({ start: 0, stride: 0 })
  const loopTimerRef = useRef<number | null>(null)
  const [activePaw, setActivePaw] = useState(0)

  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    const groups = groupsRef.current
    const middleGroup = groups[1]
    const firstGroup = groups[0]

    if (!scroller || !middleGroup || !firstGroup) return

    const updateMeasurements = () => {
      const scrollLeft = scroller.scrollLeft
      const firstRect = firstGroup.getBoundingClientRect()
      const middleRect = middleGroup.getBoundingClientRect()
      const stride = middleRect.left - firstRect.left
      const start = middleRect.left - scroller.getBoundingClientRect().left + scrollLeft

      if (stride <= 0) return

      loopRef.current = { start, stride }
      scroller.scrollLeft = start
    }

    updateMeasurements()

    const resizeObserver = new ResizeObserver(updateMeasurements)
    resizeObserver.observe(scroller)
    resizeObserver.observe(firstGroup)

    return () => {
      resizeObserver.disconnect()
      if (loopTimerRef.current !== null) window.clearTimeout(loopTimerRef.current)
    }
  }, [])

  function handleScroll() {
    const scroller = scrollerRef.current
    const { start, stride } = loopRef.current

    if (!scroller || stride <= 0) return

    const scrollLeft = scroller.scrollLeft
    const progress = (((scrollLeft - start) / stride) % 1 + 1) % 1
    const nextPaw = Math.round(progress * (progressPaws.length - 1))
    setActivePaw((currentPaw) => (currentPaw === nextPaw ? currentPaw : nextPaw))

    // Recenter only after scrolling settles. Adjusting scrollLeft mid-smooth-scroll
    // changes the browser's animation target and can make the strip jump.
    if (loopTimerRef.current !== null) window.clearTimeout(loopTimerRef.current)
    loopTimerRef.current = window.setTimeout(() => {
      const currentScroller = scrollerRef.current
      if (!currentScroller) return

      const distanceFromMiddle = currentScroller.scrollLeft - start
      if (distanceFromMiddle < -stride / 2) {
        currentScroller.scrollLeft += stride
      } else if (distanceFromMiddle > stride / 2) {
        currentScroller.scrollLeft -= stride
      }
    }, 220)
  }

  function moveStrip(direction: -1 | 1) {
    const scroller = scrollerRef.current

    if (!scroller) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.7,
      behavior: reduceMotion ? "auto" : "smooth",
    })
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault()
      moveStrip(event.key === "ArrowLeft" ? -1 : 1)
    }
  }

  return (
    <section
      className="home-gallery section-rainbow"
      id="gallery"
      aria-labelledby="home-gallery-title"
    >
      <div className="home-gallery__inner">
        <header className="home-gallery__heading">
          <h2 id="home-gallery-title">Fresh from the studio</h2>
          <Link className="home-gallery__button" href={primaryActions.gallery.href}>
            See the Full Gallery
          </Link>
        </header>

        <div className="home-gallery__carousel">
          <div
            className="home-gallery__track"
            ref={scrollerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery photos"
            tabIndex={0}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
          >
            {galleryGroups.map((groupIndex) => (
              <ul
                className="home-gallery__group"
                key={groupIndex}
                ref={(element) => {
                  groupsRef.current[groupIndex] = element
                }}
                aria-hidden={groupIndex !== 1}
                inert={groupIndex !== 1}
              >
                {homepageGalleryItems.map((item, itemIndex) => {
                  const Decoration =
                    galleryDecorations[itemIndex % galleryDecorations.length]
                  const isVisibleGroup = groupIndex === 1

                  return (
                    <li
                      className="home-gallery__card"
                      key={`${groupIndex}-${item.title}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${itemIndex + 1} of ${homepageGalleryItems.length}: ${item.title}`}
                    >
                      <div
                        className="home-gallery__photo-wrap"
                        style={{
                          "--card-accent":
                            galleryColors[itemIndex % galleryColors.length],
                          "--card-rotation": itemIndex % 2 === 0 ? "-1.5deg" : "1.2deg",
                        } as React.CSSProperties}
                      >
                        <div className="home-gallery__photo">
                          <Image
                            src={item.src}
                            alt={isVisibleGroup ? item.alt : ""}
                            fill
                            sizes="(max-width: 420px) 78vw, 300px"
                            loading="lazy"
                          />
                          {item.comparison && (
                            <>
                              <span className="home-gallery__photo-tag home-gallery__photo-tag--before" aria-hidden="true">
                                Before
                              </span>
                              <span className="home-gallery__photo-tag home-gallery__photo-tag--after" aria-hidden="true">
                                After
                              </span>
                            </>
                          )}
                        </div>
                        <Decoration
                          className={`home-gallery__decoration home-gallery__decoration--${itemIndex + 1}`}
                        />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </li>
                  )
                })}
              </ul>
            ))}
          </div>

          <div className="home-gallery__controls">
            <button
              className="home-gallery__arrow"
              type="button"
              aria-label="Previous gallery photos"
              onClick={() => moveStrip(-1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5 8 12l7 7" />
              </svg>
            </button>

            <ol className="home-gallery__progress" aria-hidden="true">
              {progressPaws.map((paw) => (
                <li
                  className={paw === activePaw ? "is-active" : undefined}
                  key={paw}
                  style={
                    {
                      "--paw-color": progressColors[paw % progressColors.length],
                      "--paw-offset": paw % 2 === 0 ? "10px" : "-10px",
                    } as React.CSSProperties
                  }
                >
                  <PawPrint />
                </li>
              ))}
            </ol>

            <button
              className="home-gallery__arrow"
              type="button"
              aria-label="Next gallery photos"
              onClick={() => moveStrip(1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
