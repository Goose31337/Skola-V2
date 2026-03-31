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

  useEffect(function () {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

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
        titel={data.titel}
        isDark={theme === 'dark'}
        onThemeToggle={handleThemeToggle}
      />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-stack">
                {/* Intro section first, current homepage content below */}
                <IntroLanding />
                <section id="home-content" className="home-content">
                  <Hero titel={data.titel} beskrivning={data.beskrivning} />
                </section>
              </div>
            }
          />
          <Route path="/projekt" element={<ProjektLista />} />
          <Route
            path="/kontakt"
            element={<Kontakt email={data.email} telefon={data.telefon} />}
          />
          <Route path="/socials" element={<Socials />} />
          <Route path="/om-mig" element={<OmMig />} />
        </Routes>
      </main>

      <Footer namn={data.namn} />
    </div>
  )
}

export default App
