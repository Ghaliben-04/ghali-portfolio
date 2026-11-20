import { useState, useEffect } from 'react'
import { Download, ArrowDown, Linkedin, MapPin, Briefcase, GraduationCap, Eye } from 'lucide-react'
import { config } from '../data/config.js'
import './Hero.css'

export default function Hero({ t, lang }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  const roles = t.hero.roles

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex, roles])

  const handleDownloadCV = () => {
    const url = lang === 'fr' ? config.cvFr : config.cvEn
    const a = document.createElement('a')
    a.href = url
    a.download = lang === 'fr' ? 'Ghali-Benyahia-CV-FR.pdf' : 'Ghali-Benyahia-CV-EN.pdf'
    a.click()
  }

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToAbout   = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
        <div className="hero__bg-grid" />
      </div>

      <div className="container hero__inner">
        {/* ── Contenu texte ── */}
        <div className="hero__content">
          <p className="hero__greeting animate-fade-in-up">
            <span className="font-mono text-primary">$</span>
            &nbsp;{t.hero.greeting}
          </p>

          <h1 className="hero__name animate-fade-in-up delay-1">
            {t.hero.name}
          </h1>

          <div className="hero__role animate-fade-in-up delay-2" aria-live="polite">
            <span className="hero__role-text">{displayed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          <div className="hero__meta animate-fade-in-up delay-3">
            <span className="hero__meta-item">
              <MapPin size={14} />
              {t.hero.location}
            </span>
          </div>

          <p className="hero__description animate-fade-in-up delay-3">
            {t.hero.description}
          </p>

          <div className="hero__availability-wrap animate-fade-in-up delay-4">
            <div className="hero__availability">
              <Briefcase size={13} />
              <span>{t.hero.availability.internship}</span>
            </div>
            <div className="hero__availability hero__availability--secondary">
              <GraduationCap size={13} />
              <span>{t.hero.availability.apprenticeship}</span>
            </div>
          </div>

          <div className="hero__cta animate-fade-in-up delay-4">
            <button className="btn btn-primary hero__btn-cv" onClick={handleDownloadCV}>
              <Download size={16} />
              {t.hero.cta.downloadCV}
            </button>
            <a
              href={lang === 'fr' ? config.cvFr : config.cvEn}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hero__btn-cv-preview"
            >
              <Eye size={16} />
              {t.hero.cta.previewCV}
            </a>
            <button className="btn btn-outline" onClick={scrollToProjects}>
              {t.hero.cta.projects}
            </button>
          </div>

          <div className="hero__socials animate-fade-in-up delay-5">
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* ── Visuel photo ── */}
        <div className="hero__visual animate-fade-in delay-2">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar" aria-label="Photo de profil de Ghali Benyahia">
              <img src="/images/photo.jpg" alt="Ghali Benyahia" />
            </div>
          </div>

          {/* Badge AWS certifications */}
          <div className="hero__cert-badge">
            <img
              src="/images/logos/amazonaws.svg"
              alt="AWS"
              className="hero__cert-aws-logo"
            />
            <div>
              <div className="hero__cert-count">6×</div>
              <div className="hero__cert-label">AWS Certified</div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll-down"
        onClick={scrollToAbout}
        aria-label="Défiler vers le bas"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}
