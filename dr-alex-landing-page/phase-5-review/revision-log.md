# Revision Log

Log of changes made during this build, and the full list of outstanding placeholders that need
real information from Dr. Alex before launch. Keep this updated as future revisions are made.

## Change Log

| Date | Requested By | Change Made |
|---|---|---|
| 2026-08-14 | Initial project brief | Built the full six-phase project from scratch: keyword research and competitor notes (Phase 1), full page copy draft (Phase 2), the static site — `index.html`, `styles.css`, `script.js`, icon sprite, favicon and OG-image placeholders (Phase 3), meta tag reference, JSON-LD schema, sitemap.xml and robots.txt (Phase 4), this revision log (Phase 5), and the launch checklist (Phase 6). Also added `privacy.html`, `terms.html`, and `cookies.html` placeholder legal pages, linked from the footer and the consent checkbox, and a top-level `README.md`. |

## Outstanding Placeholders (must be resolved before launch)

All items below are marked inline in `phase-2-content/content-draft.md` and
`phase-3-design-build/index.html` (and, where relevant, `schema.json`) with a
`[PLACEHOLDER: ...]` marker so they're easy to find and replace.

### Practice identity & contact
- [ ] Dr. Alex's surname (used in `<title>`, hero H1, About section, footer NAP, and JSON-LD `Physician.name`)
- [ ] Practice/clinic legal name (currently placeholder text "Dr. Alex Pain Management Clinic")
- [ ] Practice street address, Dublin postal district / Eircode
- [ ] Clinic phone number (used in header click-to-call, hero CTA, contact section, footer, and `tel:` links)
- [ ] Clinic email address (used in contact section, footer, and `mailto:` link)
- [ ] Opening hours (contact section and JSON-LD `openingHoursSpecification`)
- [ ] Confirmed production domain (placeholder used throughout: `https://www.dralexpainmanagement.ie/`)

### About Dr. Alex
- [ ] Qualifications (medical degree, relevant fellowships/diplomas)
- [ ] Hospital affiliation
- [ ] Years of experience
- [ ] Special interests within pain management

### Insurance
- [ ] Confirm the insurer list (VHI, Laya, Irish Life Health, Glo Health) is accurate and current
- [ ] Confirm self-pay / GP-referral-only patient policy

### Why Choose Us / Booking
- [ ] Actual clinic days/times for the "Flexible Clinic Times" trust point
- [ ] Self-referral policy (whether patients can book without a GP referral)

### SEO / Structured Data
- [ ] Google Business Profile URL (JSON-LD `sameAs`)
- [ ] LinkedIn URL, if available (JSON-LD `sameAs`)
- [ ] Irish Medical Council register listing URL, if available (JSON-LD `Physician.sameAs`)
- [ ] Replace `og-image-placeholder.svg` with a real 1200×630 JPG/PNG — SVG has inconsistent
      support as a social-share image across platforms (Facebook, LinkedIn, Twitter/X, iMessage)

### Functional
- [ ] Wire the contact form to a real form-handling service or backend endpoint — it currently
      only validates client-side and shows a confirmation message without sending any data
      anywhere (see `phase-3-design-build/js/script.js`)
- [ ] `privacy.html`, `terms.html`, and `cookies.html` are placeholder legal pages only —
      each needs proper legal/GDPR review before launch (each is flagged inline)
- [ ] Social links in the footer are placeholders

### Content confirmed as intentionally omitted (not a gap)
- Patient testimonials — deliberately left out per the brief and Medical Council of Ireland
  advertising guidelines, unless/until Dr. Alex supplies real, compliance-reviewed testimonials.
- No outcome/efficacy claims are used anywhere in the copy (checked against Phase 2 draft).

---

## Competitor Design Review — 2026-08-14

Three competitor homepages reviewed from screenshots (dublinpainclinic.ie,
beaconpainmanagement.ie, pain-treatment.ie). Full findings in
`phase-1-research-seo/competitor-notes.md`. Two things that change the plan:

1. **Two of the three sites are the same business** (Dublin Pain Clinic Group / Beacon Pain
   Clinic — shared phone, email and address). The real competitive picture is one large
   consultant-led group plus one independent integrative practice.

2. **Several assumed "competitor gaps" were wrong.** Competitors *do* have dedicated condition
   pages and substantial structured content. Our per-condition headings are table stakes, not a
   differentiator. The build is solid but less distinctive than the original notes implied.

### New gaps identified in our build (not defects — additions worth making)

- [ ] No FAQ section — the strongest single feature seen on any competitor (Beacon puts five
      collapsible booking questions in the hero). Needs answers from Dr. Alex; also a candidate
      for FAQ structured data.
- [ ] No "how it works" three-step patient journey section — present on both Beacon sites.
- [ ] Insurers shown as text pills rather than logos — weaker trust signal. Needs logo files and
      confirmation of permission to display them.
- [ ] GP referral pathway is only a one-line trust point; Beacon gives it a nav item and a
      dedicated CTA aimed at referring GPs.
- [ ] No utility bar with phone/email/opening hours above the header.
- [ ] No factual credibility figures (years of experience, appointment lead time).

### Compliance point to raise with Dr. Alex

Competitors publish quantified claims ("95% Patient Satisfaction", "20,000+ Personalised Care
Plans Created") and one uses star-rated patient testimonials plus outcome-promising headlines.
Our build deliberately carries none of this. Expect the question "why don't we have stats like
theirs?" — the defensible position is that verifiable factual figures (years in practice,
waiting times) are fine, while satisfaction percentages and testimonials carry regulatory risk
under Medical Council of Ireland advertising guidance and need review before use.

---

## Design Direction Change — 2026-08-14

**Requested:** match the visual style of The Pain Clinic (UPMC Whitfield Hospital) — supplied as a
screenshot reference.

**Changed:** full restyle of `css/styles.css` plus header/hero markup in `index.html`. No content,
heading hierarchy, schema, or meta tags were altered — this was a visual pass only, verified after
the fact (still 1 × h1, 7 × h2, 18 × h3; JSON-LD, OG, Twitter and canonical all intact).

| | Before | After |
|---|---|---|
| Palette | Navy/blue `#0b1f3a` | Deep teal `#0e6153`, cream `#f8f4ed`, gold accent |
| Headings | Sans-serif | Serif display (Georgia stack) |
| Buttons | Sentence case, square-ish | Uppercase, letterspaced, pill |
| Sections | White / pale blue | White / cream alternating, gold rule under headings |
| Header | Logo + nav | Utility bar (phone/email) above, concentric-ring logo mark, centred nav |
| Hero | Text only | Two-column with portrait frame, gold name eyebrow, credentials line, ring motif |
| Footer | Navy | Deep teal `#062f29` |

**Deliberate divergences from the reference, and why:**

- **Hero primary CTA is white, not dark teal.** The reference uses a dark button on its teal hero.
  Measured, a dark teal fill reaches only ~2:1 against our hero band — short of the 3:1 WCAG 1.4.11
  requires for a UI component boundary. White gives 7.36:1. Flagged because it is a visible
  difference from the reference that was made on purpose.
- **Gold has three tints** (`--color-gold`, `-light`, `-dark`) rather than one. A single gold cannot
  clear 4.5:1 on white, cream and teal simultaneously; the hero eyebrow needed `#eac878` (4.57:1)
  where the base gold managed only 3.40:1.
- **Type is a system serif stack (Georgia), not a webfont.** Keeps the zero-dependency, no-external-
  request build. If the exact editorial feel of the reference is wanted, self-hosting a display
  serif (Playfair Display or similar) is the upgrade path — it costs one font request.

**Two bugs found and fixed during this pass:**

1. **Hero CTA was invisible** — the teal primary button rendered on the teal hero band with 1.00:1
   contrast. Caught on screenshot review, not in code.
2. **Mobile nav overlay covered the header** — a regression introduced by adding the utility bar.
   The overlay was offset from the viewport top by the header height, so anything above the header
   pushed the header underneath it. Re-anchored the overlay to the header's own bottom edge
   (`position: absolute; top: 100%`), which now holds at both mobile and tablet.

**New outstanding placeholders from this change:**

- [ ] Professional portrait photograph of Dr. Alex for the hero (3:4 crop; currently a placeholder
      frame). The reference leans heavily on its consultant portrait — this is the single biggest
      visual gap remaining.
- [ ] Post-nominals / credentials line for under the name in the hero.

---

## Legibility & Colour Consistency Pass — 2026-08-14

**Requested:** "this is for a doctor, remember font and button and all should be clear, i can see
colour inconsistency and lack of visibility."

Rather than adjust by eye, every visible text element was measured in the browser for computed
font size and actual contrast ratio. That found one severe defect and a systemic size problem.

### Severe: header CTA was dark-on-dark (1.97:1)

`.primary-nav a { color: teal-900 }` outranked `.btn-primary`'s white label, so the header
"Contact Us" button rendered dark green text on a green fill — effectively unreadable. Introduced
by the teal restyle. The colour rule is now scoped to `.primary-nav ul a`, leaving the button
alone; the CTA measures 7.36:1.

### Systemic: text was too small for this audience

Patients for a pain practice skew older and are often in discomfort. Fifteen elements measured
under 14px, including the primary CTA and the consultant's credentials.

| Element | Before | After |
|---|---|---|
| Base body | 16px | 17px |
| Primary buttons | 12.5px | 15.6px |
| Hero credentials | 11.5px italic, 72% white | 15.2px, 92% white |
| Hero name eyebrow | 12.5px | 16px |
| Section eyebrows | 11.5px | 14px |
| Form labels | 12.5px | 14.4px |
| Card body copy | 15px muted | 17px primary text |
| Utility bar / footer / fine print | 12.5–13.6px | 14–15.6px |

Button letter-spacing was also reduced (0.12em → 0.07em); heavy tracking on uppercase text looks
refined but measurably slows reading.

### Colour consistency

- `--color-text-muted` darkened `#4f5c58` → `#3f4b47` (9.0:1 on white). It was being used for
  real body copy, not just captions.
- Card and trust-point body copy moved off muted onto the primary text colour entirely.
- The error red is now a token (`--color-error`) rather than a one-off hex.
- The gold rule under section headings was three near-duplicate selectors, which is why headings
  looked inconsistent. Now a single `.section h2:not(.sr-only)::after`.

### Note on the audit method

The measuring script does not composite translucent backgrounds, so it reported the hero portrait
label at 1.0:1. Computed properly (white 88% over a 8% white frame over teal) it is 5.12:1 and
passes. Worth knowing before trusting that script's output on any element with an alpha
background.

**Verified after the pass:** no real contrast failures, nothing below 13px, and content unchanged
— 1 × h1, 7 × h2, 18 × h3, JSON-LD intact, zero broken links, contact form still submits.

---

## Portrait Added — 2026-08-17

Photograph supplied by the user via chat upload. Correction to what was said earlier in this
project: images pasted into the conversation **are** written to the session filesystem
(`~/.claude/uploads/`), so it could be added directly — no manual GitHub upload was needed.

**Processing:** source 392×468 PNG (173 KB) → centre-cropped to 351×468, an exact 3:4 to match the
hero frame (21px trimmed from each side, full head-to-shoulders height preserved) → JPEG quality
88 at **26 KB**, an 85% reduction. Converted via Chromium canvas, as neither PIL nor ImageMagick
is present in this environment.

**Known limitation:** at 351px wide the image renders into a 320px box, so it is below 2× for
high-DPI screens and will look slightly soft on a modern phone or retina display. Flagged inline
in `index.html`. **If an ~800×1067 original exists it should replace this** — it is the single
cheapest remaining quality win, and a consultant portrait is exactly where softness is most
noticeable.

The photo is already toned in a cool teal-grey, which happens to sit well against the teal hero
band; its white background reads as a deliberate portrait plate, matching the treatment on the
UPMC reference site.

**Still not supplied:** the three procedure images (spinal injections, radiofrequency ablation,
joint ablation). For clinical photographs, confirm patient consent and image licensing before
publishing — an obligation the portrait does not carry.
