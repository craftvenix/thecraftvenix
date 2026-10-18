import Reveal from './Reveal';

const stages = [
  {
    number: '01',
    title: 'Discover',
    text: 'Understand the business, audience, objectives, and requirements.'
  },
  {
    number: '02',
    title: 'Define',
    text: 'Establish the structure, content direction, scope, and visual approach.'
  },
  {
    number: '03',
    title: 'Design & Build',
    text: 'Create the interface, develop the website, and refine it through review.'
  },
  {
    number: '04',
    title: 'Launch & Improve',
    text: 'Complete final checks, prepare the launch, and discuss future maintenance or improvements.'
  }
];

export default function Process() {
  return (
    <section className="cv-section cv-process" id="process">
      <div className="cv-container">
        <Reveal>
          <div className="cv-section-head">
            <span className="cv-eyebrow">04 — Approach</span>
            <h2 className="cv-h2">
              From the first idea<br /> to a finished experience.
            </h2>
          </div>
        </Reveal>

        <div className="cv-process-grid">
          {stages.map((stage, i) => (
            <Reveal key={stage.number} delay={i * 80}>
              <div className="cv-process-step">
                <span className="cv-process-number">{stage.number}</span>
                <h3 className="cv-h3">{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
