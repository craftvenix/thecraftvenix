import { useState } from 'react';
import Reveal from './Reveal';

const initial = {
  name: '',
  business: '',
  email: '',
  service: '',
  budget: '',
  description: ''
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your full name.';
    if (!form.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email address.';
    if (!form.service) next.service = 'Please select a service.';
    if (!form.description.trim()) next.description = 'Please describe your project.';
    return next;
  };

  const submit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      setStatus('error');
      return;
    }
    // Frontend-only: no message has been sent.
    setStatus('ready');
  };

  return (
    <section className="cv-section cv-contact" id="contact">
      <div className="cv-container">
        <div className="cv-contact-grid">
          <Reveal>
            <div className="cv-contact-copy">
              <span className="cv-eyebrow">09 — Start a Project</span>
              <h2 className="cv-display cv-contact-display">
                Have a<br /> project in mind?
              </h2>
              <p className="cv-contact-lead">
                Tell us what you are building, improving, or planning. Let us explore the
                right next step.
              </p>

              <div className="cv-contact-details">
                <div>
                  <span className="cv-micro-label">Email</span>
                  <p>hello@craftvenix.com <span className="cv-placeholder-tag">[placeholder]</span></p>
                </div>
                <div>
                  <span className="cv-micro-label">Studio</span>
                  <p>Independent digital studio · Tanzania</p>
                </div>
                <div>
                  <span className="cv-micro-label">WhatsApp</span>
                  <p>Available on request <span className="cv-placeholder-tag">[to configure]</span></p>
                </div>
              </div>
              <p className="cv-contact-note">
                Contact details are placeholders and should be replaced with verified
                information before launch.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="cv-form" onSubmit={submit} noValidate>
              <div className="cv-form-row">
                <div className={`cv-field ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name">Full name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={update}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="cv-field-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="cv-field">
                  <label htmlFor="business">Business name</label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={form.business}
                    onChange={update}
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className={`cv-field ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="cv-field-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="cv-form-row">
                <div className={`cv-field ${errors.service ? 'has-error' : ''}`}>
                  <label htmlFor="service">Service required *</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={update}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Select a service</option>
                    <option>Website Design & Development</option>
                    <option>E-commerce & Digital Experiences</option>
                    <option>Custom Web Solutions</option>
                    <option>Website Maintenance & Improvement</option>
                    <option>Not sure yet</option>
                  </select>
                  {errors.service && (
                    <span id="service-error" className="cv-field-error" role="alert">
                      {errors.service}
                    </span>
                  )}
                </div>
                <div className="cv-field">
                  <label htmlFor="budget">Estimated budget</label>
                  <select id="budget" name="budget" value={form.budget} onChange={update}>
                    <option value="">Optional</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $3,000</option>
                    <option>$3,000 – $7,000</option>
                    <option>$7,000+</option>
                    <option>Prefer to discuss</option>
                  </select>
                </div>
              </div>

              <div className={`cv-field ${errors.description ? 'has-error' : ''}`}>
                <label htmlFor="description">Project description *</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={form.description}
                  onChange={update}
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? 'description-error' : undefined}
                  placeholder="What are you building, improving, or planning?"
                />
                {errors.description && (
                  <span id="description-error" className="cv-field-error" role="alert">
                    {errors.description}
                  </span>
                )}
              </div>

              <button type="submit" className="btn-cv btn-cv-primary cv-submit">
                Send Project Enquiry
              </button>

              {status === 'error' && (
                <p className="cv-form-message is-error" role="alert">
                  Please check the highlighted fields and try again.
                </p>
              )}

              {status === 'ready' && (
                <div className="cv-form-message is-info" role="status">
                  <strong>Form validated — no message has been sent.</strong>
                  <p>
                    This is a frontend-only form. To receive enquiries, connect it to an
                    email service or a serverless endpoint (for example Resend, Formspree,
                    or a Vercel function). Do not display a success state until that is
                    configured.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
              }
