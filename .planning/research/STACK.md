# Tech Stack: Family Law Marketing Website

## Recommended Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | React (v18+) | Component-based, fast, excellent ecosystem |
| **Styling** | Tailwind CSS (v3.4+) | Rapid development, mobile-first utilities, small bundle |
| **Build Tool** | Vite | Fastest dev server and builds, zero-config |
| **Forms** | React Hook Form + Zod | Lightweight, excellent validation, great UX |
| **Icons** | Lucide React | Clean, professional icons, tree-shakeable |
| **Animations** | Framer Motion | Smooth, professional micro-interactions |
| **Deployment** | Netlify or Vercel | Free tier, automatic HTTPS, form handling |

## Why This Stack

1. **Fast to build** - Tailwind + React means rapid iteration
2. **Fast to load** - Small bundle sizes critical for mobile (60%+ of legal traffic)
3. **Mobile-first** - Tailwind utilities make responsive design default
4. **Professional result** - Clean, modern aesthetic that builds trust
5. **Easy to maintain** - Standard patterns, well-documented tools

## What NOT to Use

| Technology | Why Avoid |
|------------|-----------|
| WordPress | Overkill for single-page, security maintenance, slower |
| Bootstrap | Dated look, larger bundle, less flexible |
| jQuery | Obsolete pattern, no component model |
| Heavy CMS | Single-page doesn't need content management overhead |
| Multi-page framework | User explicitly wants single-page |

## Performance Targets

| Metric | Target | Why |
|--------|--------|-----|
| First Contentful Paint | < 1.5s | Each additional second drops conversions 4.4% |
| Time to Interactive | < 3.0s | Legal searchers are impatient, stressed |
| Lighthouse Score | 90+ | Impacts SEO rankings |
| Bundle Size | < 200KB gzipped | Mobile data considerations |

## Confidence Levels

- React + Tailwind: **High** - Industry standard, proven pattern
- Vite: **High** - Fastest build tool, zero friction
- React Hook Form: **High** - Best-in-class form handling
- Framer Motion: **Medium** - Nice to have, use sparingly

---
*Research completed: 2026-04-02*
