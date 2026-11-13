import type { Metadata } from "next"
import Link from "next/link"
import { businessInfo, primaryActions } from "@/lib/data/business"
import { faqs } from "@/lib/data/support"

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${businessInfo.name} to ask about grooming appointments.`,
}

export default function ContactPage() {
  const { address, phone, socialLinks } = businessInfo

  return (
    <>
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

      <section id="faqs" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20" aria-labelledby="contact-faqs-title">
        <h2 id="contact-faqs-title" className="mb-8">Frequently asked questions</h2>
        <div className="max-w-4xl border-b-2 border-[var(--border)]">
          {faqs.map((item) => (
            <details name="contact-faq" className="border-t-2 border-[var(--border)] py-4" key={item.question}>
              <summary className="cursor-pointer font-display text-xl font-semibold">
                {item.question}
              </summary>
              <p className="mb-2 mt-4 max-w-3xl">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
