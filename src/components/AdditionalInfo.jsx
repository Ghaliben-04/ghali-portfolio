import { useEffect, useRef } from 'react'
import { Languages, Users, Flag } from 'lucide-react'
import './AdditionalInfo.css'

const languagesData = [
  { name: 'Français', nameEn: 'French', level: 'Courant', levelEn: 'Fluent', percent: 100, code: 'FR' },
  { name: 'Anglais', nameEn: 'English', level: 'B2', levelEn: 'B2', percent: 70, code: 'EN' },
  { name: 'Arabe', nameEn: 'Arabic', level: 'Langue maternelle', levelEn: 'Native', percent: 100, code: 'AR' },
]

const activitiesData = [
  {
    title: 'Cellule Sponsoring – Club IT, ENSIAS',
    titleEn: 'Sponsoring Cell – IT Club, ENSIAS',
    description: 'Prospection et mise en relation avec des partenaires pour soutenir le financement des événements du club.',
    descriptionEn: 'Outreach and partnership building to support the funding of club events.',
  },
]

export default function AdditionalInfo({ t, lang }) {
  const headerRef = useRef(null)
  const langRef = useRef(null)
  const actRef = useRef(null)

  useEffect(() => {
    const els = [headerRef, langRef, actRef]
    const observers = els.map(r => {
      const el = r.current
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
        { threshold: 0.08 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section id="additional" className="section additional-section" aria-label="Informations complémentaires">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">More</span>
          <h2 className="section-title">{t.additional.title}</h2>
          <div className="divider" />
        </div>

        <div className="additional__grid">
          {/* Languages */}
          <div ref={langRef} className="additional__card reveal">
            <div className="additional__card-header">
              <div className="additional__card-icon">
                <Languages size={20} />
              </div>
              <h3 className="additional__card-title">{t.additional.languages}</h3>
            </div>
            <div className="additional__languages">
              {languagesData.map((l, i) => (
                <div key={i} className="lang-item">
                  <div className="lang-item__header">
                    <span className="lang-item__code">{l.code}</span>
                    <span className="lang-item__name">{lang === 'fr' ? l.name : l.nameEn}</span>
                    <span className="lang-item__level">{lang === 'fr' ? l.level : l.levelEn}</span>
                  </div>
                  <div className="lang-item__bar">
                    <div
                      className="lang-item__bar-fill"
                      style={{ width: `${l.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div ref={actRef} className="additional__card reveal delay-1">
            <div className="additional__card-header">
              <div className="additional__card-icon additional__card-icon--green">
                <Users size={20} />
              </div>
              <h3 className="additional__card-title">{t.additional.activities}</h3>
            </div>
            <div className="additional__activities">
              {activitiesData.map((a, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-item__icon-wrap">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="activity-item__title">
                      {lang === 'fr' ? a.title : a.titleEn}
                    </div>
                    <p className="activity-item__desc">
                      {lang === 'fr' ? a.description : a.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
