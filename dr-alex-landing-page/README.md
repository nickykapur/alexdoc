# Dr. Alex — Pain Management Landing Page

A single, SEO-optimized landing page for a Dublin-based pain management practice run by
Dr. Alex. Built with plain HTML, CSS, and vanilla JavaScript — no build step, no framework,
deployable anywhere that serves static files.

## Project Structure

Work is organized into six phase folders, each one a self-contained deliverable:

```
dr-alex-landing-page/
├── phase-1-research-seo/     # Keyword research and competitor notes
├── phase-2-content/          # Full page copy, section by section
├── phase-3-design-build/     # The actual site (HTML/CSS/JS/assets) — this is what gets deployed
├── phase-4-seo-setup/        # Meta tag reference, JSON-LD schema, sitemap, robots.txt
├── phase-5-review/           # Revision log
└── phase-6-launch/           # Pre-launch QA checklist
```

## Previewing the Site Locally

The site is fully static — open it directly, or serve it locally:

**Option A — open directly:**
Open `phase-3-design-build/index.html` in a browser.

**Option B — local server (recommended, avoids any browser file:// quirks):**
```bash
cd phase-3-design-build
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to Netlify

The repo can be connected to Netlify directly — no settings need to be entered in the Netlify UI.
The `netlify.toml` at the repo root already points Netlify at the right folder:

```toml
[build]
  publish = "dr-alex-landing-page/phase-3-design-build"
```

There is no build command and no build step — the site is plain static files. `sitemap.xml` and
`robots.txt` sit at the root of that publish directory, so they resolve at `/sitemap.xml` and
`/robots.txt` on the deployed domain, which is where search engines expect them.

Note that the placeholder content described below will be publicly visible on the deployed site,
so treat the first deploy as a staging preview rather than the practice's live public URL.

## Before This Goes Live

This build is content-complete but **not launch-ready** — a number of real practice details were
not available at build time and are marked inline as `[PLACEHOLDER: ...]` throughout the HTML and
content docs (address, phone number, email, Dr. Alex's surname, qualifications, hospital
affiliation, years of experience, opening hours, and the confirmed insurer list, among others).

See `phase-5-review/revision-log.md` for the full outstanding list, and
`phase-6-launch/launch-checklist.md` before publishing.

## Compliance Note

This is a medical practice website in Ireland. Content was written to avoid outcome/efficacy
claims and does not include patient testimonials, per Medical Council of Ireland advertising
guidelines. Any new copy added later should be checked against the same guidelines before launch.
