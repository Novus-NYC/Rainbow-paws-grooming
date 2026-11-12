import type { Metadata } from "next"
import Link from "next/link"
import { businessInfo, primaryActions } from "@/lib/data/business"

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${businessInfo.name} to ask about grooming appointments.`,
}

export default function ContactPage() {
  const { address, phone, socialLinks } = businessInfo

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16" aria-labelledby="contact-title">
      <div className="max-w-3xl space-y-6">
        <h1 id="contact-title">Contact Rainbow Paws</h1>
        <p>{businessInfo.description}</p>

        <div className="space-y-3">
          <p>
            <strong>Call:</strong> <a href={phone.href}>{phone.display}</a>
          </p>
          <p>
            <strong>Visit:</strong>{" "}
            <a href={address.mapsUrl} target="_blank" rel="noreferrer">
              {address.street}, {address.city}, {address.region} {address.postalCode}
            </a>
          </p>
          <p>
            <strong>Hours:</strong> {businessInfo.hours}
          </p>
          <p>{businessInfo.appointmentNote}</p>
        </div>

        <nav className="flex flex-wrap gap-4" aria-label="Contact options">
          <Link className="home-hero-button home-hero-button-primary" href={primaryActions.booking.href}>
            {primaryActions.booking.label}
          </Link>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
