import { Link } from 'react-router'
import { site } from '@/config/site'
import { Icon } from './Icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-10 md:pt-20 md:pb-16">
      {/* Background: faint blueprint grid on warm paper */}
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="hero-in">
          <p className="font-mono text-xs tracking-[0.3em] text-slate-500 uppercase">{site.tagline}</p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-navy text-balance sm:text-5xl lg:text-[3.5rem]">
            Software that helps <span className="mark mark-teal">growing businesses</span> work{' '}
            <span className="mark mark-iris">smarter</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Codenstack is a small, focused software studio. We design and build custom web apps, dashboards and AI
            automation, and we stay with you long after launch.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/services" className="btn-primary justify-center px-6 py-3.5">
              Explore Services <Icon name="arrowRight" size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary justify-center px-6 py-3.5">
              Contact Us
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-teal-500" />
              </span>
              Direct line to the developer
            </li>
            <li className="flex items-center gap-2">
              <Icon name="check" size={16} className="text-iris" />
              Weekly progress you can see
            </li>
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="hero-in relative mx-auto w-full max-w-[400px] [animation-delay:150ms]" aria-hidden="true">
      {/* Brand animated logo — file lives at /public/brand/codenstack-animated.svg */}
      <img
        src={site.logo.animated}
        alt=""
        width={512}
        height={512}
        fetchPriority="high"
        className="relative mx-auto aspect-square w-[82%] shadow-[0_40px_80px_-30px_rgba(30,27,75,0.55)] [border-radius:22%]"
      />

      <div className="absolute -bottom-8 -left-2 w-64 rounded-xl border border-slate-200 bg-white p-4 font-mono text-[12px] leading-relaxed shadow-xl shadow-slate-900/10 sm:-left-6">
        <p className="text-slate-800">
          <span className="text-teal-600">$</span> codenstack deploy
        </p>
        <p className="text-slate-500">
          <span className="text-iris">✓</span> discover · design · build
        </p>
        <p className="text-slate-500">
          <span className="text-iris">✓</span> live in production<span className="caret">_</span>
        </p>
      </div>
    </div>
  )
}
