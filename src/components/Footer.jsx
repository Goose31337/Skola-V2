import './Footer.css'

function Footer({ namn, footerText }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-line">
        {footerText.builtBy} {namn}
      </p>
      <p className="footer-copy">
        {footerText.copyright} © {year} {namn}
      </p>
    </footer>
  )
}

export default Footer

