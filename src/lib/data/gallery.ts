type GalleryCrop = "left" | "right"

type GalleryStripCrop = "right-top" | "right-bottom"

type GalleryStripPanel = {
  src?: string
  crop: GalleryStripCrop
  alt: string
  position?: string
  stretchX?: number
}

export type GalleryPhoto = {
  src: string
  alt: string
  crop?: GalleryCrop
  /** Fraction of a side-by-side source image occupied by the before photo. */
  split?: number
  position?: string
  stripPanels?: GalleryStripPanel[]
  caption?: "before" | "after"
}

type GalleryEntry = {
  id: string
  photos: GalleryPhoto[]
}

export type GalleryCategory = {
  id: string
  label: string
  title: string
  description: string
  accent: string
  entries: GalleryEntry[]
}

function beforeAfter(
  id: string,
  src: string,
  beforeAlt: string,
  afterAlt: string,
  positions: { before?: string; after?: string; split?: number } = {},
): GalleryEntry {
  return {
    id,
    photos: [
      { src, alt: beforeAlt, crop: "left", position: positions.before, split: positions.split, caption: "before" },
      { src, alt: afterAlt, crop: "right", position: positions.after, split: positions.split, caption: "after" },
    ],
  }
}

function photoPair(
  id: string,
  src: string,
  leftAlt: string,
  rightAlt: string,
  positions: { left?: string; right?: string } = {},
): GalleryEntry {
  return {
    id,
    photos: [
      { src, alt: leftAlt, crop: "left", position: positions.left },
      { src, alt: rightAlt, crop: "right", position: positions.right },
    ],
  }
}

function beforeAfterPhotoStrip(
  id: string,
  src: string,
  beforeAlt: string,
  afterTopAlt: string,
  afterBottomAlt: string,
  positions: { before?: string; afterTop?: string; afterBottom?: string; afterTopSrc?: string; afterBottomStretchX?: number } = {},
): GalleryEntry {
  return {
    id,
    photos: [
      { src, alt: beforeAlt, crop: "left", position: positions.before, caption: "before" },
      {
        src,
        alt: `${afterTopAlt} ${afterBottomAlt}`,
        stripPanels: [
          { src: positions.afterTopSrc, crop: "right-top", alt: afterTopAlt, position: positions.afterTop },
          { crop: "right-bottom", alt: afterBottomAlt, position: positions.afterBottom, stretchX: positions.afterBottomStretchX },
        ],
        caption: "after",
      },
    ],
  }
}

function singlePhoto(id: string, src: string, alt: string): GalleryEntry {
  return { id, photos: [{ src, alt }] }
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: "anxious-dogs",
    label: "Anxious dogs",
    title: "Low maintenance haircuts for anxious dogs",
    description: "Short, easy-care styles that keep sessions calm and quick.",
    accent: "var(--r1)",
    entries: [
      beforeAfter("anxious-1", "/gallery/anxious-dog-1.webp", "A shaggy, light-colored dog sitting in a blue grooming tub.", "A neatly trimmed white dog wearing a bright patterned neck scarf."),
      beforeAfter("anxious-2", "/gallery/anxious-dog-2.webp", "A shaggy tan dog standing on a grooming table.", "A neatly trimmed tan dog wearing a colorful bandana."),
      beforeAfter("anxious-3", "/gallery/anxious-dog-3.webp", "A shaggy black-and-tan dog on a grooming table.", "A black-and-tan dog with a tidy trim and a patterned necktie."),
      beforeAfter("anxious-4", "/gallery/anxious-dog-4.webp", "A fluffy tan dog with a long coat on a grooming table.", "A tan dog with a shorter, shaped coat and its tongue out."),
      beforeAfter("anxious-5", "/gallery/anxious-dog-5.webp", "A cream-colored dog with long, tousled facial fur being held gently.", "A neatly trimmed cream-colored dog wearing a blue bandana."),
    ],
  },
  {
    id: "senior-dogs",
    label: "Senior dogs",
    title: "Low maintenance haircuts for senior dogs",
    description: "Gentle handling and comfortable cuts for older dogs.",
    accent: "var(--r2)",
    entries: [
      beforeAfter("senior-1", "/gallery/senior-dog-1.webp", "A white curly-coated dog with a long coat and red grooming harness.", "A neatly groomed white dog wearing a dark floral bandana.", { before: "50% 18%", after: "50% 18%" }),
      beforeAfterPhotoStrip("senior-2", "/gallery/senior-dog-2.webp", "A shaggy white curly-coated dog standing on a blue grooming table.", "Wynter grooming a white dog during an appointment.", "A white dog resting on the floor at home.", { afterTop: "50% 100%", afterTopSrc: "/wynter/wynter-2.webp", afterBottom: "50% 68%", afterBottomStretchX: 1.1 }),
      beforeAfter("senior-3", "/gallery/senior-dog-3.webp", "A wet cream-colored dog during a bath.", "A neatly groomed white dog wearing a blue bow."),
      beforeAfter("senior-4", "/gallery/senior-dog-4.webp", "A shaggy gray-and-white dog sitting on a grooming table.", "A neatly trimmed gray-and-white dog with red bows, resting on a blanket.", { before: "50% 18%" }),
      beforeAfter("senior-5", "/gallery/senior-dog-5.webp", "A fluffy white dog with a long coat on a grooming table.", "A neatly trimmed white dog wearing a pink scarf."),
    ],
  },
  {
    id: "behavioral",
    label: "Behavioral",
    title: "Behaviorally challenging grooming",
    description: "Patience, breaks, and a pace your dog can handle.",
    accent: "var(--r3)",
    entries: [
      beforeAfter("behavioral-1", "/gallery/challenging-dog-1.webp", "A groomer brushing a small cream-colored dog while supporting it.", "A freshly groomed white curly-coated dog wearing a blue paw-print bandana."),
      beforeAfter("behavioral-3", "/gallery/challenging-dog-3.webp", "A fluffy white dog being brushed on a grooming table.", "A freshly groomed white dog sitting in a blue grooming sling.", { before: "50% 50%", after: "50% 50%", split: 0.60 }),
      beforeAfter("behavioral-4", "/gallery/challenging-dog-4.webp", "A white dog being gently held during grooming.", "A freshly groomed white dog standing on a blue grooming table.", { before: "50% 22%", after: "50% 14%", split: 0.60 }),
      beforeAfter("behavioral-5", "/gallery/challenging-dog-5.webp", "A shaggy tan dog standing on a grooming table.", "A neatly trimmed tan dog wearing a teal bow.", { split: 0.60 })
    ],
  },
  {
    id: "puppies",
    label: "Puppies",
    title: "Puppy’s first grooming",
    description: "A calm first groom that builds confidence.",
    accent: "var(--r4)",
    entries: [
      beforeAfterPhotoStrip("puppy-1", "/gallery/puppy-1.webp", "A tan puppy resting its paws on a grooming table.", "A tan puppy lying on a grooming table.", "A close-up of a tan puppy resting its head.", { afterTop: "50% 28%", afterBottom: "50% 62%" }),
      beforeAfter("puppy-2", "/gallery/puppy-2.webp", "A small cream-and-tan dog with long facial fur.", "A neatly trimmed cream-and-tan dog wearing a colorful bandana."),
      beforeAfter("puppy-3", "/gallery/puppy-3.webp", "A shaggy dark gray puppy standing on a grooming table.", "A freshly groomed dark gray puppy wearing a fall-pattern bandana."),
      beforeAfter("puppy-4", "/gallery/puppy-4.webp", "A fluffy tan puppy sitting on a grooming table.", "A neatly groomed tan puppy wearing a pumpkin-pattern bandana."),
    ],
  },
  {
    id: "makeovers",
    label: "Makeovers",
    title: "Miracle makeovers",
    description: "Compassionate care for matted or neglected coats.",
    accent: "var(--r5)",
    entries: [
      beforeAfter("makeover-1", "/gallery/miracle-makeover-1.webp", "A shaggy gray-and-white dog with fur covering much of its face.", "A freshly groomed gray-and-white dog wearing an orange patterned bandana."),
      beforeAfter("makeover-2", "/gallery/miracle-makeover-2.webp", "A cream-colored dog with a long, curly coat.", "A neatly trimmed cream-colored dog wearing a Halloween bandana."),
      beforeAfter("makeover-3", "/gallery/miracle-makeover-3.webp", "A shaggy gray dog with long facial fur on a grooming table.", "A neatly trimmed gray dog wearing a red bow tie."),
      beforeAfter("makeover-4", "/gallery/miracle-makeover-4.webp", "A cream-colored curly-coated dog with longer fur.", "A freshly groomed cream-colored dog with a short, rounded trim.", { before: "50% 14%" }),
    ],
  },
  {
    id: "fun-styles",
    label: "Fun styles",
    title: "Fun styles",
    description: "Bandanas, bows, and playful cuts.",
    accent: "var(--r6)",
    entries: [
      singlePhoto("fun-style-1", "/gallery/fun-style-1.webp", "A tan curly-coated dog wearing a green and purple bandana."),
      singlePhoto("fun-style-2", "/gallery/fun-style-2.webp", "A white dog with a rainbow-colored bandana."),
      singlePhoto("fun-style-3", "/gallery/fun-style-3.webp", "A short-haired cream-colored dog standing on a grooming table."),
      singlePhoto("fun-style-4", "/gallery/fun-style-4.webp", "A small cream-colored dog with a neatly trimmed coat."),
      singlePhoto("fun-style-5", "/gallery/fun-style-5.webp", "A white-and-brown dog wearing bright green bows and a matching bow tie."),
    ],
  },
  {
    id: "pet-safe-dye",
    label: "Pet-safe dye",
    title: "Pet-safe hair dye",
    description: "Vibrant, pet-safe color.",
    accent: "var(--r7)",
    entries: [
      singlePhoto("hair-dye-1", "/gallery/hair-dye-1.webp", "A white curly-coated dog with orange color on its ears and tail."),
      photoPair("hair-dye-2", "/gallery/hair-dye-2.webp", "A black-and-white dog with rainbow color on its coat, photographed from the front.", "A black-and-white dog showing its rainbow-colored coat from behind.", { left: "50% 24%", right: "50% 20%" }),
      singlePhoto("hair-dye-3", "/gallery/hair-dye-3.webp", "A black dog with bright pink paws, a red heart on its chest, and a colorful hat."),
      singlePhoto("hair-dye-4", "/gallery/hair-dye-4.webp", "A white dog with pink heart shapes and green color on its coat."),
      singlePhoto("hair-dye-5", "/gallery/hair-dye-5.webp", "A white dog with rainbow color on its tail and a colorful bandana."),
      singlePhoto("hair-dye-7", "/gallery/hair-dye-7.webp", "A small white dog with orange color on its ears and paws."),
      singlePhoto("hair-dye-8", "/gallery/hair-dye-8.webp", "A white dog with purple color on its ears, tail, and paws."),
      singlePhoto("hair-dye-9", "/gallery/hair-dye-9.webp", "A small dog with purple color on its ears and paws."),
      singlePhoto("hair-dye-10", "/gallery/hair-dye-10.webp", "A small white dog with green and yellow color accents on its coat."),
      singlePhoto("hair-dye-11", "/gallery/hair-dye-11.webp", "A cream-colored dog lying down with a bright green dyed tail."),
      singlePhoto("hair-dye-12", "/gallery/hair-dye-12.webp", "A small white dog with pink color on its ears and brown color on its paws."),
      singlePhoto("hair-dye-13", "/gallery/hair-dye-13.webp", "A black-and-white dog with purple color on its legs, photographed outdoors."),
    ],
  },
]

export const homepageGalleryItems = [
  {
    title: "Anxious dogs",
    description: "Short, easy-care styles.",
    src: "/gallery/processed/home-anxious-dogs.webp",
    alt: "Two black-and-tan dogs, one shaggy and one neatly groomed.",
    comparison: true,
  },
  {
    title: "Senior dogs",
    description: "Gentle, comfortable cuts.",
    src: "/gallery/processed/home-senior-dogs.webp",
    alt: "Two small white senior dogs with freshly groomed coats.",
    comparison: true,
  },
  {
    title: "Puppies",
    description: "A calm first groom.",
    src: "/gallery/processed/home-puppies.webp",
    alt: "A brown puppy shown in one large photo and two close-up poses.",
    comparison: true,
  },
  {
    title: "Behavioral",
    description: "At your dog's pace.",
    src: "/gallery/processed/home-behavioral.webp",
    alt: "A small white dog during brushing and in a finished portrait.",
    comparison: true,
  },
  {
    title: "Makeovers",
    description: "Comfort restored.",
    src: "/gallery/processed/home-makeovers.webp",
    alt: "Two white dogs with fresh cuts and bright bandanas.",
    comparison: true,
  },
  {
    title: "Fun styles",
    description: "Bandanas, bows, and playful cuts.",
    src: "/gallery/processed/home-fun-styles-v2.webp",
    alt: "A black-and-white dog with purple and blue color beside a white dog with green bows.",
    comparison: false,
  },
  {
    title: "Pet-safe hair dye",
    description: "Vibrant, pet-safe color.",
    src: "/gallery/processed/home-pet-safe-hair-dye-v2.webp",
    alt: "A white dog with orange ear and coat color beside a black-and-white dog with blue and purple color.",
    comparison: false,
  },
] as const
