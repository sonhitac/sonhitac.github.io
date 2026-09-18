# Sonhita Chakraborty, portfolio site

A static, plain HTML/CSS/JS companion site for the UTM Biomedical
Communications application. No build step, no framework, no npm. Open a
file, edit the text, push to GitHub.

## Structure

```
index.html        Home
research.html      Research program + selected publications
teaching.html      Teaching philosophy and courses
portfolio.html     Image-forward gallery of journal covers/exhibitions
deconstructing-biology.html   Dedicated page for the Deconstructing Biology exhibition
cv.html            Structured CV + print stylesheet + PDF download button
edi.html           Dedicated EDI statement
404.html           Custom not-found page

css/style.css      All design tokens (colors, type, spacing) + components
css/print.css      Print-only rules, loaded only on cv.html via media="print"
js/main.js         Mobile nav toggle + footer year, the only JS on the site

assets/favicon.svg     Custom SVG favicon
assets/images/         Drop final images here
assets/cv.pdf          Does NOT exist yet, see below
assets/writing-sample.pdf   Does NOT exist yet, see below
```

Every page repeats the same `<header class="site-header">` and
`<footer class="site-footer">` markup byte-for-byte, **except** for the
`aria-current="page"` attribute, which always sits on the link matching the
current page (this is what underlines the active nav item and tells screen
readers where they are). If you edit the header or footer, copy the change
into all 8 HTML files, then re-check each page's `aria-current` is still on
the right link. `deconstructing-biology.html` is not in the primary nav (it's
a detail page reached from Portfolio), so its header marks Portfolio as
current rather than having its own nav entry.

There is no dedicated Contact page. The footer, present on every page, already
carries her real email, ORCID, and LinkedIn, so a separate page would only
duplicate it. Keep the footer's contact details limited to what's actually
hers today (never a `utm.utoronto.ca` address or a faculty-profile link:
she's applying for the UTM role, not holding it, so nothing on this site
should imply otherwise).

## Before this goes live

Read [`CONTENT-TODO.md`](CONTENT-TODO.md). It lists every bracketed
placeholder (`[Institution]`, `[Year]`, etc.) and every remaining
`NEEDS CLIENT` comment, organized by page, plus the two missing files below.

**Two files referenced but not included:**

1. `assets/cv.pdf`, linked from the "Download PDF" button on `cv.html`.
   Export your real CV to PDF and drop it at that exact path.
2. `assets/writing-sample.pdf`, linked from `research.html`. Same idea.

Until those exist, the download buttons will 404 on GitHub Pages.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public, or private with GitHub Pages
   available on your plan).
2. Push this folder's contents to the repo's default branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source**, choose **"Deploy from a branch"**, then pick **`main`** and
   the **`/ (root)`** folder. Save.
4. GitHub will publish the site within a minute or two, at:
   - `https://<your-username>.github.io/<repo-name>/` if this is a
     *project* repo, or
   - `https://<your-username>.github.io/` if the repo is literally named
     `<your-username>.github.io` (a *user* site).

Every link in this site is a relative path (`research.html`, `css/style.css`,
`assets/favicon.svg`, and so on) with no leading slash, so it works unchanged
under either kind of URL. You don't need to edit anything to switch between them.

### Custom domain (optional)

If you want e.g. `www.yourname.com` instead of the `github.io` URL:

1. Add a file named `CNAME` (no extension) at the repo root containing just
   your domain, e.g.:
   ```
   www.yourname.com
   ```
2. At your domain registrar, add a `CNAME` record pointing
   `www.yourname.com` → `<your-username>.github.io`. (For a root/apex
   domain instead of `www`, use the four GitHub `A` records documented at
   GitHub's "Managing a custom domain" help page instead of a CNAME record.)
3. Back in **Settings → Pages**, enter the custom domain in the "Custom
   domain" field and enable **Enforce HTTPS** once it's available.

## Editing the design

Every color, font, and spacing value is a CSS custom property at the top of
[`css/style.css`](css/style.css) under `:root`. The palette is tuned to read
as a family with [artbysonhita.com](https://artbysonhita.com): `--ink`,
`--bone`, and `--paper` are the near-black/near-white/light-gray neutrals,
`--accent` and `--accent-deep` are the gold/tan accent at two strengths
(the plain `--accent` is for borders and large decorative text only,
`--accent-deep` is the one safe for small links and buttons), and
`--footer-bg`, `--footer-text`, and `--accent-on-dark` recreate that site's
navy-with-gold-links footer treatment. To retint the whole site, change
those tokens in one place. The type pairing (Radley for headings, matching
artbysonhita.com's serif, and Inter Tight for body) is loaded once via
Google Fonts in each page's `<head>`. Radley only ships as a single weight
(regular, plus italic), so headings and pull-quotes are set at
`font-weight: 400` rather than the heavier weights a display font would
normally carry; if you swap in a font with more weights, revisit those
rules in `style.css`. Swap the `<link>` and the two `var(--font-display)`
/ `var(--font-body)` values in `style.css` to change fonts everywhere.

## Adding real images

Every image on the site is currently a CSS/SVG placeholder block (a
hatched rectangle with a label), not a real `<img>` tag. This was
deliberate, so the layout could be reviewed without needing real files or
network access. To swap one in:

```html
<!-- before -->
<div class="placeholder ar-4-3" role="img" aria-label="Placeholder. Replace with final image and descriptive alt text.">
  <span class="placeholder-label"><strong>Image placeholder</strong>Illustration: [subject], [medium], [year]</span>
</div>

<!-- after -->
<img src="assets/images/your-file.jpg" alt="A real, specific description of what's in the image." loading="lazy">
```

Keep the same `<figure>`/`<figcaption>` wrapper so captions and metadata
still line up. Aspect-ratio classes (`ar-4-3`, `ar-16-9`, `ar-1-1`, etc., in
`style.css`) are only needed on the placeholder `<div>`; a real `<img>` can
drop the class and just use its natural aspect ratio, or keep the class if
you want to lock the ratio in the layout.

## No tracking, no build step, no dependencies

There is no analytics script, no cookie banner, no social-share widget, no
site-generator credit, and nothing to `npm install`. The only external
network request the site makes is the one Google Fonts `<link>` per page.
If you'd rather have zero external requests, self-host the two font files
and swap the `<link>` tags for a local `@font-face` block. This wasn't done here
to keep the initial setup simple.
