import './IntroLanding.css'

function IntroLanding() {
  return (
    // First screen users see on home page.
    <section className="intro-landing" aria-label="Intro section">
      <span className="intro-shape intro-shape-1" />
      <span className="intro-shape intro-shape-2" />
      <span className="intro-shape intro-shape-3" />
      <div className="intro-overlay" />
      <div className="intro-content">
        <h2 className="intro-title">Skapa. Bygg. Inspirera.</h2>
        <p className="intro-text">"Vision without execution is hallucination."</p>
        <p className="intro-quote-author">- Thomas Edison</p>
      </div>
      <div className="intro-scroll-hint" aria-hidden="true">
        SCROLL TO SEE MORE
      </div>
    </section>
  )
}

export default IntroLanding
