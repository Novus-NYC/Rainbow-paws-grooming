import type { Metadata } from "next"
import Link from "next/link"
import {
  aLaCarteServices,
  addOnServices,
  colorStudio,
  groomingServices,
  pricingNote,
} from "@/lib/data/services"
import { businessInfo, primaryActions } from "@/lib/data/business"

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Grooming services and starting prices from ${businessInfo.name}.`,
}

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-6 py-16">
      <header className="max-w-3xl space-y-5">
        <h1>Services &amp; Pricing</h1>
        <p className="text-lg">{pricingNote}</p>
      </header>

      <section aria-labelledby="grooming-services-title">
        <h2 id="grooming-services-title" className="mb-8">Grooming services</h2>
        <ul className="divide-y divide-border">
          {groomingServices.map((service) => (
            <li key={service.name} className="grid gap-3 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8">
              <div className="space-y-2">
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <ul className="list-inside list-disc text-sm">
                  {service.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <ul className="space-y-1 font-semibold md:text-right">
                {service.prices.map((price) => {
                  const appliesTo = "appliesTo" in price ? price.appliesTo : undefined

                  return (
                    <li key={`${price.amount}-${appliesTo ?? "standard"}`}>
                      {appliesTo ? `${appliesTo}: ` : ""}{price.amount}
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4">À la carte</h2>
          <p className="mb-5">{aLaCarteServices.description}</p>
          <ul className="divide-y divide-border">
            {aLaCarteServices.items.map((item) => (
              <li key={item.name} className="flex justify-between gap-4 py-3">
                <span>{item.name}</span><strong>{item.price}</strong>
              </li>
            ))}
          </ul>
          <p className="mt-4">{aLaCarteServices.consultationNote}</p>
        </div>

        <div>
          <h2 className="mb-4">Add-ons</h2>
          <ul className="divide-y divide-border">
            {addOnServices.map((item) => (
              <li key={item.name} className="flex justify-between gap-4 py-3">
                <span>{item.name}</span><strong>{item.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl space-y-4" aria-labelledby="color-studio-title">
        <h2 id="color-studio-title">{colorStudio.name}</h2>
        <p>{colorStudio.description}</p>
        <p>{colorStudio.bookingNote}</p>
        <p className="font-semibold">Starting at {colorStudio.startingPrice}</p>
      </section>

      <p>
        <Link className="home-hero-button home-hero-button-primary" href={primaryActions.booking.href}>
          {primaryActions.booking.label}
        </Link>
      </p>
    </div>
  )
}
