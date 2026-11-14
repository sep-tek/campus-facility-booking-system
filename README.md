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

## Current phase: CSS foundation and page styling

The six-page HTML foundation is complete. The project is now in the CSS
development phase: the shared CSS foundation has been created, three visual
themes are available, and page-specific CSS has been separated so group members
can work independently.

Completed so far:

- Semantic HTML5 markup for six pages
- Shared navigation, footer text, and a working skip-to-main-content link
- Sample facility, schedule, and reservation data written directly into the pages
- A centralized `styles.css` shared foundation containing design tokens, all
  three theme definitions, typography, accessibility rules, header and
  navigation styling, the theme selector, reusable components, the footer, and
  global responsive rules
- Three visual themes:
  - **Lime Afterdark** - default theme
  - **Midnight Professional** - alternate theme
  - **Coastal Classic** - alternate theme
- An existing theme switcher implemented in `theme.js`; it stores the selected
  theme in `localStorage` and applies it to the page
- Page-specific CSS split into separate files under `css/pages/` and
  `css/shared/`
- Page-specific CSS contributions being distributed among four group members,
  while the shared foundation and HTML stylesheet integration remain
  team-leader responsibilities

The only JavaScript currently in the project is `theme.js`, which handles theme
switching. Future JavaScript application functionality is separate from this
existing theme behavior. The following are not implemented yet:

- Booking submission, validation, or persistence logic
- Login or user accounts
- Backend, API, or database
- Automatic conflict detection

The project still does not use frameworks, libraries, build tools, package
installations, or external CSS dependencies. Forms and schedules remain
illustrative only.

## Project structure

```
/
├── index.html          Homepage: overview, featured categories, booking process overview
├── facilities.html     Facility directory: seven sample facilities with sample data
├── booking.html        Booking request form layout (cannot submit data)
├── availability.html   Illustrative sample availability schedule tables
├── reservations.html   Static example reservation records
├── about.html          What CampusReserve is, facilities, who it is for, how to use it
├── styles.css          Shared CSS foundation: tokens, themes, typography, layout, components
├── theme.js            Existing theme switcher using localStorage
├── css/
│   ├── pages/
│   │   ├── home-hero.css       Homepage hero section
│   │   ├── booking.css         Booking form page
│   │   ├── home-sections.css   Homepage categories, booking process, and spaces sections
│   │   └── facilities.css      Facilities page refinements
│   └── shared/
│       └── tables.css          Availability and reservation table/status styles
├── images/             Campus photographs (WebP) used on the homepage
├── .gitignore
└── README.md
```

All six pages sit at the repository root and link to each other with relative
paths, so the prototype works when opened directly from the file system with no
server. Each page loads `styles.css` first, followed by its page-specific
stylesheet where one exists, and then the deferred `theme.js`. The `images/`
directory contains the WebP campus photographs used on the homepage.
`images/.gitkeep` is retained so the directory stays tracked by Git; it is not an
image and is not displayed anywhere.

## Conventions used in this phase

### HTML and accessibility

- One `<h1>` per page, with a logical heading hierarchy below it.
- A skip link as the first element in `<body>`, targeting `#main-content` on
  `<main>`. It becomes visible when focused by keyboard.
- Every page repeats the same six navigation links and marks the current page with
  `aria-current="page"`.
- Every data table has a `<caption>`, `scope="col"` column headers, and
  `scope="row"` row headers.
- Sample data is labelled as sample data on each page that uses it.
- Images appear only where a matching file exists in `images/`. Each `<img>` has
  alternative text describing what the photograph actually shows, and a
  `<figcaption>` beside it.
- Existing HTML content, form fields, IDs, names, actions, methods, navigation
  destinations, tables, and statuses are preserved when styling changes.

### CSS architecture and themes

- `styles.css` is loaded first and is the shared foundation. It contains the
  design tokens, all three theme definitions, typography, accessibility rules,
  header and navigation styling, the theme selector, reusable components, the
  footer, and global responsive and reduced-motion rules.
- Page-specific rules live in `css/pages/` and `css/shared/` and are loaded after
  `styles.css`.
- Page-specific styles use the existing CSS custom properties from `styles.css`;
  they do not define separate theme palettes.
- Lime Afterdark is the default theme. Midnight Professional and Coastal Classic
  are selected through the existing theme switcher.
- The theme switcher is implemented in `theme.js` and stores the selected theme
  in `localStorage`.
- The shared foundation is team-leader-owned. Page-specific files are divided
  among four group members so contributors do not edit the same stylesheet.
- No CSS frameworks or external style dependencies are used.

## JavaScript scope

The only JavaScript currently in the project is `theme.js`, which handles theme
selection. Application JavaScript for booking submission, validation, data
storage, or conflict detection is future work and is intentionally separate from
the CSS phase.

## Group Members

| Full Name | Student ID | GitHub Username |
|---|---|---|
| Sofoneyas Arega | ETS1351/17 | Woboniaz |
| Surafel Betre | ETS1376/17 | Surabetre |
| Solomon Mehabew | ETS1362/17 | Solo-moon12 |
| Teklehaymanot Gashaw | ETS1391/17 | sep-tek |
| Bereket Bitew | ETS1851/17 | bereketmekonen27-del |

## Git

This is a group project, so work is committed in small, reviewable steps. Branches,
remotes, and existing commit history should not be rewritten.
