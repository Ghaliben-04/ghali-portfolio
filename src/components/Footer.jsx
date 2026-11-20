import { Linkedin, ArrowUp } from 'lucide-react'
import { config } from '../data/config.js'
import './Footer.css'

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

export default function Footer({ t }) {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <p className="footer__tagline">{t.footer.tagline}</p>
          <div className="footer__socials">
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer__links">
          <h4 className="footer__links-title">{t.footer.quickLinks}</h4>
          <nav className="footer__nav" aria-label="Navigation pied de page">
            {navLinks.map(link => (
              <a key={link.key} href={link.href} className="footer__nav-link"
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}>
                {t.nav[link.key]}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact info */}
        <div className="footer__contact">
          <h4 className="footer__links-title">Contact</h4>
          <div className="footer__contact-items">
            <a href={`mailto:${config.email}`} className="footer__contact-item">
              {config.email}
            </a>
            <span className="footer__contact-item">{config.location}</span>
          </div>
          <div className="footer__built">
            <span>{t.footer.builtWith}</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copyright">
            © {year} Ghali Benyahia. {t.footer.rights}
          </span>
          <button className="footer__back-top" onClick={scrollToTop}
            aria-label={t.footer.backToTop}>
            <ArrowUp size={14} />
            {t.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  )
}
