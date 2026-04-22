# Crescent Technosoft - Enterprise UI Design System

This document outlines the strict UI design specifications established for Crescent Technosoft's Next.js application. These standards have been successfully applied to the Home, About, Clients, Careers, Contact, and Partner pages. 

Moving forward, any new pages (such as the `services` pages) MUST strictly follow these principles to maintain the professional "Enterprise SaaS" feel.

---

## 1. Core Principles
**No "Startup/Consumer" aesthetics.** 
- ❌ **Avoid:** Floating 3D elements, heavy colored drop-shadows (`shadow-xl`, `shadow-sky-500/50`), large pill shapes (`rounded-2xl`, `rounded-full`), and soft bright gradients (`from-sky-100 to-sky-50`).
- ✅ **Embrace:** Flat structural layouts, sharp borders (`border-gray-200`), harsh contrasts (`bg-blue-950` against `bg-white`), precise grid spacing, and strict right-angles or minimal border-radii (`rounded-sm`).

---

## 2. Color Palette

### Primary Colors
*   **Deep Navy (Primary Structure/Text):** `blue-950` 
*   **Bright Navy (Action/Hover/Borders):** `blue-900`
*   **Accent/Highlights:** Rarely used, but when needed: `blue-800`

### Backgrounds
*   **Primary Backing:** `bg-white`
*   **Contrast Block Backing (Stripes/Cards):** `bg-slate-50`
*   *(Avoid `bg-gray-50` or `bg-sky-50` unless required for specific contrast. `slate-50` gives a colder, more professional steel look).*

### Borders
*   **Standard Structural Border:** `border border-gray-200`
*   **Hover Structural Border:** `hover:border-blue-900`
*   **Dark Mode Structure (inside blue-950 containers):** `border-blue-900` or `border-blue-800/30`

---

## 3. Typography & Sizing

The project uses `Inter` as its base font.

*   **Page Titles (H1):** `text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 tracking-tight`
*   **Section Titles (H2):** `text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4`
*   **Card/Block Titles (H3):** `text-xl font-extrabold text-blue-950 tracking-tight mb-3`
*   **Subtitles / Lead Paragraphs:** `text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl`
*   **Card Body Text:** `text-sm text-gray-600 font-medium leading-relaxed`
*   **Badges / Overlines:** `text-xs font-extrabold text-blue-950 uppercase tracking-wide`
    *   *Usage Context:* Often placed inside a small chip `px-3 py-1.5 bg-slate-50 border border-gray-200 shadow-sm rounded-sm`
*   **Meta Labels (e.g., "Address", "Investment"):** `text-xs font-bold text-gray-500 uppercase tracking-wider`

---

## 4. Interactive Elements

### Buttons
**Primary (Solid):**
```html
<button className="px-8 py-3.5 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors border border-blue-900 shadow-sm">
  Action
</button>
```

**Secondary (Outlined):**
```html
<button className="px-8 py-3.5 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-100 transition-colors border border-gray-300 shadow-sm">
  Action
</button>
```

### Cards & Hover States
Cards do not lift up (`-translate-y`) and do not emit large blurred shadows on hover. Instead, the border explicitly changes color to lock the card structurally.
```html
<div className="bg-white rounded-sm border border-gray-200 p-8 group hover:border-blue-900 transition-colors duration-300">
  {/* Content */}
</div>
```

### Form Inputs
Form inputs should be brutalist, stripping away heavy rounded corners and soft glows.
```html
<input className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 outline-none transition-all bg-slate-50 focus:bg-white text-blue-950" />
```

---

## 5. Layout & Spacing

### Hero Section Clearance
Since the `<Header />` uses a fixed translucent setup, the very first element (Hero) of any new page MUST have an explicit top margin to push it cleanly beneath the navbar.
*   **Page Hero Padding:** `mt-[76px] lg:mt-[88px]`

### Hero Split Layout
Hero sections rarely use centralized overlay text anymore. Instead, use a strict 50/50 flex/grid split:
```html
<div className="bg-slate-50 border-b border-gray-200 mt-[76px] lg:mt-[88px] pt-16 pb-16 lg:pt-24 lg:pb-24">
  <Container>
    {/* 50/50 Grid Left/Right */}
  </Container>
</div>
```

### Bullet Points / Lists
Do not use standard HTML bullets. Replace them with strict geometric squares:
```html
<li className="flex items-start gap-3">
  <div className="mt-1 w-1.5 h-1.5 bg-blue-900 rounded-sm flex-shrink-0"></div>
  <span className="text-gray-600 text-sm leading-relaxed">List item info here...</span>
</li>
```

---
*Note: Any upcoming UI updates to `/services/*` directories should be rewritten to match this exact HTML/Tailwind structure.*