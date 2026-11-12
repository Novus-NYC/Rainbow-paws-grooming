export type FAQItem = {
  question: string
  answer: string
}

export type Review = {
  quote: string
  author: string
}

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

export const sameDayBookingNote = bookingNotes[1]
