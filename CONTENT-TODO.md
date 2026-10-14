# Content TODO

The site's copy now comes from the finalized application materials (cover
letter, CV, research statement, teaching dossier, and EDI statement), so the
old placeholder checklist is gone. What remains falls into three groups:
things that are still placeholders, choices made while moving material onto a
public site that should be confirmed, and files that don't exist yet. Search
the HTML for `[bracketed text]` and comments starting `NEEDS CLIENT` to find
every placeholder spot.

## 1. Still placeholders

- [ ] **Review image alt text.** All Portfolio and Home images are in (five
      covers, the three-cover metabolism panorama, and the exhibition
      installation photo). The alt text was drafted from looking at them;
      review it. Original uncompressed files are archived in
      `materials/image-originals/` (not published).
- [ ] **Writing sample.** Document 4 of the application was not in the
      materials folder. `research.html` still has a bracketed line describing
      it and links to `assets/writing-sample.pdf`, which doesn't exist.
- [ ] **`assets/cv.pdf`.** The "Download PDF" button on `cv.html` links to it
      and will 404 until it's added (see section 3).
- [ ] **`404.html`.** The one-line message is generic. Optional to change.
- [ ] **Per-cover process notes.** The materials describe process for only
      two covers (Dendritic Delivery and the Molecular Cell sustainability
      cover). The other covers have captions with no process note. Optional.

## 2. Choices to confirm

These were judgment calls made while turning private application documents
into public web copy, or places where documents disagreed with earlier site
copy. Each is easy to reverse.

- [ ] **EDI page is a condensed public version.** The private statement
      opens with a personal paragraph and includes a few personal details
      that were intentionally left off the public page. Decide whether any
      of that should be added. (Work-level facts, such as the Patterns and
      Med covers, are included.)
- [ ] **Phone number and referee contact details are not published.** Both
      appear in the application PDF and CV; neither is on the site.
- [ ] **Supervised students are not named.** The CV page lists the three
      undergraduate projects by title and years only. The CV document names
      the students.
- [ ] **Quoted feedback.** One student comment ("a positive space where
      mistakes were okay") is quoted on the EDI page. Letters from
      colleagues, the student reflections collected for BIO130, and the
      exhibition guestbook comments are not reproduced. Confirm she is
      comfortable with the quote that is in.
- [ ] **No dedicated exhibition page.** Deconstructing Biology appears as an
      installation photo and caption on `portfolio.html`, and as entries on
      the CV and in the Portfolio's exhibitions list. A separate page
      (individual works, guestbook comments, wall texts) was removed.
- [ ] **"Design by Hope" was removed.** The site previously featured it as
      created for iGEM's first bioart gallery, but it doesn't appear in any
      of the finalized materials. Restore it only if it is real and current.
- [ ] **Facts changed to match the finalized documents.** PhD field is now
      Cell & Systems Biology (was Molecular and Cell Biology); the exhibition
      is nine works (was ten); the doctoral research is described as CNGC2 in
      auxin signalling (was CNGCs in plant immune responses); iScience is no
      longer listed among journals she has made covers for, since the
      dossier says that cover was not selected.
- [ ] **The forthcoming Cell cover** (October 14, 2026) is listed as
      forthcoming on `portfolio.html` and `cv.html`. Update it once it is
      published.
- [ ] **Undated awards.** In the CV, a few awards have no year of their own
      and sit under the previous year. `cv.html` keeps them grouped in the
      same list item rather than assigning a year. Verify.
- [ ] **"Funding to date" on `research.html`** lists doctoral scholarships,
      because the CV shows no research grants held as principal investigator.
      Confirm that's the right thing to show next to the research program.
- [ ] **Course codes and titles** on `teaching.html` come from the teaching
      dossier. Check them against the current UTM calendar before launch.
- [ ] **Edits made directly to `index.html`** (the removed opening paragraph
      and the removed "Three ways in" heading) were kept as found.
- [ ] **Email is public.** The footer on every page uses the same Gmail
      address as the CV and cover letter. Confirm that's the address she
      wants on a public site.

## 3. Files that don't exist yet

- [ ] `assets/cv.pdf`, referenced from `cv.html`. Export a version without
      the phone number.
- [ ] `assets/writing-sample.pdf`, referenced from `research.html`.
- [ ] Images in `assets/images/` for the remaining placeholder blocks (see section 1).

## Palette and brand

- [ ] Double-check the colours against the live artbysonhita.com (navy
      `#070068`, gold/tan `#b8a07e`, white background, `#f3f1f0` alternating
      section tint, medium-gray body text) in case the site has changed.
      All values live in one place at the top of `css/style.css`.
- [ ] The accent is darkened slightly from the measured brand gold so links
      and buttons meet AA contrast on light backgrounds. See the comment
      above the `:root` block in `css/style.css`.

## Other

- [ ] There is no Contact page by design; the footer's email, ORCID, and
      LinkedIn are the site's only contact details, on every page. Never add
      an institutional UTM address or faculty-profile link: she is applying
      for the role, not holding it.
- [ ] Favicon (`assets/favicon.svg`) is a generic abstract mark. Swap for a
      monogram if wanted. Optional.
