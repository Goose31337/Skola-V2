import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Kontakt from './components/Kontakt'
import Hero from './components/Hero'
import ProjektLista from './components/ProjektLista'
import OmMig from './components/OmMig'
import Socials from './components/Socials'
import IntroLanding from './components/IntroLanding'
import data from './data'
import translations from './translations'

function getSavedTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') {
    return saved
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function App() {
  const [theme, setTheme] = useState(function () {
    return getSavedTheme()
  })
  const [lang, setLang] = useState(function () {
    const saved = localStorage.getItem('lang')
    return saved === 'en' ? 'en' : 'sv'
  })
  const t = translations[lang]

  useEffect(function () {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(function () {
    localStorage.setItem('lang', lang)
  }, [lang])

  function handleThemeToggle(isDark) {
    if (isDark) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(function () {
    function handleMouseMove(e) {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px')
      document.documentElement.style.setProperty('--my', e.clientY + 'px')
    }

    window.addEventListener('mousemove', handleMouseMove)

    return function () {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="page">
      <div className="mouse-light" />

      <Header
        namn={data.namn}
        isDark={theme === 'dark'}
        onThemeToggle={handleThemeToggle}
        lang={lang}
        onLangChange={setLang}
        navLabels={t.nav}
      />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-stack">
                {/* Intro section first, current homepage content below */}
                <IntroLanding introText={t.intro} />
                <section id="home-content" className="home-content">
                  <Hero
                    titel={t.data.title}
                    beskrivning={t.data.description}
                    buttonText={t.hero.button}
                  />
                </section>
              </div>
            }
          />
          <Route path="/projekt" element={<ProjektLista projectText={t.project} />} />
          <Route
            path="/kontakt"
            element={<Kontakt email={data.email} telefon={data.telefon} contactText={t.contact} />}
          />
          <Route path="/socials" element={<Socials socialsText={t.socials} />} />
          <Route path="/om-mig" element={<OmMig lang={lang} />} />
        </Routes>
      </main>

      <Footer namn={data.namn} footerText={t.footer} />
    </div>
  )
}

export default App
