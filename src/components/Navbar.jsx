import { useEffect, useState } from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Selected Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`cv-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="cv-container cv-nav-inner">
        <a href="#top" className="cv-logo" aria-label="CraftVenix home" onClick={close}>
          CraftVenix<span className="cv-logo-dot" aria-hidden="true" />
        </a>

        <nav className="cv-nav-links d-none d-lg-flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-cv btn-cv-primary d-none d-lg-inline-flex">
          Start a Project
        </a>

        <button
          className="cv-menu-toggle d-lg-none"
          aria-expanded={open}
          aria-controls="cv-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`cv-menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <div id="cv-mobile-menu" className="cv-mobile-menu">
          <nav aria-label="Mobile primary">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-cv btn-cv-primary" onClick={close}>
            Start a Project
          </a>
          <p className="cv-mobile-meta">Independent digital studio · Tanzania</p>
        </div>
      )}
    </header>
  );
}
