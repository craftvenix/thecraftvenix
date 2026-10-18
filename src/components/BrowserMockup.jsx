export default function BrowserMockup({ variant = 'savanna', image, imageAlt, className = '' }) {
  return (
    <div className={`cv-browser ${className}`} aria-hidden="true">
      <div className="cv-browser-bar">
        <span className="cv-browser-dot" />
        <span className="cv-browser-dot" />
        <span className="cv-browser-dot" />
        <span className="cv-browser-url">
          {variant === 'savanna' && 'savannatrails.co.tz'}
          {variant === 'bnm' && 'bnmacademy.com'}
          {variant === 'pharmacy' && 'craftvenix.com/pharmacy'}
          {variant === 'clinic' && 'craftvenix.com/clinic'}
          {variant === 'restaurant' && 'craftvenix.com/restaurant'}
        </span>
      </div>

      {variant === 'savanna' && (
        <div className="cv-mock cv-mock-savanna">
          <div className="cv-mock-nav">
            <strong>Savanna Trails</strong>
            <span>Journeys</span>
            <span>Stay</span>
            <span>Enquire</span>
          </div>
          <div
            className="cv-mock-hero"
            style={{ backgroundImage: image ? `url(${image})` : undefined }}
          >
            <div className="cv-mock-hero-copy">
              <span className="cv-mock-label">Tanzania · Private Safaris</span>
              <h3>Wild by nature.<br />Refined by design.</h3>
            </div>
          </div>
          <div className="cv-mock-strip">
            <span>Serengeti</span>
            <span>Ngorongoro</span>
            <span>Zanzibar</span>
          </div>
        </div>
      )}

      {variant === 'bnm' && (
        <div className="cv-mock cv-mock-bnm">
          <div className="cv-mock-nav">
            <strong>BNM</strong>
            <span>Courses</span>
            <span>About</span>
            <span>Apply</span>
          </div>
          <div className="cv-mock-bnm-hero">
            <div className="cv-mock-bnm-copy">
              <span className="cv-mock-label">Digital Academy</span>
              <h3>Practical skills for a digital future.</h3>
              <span className="cv-mock-btn">Explore courses</span>
            </div>
            <div
              className="cv-mock-bnm-image"
              style={{ backgroundImage: image ? `url(${image})` : undefined }}
            />
          </div>
          <div className="cv-mock-bnm-cards">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      {variant === 'pharmacy' && (
        <div className="cv-mock cv-mock-pharmacy">
          <div className="cv-mock-nav">
            <strong>Care Pharmacy</strong>
            <span>Services</span>
            <span>Products</span>
            <span>Visit</span>
          </div>
          <div className="cv-mock-pharmacy-body">
            <div className="cv-mock-pharmacy-copy">
              <span className="cv-mock-label">Healthcare · Community</span>
              <h3>Care, clearly presented.</h3>
              <p>Services, products, and opening times in one calm place.</p>
            </div>
            <div
              className="cv-mock-pharmacy-image"
              style={{ backgroundImage: image ? `url(${image})` : undefined }}
            />
          </div>
          <div className="cv-mock-strip">
            <span>Prescriptions</span>
            <span>Health advice</span>
            <span>Opening hours</span>
          </div>
        </div>
      )}

      {variant === 'clinic' && (
        <div className="cv-mock cv-mock-clinic">
          <div className="cv-mock-nav">
            <strong>Clinic & Dental</strong>
            <span>Treatments</span>
            <span>Team</span>
            <span>Book</span>
          </div>
          <div className="cv-mock-clinic-body">
            <div
              className="cv-mock-clinic-image"
              style={{ backgroundImage: image ? `url(${image})` : undefined }}
            />
            <div className="cv-mock-clinic-copy">
              <span className="cv-mock-label">Modern care · Clear answers</span>
              <h3>A calmer clinic experience.</h3>
              <span className="cv-mock-btn">Request an appointment</span>
            </div>
          </div>
          <div className="cv-mock-strip">
            <span>General dentistry</span>
            <span>Cosmetic</span>
            <span>Family care</span>
          </div>
        </div>
      )}

      {variant === 'restaurant' && (
        <div className="cv-mock cv-mock-restaurant">
          <div
            className="cv-mock-restaurant-hero"
            style={{ backgroundImage: image ? `url(${image})` : undefined }}
          >
            <div className="cv-mock-nav">
              <strong>Ember & Oak</strong>
              <span>Menu</span>
              <span>Story</span>
              <span>Reserve</span>
            </div>
            <div className="cv-mock-restaurant-copy">
              <span className="cv-mock-label">Seasonal kitchen · Dar es Salaam</span>
              <h3>Fire, flavour, and a table waiting.</h3>
            </div>
          </div>
          <div className="cv-mock-strip">
            <span>Dinner menu</span>
            <span>Private dining</span>
            <span>Reservations</span>
          </div>
        </div>
      )}
    </div>
  );
}
