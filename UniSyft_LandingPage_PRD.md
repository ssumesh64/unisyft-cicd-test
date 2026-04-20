# PRD — UniSyft Landing Page
**Project:** UniSyft Corporate Landing Page  
**Sub-project:** DeveloperEdSyft (EdSyft Product)  
**Role:** Junior Full Stack Developer  
**Stack:** Next.js 14+ (App Router), Tailwind CSS, Framer Motion  
**Status:** Draft v1.0  
**Date:** April 2026

---

## 1. Overview

UniSyft is a multi-product company operating across multiple sectors. The landing page serves as the **primary digital face** of the brand — it must be modern, premium, and scalable enough to showcase multiple products (EdSyft and future products) as the company grows.

**Design north star:** Apple.com — clean, immersive, scroll-driven storytelling, confident whitespace, cinematic product reveals.

---

## 2. Goals

| Goal | Description |
|------|-------------|
| Brand Presence | Establish UniSyft as a premium, trusted technology company |
| Product Discovery | Let visitors understand what UniSyft builds and why it matters |
| Scalability | Architecture that easily plugs in new product sections/pages |
| Lead Generation | Drive sign-ups, contact inquiries, or demo requests |
| Performance | Fast, accessible, SEO-friendly from day one |

---

## 3. Target Audience

- Students and educators (EdSyft product focus)
- Investors and partners exploring UniSyft as a company
- Future enterprise clients across sectors
- Potential hires / talent discovery

---

## 4. Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14 (App Router) | SEO, SSR, file-based routing, image optimization |
| Styling | Tailwind CSS | Rapid, consistent, utility-first |
| Animations | Framer Motion | Scroll-triggered, Apple-like reveals |
| Icons | Lucide React | Clean, modern icon set |
| Fonts | Google Fonts / Next Font | Custom brand typography |
| Deployment | Vercel | Zero-config Next.js hosting |
| Version Control | GitHub | Collaboration with Sr. Dev |

---

## 5. Site Architecture

```
/ (Landing Page)
├── /products
│   ├── /edsyft          ← EdSyft product detail page
│   └── /[future-product]
├── /about
├── /careers
└── /contact
```

---

## 6. Landing Page — Section Breakdown

### Section 1 — Hero
- Full-viewport, cinematic
- Headline: Bold value proposition for UniSyft
- Sub-headline: One-liner on what UniSyft does
- 2 CTAs: "Explore Products" + "Get in Touch"
- Background: Animated gradient mesh or subtle particle effect
- Placeholder AI-generated copy until real content arrives

### Section 2 — Trust Bar / Social Proof
- Logos or marquee strip: "Trusted by / Featured in / Built for..."
- Subtle horizontal scroll animation
- Placeholder logos for now

### Section 3 — What is UniSyft?
- Brief company mission statement
- 3–4 icon+text stat blocks (e.g., "3 Sectors", "1 Mission", "500+ Users")
- Fade-in on scroll

### Section 4 — Products Showcase ⭐ (Core Section)
- Grid/card layout showing each product
- Each card: Product name, sector tag, short description, "Learn More" CTA
- Currently: EdSyft card (Education sector)
- Future: More cards plug in automatically
- Design pattern: Apple product grid style

### Section 5 — EdSyft Feature Spotlight
- Full-width feature section for the current flagship product
- 3 key features with icons, titles, descriptions
- Optional: Mockup/screenshot placeholder

### Section 6 — How It Works
- 3-step horizontal flow or alternating layout
- Step 1 → Step 2 → Step 3
- Simple, visual, no jargon

### Section 7 — Testimonials / Quotes
- 2–3 placeholder testimonial cards
- Carousel or grid
- Replace with real quotes when content arrives

### Section 8 — CTA Banner
- Bold full-width section
- "Ready to transform education?" + email input or "Book a Demo" button

### Section 9 — Footer
- Logo, navigation links, social icons
- Legal: Privacy Policy, Terms
- Copyright: © 2026 UniSyft Technologies

---

## 7. Design System

### Typography
- **Display / Hero:** Clash Display or Cal Sans (bold, modern, distinctive)
- **Body:** Geist or DM Sans (clean, readable)
- **Code/Tags:** Geist Mono

### Color Palette (Suggested — confirm with Sr. Dev)
```
Primary:    #0A0A0A   (near-black background)
Surface:    #111111   (card backgrounds)  
Accent:     #4F6EF7   (electric blue — UniSyft brand)
Accent Alt: #A855F7   (purple — EdSyft product color)
Text:       #FFFFFF / #A1A1AA
Border:     #27272A
```
*Note: Adjust once brand guidelines are confirmed.*

### Animation Principles (Apple-inspired)
- Scroll-triggered fade + slide up (Framer Motion `whileInView`)
- Staggered children reveals
- Smooth hover states on cards (scale + shadow)
- No jarring or heavy animations — every motion has purpose

---

## 8. Component Architecture

```
src/
├── app/
│   ├── layout.tsx           ← Root layout (fonts, metadata)
│   ├── page.tsx             ← Landing page (assembles sections)
│   └── products/
│       └── edsyft/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── AboutUniSyft.tsx
│   │   ├── ProductsGrid.tsx  ← Multi-product ready
│   │   ├── EdSyftSpotlight.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── AnimatedText.tsx
├── lib/
│   └── products.ts          ← Central product data (scalable)
└── styles/
    └── globals.css
```

**Key scalability pattern — `lib/products.ts`:**
```ts
export const products = [
  {
    id: "edsyft",
    name: "EdSyft",
    sector: "Education",
    tagline: "Redefining how students learn.",
    description: "AI-powered learning platform for the next generation.",
    color: "#A855F7",
    href: "/products/edsyft",
    status: "live"
  },
  // Add future products here — UI updates automatically
]
```

---

## 9. SEO & Performance Requirements

- `next/image` for all images (auto-optimization)
- `next/font` for zero-CLS font loading
- Metadata API in `layout.tsx` (title, description, OG tags)
- Lighthouse score targets: Performance 90+, Accessibility 95+
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`

---

## 10. Content Strategy (Placeholder Phase)

Since real content arrives by EOD, use AI-generated placeholders that match the **final structure exactly**:

- All copy written as if final — no "Lorem Ipsum"
- Use realistic product names, feature names, testimonial names
- Images: Use Unsplash/placeholder.com or SVG illustrations
- When real content arrives: swap data only, no structural changes needed

---

## 11. Development Phases

### Phase 1 — Setup (Day 1, ~2 hrs)
- [ ] `npx create-next-app@latest unisyft-landing`
- [ ] Install Tailwind CSS, Framer Motion, Lucide React
- [ ] Set up folder structure as defined above
- [ ] Push to GitHub (branch: `feat/landing-page`)
- [ ] Set up custom fonts

### Phase 2 — Core Build (Day 1–2, ~6 hrs)
- [ ] Build Navbar + Footer
- [ ] Build Hero section
- [ ] Build ProductsGrid (multi-product ready)
- [ ] Build EdSyft Spotlight
- [ ] Build HowItWorks + CTA Banner

### Phase 3 — Polish (Day 2–3, ~3 hrs)
- [ ] Add Framer Motion scroll animations to all sections
- [ ] Add hover interactions on cards and buttons
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Lighthouse audit + fixes

### Phase 4 — Content Swap (After EOD)
- [ ] Replace AI-generated content with real content from Sr. Dev
- [ ] Replace placeholder images with real assets
- [ ] Final review + PR

---

## 12. Reference Inspiration

| Source | What to take from it |
|--------|---------------------|
| [getdesign.md](https://getdesign.md/) | Clean template aesthetic, spacing, layout structure |
| [stackmd](https://github.com/Dragoon0x/stackmd) | Next.js project setup patterns |
| [reactbits.dev](https://reactbits.dev/) | Reusable animated React components |
| [neuform.ai/community](https://neuform.ai/community/featured) | Premium SaaS landing page inspiration |
| Apple.com | Scroll storytelling, typography confidence, whitespace |

---

## 13. Definition of Done

- [ ] Landing page live on Vercel (even with placeholder content)
- [ ] All 9 sections implemented and responsive
- [ ] ProductsGrid is data-driven and ready for new products
- [ ] Animations smooth at 60fps
- [ ] No console errors
- [ ] GitHub PR submitted for Sr. Dev review
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95

---

## 14. Out of Scope (v1)

- Authentication / login
- CMS integration (consider Contentful/Sanity in v2)
- Blog / news section
- Analytics (add GA4 in v2)
- Multi-language support

---

*Document Owner: Sriram (Junior Full Stack Developer, UniSyft)*  
*Reviewed by: Sr. Developer (pending)*  
*Last Updated: April 2026*
