import './IntroLanding.css'

function IntroLanding() {
  return (
    // First screen users see on home page.
    <section className="intro-landing" aria-label="Intro section">
      <div className="intro-overlay" />
      <div className="intro-content">
        <p className="intro-kicker">Creative Portfolio</p>
        <h2 className="intro-title">Skapa. Bygg. Inspirera.</h2>
        <p className="intro-text">
          En stark startsektion som leder ner till din nuvarande hemsida.
        </p>
      </div>
      <div className="intro-scroll-hint" aria-hidden="true">
        SCROLL TO SEE MORE
      </div>
    </section>
  )
}

export default IntroLanding
