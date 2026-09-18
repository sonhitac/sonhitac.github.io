# Content TODO

Most pages now carry real copy, drafted from the client's dossier, teaching
philosophy, and EDI statement. What's left is narrower: a few bracketed
facts, some confirmations, and some assets that don't exist yet. Search each
file for `[bracketed text]` and HTML comments starting `NEEDS CLIENT` to find
every spot; this list is a checklist, not a substitute for reading the files.

## Site-wide (appears on every page: header and footer)

- [ ] `[name@institution.edu]`, the footer email link (every page): use her
      real, current personal or professional email, never a `utm.utoronto.ca`
      address. She's applying for the UTM role, not holding it yet, so the
      footer should never imply otherwise (no institutional email, no
      faculty-profile link).
- [ ] LinkedIn URL `https://www.linkedin.com/in/placeholder`, the footer link (every page)
- [ ] `<meta name="description">` on every page, still generic
- [ ] Favicon (`assets/favicon.svg`) is a generic abstract mark (circle and
      leader line). Swap for a real monogram/initials if wanted, but it's
      optional, not required.
- [ ] There is no Contact page by design; the footer's email/ORCID/LinkedIn
      is the site's only contact info, on every page.

## index.html (Home)

- [ ] **Confirm the opening framing paragraph sounds like her.** It's new
      copy written to synthesize research, teaching, and practice into one
      throughline, since the source documents don't have a single
      "elevator pitch" paragraph. Flagged in the file with a
      `NEEDS CLIENT CONFIRMATION` comment.
- [ ] PhD institution and year, city/country still bracketed in the "What
      this site is" paragraph
- [ ] Portfolio teaser image/caption uses the Med vol. 4 issue 6 cover as a
      placeholder pick; swap if a different piece should lead

## research.html

- [ ] **Add a methodology/next-steps sentence or two.** The current text
      makes the case for the research question and where it comes from, but
      doesn't yet say how it would actually be studied (what data or case
      studies). Flagged in the file with a `NEEDS CLIENT INPUT` comment.
      Since the role requires an independent, funded research program, a
      search committee will want a sense of a researchable program here,
      not only a compelling question.
- [ ] Grant names, funders, and years in the "Current & recent support" box
- [ ] Four publication citations are still placeholder text
- [ ] Writing sample: confirm which piece is linked, and add
      `assets/writing-sample.pdf` (see "Files that don't exist yet" below).
      If any publicly linkable editorial writing exists (published
      editorials, bylined pieces), add links; otherwise this section reads
      as a credentials list rather than a writing sample, which is still
      useful but less compelling

## teaching.html

- [ ] **Confirm (or remove) the teaching-assistant sentence** in
      parentheses right after the opening Teaching Philosophy paragraph:
      "2016 to 2021" and "a 200-level course" were suggested as an example,
      not confirmed fact. Flagged with a `NEEDS CLIENT CONFIRMATION` comment.
- [ ] Course codes are bracketed placeholders throughout the Courses list;
      titles and descriptions reflect real background
- [ ] Evaluation quotes and detailed TA/mentorship history were
      deliberately left off this public page; that level of detail belongs
      in the formal teaching dossier

## portfolio.html

- [ ] **Confirm which specific issues/pieces to feature** for Molecular
      Cell, Cell Metabolism, iScience, and Genome Research. The dossier
      lists these as journals worked with generally, not individual covers.
- [ ] **Add a 2 to 3 sentence process write-up for each confirmed cover**
      (Med vol. 4 issue 6, Med vol. 7 issue 1, Patterns vol. 5 issue 12,
      Design by Hope): the brief, sketches, revisions, what changed and
      why. This has to come from the client directly.
- [ ] Add medium and year for Design by Hope
- [ ] Two "Award or honor name" exhibition-list entries still need real names
- [ ] Real images for every placeholder block (see README, "Adding real images")

## deconstructing-biology.html (new page, linked from Portfolio and Teaching)

- [ ] Exact exhibition dates
- [ ] All ten pieces: image, title, and short description for each
      (the dossier only describes the show as a whole)
- [ ] Any press coverage or attendance figures
- [ ] 2 to 4 anonymized, paraphrased visitor reactions
- [ ] Anonymized, paraphrased workshop/professional feedback (e.g. from a
      Company of Biologists workshop participant)
- [ ] Confirmation of what's comfortable to paraphrase from named feedback
      without attribution

## cv.html

- [ ] City/country and email in the masthead
- [ ] Note that **`assets/cv.pdf` does not exist yet**: the "Download PDF"
      button links to it and will 404 until you add the file
- [ ] Education: exact dissertation title, supervisor, institution, and year
      for the PhD; institution/program/year for the other two degree entries
      (unclear whether a second degree beyond the PhD applies; left generic)
- [ ] Appointments: years for the Strategic Grant Writer, Associate
      Scientific Editor, and Science Editor entries
- [ ] Publications: 4 entries are still placeholder text (same list as
      research.html; keep both in sync, or point one to the other)
- [ ] Grants and Funding: 2 entries are still placeholder text
- [ ] Teaching: confirm or remove the TA dates and course specifics (same
      item as the teaching.html note above)
- [ ] Service: 3 entries are still placeholder text
- [ ] Awards and Exhibitions: 2 of 3 entries still need real names
      (Deconstructing Biology is filled in)

## edi.html

- [ ] This is the condensed, public version of the full EDI statement she'll
      submit privately to the search committee. The public page intentionally
      contains less than the private one.

## 404.html

- [ ] Optional: personalize the one-line message (currently generic and
      fine to leave as-is)

## Palette and brand

- [ ] Double-check the pulled colors against the live artbysonhita.com
      (navy `#070068`, gold/tan `#b8a07e`, white background, `#f3f1f0`
      alternating section tint, medium-gray body text) in case the site
      has changed since this was checked. All values live in one place
      at the top of `css/style.css`.
- [ ] The academic site darkens the gold/tan accent slightly from the
      measured brand value, for AA contrast on light backgrounds. See the
      comment above the `:root` block in `css/style.css` if you want to
      adjust that tradeoff.

## Files that don't exist yet

- [ ] `assets/cv.pdf`, referenced from `cv.html`
- [ ] `assets/writing-sample.pdf`, referenced from `research.html`
- [ ] Real images in `assets/images/` for every placeholder block on
      `index.html`, `portfolio.html`, and `deconstructing-biology.html`
