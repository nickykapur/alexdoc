# Meta Tags Reference

Final meta tags used in `phase-3-design-build/index.html`, kept here for quick reference and
future edits (e.g. if the domain, surname, or hero image changes).

## Title tag (40 characters)

```
Pain Management Clinic Dublin | Dr. Alex
```

Includes the primary keyword ("Pain Management Clinic Dublin") at the front, well under the
60-character guideline. That leaves **20 characters of headroom** —
`[PLACEHOLDER: append Dr. Alex's surname once confirmed]`; anything up to 20 characters
(including the leading space) keeps the tag within 60.

## Meta description (123 characters)

```
Consultant-led pain management in Dublin with Dr. Alex — back pain, sciatica, nerve pain & more. Book a consultation today.
```

Includes the primary keyword, condition long-tails, and a call to action, under the 155-character
guideline.

## Canonical

```html
<link rel="canonical" href="https://www.dralexpainmanagement.ie/">
```

`[PLACEHOLDER: this is a placeholder domain — replace every instance of
https://www.dralexpainmanagement.ie/ across index.html and schema.json with the real production
domain once it's registered/confirmed]`.

## Open Graph

| Tag | Value |
|---|---|
| `og:type` | `website` |
| `og:title` | Pain Management Clinic Dublin \| Dr. Alex |
| `og:description` | Consultant-led, evidence-based pain management in Dublin. Back pain, sciatica, nerve pain, injections and more. Book a consultation. |
| `og:url` | https://www.dralexpainmanagement.ie/ |
| `og:image` | /assets/images/og-image-placeholder.svg — **placeholder**, replace with a real 1200×630 JPG/PNG before launch |
| `og:locale` | en_IE |
| `og:site_name` | Dr. Alex Pain Management Clinic |

## Twitter Card

| Tag | Value |
|---|---|
| `twitter:card` | `summary_large_image` |
| `twitter:title` | Pain Management Clinic Dublin \| Dr. Alex |
| `twitter:description` | Consultant-led, evidence-based pain management in Dublin. Book a consultation with Dr. Alex. |
| `twitter:image` | /assets/images/og-image-placeholder.svg — same placeholder note as above |

## Robots

```html
<meta name="robots" content="index, follow">
```

## Structured data

See `schema.json` in this folder (embedded in `index.html` as JSON-LD) — combined
`MedicalClinic` + `Physician` types.
