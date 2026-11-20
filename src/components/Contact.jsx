import { useEffect, useRef } from 'react'
import { Mail, MapPin, Linkedin, Calendar } from 'lucide-react'
import { config } from '../data/config.js'
import './Contact.css'

export default function Contact({ t }) {
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const els = [headerRef, contentRef]
    const observers = els.map(r => {
      const el = r.current
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
        { threshold: 0.1 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: t.contact.email,
      value: config.email,
      href: `mailto:${config.email}`,
      color: 'blue',
    },
    {
      icon: <MapPin size={20} />,
      label: t.contact.location,
      value: config.location,
      href: null,
      color: 'green',
    },
    {
      icon: <Linkedin size={20} />,
      label: t.contact.linkedin,
      value: 'LinkedIn Profile',
      href: config.linkedin,
      color: 'sky',
    },
  ]

  return (
    <section id="contact" className="section contact-section" aria-label="Contact">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
          <div className="divider" />
        </div>

        <div ref={contentRef} className="contact__inner reveal">
          {/* Left — description */}
          <div className="contact__left">
            <div className="contact__availability">
              <Calendar size={18} />
              <span>{t.contact.availability}</span>
            </div>

            <p className="contact__description">{t.contact.description}</p>
          </div>

          {/* Right — contact cards */}
          <div className="contact__right">
            {contactItems.map((item, i) => (
              <div key={i} className={`contact-item contact-item--${item.color}`}>
                <div className={`contact-item__icon contact-item__icon--${item.color}`}>
                  {item.icon}
                </div>
                <div className="contact-item__body">
                  <div className="contact-item__label">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="contact-item__value contact-item__value--link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-item__value">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
