import "./services.css"
import "@/lib/components/home/home-reviews.css"
import "@/lib/components/photo-frames.css"
import "@/lib/components/photo-collage.css"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Accent,
  BoneDoodle,
  BurstDoodle,
  PawPrint,
  SparkleCluster,
  SquiggleDoodle,
  SwishDoodle,
} from "@/lib/components/photo-accents"
import { GroomingIllustration } from "@/lib/components/grooming-illustrations"
import { CollageDefs, PhotoCollage } from "@/lib/components/photo-collage"
import type { CollageBackdrop, CollageItem } from "@/lib/components/photo-collage"
import { HomeReviews } from "@/lib/components/home/home-reviews"
import { businessInfo, primaryActions } from "@/lib/data/business"
import {
  aLaCarteServices,
  addOnServices,
  colorStudio,
  groomingServices,
  servicesPageIntro,
} from "@/lib/data/services"

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Grooming services and starting prices from ${businessInfo.name}.`,
}

const heroPhotos: CollageItem[] = [
  {
    src: "/others/dog-1.webp",
    alt: "A small white dog wearing a pink patterned bandana and raising a paw.",
    shape: "a", x: 0, y: 3, w: 46, ratio: 1, accent: "var(--aqua)",
  },
  {
    src: "/others/dog-2.webp",
    alt: "A gray dog wearing a colorful bandana after grooming.",
    shape: "b", x: 51, y: 0, w: 46, ratio: 1, accent: "var(--aqua)",
  },
  {
    src: "/others/dog-3.webp",
    alt: "A small white dog wearing a multicolored bandana after grooming.",
    shape: "c", x: 3, y: 52, w: 45, ratio: 1, accent: "var(--aqua)",
  },
  {
    src: "/gallery/hair-dye-12.webp",
    alt: "A cream-colored dog with dark brown ears and paws wearing a blue bandana in front of a gingerbread-house backdrop.",
    shape: "d", x: 52, y: 50, w: 46, ratio: 1, accent: "var(--aqua)", focus: "50% 100%",
  },
]

const heroBackdrops: CollageBackdrop[] = [
  { shape: "w1", color: "var(--aqua)", x: -5, y: -4, w: 110, h: 108, opacity: 0.26 },
]

const colorPhotos: CollageItem[] = [
  {
    src: "/gallery/hair-dye-7.webp",
    alt: "A white poodle with orange color on its ears and legs.",
    shape: "a", x: 0, y: 0, w: 58, ratio: 1.1, accent: "var(--r7)", z: 1,
  },
  {
    src: "/gallery/hair-dye-13.webp",
    alt: "A small dog with blue and purple creative color on its coat.",
    shape: "d", x: 54, y: 46, w: 46, ratio: 1, accent: "var(--r7)", z: 2,
  },
  {
    src: "/gallery/hair-dye-5.webp",
    alt: "A white dog with pink paws and rainbow color on its tail.",
    shape: "c", x: 4, y: 62, w: 44, ratio: 1, accent: "var(--r7)", z: 3,
  },
]

const colorBackdrops: CollageBackdrop[] = [
  { shape: "w3", color: "var(--r7)", x: -6, y: -2, w: 110, h: 108, opacity: 0.3, rotate: 10 },
]


function ServicePrice({ amount, appliesTo }: { amount: string; appliesTo?: string }) {
  return (
    <span className="services-page__price-pill">
      <strong>{amount}</strong>
      {appliesTo ? <small>{appliesTo}</small> : null}
    </span>
  )
}

function PriceList({ items }: { items: readonly { name: string; price: string }[] }) {
  return (
    <dl className="services-page__price-list">
      {items.map((item) => (
        <div key={item.name}>
          <dt>{item.name}</dt>
          <span aria-hidden="true" />
          <dd>{item.price}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      <CollageDefs />

      <header className="services-page__hero" aria-labelledby="services-page-title">
        <div className="services-page__hero-inner">
          <div className="services-page__hero-copy">
            <h1 id="services-page-title">Services &amp; Pricing</h1>
            <p>{servicesPageIntro}</p>
          </div>

          <PhotoCollage
            className="services-page__collage"
            items={heroPhotos}
            backdrops={heroBackdrops}
            height={1.1}
            maxWidth={500}
            sizes="(max-width: 700px) 42vw, 240px"
            label="Rainbow Paws grooming photos"
            priority
          >
            <Accent className="services-page__accent services-page__accent--hero-dryer" size={20} tilt={-10}>
              <GroomingIllustration type="dryer" size={96} decorative />
            </Accent>
            <Accent className="services-page__accent services-page__accent--hero-dryer-lines" size={8} pos={{ top: "15%", left: "-2%"}} color="var(--aqua)">
              <SwishDoodle />
            </Accent>
            <Accent className="services-page__accent services-page__accent--hero-comb" size={15} pos={{ top: "5%"}} tilt={-135}>
              <GroomingIllustration type="comb" size={96} decorative />
            </Accent>
            <Accent className="services-page__accent services-page__accent--hero-scissors" size={18} pos={{ top: "80%", right: "2%"}} tilt={-18}>
              <GroomingIllustration type="scissors" size={96} decorative />
            </Accent>
            <Accent className="services-page__accent services-page__accent--sparkle-cluster" size={11} pos={{ top: "75%", right: "98%" }} color="var(--r3)" tilt={-5}>
              <SparkleCluster />
            </Accent>
          </PhotoCollage>
        </div>
      </header>

      <section className="services-page__packages" aria-label="Grooming services and add-ons">
          <div className="services-page__inner">
            <div className="services-page__cards">
              {groomingServices.map((service) => (
                <article className="services-page__card" key={service.name}>
                  <h2>{service.name}</h2>
                  <div className="services-page__prices" aria-label="Starting prices">
                    {service.prices.map((price) => (
                      <ServicePrice
                        key={`${price.amount}-${"appliesTo" in price ? price.appliesTo : "standard"}`}
                        amount={price.amount}
                        appliesTo={"appliesTo" in price ? price.appliesTo : undefined}
                      />
                    ))}
                  </div>
                  <ul className="services-page__features">
                    {service.includes.map((feature) => (
                      <li key={feature}>
                        <PawPrint />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <details className="services-page__description">
                    <summary>Read the full description</summary>
                    <p>{service.description}</p>
                  </details>
                </article>
              ))}

              <article className="services-page__card services-page__card--addons">
                <h2>Add-ons</h2>
                <span className="services-page__price-pill services-page__price-pill--note">
                  Add to any groom
                </span>
                <PriceList items={addOnServices} />
              </article>
            </div>

            <section className="services-page__a-la-carte" aria-labelledby="a-la-carte-title">
              <div>
                <h2 id="a-la-carte-title">À la carte services</h2>
                <p>{aLaCarteServices.description}</p>
                <p className="services-page__consultation-note">
                  {aLaCarteServices.consultationNote}
                </p>
              </div>
              <PriceList items={aLaCarteServices.items} />
            </section>

            <section className="services-page__color" aria-labelledby="color-studio-title">
              <div className="services-page__color-photo">
                <PhotoCollage
                  items={colorPhotos}
                  backdrops={colorBackdrops}
                  height={1.1}
                  maxWidth={440}
                  sizes="(max-width: 700px) 50vw, 240px"
                  label="Pet-safe color and creative grooming examples"
                >
                  <Accent className="services-page__accent services-page__accent--color-shampoo" size={18} pos={{ top: "15%", right: "10%" }} tilt={18}>
                    <GroomingIllustration type="shampoo" size={96} decorative />
                  </Accent>
                  <Accent className="services-page__accent services-page__accent--color-rays" size={8} pos={{ top: "2%", right: "32%" }} color="var(--r3)" tilt={55}>
                    <BurstDoodle />
                  </Accent>
                  <Accent className="services-page__accent services-page__accent--color-squiggle" size={10} pos={{ top: "22%", right: "6%" }} color="var(--aqua)" tilt={64}>
                    <SquiggleDoodle />
                  </Accent>
                  <Accent className="services-page__accent services-page__accent--color-bone" size={16} pos={{ top: "84%", right: "22%" }} color="var(--deep)" tilt={18}>
                    <BoneDoodle />
                  </Accent>
                  <Accent className="services-page__accent services-page__accent--color-paw" size={7} pos={{ top: "65%", left: "-4%" }} color="var(--aqua)" opacity={0.8} tilt={15}>
                    <PawPrint />
                  </Accent>
                  <Accent className="services-page__accent services-page__accent--sparkle-cluster" size={11} pos={{ top: "48%", right: "45%" }} color="var(--r3)" tilt={-5}>
                    <SparkleCluster />
                  </Accent>
                </PhotoCollage>
              </div>
              <div className="services-page__color-copy">
                <h2 id="color-studio-title">{colorStudio.name}</h2>
                <p className="services-page__starting-price">Starts at {colorStudio.startingPrice}</p>
                <p>{colorStudio.description}</p>
                <p className="services-page__lightener-note">{colorStudio.lightenerNote}</p>
                <p className="services-page__color-note">
                  Coloring services must be booked alongside a Comfort Bath, Refresh Groom, or our
                  Paws Signature grooming package. It is not a stand-alone service. Full body
                  transformations require a free consultation in advance and are not suitable for
                  puppies under 9 months, or dogs that are behaviorally challenging or receiving a
                  Miracle Makeover.
                </p>
              </div>
            </section>

            <div className="services-page__actions">
              <Link className="home-hero-button home-hero-button-primary" href={primaryActions.booking.href}>
                {primaryActions.booking.label}
              </Link>
              <a className="home-hero-button home-hero-button-secondary" href={businessInfo.phone.href}>
                Call {businessInfo.phone.display}
              </a>
            </div>
          </div>
      </section>

      <HomeReviews />
    </div>
  )
}
