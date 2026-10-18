export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="cv-footer">
      <div className="cv-container">
        <div className="cv-footer-top">
          <div className="cv-footer-brand">
            <a href="#top" className="cv-logo" aria-label="CraftVenix home">
              CraftVenix<span className="cv-logo-dot" aria-hidden="true" />
            </a>
            <p>
              A design and technology studio building thoughtful websites and digital
              experiences for businesses.
            </p>
          </div>

          <div className="cv-footer-cols">
            <div>
              <span className="cv-micro-label">Navigate</span>
              <a href="#services">Services</a>
              <a href="#work">Selected Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <span className="cv-micro-label">Services</span>
              <a href="#services">Website Design</a>
              <a href="#services">E-commerce</a>
              <a href="#services">Custom Web Solutions</a>
              <a href="#services">Maintenance</a>
            </div>
            <div>
              <span className="cv-micro-label">Connect</span>
              <a href="#contact">hello@craftvenix.com</a>
              <a href="#contact">WhatsApp on request</a>
              <a href="#contact">LinkedIn</a>
              <a href="#contact">Instagram</a>
            </div>
          </div>
        </div>

        <div className="cv-footer-bottom">
          <p>© {year} CraftVenix. All rights reserved.</p>
          <p>Independent digital studio · Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
