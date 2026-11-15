export type NavigationItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  handle: string
}

export type BusinessInfo = {
  name: string
  shortName: string
  website: string
  tagline: string
  description: string
  phone: {
    display: string
    href: string
  }
  address: {
    street: string
    city: string
    region: string
    postalCode: string
    mapsUrl: string
  }
  appointmentNote: string
  hours: string
  socialLinks: SocialLink[]
}

export const businessInfo = {
  name: "Rainbow Paws Grooming",
  shortName: "Rainbow Paws",
  website: "https://rainbowpawsgrooming.com/",
  tagline: "A quieter way to groom a nervous dog.",
  description:
    "Private, one-on-one grooming in a calm home studio in Brooklyn, for anxious dogs, seniors, and first-time puppies.",
  phone: {
    display: "(646) 963-1094",
    href: "tel:+16469631094",
  },
  address: {
    street: "660 Hegeman Ave",
    city: "Brooklyn",
    region: "NY",
    postalCode: "11207",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=660+Hegeman+Ave+Brooklyn+NY+11207",
  },
  appointmentNote: "Private studio, by appointment.",
  hours: "11:00 AM to 7:00 PM",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/rainbowpawsgrooming/",
      handle: "@rainbowpawsgrooming",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@Groomerwynter",
      handle: "@Groomerwynter",
    },
  ],
} satisfies BusinessInfo

export const aboutContent = {
  headline: "We adjust the groom to your dog, not the other way around.",
  paragraphs: [
    "Not every dog thrives in a busy salon, and not every groomer has the patience for a dog who needs more. Rainbow Paws is a private studio inside a Brooklyn home, built for dogs who have been overlooked, turned away, or misunderstood.",
    "With 16+ years of grooming and a veterinary technician background, the focus is on senior, medically compromised, fearful, and first-time dogs.",
  ],
} as const

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
] satisfies NavigationItem[]

export const primaryActions = {
  booking: {
    label: "Book an Appointment",
    href: "/contact",
  },
  services: {
    label: "View Services and Pricing",
    href: "/services",
  },
  gallery: {
    label: "See the Full Gallery",
    href: "/gallery",
  },
} satisfies Record<string, NavigationItem>

export const trustSignals = [
  "16+ years grooming",
  "Former veterinary technician",
  "One dog at a time",
  "Private home studio",
] as const
