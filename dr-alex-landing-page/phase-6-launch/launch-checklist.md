# Phase 6 — Pre-Launch Checklist

Current as of 2026-08-17. `[x]` is done and verified; `[ ]` is genuinely outstanding.
The Phase 6 deliverable — a final report confirming the page is live — cannot be written until
the site is actually published.

---

## Content and accuracy

- [x] **Real practice details throughout** — name, credentials, IMC registration 230380, Beaumont
      Private Clinic address, three phone numbers, email, biography, qualifications.
- [x] **Nine conditions and seven treatments** in Dr Mudrakouski's own clinical wording.
- [x] **Insurers confirmed** — VHI, Laya, Irish Life, POMA, GMA, Glo Health, plus self-paying.
- [x] **Referral policy confirmed** — GP referral welcome but not required; self-referral accepted.
- [x] **Opening hours** — 08:00–19:00, flexible times and days.
- [x] **No testimonials, no outcome or efficacy claims** anywhere in the copy.
- [x] **Phase 2 content draft matches the built page** (it had fallen out of sync; regenerated).
- [ ] **Three clinical claims awaiting sign-off** — the PRP safety superlative, the PRP trial
      figures, and the botulinum toxin efficacy line. Withheld pending Dr Mudrakouski's decision.
      See `phase-5-review/clinical-claims-review.md`.
- [ ] **Address conflict unresolved** — public directories say Suite 26, Beaumont Road; the site
      says Suite 5, Hospital Road. **Blocking**, because this must match the Google Business
      Profile exactly.
- [ ] **Opening hours conflict** — his Beaumont profile says 08:00–17:30 with occasional Saturday
      clinics, not 08:00–19:00.
- [ ] **IMC number not independently verified** against the public register.
- [ ] **FCAI** appears on his hospital profile but not on the page; **Bon Secours** affiliation not
      mentioned.

## Build and technical

- [x] **All links work** — nav, buttons, footer, legal pages, `tel:` and `mailto:`. Zero broken.
- [x] **Mobile, tablet and desktop** checked at 375 / 768 / 1280px.
- [x] **Text size and colour contrast measured** against WCAG AA, not eyeballed.
- [x] **Title, description, structured data, sitemap, robots.txt** all in place and valid.
- [x] **Domain wired** — every URL points to `alexpainclinic.ie`.
- [x] **Legal pages exist and are linked** — privacy, terms, cookies.
- [x] **Portrait live and optimised** — 173 KB down to 26 KB.
- [x] **No external scripts or fonts** — nothing to slow the page or leak visitor data.
- [ ] **Contact form — wired to Formspree, but the endpoint ID is not set yet. Blocking.**
      The code is done: it POSTs to Formspree, has a spam trap, re-enables the button after a
      failure, and keeps what the patient typed so they can retry. One step remains — create the
      form at formspree.io and paste the ID into `FORMSPREE_ID` in `js/script.js`.
      **Until that is done the form refuses to accept enquiries and shows the phone numbers
      instead.** That is deliberate: the earlier version displayed "your enquiry has been
      received" without sending anything, so a patient was told the clinic would call and then
      never heard from anyone. Nothing now claims success unless Formspree confirmed it.
- [ ] **Legal pages are placeholders** — each needs proper legal/GDPR review.
- [ ] **Social share image is a placeholder SVG** — should be a real 1200×630 JPG or PNG.
- [ ] **No Lighthouse/PageSpeed run** — no browser tooling in the build environment.

## Launch steps, none started

- [x] Register **alexpainclinic.ie**
- [x] Connect the repository to Netlify (config is ready — `netlify.toml` sets the publish folder)
- [x] Point the registrar at Netlify's nameservers
- [x] **Analytics decided and built** — Google Analytics 4 (`G-0BYKKVJ87K`), loaded only after the
      visitor accepts, with the cookie policy rewritten to match.
- [ ] **Create the Formspree form and set `FORMSPREE_ID`** — see the item above.
- [ ] Redirect `www` to the apex so only one address is indexed
- [ ] Confirm HTTPS certificate
- [ ] Create and verify the **Google Business Profile** — the single highest-value step.
      Instructions for Dr Mudrakouski are in `Google-Business-Profile-Setup-Dr-Mudrakouski.pdf`.
- [ ] Verify in **Google Search Console** and submit the sitemap
- [ ] Final pass on a real phone and desktop once live

## Optional, recommended after launch

- [ ] **FAQ section** — cost, insurance, referral, waiting time. The research points to this as the
      best remaining content opportunity.
- [ ] Three-step "how it works" patient journey section
- [ ] Insurer logos instead of text
- [ ] A higher-resolution portrait — the current one is slightly soft on modern screens
- [ ] Three procedure images, once supplied and consent confirmed

---

## Summary

**Live on `alexpainclinic.ie`, with analytics running. Three things still outstanding.**

1. **The Formspree endpoint ID is not set**, so the form tells patients to phone instead of
   accepting enquiries. A five-minute job, and the last purely practical blocker.
2. **The address and opening-hours conflicts are unresolved** — the clinic's own listings say
   Beaumont Road and 08:00–17:30; we were told Hospital Road and 08:00–19:00. This matters most
   for the Google Business Profile: hours saying 19:00 against a building that shuts at 17:30
   sends patients to a locked door.
3. **Three clinical claims await Dr Mudrakouski's sign-off** (see
   `phase-5-review/clinical-claims-review.md`).

Items 2 and 3 need Dr Mudrakouski. Item 1 does not.
