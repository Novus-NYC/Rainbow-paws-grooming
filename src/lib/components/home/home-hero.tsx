import Image from "next/image"
import Link from "next/link"
import { businessInfo, primaryActions } from "@/lib/site-data"
import { OrganicShape } from "@/lib/components/photo-accents"

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <h1 id="home-hero-title">{businessInfo.tagline}</h1>
          <p className="home-hero-description">{businessInfo.description}</p>
          <div className="home-hero-actions">
            <Link
              className="home-hero-button home-hero-button-primary"
              href={primaryActions.booking.href}
            >
              {primaryActions.booking.label}
            </Link>
            <Link
              className="home-hero-button home-hero-button-secondary"
              href={primaryActions.services.href}
            >
              {primaryActions.services.label}
            </Link>
          </div>
        </div>

        <div className="home-hero-visual">
          <OrganicShape className="home-hero-organic" />
          <div className="home-hero-image-wrap">
            <div className="home-hero-rainbow home-hero-red">
              <div className="home-hero-rainbow home-hero-orange">
                <div className="home-hero-rainbow home-hero-yellow">
                  <div className="home-hero-rainbow home-hero-green">
                    <div className="home-hero-rainbow home-hero-aqua">
                      <div className="home-hero-rainbow home-hero-blue">
                        <div className="home-hero-rainbow home-hero-violet">
                          <div className="home-hero-photo-frame">
                            <Image
                              className="home-hero-photo"
                              src="/wynter/wynter-4.webp"
                              alt="Wynter seated with a small dog on her lap"
                              fill
                              priority
                              sizes="(max-width: 760px) 88vw, (max-width: 980px) 44vw, 40vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="home-hero-note">no rush, ever</p>
          </div>
        </div>
      </div>
    </section>
  )
}
