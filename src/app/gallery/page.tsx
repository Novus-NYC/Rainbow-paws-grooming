import "./gallery.css"
import "@/lib/components/photo-frames.css"
import "@/lib/components/reviews-section.css"
import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import { PhotoFrame, PhotoShapeDefs } from "@/lib/components/photo-frames"
import { Accent, HeartDoodle, PawPrint, SparkleDoodle } from "@/lib/components/photo-accents"
import { GroomingIllustration } from "@/lib/components/grooming-illustrations"
import { ReviewsSection } from "@/lib/components/reviews-section"
import GalleryBackToTop from "@/lib/components/gallery-back-to-top"
import GalleryRevealObserver from "./gallery-reveal"
import { businessInfo, primaryActions } from "@/lib/data/business"
import { galleryCategories, type GalleryCategory, type GalleryPhoto } from "@/lib/data/gallery"

export const metadata: Metadata = {
  title: "Gallery",
  description: `Real dogs and grooming photos from ${businessInfo.name}.`,
}

const galleryNavigation = [
  { label: "All", href: "#gallery-sections" },
  ...galleryCategories.map(({ label, id }) => ({ label, href: `#${id}` })),
]

function GalleryPolaroid({
  photo,
  rotation,
  sizes,
}: {
  photo: GalleryPhoto
  rotation: number
  sizes: string
}) {
  const split = photo.split ?? 0.5
  const className = [
    "gallery-polaroid",
    photo.caption === "after" ? "gallery-polaroid--after" : "",
  ].filter(Boolean).join(" ")

  return (
    <figure
      className={className}
      style={
        {
          "--polaroid-rotation": `${rotation}deg`,
        } as CSSProperties
      }
    >
      <div className="gallery-polaroid__photo">
        {photo.stripPanels ? (
          <div className="gallery-polaroid__strip" role="group" aria-label={photo.alt}>
            {photo.stripPanels.map((panel) => (
              <div className={`gallery-polaroid__strip-panel gallery-polaroid__strip-panel--${panel.crop}`} key={panel.crop}>
                <Image
                  className={`gallery-polaroid__image gallery-polaroid__image--${panel.crop}${panel.src ? " gallery-polaroid__image--independent" : ""}`}
                  src={panel.src ?? photo.src}
                  alt={panel.alt}
                  fill
                  sizes={sizes}
                  style={{
                    objectPosition: panel.position ?? "50% 50%",
                  } as CSSProperties}
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            className={`gallery-polaroid__image${photo.crop ? ` gallery-polaroid__image--${photo.crop}` : ""}`}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            style={{
              objectPosition: photo.position ?? "50% 50%",
              "--crop-left-width": `${100 / split}%`,
              "--crop-right-width": `${100 / (1 - split)}%`,
              "--crop-right-offset": `${-(split / (1 - split)) * 100}%`,
            } as CSSProperties}
          />
        )}
      </div>
      {photo.caption ? <figcaption>{photo.caption}</figcaption> : <span className="gallery-polaroid__caption-space" aria-hidden="true" />}
    </figure>
  )
}

function GalleryHeroDoodles() {
  return (
    <>
      <Accent
        className="gallery-page__doodle gallery-page__doodle--heart"
        pos={{ left: "-4%", top: "2%" }}
        size={9}
        tilt={-12}
        color="var(--r7)"
      >
        <HeartDoodle />
      </Accent>
      <Accent
        className="gallery-page__doodle gallery-page__doodle--comb"
        pos={{ right: "-5%", top: "-2%" }}
        size={20}
        tilt={2}
        color="#44b7bb"
      >
        <GroomingIllustration type="comb" size="100%" decorative />
      </Accent>
      <Accent
        className="gallery-page__doodle gallery-page__doodle--sparkle-one"
        pos={{ right: "-4%", bottom: "6%" }}
        size={8}
        color="var(--r3)"
      >
        <SparkleDoodle />
      </Accent>
      <Accent
        className="gallery-page__doodle gallery-page__doodle--sparkle-two"
        pos={{ right: "3%", bottom: "-6%" }}
        size={5}
        color="var(--r3)"
      >
        <SparkleDoodle />
      </Accent>
      <Accent
        className="gallery-page__doodle gallery-page__doodle--paw"
        pos={{ left: "4%", bottom: "-2%" }}
        size={9}
        tilt={-12}
        color="#44b7bb"
      >
        <PawPrint />
      </Accent>
    </>
  )
}

function GalleryCategorySection({ category }: { category: GalleryCategory }) {
  const individualPhotos = category.id === "fun-styles" || category.id === "pet-safe-dye"

  return (
    <section
      className={`gallery-category${individualPhotos ? " gallery-category--individual" : ""}`}
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      style={{ "--category-accent": category.accent } as CSSProperties}
    >
      <header className="gallery-category__copy">
        <div data-gallery-reveal>
          <h2 id={`${category.id}-title`}>{category.title}</h2>
          <p>{category.description}</p>
        </div>
      </header>

      <div className="gallery-category__photos">
        {individualPhotos
          ? category.entries.flatMap((entry) => entry.photos).map((photo, photoIndex) => (
            <div
              className="gallery-category__entry gallery-category__entry--individual"
              key={`${photo.src}-${photo.crop ?? "full"}-${photoIndex}`}
              data-gallery-reveal
              style={{ "--reveal-delay": `${(photoIndex % 3) * 0.08}s` } as CSSProperties}
            >
              <GalleryPolaroid
                photo={photo}
                sizes="(max-width: 560px) 42vw, (max-width: 1180px) 25vw, 15vw"
                rotation={photoIndex % 2 === 0 ? -2 : 1.5}
              />
              {photoIndex % 2 === 0 ? (
                <HeartDoodle className="gallery-category__doodle gallery-category__doodle--heart" />
              ) : (
                <SparkleDoodle className="gallery-category__doodle gallery-category__doodle--sparkle" />
              )}
            </div>
          ))
          : category.entries.map((entry, entryIndex) => (
          <div
            className="gallery-category__entry"
            key={entry.id}
            data-gallery-reveal
            style={{ "--reveal-delay": `${(entryIndex % 3) * 0.08}s` } as CSSProperties}
            role="group"
            aria-label={
              individualPhotos
                ? `${category.label} photo ${entryIndex + 1}`
                : `${category.label} grooming photos ${entryIndex + 1}`
            }
          >
            {entry.photos.map((photo, photoIndex) => (
              <GalleryPolaroid
                key={`${entry.id}-${photo.crop ?? "full"}`}
                photo={photo}
                sizes={
                  individualPhotos
                    ? "(max-width: 560px) 42vw, (max-width: 980px) 20vw, 15vw"
                    : "(max-width: 560px) 82vw, (max-width: 980px) 42vw, 24vw"
                }
                rotation={individualPhotos ? (photoIndex % 2 === 0 ? -2 : 1.5) : photoIndex === 0 ? -4 : 3}
              />
            ))}
            {entryIndex % 2 === 0 ? (
              <HeartDoodle className="gallery-category__doodle gallery-category__doodle--heart" />
            ) : (
              <SparkleDoodle className="gallery-category__doodle gallery-category__doodle--sparkle" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default function GalleryPage() {
  return (
    <div className="gallery-page" id="gallery-page-top">
      <PhotoShapeDefs />
      <header className="gallery-page__hero" aria-labelledby="gallery-title">
        <div className="gallery-page__hero-inner">
          <div className="gallery-page__hero-copy" data-gallery-reveal>
            <h1 id="gallery-title">Real dogs. Real grooms. Every kind of glow.</h1>
            <p>
              From gentle first grooms to joyful makeovers and playful color, meet some of the dogs
              who make Rainbow Paws special.
            </p>
          </div>
          <PhotoFrame
            className="gallery-page__hero-photo"
            src="/others/rainbow-dog.webp"
            alt="A black-and-white dog with rainbow-colored fur sitting on grass."
            sizes="(max-width: 760px) 78vw, 42vw"
            shape="blob"
            accent="var(--r7)"
            offset={[10, 10]}
          >
            <GalleryHeroDoodles />
          </PhotoFrame>
        </div>
      </header>

      <section className="gallery-page__content section-rainbow" aria-label="Grooming photo gallery">
        <div className="gallery-page__inner">
          <nav className="gallery-page__category-nav" aria-label="Gallery categories">
            {galleryNavigation.map((item, index) => (
              <a
                className={index === 0 ? "gallery-page__category-link gallery-page__category-link--all" : "gallery-page__category-link"}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="gallery-page__sections" id="gallery-sections">
            {galleryCategories.map((category) => (
              <GalleryCategorySection category={category} key={category.id} />
            ))}
          </div>

          <div className="gallery-page__booking" data-gallery-reveal>
            <Link className="home-hero-button home-hero-button-primary" href={primaryActions.booking.href}>
              {primaryActions.booking.label}
            </Link>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <GalleryBackToTop />
      <GalleryRevealObserver />
    </div>
  )
}
