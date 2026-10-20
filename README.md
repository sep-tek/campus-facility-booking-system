# campus-facility-booking-system
Frontend prototype of a university campus facility booking and scheduling system built with HTML, CSS, and JavaScript.

## Project identity

- Project title: Campus Facility Booking and Scheduling System
- Interface name: CampusReserve
- Context: university Internet Programming course prototype

`CampusReserve` is the public-facing website name and is used in every page's
browser tab title and site header. The repository, folder, and Git remote stay
named `campus-facility-booking-system`.

It helps students and university staff explore campus facilities, review example
availability schedules, and prepare booking requests. At this stage forms and
schedules are illustrative only: there is no booking engine, login system,
database, or automatic conflict detection.

## Current phase: HTML only

Phase 1 delivers the HTML foundation only. This phase intentionally contains:

- Semantic HTML5 markup for six pages
- Shared navigation, footer text, and a working skip-to-main-content link
- Sample facility, schedule, and reservation data written directly into the pages

Deliberately **not** included at this phase:

- No CSS (no stylesheets, no inline `style` attributes)
- No JavaScript (no scripts, no inline event handlers)
- No frameworks, libraries, build tools, or package installations
- No backend, API, or database

CSS and JavaScript are planned for later course phases, after the HTML has been
reviewed.

## Project structure

```
/
├── index.html          Homepage: overview, featured categories, booking process overview
├── facilities.html     Facility directory: seven sample facilities with sample data
├── booking.html        Booking request form layout (cannot submit data)
├── availability.html   Illustrative sample availability schedule tables
├── reservations.html   Static example reservation records
├── about.html          What CampusReserve is, facilities, who it is for, how to use it
├── images/             Campus photographs (WebP) used on the homepage
└── README.md
```

All six pages sit at the repository root and link to each other with relative
paths, so the prototype works when opened directly from the file system with no
server. `images/.gitkeep` is retained so the directory is tracked by Git even
before any photograph is added; it is not an image and is not displayed anywhere.

## Conventions used in this phase

- One `<h1>` per page, with a logical heading hierarchy below it.
- A visible skip link as the first element in `<body>`, targeting `#main-content`
  on `<main>`. It is unstyled until CSS is added in a later phase.
- Every page repeats the same six navigation links and marks the current page with
  `aria-current="page"`.
- Every data table has a `<caption>`, `scope="col"` column headers, and
  `scope="row"` row headers.
- Sample data is labelled as sample data on each page that uses it.
- Images appear only where a matching file exists in `images/`. Each `<img>` has
  alternative text describing what the photograph actually shows, and a
  `<figcaption>` beside it.

## Git

This is a group project, so work is committed in small, reviewable steps. Branches,
remotes, and existing commit history should not be rewritten.
