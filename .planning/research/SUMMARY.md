# Research Summary: Family Law Marketing Website

## Stack Recommendation

**React + Tailwind CSS + Vite** is the optimal stack for this single-page marketing website.

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | React (v18+) | Component-based, excellent ecosystem |
| Styling | Tailwind CSS | Rapid development, mobile-first, small bundle |
| Build | Vite | Fastest dev experience, zero-config |
| Forms | React Hook Form + Zod | Lightweight validation, great UX |
| Deployment | Netlify/Vercel | Free tier, automatic HTTPS, form handling |

**Performance targets:** <3s load time, Lighthouse 90+, <200KB JS bundle.

---

## Table Stakes Features

These are non-negotiable for a professional law firm website:

1. **Contact Options**
   - Prominent phone number in header (click-to-call on mobile)
   - Contact form with 3-4 fields max
   - Both visible above the fold

2. **Trust Signals**
   - Professional branding/logo
   - Practice areas clearly listed
   - Attorney introduction (even brief)
   - Credentials and bar admissions

3. **Technical Requirements**
   - Mobile responsive (60%+ traffic is mobile)
   - Fast loading (<3 seconds)
   - HTTPS/SSL certificate
   - Accessible (16px+ fonts, proper contrast)

---

## Architecture: Single-Page Structure

```
Header (sticky) → Hero + Contact Form → Trust Bar → Practice Areas → 
Why Choose Us → Attorney Intro → Testimonials → FAQ → Contact/Location → Footer
```

**Component hierarchy:**
- App contains all sections as components
- ContactForm uses React Hook Form for validation
- Form submission → Netlify Forms or Formspree → email notification
- Mobile-first responsive design throughout

---

## Key Pitfalls to Avoid

1. **Hidden contact info** - Phone must be immediately visible
2. **Legal jargon** - Use plain, empathetic language
3. **Slow load** - Each second = -4.4% conversions
4. **Not mobile-optimized** - 44px+ tap targets, no zooming required
5. **Long forms** - 3-4 fields max, not 7+
6. **Generic stock photos** - Use real photos or illustrations
7. **No clear CTA** - Tell visitors what to do next
8. **Missing trust signals** - Credentials, testimonials, results
9. **No HTTPS** - Kills trust, browser warnings
10. **Ignoring local SEO** - Include city/region in content

---

## Conversion Benchmarks

| Metric | Average | Target |
|--------|---------|--------|
| Overall conversion | 2-4% | 8-12% |
| Family law specific | 8.5% | 12-15% |
| Phone vs form | 3x more calls | Support both |
| Mobile traffic | 60%+ | Must optimize |

---

## Compliance Notes

- Attorney advertising disclaimer required (footer)
- Avoid "specialist" claims without certification
- Check state bar rules for testimonials/case results
- Include "not a guarantee" disclaimers

---

## Next Steps

1. Define v1 requirements based on this research
2. Create roadmap with phases
3. Plan each phase before execution

*Research completed: 2026-04-02*
