# LittleTama — Tamagotchi Collection Portfolio

A personal Tamagotchi collection tracker and showcase built with Next.js. Browse your virtual pet collection, view market values, and celebrate every shell — from vintage classics to modern Sanrio collaborations.

## Pages

- **Home** — Hero landing with featured pieces, collection stats, and floating animations
- **Collection** — Browse all Tamagotchi entries with infinite scroll, search, and rarity/condition filters
- **Market** — Portfolio summary, rarity breakdown, rankings, and full valuation table
- **About** — Collector journey timeline, fun facts, collecting tips, and contact form

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- TanStack Query (React Query)
- Framer Motion
- Axios
- Lucide React icons
- Cognito Forms (contact form embed)

## Project Structure

```
app/
  page.tsx                  # Home (server component)
  layout.tsx                # Root layout with Navbar, Footer, Providers
  globals.css               # Theme tokens & neo-brutalism utilities
  _components/              # Home-specific client components
  about/
    page.tsx                # About (server component)
    _components/            # About-specific client components
  collection/
    page.tsx                # Collection (client component, infinite scroll)
  market/
    page.tsx                # Market (server component)
    _components/            # Market-specific client components
components/                 # Shared/reusable components
  Navbar.tsx
  Footer.tsx
  Providers.tsx             # TanStack Query provider
  TamagotchiCard.tsx        # Reusable card with detail modal
hooks/
  useItems.ts               # Paginated items query
  useInfiniteItems.ts       # Infinite scroll query with search/filter params
  useCollectorJourney.ts    # Collector journey timeline query
  useCollectingTips.ts      # Collecting tips query
lib/
  axios.ts                  # Axios instance with base URL & auth interceptor
  format.ts                 # Display formatting utilities (formatLabel)
data/
  collection.ts             # Tamagotchi type definition
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://your-api-url.test/api
NEXT_PUBLIC_COGNITO_FORM_KEY=your-cognito-form-key
NEXT_PUBLIC_COGNITO_FORM_ID=your-cognito-form-id
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```
