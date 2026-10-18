import Reveal from './Reveal';

const packages = [
  {
    name: 'Starter',
    description: 'For small businesses that need a professional online presence.',
    scope: ['Core website pages', 'Responsive design', 'Contact and enquiry flow'],
    featured: false
  },
  {
    name: 'Growth',
    description:
      'For growing businesses that need a more comprehensive website and stronger digital presentation.',
    scope: [
      'Expanded page structure',
      'Content-led design system',
      'Conversion-focused layouts',
      'Technical SEO foundations'
    ],
    featured: true
  },
  {
    name: 'Custom',
    description:
      'For projects with specific requirements or advanced functionality.',
    scope: [
      'Scoped around your requirements',
      'Custom functionality',
      'Integrations where required',
      'Phased delivery planning'
    ],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="cv-section cv-pricing" id="pricing">
      <div className="cv-container">
        <Reveal>
          <div className="cv-section-head">
            <span className="cv-eyebrow">06 — Engagement</span>
            <h2 className="cv-h2">
              A clear starting point.<br /> A scoped quotation.
            </h2>
            <p className="cv-section-intro">
              Every project is different. Final pricing depends on scope, content, and
              functionality — confirmed during the project discussion.
            </p>
          </div>
        </Reveal>

        <div className="row g-0 cv-pricing-grid">
          {packages.map((pkg, i) => (
            <div className="col-lg-4" key={pkg.name}>
              <Reveal delay={i * 80}>
                <div className={`cv-price-card ${pkg.featured ? 'is-featured' : ''}`}>
                  {pkg.featured && <span className="cv-price-flag">Recommended</span>}
                  <h3 className="cv-h3">{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <span className="cv-micro-label">Typical scope</span>
                  <ul>
                    {pkg.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-cv btn-cv-secondary">
                    Request a Quote
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal>
          <p className="cv-pricing-note">
            No final prices are displayed because scope is confirmed together. Share your
            project and we will respond with a clear, itemised quotation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
