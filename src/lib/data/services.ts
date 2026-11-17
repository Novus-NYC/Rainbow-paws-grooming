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

export const servicesPageIntro =
  "At our Brooklyn dog grooming services, prices increase based on size and coat condition. Every appointment begins with a consultation. Understanding that every dog is unique, my grooming plans are customized based on your dog’s coat condition, health, behavior, and comfort, ensuring the best experience with our Rainbow Signature Grooming."

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
    "Express your dog’s unique personality with vibrant, pet-safe color using professional OPAWZ products. Whether you’re seeking a subtle pop of color or a bold creative design, every color application is customized for your dog’s comfort and safety.",
  lightenerNote: "Got a dark-coated dog? We also offer pet-safe lighteners!",
  bookingNote:
    "Coloring services must be booked alongside a Comfort Bath, Refresh Groom, or our Paws Signature grooming package. It is not a stand-alone service. Full body transformations require a free consultation in advance and are not suitable for puppies under 9 months, or dogs that are behaviorally challenging or receiving a Miracle Makeover.",
} as const
