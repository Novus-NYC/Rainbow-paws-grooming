import { trustSignals } from "@/lib/data/business"
import { PawPrint } from "@/lib/components/visuals/photo-accents"

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
