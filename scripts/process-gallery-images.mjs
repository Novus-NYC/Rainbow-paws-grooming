import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const galleryDirectory = path.join(projectRoot, "public", "gallery")
const outputDirectory = path.join(galleryDirectory, "processed")
const frame = { width: 1200, height: 1091, gutter: 4 }
const leftWidth = Math.floor((frame.width - frame.gutter) / 2)
const rightWidth = frame.width - frame.gutter - leftWidth

await mkdir(outputDirectory, { recursive: true })

async function makePanel(source, crop, width, height) {
  let image = sharp(path.join(galleryDirectory, source))

  if (crop) image = image.extract(crop)

  return image
    .resize(width, height, {
      fit: "cover",
      position: sharp.strategy.centre,
    })
    .toBuffer()
}

async function saveComposite(name, panels) {
  const output = path.join(outputDirectory, name)
  const images = await Promise.all(
    panels.map(async ({ source, crop, left, top, width, height }) => ({
      input: await makePanel(source, crop, width, height),
      left,
      top,
    })),
  )

  await sharp({
    create: {
      width: frame.width,
      height: frame.height,
      channels: 3,
      background: "#fff",
    },
  })
    .composite(images)
    .webp({ quality: 92, effort: 6 })
    .toFile(output)

  console.log(`Created ${path.relative(projectRoot, output)}`)
}

function sideBySide(source, leftCrop, rightCrop) {
  return [
    {
      source,
      crop: leftCrop,
      left: 0,
      top: 0,
      width: leftWidth,
      height: frame.height,
    },
    {
      source,
      crop: rightCrop,
      left: leftWidth + frame.gutter,
      top: 0,
      width: rightWidth,
      height: frame.height,
    },
  ]
}

function individualPair(leftSource, rightSource) {
  return [
    {
      source: leftSource,
      left: 0,
      top: 0,
      width: leftWidth,
      height: frame.height,
    },
    {
      source: rightSource,
      left: leftWidth + frame.gutter,
      top: 0,
      width: rightWidth,
      height: frame.height,
    },
  ]
}

await saveComposite(
  "home-anxious-dogs.webp",
  sideBySide(
    "anxious-dog-3.webp",
    { left: 32, top: 32, width: 555, height: 1137 },
    { left: 613, top: 32, width: 555, height: 1137 },
  ),
)

await saveComposite(
  "home-senior-dogs.webp",
  sideBySide(
    "senior-dog-1.webp",
    { left: 32, top: 32, width: 553, height: 1136 },
    { left: 614, top: 32, width: 554, height: 1136 },
  ),
)

await saveComposite("home-puppies.webp", [
  {
    source: "puppy-1.webp",
    crop: { left: 32, top: 32, width: 553, height: 1136 },
    left: 0,
    top: 0,
    width: leftWidth,
    height: frame.height,
  },
  {
    source: "puppy-1.webp",
    crop: { left: 614, top: 32, width: 554, height: 553 },
    left: leftWidth + frame.gutter,
    top: 0,
    width: rightWidth,
    height: 543,
  },
  {
    source: "puppy-1.webp",
    crop: { left: 614, top: 614, width: 554, height: 554 },
    left: leftWidth + frame.gutter,
    top: 547,
    width: rightWidth,
    height: frame.height - 547,
  },
])

await saveComposite(
  "home-behavioral.webp",
  sideBySide(
    "challenging-dog-1.webp",
    { left: 2, top: 2, width: 597, height: 1195 },
    { left: 601, top: 2, width: 597, height: 1195 },
  ),
)

await saveComposite(
  "home-makeovers.webp",
  sideBySide(
    "miracle-makeover-2.webp",
    { left: 4, top: 4, width: 595, height: 1191 },
    { left: 600, top: 4, width: 596, height: 1191 },
  ),
)

await saveComposite(
  "home-fun-styles-v2.webp",
  individualPair("fun-style-1.webp", "fun-style-5.webp"),
)

await saveComposite(
  "home-pet-safe-hair-dye-v2.webp",
  individualPair("hair-dye-7.webp", "hair-dye-13.webp"),
)
