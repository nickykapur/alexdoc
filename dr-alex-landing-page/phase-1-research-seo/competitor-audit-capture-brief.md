# Competitor Audit — Capture Brief

What to collect from each competitor site so the audit in `competitor-notes.md` can be rewritten
from evidence instead of assumption. Written because the build environment's network policy
blocked all outbound access to these domains, so the sites could not be inspected directly.

Work top-down and stop whenever you've had enough — sites are listed in priority order, and
Part A alone (three sites) is enough to make the design comparison real.

## Sites, in priority order

| # | Site | Why it matters |
|---|---|---|
| 1 | dublinpainclinic.ie | Named in the original brief; closest positioning match |
| 2 | beaconpainmanagement.ie | Consultant-led, hospital-affiliated — nearest model to Dr. Alex's practice |
| 3 | painclinic.ie | Named in the original brief |
| 4 | pain-treatment.ie | Ranks for treatment-intent queries |
| 5 | integrativemedicine.ie | Different positioning (integrative) — useful contrast |
| 6 | painreliefireland.ie | Broad "pain relief Ireland" targeting |

Also worth a look, though they're directories rather than clinics — they often outrank individual
practices for "pain clinic Dublin" and may be worth a listing of their own:
odycy.com, chronicpain.ie/pain-clinics

---

## Part A — Design (screenshots)

This is the part I most need and can't get any other way. **Paste the images straight into the
chat** — I can read them directly.

For each of the top 3 sites, two screenshots:

1. **Desktop, full page** — window at roughly 1280px wide or wider.
   In Chrome: `F12` → `Ctrl/Cmd + Shift + P` → type "Capture full size screenshot" → Enter.
   (This grabs the entire page, not just the visible part.)
2. **Mobile, full page** — same, but first toggle device mode (`Ctrl/Cmd + Shift + M`) and pick
   iPhone SE or 375px width.

If that's too fiddly, a plain visible-area screenshot of the homepage top is still useful —
the hero is where most of the design signal lives.

### What I'll read from them
Layout and grid, colour palette, typography and type scale, hero treatment, photography vs.
icons, CTA prominence and placement, navigation pattern, trust signals (logos, credentials,
affiliations), form design, overall visual credibility, and how dated or current it looks.

---

## Part B — Technical SEO (one console snippet per site)

Far faster than pasting page source. On each site: `F12` → **Console** tab → paste the snippet
below → Enter. It prints a report **and copies it to your clipboard**. Paste the result back to me.

If the console refuses the paste, type `allow pasting` first, press Enter, then paste.

```js
(() => {
  const t = (s) => (s || "").trim().replace(/\s+/g, " ");
  const meta = (n, a = "name") => t((document.querySelector(`meta[${a}="${n}"]`) || {}).content);
  const out = []; const p = (k, v) => out.push(`${k}: ${v}`);
  p("URL", location.href);
  p("TITLE", document.title); p("TITLE_LENGTH", document.title.length);
  p("META_DESC", meta("description") || "(none)");
  p("META_DESC_LENGTH", (meta("description") || "").length);
  p("CANONICAL", t((document.querySelector('link[rel="canonical"]') || {}).href) || "(none)");
  p("OG_TITLE", meta("og:title", "property") || "(none)");
  p("OG_IMAGE", meta("og:image", "property") || "(none)");
  p("TWITTER_CARD", meta("twitter:card") || "(none)");
  p("VIEWPORT_META", meta("viewport") || "(NONE - not mobile ready)");
  const ld = [...document.querySelectorAll('script[type="application/ld+json"]')]; const types = [];
  ld.forEach((s) => { try { const j = JSON.parse(s.textContent);
    const walk = (o) => { if (!o || typeof o !== "object") return;
      if (Array.isArray(o)) return o.forEach(walk);
      if (o["@type"]) types.push(o["@type"]); Object.values(o).forEach(walk); }; walk(j);
  } catch (e) { types.push("(unparseable)"); } });
  p("JSONLD_BLOCKS", ld.length);
  p("JSONLD_TYPES", types.length ? [...new Set(types.flat())].join(", ") : "(NONE)");
  ["h1","h2","h3"].forEach((h) => { const els = [...document.querySelectorAll(h)];
    p(`${h.toUpperCase()}_COUNT`, els.length);
    p(`${h.toUpperCase()}_TEXT`, els.map((e) => t(e.innerText)).filter(Boolean).join(" | ").slice(0,600) || "(none)"); });
  const imgs = [...document.images];
  p("IMG_COUNT", imgs.length);
  p("IMG_MISSING_ALT", imgs.filter((i) => !i.alt || !i.alt.trim()).length);
  p("WORD_COUNT", (document.body.innerText.match(/\S+/g) || []).length);
  p("FORMS", document.forms.length);
  p("TEL_LINKS", document.querySelectorAll('a[href^="tel:"]').length);
  p("SCRIPTS_TOTAL", document.scripts.length);
  p("STYLESHEETS", document.querySelectorAll('link[rel="stylesheet"]').length);
  const body = document.body.innerText.toLowerCase();
  p("MENTIONS_TESTIMONIAL", /testimonial|patient review|what our patients say/.test(body));
  p("CLAIM_WORDS_FOUND", ["guaranteed","pain-free","proven results","cure","100%","best in ireland","no.1","#1"].filter((w) => body.includes(w)).join(", ") || "(none)");
  const report = out.join("\n"); console.log(report);
  try { copy(report); console.log("\n^ copied to clipboard"); } catch (e) {}
  return report;
})();
```

---

## Part C — Speed (optional, 1 minute per site)

Run each homepage through https://pagespeed.web.dev and send me the four category scores
(Performance / Accessibility / Best Practices / SEO), mobile tab. This is the one claim in
`competitor-notes.md` about competitors being "slow and image-heavy" that needs a number
behind it.

---

## Our baseline, for comparison

Measured directly from `phase-3-design-build/index.html` using the same snippet above, so the
numbers are directly comparable to whatever comes back:

```
TITLE: Pain Management Clinic Dublin | Dr. Alex
TITLE_LENGTH: 40                       (60 is the guideline ceiling; 20 chars spare for the surname)
META_DESC_LENGTH: 123                  (155 is the guideline ceiling)
CANONICAL: present
OG_TITLE / OG_IMAGE / TWITTER_CARD: all present
VIEWPORT_META: width=device-width, initial-scale=1.0
JSONLD_BLOCKS: 1
JSONLD_TYPES: MedicalClinic, PostalAddress, OpeningHoursSpecification, Physician
H1_COUNT: 1
H2_COUNT: 7
H3_COUNT: 18                           (one per condition, treatment, and trust point)
IMG_COUNT: 0                           (icon-based cards, no stock photography)
IMG_MISSING_ALT: 0
WORD_COUNT: 730
FORMS: 1
TEL_LINKS: 3
SCRIPTS_TOTAL: 2                       (no third-party JS, no frameworks)
STYLESHEETS: 1
MENTIONS_TESTIMONIAL: false            (deliberate — Medical Council guidelines)
CLAIM_WORDS_FOUND: (none)              (deliberate — no outcome/efficacy claims)
```

Note `WORD_COUNT: 730` is the one number where we may well come out *behind*. If competitors are
running 1,500+ words, that's a real content-depth gap on a single-page site, and worth knowing
rather than assuming we're ahead.

---

## What happens with this

Once Parts A and B come back, `competitor-notes.md` gets rewritten with the unverified-hypothesis
warning removed and replaced by actual findings, and anything the comparison exposes as a genuine
weakness in our build gets logged in `phase-5-review/revision-log.md` and fixed.
