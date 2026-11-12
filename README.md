# Rainbow Paws Grooming

The Rainbow Paws website introduces the private Brooklyn grooming studio, its services, photos, and contact details.

## Routes

- `/` — Homepage
- `/about` — About Rainbow Paws
- `/services` — Grooming services and pricing
- `/contact` — Contact and appointment details
- `/gallery` — Grooming photo gallery

## Project structure

- `src/app` — App Router pages, root layout, and global styles
- `src/lib/components` — Shared site components
- `src/lib/components/home` — Homepage sections
- `src/lib/data` — Centralized business, service, FAQ, review, and gallery content
- `public` — Logo and photography assets

## Development

Install the locked dependencies and start the local development server:

```bash
npm ci
npm run dev
```

Create a production build with `npm run build`. Run the TypeScript check with `npm run typecheck`.
