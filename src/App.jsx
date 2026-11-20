import { useState, useEffect } from 'react'
import translations from './i18n/translations.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('portfolio-lang') || 'fr'
    } catch {
      return 'fr'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]

  return (
    <div className="app">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main id="main-content">
        <Hero t={t} lang={lang} />
        <About t={t} lang={lang} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Certifications t={t} />
        <Education t={t} lang={lang} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  )
}
