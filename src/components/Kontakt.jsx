import './Kontakt.css'

function Kontakt({ email, telefon }) {
  return (
    <section id="kontakt" className="kontakt page-route">
      <div className="kontakt-box">
        <h2>Kontakt</h2>
        <p className="kontakt-subtitle">Hör av dig så hör jag av mig!</p>

        <div className="kontakt-grid">
          {/* Left column: quick contact info boxes */}
          <div className="kontakt-info-list">
            <div className="kontakt-info-row">
              <p className="kontakt-info-heading">Email:</p>
              <a className="kontakt-info-item" href={'mailto:' + email}>
                {email}
              </a>
            </div>
            <div className="kontakt-info-row">
              <p className="kontakt-info-heading">Telefonnummer:</p>
              <a className="kontakt-info-item" href={'tel:' + telefon}>
                {telefon}
              </a>
            </div>
            <div className="kontakt-info-row">
              <p className="kontakt-info-heading">Plats:</p>
              <div className="kontakt-info-item">Helsingborg, Sverige</div>
            </div>
          </div>

          {/* Right column: simple contact form */}
          <form className="kontakt-form">
            <input className="kontakt-input" type="text" placeholder="Ditt namn" />
            <input className="kontakt-input" type="email" placeholder="Din e-post" />
            <textarea
              className="kontakt-textarea"
              placeholder="Ditt meddelande"
              rows="5"
            />
            <button className="kontakt-button" type="submit">
              Skicka
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Kontakt
