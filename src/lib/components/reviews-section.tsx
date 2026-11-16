"use client"

import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect, useRef, useState } from "react"
import { PawPrint } from "@/lib/components/photo-accents"
import { primaryActions } from "@/lib/data/business"
import { reviewSummary, reviews } from "@/lib/data/support"

const reviewColors = [
  "var(--r1)",
  "var(--r2)",
  "var(--r3)",
  "var(--r4)",
  "var(--r5)",
  "var(--r6)",
  "var(--r7)",
] as const

const tagRotations = ["-3deg", "2deg", "-2deg", "3deg"] as const
const tagDelays = ["0s", "-1.1s", "-2.4s", "-0.6s"] as const
const reviewGroups = [0, 1, 2]
const progressPaws = Array.from({ length: 14 }, (_, index) => index)
const logicalSlideCount = reviews.length + 2

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const groupsRef = useRef<Array<HTMLUListElement | null>>([])
  const loopRef = useRef({ start: 0, stride: 0 })
  const loopTimerRef = useRef<number | null>(null)
  const swayTimerRef = useRef<number | null>(null)
  const lastScrollRef = useRef(0)
  const [activePaw, setActivePaw] = useState(0)
  const [scrollSway, setScrollSway] = useState(0)

  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    const firstGroup = groupsRef.current[0]
    const middleGroup = groupsRef.current[1]
    const middleFirstTag = middleGroup?.querySelector<HTMLElement>(
      ".home-reviews__collar-tag",
    )

    if (!scroller || !firstGroup || !middleGroup || !middleFirstTag) return

    const measureAndCenter = () => {
      if (loopTimerRef.current !== null) window.clearTimeout(loopTimerRef.current)

      const firstRect = firstGroup.getBoundingClientRect()
      const middleRect = middleGroup.getBoundingClientRect()
      const trackRect = scroller.getBoundingClientRect()
      const stride = middleRect.left - firstRect.left
      const firstTagPosition =
        middleFirstTag.getBoundingClientRect().left - trackRect.left + scroller.scrollLeft
      const start =
        firstTagPosition + middleFirstTag.offsetWidth / 2 - scroller.clientWidth / 2

      if (stride <= 0) return

      loopRef.current = { start, stride }
      scroller.scrollLeft = start
      lastScrollRef.current = start
    }

    measureAndCenter()

    const resizeObserver = new ResizeObserver(measureAndCenter)
    resizeObserver.observe(scroller)
    resizeObserver.observe(firstGroup)

    return () => {
      resizeObserver.disconnect()
      if (loopTimerRef.current !== null) window.clearTimeout(loopTimerRef.current)
      if (swayTimerRef.current !== null) window.clearTimeout(swayTimerRef.current)
    }
  }, [])

  function handleScroll() {
    const scroller = scrollerRef.current
    const { start, stride } = loopRef.current

    if (!scroller || stride <= 0) return

    const scrollLeft = scroller.scrollLeft
    const progress = (((scrollLeft - start) / stride) % 1 + 1) % 1
    const nextPaw = Math.round(progress * (progressPaws.length - 1))
    const scrollDelta = scrollLeft - lastScrollRef.current
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    lastScrollRef.current = scrollLeft

    setActivePaw((current) => (current === nextPaw ? current : nextPaw))
    setScrollSway(
      reduceMotion ? 0 : Math.max(-1.2, Math.min(1.2, scrollDelta * 0.08)),
    )

    if (swayTimerRef.current !== null) window.clearTimeout(swayTimerRef.current)
    if (!reduceMotion) {
      swayTimerRef.current = window.setTimeout(() => setScrollSway(0), 180)
    }

    // Wait for native touch or smooth scrolling to stop before moving between copies.
    if (loopTimerRef.current !== null) window.clearTimeout(loopTimerRef.current)
    loopTimerRef.current = window.setTimeout(() => {
      const currentScroller = scrollerRef.current
      if (!currentScroller) return

      const distanceFromStart = currentScroller.scrollLeft - start
      if (distanceFromStart < -stride / 2) {
        lastScrollRef.current = currentScroller.scrollLeft + stride
        currentScroller.scrollLeft += stride
      } else if (distanceFromStart > stride / 2) {
        lastScrollRef.current = currentScroller.scrollLeft - stride
        currentScroller.scrollLeft -= stride
      }
    }, 220)
  }

  function moveCarousel(direction: -1 | 1) {
    const scroller = scrollerRef.current
    if (!scroller) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const tag = scroller.querySelector<HTMLElement>(".home-reviews__collar-tag")
    const tagStep = tag ? tag.offsetWidth + 30 : 300

    scroller.scrollBy({
      left: direction * tagStep,
      behavior: reduceMotion ? "auto" : "smooth",
    })
  }

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current
    if (!scroller || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return

    event.preventDefault()
    scroller.scrollBy({ left: event.deltaY, behavior: "auto" })
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault()
      moveCarousel(event.key === "ArrowLeft" ? -1 : 1)
    }
  }

  return (
    <section
      className="home-reviews section-rainbow"
      id="reviews"
      aria-labelledby="home-reviews-title"
    >
      <div className="home-reviews__inner">
        <header className="home-reviews__heading">
          <h2 id="home-reviews-title">What pet parents say</h2>
          <p className="home-reviews__google-summary">
            <span className="home-reviews__google-mark" aria-hidden="true">G</span>
            <span>
              {reviewSummary.rating} on {reviewSummary.platform} from {reviewSummary.count} reviews
            </span>
          </p>
        </header>

        <div className="home-reviews__carousel">
          <div
            className="home-reviews__scroller"
            ref={scrollerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
            tabIndex={0}
            onScroll={handleScroll}
            onWheel={handleWheel}
            onKeyDown={handleKeyDown}
          >
            <div
              className="home-reviews__collar"
              style={{ "--scroll-sway": `${scrollSway}deg` } as React.CSSProperties}
            >
              {reviewGroups.map((groupIndex) => {
                const isVisibleGroup = groupIndex === 1

                return (
                  <ul
                    className="home-reviews__group"
                    key={groupIndex}
                    ref={(element) => {
                      groupsRef.current[groupIndex] = element
                    }}
                    aria-hidden={!isVisibleGroup}
                    inert={!isVisibleGroup}
                  >
                    <li
                      className="home-reviews__collar-tag"
                      style={{
                        "--tag-rotation": tagRotations[0],
                        "--sway-delay": tagDelays[0],
                      } as React.CSSProperties}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`1 of ${logicalSlideCount}: Google rating`}
                    >
                      <div className="home-reviews__ticket home-reviews__ticket--rating">
                        <span className="home-reviews__rating-number">{reviewSummary.rating}</span>
                        <span className="home-reviews__stars" role="img" aria-label="5 out of 5 stars">
                          <span aria-hidden="true">★★★★★</span>
                        </span>
                        <span className="home-reviews__rating-count">
                          {reviewSummary.count} Google reviews
                        </span>
                      </div>
                    </li>

                    {reviews.map((review, reviewIndex) => {
                      const tagIndex = reviewIndex + 1

                      return (
                        <li
                          className="home-reviews__collar-tag"
                          key={review.author}
                          style={{
                            "--tag-rotation": tagRotations[tagIndex % tagRotations.length],
                            "--sway-delay": tagDelays[tagIndex % tagDelays.length],
                          } as React.CSSProperties}
                          role="group"
                          aria-roledescription="slide"
                          aria-label={`${tagIndex + 1} of ${logicalSlideCount}: review by ${review.author}`}
                        >
                          <article className="home-reviews__ticket home-reviews__ticket--quote">
                            <span className="home-reviews__stars" role="img" aria-label="5 out of 5 stars">
                              <span aria-hidden="true">★★★★★</span>
                            </span>
                            <blockquote>{review.quote}</blockquote>
                            <p className="home-reviews__reviewer">{review.author}</p>
                          </article>
                        </li>
                      )
                    })}

                    <li
                      className="home-reviews__collar-tag"
                      style={{
                        "--tag-rotation": tagRotations[3],
                        "--sway-delay": tagDelays[3],
                      } as React.CSSProperties}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${logicalSlideCount} of ${logicalSlideCount}: booking`}
                    >
                      <div className="home-reviews__ticket home-reviews__ticket--cta">
                        <Image
                          className="home-reviews__logo"
                          src="/logo/rainbow-paws-dog-mark.png"
                          alt="Rainbow Paws"
                          width={68}
                          height={68}
                        />
                        <p>Your dog next?</p>
                        <Link href={primaryActions.booking.href}>
                          {primaryActions.booking.label}
                        </Link>
                      </div>
                    </li>
                  </ul>
                )
              })}
            </div>
          </div>

          <div className="home-reviews__controls">
            <button
              className="home-reviews__arrow"
              type="button"
              aria-label="Previous reviews"
              onClick={() => moveCarousel(-1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5 8 12l7 7" />
              </svg>
            </button>

            <ol className="home-reviews__progress" aria-hidden="true">
              {progressPaws.map((paw) => (
                <li
                  className={paw === activePaw ? "is-active" : undefined}
                  key={paw}
                  style={{
                    "--paw-color": reviewColors[paw % reviewColors.length],
                    "--paw-offset": paw % 2 === 0 ? "-13px" : "13px",
                  } as React.CSSProperties}
                >
                  <PawPrint />
                </li>
              ))}
            </ol>

            <button
              className="home-reviews__arrow"
              type="button"
              aria-label="Next reviews"
              onClick={() => moveCarousel(1)}
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
