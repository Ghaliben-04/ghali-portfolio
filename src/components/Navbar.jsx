import { useState, useEffect, useCallback } from 'react'
import { Download, Menu, X, Globe } from 'lucide-react'
import { config } from '../data/config.js'
import './Navbar.css'

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'certifications', href: '#certifications' },
  { key: 'education', href: '#education' },
  { key: 'contact', href: '#contact' },
]

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Detect scroll for sticky shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(l => document.getElementById(l.key))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleDownloadCV = useCallback(() => {
    const url = lang === 'fr' ? config.cvFr : config.cvEn
    const a = document.createElement('a')
    a.href = url
    a.download = lang === 'fr' ? 'Ghali-Benyahia-CV-FR.pdf' : 'Ghali-Benyahia-CV-EN.pdf'
    a.click()
  }, [lang])

  const toggleLang = useCallback(() => {
    const next = lang === 'fr' ? 'en' : 'fr'
    setLang(next)
    localStorage.setItem('portfolio-lang', next)
  }, [lang, setLang])

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
        <div className="container navbar__inner">
          {/* Spacer — logo supprimé */}
          <div aria-hidden="true" />

          {/* Desktop Navigation */}
          <nav className="navbar__nav" aria-label="Navigation principale">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className={`navbar__link${activeSection === link.key ? ' navbar__link--active' : ''}`}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="navbar__actions">
            {/* Language Switcher */}
            <button
              className="navbar__lang"
              onClick={toggleLang}
              aria-label={`Passer en ${lang === 'fr' ? 'anglais' : 'français'}`}
            >
              <Globe size={14} />
              <span className={lang === 'fr' ? 'navbar__lang-active' : ''}>FR</span>
              <span className="navbar__lang-sep">|</span>
              <span className={lang === 'en' ? 'navbar__lang-active' : ''}>EN</span>
            </button>

            {/* Download CV */}
            <button className="btn btn-primary btn-sm navbar__cv" onClick={handleDownloadCV}>
              <Download size={14} />
              {t.nav.downloadCV}
            </button>

            {/* Mobile hamburger */}
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`} role="dialog" aria-label="Menu mobile">
        <nav>
          {navLinks.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              className={`navbar__mobile-link${activeSection === link.key ? ' navbar__mobile-link--active' : ''}`}
              onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
        <div className="navbar__mobile-actions">
          <button className="navbar__lang navbar__lang--mobile" onClick={toggleLang}>
            <Globe size={14} />
            <span className={lang === 'fr' ? 'navbar__lang-active' : ''}>FR</span>
            <span className="navbar__lang-sep">|</span>
            <span className={lang === 'en' ? 'navbar__lang-active' : ''}>EN</span>
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleDownloadCV}>
            <Download size={14} />
            {t.nav.downloadCV}
          </button>
        </div>
      </div>
    </>
  )
}
