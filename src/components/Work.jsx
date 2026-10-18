import { projects } from '../data/projects';
import BrowserMockup from './BrowserMockup';
import Reveal from './Reveal';

export default function Work() {
  return (
    <section className="cv-section cv-work" id="work">
      <div className="cv-container">
        <Reveal>
          <div className="cv-section-head cv-work-head">
            <span className="cv-eyebrow">03 — Selected Work</span>
            <h2 className="cv-h2">
              Selected work.<br /> Built with purpose.
            </h2>
            <p className="cv-section-intro">
              Digital experiences shaped around different businesses, audiences, and goals.
              All projects below are clearly labelled concepts or demos.
            </p>
          </div>
        </Reveal>

        <div className="cv-work-list">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 40}>
              <article className={`cv-work-item cv-work-${project.layout}`}>
                <a
                  href="#contact"
                  className="cv-work-link"
                  aria-label={`Enquire about the ${project.title} concept`}
                >
                  <div className="cv-work-visual">
                    <BrowserMockup
                      variant={project.variant}
                      image={project.image}
                      imageAlt={project.imageAlt}
                      className="cv-work-browser"
                    />
                    <span className="cv-work-overlay">
                      View concept <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  <div className="cv-work-copy">
                    <div className="cv-work-meta">
                      <span className="cv-work-category">{project.category}</span>
                      <span className="cv-work-type">{project.type}</span>
                    </div>
                    <h3 className="cv-work-title">{project.title}</h3>
                    <p className="cv-work-desc">{project.description}</p>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="cv-work-note">
            <p>
              These are demonstration projects and design concepts, not verified commercial
              client work. Concept links are placeholders and can be replaced with live URLs
              when projects launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
                    }
