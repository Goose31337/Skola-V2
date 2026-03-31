import { Link } from 'react-router-dom'
import homeMain from '../assets/home-main.svg'
import './Hero.css'

function Hero({ titel, beskrivning, buttonText }) {
  return (
    <section id="hero" className="hero">
      <span className="hero-shape hero-shape-1" />
      <span className="hero-shape hero-shape-2" />
      <span className="hero-shape hero-shape-3" />
      <div className="hero-inner">
        <div className="hero-row">
          <div className="hero-copy">
            <h2 className="hero-title gradient-heading">{titel}</h2>
            <p className="hero-text">{beskrivning}</p>
            <Link className="hero-button" to="/projekt">
              {buttonText}
            </Link>
          </div>
          <div className="hero-art">
            <img
              src={homeMain}
              alt=""
              className="hero-img"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
