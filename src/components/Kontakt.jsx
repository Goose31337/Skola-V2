import './Kontakt.css'

function Kontakt({ email, telefon, contactText }) {
  return (
    <section id="kontakt" className="kontakt page-route">
      <div className="kontakt-box">
        <h2>{contactText.title}</h2>
        <p className="kontakt-subtitle">{contactText.subtitle}</p>

        <div className="kontakt-grid">
          {/* Left column: quick contact info boxes */}
          <div className="kontakt-info-list">
            <div className="kontakt-info-row">
              <p className="kontakt-info-heading">{contactText.email}</p>
              <a className="kontakt-info-item" href={'mailto:' + email}>
                {email}
              </a>
            </div>
            <div className="kontakt-info-row">
              <p className="kontakt-info-heading">{contactText.phone}</p>
              <a className="kontakt-info-item" href={'tel:' + telefon}>
                {telefon}
              </a>
            </div>
            <div className="kontakt-info-row">
              <p className="kontakt-info-heading">{contactText.place}</p>
              <div className="kontakt-info-item">{contactText.placeValue}</div>
            </div>
          </div>

          {/* Right column: simple contact form */}
          <form className="kontakt-form">
            <input
              className="kontakt-input"
              type="text"
              placeholder={contactText.namePlaceholder}
            />
            <input
              className="kontakt-input"
              type="email"
              placeholder={contactText.emailPlaceholder}
            />
            <textarea
              className="kontakt-textarea"
              placeholder={contactText.messagePlaceholder}
              rows="5"
            />
            <button className="kontakt-button" type="submit">
              {contactText.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Kontakt
