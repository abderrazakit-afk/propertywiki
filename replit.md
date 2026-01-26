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
- Warm brown/gold color palette

## User Preferences
- Modern, luxurious design requested
- Clean, professional appearance
- SEO-focused content structure
