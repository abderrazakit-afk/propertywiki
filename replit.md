# PropertyWiki - Real Estate Knowledge Hub

## Overview
PropertyWiki is a production-ready, SEO-optimized content website built with Next.js 14 (App Router). It serves as an authoritative property knowledge hub with wiki-style content targeting organic search traffic.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Rendering**: Server Components (default), Static Site Generation (SSG)
- **Content**: Local data (can be extended to MDX or JSON files)

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── definitions/        # Wiki-style term explanations
│   ├── guides/            # Long-form educational content
│   ├── locations/         # Location-based content (city/area)
│   ├── investing/         # Investment insights
│   ├── blog/              # News and analysis
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # Robots.txt configuration
│   └── layout.tsx         # Root layout with header/footer
├── components/
│   ├── article/           # Article components (TOC, FAQ, Author, Related)
│   ├── layout/            # Layout components (Header, Footer, Breadcrumbs)
│   └── seo/               # SEO components (JsonLd)
├── lib/
│   ├── seo.ts             # SEO utilities (metadata, schemas)
│   └── content.ts         # Content types and helpers
└── content/               # Content storage (for future MDX/JSON)
```

## Key Features
- Dynamic metadata with Next.js Metadata API
- JSON-LD structured data (Article, BreadcrumbList, FAQPage)
- Auto-generated table of contents
- FAQ sections with accordion UI
- Author boxes (E-E-A-T compliance)
- Related articles sections
- Internal wiki-style linking
- Mobile-first responsive design
- Core Web Vitals optimized

## Running the Project
```bash
npm run dev   # Development server on port 5000
npm run build # Production build
npm run start # Production server
```

## SEO Architecture
- All pages use Server Components for optimal rendering
- Metadata API for dynamic titles, descriptions, Open Graph
- Structured data for rich search results
- Semantic HTML (article, section, nav, aside)
- Clean URL structure optimized for programmatic SEO

## Design Philosophy
- Modern luxury aesthetic (Wikipedia + Notion inspired)
- Excellent typography and readability
- No aggressive sales CTAs or popups
- Editorial, informational tone
- Color palette: warm brown primary (#9b7260), sage green accent (#5a7a6f), warm gray backgrounds
- Typography: Playfair Display serif for headings, Inter sans-serif for body (~17px)
- Cards with depth hierarchy (featured cards elevated, others with subtle borders)
- Hover states with lift effects and color transitions

## User Preferences
- Modern, luxurious design requested
- Clean, professional appearance
- SEO-focused content structure
- All content attributed to "PropertyWiki Team" for unified brand voice

## Recent Changes (January 2026)
- Added 5 new Dubai community pages:
  - Palm Jumeirah (luxury island living)
  - Business Bay (commercial/residential hub)
  - JBR Jumeirah Beach Residence (beachfront lifestyle)
  - Arabian Ranches (family villa community)
  - DIFC (financial district living)
- Added 4 new homeowner guides:
  - DEWA Electricity & Water Guide (utility setup)
  - AC Maintenance Dubai (cooling systems)
  - Home Cleaning Services Dubai (maid services)
  - Building Facilities & Amenities Dubai (community amenities)
- Updated homepage navigation with new content links
- Updated footer with expanded location and guide links
- Updated sitemap with all new pages
- Created full blog post pages with tables, charts, and interactive elements
- Updated author attribution across all pages to "PropertyWiki Team"
- Updated domain to propertywiki.ai in sitemap and all email addresses
- Added custom 404 page with branded design and helpful navigation links

## Find Home Feature
Interactive AI-powered property recommendation tool:
- "Find Home" button in header opens a modal
- User describes their ideal home and lifestyle in free-form text
- Phone verification with OTP (currently using dummy code: 00000)
- AI analyzes description and provides personalized recommendations
- Results include property types, communities, price ranges (rent & buy), and highlights
- Uses OpenAI API (requires OPENAI_API_KEY secret)
- Located at: src/components/find-home/FindHomeModal.tsx, src/app/api/find-home/route.ts
