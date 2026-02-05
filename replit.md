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

## Recent Changes (February 2026)
- **HTML Lang/Hreflang Alignment Fix**
  - Fixed "Hreflang and HTML lang mismatch" issue flagged by Ahrefs
  - Middleware now sets x-locale request header based on pathname (/ar/* → 'ar', others → 'en')
  - Root layout dynamically sets `<html lang>` and `dir` attributes server-side
  - Arabic pages now render `<html lang="ar" dir="rtl">` in SSR
  - English pages render `<html lang="en" dir="ltr">`
  - This ensures crawlers see matching hreflang and HTML lang attributes

## Previous Changes (January 2026)
- **COMPREHENSIVE SEO OVERHAUL**
  - **Canonical Fix**: Resolved "Non-canonical page in sitemap" - each page now self-canonicalizes
  - **OG Tags**: Added dynamic og:url matching canonical on all 58 pages
  - **hreflang**: Implemented en/ar/x-default language alternates on all pages
  - **Domain Redirects**: Added Next.js middleware for 301 redirects (www/http → https://propertywiki.ai)
  - **Meta Optimization**: Titles under 60 chars, descriptions under 160 chars
  - **Social Sharing**: Added og:image and Twitter card images to all pages
  - **IndexNow**: Created API route (/api/indexnow) for search engine submission
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

## Search Feature
Fuzzy search across all site content:
- Uses Fuse.js for fuzzy matching (handles typos and partial matches)
- Searches titles, descriptions, and tags
- Shows results in dropdown with category badges
- Keyboard navigation (arrow keys + Enter)
- Works on both desktop and mobile
- Located at: src/components/search/SearchBar.tsx, src/lib/searchData.ts

## AI Chat Assistant
Floating chat assistant for real-time property questions:
- Chat button appears in bottom-right corner of all pages
- Opens modal with message history
- AI responds with PropertyWiki content knowledge (communities, prices, buying process, utilities)
- Uses OpenAI gpt-4.1-mini model
- Located at: src/components/chat/ChatButton.tsx, src/components/chat/ChatModal.tsx, src/app/api/chat/route.ts

## Find Home Feature
Interactive AI-powered property recommendation tool:
- Dedicated page at `/find-home` (linked from header button)
- Multi-step flow: describe lifestyle → phone verification → AI recommendations
- User describes their ideal home and lifestyle in free-form text
- Phone verification with OTP (currently using dummy code: 00000)
- AI analyzes description and provides personalized recommendations
- Results include property types, communities, price ranges (rent & buy), and highlights
- Uses OpenAI API (requires OPENAI_API_KEY secret)
- **Daily usage limit**: 3 free searches per phone number per day
- Shows remaining searches after verification
- Upgrade prompt when limit is reached with Premium benefits
- Usage tracked in MongoDB (MONGODB_URI secret required)
- Located at: src/app/find-home/page.tsx, src/app/api/find-home/route.ts, src/app/api/check-usage/route.ts, src/lib/mongodb.ts

## Arabic Version (RTL) - 100% Coverage
Full Arabic translation of the website with RTL support (33 Arabic pages matching 33 English pages):
- Arabic pages accessible at `/ar/` prefix
- RTL layout with Noto Sans Arabic font
- Separate layout (src/app/ar/layout.tsx) with dir="rtl" and lang="ar"
- Arabic header, footer, search bar, and chat components
- Language switcher in both English and Arabic headers
- Translations managed in src/lib/translations.ts
- Key components: HeaderAr, FooterAr, SearchBarAr, ChatModalAr
- Full Arabic coverage includes:
  - Homepage (/ar)
  - All guide pages (/ar/guides/*): How to buy, sell, rent property, DEWA guide, AC maintenance, home cleaning, building facilities
  - All location pages (/ar/locations/*): Dubai Marina, Palm Jumeirah, Downtown Dubai, Business Bay, JBR, Arabian Ranches, DIFC
  - All definition pages (/ar/definitions/*): Freehold, Leasehold, Off-plan
  - All blog articles (/ar/blog/*): Dubai Market Outlook 2025, Golden Visa Changes, Off-plan Investment Risks
  - Investing index (/ar/investing)
  - Find Home feature (/ar/find-home)
  - Company pages: About, Contact, Privacy Policy, Editorial Policy
