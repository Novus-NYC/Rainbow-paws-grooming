export type NavigationItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
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
  hours: string
  socialLinks: SocialLink[]
}

export type PriceOption = {
  amount: string
  appliesTo?: string
}

export type GroomingService = {
  name: string
  prices: PriceOption[]
  summary: string
  description: string
  includes: string[]
}

export type FAQItem = {
  question: string
  answer: string
}

export type Review = {
  quote: string
  author: string
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
  hours: "11:00 AM to 7:00 PM",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/rainbowpawsgrooming/",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@Groomerwynter",
    },
  ],
} satisfies BusinessInfo

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
    href: "/contact#book",
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

export const groomingSteps = [
  {
    title: "Arrive at the studio",
    description:
      "Come in through the home to a quiet grooming room. No waiting room, no kennels.",
  },
  {
    title: "Settle in",
    description: "Your dog gets time to acclimate and relax before anything starts.",
  },
  {
    title: "One-on-one grooming",
    description: "One dog at a time, at the pace your dog can handle.",
  },
  {
    title: "A halfway break",
    description: "A rest, a water break, and treats if allowed.",
  },
  {
    title: "Finish and pickup",
    description:
      "Home fresh, and over time more comfortable with grooming.",
  },
] as const

export const pricingNote =
  "Every service is one-on-one. Prices start at the amounts shown and depend on breed, size, and coat condition."

export const groomingServices = [
  {
    name: "Puppy’s First Groom",
    prices: [{ amount: "$95+" }],
    summary:
      "A gentle first groom: bath, blow dry, nail trim, ear cleaning, and a tidy face, feet, and sanitary area, with plenty of patience, breaks, and treats if allowed.",
    description:
      "Give your puppy the best start to a lifetime of stress-free grooming with Brooklyn dog grooming that focuses on gentle introductions. This puppy grooming experience includes a bath, blow dry, nail trim, ear cleaning, light trimming (face, feet, sanitary), and plenty of patience, positive reinforcement, and breaks (with treats if allowed) to help build confidence and trust. Experience the Rainbow Paws Signature Grooming method to ensure your furry friend feels comfortable and loved.",
    includes: [
      "Bath, blow dry, nail trim, and ear cleaning",
      "Light trimming of face, feet, and sanitary area",
      "Breaks and treats (if allowed) to build trust",
    ],
  },
  {
    name: "Comfort Bath & Brush",
    prices: [
      { amount: "$55+", appliesTo: "Shorthair breeds" },
      { amount: "$65+", appliesTo: "Longhair breeds" },
    ],
    summary:
      "A spa day for dogs who don’t need a haircut: bath, blow dry, brush out, nail trim, and ear cleaning.",
    description:
      "Perfect for dogs who don’t need a haircut but deserve a relaxing spa day, our Brooklyn dog grooming services include house call dog grooming for your convenience. This package features a bath, blow dry, brush out, nail trim, ear cleaning, and finishing touches, ensuring your pet gets the Paws Signature grooming experience they deserve.",
    includes: [
      "Bath, blow dry, and brush out",
      "Nail trim and ear cleaning",
      "Finishing touches, no haircut needed",
    ],
  },
  {
    name: "Refresh Groom",
    prices: [{ amount: "$80+" }],
    summary:
      "Keeps your dog neat between full grooms: a light trim of the face, feet, and sanitary area, plus bath, nail trim, and ear cleaning.",
    description:
      "My signature dog grooming service in Brooklyn is perfect for keeping your dog neat and comfortable between full grooming appointments. This includes light trimming of the face, feet, sanitary area, and other touch-up areas as needed. A bath, nail trim, and ear cleaning are also included as part of the Refresh Groom.",
    includes: [
      "Light trim of face, feet, and sanitary area",
      "Touch-ups where needed",
      "Bath, nail trim, and ear cleaning",
    ],
  },
  {
    name: "The Rainbow Paws Signature",
    prices: [{ amount: "$110+" }],
    summary:
      "A full groom designed around your dog’s coat, lifestyle, and comfort, with bath, blow dry, haircut, ear cleaning, nail trim, and finishing touches.",
    description:
      "Experience my signature grooming, specifically designed for your dog’s coat, lifestyle, comfort, and individual needs. This Brooklyn dog grooming service includes a luxurious bath, blow dry, full haircut, nail trim, ear cleaning, and the finishing touches for a polished, happy pup. Enjoy the customized grooming experience with the Rainbow Paws Signature Grooming package.",
    includes: [
      "Luxurious bath and blow dry",
      "Full haircut designed for your dog",
      "Nail trim, ear cleaning, and finishing touches",
    ],
  },
  {
    name: "Miracle Makeover",
    prices: [{ amount: "$145+" }],
    summary:
      "Compassionate grooming for severely matted or neglected coats, with a plan to prevent future matting.",
    description:
      "Experience compassionate grooming for severely matted or neglected coats with my Brooklyn dog grooming services, prioritizing your dog’s well-being while restoring comfort, health, and confidence. This service includes everything in The Rainbow Paws Signature grooming package, plus a full start-over haircut. We will collaborate on an individualized plan for your dog to prevent future matting, ensuring a positive grooming experience.",
    includes: [
      "For severely matted or neglected coats",
      "Everything in the Signature, plus a full start-over haircut",
      "A plan to help prevent future matting",
    ],
  },
] satisfies GroomingService[]

export const addOnServices = [
  { name: "Nail filing", price: "$10" },
  { name: "Teeth brushing", price: "$10" },
  { name: "Dematting", price: "from $20" },
  { name: "Anal gland expression", price: "$20" },
  {
    name: "Deshedding (short-hair shedding breeds only)",
    price: "from $25",
  },
] as const

export const aLaCarteServices = {
  description:
    "À la carte means a single service on its own. You don’t need a full groom to book one, so these are handy for a quick fix between appointments.",
  consultationNote:
    "Not sure what your dog needs? Ask about a 20-minute grooming consultation.",
  items: [
    { name: "Ear cleaning & teeth brushing", price: "$25" },
    { name: "Teeth brushing only", price: "$10" },
    { name: "Face trim", price: "$25" },
    { name: "Nail trim", price: "$20" },
    { name: "Sanitary trim", price: "$20" },
    { name: "Anal gland expression", price: "$20" },
  ],
} as const

export const colorStudio = {
  name: "Rainbow Paws Color Studio",
  startingPrice: "$25 per area",
  description:
    "Express your dog’s unique personality with vibrant, pet-safe color using professional OPAWZ products. Whether you’re seeking a subtle pop of color or a bold creative design, every color application is customized for your dog’s comfort and safety. Got a dark-coated dog? We also offer pet-safe lighteners!",
  bookingNote:
    "Coloring services must be booked alongside a Comfort Bath, Refresh Groom, or our Paws Signature grooming package. It is not a stand-alone service. Full body transformations require a free consultation in advance and are not suitable for puppies under 9 months, or dogs that are behaviorally challenging or receiving a Miracle Makeover.",
} as const

export const serviceAreas = [
  "East New York",
  "Brownsville",
  "Canarsie",
  "Bedford-Stuyvesant",
  "Park Slope",
  "Crown Heights",
  "Howard Beach",
  "Flatbush",
] as const

export const faqs = [
  {
    question: "Why choose Rainbow Paws?",
    answer:
      "Every appointment is one-on-one in a calm, private home studio. Your dog gets time to acclimate, and a rest and water break halfway through. You get 16+ years of grooming experience and a veterinary technician background.",
  },
  {
    question: "How does home-based grooming work?",
    answer:
      "The studio is appointment-only, inside the home. You come in through the home to the grooming area, with no crowded waiting room and no kennel stress.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Prices depend on breed, size, and coat condition. See Services & Pricing for current rates.",
  },
  {
    question: "Are evening appointments available?",
    answer:
      "Limited evening appointments may be available on request. Mention your preferred days and times when you book.",
  },
  {
    question: "Any breed or weight restrictions?",
    answer:
      "Double-coated breeds are not groomed, because of the heavy shedding. House calls are limited to full grooms up to 30 lbs and short-hair baths up to 60 lbs.",
  },
  {
    question: "Do you groom cats?",
    answer: "No, Rainbow Paws no longer grooms cats.",
  },
  {
    question: "Do you travel?",
    answer:
      "House calls are only for clients with a pet spa in their building, with at least three days notice.",
  },
] satisfies FAQItem[]

export const reviewSummary = {
  rating: 4.9,
  count: 101,
  platform: "Google",
} as const

export const reviews = [
  {
    quote: "She was so patient and gentle with my coco",
    author: "Imani Gibson",
  },
  {
    quote: "Great service and my chucky looks like a new dog",
    author: "Franklyn Butler",
  },
] satisfies Review[]

export const bookingIntro =
  "Same day appointments may be available. Request a time below, or call to check availability."

export const bookingNotes = [
  "After you request a time, Wynter reviews your dog’s needs and confirms the best service, timing, and pricing.",
  "Same day and after-hours appointments by request when scheduling permits.",
] as const
