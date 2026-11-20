import { useEffect, useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'
import './Experience.css'

// Composant logo OCP inline SVG
const OCPLogo = () => (
  <img
    src="/images/logos/ocp.svg"
    alt="OCP Group"
    className="exp-card__company-logo-img"
    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
  />
)

// Composant logo SecDojo
const SecDojoLogo = () => (
  <img
    src="/images/logos/secdojo.avif"
    alt="SecDojo"
    className="exp-card__company-logo-img"
    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
  />
)

const COMPANY_LOGOS = {
  ocp: <OCPLogo />,
  secdojo: <SecDojoLogo />,
}

function ExperienceCard({ exp, index, t }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const fallbackInitials = exp.company.substring(0, 2).toUpperCase()

  return (
    <div ref={ref} className={`exp-card reveal delay-${index + 1}`}>
      {/* Timeline dot */}
      <div className="exp-card__timeline">
        <div className="exp-card__dot" />
        {index < 1 && <div className="exp-card__line" />}
      </div>

      {/* Content */}
      <div className="exp-card__content">
        {/* Header */}
        <div className="exp-card__header">
          <div className="exp-card__company-wrap">
            {/* Logo container */}
            <div className="exp-card__logo-box">
              {COMPANY_LOGOS[exp.id] || null}
              {/* Fallback initiales */}
              <div
                className="exp-card__company-logo"
                style={{ display: COMPANY_LOGOS[exp.id] ? 'none' : 'flex' }}
              >
                {fallbackInitials}
              </div>
            </div>
            <div>
              <h3 className="exp-card__role">{exp.role}</h3>
              <div className="exp-card__company">{exp.company}</div>
            </div>
          </div>
          <div className="exp-card__meta">
            <span className="exp-card__meta-item">
              <Calendar size={13} />
              {exp.period}
            </span>
            <span className="exp-card__meta-item">
              <MapPin size={13} />
              {exp.location}
            </span>
            <span className="badge badge-sky exp-card__domain">{exp.domain}</span>
          </div>
        </div>

        {/* Description */}
        <p className="exp-card__description">{exp.description}</p>

        {/* Missions */}
        <div className="exp-card__missions">
          <h4 className="exp-card__missions-title">{t.experience.missions}</h4>
          <ul className="exp-card__missions-list">
            {exp.missions.map((m, i) => (
              <li key={i} className="exp-card__mission-item">
                <span className="exp-card__mission-dot" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="exp-card__tech">
          <span className="exp-card__tech-label">{t.experience.technologies}</span>
          <div className="exp-card__tech-list">
            {exp.technologies.map((tech, i) => (
              <span key={i} className="badge badge-blue">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience({ t }) {
  const headerRef = useRef(null)
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section experience-section" aria-label="Expériences professionnelles">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
          <div className="divider" />
        </div>

        <div className="exp-timeline">
          {t.experience.items.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
