import Link from "next/link"
import { PawPrint } from "@/lib/components/photo-accents"
import { primaryActions } from "@/lib/data/business"
import { groomingServices, pricingNote } from "@/lib/data/services"

const rainbowAccents = [
  "var(--r1)",
  "var(--r2)",
  "var(--r3)",
  "var(--r4)",
  "var(--r5)",
  "var(--r6)",
  "var(--r7)",
] as const

function getStartingPrice(service: (typeof groomingServices)[number]) {
  const firstPrice = service.prices[0]

  if (!firstPrice) return ""

  const audience =
    "appliesTo" in firstPrice
      ? firstPrice.appliesTo.split(/\s+/)[0].toLowerCase()
      : undefined

  return [firstPrice.amount, audience].filter(Boolean).join(" ")
}

export function HomeServices() {
  return (
    <section
      className="home-services section-rainbow"
      aria-labelledby="home-services-title"
    >
      <div className="home-services__inner">
        <div className="home-services__intro">
          <h2 id="home-services-title">Services &amp; Pricing</h2>
          <p>{pricingNote}</p>
          <div className="home-services__actions">
            <Link
              className="home-services__button home-services__button--deep"
              href={primaryActions.services.href}
            >
              View Full Menu
            </Link>
            <Link
              className="home-services__button home-services__button--outline"
              href={primaryActions.booking.href}
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        <ul className="home-services__list">
          {groomingServices.map((service, index) => (
            <li className="home-services__row" key={service.name}>
              <span
                className="home-services__paw"
                style={{ color: rainbowAccents[(index * 2) % rainbowAccents.length] }}
              >
                <PawPrint />
              </span>
              <h3>
                {service.name}{" "}
                <span className="home-services__price">
                  {getStartingPrice(service)}
                </span>
              </h3>
              <p>{service.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
