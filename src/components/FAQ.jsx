import { useState } from 'react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'What types of websites does CraftVenix build?',
    a: 'Business websites, landing pages, e-commerce interfaces, healthcare and hospitality websites, and custom web experiences. If your project needs something outside these areas, we will tell you honestly whether it is a good fit.'
  },
  {
    q: 'How does the website development process work?',
    a: 'We start with discovery, then define the structure and scope, move into design and development, and finish with launch preparation. Each stage has clear checkpoints so you know what is happening and what comes next.'
  },
  {
    q: 'How long does a website project take?',
    a: 'Timelines depend on scope, content readiness, and feedback speed. A focused business website may take a few weeks; larger or custom projects take longer. A realistic timeline is confirmed before work begins.'
  },
  {
    q: 'How much does a website cost?',
    a: 'Cost depends on scope, the number of pages, content requirements, and functionality. Rather than display a misleading fixed price, we confirm a clear quotation after understanding your project.'
  },
  {
    q: 'Can CraftVenix redesign an existing website?',
    a: 'Yes. Redesigns are a common part of the work. We review what exists, identify what should be kept or improved, and plan a transition that protects your current content and visibility.'
  },
  {
    q: 'Can I request changes after launch?',
    a: 'Yes. Post-launch changes can be handled through a maintenance arrangement or as a separate piece of work, depending on what you need.'
  },
  {
    q: 'Do you work with businesses outside Tanzania?',
    a: 'Yes. The studio is based in Tanzania, but projects can be delivered remotely for businesses in other locations. Communication and review happen online.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="cv-section cv-faq" id="faq">
      <div className="cv-container">
        <div className="cv-faq-grid">
          <Reveal>
            <div className="cv-faq-head">
              <span className="cv-eyebrow">08 — FAQ</span>
              <h2 className="cv-h2">
                Questions,<br /> answered clearly.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="cv-accordion">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div className="cv-accordion-item" key={faq.q}>
                    <h3>
                      <button
                        className={`cv-accordion-trigger ${isOpen ? 'is-open' : ''}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-trigger-${i}`}
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      >
                        <span>{faq.q}</span>
                        <span className="cv-accordion-icon" aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      className={`cv-accordion-panel ${isOpen ? 'is-open' : ''}`}
                    >
                      <div className="cv-accordion-body">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
