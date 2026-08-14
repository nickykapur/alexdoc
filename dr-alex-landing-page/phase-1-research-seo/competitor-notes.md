# Competitor Notes — Dublin Pain Clinics

**Status:** Design/content review completed 2026-08-14 from full-page screenshots of three
homepages. **Technical SEO (schema markup, title tags, meta descriptions, word counts) is still
unverified** — that needs the console snippet in `competitor-audit-capture-brief.md` run on each
site. Anything below marked *(unverified)* is still an assumption.

An earlier version of this file listed confident "competitor gaps" that had never been checked.
Several of them turned out to be **wrong**. Those corrections are recorded below, because the
build's differentiation strategy was partly based on them.

---

## Who the competitors actually are

| Site | Positioning |
|---|---|
| dublinpainclinic.ie | "Dublin Pain Clinic Group, part of Beacon Pain Clinic" |
| beaconpainmanagement.ie | "Beacon Pain Clinic, part of Dublin Pain Clinic Group" |
| pain-treatment.ie | Dublin Pain Treatment Clinic, Dun Laoghaire — independent |

**Important: the first two are the same business.** They share a phone number (01 293 7177),
an email (info@dublinpainclinic.ie), and an address (Suite 32, The Mall, Beacon Court, Sandyford,
Dublin). So the real competitive picture is **one large consultant-led group running two sites**,
plus **one independent integrative practice** — not three separate rivals.

That group is the primary competitor for Dr. Alex, because it occupies exactly the same
positioning: consultant-led, hospital-adjacent, insurance-based, GP-referral interventional pain
management. `pain-treatment.ie` is a different market (acupuncture, functional medicine,
integrative therapy) and competes mainly on condition keywords rather than on consultant care.

---

## Corrections to earlier assumptions

| Earlier claim | Reality | Impact |
|---|---|---|
| "No dedicated condition pages — common gap" | **Wrong.** dublinpainclinic.ie has *Chronic Pain* and *Fibromyalgia* as top-level nav items. beaconpainmanagement.ie has a Treatments dropdown and a "View all pain conditions" link. pain-treatment.ie lists 9 conditions with descriptions on the homepage alone. | Our per-condition `<h3>` approach is table stakes, **not** a differentiator. |
| "Thin, generic content" | **Wrong for this set.** All three have substantial, well-structured homepage content with clear section hierarchy. | We may be *behind* on depth, not ahead. |
| "Unoptimized stock photography, slow pages" | **Mixed.** pain-treatment.ie is very photo-heavy. Both Beacon-group sites are clean and use icon cards. | Our icon-card approach matches the strongest competitor rather than beating it. |
| "Testimonials of uncertain provenance" | **Confirmed, but only on one site.** pain-treatment.ie has a "What Our Patients Say" section with a 5-star rating and a patient quote. Neither Beacon-group site shows testimonials. | Our no-testimonials stance aligns with the strongest competitor. |
| "No schema markup" | **Still unverified.** Cannot be seen in a screenshot. | Run the console snippet before claiming this. |

---

## Design review

### Shared visual language (both Beacon-group sites)
Navy/blue-on-white palette, generous white space, soft blue tinted section bands, rounded cards
with light borders and subtle shadow, blue pill CTA buttons, decorative circular background
shapes. **This is essentially the palette and card system our build already uses** — our design
sits naturally in this category rather than looking out of place.

`pain-treatment.ie` diverges sharply: yellow/gold accent, full-bleed photographic hero with text
overlay, heavy lifestyle photography throughout. Warmer and more consumer-wellness; less clinical.

### Structural features they have that our build does not

1. **Utility bar above the header** — phone, email, and opening hours (Mon–Fri 9AM–5PM) pinned
   at the very top of the page on both Beacon sites. Contact details visible before any scroll.
2. **Credibility statistics** — "20+ Years of Experience", "20,000+ Personalised Care Plans
   Created", "95% Patient Satisfaction", "1–2 Weeks Appointments Within". Prominent on both
   Beacon sites, in the hero and in a dedicated band. See the compliance note below.
3. **FAQ accordion in the hero** — beaconpainmanagement.ie puts five collapsible questions
   directly in the hero: *Cost of consultations? What happens during my appointments? Why do I
   need a referral? Can I attend without health insurance? How soon can I get an appointment?*
   This is the single strongest feature seen across all three sites — it answers booking anxiety
   at the point of decision, and it is well-suited to FAQ structured data.
4. **A three-step patient journey section** — "How we support you in every step", numbered 01/02/03
   with icons and checkmark sub-bullets (Submit Request → Assessment & Diagnosis → Treatment and
   Follow Ups). Present on both Beacon sites. Our build has nothing equivalent.
5. **Insurance partner logos, not text** — actual VHI, GloHealth, Irish Life Health and Laya
   logos in cards. Our build lists insurers as text pills, which is a materially weaker trust
   signal.
6. **Named consultants** — "Prof. Oleg Ilyinski, Asst. Prof. Wajid Khan, Dr. Sven Sommer" appear
   in body copy with a "Meet Our Team" link. Individual credibility is doing real work here.
7. **A dedicated GP referral path** — beaconpainmanagement.ie has *Referrals* as a nav item and a
   "GP Referral — Information for GPs" CTA sitting beside the patient CTA. Our build mentions the
   GP pathway only as a one-line trust point.
8. **Multi-page architecture** — About, Treatments, Referrals, Contact, Careers. Ours is a single
   page by design, per the brief. Worth knowing this is the category norm.
9. **Opening hours displayed** — footer and utility bar on both Beacon sites.

### Where our build already matches or leads
- Icon-based condition/treatment cards — same approach as the strongest competitor.
- Per-condition and per-treatment headings — matches; no longer a differentiator.
- Clean navy/blue clinical palette — squarely in the category's visual language.
- **A working contact form.** Neither Beacon-group site shows one on the homepage; both drive to
  an email address instead. This is a genuine conversion advantage for us *if* the form gets
  wired up to a real endpoint (still outstanding).
- **Click-to-call in the sticky header** — the Beacon sites surface phone in a utility bar but
  our mobile call button is more prominent on small screens.

---

## Compliance observations (relevant to Medical Council of Ireland guidance)

Worth raising with Dr. Alex directly, because it will come up:

- Competitors **do** publish quantified outcome-adjacent claims — "95% Patient Satisfaction",
  "20,000+ Personalised Care Plans Created" — and pain-treatment.ie uses outcome-promising
  headline language ("Say Goodbye to Your Persistent Pain") alongside star-rated patient
  testimonials.
- **Their doing it does not make it compliant, and does not make it advisable for Dr. Alex.**
  Our build deliberately carries none of this.
- Expect the client to ask *"why don't we have stats like theirs?"* The defensible answer:
  verifiable, non-outcome factual figures (years in practice, number of procedures performed,
  typical waiting time) are reasonable to include; satisfaction percentages and testimonials
  carry regulatory risk and need review before use.
- Neutral, factual credibility markers we *could* safely add: years of experience, hospital
  affiliation, appointment lead time, "GP referral required" clarity.

---

## Recommended changes to our build

Ranked by value-to-effort. None of these require abandoning the single-page structure.

| # | Change | Needs from Dr. Alex |
|---|---|---|
| 1 | **Add an FAQ section** (cost, what to expect, referral requirement, insurance, waiting time) with FAQ structured data | Answers to the five questions |
| 2 | **Add a three-step "How it works" patient journey** section | Confirmation of the actual process |
| 3 | **Replace insurer text pills with logos** | Logo files + confirmation of permission to display |
| 4 | **Give the GP referral pathway its own section** with a dedicated CTA for referring GPs | Referral process details |
| 5 | **Add a utility bar** with phone, email and opening hours above the header | Opening hours (already an outstanding placeholder) |
| 6 | **Add factual, non-outcome credibility figures** — years of experience, appointment lead time | Real figures, compliance-checked |
| 7 | Consider naming the consultant prominently with credentials | Already an outstanding placeholder (surname, qualifications) |

---

## Still outstanding

Screenshots answered the design question. These still need the console snippet from
`competitor-audit-capture-brief.md`:

- Whether any competitor uses JSON-LD, and which types *(unverified)*
- Their actual title tags and meta descriptions *(unverified)*
- Real homepage word counts, to check whether our 730 words is short *(unverified)*
- PageSpeed scores *(unverified)*
