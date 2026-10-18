import BrowserMockup from './BrowserMockup';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="cv-hero" id="top">
      <div className="cv-container">
        <div className="cv-hero-top">
          <Reveal>
            <span className="cv-status">
              <span className="cv-status-dot" aria-hidden="true" />
              Independent digital studio · Tanzania
            </span>
          </Reveal>
        </div>

        <div className="cv-hero-grid">
          <div className="cv-hero-copy">
            <Reveal delay={80}>
              <h1 className="cv-display">
                Digital experiences built to move your business{' '}
                <span className="cv-green">forward.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="cv-hero-lead">
                CraftVenix designs and builds thoughtful websites and digital experiences
                that help businesses communicate clearly, earn trust, and grow online.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="cv-hero-actions">
                <a href="#contact" className="btn-cv btn-cv-primary">
                  Start a Project
                </a>
                <a href="#work" className="btn-cv btn-cv-secondary">
                  Explore Our Work <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="cv-hero-visual" aria-label="Website design previews">
            <div className="cv-hero-green-block" aria-hidden="true" />
            <div className="cv-hero-mockup cv-hero-mockup-primary">
              <BrowserMockup
                variant="savanna"
                image="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
              />
            </div>
            <div className="cv-hero-mockup cv-hero-mockup-secondary">
              <BrowserMockup
                variant="bnm"
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
              />
            </div>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="cv-hero-foot">
            <span>Design</span>
            <span>Development</span>
            <span>Digital experiences</span>
            <span>Ongoing improvement</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
