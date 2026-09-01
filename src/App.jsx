import { useCallback, useEffect, useRef, useState } from 'react'

import { pastWorkBlurbs } from './pastWorkBlurbs'

const CONTACT_EMAIL = 'jeffk@kyzereye.com'
const MAILTO = `mailto:${CONTACT_EMAIL}`
const PHONE_DISPLAY = '303.817.4277'

const services = [
  'Full-stack work across UI, API, and data when a single sprint is not enough. Phased plans with pacing and checkpoints your team can follow.',
  'UI work in React, Angular, and similar modern web stacks. Components, forms, and flows aligned with your existing Node or Python APIs.',
  'Server work in Node and Python on your API routes and the persistence and services behind them. Moving data to and from where it needs to be.',
  'Database work on PostgreSQL, MySQL, and MongoDB. Schema tweaks, queries, migrations, and everyday fixes.',
  'Targeted hardening and cleanup when you need it. Smaller refactors, MFA-style auth, and tests your team will actually run.',
  'Steady communication while work is in flight. Check-ins, readable commits, and notes so nobody has to guess what changed.',
]

const focusAreas = [
  'Building new applications — from early ideas through something you can ship and iterate on.',
  'Revamping, re-engineering, or redesigning older apps so they look current, behave the way you want, and match how you work today.',
  'Smoothing rough workflows so the app feels intuitive and user-friendly — closing the gap on "I wish it did that."',
  'Tracking down bugs and smoothing workflows that annoy your team or your users — the ones that never quite earn a sprint on their own.',
  'Software that reflects how you want to operate and what your customers actually need when they show up.',
]

function SectionPanelChevron() {
  return (
    <span className="section-panel-chevron" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function CollapsibleSection({ sectionClass, titleId, label, sub, children }) {
  return (
    <section className={`section section--compact ${sectionClass}`} aria-labelledby={titleId}>
      <div className="container">
        <details className="section-panel">
          <summary className="section-panel-summary">
            <h2 id={titleId} className="section-title section-panel-title">
              <span className="section-panel-heading-row">
                <span className="section-panel-heading-label">{label}</span>
                <span className="section-panel-heading-sep" aria-hidden="true">
                  —
                </span>
                <span className="section-panel-heading-sub">{sub}</span>
              </span>
            </h2>
            <SectionPanelChevron />
          </summary>
          <div className="section-panel-body">{children}</div>
        </details>
      </div>
    </section>
  )
}

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const contactWrapRef = useRef(null)
  const contactBtnRef = useRef(null)
  const contactEmailRef = useRef(null)

  const closeContact = useCallback(() => {
    setContactOpen(false)
    contactBtnRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!contactOpen) return

    const onPointerDown = (e) => {
      if (contactWrapRef.current && !contactWrapRef.current.contains(e.target)) {
        closeContact()
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') closeContact()
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [contactOpen, closeContact])

  useEffect(() => {
    if (contactOpen) {
      contactEmailRef.current?.focus()
    }
  }, [contactOpen])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            KyzerEye CodeWorks
          </a>
          <div className="header-contact" ref={contactWrapRef}>
            <button
              ref={contactBtnRef}
              type="button"
              className="header-cta"
              aria-expanded={contactOpen}
              aria-controls="contact-panel"
              aria-haspopup="true"
              id="contact-menu-button"
              onClick={() => setContactOpen((o) => !o)}
            >
              Contact
            </button>
            {contactOpen ? (
              <div
                id="contact-panel"
                className="contact-panel"
                role="region"
                aria-label="Contact information"
              >
                <p className="contact-panel-name">Jeff Kyzer</p>
                <hr />
                <p className="contact-panel-company">
                  KyzerEye CodeWorks
                  <span className="contact-panel-legal"> · Kyzereye LLC</span>
                </p>
                <p className="contact-panel-phone">{PHONE_DISPLAY}</p>
                <a
                  ref={contactEmailRef}
                  className="contact-panel-email"
                  href={MAILTO}
                  onClick={closeContact}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main id="main">
        <div id="top" className="hero-anchor" aria-hidden="true" />

        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero-inner">
            <p className="eyebrow">Kyzereye LLC · Lafayette, Colorado</p>
            <h1 id="hero-heading" className="hero-title">
              Help when the backlog outruns the team
            </h1>
            <p className="hero-lede">
              KyzerEye CodeWorks is Jeff Kyzer — contract development on front-end frameworks (including
              React and Angular), Node and Python/Flask backends, and the usual databases, when you need an
              extra pair of hands, not another salary on the books.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={MAILTO}>
                Email Jeff Kyzer
              </a>
            </div>
            <p className="hero-note">
              A short note on what is stuck and roughly when you need it is enough. I will answer whether the
              work lines up with what I do.
            </p>
          </div>
        </section>

        <CollapsibleSection
          sectionClass="section-services"
          titleId="services-heading"
          label="Capabilities"
          sub="what I can take on"
        >
          <p className="section-intro">
            I have spent years in production code — not every stack under the sun, but the ones listed here I
            have used for real releases. I plug into your repo, follow your conventions, and focus on the pieces
            you hand off.
          </p>
          <ul className="card-list">
            {services.map((text) => (
              <li key={text.slice(0, 48)} className="card">
                {text}
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        <CollapsibleSection
          sectionClass="section-work"
          titleId="work-heading"
          label="Past work"
          sub="what I've worked on"
        >
          <ul className="work-blurb-list">
            {pastWorkBlurbs.map((text, index) => (
              <li key={`past-work-${index}`} className="card work-blurb">
                {text}
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        <CollapsibleSection
          sectionClass="section-alt"
          titleId="fit-heading"
          label="Sweet spot"
          sub="what I like to work on"
        >
          <ul className="card-list">
            {focusAreas.map((text) => (
              <li key={text.slice(0, 40)} className="card">
                {text}
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        <section className="section section-contact" aria-labelledby="contact-heading">
          <div className="container contact-inner">
            <h2 id="contact-heading" className="section-title">
              Next step
            </h2>
            <p className="contact-body">
              One paragraph is fine: what you are building, where you are stuck, and any hard dates. You will
              get a direct reply — yes, no, or what would need to change first.
            </p>
            <a className="btn btn-primary btn-lg" href={MAILTO}>
              Send a message
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© KyzerEye CodeWorks · Kyzereye LLC · Lafayette, CO</p>
        </div>
      </footer>
    </>
  )
}

export default App
