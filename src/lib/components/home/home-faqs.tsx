import Link from "next/link"
import { faqs } from "@/lib/data/support"
import { primaryActions } from "@/lib/data/business"

const homepageQuestions = new Set([
  "How much does it cost?",
  "Are evening appointments available?",
  "Any breed or weight restrictions?",
])

const homepageFaqs = faqs.filter((item) => homepageQuestions.has(item.question))
const introduction = faqs.find((item) => item.question === "Why choose Rainbow Paws?")

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
          <div className="home-faqs__accordion" aria-label="Frequently asked questions">
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
