import { useEffect, useRef } from 'react'
import { ExternalLink, Award, Shield } from 'lucide-react'
import { certificationsData } from '../data/certifications.js'
import './Certifications.css'

function CertCard({ cert, t, index }) {
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

  const isFoundational = cert.level === 'foundational'

  return (
    <div ref={ref} className={`cert-card reveal delay-${(index % 3) + 1}`}>
      {/* Level bar */}
      <div className={`cert-card__level-bar cert-card__level-bar--${cert.level}`} />

      <div className="cert-card__body">
        {/* Badge image */}
        <div className="cert-card__image-wrap">
          <img
            src={cert.image}
            alt={`${cert.name}${cert.suffix ? ' — ' + cert.suffix : ''} badge`}
            className="cert-card__badge-img"
            loading="lazy"
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback si l'image ne charge pas */}
          <div className="cert-card__badge-fallback" style={{ display: 'none' }}>
            <Award size={40} className="cert-card__badge-fallback-icon" />
          </div>
        </div>

        {/* Level badge */}
        <div className="cert-card__level-badge">
          <span className={`badge ${isFoundational ? 'badge-sky' : 'badge-orange'}`}>
            {isFoundational ? (
              <><Shield size={10} /> {t.certifications.levels.foundational}</>
            ) : (
              <><Award size={10} /> {t.certifications.levels.associate}</>
            )}
          </span>
        </div>

        {/* Name */}
        <div className="cert-card__name-wrap">
          <h3 className="cert-card__name">{cert.name}</h3>
          {cert.suffix && <span className="cert-card__suffix">— {cert.suffix}</span>}
        </div>

        {/* Description */}
        <p className="cert-card__desc">{cert.description}</p>
      </div>

      {/* Footer */}
      <div className="cert-card__footer">
        <a
          href={cert.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm cert-card__verify-btn"
        >
          <ExternalLink size={13} />
          {t.certifications.viewBadge}
        </a>
      </div>
    </div>
  )
}

export default function Certifications({ t }) {
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
    <section id="certifications" className="section section--alt certifications-section" aria-label="Certifications">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">{t.certifications.title}</h2>
          <p className="section-subtitle">{t.certifications.subtitle}</p>
          <div className="divider" />
        </div>

        {/* Count banner */}
        <div className="certs__banner">
          <img
            src="/images/logos/amazonaws.svg"
            alt="AWS"
            className="certs__banner-aws-logo"
          />
          <div>
            <div className="certs__banner-count">6 AWS Certifications</div>
            <div className="certs__banner-desc">
              Solutions Architect · Developer · CloudOps Engineer · ML Engineer · Cloud Practitioner · AI Practitioner
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="certs__grid">
          {certificationsData.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
