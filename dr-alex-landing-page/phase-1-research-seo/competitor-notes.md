# Competitor Notes — Dublin Pain Clinics

Quick on-page observations of the general competitive landscape for Dublin pain management
clinics (e.g. painclinic.ie, dublinpainclinic.ie, and similar consultant-led pain practices).
These are general patterns observed across this category, written from SEO/UX best-practice
review rather than a live audit in this session — worth spot-checking the actual live sites
before final launch, since content changes over time.

- **Thin, generic content.** Many competitor sites describe treatments in one vague paragraph
  rather than breaking out each condition and treatment with its own heading. This limits how
  many long-tail queries a page can realistically rank for.
  → *Opportunity:* give every condition and treatment its own `<h3>` with a short, specific
  description (this brief already spec's that in Phase 2/3).

- **No structured data (schema markup).** Several practice sites in this space skip JSON-LD
  entirely, or only mark up generic `LocalBusiness` without medical-specific types, opening hours,
  or specialty. This is a missed opportunity for rich results and Knowledge Panel accuracy.
  → *Opportunity:* implement combined `MedicalClinic` + `Physician` schema (Phase 4).

- **No dedicated, crawlable "conditions treated" or "treatments offered" content.** Some sites
  bury this information in a PDF brochure or a single image, which search engines can't index as
  text.
  → *Opportunity:* keep everything as real, semantic HTML text.

- **Inconsistent NAP (Name/Address/Phone).** It's common to see a phone number in the footer that
  doesn't match the one on the Google Business Profile, or an address format that varies between
  the contact page and the footer — this weakens local pack rankings.
  → *Opportunity:* single source of truth for NAP, reused verbatim in header, contact section, and
  footer (flagged as a placeholder here until Dr. Alex confirms real details).

- **Slow, image-heavy pages with unoptimized stock photography.** Large hero images and stock
  photos of generic "doctor with patient" scenes add load time without adding trust.
  → *Opportunity:* lightweight icon-based cards for conditions/treatments instead of stock photos,
  fast-loading single page (Phase 3 build).

- **Testimonials of uncertain provenance.** A few competitor sites feature patient quotes with no
  visible consent process, which sits awkwardly with Medical Council of Ireland advertising
  guidelines on testimonials for registered practitioners.
  → *Opportunity:* deliberately omit testimonials from this build unless/until Dr. Alex supplies
  real, compliance-reviewed ones (per the brief's compliance note).
