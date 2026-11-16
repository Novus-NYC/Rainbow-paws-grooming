import Link from "next/link"
import { faqs } from "@/lib/data/support"
import { primaryActions } from "@/lib/data/business"

const homepageFaqs = faqs.filter((item) => item.placement.home === "list")
const introduction = faqs.find((item) => item.placement.home === "intro")

export function HomeFaqs() {
  return (
    <section
      className="home-faqs section-rainbow"
      id="faq"
      aria-labelledby="home-faqs-title"
    >
      <div className="home-faqs__inner">
        <aside className="home-faqs__intro">
          <h2 id="home-faqs-title">Why choose Rainbow Paws?</h2>
          <p>{introduction?.answer}</p>
          <Link
            className="home-hero-button home-hero-button-primary"
            href={primaryActions.booking.href}
          >
            {primaryActions.booking.label}
          </Link>
        </aside>

        <div className="home-faqs__content">
          <div
            className="home-faqs__accordion"
            role="group"
            aria-label="Frequently asked questions"
          >
            {homepageFaqs.map((item) => (
              <details name="homepage-faq" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="home-faqs__more">
            <Link className="home-faqs__all-link" href="/contact#faqs">
              See All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
