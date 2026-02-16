# PropertyWiki - Real Estate Knowledge Hub

## Overview
PropertyWiki is a production-ready, SEO-optimized content website built with Next.js 14. It functions as an authoritative property knowledge hub, providing wiki-style content to attract organic search traffic. The project aims to be the go-to resource for real estate information, offering in-depth guides, location insights, investment analysis, and a unique AI-powered property report generator. Its vision is to simplify complex real estate decisions for users through comprehensive, data-driven content and interactive tools.

## User Preferences
- Modern, luxurious design requested
- Clean, professional appearance
- SEO-focused content structure
- All content attributed to "PropertyWiki Team" for unified brand voice

## System Architecture
The application is built with Next.js 14+ (App Router) and TypeScript, utilizing Tailwind CSS for styling. It primarily uses Server Components and Static Site Generation (SSG) for optimal performance and SEO. Content is currently local, with provisions for future MDX or JSON file integration.

**Key Features:**
- **SEO Optimization**: Dynamic metadata using Next.js Metadata API, JSON-LD structured data (Article, BreadcrumbList, FAQPage), semantic HTML, clean URL structures, and full i18n support with `hreflang` for English and Arabic versions.
- **Content Presentation**: Auto-generated tables of contents, FAQ sections with accordion UI, author boxes for E-E-A-T compliance, related articles, and internal wiki-style linking.
- **UI/UX Design**: A modern, luxury aesthetic inspired by Wikipedia and Notion, featuring excellent typography (Playfair Display for headings, Inter for body), a warm color palette, and interactive card designs with hover effects. Mobile-first responsive design is prioritized.
- **Find Home Feature**: An AI-powered property report generator that analyzes user descriptions using GPT-4.1-mini to extract structured filters. It queries a MongoDB transactions database (510K+ sales, 1.7M+ rentals) with aggregation pipelines, then uses OpenAI to analyze market data. Reports feature streaming responses via SSE, session token authentication, email verification, interactive Leaflet/OpenStreetMap area maps, recent transaction listings, and Recharts-based interactive data visualizations (price trends, forecasts, rental yields).
- **Search Feature**: Fuzzy search functionality across all site content using Fuse.js, supporting typo tolerance and partial matches, with results displayed in a categorized dropdown.
- **AI Chat Assistant**: A floating chat assistant on all pages, using OpenAI gpt-4.1-mini, to answer real-time property questions based on PropertyWiki's content knowledge.
- **Internationalization**: Full Arabic (RTL) version with 100% content coverage, separate layouts, language switchers, and dedicated components, ensuring a localized experience.

## External Dependencies
- **OpenAI API**: Used for the AI Chat Assistant (gpt-4.1-mini) and the AI Pre-Analysis and data interpretation within the Find Home feature.
- **MongoDB**: Utilized for storing email verification data, usage tracking, and as the primary database for real estate transaction data (sales and rentals).
- **Resend**: For sending email verification codes to users for the Find Home feature.
- **Fuse.js**: Integrated for fuzzy search capabilities across the website's content.
- **Leaflet & OpenStreetMap**: For rendering interactive area maps within the AI-powered property reports.
- **Recharts**: For generating interactive data visualization charts (price trends, rental yields) in the property reports.
- **Tailwind CSS**: As the primary CSS framework for styling.