import type { Metadata } from "next"
import Link from "next/link"
import { aboutContent, businessInfo, primaryActions, trustSignals } from "@/lib/data/business"

export const metadata: Metadata = {
  title: "About",
  description: businessInfo.description,
}

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16" aria-labelledby="about-title">
      <div className="max-w-3xl space-y-6">
        <h1 id="about-title">{businessInfo.tagline}</h1>
        <p className="text-lg">{businessInfo.description}</p>
        <h2>{aboutContent.headline}</h2>
        {aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <ul className="space-y-2">
          {trustSignals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="home-hero-button home-hero-button-primary" href={primaryActions.booking.href}>
            {primaryActions.booking.label}
          </Link>
          <Link className="home-hero-button home-hero-button-secondary" href="/contact">
            Contact Rainbow Paws
          </Link>
        </div>
      </div>
    </section>
  )
}
