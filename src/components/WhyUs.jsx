import Reveal from './Reveal';

const principles = [
  {
    number: '01',
    title: 'Clarity First',
    text: 'Every design decision should make the experience easier to understand.'
  },
  {
    number: '02',
    title: 'Purposeful Design',
    text: 'Visual quality should support usability and business objectives.'
  },
  {
    number: '03',
    title: 'Built for Real Use',
    text: 'Prioritise responsiveness, accessibility, performance, and usability.'
  },
  {
    number: '04',
    title: 'Ready to Evolve',
    text: 'Create a maintainable foundation that can grow with the business.'
  }
];

export default function WhyUs() {
  return (
    <section className="cv-section cv-why" id="why">
      <div className="cv-container">
        <div className="cv-why-grid">
          <Reveal>
            <div className="cv-why-head">
              <span className="cv-eyebrow">05 — Why CraftVenix</span>
              <h2 className="cv-h2">
                Thoughtful by design.<br /> Practical by nature.
              </h2>
            </div>
          </Reveal>

          <div className="cv-why-principles">
            {principles.map((p, i) => (
              <Reveal key={p.number} delay={i * 60}>
                <div className="cv-principle">
                  <span className="cv-principle-number">{p.number}</span>
                  <h3 className="cv-h3">{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
