# Pitfalls: Law Firm Marketing Website

## Common Mistakes

### 1. Contact Information Hidden
**Problem:** Phone number in footer only, or requires scrolling to find.
**Impact:** 48% of visitors leave if they can't find contact info immediately.
**Prevention:** 
- Phone in header, visible on all screen sizes
- Contact form above the fold in hero section
- Sticky mobile contact bar as backup

**Phase to address:** Phase 1 (Foundation)

### 2. Generic, Jargon-Filled Copy
**Problem:** "Aggressive representation," "zealous advocacy," legal terminology.
**Impact:** Visitors feel unheard; they're stressed and want empathy.
**Prevention:**
- Headline acknowledges their situation ("Going through a divorce?")
- Plain language throughout (8th grade reading level)
- Show understanding before explaining capabilities

**Phase to address:** Phase 1 (Foundation)

### 3. Slow Page Load
**Problem:** Large images, heavy scripts, unoptimized assets.
**Impact:** Each additional second of load time drops conversions 4.4%.
**Prevention:**
- Compress images (WebP format, <200KB each)
- Lazy load below-fold content
- Minimal JavaScript, tree-shake bundles
- Target: <3s load time, Lighthouse 90+

**Phase to address:** Phase 2 (Polish)

### 4. Not Mobile-Optimized
**Problem:** Tiny tap targets, requires zooming, horizontal scrolling.
**Impact:** 60%+ of legal traffic is mobile; they'll leave immediately.
**Prevention:**
- Mobile-first Tailwind classes
- 44x44px minimum tap targets
- 16px+ font sizes
- Test on actual devices, not just dev tools

**Phase to address:** Phase 1 (Foundation)

### 5. Form Too Long
**Problem:** 7+ fields asking for detailed case information upfront.
**Impact:** Every additional field drops completion ~11%.
**Prevention:**
- 3-4 fields max: name, phone, email, brief message
- Consider multi-step form if more info needed
- Add privacy statement near submit button

**Phase to address:** Phase 1 (Foundation)

### 6. Stock Photo Overload
**Problem:** Generic "lawyer handshake" stock photos, fake smiles.
**Impact:** Reduces trust, feels impersonal.
**Prevention:**
- Use real team photos when possible
- If using stock, choose authentic, varied imagery
- Consider illustration as alternative
- Professional logo/wordmark over stock photos

**Phase to address:** Phase 2 (Polish)

### 7. No Clear Call-to-Action
**Problem:** Beautiful site but visitor doesn't know what to do next.
**Impact:** Bounce rate increases, conversions drop.
**Prevention:**
- Primary CTA visible in hero ("Call for Consultation")
- Secondary CTAs throughout ("Learn More," "Contact Us")
- Consistent button styling
- Action-oriented copy

**Phase to address:** Phase 1 (Foundation)

### 8. Missing Trust Signals
**Problem:** No credentials, no testimonials, no proof of competence.
**Impact:** 73% of clients trust firms with 4+ star ratings; absence signals risk.
**Prevention:**
- Bar admissions, years of practice
- Client testimonials (with appropriate disclaimers)
- Professional associations
- Case results where permitted

**Phase to address:** Phase 2 (Polish)

### 9. No Privacy/Security
**Problem:** HTTP instead of HTTPS, no privacy policy.
**Impact:** Browser warnings kill trust; compliance issues.
**Prevention:**
- SSL certificate (free via Let's Encrypt, Netlify, Vercel)
- Privacy policy in footer
- No auto-submit of forms without confirmation

**Phase to address:** Phase 1 (Foundation)

### 10. Ignoring Local SEO
**Problem:** No location mentioned, no schema markup.
**Impact:** Missing "near me" searches, local pack rankings.
**Prevention:**
- City/region in title tag, H1, content
- Schema.org LocalBusiness markup
- Google Business Profile integration
- Service area clearly stated

**Phase to address:** Phase 2 (Polish)

## Compliance Considerations

| Issue | Why It Matters | Prevention |
|-------|----------------|------------|
| Attorney advertising disclaimer | Required in most jurisdictions | Footer disclaimer, check state bar rules |
| "Specialist" claims | May require certification | Use "focuses on" or "practices" instead |
| Case results | May be restricted | Check state ethics rules |
| Testimonials | Subject to rules | Include "not a guarantee" disclaimer |

**Phase to address:** Phase 1 (Foundation)

## Performance Budget

| Resource | Budget | Why |
|----------|--------|-----|
| Total page size | < 2MB | Mobile data, load time |
| JavaScript | < 200KB gzipped | Parse/execute time |
| Images | < 500KB total | Visual quality vs. speed |
| Fonts | < 100KB | FCP impact |
| Third-party scripts | Minimize | Each adds latency |

---
*Research completed: 2026-04-02*
