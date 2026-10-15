# Sayantani Banerjee | Portfolio

Personal portfolio of **Sayantani Banerjee**: Computer Science student at PEC Anna University, Chennai, working across AI products, research, open source and entrepreneurship.

A single-page, zero-dependency static site. No build step, no framework, no package manager. One `index.html` file holds the markup, styles and scripts.

**Live site:** https://shine-sportfolio.vercel.app/
**GitHub:** [@Sayantani9](https://github.com/Sayantani9) · **LinkedIn:** [Sayantani Banerjee](https://www.linkedin.com/in/g-sayantani-mb-65337230b/) · **Instagram:** [@the.invincible_fire](https://www.instagram.com/the.invincible_fire/)

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
| **03 Projects** | 16 projects in a three-column grid, each linking to its live site or repository, plus a collaboration call-to-action |
| **04 Research & achievements** | Four conference papers, peer review and research roles, competition results, skill chips |
| **05 Contact** | Email, location, large social-link rows, resume download and a contact form that opens your mail app |
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
└── photos/
    └── shine.png                           # hero portrait (transparent PNG), you add this
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
© 2026 Sayantani Banerjee. All rights reserved.
