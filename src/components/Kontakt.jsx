import './Kontakt.css'

function Kontakt({ email, telefon }) {
  return (
    <section id="kontakt" className="kontakt page-route">
      <div className="kontakt-box">
        <h2>Kontakt</h2>
        <p className="kontakt-text">
          Hör av dig så hör jag av mig! Email:{' '}
          <a href={'mailto:' + email}>{email}</a>
        </p>
        <p className="kontakt-text">
          Telefonnummer: <a href={'tel:' + telefon}>{telefon}</a>
        </p>

        <div className="kontakt-availability">
          <h3>Tillgänglighet</h3>
          <p>Måndag - Fredag: 10.00 - 12.00 (tillgänglig)</p>
          <p>Lördag - Söndag: Ej tillgänglig</p>
        </div>

        <form className="kontakt-form">
          <input className="kontakt-input" type="text" placeholder="Ditt Namn" />
          <input className="kontakt-input" type="email" placeholder="Din E-post" />
          <textarea
            className="kontakt-textarea"
            placeholder="Ditt Meddelande"
            rows="5"
          />
          <button className="kontakt-button" type="submit">
            Skicka
          </button>
        </form>
      </div>
    </section>
  )
}

export default Kontakt
