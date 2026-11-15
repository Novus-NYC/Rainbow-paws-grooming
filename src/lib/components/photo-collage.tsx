import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"

/* ------------------------------------------------------------------ */
/* Shapes                                                              */
/* ------------------------------------------------------------------ */
/* Photo frames are "pebbles": rounded squares with a gentle wobble and a
   slight lean. Every pebble is a little different, so the group feels like
   one family and nothing reads as a circle, arch or cloud.
   n = squareness, waves = [count, strength, phase], lean = shear. */
type Waves = readonly (readonly [number, number, number])[]
type Pebble = { n: number; waves: Waves; lean: number }

const PEBBLES = {
  a: { n: 3.2, waves: [[2, 0.035, 0.3], [3, 0.03, 1.4], [4, 0.02, 2.2]], lean: 0.05 },
  b: { n: 3.6, waves: [[2, 0.04, 2.2], [3, 0.03, 0.5], [5, 0.015, 1.1]], lean: -0.04 },
  c: { n: 3.0, waves: [[3, 0.04, 0.9], [2, 0.03, 2.6], [4, 0.02, 0.3]], lean: 0.03 },
  d: { n: 3.4, waves: [[2, 0.03, 1.1], [4, 0.03, 2.0], [3, 0.02, 0.2]], lean: -0.05 },
  e: { n: 3.1, waves: [[3, 0.035, 2.4], [2, 0.04, 0.7], [5, 0.015, 0.4]], lean: 0.06 },
  f: { n: 3.5, waves: [[2, 0.045, 0.6], [3, 0.025, 1.9], [4, 0.02, 2.8]], lean: -0.03 },
} as const satisfies Record<string, Pebble>

/* Big soft shapes that sit behind a whole group of photos. */
const BACKDROPS = {
  w1: [[2, 0.1, 0.4], [3, 0.08, 2.1], [4, 0.04, 1.0]],
  w2: [[2, 0.09, 1.6], [3, 0.1, 0.2], [5, 0.035, 2.4]],
  w3: [[1, 0.08, 0.3], [2, 0.1, 2.5], [3, 0.06, 1.2]],
} as const satisfies Record<string, Waves>

export type PebbleName = keyof typeof PEBBLES
export type BackdropName = keyof typeof BACKDROPS

/** Stretch a closed outline to fill the 0..1 box so frames crop predictably. */
function fit(points: [number, number][]) {
  const xs = points.map((p) => p[0])
  const ys = points.map((p) => p[1])
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  return (
    points
      .map(([x, y], i) => `${i ? "L" : "M"}${((x - x0) / (x1 - x0)).toFixed(3)} ${((y - y0) / (y1 - y0)).toFixed(3)}`)
      .join("") + "Z"
  )
}

function pebblePath({ n, waves, lean }: Pebble) {
  const points: [number, number][] = []
  for (let i = 0; i < 220; i++) {
    const t = (i / 220) * Math.PI * 2
    const c = Math.cos(t)
    const s = Math.sin(t)
    let wobble = 1
    for (const [k, amp, phase] of waves) wobble += amp * Math.cos(k * t + phase)
    const x = Math.sign(c) * Math.abs(c) ** (2 / n) * wobble
    const y = Math.sign(s) * Math.abs(s) ** (2 / n) * wobble
    points.push([x + lean * y, y])
  }
  return fit(points)
}

function backdropPath(waves: Waves) {
  const points: [number, number][] = []
  for (let i = 0; i < 200; i++) {
    const t = (i / 200) * Math.PI * 2
    let r = 0.4
    for (const [k, amp, phase] of waves) r += amp * Math.cos(k * t + phase)
    points.push([r * Math.cos(t), r * Math.sin(t)])
  }
  return fit(points)
}

const PEBBLE_PATHS = Object.fromEntries(
  Object.entries(PEBBLES).map(([name, p]) => [name, pebblePath(p)]),
) as Record<PebbleName, string>

const BACKDROP_PATHS = Object.fromEntries(
  Object.entries(BACKDROPS).map(([name, w]) => [name, backdropPath(w)]),
) as Record<BackdropName, string>

/** Render once per page: the clip paths the photo frames use. */
export function CollageDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute", pointerEvents: "none" }}>
      <defs>
        {(Object.keys(PEBBLE_PATHS) as PebbleName[]).map((name) => (
          <clipPath key={name} id={`collage-shape-${name}`} clipPathUnits="objectBoundingBox">
            <path d={PEBBLE_PATHS[name]} />
          </clipPath>
        ))}
      </defs>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Collage                                                             */
/* ------------------------------------------------------------------ */
/* All numbers are in % of the collage width (1cqw), so the whole group
   scales as one piece. Use the same `accent` for every photo in a group. */
export type CollageItem = {
  src: string
  alt: string
  shape: PebbleName
  /** left / top / width, and width ÷ height */
  x: number
  y: number
  w: number
  ratio: number
  /** colour of the soft offset shape behind the white border */
  accent: string
  z?: number
  rotate?: number
  /** CSS object-position, to keep the dog in frame (default "50% 35%") */
  focus?: string
}

export type CollageBackdrop = {
  shape: BackdropName
  color: string
  x: number
  y: number
  w: number
  h: number
  opacity?: number
  rotate?: number
}

type PhotoCollageProps = {
  items: readonly CollageItem[]
  backdrops?: readonly CollageBackdrop[]
  /** collage height ÷ width */
  height: number
  /** max width in px */
  maxWidth?: number
  sizes: string
  label?: string
  className?: string
  /** <Accent> doodles, placed in cqw (see photo-accents.tsx) */
  children?: ReactNode
}

export function PhotoCollage({
  items,
  backdrops = [],
  height,
  maxWidth = 500,
  sizes,
  label,
  className,
  children,
}: PhotoCollageProps) {
  return (
    <div
      className={`photo-collage ${className ?? ""}`}
      style={{ "--max": `${maxWidth}px`, "--ratio": `1 / ${height}` } as CSSProperties}
      role={label ? "group" : undefined}
      aria-label={label}
    >
      {backdrops.map((b, i) => (
        <span
          key={i}
          className="photo-collage__backdrop"
          aria-hidden="true"
          style={
            {
              "--x": b.x,
              "--y": b.y,
              "--w": b.w,
              "--h": b.h,
              "--c": b.color,
              "--o": b.opacity ?? 0.3,
              "--r": `${b.rotate ?? 0}deg`,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 1 1" preserveAspectRatio="none">
            <path d={BACKDROP_PATHS[b.shape]} fill="currentColor" />
          </svg>
        </span>
      ))}

      {items.map((item, i) => (
        <div
          key={item.src}
          className="photo-collage__item"
          style={
            {
              "--x": item.x,
              "--y": item.y,
              "--w": item.w,
              "--ar": item.ratio,
              "--z": item.z ?? 1,
              "--r": `${item.rotate ?? 0}deg`,
              "--accent": item.accent,
              "--clip": `url(#collage-shape-${item.shape})`,
            } as CSSProperties
          }
        >
          <div className="photo-collage__shape">
            <span className="photo-collage__layer photo-collage__offset" aria-hidden="true" />
            <span className="photo-collage__layer photo-collage__edge" aria-hidden="true" />
            <div className="photo-collage__layer photo-collage__photo">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={sizes}
                priority={i < 2}
                style={{ objectPosition: item.focus ?? "50% 35%" }}
              />
            </div>
          </div>
        </div>
      ))}

      {children}
    </div>
  )
}
