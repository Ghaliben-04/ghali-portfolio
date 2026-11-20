import { useEffect, useRef } from 'react'
import { Cloud, Code2, Brain, Eye } from 'lucide-react'
import { config } from '../data/config.js'
import './About.css'

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

export default function About({ t, lang }) {
  const headerRef  = useRef(null)
  const introRef   = useRef(null)
  const pillarsRef = useRef(null)
  useReveal(headerRef)
  useReveal(introRef)
  useReveal(pillarsRef)

  const { about } = t

  const pillars = [
    {
      icon: <Cloud size={24} />,
      title: about.axes.cloud.title,
      desc: about.axes.cloud.desc,
      tags: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
      color: 'blue',
    },
    {
      icon: <Code2 size={24} />,
      title: about.axes.software.title,
      desc: about.axes.software.desc,
      tags: ['Java', 'Spring Boot', 'React', 'Python', 'Microservices'],
      color: 'green',
    },
    {
      icon: <Brain size={24} />,
      title: about.axes.ai.title,
      desc: about.axes.ai.desc,
      tags: ['LLMs', 'NLP', 'AWS Bedrock', 'OpenAI', 'SageMaker'],
      color: 'purple',
    },
  ]

  return (
    <section id="about" className="section section--alt about-section" aria-label={about.label}>
      <div className="container">

        {/* ── Header ── */}
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">{about.label}</span>
          <h2 className="section-title">{about.title}</h2>
          <div className="divider" />
        </div>

        {/* ── Intro éditoriale ── */}
        <div ref={introRef} className="about__intro reveal">
          <p className="about__lead">{about.description1}</p>
          <p className="about__body">{about.description3}</p>
          <div className="about__cta">
            <a
              href={lang === 'fr' ? config.cvFr : config.cvEn}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline about__btn-cv"
            >
              <Eye size={16} />
              {t.hero.cta.previewCV}
            </a>
          </div>
        </div>

        {/* ── Piliers ── */}
        <div ref={pillarsRef} className="about__pillars reveal">
          <h3 className="about__pillars-title">{about.axes.title}</h3>
          <div className="about__pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className={`about__pillar about__pillar--${p.color}`}>
                <div className="about__pillar-icon">{p.icon}</div>
                <div className="about__pillar-body">
                  <h4 className="about__pillar-title">{p.title}</h4>
                  <p className="about__pillar-desc">{p.desc}</p>
                  <div className="about__pillar-tags">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="about__pillar-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
