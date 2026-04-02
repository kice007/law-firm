# Architecture: Single-Page Law Firm Website

## Page Structure (Top to Bottom)

```
┌─────────────────────────────────────────┐
│  HEADER (Sticky)                        │
│  Logo | Phone (prominent, clickable)    │
├─────────────────────────────────────────┤
│  HERO SECTION                           │
│  Headline + Subhead + Primary CTA       │
│  Contact form visible above the fold    │
├─────────────────────────────────────────┤
│  TRUST SIGNALS                          │
│  "Trusted by..." / Credentials / etc.   │
├─────────────────────────────────────────┤
│  PRACTICE AREAS                         │
│  Family Law Services (grid or list)     │
├─────────────────────────────────────────┤
│  WHY CHOOSE US                          │
│  Differentiators, approach, experience  │
├─────────────────────────────────────────┤
│  ATTORNEY INTRO (Optional)              │
│  Brief bio, photo, human connection     │
├─────────────────────────────────────────┤
│  TESTIMONIALS (Optional)                │
│  Client quotes, star ratings            │
├─────────────────────────────────────────┤
│  FAQ (Optional)                         │
│  Common questions, plain answers        │
├─────────────────────────────────────────┤
│  CONTACT / LOCATION                     │
│  Map, address, hours, contact form      │
├─────────────────────────────────────────┤
│  FOOTER                                 │
│  Copyright, Privacy Policy, Disclaimer  │
└─────────────────────────────────────────┘
```

## Component Architecture

```
App
├── Header
│   ├── Logo
│   └── PhoneButton (click-to-call)
├── Hero
│   ├── Headline
│   ├── Subhead
│   └── ContactForm
├── TrustBar
│   └── TrustItems[]
├── PracticeAreas
│   └── PracticeAreaCard[]
├── WhyChooseUs
│   └── DifferentiatorCard[]
├── AttorneyIntro (optional)
│   ├── Photo
│   └── Bio
├── Testimonials (optional)
│   └── TestimonialCard[]
├── FAQ (optional)
│   └── FAQItem[]
├── ContactSection
│   ├── ContactForm
│   ├── LocationInfo
│   └── Map (optional)
└── Footer
    ├── Navigation (anchor links)
    ├── LegalDisclaimer
    └── Copyright
```

## Data Flow

```
User lands on page
       ↓
Sees hero + contact form (above fold)
       ↓
Scrolls to explore content
       ↓
Reads practice areas, trust signals
       ↓
Decision point: contact or leave
       ↓
Contact form submission OR phone call
       ↓
Form data → Email/CRM → Firm response
```

## Form Handling Architecture

```
ContactForm (React Component)
    ↓
React Hook Form (validation with Zod)
    ↓
Form Submission
    ↓
┌───────────────────┐
│   Netlify Forms   │  (if using Netlify)
│   OR              │
│   Formspree       │  (third-party service)
│   OR              │
│   Custom API      │  (serverless function)
└───────────────────┘
    ↓
Email notification to firm
    ↓
Firm responds via phone/email
```

## Build Order (Dependencies)

1. **Project setup** - Vite + React + Tailwind
2. **Layout components** - Header, Footer, responsive container
3. **Hero section** - Including contact form
4. **Content sections** - Practice areas, trust signals, etc.
5. **Form handling** - Backend integration
6. **Polish** - Animations, SEO, performance
7. **Deploy** - Netlify/Vercel setup

## Mobile Considerations

| Element | Mobile Adaptation |
|---------|-------------------|
| Header | Hamburger menu optional, phone always visible |
| Hero | Stack form below headline, maintain visibility |
| Practice Areas | Single column grid, tap-friendly cards |
| Contact Form | Large tap targets (44x44px minimum) |
| Navigation | Anchor links or sticky bottom bar |

## SEO Structure

- Semantic HTML (header, main, section, footer)
- Proper heading hierarchy (H1 → H2 → H3)
- Meta tags (title, description, OG tags)
- Schema.org markup for LocalBusiness/Attorney
- Alt text on all images
- Fast load time (Core Web Vitals)

---
*Research completed: 2026-04-02*
