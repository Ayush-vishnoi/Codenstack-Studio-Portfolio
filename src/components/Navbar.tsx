import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navLinks } from '@/config/site'
import { Icon } from './Icons'
import { Logo } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200 bg-white/90 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18" aria-label="Main">
        <Link to="/" className="rounded-lg" aria-label="Codenstack home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-navy ${
                    isActive
                      ? 'text-navy after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-mint'
                      : 'text-muted'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
            Contact Us
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-navy hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <ul className="space-y-1 border-t border-slate-200 px-5 pt-3 pb-5">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-slate-100 text-navy' : 'text-ink hover:bg-slate-100'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <Link to="/contact" className="btn-primary w-full justify-center py-3">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
