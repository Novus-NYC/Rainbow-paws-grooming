import { HomeHero } from "@/lib/components/home/home-hero"
import { TrustBanner } from "@/lib/components/home/trust-banner"
import HomepageAbout from "@/lib/components/home/homepage-about"
import { VisitSteps } from "@/lib/components/home/visit-steps"
import { HomeServices } from "@/lib/components/home/home-services"
import { primaryActions } from "@/lib/data/business"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBanner />
      <HomepageAbout
        imageSrc="/wynter/wynter-3.webp"
        imageAlt="Wynter gently offering a treat to a tan dog in a pink harness."
        imagePosition="50% 50%"
        meetHref="/about"
        bookHref={primaryActions.booking.href}
      />
      <VisitSteps />
      <HomeServices />
    </>
  )
}
