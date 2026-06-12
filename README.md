# Hopespring Foundation School — Website

Official website for **Hopespring Foundation School**, a leading private school in Nigeria dedicated to academic excellence, character development, and holistic education.

---

## Project Structure

```
hopespringweb/
├── assets/
│   ├── images/         # All site images (logo, hero shots, etc.)
│   ├── js/             # JavaScript files (site_search.js)
│   └── videos/         # Video assets (virtual tour, etc.)
├── index.html          # Homepage
├── about.html
├── academics.html
├── activities.html
├── admission.html
├── book_tour.html
├── calendar.html
├── character_counts.html
├── contact.html
├── curriculum.html
├── gallery.html
├── news.html
├── parents.html
├── staff_directory.html
├── start_application.html
├── support_services.html
├── virtual_tour.html
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **Tailwind CSS** — loaded via CDN (`cdn.tailwindcss.com`)
- **Vanilla JavaScript** — site search, sliders, interactive UI
- **Google Fonts** — Lexend, Material Symbols Outlined

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

---

## Deployment

This is a **static site** — deploy to any static hosting provider:

- **GitHub Pages** — push to `gh-pages` branch
- **Netlify** — drag and drop the project folder
- **Vercel** — connect your GitHub repo

> **Before deploying:** Update the domain in `sitemap.xml` and `robots.txt` to match your live URL.

---

## Development

No build step required. Open any `.html` file directly in your browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if installed)
npx serve .
```
