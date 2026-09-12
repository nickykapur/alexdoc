# Clinical Claims — Items Requiring Dr Mudrakouski's Sign-Off

The clinical content supplied on 2026-08-17 contained several **efficacy and safety claims**. The
original project brief was explicit that outcome/efficacy claims must not be published without
review, because Medical Council of Ireland guidance on advertising restricts what a registered
practitioner may claim.

These are Dr Mudrakouski's own clinical statements and he is the qualified party — this is not a
judgement on whether they are scientifically accurate. The issue is narrower: **claims of this
kind on a public-facing practice website carry regulatory exposure that clinical accuracy alone
does not resolve.** Each is recorded below with the wording as supplied and what was published
instead, so he can reinstate any of them deliberately.

---

## 1. PRP safety superlative — MODERATED

**Supplied:** "PRP is the most safe treatment."

**Published:** the sentence was dropped; the procedure is described factually instead ("a
patient's own blood is drawn and separated in a centrifuge…").

**Why:** an unqualified superlative about safety is the highest-risk category of claim, and is
difficult to substantiate for any interventional procedure. Recommend it stays out.

---

## 2. PRP randomised-trial efficacy figures — NOT PUBLISHED

**Supplied:**
> "Clinical research in patients (including randomized controlled clinical trials RCCT) have shown
> benefits for low back pain (Facet Joint, Sacroiliac Joint, Disc Injections). Case series of
> patients have shown benefits for people with sciatica who have epidural injections of PRP."
>
> "PRP Injection in the major joints (knees/hips/shoulders) has also been studied. Of 12
> randomized controlled trials for knee arthritis comparing PRP with either steroid, hyaluronic
> acid or placebo, PRP was superior in 10 of the 12 studies."

**Published:** neither passage. The PRP card describes what the treatment is and what it aims to
do, without efficacy figures.

**Why:** "superior in 10 of the 12 studies" is a specific comparative efficacy claim. On a
practice website it functions as advertising rather than education, and it invites the question of
which 12 trials — unsourced, it is hard to defend.

**If Dr Mudrakouski wants this content published**, the safer form is a clearly separate,
referenced patient-information section that cites the specific studies, rather than a marketing
claim on a treatment card. That is a legitimate approach and worth considering — but it needs the
citations attached.

---

## 3. Botulinum toxin efficacy — MODERATED

**Supplied:** "Botox is very effective for Migraine and other headaches. BtxA has been shown in
high quality clinical studies to reduce the frequency's day intensity of migraine."

**Published:** "Botulinum toxin type A is used in the management of chronic migraine and other
headache disorders, and in selected neuropathic and musculoskeletal pain conditions."

**Why:** "very effective" is an efficacy claim. The published version states what the treatment is
used for, which is factual and carries no regulatory exposure. (Note: the supplied sentence also
contained a typo — "frequency's day intensity" — which suggests it was a working draft rather
than final approved copy.)

---

## 4. Wording standardised for an Irish audience

- **RESOLVED 2026-08-17.** Dr Mudrakouski confirmed the post-nominal **FFPMCAI** and gave the
  fellowship as "Fellow Faculty Pain Management, College of Anaesthetists". His wording is now
  used verbatim on the page and in the schema, replacing the earlier guess ("Faculty of Pain
  Medicine, College of Anaesthesiologists of Ireland").
  *One point still worth a glance:* the body's registered name is the College of Anaesthesiologists
  of Ireland, and its pain faculty is commonly styled the Faculty of Pain Medicine. His wording has
  been used because he is the fellow and the authority on his own credential — but if the formal
  title is wanted for accuracy, it is a one-line change.
- **IMC registration added.** Registered with the Irish Medical Council as a Pain Management
  Specialist, IMC Reg. No. **230380**, shown in the hero, the About qualifications list, and as a
  schema `identifier`. Supplied by Dr Mudrakouski; **not independently verified against the public
  IMC register** — worth one spot-check before launch, since a wrong registration number on a
  practice site is a serious error.

---

## 5. Content removed because it was not on the supplied list

The earlier draft carried conditions and treatments that do not appear in Dr Mudrakouski's list.
They have been removed rather than left to imply services he does not offer:

- **Fibromyalgia** (condition) — removed
- **Spinal Cord Stimulation** (treatment) — removed
- **Physiotherapy Referral** (treatment) — removed

If any of these are in fact offered, they should be added back with his own description.

---

## 6. Contact detail withheld pending confirmation

**RESOLVED 2026-08-17.** Dr Mudrakouski explicitly asked for both numbers to be published, so the
direct mobile (**086 823 9362**) is now live alongside the secretary's line and clinic reception.
The scraping concern raised earlier still stands as a fact, but it is now his informed decision
rather than an open question.

---

## Still outstanding

- [x] **Opening hours — confirmed 2026-08-17:** 8:00 to 19:00, with flexible times and days by
      arrangement. Live on the page and in the schema.
      *Note:* he gave hours but not which days. The schema states Monday–Friday as the standard
      assumption, and the page adds "flexible times and days available by arrangement". If weekend
      clinics run, the schema should say so — it feeds Google's opening-hours display.
- [x] **Insurer list — confirmed 2026-08-17:** VHI, Laya, Irish Life, POMA, GMA, Glo Health, and
      self-paying patients accepted. His note read "VHI, LAYA Irish Life, POMA, GMA, Glo Health";
      this was read as Laya and Irish Life being two separate insurers, consistent with the earlier
      draft. Worth a glance to confirm that reading.
- [x] **GP referral policy — confirmed 2026-08-17:** a referral is not required but is desirable,
      and self-referred patients are accepted. Live in the Contact section.
- [x] **Domain confirmed 2026-08-17: `alexpainclinic.ie`.** Wired through the canonical, Open Graph
      and Twitter tags, both JSON-LD nodes, `sitemap.xml` and `robots.txt`. Canonical host is the
      apex (no `www`) — Netlify must 301 `www` to it so only one host is indexed.
      *Caught during this pass:* `sitemap.xml` and `robots.txt` were still advertising
      `dralexpainmanagement.ie`, an abandoned placeholder from the first draft that was missed when
      the rest moved to `[PLACEHOLDER-DOMAIN]`. Had that shipped, the sitemap would have pointed
      crawlers at a domain the practice does not own.
- [x] **Portrait photograph — supplied and live.** Confirmed 2026-08-17 as Dr Mudrakouski's own
      personal photograph. He is both the subject and the practice principal, so there is no
      third-party consent or licensing question. Cleared for publication.
      *Quality note, not a blocker:* the file is 351×468, which renders below 2× on high-DPI
      screens. Consistent with a personal photo rather than a professional shoot. A studio
      headshot would be a worthwhile upgrade whenever convenient — the hero portrait is the
      page's main credibility image — but the current one is usable and live.
- [ ] Three procedure images (spinal injections, radiofrequency ablation, joint ablation) — still
      not transmitted. **These are a separate question from the portrait:** clinical images may
      show patients or identifiable anatomy, so patient consent and image licensing must be
      confirmed before any of them is published.

---

## 7. DISCREPANCIES vs. Dr Mudrakouski's existing public listings — 2026-08-17

A search for his name surfaced existing public profiles. **Several conflict with the details
supplied for this site.** NAP (name/address/phone) consistency across the web is one of the
strongest local-ranking signals, so these need resolving before launch — inconsistent listings
actively work against the map-pack visibility this site is being built for.

### Existing public presence found

| Source | What it is |
|---|---|
| beaumont.ie/pages/consultants/621 | Beaumont Hospital consultant profile |
| beaumontprivate.ie/dr-alexander-mudrakouski | Beaumont Private Clinic profile |
| vhi.ie directory-of-consultants/consultant-details/13459 | VHI consultant directory |
| bonsecours.ie/consultants/aliaksandr-mudrakouski | **Bon Secours** consultant listing |
| irish-pages.ie (two listings) | Business directory |

### Conflicts to resolve

1. **Address — the most serious.** The directory listings give
   **Suite 26, Beaumont Private Clinic, Beaumont Road, Dublin, D09 Y177**.
   He supplied **Suite 5, Beaumont Private Clinic, Hospital Road**. Two differences: the suite
   number and the road name. The Eircode matches. **Which is current?** The site, the Google
   Business Profile and every directory must agree exactly.

2. **Opening hours.** His Beaumont profile states **Monday–Friday 08:00–17:30, with occasional
   Saturday morning clinics**. He told us **08:00–19:00**. Our schema currently says 08:00–19:00,
   Monday–Friday. If the older listing is stale, it should be corrected at source; if it is
   current, our page is wrong.

3. **Qualifications.** His Beaumont profile lists **"Fellow Pain Faculty ICA, FCAI, FIPP, CIPPS,
   EDRA"**. Our page shows FFPMCAI, FIPP & CIPS, EDRA. Differences: **FCAI** appears in his
   official profile but not on our page; the faculty fellowship is styled "Fellow Pain Faculty
   ICA" rather than FFPMCAI; and CIPPS vs CIPS. He confirmed FFPMCAI directly, so his instruction
   stands — but the mismatch with his own hospital profile is worth reconciling.

4. **Second hospital affiliation.** He is listed as a consultant at **Bon Secours** as well as
   Beaumont. Our page and schema mention only Beaumont. If he practises at both, adding it
   strengthens the profile and matches the public record.

### Action

Ask Dr Mudrakouski to confirm the current suite number and road, the true opening hours, and
whether Bon Secours should be included. Then align the site, the Google Business Profile, and
ideally correct the stale directory entries. The Beaumont Private and VHI profile URLs are also
good candidates for the schema `sameAs` array, which currently holds placeholders.

---

## 8. Address verified online — 2026-09-12

Checked against Beaumont Private Clinic's own site and Irish business directories.

**Eircode: D09 Y177 — CONFIRMED.** The clinic's official address is Beaumont Hospital, Beaumont
Road, Dublin 9, **D09 Y177**. The "D09U177" given in his later message was a typo; the site
already carried Y177 and needs no change.

**Reception number 01 837 5400 — CONFIRMED** as Beaumont Private Clinic's published number.

**Two things still worth resolving:**

1. **Road name.** The clinic's official listings give **Beaumont Road**; Dr Mudrakouski told us
   **Hospital Road**, and one directory does list "Hospital Rd". The clinic sits on the hospital
   grounds, so both names circulate. His answer has been kept on the site, but for the Google
   Business Profile, use whatever Google Maps autocompletes for the building — Google matches
   against its own address record, and fighting it causes verification problems.

2. **Opening hours conflict is now confirmed, not just suspected.** Beaumont Private Clinic's own
   published hours are **Monday–Friday 08:00–17:30, with occasional Saturday morning clinics** —
   the same as his hospital profile, and not the 08:00–19:00 he gave us. His personal clinic may
   well run later than the building's stated hours, and his instruction stands, but **a Google
   listing saying 19:00 when the building shuts at 17:30 will produce patients arriving to a
   locked door.** Worth one more question before the listing goes live.
