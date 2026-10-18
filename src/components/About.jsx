import Reveal from './Reveal';

export default function About() {
  return (
    <section className="cv-section cv-about" id="about">
      <div className="cv-container">
        <div className="cv-about-grid">
          <Reveal>
            <span className="cv-eyebrow">07 — About</span>
            <h2 className="cv-h2">
              A small studio.<br /> A thoughtful approach<br /> to digital.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="cv-about-copy">
              <p className="cv-about-lead">
                CraftVenix combines design and technology to help businesses build useful,
                professional digital experiences.
              </p>
              <p>
                We are deliberately small. That means direct communication, careful
                attention to the work, and a process without unnecessary layers.
              </p>
              <p>
                We do not pretend to be a large agency. We focus on doing good work for a
                manageable number of clients, with clarity from the first conversation to
                launch.
              </p>
              <div className="cv-about-quote">
                <p>
                  “The best digital work is not decoration. It is a clear, well-built
                  experience that helps a business move forward.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
