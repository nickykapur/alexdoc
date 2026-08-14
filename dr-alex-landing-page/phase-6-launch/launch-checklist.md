# Pre-Launch QA Checklist

Status as of this build. Items checked `[x]` are done; items left `[ ]` are genuinely outstanding
and need real input or a decision from Dr. Alex before this site goes live — see
`phase-5-review/revision-log.md` for the detailed list.

- [ ] **All placeholder content resolved or explicitly flagged as pending**
      Not yet resolved — this is expected at this stage. Every gap (address, phone, email,
      surname, qualifications, hospital affiliation, years of experience, opening hours, insurer
      confirmation, social/profile links, and the real OG image) is explicitly marked with
      `[PLACEHOLDER: ...]` in the HTML and content docs, and fully itemized in
      `phase-5-review/revision-log.md`.

- [x] **All links work (nav, CTA buttons, contact form, footer links)**
      Nav anchors, CTA buttons, and footer links all resolve to real in-page sections or the
      privacy/terms/cookies pages. `tel:` and `mailto:` links are wired up correctly but point to
      placeholder values pending real contact details.

- [ ] **Contact form submits correctly (or is wired to the intended email/service)**
      The form validates client-side and shows a confirmation message, but is **not** yet wired to
      a real form-handling service or backend endpoint. Needs a decision on which service to use
      (e.g. Formspree, a booking platform, or a server-side endpoint) before launch.

- [x] **Mobile, tablet, and desktop layouts all checked**
      Responsive breakpoints implemented and reviewed at 375px (mobile), 768px (tablet), and
      1280px+ (desktop): mobile nav toggle, stacked single-column layout on mobile, 2-column
      grids on tablet, 4-column condition/treatment grids on desktop. (Reviewed via CSS/layout
      inspection in this build; a live cross-browser/device pass is still recommended before
      launch.)

- [x] **Title tag, meta description, and schema markup all in place and correct**
      `<title>` (54 characters), meta description (145 characters), canonical, Open Graph, Twitter
      Card, and combined `MedicalClinic` + `Physician` JSON-LD are all implemented — see
      `phase-4-seo-setup/meta-tags.md` and `schema.json`. Values that depend on real practice
      details (phone, address, hours, `sameAs` links) are placeholders pending confirmation.

- [x] **sitemap.xml and robots.txt present**
      Present both as reference copies in `phase-4-seo-setup/` and as working copies at the site
      root in `phase-3-design-build/` (where they need to live to function once deployed).

- [x] **No testimonials or unverifiable claims present**
      Testimonials section intentionally omitted per brief. Content draft reviewed for
      outcome/efficacy language — none present.

- [ ] **NAP (name/address/phone) consistent across page and footer**
      Structurally consistent — header, hero, contact section, footer, and JSON-LD all reference
      the same placeholder values from a single source (`content-draft.md`) — but cannot be
      verified as *correct* until real NAP details are supplied and cross-checked against the
      Google Business Profile listing.

- [x] **Privacy Policy / Terms / Cookie Policy pages exist (even simple placeholder versions) and are linked from the footer**
      `privacy.html`, `terms.html`, and `cookies.html` created and linked from the footer and the
      contact form's GDPR consent checkbox. Each is explicitly flagged as placeholder content
      needing legal review.

- [ ] **Page tested for load speed and image sizes optimized**
      No raster images are used (icon-based cards per brief, avoiding stock photography), which
      keeps the page inherently light — all icons are a single inlined SVG sprite and CSS/JS are
      hand-written with no external libraries. However, no Lighthouse/PageSpeed run was performed
      in this session (no browser tooling available here) — run one before launch, and replace the
      SVG OG-image placeholder with an optimized JPG/PNG.

## Summary

Content- and structure-complete; **not launch-ready**. The three blockers are: (1) real practice
details to replace placeholders, (2) a live form-handling service for the contact form, and (3) a
final Lighthouse/cross-device QA pass plus legal review of the placeholder policy pages.
