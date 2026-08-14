# Competitor Notes — Dublin Pain Clinics

> ⚠️ **IMPORTANT — THESE ARE UNVERIFIED HYPOTHESES, NOT AUDIT FINDINGS.**
> No competitor site was actually visited or inspected when this file was written. The points
> below are *common patterns in the medical-practice website category*, written from general
> SEO/UX experience. They have **not** been checked against any live Dublin pain clinic site.
>
> Treat every bullet as "a thing to go and check," not as a fact about a named competitor.
> **Do not send this file to a client or use it in a pitch as-is** — the claims would not
> survive scrutiny. A real audit means opening each site and checking: view-source for JSON-LD,
> the actual heading structure, the real title/meta description, and a PageSpeed run.

## Competitors to audit

The original brief named painclinic.ie and dublinpainclinic.ie. A search for Dublin pain clinics
also surfaced these, which should be included in a real competitive audit:

- dublinpainclinic.ie
- beaconpainmanagement.ie (Beacon Pain Clinic)
- pain-treatment.ie
- integrativemedicine.ie (Dun Laoghaire)
- painreliefireland.ie
- Aggregators worth noting separately, since they compete for the same queries without being
  clinics: odycy.com and chronicpain.ie/pain-clinics — directory listings frequently outrank
  individual practice sites for "pain clinic Dublin" style searches, which is an argument for
  also claiming/optimising a listing on them.

## Hypotheses to verify (category patterns, not confirmed findings)

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

---

## Why this wasn't verified in this session

Outbound network access in the build environment blocked requests to these domains, so a live
audit was not possible. This is flagged rather than quietly glossed over, because the
"opportunity" framing above only holds if the gaps are real — if a competitor *does* already have
solid schema markup and per-condition pages, the differentiation argument for this build weakens
and the strategy should be revisited.

**Next step before this informs any client-facing claim:** open each site listed above, and for
each one record: (1) title tag and meta description, (2) whether JSON-LD is present and which
types, (3) whether conditions/treatments have individual headings or are one block of prose,
(4) NAP consistency vs. their Google Business Profile, (5) a Lighthouse/PageSpeed score.
