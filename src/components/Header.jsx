import './Header.css'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Header({ namn, titel, isDark, onThemeToggle }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-brand">
          <h1 className="header-logo">{namn}</h1>
          <p className="header-title">{titel}</p>
        </div>
        <ThemeToggle isDark={isDark} onChange={onThemeToggle} />
      </div>

      <nav aria-label="Main navigation">
        <ul className="header-nav">
          <li>
            <Link className="header-link" to="/">
              Hem
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/om-mig">
              Om mig
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/projekt">
              Projekt
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/kontakt">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/socials">
              Socials
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

