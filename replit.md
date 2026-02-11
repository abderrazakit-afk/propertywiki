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

## Major Content Expansion (February 2026)
Added 46 new high-quality content pages across 10 categories:
- **Rental Yield & ROI** (5 pages): highest-rental-yield-areas-dubai, best-areas-8-percent-roi-dubai, jvc-vs-dubai-hills-investment, best-areas-under-1m-good-roi, studio-rental-yield-by-area
- **Budget-Based** (5 pages): best-areas-buy-property-under-500k, where-to-buy-under-1-million-dubai, cheapest-freehold-areas-dubai, affordable-areas-near-metro-dubai, best-areas-first-time-buyers-dubai
- **Metro/Transportation** (4 pages): best-areas-near-dubai-metro, walking-distance-metro-communities, property-near-red-line-metro-dubai, car-free-living-areas-dubai
- **Off-Plan** (5 pages): best-off-plan-projects-under-1m, off-plan-vs-ready-property-roi, safest-off-plan-areas-dubai, payment-plan-communities-dubai, 1-percent-payment-plan-dubai
- **Family & Lifestyle** (5 pages): best-areas-families-dubai, best-areas-near-schools-dubai, gated-communities-dubai, villa-communities-under-2m-dubai, quiet-residential-areas-dubai
- **Airbnb/STR** (5 pages): best-areas-airbnb-dubai, short-term-rental-roi-dubai, airbnb-dubai-marina-guide, short-term-rental-license-dubai, highest-nightly-rate-areas-dubai
- **Service Charges & Costs** (5 pages): service-charges-by-area-dubai, hidden-costs-buying-property-dubai, dld-fees-calculator-guide, maintenance-cost-by-community-dubai, dewa-cooling-charges-comparison
- **Area Comparisons** (4 pages): business-bay-vs-downtown-dubai, dubai-marina-vs-jbr, palm-jumeirah-vs-emirates-hills, abu-dhabi-vs-dubai-investment
- **Micro-Area Deep Dives** (4 pages): property-jvc-investment-guide, dubai-silicon-oasis-investment, al-furjan-investment-guide, arabian-ranches-pros-cons
- **Investment Scorecards** (4 pages under /investing/): top-10-investment-areas-dubai, dubai-investment-scorecard-2026, capital-growth-ranking-dubai, rental-demand-ranking-dubai

All pages include: SEO metadata, JSON-LD structured data, FAQs, Table of Contents, Author Box, Related Articles, cross-linking.
Updated: sitemap (50+ guides + 4 investing), guides index, investing index, homepage categories, footer links, search data (searchData.ts)

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
