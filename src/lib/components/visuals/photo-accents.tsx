import type { CSSProperties, ReactNode } from "react"

type PhotoAccentProps = {
  className?: string
}

/* ------------------------------------------------------------------ */
/* Placement helper                                                    */
/* ------------------------------------------------------------------ */
/* Every accent is sized and placed in `cqw` (1% of the nearest        */
/* container's width), so it scales with the photo at any breakpoint.  */
/* The parent must have `container-type: inline-size`                  */
/* (PhotoFrame and the about hero stack already do).                   */
/*                                                                     */
/*  a + g   polar placement around a centered photo frame. `a` is degrees */
/*          clockwise from 12 o'clock, `g` is the gap from the edge in */
/*          cqw. Bursts then always point AWAY from the frame, and     */
/*          paws with tilt={90} walk along the curve.                  */
/*  pos     free placement, e.g. { right: "-5%", top: "12%" }          */
/*  size    width in cqw        tilt   extra rotation in degrees       */
/*  minor   hidden on phones    bob    very gentle float               */
type AccentProps = {
  children: ReactNode
  className?: string
  size?: number
  tilt?: number
  color?: string
  opacity?: number
  a?: number
  g?: number
  pos?: CSSProperties
  minor?: boolean
  bob?: boolean
}

export function Accent({
  children,
  className,
  size = 10,
  tilt = 0,
  color,
  opacity,
  a,
  g = 3,
  pos,
  minor,
  bob,
}: AccentProps) {
  const polar = a !== undefined
  const style = {
    "--s": `${size}cqw`,
    "--t": `${tilt}deg`,
    ...(polar ? { "--a": `${a}deg`, "--g": `${g}cqw` } : pos),
    ...(color ? { color } : null),
    ...(opacity !== undefined ? { opacity } : null),
  } as unknown as CSSProperties & {
    "--s": string
    "--t": string
    "--a"?: string
    "--g"?: string
  }

  return (
    <span
      className={[
        "accent",
        className ?? "",
        polar ? "accent--polar" : "",
        minor ? "accent--minor" : "",
        bob ? "accent--bob" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Doodles (all use currentColor, so colour = one CSS value)           */
/* ------------------------------------------------------------------ */

function PawParts() {
  return (
    <>
      <ellipse cx="5.2" cy="8.6" rx="2.3" ry="3" transform="rotate(-22 5.2 8.6)" />
      <ellipse cx="9.8" cy="4.6" rx="2.3" ry="3.1" transform="rotate(-7 9.8 4.6)" />
      <ellipse cx="15.2" cy="4.8" rx="2.3" ry="3.1" transform="rotate(8 15.2 4.8)" />
      <ellipse cx="19.4" cy="8.9" rx="2.3" ry="3" transform="rotate(23 19.4 8.9)" />
      <path d="M12 9.6c-3.9 0-7.3 4.4-7.3 7.7 0 2 1.5 3.2 3.5 2.5.9-.3 1.8-.8 3.8-.8s2.9.5 3.8.8c2 .7 3.5-.5 3.5-2.5 0-3.3-3.4-7.7-7.3-7.7Z" />
    </>
  )
}

export function PawPrint({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <PawParts />
    </svg>
  )
}

/** Four prints walking up and to the right, getting bigger. */
export function PawTrail({ className }: PhotoAccentProps) {
  const steps = [
    [9, 42, -62, 0.7, 0.4],
    [24, 33, -42, 0.8, 0.6],
    [41, 25, -20, 0.92, 0.8],
    [60, 14, 6, 1.05, 1],
  ] as const
  return (
    <svg className={className} viewBox="0 0 76 56" fill="currentColor" aria-hidden="true">
      {steps.map(([x, y, r, s, o]) => (
        <g
          key={x}
          opacity={o}
          transform={`translate(${x} ${y}) rotate(${r}) scale(${s}) translate(-12 -12)`}
        >
          <PawParts />
        </g>
      ))}
    </svg>
  )
}

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const

export function HeartDoodle({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" strokeWidth="2.3" {...line} aria-hidden="true">
      <path d="M16 27S3.5 19.2 3.5 10.8A6.3 6.3 0 0 1 16 9.4a6.3 6.3 0 0 1 12.5 1.4C28.5 19.2 16 27 16 27Z" />
    </svg>
  )
}

const SPARKLE = "M16 2.5c1.1 8.1 4.4 11.4 12.5 13.5-8.1 1.1-11.4 4.4-12.5 13.5C14.9 20.9 11.6 17.6 3.5 16 11.6 14.9 14.9 11.6 16 2.5Z"

export function SparkleDoodle({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" strokeWidth="2.2" {...line} aria-hidden="true">
      <path d={SPARKLE} fill="currentColor" fillOpacity=".2" />
    </svg>
  )
}

/** One big sparkle with two small ones, drawn as a single doodle. */
export function SparkleCluster({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 56 56" strokeWidth="2" {...line} aria-hidden="true">
      <path d={SPARKLE} transform="translate(2 12) scale(1.05)" fill="currentColor" fillOpacity=".2" />
      <path d={SPARKLE} transform="translate(33 2) scale(.55)" />
      <path d={SPARKLE} transform="translate(38 34) scale(.42)" />
    </svg>
  )
}

export function DiamondDoodle({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" strokeWidth="2.4" {...line} aria-hidden="true">
      <path d={DIAMOND_PATH} fill="currentColor" fillOpacity=".18" />
    </svg>
  )
}

const DIAMOND_PATH = "M16.3 3.2 28.6 15.8 15.8 28.8 3.4 16.3Z"

/** Three short dashes fanning upward, so it reads as "bursting out" when
 *  placed on the outside of a frame with <Accent a=… />. */
export function BurstDoodle({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" strokeWidth="3.2" {...line} aria-hidden="true">
      <path d="M12.7 25.2 2.1 9.5M20 23V4M27.3 25.2l10.6-15.7" />
    </svg>
  )
}

export function BoneDoodle({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 60 28" strokeWidth="2.2" {...line} aria-hidden="true">
      <g fill="#fff">
        <circle cx="10" cy="8" r="6" />
        <circle cx="10" cy="20" r="6" />
        <circle cx="50" cy="8" r="6" />
        <circle cx="50" cy="20" r="6" />
      </g>
      <rect x="9" y="8" width="42" height="12" fill="#fff" stroke="none" />
      <path d="M10 8H50M10 20H50" />
    </svg>
  )
}

export function SquiggleDoodle({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 60 16" strokeWidth="3.2" {...line} aria-hidden="true">
      <path d="M3 9q6-9 12 0t12 0 12 0 12 0 6-3" />
    </svg>
  )
}

/** Three speed lines, nice behind a running or wagging dog. */
export function SwishDoodle({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" strokeWidth="3.2" {...line} aria-hidden="true">
      <path d="M3 12h30M9 24h36M3 36h24" />
    </svg>
  )
}

export function OrganicShape({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 420 500" aria-hidden="true">
      <path d="M213 12c87-10 151 50 178 135 28 89 18 196-31 270-47 71-131 91-215 66C59 455 11 372 17 274 23 182 58 78 135 35c23-13 50-20 78-23Z" fill="currentColor" />
    </svg>
  )
}
