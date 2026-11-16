import "@/lib/components/home/home-sections.css"
import "@/lib/components/home/homepage-about.css"
import "@/lib/components/sections/visit-steps.css"
import "@/lib/components/home/home-services.css"
import "@/lib/components/home/home-gallery.css"
import "@/lib/components/sections/reviews-section.css"
import "@/lib/components/home/home-faqs.css"
import { HomeHero } from "@/lib/components/home/home-hero"
import { TrustBanner } from "@/lib/components/home/trust-banner"
import HomepageAbout from "@/lib/components/home/homepage-about"
import { VisitSteps } from "@/lib/components/sections/visit-steps"
import { HomeServices } from "@/lib/components/home/home-services"
import { HomeGallery } from "@/lib/components/home/home-gallery"
import { ReviewsSection } from "@/lib/components/sections/reviews-section"
import { HomeFaqs } from "@/lib/components/home/home-faqs"
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
      <HomeGallery />
      <ReviewsSection />
      <HomeFaqs />
    </>
  )
}
