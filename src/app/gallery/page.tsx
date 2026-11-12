import Image from "next/image"
import type { Metadata } from "next"
import { businessInfo } from "@/lib/data/business"
import { galleryItems } from "@/lib/data/gallery"

export const metadata: Metadata = {
  title: "Gallery",
  description: `Grooming photos from ${businessInfo.name}.`,
}

export default function GalleryPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-6 py-16" aria-labelledby="gallery-title">
      <header className="max-w-3xl space-y-4">
        <h1 id="gallery-title">Gallery</h1>
        <p>{businessInfo.description}</p>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <li key={item.src}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-mist">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 font-semibold">{item.category}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
