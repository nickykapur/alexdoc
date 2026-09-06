# Meta Tags Reference

Final meta tags used in `phase-3-design-build/index.html`, kept here for quick reference and
future edits (e.g. if the domain, surname, or hero image changes).

## Title tag (46 characters)

```
Pain Management Clinic Dublin | Dr Mudrakouski
```

Includes the primary keyword ("Pain Management Clinic Dublin") at the front, under the
60-character guideline, with the consultant's surname for branded search.

The full name "Dr Aliaksandr Mudrakouski" was not used here — it would push the tag to 57
characters and crowd out the keyword. The full name appears in the `<h1>` area, the About section,
and the `Physician` schema instead, which is what branded search needs.

## Meta description (153 characters)

```
Consultant-led pain management in Dublin with Dr Mudrakouski — spinal injections, radiofrequency ablation, PRP and joint injections. Book a consultation.
```

Includes the primary keyword, condition long-tails, and a call to action, under the 155-character
guideline.

## Canonical

```html
<link rel="canonical" href="https://alexpainclinic.ie/">
```

**Confirmed 2026-08-17: the production domain is `alexpainclinic.ie`.** The canonical host is the
apex (no `www`). Netlify must 301-redirect `www.alexpainclinic.ie` to the apex so only one host is
indexed — two reachable hosts split ranking signals and can trigger duplicate-content handling.

## Open Graph

| Tag | Value |
|---|---|
| `og:type` | `website` |
| `og:title` | Pain Management Clinic Dublin \| Dr Mudrakouski |
| `og:description` | Consultant-led pain management at Beaumont Private Clinic, Dublin. Spinal injections, radiofrequency ablation, PRP and joint injections. |
| `og:url` | https://alexpainclinic.ie/ |
| `og:image` | /assets/images/og-image-placeholder.svg — **placeholder**, replace with a real 1200×630 JPG/PNG before launch |
| `og:locale` | en_IE |
| `og:site_name` | Dr Aliaksandr Mudrakouski — Pain Management |

## Twitter Card

| Tag | Value |
|---|---|
| `twitter:card` | `summary_large_image` |
| `twitter:title` | Pain Management Clinic Dublin \| Dr Mudrakouski |
| `twitter:description` | Consultant-led pain management at Beaumont Private Clinic, Dublin. Book a consultation. |
| `twitter:image` | /assets/images/og-image-placeholder.svg — same placeholder note as above |

## Robots

```html
<meta name="robots" content="index, follow">
```

## Structured data

See `schema.json` in this folder (embedded in `index.html` as JSON-LD) — combined
`MedicalClinic` + `Physician` types.
