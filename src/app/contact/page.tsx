import "./contact.css"
import "@/lib/components/photo-frames.css"
import "@/lib/components/home/home-reviews.css"
import Link from "next/link"
import type { Metadata } from "next"
import { HomeReviews } from "@/lib/components/home/home-reviews"
import {
  Accent,
  BoneDoodle,
  PawPrint,
  PawTrail,
  SparkleCluster,
} from "@/lib/components/photo-accents"
import { GroomingIllustration } from "@/lib/components/grooming-illustrations"
import { businessInfo } from "@/lib/data/business"
import { faqs } from "@/lib/data/support"

export const metadata: Metadata = {
  title: "Contact",
  description: `Book an appointment or contact ${businessInfo.name}.`,
}

const contactFaqs = faqs.filter((item) => item.placement.contact === "list")

const contactHighlights = [
  "16+ Years of Experience",
  "Former Veterinary Technician",
  "Personalized Care",
  "Senior & Special Needs Specialist",
  "Calm, Low-Stress Environment",
] as const

function ContactIcon({ kind }: { kind: "pin" | "clock" | "phone" }) {
  if (kind === "pin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    )
  }

  if (kind === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.6 3.8 9.2 7a2 2 0 0 1-.2 2.7l-1.2 1.2a15 15 0 0 0 5.3 5.3l1.2-1.2a2 2 0 0 1 2.7-.2l3.2 2.6a2 2 0 0 1 .4 2.7l-.8 1.1a3 3 0 0 1-3.1 1.2C9.8 20.8 3.2 14.2 1.6 7.3a3 3 0 0 1 1.2-3.1l1.1-.8a2 2 0 0 1 2.7.4Z" transform="translate(1 -1) scale(.92)" />
    </svg>
  )
}

function SocialMark({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3.1c-1.3.1-2.5-.3-3.8-1.1v5.9c0 3.6-2.5 5.7-5.5 5.7-3.1 0-5.5-2.4-5.5-5.4 0-3.3 2.8-5.8 6.2-5.3v3.2c-1.5-.5-3 .4-3 2 0 1.2.9 2.1 2.1 2.1 1.3 0 2.2-1 2.2-2.4V3Z" />
    </svg>
  )
}

function ContactFaqAnswer({ question, answer }: { question: string; answer: string }) {
  if (question === "How much does it cost?") {
    return (
      <>
        Prices depend on breed, size, and coat condition. See{" "}
        <Link href="/services">Services &amp; Pricing</Link> for current rates.
      </>
    )
  }

  return answer
}

export default function ContactPage() {
  const { address, phone, hours, socialLinks } = businessInfo

  return (
    <div className="contact-page">
      <header className="contact-page__hero" aria-labelledby="contact-title">
        <div className="contact-page__hero-inner">
          <span className="contact-page__blob contact-page__blob--hero" aria-hidden="true" />
          <div className="contact-page__hero-copy">
            <h1 id="contact-title">Book online or ask a question.</h1>
            <p className="contact-page__lead">
              Same day appointments may be available. Request a time below, or call to check
              availability.
            </p>
          </div>

          <aside className="contact-page__same-day" aria-labelledby="same-day-title">
            <div className="contact-page__deco" aria-hidden="true">
              <Accent pos={{ right: "-5cqw", top: "44cqw" }} size={14} tilt={5}>
                <GroomingIllustration type="scissors" size={96} decorative />
              </Accent>
              <Accent pos={{ left: "-6cqw", top: "2cqw" }} size={11} color="var(--r3)" tilt={-5} minor>
                <SparkleCluster />
              </Accent>
            </div>
            <h2 id="same-day-title">Same day appointments</h2>
            <p>
              After you request a time, Wynter reviews your dog’s needs and confirms the best
              service, timing, and pricing.
            </p>
            <a className="home-hero-button home-hero-button-primary" href={phone.href}>
              <span className="contact-page__button-icon"><ContactIcon kind="phone" /></span>
              Call to check same day availability
            </a>
          </aside>
        </div>
      </header>

      <section className="contact-page__booking section-rainbow" id="book" aria-label="Booking and studio information">
        <span className="contact-page__blob contact-page__blob--booking-a" aria-hidden="true" />
        <span className="contact-page__blob contact-page__blob--booking-b" aria-hidden="true" />
        <div className="contact-page__booking-inner">
          <div className="contact-page__square-panel">
            <div className="contact-page__deco" aria-hidden="true">
              <Accent pos={{ left: "-4cqw", top: "2cqw" }} size={12} tilt={-12}>
                <GroomingIllustration type="dryer" size={96} decorative />
              </Accent>
              <Accent pos={{ left: "6cqw", top: "-2cqw" }} size={8} color="var(--r3)">
                <SparkleCluster />
              </Accent>
              <Accent pos={{ right: "-4cqw", bottom: "-8cqw" }} size={14} color="var(--deep)" minor>
                <PawTrail />
              </Accent>
            </div>
            <div className="contact-page__booking-copy">
              <h2>Pick a time for your dog</h2>
              <p>
                Choose a service, pick a time, and tell Wynter about your dog. If you’re unsure
                which service fits, choose the closest one and add a note. Wynter will confirm the
                best service, timing, and pricing after you request.
              </p>
            </div>
            <div className="contact-page__square-surface">
              <iframe
                className="contact-page__square-frame"
                title="Rainbow Paws Grooming online appointments"
                src="https://app.squareup.com/appointments/buyer/widget/1j3hd8tkzpanlz/LSPXZKYHM07FM"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-top-navigation-by-user-activation"
                allow="payment app.squareup.com"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
              />
            </div>
            <div className="contact-page__booking-fallback">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                <path d="M12 11v5m0-8h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <p>
                Form not loading, or want to ask something first? Call{" "}
                <a href={phone.href}>{phone.display}</a>
              </p>
            </div>
          </div>

          <aside className="contact-page__studio" aria-labelledby="studio-title">
            <div className="contact-page__deco" aria-hidden="true">
              <Accent pos={{ right: "-8cqw", bottom: "-12cqw" }} size={18} tilt={-30} color="var(--deep)" minor>
                <BoneDoodle />
              </Accent>
            </div>
            <h2 id="studio-title">Visit the studio</h2>
            <ul className="contact-page__studio-details">
              <li>
                <span className="contact-page__info-icon"><ContactIcon kind="pin" /></span>
                <span><strong>Studio</strong>{address.street}, {address.city}, {address.region} {address.postalCode}</span>
              </li>
              <li>
                <span className="contact-page__info-icon"><ContactIcon kind="clock" /></span>
                <span><strong>Hours</strong>{hours}</span>
              </li>
              <li>
                <span className="contact-page__info-icon"><ContactIcon kind="phone" /></span>
                <span><strong>Phone</strong><a href={phone.href}>{phone.display}</a></span>
              </li>
            </ul>
            <div className="contact-page__studio-actions">
              <a className="home-hero-button home-hero-button-primary" href={phone.href}>
                <span className="contact-page__button-icon"><ContactIcon kind="phone" /></span>
                Call Now
              </a>
              <a className="home-hero-button home-hero-button-secondary" href={address.mapsUrl} target="_blank" rel="noreferrer">
                <span className="contact-page__button-icon"><ContactIcon kind="pin" /></span>
                Get Directions
              </a>
            </div>
            <iframe
              className="contact-page__map"
              title="Map showing the Rainbow Paws Grooming studio location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`,
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>

          <section className="contact-page__social" aria-labelledby="follow-title">            <div>
              <p className="contact-page__handwritten">follow along</p>
              <h2 id="follow-title">See the dogs behind the grooms.</h2>
              <p>Fresh cuts, color, and tail wags from the studio.</p>
            </div>
            <div className="contact-page__social-links">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <span className="contact-page__social-icon"><SocialMark label={social.label} /></span>
                  <span><strong>{social.label}</strong><small>{social.handle}</small></span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="contact-page__answers section-rainbow" id="faqs" aria-label="Why choose Rainbow Paws and frequently asked questions">
        <span className="contact-page__blob contact-page__blob--answers-a" aria-hidden="true" />
        <span className="contact-page__blob contact-page__blob--answers-b" aria-hidden="true" />
        <div className="contact-page__answers-inner">
          <article className="contact-page__why" aria-labelledby="why-title">
            <div className="contact-page__deco" aria-hidden="true">
              <Accent pos={{ left: "-5cqw", bottom: "-6cqw" }} size={14} tilt={-22} minor>
                <GroomingIllustration type="shampoo" size={96} decorative />
              </Accent>
            </div>
            <h2 id="why-title">Why should I try Rainbow Paws Grooming?</h2>
            <p className="contact-page__why-intro">
              Not every dog thrives in a busy salon, and not every groomer has the patience or
              experience to meet every dog’s unique needs.
            </p>
            <ul className="contact-page__highlights">
              {contactHighlights.map((highlight) => (
                <li key={highlight}><PawPrint className="contact-page__highlight-paw" />{highlight}</li>
              ))}
            </ul>
            <details className="contact-page__story">
              <summary>Read the full story</summary>
              <div>
                <p>
                  At Rainbow Paws Grooming, every appointment is one-on-one in a calm, private home
                  studio where your dog’s comfort comes first. Before the service begins, each dog
                  is given time to acclimate and relax. Halfway through your dog will enjoy a
                  rest/water break and treats if allowed.
                </p>
                <p>
                  With 16+ years of professional grooming experience and a veterinary background, I
                  specialize in helping senior, medically compromised, fearful, and behaviorally
                  challenged dogs have a safer, less stressful grooming experience. Many of my
                  clients happily travel beyond their neighborhood because they’re looking for
                  personalized, expert care they can’t find in a traditional grooming salon.
                </p>
              </div>
            </details>
            <a className="home-hero-button home-hero-button-primary" href="#book">Book an Appointment</a>
          </article>

          <div className="contact-page__faq" aria-labelledby="faq-title">
            <div className="contact-page__deco" aria-hidden="true">
              <Accent pos={{ right: "-2cqw", top: "-1cqw" }} size={12} tilt={-2}>
                <GroomingIllustration type="scissors" size={96} decorative />
              </Accent>
            </div>
            <h2 id="faq-title">Frequently asked questions</h2>
            <p className="contact-page__faq-help">
              Please call <a href={phone.href}>{phone.display}</a> if you cannot find the answer to
              your question.
            </p>
            <div className="contact-page__faq-list">
              {contactFaqs.map((item) => (
                <details name="contact-faq" key={item.question}>
                  <summary>{item.question}</summary>
                  <p><ContactFaqAnswer question={item.question} answer={item.answer} /></p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeReviews />
    </div>
  )
}
