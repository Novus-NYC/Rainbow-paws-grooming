# Rainbow Paws Grooming

The Rainbow Paws website introduces the private, one-on-one dog grooming studio in Brooklyn, NY. It includes information about the business, grooming services, photos of past grooms, and contact and appointment details.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS, with page-specific stylesheets for the site's art direction
- Sharp for preparing selected gallery photos

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and section previews |
| `/about` | About Rainbow Paws and its grooming approach |
| `/services` | Grooming services and pricing |
| `/gallery` | Grooming photo gallery |
| `/contact` | Contact details and appointment request embed |

## Project structure

```text
src/
  app/                         App Router routes, root layout, and global styles
    about/                     About page and its stylesheet
    contact/                   Contact page and its stylesheet
    gallery/                   Gallery page, stylesheet, and gallery-only helpers
    services/                  Services page and its stylesheet
    page.tsx                   Homepage composition
    layout.tsx                 Shared root layout, fonts, metadata, and site chrome
    globals.css                Global styles and design tokens
  lib/
    components/
      chrome/                  Navbar, footer, and other site-wide frame components
      home/                    Homepage-only sections
      sections/                Sections reused across routes
      visuals/                 Shared photo frames, collages, accents, and illustrations
    data/                      Business details and reusable page content
public/
  gallery/                     Gallery photos and generated homepage composites
  logo/                        Rainbow Paws logo assets
  others/                      Additional dog photography
  wynter/                      Groomer photography
scripts/
  process-gallery-images.mjs   Creates selected composite photos for the homepage
```

## Business information

| Detail | Information |
| --- | --- |
| Business | Rainbow Paws Grooming |
| Website | [rainbowpawsgrooming.com](https://rainbowpawsgrooming.com/) |
| Studio | 660 Hegeman Ave, Brooklyn, NY 11207 |
| Appointment note | Private studio, by appointment |
| Phone | [(646) 963-1094](tel:+16469631094) |
| Hours | 11:00 AM to 7:00 PM |
| Instagram | [@rainbowpawsgrooming](https://www.instagram.com/rainbowpawsgrooming/) |
| TikTok | [@Groomerwynter](https://www.tiktok.com/@Groomerwynter) |
