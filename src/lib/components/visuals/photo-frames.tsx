import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"
import { OrganicShape } from "@/lib/components/visuals/photo-accents"

export type PhotoShape = "scallop" | "blob" | "cloud" | "flower"

/* Outlines are generated once, in 0..1 box units, so they stretch to any
   frame size. */
function outline(points: number, radius: (t: number) => number) {
  let d = ""
  for (let i = 0; i < points; i++) {
    const t = (i / points) * Math.PI * 2
    const r = radius(t)
    d += `${i ? "L" : "M"}${(0.5 + r * Math.cos(t)).toFixed(3)} ${(0.5 + r * Math.sin(t)).toFixed(3)}`
  }
  return `${d}Z`
}

const SHAPES = {
  scallop: outline(180, (t) => 0.425 + 0.075 * Math.abs(Math.sin(4.5 * t))), // 9 lobes
  cloud: outline(180, (t) => 0.42 + 0.08 * Math.abs(Math.sin(3 * t))), // 6 soft lobes
  flower: outline(240, (t) => 0.34 + 0.16 * Math.abs(Math.cos(2.5 * t))), // 5 petals
  blob: "M.52.03C.72 0 .93.12.97.34 1 .52.9.62.93.78.96.93.78 1 .58.97.4.94.3.99.16.9 0 .8.05.6.03.45 0 .25.1.08.52.03Z",
} as const

/** Render once per page. Holds the clip paths the frames point at. */
export function PhotoShapeDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", pointerEvents: "none" }}
    >
      <defs>
        {Object.entries(SHAPES).map(([name, d]) => (
          <clipPath key={name} id={`photo-shape-${name}`} clipPathUnits="objectBoundingBox">
            <path d={d} />
          </clipPath>
        ))}
      </defs>
    </svg>
  )
}

type PhotoFrameProps = {
  src: string
  alt: string
  sizes: string
  shape: PhotoShape
  /** colour of the offset shape behind the white border */
  accent?: string
  /** soft organic blob tucked behind the frame */
  backdrop?: string
  /** offset of the accent shape in px: [x, y] */
  offset?: [number, number]
  priority?: boolean
  className?: string
  /** <Accent> doodles; positioned relative to the frame */
  children?: ReactNode
}

export function PhotoFrame({
  src,
  alt,
  sizes,
  shape,
  accent = "var(--aqua)",
  backdrop,
  offset = [12, 12],
  priority,
  className,
  children,
}: PhotoFrameProps) {
  const style = {
    "--accent": accent,
    "--ox": `${offset[0]}px`,
    "--oy": `${offset[1]}px`,
  } as CSSProperties

  return (
    <div className={`photo-frame photo-frame--${shape} ${className ?? ""}`} style={style}>
      {backdrop ? (
        <span className="photo-frame__backdrop" style={{ color: backdrop }} aria-hidden="true">
          <OrganicShape />
        </span>
      ) : null}
      <div className="photo-frame__shape">
        <span className="photo-frame__layer photo-frame__offset" aria-hidden="true" />
        <span className="photo-frame__layer photo-frame__edge" aria-hidden="true" />
        <div className="photo-frame__layer photo-frame__photo">
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        </div>
      </div>
      {children}
    </div>
  )
}
