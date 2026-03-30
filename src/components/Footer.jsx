import './Footer.css'

function Footer({ namn }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-line">Designad och utvecklad av {namn}</p>
      <p className="footer-copy">Upphovsrätt © {year} {namn}</p>
    </footer>
  )
}

export default Footer

