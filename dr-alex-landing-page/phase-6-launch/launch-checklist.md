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
- [ ] **Contact form not connected.** It validates and confirms, but sends nowhere. **Blocking.**
- [ ] **Legal pages are placeholders** — each needs proper legal/GDPR review.
- [ ] **Social share image is a placeholder SVG** — should be a real 1200×630 JPG or PNG.
- [ ] **No Lighthouse/PageSpeed run** — no browser tooling in the build environment.

## Launch steps, none started

- [ ] Register **alexpainclinic.ie**
- [ ] Connect the repository to Netlify (config is ready — `netlify.toml` sets the publish folder)
- [ ] Redirect `www` to the apex so only one address is indexed
- [ ] Confirm HTTPS certificate
- [ ] Create and verify the **Google Business Profile** — the single highest-value step
- [ ] Verify in **Google Search Console** and submit the sitemap
- [ ] Decide on analytics (note: Google Analytics needs a cookie banner and a rewritten cookie
      policy; a cookieless tool avoids both)
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

**Content-complete and technically sound; not launch-ready.** Four things block launch: the
domain is not registered, the contact form goes nowhere, the address conflict is unresolved, and
three clinical claims await sign-off. The first two are practical; the second two need
Dr Mudrakouski.
