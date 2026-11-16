import "./about.css"
import "@/lib/components/home/home-sections.css"
import "@/lib/components/visit-steps.css"
import "@/lib/components/reviews-section.css"
import "@/lib/components/photo-frames.css"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { GroomingIllustration } from "@/lib/components/grooming-illustrations"
import { ReviewsSection } from "@/lib/components/reviews-section"
import { VisitSteps } from "@/lib/components/visit-steps"
import { primaryActions } from "@/lib/data/business"
import {
  Accent,
  BurstDoodle,
  DiamondDoodle,
  HeartDoodle,
  PawPrint,
  SparkleDoodle,
} from "@/lib/components/photo-accents"
import { PhotoFrame, PhotoShapeDefs } from "@/lib/components/photo-frames"

export const metadata: Metadata = {
  title: "About",
  description:
    "Over 16 years of grooming, a veterinary technician background, and a studio built around patience.",
}

const serviceAreas = [
  "East New York",
  "Brownsville",
  "Canarsie",
  "Bedford-Stuyvesant",
  "Park Slope",
  "Crown Heights",
  "Howard Beach",
  "Flatbush",
] as const

export default function AboutPage() {
  return (
    <div className="about-page">
      <PhotoShapeDefs />
      <section className="about-page__hero" aria-labelledby="about-page-title">
        <div className="about-page__hero-inner">
          <div className="about-page__hero-copy">
            <h1 id="about-page-title">Meet Wynter, your groomer.</h1>
            <p>
              Over 16 years of grooming, a veterinary technician background,
              and a studio built around patience.
            </p>
          </div>

          <div className="about-page__portrait-wrap">
            <div className="home-hero-image-wrap about-page__portrait-stack">
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
                                alt="Wynter seated with a small black-and-tan dog on her lap."
                                fill
                                priority
                                sizes="(max-width: 760px) 78vw, (max-width: 980px) 420px, 36vw"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Accent a={-56} g={4} size={12} color="var(--r3)">
                <BurstDoodle />
              </Accent>
              <Accent a={-80} g={4} size={8} tilt={60} color="var(--r7)" bob>
                <HeartDoodle />
              </Accent>
              <Accent a={114} g={2} size={22} tilt={40}>
                <GroomingIllustration type="comb" size={110} decorative />
              </Accent>
              <Accent a={38} g={2} size={7} color="var(--r3)" minor>
                <SparkleDoodle />
              </Accent>
              <Accent a={60} g={3} size={4} color="var(--aqua)" minor>
                <DiamondDoodle />
              </Accent>
              <Accent pos={{ left: "-8cqw", bottom: "4cqw" }} size={9} tilt={-20} color="var(--aqua)">
                <PawPrint />
              </Accent>
              <Accent pos={{ left: "-2cqw", bottom: "15cqw" }} size={6} tilt={-6} color="var(--aqua)" opacity={0.6}>
                <PawPrint />
              </Accent>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-page__story"
        aria-label="About Rainbow Paws Grooming"
      >
        <div className="about-page__story-inner">
          <div className="about-page__story-row">
            <PhotoFrame
              className="about-page__photo about-page__photo--first"
              shape="scallop"
              accent="var(--r2)"
              backdrop="var(--r2)"
              src="/wynter/wynter-3.webp"
              alt="Wynter gently offering a treat to a tan dog in a pink harness."
              sizes="(max-width: 980px) min(82vw, 420px), (max-width: 1200px) 40vw, 440px"
            >
              <Accent a={45} g={6} size={11} color="var(--r3)"><BurstDoodle /></Accent>
              <Accent a={-68} g={3} size={8} tilt={50} color="var(--r1)" bob><HeartDoodle /></Accent>
              <Accent a={-20} g={6} size={4.5} color="var(--aqua)" minor><DiamondDoodle /></Accent>
              <Accent a={-152} g={3} size={6} tilt={90} color="var(--aqua)" opacity={0.5}><PawPrint /></Accent>
              <Accent a={-133} g={5} size={7.5} tilt={90} color="var(--aqua)" opacity={0.75}><PawPrint /></Accent>
              <Accent a={-114} g={3} size={9} tilt={90} color="var(--aqua)"><PawPrint /></Accent>
            </PhotoFrame>

            <div className="about-page__story-copy">
              <h2>Why I started Rainbow Paws</h2>
              <p>
                I created Rainbow Paws Grooming to offer something different from
                the fast-paced salon experience. Before each session begins,
                your dog gets time to acclimate and relax. During longer
                appointments, your dog gets a break halfway through for rest,
                water, and treats (if allowed).
              </p>
              <p>
                My private, home-based studio is a calm, personalized space,
                perfect for dogs who are senior, medically compromised, fearful,
                or experiencing grooming for the first time.
              </p>
            </div>
          </div>

          <div className="about-page__story-row about-page__story-row--reverse">
            <div className="about-page__story-copy">
              <h2>The Rainbow Paws difference</h2>
              <p>
                At Rainbow Paws, grooming is never rushed. Every appointment is
                personalized and one-on-one, so I can focus entirely on your
                dog’s comfort, safety, and individual needs.
              </p>
              <p>
                My goal is an experience built on trust, patience, and
                compassionate care. I believe every dog deserves to feel safe.
              </p>
              <div className="about-page__actions">
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

            <PhotoFrame
              className="about-page__photo about-page__photo--second"
              shape="blob"
              accent="var(--r7)"
              backdrop="var(--r7)"
              src="/wynter/wynter-1.webp"
              alt="Wynter smiling beside a fluffy goldendoodle."
              sizes="(max-width: 980px) min(82vw, 420px), (max-width: 1200px) 40vw, 440px"
            >
              <Accent pos={{ left: "-5%", top: "4%" }} size={9} color="var(--r3)"><SparkleDoodle /></Accent>
              <Accent pos={{ left: "4%", top: "-7%" }} size={5} color="var(--r3)" minor><SparkleDoodle /></Accent>
              <Accent pos={{ right: "3%", top: "-2%" }} size={11} tilt={34} color="var(--aqua)"><BurstDoodle /></Accent>
              <Accent pos={{ right: "-8%", bottom: "4%" }} size={17} tilt={22}>
                <GroomingIllustration type="brush" size={96} decorative />
              </Accent>
              <Accent pos={{ left: "-5%", bottom: "-3%" }} size={9} tilt={-18} color="var(--r7)"><PawPrint /></Accent>
              <Accent pos={{ right: "-5%", top: "44%" }} size={5} color="var(--r1)" minor><DiamondDoodle /></Accent>
            </PhotoFrame>
          </div>
        </div>
      </section>

      <section
        className="about-page__areas section-rainbow"
        aria-labelledby="about-page-areas-title"
      >
        <div className="about-page__areas-inner">
          <div className="about-page__areas-copy">
            <h2 id="about-page-areas-title">Areas we serve</h2>
            <p>
              In areas like East New York, Brownsville, and Canarsie, you can
              find a patient dog groomer who caters to anxious dogs or dogs who
              aren’t groomed often. If you’re searching for dog grooming in
              Brooklyn or looking for anxious dog grooming or first-time puppy
              grooming, many clients travel from Bedford-Stuyvesant, Park Slope,
              Crown Heights, and Howard Beach. Residents in Flatbush can also
              access top-notch dog grooming services, including creative
              grooming.
            </p>

            <ul className="about-page__area-list" aria-label="Service areas">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="about-page__disclosures">
            <details>
              <summary>My Vision</summary>
              <p>
                My vision is to create a welcoming space for dogs who have been
                overlooked, turned away, or misunderstood, where they can
                finally feel safe. At Rainbow Paws Grooming, I aim to be the
                first choice for pet parents searching for an anxious dog
                groomer, offering compassionate and specialized dog grooming in
                Brooklyn. I strive to provide an experience built on trust,
                whether you are looking for dog grooming near me or exploring
                East NY dog grooming options. Additionally, I cater to the needs
                of younger pups with our puppy grooming services, ensuring that
                every dog feels comfortable and cared for.
              </p>
            </details>

            <details>
              <summary>Specialty Grooming Tailored to Your Dog</summary>
              <p>
                Every dog is unique, which is why my dog grooming services in
                Brooklyn are designed to cater to your dog’s specific needs. As
                an experienced anxious dog groomer, I provide personalized
                one-on-one grooming that addresses everything from routine
                maintenance to specialized care for senior, medically
                compromised, fearful, and first-time puppies. If you’re
                searching for calm dog grooming in Brooklyn, I ensure that each
                experience is tailored to suit your dog’s individual
                requirements.
              </p>
            </details>

            <details>
              <summary>My Philosophy</summary>
              <p>
                My job isn’t to force your dog through the grooming process; it’s
                to adjust the experience to fit your dog’s needs. Some dogs
                require more than just a haircut; they need the attention of an
                anxious dog groomer who has the patience and experience to
                handle their unique challenges. That’s exactly why Rainbow Paws
                Grooming was established in Brooklyn. Every appointment is
                focused on building trust and reducing stress so your dog feels
                more comfortable with grooming over time. If you’re looking for
                dog grooming near Brooklyn, including East NY, know that I’m
                here to help.
              </p>
            </details>
          </div>
        </div>
      </section>

      <VisitSteps />
      <ReviewsSection />
    </div>
  )
}
