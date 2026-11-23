import { Link } from 'react-router'
import { navLinks, site } from '@/config/site'
import { Icon } from './Icons'
import { Logo } from './Logo'

export function Footer() {
  const linkCls = 'flex items-center gap-2 text-slate-400 transition-colors hover:text-mint'
  return (
    <footer className="overflow-hidden bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            A small software studio building HRMS, e-commerce and AI voice solutions.
          </p>
          <p className="mt-3 font-mono text-[11px] tracking-[0.3em] text-slate-500 uppercase">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold text-white">Quick links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold text-white">Connect</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className={linkCls}>
                <Icon name="mail" size={16} /> {site.contact.email}
              </a>
            </li>
            {site.contact.linkedin && (
              <li>
                <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
              </li>
            )}
            {site.contact.github && (
              <li>
                <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <Icon name="github" size={16} /> GitHub
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-slate-500 md:text-left">
          © 2026 Codenstack. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
