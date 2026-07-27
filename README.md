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
