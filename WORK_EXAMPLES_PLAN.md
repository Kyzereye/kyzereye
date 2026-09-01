# Work examples on the landing page

## Goal

Show **past work** using the **same wording as [resume.txt](resume.txt)** — problem / action / outcome paragraphs, including company and program names as on the resume.

## Single source for the site

- **Canonical data file:** [`src/pastWorkBlurbs.js`](src/pastWorkBlurbs.js) exports `pastWorkBlurbs` (array of strings, one string per resume bullet). **Line breaks** inside a string match `resume.txt` (single newline between lines — problem / action / result — **no** extra blank lines). Rendered with `white-space: pre-line` on `.work-blurb`.
- **Consumer:** [`src/App.jsx`](src/App.jsx) imports `pastWorkBlurbs` and renders the Past work section.
- To **add or edit** examples: update [`resume.txt`](resume.txt) for your records, then mirror the same text in `pastWorkBlurbs.js` (or paste from resume when you change it).

## Placement and flow

Unchanged: Hero → **Capabilities — what I can take on** → **Past work — what I’ve worked on** → **Sweet spot — what I like to work on** → Next step.

## Resume source (full bullets)

The live site pulls from `pastWorkBlurbs.js`, which is kept **in sync with** these bullets from `resume.txt`.

**1 — Current lighting contract (Oelo)**

Oelo Lights, a lighting company with more than 10,000 users, needs steady software support without a full-time employee. The product includes a customer-facing mobile app and a web application used by administrators for metrics and routine operational updates. The workload is steady, but not large enough to justify another software engineer.

The work covers occasional break/fix, keeping modules and libraries current, troubleshooting one-off customer issues, and cleaning up workflow inconsistencies in the product. I support and maintain the platform and ship new functionality as needs change.

They get reliable coverage for maintenance and small builds without a new employee, and end users get a more dependable product with fewer disruptive issues, because the software is actively maintained and repaired.

**2 — Legacy rebuild (Maxar)**

While at Maxar, I supported a product line whose application needed a full re-engineering to a modern web stack that was easier to maintain and with a more visually appealing interface. The application also needed new functionality and updated procedures so the application matched how the business worked now.

I led a full rebuild onto a modern web architecture, refreshed the UI, and added new capabilities (complex tier-and-class rules for organizations and vendors and two-factor authentication), updated workflows, and simplified the database design to reduce unnecessary complexity.

The client got a system that was easier to maintain and extend, looked and felt current, and could support the new workflows they wanted. The access model and 2FA tightened data security, and the leaner database structure improved operational efficiency for database-related tasks.

**3 — DoD cataloging UI (Maxar)**

Also at Maxar, teams using a DoD application for cataloging military assets by country were slowed by UI issues and workflows that did not match day-to-day use. I shipped new features, fixed high-impact bugs, and refined those workflows so the tool was easier to work in. To harden delivery, I added frontend end-to-end tests and raised unit test coverage to over 90% on most of the codebase. The practical outcome was less day-to-day friction for cataloging teams from the UI and workflow changes, and fewer production issues because problems were caught earlier.

**4 — NGA PoC**

NGA managers needed proof-of-concept applications that they could run against time-sensitive operations before committing to production. At the same time, data specialists had to collect and analyze large volumes of trustworthy data in something closer to real conditions. I delivered end-to-end PoC software solutions including services, browser UI, database, APIs so teams could move real data from ingestion through analysis. The PoCs let leadership see quickly what was worth building and what was not before spending on a full production effort. Each build produced a clear signal on what fit mission needs and what did not.

**5 — GEODSS**

The GEODSS telescope platforms were designed for analyzing satellites for proper orbital trajectories using a random cataloging system to choose which objects to view. Mission decision makers needed to be able to apply analytic attention on a chosen object when required, rather than waiting for it to appear in a random nightly list.

I created new software capabilities that enable near-real-time tracking of priority targets, instead of depending on the catalog cycle to include object of interest. Also, scheduling and catalog sorting refinements made better use of natural sky conditions and viewing geometry which made better use of resources, reducing time lost waiting on proper conditions, and improving productivity of the telescope suite.

## UI / data shape

- **Data:** `pastWorkBlurbs` in [`src/pastWorkBlurbs.js`](src/pastWorkBlurbs.js) — array of strings (one string per resume bullet). Newlines inside a string match `resume.txt` only (typically one `\n` between problem / action / result lines). `.work-blurb` uses `white-space: pre-line`.
- **Markup:** `<ul className="work-blurb-list">` with `<li className="work-blurb">` per entry. No per-employer `h3` titles.
- **CSS:** `.work-blurb-list` / `.work-blurb` in [`src/styles.css`](src/styles.css).

## Files

| File | Role |
|------|------|
| [`src/pastWorkBlurbs.js`](src/pastWorkBlurbs.js) | **Edit here** to change Past work copy on the site. |
| [`src/App.jsx`](src/App.jsx) | Imports `pastWorkBlurbs`, renders Past work section. |
| [`resume.txt`](resume.txt) | Resume wording / names as you use on the CV. |

## Deployment

Unchanged: `npm run build` → deploy `dist/`.
