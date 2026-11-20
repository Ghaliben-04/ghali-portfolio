import { useEffect, useRef } from 'react'
import { MapPin, GraduationCap, CalendarDays } from 'lucide-react'
import './Education.css'

const educationItems = [
  {
    id: 'cpge',
    index: 1,
    school: 'Classes Préparatoires – La Résidence',
    degree: 'PCSI / PSI*',
    degreeEn: 'CPGE – PCSI / PSI*',
    specialty: null,
    specialtyEn: null,
    period: '2022 – 2024',
    periodEn: '2022 – 2024',
    location: 'Casablanca, Maroc',
    locationEn: 'Casablanca, Morocco',
    color: 'purple',
    current: false,
  },
  {
    id: 'ensias',
    index: 2,
    school: 'ENSIAS',
    degree: "Diplôme d'Ingénieur d'État — Génie Logiciel",
    degreeEn: 'State Engineering Degree — Software Engineering',
    specialty: null,
    specialtyEn: null,
    period: '2024 – 2026',
    periodEn: '2024 – 2026',
    location: 'Rabat, Maroc',
    locationEn: 'Rabat, Morocco',
    color: 'green',
    current: false,
  },
  {
    id: 'enseeiht',
    index: 3,
    school: 'Toulouse INP – ENSEEIHT',
    degree: "Double diplôme d'Ingénieur — Sciences du Numérique",
    degreeEn: 'Double Engineering Degree — Digital Sciences',
    specialty: 'Parcours Systèmes Logiciels',
    specialtyEn: 'Software Systems Track',
    period: '2026 – Présent',
    periodEn: '2026 – Present',
    location: 'Toulouse, France',
    locationEn: 'Toulouse, France',
    color: 'blue',
    current: true,
  },
]

const COLOR_MAP = {
  blue:   { accent: '#2563EB', light: 'rgba(37,99,235,0.07)',  border: 'rgba(37,99,235,0.18)' },
  green:  { accent: '#16A34A', light: 'rgba(34,197,94,0.07)',  border: 'rgba(34,197,94,0.18)' },
  purple: { accent: '#7C3AED', light: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)' },
}

function EduCard({ item, lang, isLast }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const degree   = lang === 'fr' ? item.degree   : item.degreeEn
  const specialty = lang === 'fr' ? item.specialty : item.specialtyEn
  const period   = lang === 'fr' ? item.period    : item.periodEn
  const location = lang === 'fr' ? item.location  : item.locationEn
  const c = COLOR_MAP[item.color]

  return (
    <div
      ref={ref}
      className={`edu-entry reveal${item.current ? ' edu-entry--current' : ''}`}
      style={{
        '--edu-accent': c.accent,
        '--edu-light': c.light,
        '--edu-border': c.border,
      }}
    >
      {/* Timeline column */}
      <div className="edu-entry__timeline">
        <div className="edu-entry__node">
          <span className="edu-entry__node-num">{item.index}</span>
        </div>
        {!isLast && <div className="edu-entry__connector" />}
      </div>

      {/* Card */}
      <div className="edu-entry__card">
        {/* Top accent */}
        <div className="edu-entry__card-top" />

        <div className="edu-entry__card-body">
          {/* Period row */}
          <div className="edu-entry__period-row">
            <div className="edu-entry__period">
              <CalendarDays size={13} />
              {period}
            </div>
            {item.current && (
              <div className="edu-entry__current-badge">
                <span className="edu-entry__current-dot" />
                {lang === 'fr' ? 'En cours' : 'Current'}
              </div>
            )}
          </div>

          {/* School */}
          <h3 className="edu-entry__school">{item.school}</h3>

          {/* Degree */}
          <p className="edu-entry__degree">
            <GraduationCap size={15} />
            {degree}
          </p>

          {/* Specialty */}
          {specialty && (
            <p className="edu-entry__specialty">{specialty}</p>
          )}

          {/* Location */}
          <div className="edu-entry__location">
            <MapPin size={13} />
            {location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Education({ t, lang }) {
  const headerRef = useRef(null)
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="education" className="section section--alt education-section" aria-label="Formation">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title">{t.education.title}</h2>
          <p className="section-subtitle">{t.education.subtitle}</p>
          <div className="divider" />
        </div>

        <div className="edu-timeline">
          {educationItems.map((item, i) => (
            <EduCard
              key={item.id}
              item={item}
              lang={lang}
              isLast={i === educationItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
