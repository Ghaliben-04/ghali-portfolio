import { useEffect, useRef } from 'react'
import { Cloud, Server, Monitor, Cpu, Database } from 'lucide-react'
import { skillsData } from '../data/skills.js'
import './Skills.css'

const CATEGORY_ICONS = {
  cloud:     <Cloud size={18} />,
  server:    <Server size={18} />,
  monitor:   <Monitor size={18} />,
  cpu:       <Cpu size={18} />,
  database:  <Database size={18} />,
}

function SkillItem({ skill }) {
  const bgStyle = skill.logoBg
    ? { background: skill.logoBg + '18', border: `1px solid ${skill.logoBg}35` }
    : {}

  return (
    <div className="skill-item">
      {skill.logo ? (
        <div className="skill-item__logo-wrap" style={bgStyle}>
          <img
            src={skill.logo}
            alt={skill.name}
            className="skill-item__logo"
            loading="lazy"
            onError={e => { e.target.parentNode.style.display = 'none' }}
          />
        </div>
      ) : (
        <div className="skill-item__dot" aria-hidden="true" />
      )}
      <span className="skill-item__name">{skill.name}</span>
    </div>
  )
}

function SkillCategory({ data, label }) {
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

  return (
    <div ref={ref} className="skill-category reveal">
      <div className="skill-category__header">
        <span className="skill-category__icon" aria-hidden="true">
          {CATEGORY_ICONS[data.icon] || <Cloud size={18} />}
        </span>
        <h3 className="skill-category__title">{label}</h3>
      </div>
      <div className="skill-category__grid">
        {data.items.map((skill, i) => (
          <SkillItem key={i} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills({ t }) {
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

  const categories = [
    { key: 'cloud',     label: t.skills.categories.cloud },
    { key: 'backend',   label: t.skills.categories.backend },
    { key: 'frontend',  label: t.skills.categories.frontend },
    { key: 'ai',        label: t.skills.categories.ai },
    { key: 'databases', label: t.skills.categories.databases },
  ]

  return (
    <section id="skills" className="section skills-section" aria-label="Compétences techniques">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
          <div className="divider" />
        </div>

        <div className="skills__grid">
          {categories.map(({ key, label }) => (
            <SkillCategory key={key} data={skillsData[key]} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}
