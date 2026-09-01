# SEO — What's Done, What Isn't, and Realistic Timelines

Written to answer three questions directly: are the keywords right, how do we know the SEO is
working, and how long until the practice ranks. The short version is that the on-page work is
done and verifiable, but on-page is the smaller half of ranking for local medical searches — and
none of it counts until the site is live on a real domain.

---

## 1. What is actually verified vs. still assumption

### Verified (measured in the browser)

| Item | Status |
|---|---|
| `<title>` — keyword-first, 40 chars | ✅ measured |
| Meta description — 123 chars, keyword + CTA | ✅ measured |
| One `<h1>`, 7 × `<h2>`, 18 × `<h3>` | ✅ measured |
| Per-condition and per-treatment headings | ✅ 18 distinct subheadings |
| JSON-LD `MedicalClinic` + `Physician` | ✅ present and parses |
| Canonical, Open Graph, Twitter Card | ✅ present |
| `sitemap.xml`, `robots.txt` at site root | ✅ resolve |
| Mobile viewport meta, responsive layout | ✅ tested 375/768/1280 |
| Zero broken links, no external JS | ✅ tested |

### Not verified — assumptions that could be wrong

- **Search volumes and difficulty were never checked with a real tool.** The keyword list in
  `keyword-research.md` was reasoned, not researched. "Pain management clinic Dublin" may have
  lower volume than assumed, and the actual money terms may be condition-led
  ("sciatica treatment Dublin") rather than the head term. **This should be validated in Google
  Keyword Planner or Ahrefs before anyone commits to the strategy.**
- **Competitor technical SEO is unknown.** Screenshots showed their design, not their schema,
  titles, or word counts. If Dublin Pain Clinic Group already has strong structured data, our
  schema advantage doesn't exist.
- **Content depth may be short.** Our page is ~730 words. If competitors run 1,500+, we are
  behind on a factor that matters.

---

## 2. The clock has not started

Nothing ranks until all of the following are true. Today, none of them are:

- [ ] Site is live on a real, registered domain (currently a placeholder domain throughout)
- [ ] Placeholder content replaced with real practice details
- [ ] Google Search Console verified and the sitemap submitted
- [ ] Google Business Profile created and verified
- [ ] Contact form wired to something real

Until the site is deployed and indexed, elapsed time counts for nothing.

---

## 3. The single biggest factor is not on the page

For a search like "pain management clinic Dublin", Google shows a **local map pack** — usually
three businesses with map pins — above the normal blue-link results. Most patients click there.

Entry into that map pack is driven almost entirely by **Google Business Profile**, not by the
website: profile completeness and category, physical proximity to the searcher, review volume and
recency, and NAP consistency across the web.

**Practical implication:** a free, well-completed Google Business Profile will likely bring more
patient enquiries, sooner, than any further work on this page. It should be set up first.

Two caveats specific to a medical practice in Ireland:
- The address on the profile must match the site's footer **character for character**. That is why
  NAP consistency is on the launch checklist.
- Soliciting patient reviews sits in the same Medical Council advertising territory as
  testimonials. Reviews strongly affect map-pack ranking, but **how (and whether) to ask for them
  needs Dr. Alex's judgement and possibly professional advice** — do not run a review campaign on
  assumption.

---

## 4. Realistic timelines

These are typical ranges for a new domain in a competitive local commercial niche, not promises.
Actual results vary widely and depend heavily on competition and link authority.

| Stage | Typical timing |
|---|---|
| Indexed by Google after submitting via Search Console | Days to ~2 weeks |
| Appearing for the practice's own name ("Dr. Alex pain Dublin") | 2–4 weeks |
| Google Business Profile appearing in map results | 2–6 weeks after verification |
| Ranking for long-tail terms ("radiofrequency ablation Dublin") | 2–6 months |
| Competing for head terms ("pain management clinic Dublin") | 6–12+ months, if at all |

### Why the head term is genuinely hard

The main competitor — Dublin Pain Clinic Group / Beacon Pain Clinic — runs **two established
sites**, advertises 20+ years of operation, and has had years to accumulate links, citations and
reviews. A new single-page site does not overtake that quickly, and possibly not at all on the
head term without sustained investment.

**A more realistic goal:** win the long-tail and the branded searches first, and use the Google
Business Profile to compete in the map pack, where a new practice can appear far faster than in
organic blue links.

Anyone promising first-page rankings for "pain management clinic Dublin" within a few weeks is not
being straight.

---

## 5. How we will actually know it's working

None of this is installed yet. All of it should be before launch.

1. **Google Search Console** — free, essential, and the only authoritative source for how Google
   sees the site. Verify the domain, submit `sitemap.xml`, then watch: indexing status, impressions
   and clicks per query, and average position per query. This is what answers "is the SEO working"
   with data instead of opinion.
2. **Google Business Profile Insights** — how many people found the profile, and how many called,
   requested directions, or clicked through.
3. **Analytics** — Google Analytics 4 or a privacy-friendly alternative (Plausible, Fathom).
   **GDPR note:** GA4 sets cookies and will require a consent banner and an update to
   `cookies.html`, which currently correctly states the site sets no cookies. A cookieless
   analytics tool avoids that entirely and is worth considering for a medical site.
4. **Call and enquiry tracking** — the most important metric is booked consultations, not
   rankings. At minimum, ask new patients how they found the practice.

### Leading indicators, in the order they appear

Rankings are a lagging signal. In sequence, expect: pages indexed → impressions rising in Search
Console → average position improving → clicks rising → enquiries. Impressions moving while
position is still poor is normal and is a sign it is working, not failing.

---

## 6. What would move the needle next, in priority order

1. **Register the domain, resolve placeholders, deploy.** Nothing starts until this happens.
2. **Create and verify the Google Business Profile.** Highest return of anything on this list.
3. **Set up Google Search Console** and submit the sitemap.
4. **Validate the keyword list with a real research tool** before building more content around it.
5. **Add the FAQ section** (already recommended after the competitor review). FAQ content targets
   long-tail question queries, and long-tail is where a new site can realistically win early.
6. **Expand content depth** if the competitor word-count check confirms we are short.
7. **Build local citations** — consistent NAP on Irish medical directories, insurer "find a
   consultant" listings, and hospital affiliation pages. These are ordinary, legitimate local SEO
   signals.
8. **Consider condition-specific pages.** The single-page format was the brief, but competitors
   have dedicated condition pages, and those are what rank for condition searches. Worth revisiting
   as a phase 2 once the single page is live.
