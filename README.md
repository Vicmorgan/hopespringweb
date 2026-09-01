# Hopespring Foundation School — Website

Official website for **Hopespring Foundation School**, a leading private school in Nigeria dedicated to academic excellence, character development, and holistic education.

---

## Tech Stack

- **[Eleventy (11ty)](https://www.11ty.dev/)** — static site generator, Nunjucks templates
- **Tailwind CSS** — compiled via the Tailwind CLI (not the CDN build)
- **Vanilla JavaScript** — site search, hero slider, mobile menu
- **Netlify** — hosting and form handling (`netlify.toml`)

---

## Project Structure

```
hopespringweb/
├── src/
│   ├── _includes/
│   │   ├── base.njk              # Shared page layout
│   │   └── components/           # head, navbar, footer partials
│   ├── assets/
│   │   ├── css/input.css         # Tailwind entry point
│   │   ├── images/               # Site images, organized by page
│   │   ├── js/site_search.js
│   │   └── videos/
│   ├── index.html                # Homepage
│   ├── about.html
│   ├── academics.html
│   ├── activities.html
│   ├── admission.html
│   ├── book_tour.html
│   ├── calendar.html
│   ├── character_counts.html
│   ├── contact.html
│   ├── curriculum.html
│   ├── gallery.html
│   ├── news.html
│   ├── parents.html
│   ├── staff_directory.html
│   ├── start_application.html
│   ├── support_services.html
│   ├── virtual_tour.html
│   ├── robots.txt
│   └── sitemap.xml
├── _site/                        # Build output (generated, gitignored)
├── eleventy.config.js
├── tailwind.config.js
└── netlify.toml
```

Every page is an Eleventy template using the `base.njk` layout, which pulls in the shared navbar and footer. Pages build to clean URLs (e.g. `src/about.html` → `/about/`).

---

## Development

Requires Node.js and npm.

```bash
npm install
npm run dev
```

This builds the Tailwind stylesheet once, then runs the Tailwind watcher and the Eleventy dev server concurrently at `http://localhost:8080`.

### Other scripts

| Script | What it does |
|---|---|
| `npm run build` | Full production build (CSS + Eleventy) into `_site/` |
| `npm run build:css` | Compile `src/assets/css/input.css` → `_site/assets/css/style.css` |
| `npm run build:eleventy` | Build pages only (expects CSS already built) |
| `npm run dev:css` | Watch and rebuild CSS only |
| `npm run dev:eleventy` | Run the Eleventy dev server only |

---

## Forms

Contact, Book a Tour, and Start Application forms are wired up for [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) (`data-netlify="true"`, honeypot field). Submissions appear in the Netlify dashboard for the deployed site — no server code needed.

---

## Media assets

Everything under `src/assets/` is committed to git and shipped on every Netlify
deploy, so only **web-optimized** files belong there. Full-resolution originals
(camera JPEGs, raw video, print PDFs) stay out of the repo — keep them in a
folder that matches a `.gitignore` rule (e.g. `staffs_hsfs/`) or in shared drive
storage.

Rough budgets before committing:

| Asset | Target |
|---|---|
| Photos | ≤ ~200 KB, longest edge ≤ ~1600 px, EXIF stripped, auto-oriented |
| Video | 720p, H.264, `+faststart`, CRF ~28 (aim for single-digit MB) |
| PDF | Ghostscript `-dPDFSETTINGS=/ebook` (image DPI ~120) |

Handy commands:

```bash
# Photo → square headshot (as used for src/assets/images/staff/management-*.jpg)
magick in.jpg -auto-orient -strip -resize 900x900^ -gravity north -extent 900x900 -quality 82 out.jpg

# Video → 720p web-ready
ffmpeg -i in.mp4 -vf "scale=-2:720" -c:v libx264 -preset slow -crf 28 -c:a aac -b:a 96k -movflags +faststart out.mp4

# PDF → compressed
gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=out.pdf in.pdf
```

History note: the campus-tour video and yearbook PDF were originally committed at
full size (a 71 MB `.MOV`, a 27 MB MP4, an 18 MB PDF ≈ 116 MB). They were replaced
in the working tree with optimized versions (~15 MB total). The oversized blobs
still live in git history — if clone size becomes a problem, do a one-time
`git filter-repo --strip-blobs-bigger-than 5M` and force-push (coordinate with
anyone else who has a clone first).

## Deployment

Deployed via Netlify (see `netlify.toml`): build command `npm run build`, publish directory `_site`.

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Main landing page with hero, features, CTA |
| About | `about.html` | School history, mission, leadership |
| Academics | `academics.html` | Academic programmes overview |
| Curriculum | `curriculum.html` | Detailed curriculum breakdown |
| Activities | `activities.html` | Clubs, sports, co-curricular |
| Character Counts | `character_counts.html` | Character education programme |
| Admissions | `admission.html` | Enrollment info and FAQs |
| Start Application | `start_application.html` | Online application form |
| Book a Tour | `book_tour.html` | Campus tour booking |
| Virtual Tour | `virtual_tour.html` | Video campus walkthrough |
| Gallery | `gallery.html` | Photo gallery |
| News & Events | `news.html` | Latest school news |
| Calendar | `calendar.html` | Academic calendar |
| Parents | `parents.html` | Parent portal and resources |
| Support Services | `support_services.html` | Gifted, Inclusive, Counseling |
| Staff Directory | `staff_directory.html` | Meet the team |
| Contact | `contact.html` | Contact form and map |
