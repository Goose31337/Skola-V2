import './Header.css'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Header({ namn, isDark, onThemeToggle, lang, onLangChange, navLabels }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-brand">
          <h1 className="header-logo">{namn}</h1>
        </div>
        <div className="header-controls">
          <div className="lang-switch" aria-label="Language switch">
            <button
              type="button"
              className={'lang-btn' + (lang === 'sv' ? ' lang-btn--active' : '')}
              onClick={function () {
                onLangChange('sv')
              }}
            >
              SV
            </button>
            <button
              type="button"
              className={'lang-btn' + (lang === 'en' ? ' lang-btn--active' : '')}
              onClick={function () {
                onLangChange('en')
              }}
            >
              EN
            </button>
          </div>
          <ThemeToggle isDark={isDark} onChange={onThemeToggle} />
        </div>
      </div>

      <nav aria-label="Main navigation">
        <ul className="header-nav">
          <li>
            <Link className="header-link" to="/">
              {navLabels.home}
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/om-mig">
              {navLabels.about}
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/projekt">
              {navLabels.projects}
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/kontakt">
              {navLabels.contact}
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/socials">
              {navLabels.socials}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

