# Crescent Technosofts — Official Website

A modern, high-performance corporate website for **Crescent Technosofts**, built with Next.js and featuring a premium dark neon aesthetic with full light/dark mode support.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework (App Router) |
| **React** | 19 | UI library |
| **Tailwind CSS** | 4 | Utility-first styling |
| **TypeScript** | 5 | Type safety |
| **react-icons** | — | Icon library (Fa, Io5) |

## Features

### 🌐 Pages
- **Home** — Hero section, services grid, testimonials carousel, careers preview, CTA
- **About** — Mission, vision, core values
- **Services** — 11 dedicated service pages (Hospital, Clinic, Lab, Pharmacy, School, Billing, Inventory, Library, Payroll, Property, Website Development)
- **Clients** — Statistics and testimonial showcase
- **Careers** — Open positions + online internship program
- **Partner Program** — Silver / Gold / Platinum partnership tiers
- **Contact** — Contact form with phone, email, and address info
- **Demo** — Demo request form with service selection

### 🎨 Design System
- **Premium Dark Neon Aesthetic** — Neon cyan (`#00F0FF`) and purple (`#B026FF`) accent colors
- **Glass Morphism** — Frosted glass effects on cards, dropdowns, and overlays
- **Gradient Text** — Animated gradient headings
- **Micro-Animations** — Hover lifts, glow effects, floating orbs, pulse animations
- **Responsive** — Fully responsive across mobile, tablet, and desktop

### 🌗 Dark / Light Mode Toggle
- **Toggle Button** — Sun/moon icon with smooth rotation animation in the header
- **CSS Custom Properties** — 40+ theme variables (`--bg-primary`, `--text-primary`, `--border-primary`, etc.)
- **Persistence** — Theme preference saved to `localStorage`
- **OS Detection** — Defaults to system `prefers-color-scheme` on first visit
- **Smooth Transitions** — 300ms color transitions on all themed elements
- **Full Coverage** — All 18 pages and every component updated to be theme-aware

### 🧩 Reusable Components
- `Header` — Sticky header with navigation, dropdowns, mobile menu, and theme toggle
- `Footer` — Company info, service links, contact details, social icons
- `Card` — Glass-effect card with hover animations
- `Button` — Multiple variants (primary, outline, neon, ghost)
- `Container` — Max-width responsive wrapper
- `AnimatedSection` — Scroll-triggered entrance animations
- `ThemeProvider` — React context for theme state management
- `ThemeToggle` — Animated theme switch button

## Project Structure

```
crescent-website/
├── app/
│   ├── globals.css          # Theme variables + utility classes
│   ├── layout.tsx           # Root layout with ThemeProvider
│   ├── page.tsx             # Homepage
│   ├── about/
│   ├── careers/
│   ├── clients/
│   ├── contact/
│   ├── demo/
│   ├── partner-program/
│   └── services/
│       ├── hospital/
│       ├── clinic/
│       ├── lab/
│       ├── pharmacy/
│       ├── school/
│       ├── billing/
│       ├── inventory/
│       ├── library/
│       ├── payroll/
│       ├── property/
│       └── website-development/
├── components/
│   ├── ThemeProvider.tsx     # Theme context + useTheme hook
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   └── TestimonialsCarousel.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── AnimatedSection.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── ThemeToggle.tsx
├── lib/
│   ├── constants.ts         # Navigation links, services, contact info
│   └── utils.ts             # cn() class merge utility
└── public/
    └── assets/              # Images
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
git clone <repo-url>
cd crescent-website
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## Deployment

Deploy on **Vercel** for the best Next.js experience:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use any Node.js hosting platform that supports Next.js.

---

**Built by Crescent Technosofts** · [crescenttechnosofts.com](https://crescenttechnosofts.com)
