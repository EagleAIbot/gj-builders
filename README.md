# GJ Builders Website

Clean, modern marketing site for GJ Builders — local building & construction services.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Before going live

Update these constants at the top of `src/App.jsx`:

- `PHONE` / `PHONE_DISPLAY` — real business number
- `EMAIL` — real enquiry email
- `AREAS` — service areas covered
- `GALLERY` — replace Unsplash placeholders with real project photos
- `REVIEWS` — replace with real Google reviews
- Google reviews link in the reviews section

Form submissions use [FormSubmit.co](https://formsubmit.co) — activate the email address on first submission.

## Stack

- React 19 + Vite
- Lucide React icons
- Single-page layout with anchor navigation
- Mobile sticky call button

## Design

- Navy `#0A2342` · White · Grey `#F5F5F5` · Charcoal `#333333`
- Inter font
