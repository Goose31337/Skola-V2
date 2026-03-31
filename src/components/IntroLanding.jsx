import './IntroLanding.css'

function IntroLanding({ introText }) {
  return (
    // First screen users see on home page.
    <section className="intro-landing" aria-label="Intro section">
      <span className="intro-shape intro-shape-1" />
      <span className="intro-shape intro-shape-2" />
      <span className="intro-shape intro-shape-3" />
      <div className="intro-overlay" />
      <div className="intro-content">
        <h2 className="intro-title">{introText.title}</h2>
        <p className="intro-text">{introText.quote}</p>
        <p className="intro-quote-author">{introText.author}</p>
      </div>
      <div className="intro-scroll-hint" aria-hidden="true">
        {introText.scrollHint}
      </div>
    </section>
  )
}

export default IntroLanding
