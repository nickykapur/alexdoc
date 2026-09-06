# Connecting the Site to Google

Two separate things, often confused:

| | What it is | What it does |
|---|---|---|
| **Google Business Profile** | The map listing with photos, hours and reviews | Gets the practice into the map pack above normal results. **Highest value.** |
| **Google Search Console** | A free tool that verifies you own the website | Gets the page indexed, and is the only reliable way to measure whether SEO is working |

Do the Business Profile first. It can bring enquiries within weeks; the website takes months.

---

## Before starting — three decisions from Dr Mudrakouski

**1. Which Google account owns this?** ⚠️ Whoever owns the account controls the listing. It must
be an account **Dr Mudrakouski or the practice owns**, not an agency or personal account — the
listing is the practice's asset. If a new Google account is needed, create it with a practice
email, then add anyone else as a Manager. Never the other way round.

**2. Is there already a listing?** He appears on Beaumont, Beaumont Private, VHI, Bon Secours and
irish-pages. Google may already have an unverified listing generated from these.
**Search Google Maps for "Aliaksandr Mudrakouski" and "Beaumont Private Clinic" first.**
If a listing exists, **claim it** — do not create a second one. Duplicate listings compete with
each other and are slow to merge.

**3. The address. This is currently blocking.**
Public directories say **Suite 26, Beaumont Road**. The website says **Suite 5, Hospital Road**.
The Business Profile address must match the website character for character — mismatched details
are one of the fastest ways to undermine local ranking. **Settle this before creating anything.**

---

## Google Business Profile — what's needed

Start at google.com/business.

| Field | Value | Status |
|---|---|---|
| Business name | Dr Aliaksandr Mudrakouski — Pain Management | Use his name, not a generic clinic name. Google's rules treat individual practitioners as their own listing. |
| Primary category | Pain Management Physician *(or Pain Control Clinic)* | Choose one primary; category drives which searches you appear for |
| Secondary categories | Anesthesiologist, Medical Clinic | Optional |
| Address | Suite number, Beaumont Private Clinic, Dublin 9, D09 Y177 | ⚠️ **conflict unresolved** |
| Phone | 085 713 3548 (secretary) | Must match the site |
| Website | https://alexpainclinic.ie | Needs the domain registered first |
| Hours | 08:00–19:00 | ⚠️ **conflict** — his hospital profile says 08:00–17:30 |
| Services | The nine conditions and seven treatments | Copy from the site |
| Photos | Portrait, and the clinic exterior/interior if available | Listings with photos get more engagement |

**Verification** is the slow part — usually a postcard to the address (about a week or two),
sometimes video. Nothing appears publicly until it completes, so start it early.

---

## Google Search Console — what's needed

Only possible once **alexpainclinic.ie is registered and the site is live**.

1. Go to search.google.com/search-console
2. Add a **Domain property** for `alexpainclinic.ie`
3. Verify by adding the **TXT record** Google gives you to the domain's DNS (at the registrar, or
   in Netlify if DNS is managed there)
4. Submit `https://alexpainclinic.ie/sitemap.xml`
5. Use **URL Inspection → Request Indexing** on the homepage to speed up first pickup

After that, Search Console reports impressions, clicks, average position and any indexing
problems. Impressions rise before rankings improve — that is the first sign it is working.

---

## Once both exist — one small code change

The Business Profile has a public URL. Add it, and any LinkedIn profile, to the `sameAs` array in
the structured data (`index.html` and `phase-4-seo-setup/schema.json`), which currently holds
placeholders. This tells Google the website and the listing are the same practice.

His [Beaumont Private](https://beaumontprivate.ie/dr-alexander-mudrakouski/) and
[VHI directory](https://www.vhi.ie/members/directory-of-consultants/consultant-details/13459)
profiles are also good `sameAs` entries.

---

## A note on reviews

Reviews strongly affect map-pack ranking. But actively soliciting patient reviews sits in the same
Medical Council territory as testimonials. **This is Dr Mudrakouski's call, and worth professional
advice** — do not run a review campaign on assumption.

---

## Order of operations

1. Settle the address and hours conflicts
2. Register `alexpainclinic.ie`
3. Search Google Maps for an existing listing — claim it, or create one
4. Start Business Profile verification (slowest step — begin early)
5. Deploy the site to Netlify, point the domain at it, redirect `www` to the apex
6. Verify in Search Console, submit the sitemap
7. Add the Business Profile URL to `sameAs` in the schema
