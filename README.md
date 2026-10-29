# Sayantani | Portfolio

Personal portfolio of **Sayantani**: Computer Science student at PEC Anna University, Chennai, working across AI products, research, open source and entrepreneurship.

A single-page, zero-dependency static site. No build step, no framework, no package manager. One `index.html` file holds the markup, styles and scripts.

**Live site:** https://shine-sportfolio.vercel.app/
**GitHub:** [@Sayantani9](https://github.com/Sayantani9) · **LinkedIn:** [Sayantani Banerjee](https://www.linkedin.com/in/g-sayantani-mb-65337230b/) · **Instagram:** [@the.invincible_fire](https://www.instagram.com/the.invincible_fire/)

---

## Version history

| Version | What changed |
|---|---|
| **V6** | Six written papers shown (SHUDDH RECYCLE 2025 paper and the Conceptual Prototype Design of SHUDDH added), updated traffic-signal PDF, removed a hijacked conference link, only verified links remain |
| **V5** | Publications split into Written (4) and Reviewed blocks with venues and links, traffic-signal paper added with PDF, ECWoC and YZ × SV × TIF IDs added as certificates, several certificates per item |
| **V4** | Research and achievements redesign: Drudow "now" strip, headline-win cards, ORCID iD, dated filterable timeline of every event, certificate and photo slots in every detail panel, GitHub "Code" link slots on project cards |
| **V3** | Projects rewritten with your names and subtitles, new Sanghamitra Ventures & YZ? card, separate Mousami web and Mousami App cards, 18 projects in total |
| V2 | Co-curricular section (Toastmasters, arts, debate, events) and Start-up work section (10 internships, leadership) added before Contact |
| V1 | Rebuild modelled on the reference site's opening sequence and navigation, in the cyan, lemon and lime palette |

## Certificates, event photos and GitHub links

Every detail panel (research, wins, timeline events, experience rows, internships, Toastmasters rows) looks for a certificate and photos by file name. **No code changes are needed**: add the files, commit, push.

**Certificates.** Save as `certificates/<slug>.jpg`, `.png` or `.pdf`. For several certificates on one item, add `-2`, `-3` and so on (`<slug>-2.jpg`), up to six. A JPG or PNG shows inline with an "Open full certificate" button. A PDF shows an "Open certificate (PDF)" button. If no file exists, the certificate block simply doesn't appear.

**Event photos.** Save as `events/<slug>/1.jpg`, `2.jpg`, `3.jpg` and so on, up to 12, in order and without gaps. They appear as a gallery in the panel, and `1.jpg` also becomes a soft cover on that event's card. Use JPG, roughly 1600 px wide and under 400 KB each.

**The slug** is the lowercase title with every run of symbols and spaces turned into a single hyphen. The new section uses these fixed slugs:

| Slug (file / folder name) | Item |
|---|---|
| `seattle-global-social-business-pitch` | Won the Global Social Business Pitch |
| `icpc-2025-institute-rank-1` | ICPC 2025, Institute Rank 1 |
| `toastmasters-triple-crown-rockstar-pathway-champion` | Triple Crown, Rockstar & Pathway Champion |
| `genesis-2026-srm-vadapalani` | Won GENESIS at SRM Vadapalani |
| `recycle-2025-iit-guwahati` | Shuddh: The Self-sustainable, Self-cleaning, Smart, AI-driven Waste Segregator and Waste to Wealth Generator for a Clean, Green Zero Waste Future |
| `conceptual-prototype-design-of-the-shuddh-smart-waste-segregation-system` | Conceptual Prototype Design of the SHUDDH Smart Waste Segregation System |
| `ai-driven-adaptive-traffic-signal-control` | AI-Driven Adaptive Traffic Signal Control Using Computer Vision and Existing CCTV Infrastructure |
| `mind-2026-samarkand` | Generative model for extended dance sequence generation from a video |
| `iqac-ssn-2026` | Computational identification and classification of Shirobedhas using temporal dance features |
| `multifunctional-materials-radiation-measurements` | Fin Dual-Doped RFET based SRAM circuit under heavy ion irradiation |
| `shuddh-provisional-patent` | Provisional Patent, SHUDDH |
| `peer-reviewer-journal-of-environmental-management` | Journal of Environmental Management |
| `research-assistant-intern` | Research Assistant Intern |
| `drudow-intern` | Intern at Drudow |
| `windenergy-india` | Windenergy India |
| `codesy-dhanalaxmi-shrinivasan-college` | Codesy |
| `yuci-global-event-srm-easwari` | YUCI, Global Event |
| `srm-kattankulathur` | SRM Kattankulathur |
| `clash-of-coders` | Winner, Clash of Coders |
| `parts2power` | Parts2Power |
| `makeai-and-medicall` | MakeAI & Medicall |
| `ecokadai-market-survey` | Market Survey Intern |
| `techgium-lnt` | Techgium at L&T |
| `yz-sv-tif-unified` | YZ × SV × TIF, unified |
| `iit-madras-stem-research` | STEM Research, IIT Madras |
| `area-a3-international-speech-contest` | Bronze Medalist, Area A3 Speech Contest |
| `start-up-tn-global-student-entrepreneurship-awards` | Finalist, Global Student Entrepreneurship Awards |
| `toastmasters-vp-memberships-oath` | Took the oath as Vice President, Memberships |
| `entrepreneurship-development-cell` | Leading the Entrepreneurship Development Cell |
| `ideathon-pec-anna-university` | First Runner-up of 500+ teams |
| `iit-madras-incubators-summit-founderx` | Ideas to Impact, Top 10 Start-ups |
| `smart-india-hackathon` | Smart India Hackathon |
| `isro-finalist` | Vayunetra for ISRO |
| `cognizant-finalist` | Present, Proof! |
| `asisc-and-memorial-debates` | ASISC, Clifford Hicks & Frank Anthony Debates |

For experience, internship and Toastmasters rows, the slug is generated from the row's title in the same way (for example `vice-president-memberships`, `research-intern-at-ssn`).

**GitHub "Code" links.** In the script, find `var REPOS = {` and add one line per project, using the project title exactly as it appears on the card:

```js
var REPOS = {
  "Shuddh": "https://github.com/Sayantani9/your-repo",
  "Rakshak": "https://github.com/Sayantani9/your-other-repo"
};
```

A "Code ↗" link then appears beside "Open live site" on that card. Projects without a line show no Code link.

**ORCID.** The iD is `0009-0009-7861-484X` and links to https://orcid.org/0009-0009-7861-484X. It appears in the research section and in Contact.

## Publications: Written and Reviewed

Section 04 splits publications into two blocks, **Written** and **Reviewed**. Each card is a block of HTML inside `<div class="wgrid">`. Copy an existing `<article class="paper w">` (written) or `<article class="paper r">` (reviewed), edit the text, and add links.

- **Links** on a card live in two places that you keep in step: the visible pills in `<div class="plinks">`, and the `data-links='[{"t":"Label","u":"https://..."}]'` attribute on the card's button, which fills the detail panel.
- **Six written papers** are shown: the SHUDDH paper at RECYCLE 2025 (IIT Guwahati), the Conceptual Prototype Design of SHUDDH, the traffic-signal paper, the MIND 2026 paper, the Shirobedhas paper (IQAC, SSN 2026) and the radiation-measurements paper. Update the big number at the top of the block when you add one.
- **Full manuscripts** of the SHUDDH prototype paper and the traffic-signal paper live in `papers/` and are linked from their cards. Remove a link if a co-author or a venue doesn't want the full text public.
- **Reviewed entries** list the journal or conference, the role and the date. Peer review is confidential, so manuscript titles are shown only where a paper is public and the journal allows it.
- **Link policy.** Only links that were opened and checked, or that you supplied, are used. The official IIT Guwahati event page and brochure are used for RECYCLE 2025. The conference domain that IIT Guwahati's page points to (`recycleiitg25.com`) has been taken over by an unrelated spam site, so it is deliberately **not** linked. For MIND 2026 only the EasyChair listing is linked, because the conference's own domain could not be verified. Before adding any conference or journal link, open it and check what it shows today. Old conference domains often lapse and get reused.
- **No public listing** was found for the IQAC SSN, radiation-measurements and traffic-signal papers, so those cards state the venue without a link. Add a proceedings or DOI link once one exists.

---

## Contents

1. [What's on the page](#whats-on-the-page)
2. [How it behaves](#how-it-behaves)
3. [Folder structure](#folder-structure)
4. [Run it locally](#run-it-locally)
5. [Add your photo](#add-your-photo)
6. [Deploy: GitHub then Vercel](#deploy-github-then-vercel)
7. [Customising the content](#customising-the-content)
8. [Customising the look](#customising-the-look)
9. [Accessibility](#accessibility)
10. [Browser support and performance](#browser-support-and-performance)
11. [Troubleshooting](#troubleshooting)
12. [Credits](#credits)

---

## What's on the page

| Section | What it contains |
|---|---|
| **Intro** | Blank screen, then the tagline *"Writing code that learns, building things that ship."* fades in word by word out of a blur |
| **Hero** | Giant name that builds letter by letter, the portrait cut-out rising in front of it, a short bio and GitHub / LinkedIn / Instagram chips |
| **Stats** | Four count-up numbers: projects, research papers, merged PRs, ICPC institute rank |
| **01 About** | Headline, short bio, core focus areas, collaborations, technical expertise, creative work |
| **02 Experience** | Nine roles as large rows. Hover for a scrolling colour band, click for a full-screen detail panel |
| **03 Projects** | 18 projects in a three-column grid, each linking to its live site or repository, plus a collaboration call-to-action |
| **04 Research & achievements** | "Now" strip (Drudow), four headline-win cards, brag stats, ORCID iD, four paper cards, a dated filterable timeline of every event. Every item opens a detail panel with photos and a certificate |
| **05 Co-curricular** | Toastmasters International (five rolling rows), dance, debate and writing (four rolling rows), then an events and competitions list in two columns |
| **06 Start-up work** | Sits after the co-curriculars. "How did I complete 10 internships?", the ten internships as numbered rolling rows, then three leadership rows |
| **07 Contact** | Email, location, large social-link rows, resume download and a contact form that opens your mail app |
| **Footer** | Social links and copyright |

---

## How it behaves

- **Opening sequence.** The intro plays for about four seconds. Click, tap, or press `Esc` / `Enter` / `Space` to skip it. Scrolling is locked until it finishes. If the visitor has *reduce motion* enabled in their system settings, the intro is skipped entirely.
- **Smooth navigation.** Nav links and in-page buttons use an eased JavaScript scroll rather than the browser default. Touching, scrolling or pressing a key cancels the glide at once. The address bar updates (`#projects`, and so on) so sections can be linked directly.
- **Active section marker.** The nav link of the section you are in gets a lime highlighter mark.
- **Blur-to-sharp headings.** Section headlines sharpen as they scroll into view.
- **Experience rows.** Hovering a row wipes in a pastel band with the role and organisation scrolling across it. Clicking opens a detail panel with the date, role, organisation and bullet points. Close it with `×`, `Esc`, or by clicking outside it.
- **Name hover.** Hovering the hero name shifts the letters through a soft cyan-to-lime gradient.
- **Name auto-fit.** The name is measured and resized to fit the screen width, so it never wraps or overflows whichever font loads.
- **Links.** Every external link opens in a new tab with `rel="noopener noreferrer"`. Email uses `mailto:`.
- **Contact form.** There is no backend. Submitting builds a `mailto:` link addressed to `its.shines.workspace@gmail.com` with the name, email and message filled in, and opens the visitor's mail app.

---

## Folder structure

```
your-repo/
├── index.html                              # the whole site
├── README.md                               # this file
├── resume/
│   └── Sayantani_Banerjee_Resume.pdf       # linked from the Download resume button
├── photos/
│   └── shine.png                           # hero portrait (transparent PNG), you add this
├── papers/
│   ├── ai-driven-adaptive-traffic-signal-control.pdf
│   └── conceptual-prototype-design-of-the-shuddh-smart-waste-segregation-system.pdf
├── certificates/                           # certificates and IDs, named by slug (see below)
│   ├── elite-coders-winter-of-code-developer.jpg
│   ├── elite-coders-winter-of-code-developer-2.jpg     # second certificate for the same item
│   └── yz-sv-tif-unified.jpg
└── events/                                 # event photos, one folder per slug
    └── seattle-global-social-business-pitch/
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
```

Keep these exact file names and folders. The page refers to them by path.

---

## Run it locally

No install needed.

**Option 1:** double-click `index.html` to open it in your browser.

**Option 2:** serve it, which behaves more like Vercel:

```bash
# from the project folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

Google Fonts load from the internet. Offline, the page still works with system fonts, and the name still fits the screen.

---

## Add your photo

The portrait sits **in front of** the giant name, so it must be a cut-out with a transparent background.

1. Remove the background (for example with [remove.bg](https://www.remove.bg/)) and export as **PNG**.
2. Use a head-and-shoulders or chest-up crop, roughly **1200 to 1600 px tall**.
3. Compress it (for example with [squoosh.app](https://squoosh.app/)). Aim for **under 400 KB** so the hero loads quickly.
4. Save it as **`photos/shine.png`** (lowercase, `.png`).

If the file is missing, the image is removed automatically and the hero shows the name alone, with no broken-image icon. A PNG with a solid background will show as a box behind the name, so make sure it is transparent.

---

## Deploy: GitHub then Vercel

### 1. Put the code on GitHub

Create an empty repository on GitHub under `Sayantani9` (for example `portfolio`), then from the project folder:

```bash
git init
git add .
git commit -m "Portfolio: initial version"
git branch -M main
git remote add origin https://github.com/Sayantani9/portfolio.git
git push -u origin main
```

Replace `portfolio` with your actual repository name. To update later:

```bash
git add .
git commit -m "Describe your change"
git push
```

### 2. Deploy on Vercel

1. Sign in to [vercel.com](https://vercel.com) with GitHub.
2. Choose **Add New → Project** and import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory **empty**. Root Directory stays `./`.
4. Click **Deploy**.

Every `git push` to `main` redeploys automatically.

### 3. Keep the `shine-sportfolio.vercel.app` address

Either:

- push this code to the repository your existing Vercel project is already connected to, or
- in the new project go to **Settings → Domains** and add `shine-sportfolio.vercel.app` (remove it from the old project first, since a domain can belong to only one project).

---

## Customising the content

Everything is plain HTML in `index.html`. Search for the text you want to change.

### Hero text and stats

- Bio paragraph: the `<p>` inside `.hero-copy`.
- Stats: each `<h3 data-target="16" data-suffix="+">`. Change `data-target` for the number, `data-suffix` for `+`, and `data-prefix` for `#`. Update the visible text inside the tag to match, as a fallback if JavaScript fails.

### Add a project

Copy any card inside `<div class="pgrid">` and edit it:

```html
<a class="pi" href="https://your-project.vercel.app/" target="_blank" rel="noopener noreferrer">
  <div class="ptag"><b>Category</b><span>Status or recognition</span></div>
  <h3>Project name</h3>
  <p>One or two sentences with a measurable result if you have one.</p>
  <span class="go">Open live site ↗</span>
</a>
```

For a project with **no link**, use `<div class="pi">` instead of `<a class="pi">` and delete the `go` line. To highlight a word (as ISRO is on Vayunetra), wrap it in `<mark>…</mark>`.

### Add an experience row

Copy a `<li>` inside `<ul class="xlist">`:

```html
<li><button class="xrow" data-title="Role title" data-org="Organisation" data-date="Mon – Mon 2026">
  <span class="xt">Role title</span>
  <span class="xm">Organisation · 2026</span>
  <span class="band" aria-hidden="true"></span>
  <template><li>First bullet in the detail panel.</li><li>Second bullet.</li></template>
</button></li>
```

The scrolling band and the detail panel are built from these attributes and the `<template>`. Band colours cycle cyan, lemon, lime automatically.

### Co-curricular and start-up rows

These use the same row format as Experience, so copy a `<li>` from any of them. Add `num` to the list's class (`<ul class="xlist num">`) and the rows are numbered automatically. The lemon "How did I complete 10 internships?" row uses `<ul class="xlist how">`. The bullets in that row are a draft written from your dates, so rewrite them in your own voice.

### Events

Edit the two `<ul class="rl">` lists under "Events & competitions" in section 05. Each item is `<li><em>date</em><b>event</b><span>result</span></li>`.

### Research, achievements, skills

Edit the `<li>` items inside the two `.rl` lists in section 04, and the `<span>` chips in `.chips`.

### Contact details

Search for `its.shines.workspace@gmail.com` (appears in the contact link and in the form script) and for the three social URLs, which appear in the hero, contact section and footer.

### Resume

Replace `resume/Sayantani_Banerjee_Resume.pdf` with a newer PDF **using the same file name**.

---

## Customising the look

### Colours

All colours live in `:root` at the top of the `<style>` block:

```css
--bg:#f4faf7;     /* page background, pale mint */
--ink:#123a40;    /* text, deep teal instead of black */
--muted:#4f6c70;  /* secondary text */
--teal:#1d7f86;   /* numbers, labels, accents */
--cyan:#a6e1e3;   /* pastel cyan */
--lemon:#f6efaa;  /* pastel lemon */
--lime:#cbe9a4;   /* pastel lime */
```

The three pastels are used as fills (bands, highlighter marks, chips, buttons) and never as text on the light background, which keeps contrast comfortable.

### Fonts

Inter Tight (headings and the name), Inter (body) and Source Serif 4 (intro tagline only), loaded from Google Fonts in the `<head>`.

### Intro timing

In the script, search for `setTimeout`:

- `3500` ms: when the tagline starts to fade out
- `4100` ms: when the intro hands over to the hero

Word reveal speed is the `.2s` stagger in the `.intro .w` CSS rule. The name's letter-by-letter speed is the `.055s` in `.hero-go .l`.

### Hover gradient on the name

In the script, the line `var hue = 188 - (96 * idx / (total - 1))` sweeps from cyan (188°) to lime (92°). Change those two numbers to shift the range.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a single `h1`.
- The animated name has an `aria-label`, so screen readers read "Sayantani Banerjee" rather than individual letters.
- Visible keyboard focus on every interactive element.
- Experience rows are real `<button>` elements, and the detail panel is a modal dialog that traps focus, closes on `Esc` and returns focus to the row you opened.
- `prefers-reduced-motion` is respected: the intro is skipped and animations and transitions are turned off.
- The mobile menu button reports its open or closed state.

---

## Browser support and performance

- Works in current Chrome, Edge, Safari and Firefox, on desktop and mobile.
- Uses CSS `clip-path`, `backdrop-filter` and `IntersectionObserver`, all widely supported. Where `backdrop-filter` is unavailable the header falls back to a solid translucent colour.
- One HTML file, no JavaScript libraries. The heaviest asset is your photo, so compress it.
- Layout is fluid from phones to large desktops. Below 700 px the hero stacks: name, then photo, then bio and social chips.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Photo doesn't show | File must be exactly `photos/shine.png`, committed to the repo, with lowercase folder and file names. Linux hosting such as Vercel is case-sensitive |
| Photo shows a box behind the name | The PNG has a background. Export it with a transparent background |
| Resume button gives a 404 | The PDF must be at `resume/Sayantani_Banerjee_Resume.pdf` and committed |
| Changes don't appear after `git push` | Check the deployment status in the Vercel dashboard, then hard-refresh (`Ctrl/Cmd + Shift + R`) |
| Intro feels too long | Click anywhere to skip, or lower the two `setTimeout` values |
| Contact form does nothing | It opens the default mail app. If none is set up on the device, use the email link beside it |
| A project link is dead | RoadPulse points at a temporary `emergentagent.com` preview URL that may expire. Replace it with a permanent deployment when you have one |

---

## Credits

- Opening sequence, scroll behaviour and section structure are inspired by [akash-babu-portfolio.vercel.app](https://akash-babu-portfolio.vercel.app/). The code, content, colour palette and layout of this site are original.
- Fonts: [Inter](https://rsms.me/inter/), Inter Tight and Source Serif 4 via Google Fonts (SIL Open Font License).

© 2026 Sayantani Banerjee. All rights reserved.
