import { useState, useEffect, useRef } from 'react'
import { Github, X, Tag, ChevronRight, Bot, Cloud, Code2 } from 'lucide-react'
import './Projects.css'

const CATEGORY_ICONS = {
  ai:        <Bot size={18} />,
  cloud:     <Cloud size={18} />,
  fullstack: <Code2 size={18} />,
}

const CATEGORY_COLORS = {
  ai: 'purple',
  cloud: 'blue',
  fullstack: 'green',
}

function ProjectCard({ project, t, onOpen }) {
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

  const colorClass = CATEGORY_COLORS[project.category] || 'blue'

  return (
    <div ref={ref} className={`project-card reveal`}>
      {/* Top bar */}
      <div className={`project-card__top project-card__top--${colorClass}`}>
        <span className="project-card__icon" aria-hidden="true">{CATEGORY_ICONS[project.category]}</span>
        <span className="project-card__category-label">{project.categoryLabel}</span>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDesc}</p>

        {/* Tech badges */}
        <div className="project-card__tech">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span key={i} className={`badge badge-${colorClass === 'blue' ? 'blue' : colorClass === 'green' ? 'green' : 'purple'}`}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="badge badge-blue">+{project.technologies.length - 5}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <button
          className="btn btn-outline btn-sm project-card__btn"
          onClick={() => onOpen(project)}
        >
          {t.projects.viewDetails}
          <ChevronRight size={14} />
        </button>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            aria-label={`GitHub — ${project.title}`}
          >
            <Github size={14} />
            {t.projects.viewGithub}
          </a>
        ) : (
          <span className="project-card__github-na" title="URL GitHub à configurer">
            <Github size={14} />
          </span>
        )}
      </div>
    </div>
  )
}

function ProjectModal({ project, t, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const colorClass = CATEGORY_COLORS[project.category] || 'blue'

  return (
    <div
      className="modal-backdrop"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal">
        {/* Close */}
        <button className="modal__close" onClick={onClose} aria-label={t.projects.closeModal}>
          <X size={20} />
        </button>

        {/* Header */}
        <div className={`modal__header modal__header--${colorClass}`}>
          <span className="modal__icon" aria-hidden="true">{CATEGORY_ICONS[project.category]}</span>
          <div>
            <h2 className="modal__title">{project.title}</h2>
            <p className="modal__category">{project.categoryLabel}</p>
          </div>
        </div>

        {/* Body */}
        <div className="modal__body">
          {/* Description */}
          <p className="modal__description">{project.description}</p>

          {/* Technologies */}
          <div className="modal__section">
            <h4 className="modal__section-title">
              <Tag size={14} />
              {t.projects.technologies}
            </h4>
            <div className="modal__tech-list">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge badge-blue">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ t }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
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

  const filters = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'cloud', label: t.projects.filters.cloud },
    { key: 'fullstack', label: t.projects.filters.fullstack },
    { key: 'ai', label: t.projects.filters.ai },
  ]

  const filtered = activeFilter === 'all'
    ? t.projects.items
    : t.projects.items.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section section--alt projects-section" aria-label="Projets">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
          <div className="divider" />
        </div>

        {/* Filters */}
        <div className="projects__filters" role="group" aria-label="Filtres par catégorie">
          {filters.map(f => (
            <button
              key={f.key}
              className={`projects__filter-btn${activeFilter === f.key ? ' projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
              aria-pressed={activeFilter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              t={t}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          t={t}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
