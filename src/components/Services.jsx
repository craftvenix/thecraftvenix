import { services } from '../data/services';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section className="cv-section cv-services" id="services">
      <div className="cv-container">
        <Reveal>
          <div className="cv-section-head">
            <span className="cv-eyebrow">02 — Services</span>
            <h2 className="cv-h2">
              What we design<br /> and build.
            </h2>
            <p className="cv-section-intro">
              Focused services for businesses that need a stronger, clearer digital presence.
            </p>
          </div>
        </Reveal>

        <div className="cv-services-list">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 60}>
              <article className="cv-service-row">
                <div className="cv-service-meta">
                  <span className="cv-service-number">{service.number}</span>
                  <span className="cv-service-divider" aria-hidden="true" />
                </div>
                <div className="cv-service-body">
                  <h3 className="cv-h3">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="cv-service-deliverables">
                  <span className="cv-micro-label">Deliverables</span>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
