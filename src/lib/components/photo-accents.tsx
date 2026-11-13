type PhotoAccentProps = {
  className?: string
}

export function PawPrint({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <ellipse cx="5.2" cy="7.2" rx="2.3" ry="2.8" />
      <ellipse cx="10" cy="4.5" rx="2.2" ry="2.8" />
      <ellipse cx="15" cy="4.7" rx="2.2" ry="2.8" />
      <ellipse cx="19" cy="8" rx="2.3" ry="2.8" />
      <path d="M12 9c-3.9 0-7.3 4.5-7.3 7.9 0 2 1.5 3.2 3.5 2.5.9-.3 1.8-.8 3.8-.8s2.9.5 3.8.8c2 .7 3.5-.5 3.5-2.5C19.3 13.5 15.9 9 12 9Z" />
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

export function SparkleDoodle({ className }: PhotoAccentProps) {
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

export function BurstDoodle({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.3 21.2 11.2 4.5M15.2 24.8l12-12M18.8 31.7l16.7-2.9" />
    </svg>
  )
}

export function BoneDoodle({ className }: PhotoAccentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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

export function OrganicShape({ className }: PhotoAccentProps) {
  return (
    <svg className={className} viewBox="0 0 420 500" aria-hidden="true">
      <path d="M213 12c87-10 151 50 178 135 28 89 18 196-31 270-47 71-131 91-215 66C59 455 11 372 17 274 23 182 58 78 135 35c23-13 50-20 78-23Z" fill="currentColor" />
    </svg>
  )
}
