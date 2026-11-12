import { trustSignals } from "@/lib/site-data"
import { PawPrint } from "@/lib/components/photo-accents"

export function TrustBanner() {
  return (
    <section className="home-trust-banner" aria-label="Rainbow Paws at a glance">
      <ul className="home-trust-list">
        {trustSignals.map((signal) => (
          <li key={signal}>
            <PawPrint />
            <span>{signal}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
