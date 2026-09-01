---
name: React Landing Page Plan
overview: Build a simple React landing page for KyzerEye CodeWorks that clearly communicates services and captures leads via email. Keep scope tight so you can publish quickly and have a professional URL to share.
todos:
  - id: scaffold-react
    content: Initialize Vite React project and confirm local run/build commands
    status: completed
  - id: build-landing-content
    content: Create one-page structure and service-focused copy in App component
    status: completed
  - id: style-responsive
    content: Apply clean, responsive styling with strong CTA emphasis
    status: completed
  - id: wire-contact
    content: Add mailto links using jeffk@kyzereye.com in hero and footer
    status: completed
  - id: seo-and-launch-check
    content: Add metadata and run pre-launch quality checks
    status: completed
isProject: false
---

# KyzerEye CodeWorks Landing Page Plan

Repo-local copy. (Cursor may also keep a copy under `~/.cursor/plans/`.)

## Goal

Launch a clean, credible React landing page for `Kyzereye LLC` branded as `KyzerEye CodeWorks`, focused on one job: helping potential clients quickly understand your offer and contact you.

## Scope (Phase 1 only)

- One-page React site (no login, no subscription features yet)
- Static content sections with clear service positioning
- Primary call-to-action: email contact at `jeffk@kyzereye.com`
- Mobile-first responsive layout
- Basic SEO metadata so the page looks professional in search/share previews

## Core Messaging Structure

- **Hero**: `KyzerEye CodeWorks` + short value proposition
  - See **On-Page Copy** below for final strings.
- **What You Deliver**: practical help finishing backlog items quickly
- **Technical Coverage**: reflected in service bullets (not a bare skills list)
- **Ideal Client Fit**: reflected in "Who this is for" copy below
- **Contact CTA**: primary + footer strings below

## On-Page Copy (Ready for Implementation)

Use these blocks verbatim in `App.jsx` unless you tweak tone later. **Do not paste the full resume**; credibility stays tight.

### Eyebrow (above hero headline)

`Kyzereye LLC · Lafayette, Colorado`

### Hero

**Headline:** `Backlog relief for full-stack teams`

**Subheadline:** `KyzerEye CodeWorks helps you ship the features and fixes you do not have time for — Angular, React, Node, Python/Flask, and solid data layers — without hiring full-time.`

**Primary CTA (button):** `Email Jeff Kyzer`  
*(Link: `mailto:jeffk@kyzereye.com` — button shows your name; the mail client opens to the business address.)*

**Primary CTA (alternate label):** `Start a conversation`

**Supporting line (small text under CTA):** `Tell me what is stuck: scope, timeline, and stack. I will reply with whether I am a fit and the fastest path to done.`

### Section: What I do

**Section title:** `What I take off your plate`

**Intro (one sentence):** `I embed as a senior hands-on engineer to close gaps: build the slice you need, harden what you already have, and leave the codebase easier to maintain.`

**Service bullets:**

- `Front-end delivery — SPAs and component systems in React and Angular; responsive UI with strong attention to UX and long-term maintainability.`
- `APIs and services — Node.js and Python (Flask) backends, RESTful design, pragmatic integration with your existing architecture.`
- `Data work you can ship on — PostgreSQL, MySQL, and MongoDB: schema design, query performance, migrations, and sensible operational hygiene.`
- `Modernization and hardening — lift legacy stacks toward maintainable patterns, improve security posture (including auth flows such as 2FA), and raise test coverage where it pays off.`
- `Clear communication — steady updates, readable commits, and documentation so your team is not left guessing.`

### Section: Who this is for

**Section title:** `Built for teams with a full backlog and thin bench`

**Bullets:**

- `You have funded milestones or customer commitments — but not enough engineers to run them down in parallel.`
- `You need senior delivery without the overhead of a full-time hire for variable workload.`
- `You want execution, not theater: working software, tests where they matter, and pragmatic tradeoffs.`

### Section: Why KyzerEye CodeWorks

**Section title:** `Senior execution you can trust`

**Proof bullets (short, outcome-focused):**

- `Led modernization of a legacy application to Angular, Node.js, and PostgreSQL — improving performance, scalability, and long-term maintainability.`
- `Owned complex access-control and multi-tenant-style data rights across organizations and vendors.`
- `Delivered measurable database improvements — including major schema consolidation and performance-focused refactoring.`
- `Raised engineering quality with disciplined automated testing (including E2E) and higher effective coverage on shipping code.`
- `Background in mission-critical technical environments; comfortable with process, compliance, and high-stakes delivery.`

**Closing line (optional, before contact):** `If your roadmap is real and your calendar is not, let us get the important stuff done.`

### Section: Contact

**Section title:** `Let us talk about your next release`

**Body:** `Send a short note with what you are building, what is blocked, and your target timeframe. I will respond with next steps or a quick call if it is a fit.`

**Primary CTA (repeat):** `Email Jeff Kyzer` (same `mailto:jeffk@kyzereye.com`)

**Footer line:** `© KyzerEye CodeWorks · Kyzereye LLC · Lafayette, CO`

### SEO Snippets (for `index.html`)

- **`title`:** `KyzerEye CodeWorks | Full-Stack Contract Software Engineering`
- **`meta name="description"`:** `Jeff Kyzer — senior full-stack engineer for backlog-heavy teams: React, Angular, Node.js, Python/Flask, PostgreSQL, MySQL, MongoDB. Lafayette, CO. jeffk@kyzereye.com`

## Credibility Positioning (Reference)

- Keep proof bullets to the five listed above unless you swap one for a sector-specific win later.
- Resume depth stays off the landing page; LinkedIn or PDF can carry the long form.

## Suggested One-Page Sections

1. Hero (headline, subheadline, primary CTA)
2. Services Snapshot (service bullets above)
3. Ideal Engagements ("Who this is for" bullets)
4. Selected Experience Highlights ("Why KyzerEye CodeWorks" bullets)
5. Contact (email CTA + footer)

## Proposed React File Layout

- [`index.html`](index.html) - page metadata and root mount point
- [`src/main.jsx`](src/main.jsx) - app bootstrap
- [`src/App.jsx`](src/App.jsx) - one-page content structure
- [`src/styles.css`](src/styles.css) - layout, spacing, typography, responsive styles
- [`public/og-image.png`](public/og-image.png) - optional social preview image (can be placeholder initially)

## Implementation Steps

1. Initialize a React app scaffold (Vite + React) for a lightweight static deployment.
2. Build semantic sections in `App.jsx` (`header`, `main`, `section`, `footer`) with conversion-focused copy.
3. Add a consistent visual system in `styles.css` (readable typography, spacing scale, CTA styling, mobile responsiveness).
4. Wire CTA links (`mailto:jeffk@kyzereye.com`) in hero and footer.
5. Add SEO basics in `index.html` (`title`, `description`, social tags).
6. Validate local build and mobile layout before publish.

## Launch Checklist

- Content reads clearly in under 30 seconds
- CTA appears above the fold and again near the bottom
- Works on phone/tablet/desktop
- No console errors; production build succeeds
- Domain/DNS points to hosting target
- Copy stays client-outcome focused (not resume-dense)

## Phase 2 (Later, out of scope now)

- Subscription offerings (members content or retainers)
- Lead capture form + CRM integration
- Case studies/testimonials section
- Analytics and conversion tracking
