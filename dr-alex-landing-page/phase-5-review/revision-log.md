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
