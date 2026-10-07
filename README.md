# SAYANTANI BANERJEE — GAME-FIED PORTFOLIO

A black-screen, game-first portfolio built as a dependency-light static site for GitHub Pages, Vercel or any static host.

## What is included

- Opening one-click unlock game with the 🐞 bug
- Bug follows the cursor throughout the site
- Profile map with gated levels
- Separate LeetCode and GitHub sections
- Achievements / ICPC / competitions
- Deployed project vault
- Research papers and research experience
- Internships / leadership timeline
- Technical + creative skills
- WHY YZ? / Sanghamitra Ventures section
- Education and extracurricular section
- Contact / social links
- Dark-first UI with a light-mode toggle
- Light mode uses the top-right diamond / chandelier-like control
- Responsive layout
- No framework, no build step, no npm dependency

## Before publishing

Open `config.js` and replace:

- `PASTE_YOUR_LINKEDIN_URL_HERE`
- `PASTE_YOUR_GITHUB_URL_HERE`
- `PASTE_YOUR_LEETCODE_URL_HERE`

The resume supplied for this build exposed the names of those platforms but not the actual URLs, so this avoids accidentally linking to another person with the same name.

## Run locally

Double-clicking `index.html` is enough for the static version, but a local server is better:

```bash
python3 -m http.server 8000
```

Then open:

http://localhost:8000

## GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `config.js`, and `README.md`.
3. Go to Settings → Pages.
4. Select the main branch and root folder.
5. Save.

## Personal assets

Create an `assets/` folder later if you want to add:
- profile photo
- project screenshots
- certificates
- research PDFs
- custom cursor / bug art

The current version deliberately works without external assets.

## Source grounding

The content was based on the supplied one-page resume and previously specified WHY YZ? / project portfolio details. Resume facts include education, awards, projects, skills, research, extracurriculars and internships.

## Game difficulty
The games are deliberately ultra-fast. They are portfolio transitions, not skill tests: the opening bug takes one click, and the later levels use one simple action to unlock.
