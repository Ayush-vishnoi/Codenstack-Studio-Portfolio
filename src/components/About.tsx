import { founder, site, stats } from '@/config/site'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="relative py-10 md:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-mint/35" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-white">
              {founder.photo ? (
                <img
                  src={founder.photo}
                  alt={`Portrait of ${founder.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                // REPLACE: set founder.photo in src/config/site.ts
                <div
                  className="hero-grid flex h-full flex-col items-center justify-center gap-3 text-center"
                  role="img"
                  aria-label={`Photo placeholder for ${founder.name}`}
                >
                  <span className="grid size-24 place-items-center rounded-full bg-gradient-to-br from-mint to-iris text-3xl font-bold text-white">
                    AV
                  </span>
                  <span className="font-mono text-xs text-muted">photo coming soon</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-center shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-navy">{founder.name}</p>
              <p className="text-xs text-muted">{founder.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="font-mono text-xs tracking-[0.2em] text-teal-700 uppercase">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">Small studio. Real software.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {founder.bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="card p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl text-navy font-extrabold">{s.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          {site.contact.linkedin && (
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-teal-700"
            >
              <Icon name="linkedin" size={16} /> Connect on LinkedIn
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
