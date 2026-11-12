type PhotoAccentProps = {
  className?: string
}

export function PawPrint({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="5.2" cy="7.2" rx="2.3" ry="2.8" />
      <ellipse cx="10" cy="4.5" rx="2.2" ry="2.8" />
      <ellipse cx="15" cy="4.7" rx="2.2" ry="2.8" />
      <ellipse cx="19" cy="8" rx="2.3" ry="2.8" />
      <path d="M12 9c-3.9 0-7.3 4.5-7.3 7.9 0 2 1.5 3.2 3.5 2.5.9-.3 1.8-.8 3.8-.8s2.9.5 3.8.8c2 .7 3.5-.5 3.5-2.5C19.3 13.5 15.9 9 12 9Z" />
    </svg>
  )
}

export function GroomingComb({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 8 54 9-2 8L4 16 5 8Z" />
      <path d="m11 17-3 11m11-9-3 12m12-10-3 12m12-10-3 12m12-10-3 12m11-10-2 9" />
    </svg>
  )
}

export function GroomingBrush({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 52"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 5h24c3 0 5 2 5 5v13c0 3-2 5-5 5h-4v16c0 2-2 4-4 4h-8c-2 0-4-2-4-4V28h-4c-3 0-5-2-5-5V10c0-3 2-5 5-5Z" />
      <path d="M12 12v9m8-9v9m8-9v9m-8 7v13" />
    </svg>
  )
}

export function HairDryer({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13c0-4 3-7 7-7h17c9 0 15 5 18 13-3 8-9 13-18 13H12c-4 0-7-3-7-7V13Z" />
      <path d="M47 14h6v10h-6M18 32l3 6h9l2-6M14 16h8" />
    </svg>
  )
}

export function HeartDoodle({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 27S3.5 19.2 3.5 10.8A6.3 6.3 0 0 1 16 9.4a6.3 6.3 0 0 1 12.5 1.4C28.5 19.2 16 27 16 27Z" />
    </svg>
  )
}

export function Sparkle({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 2.5c1.1 8.1 4.4 11.4 12.5 13.5-8.1 1.1-11.4 4.4-12.5 13.5C14.9 20.9 11.6 17.6 3.5 16 11.6 14.9 14.9 11.6 16 2.5Z" />
    </svg>
  )
}

export function HandDrawnLine({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 18c22-12 39-12 56-3s32 12 58-5" />
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
