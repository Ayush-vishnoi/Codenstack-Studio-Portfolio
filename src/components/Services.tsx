import { services } from '@/config/site'
import { Icon } from './Icons'
import { Reveal, SectionHeading } from './Reveal'

export function Services({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="relative py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        {showHeading && (
          <SectionHeading
            eyebrow="Services"
            title="What we can build for you"
            description="From the first sketch to production — focused on software that solves a real business problem."
          />
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card group h-full p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-mint/20 to-iris/25 text-teal-700 ring-1 ring-slate-900/5 transition-transform duration-300 group-hover:scale-105">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-5 space-y-1.5 border-t border-slate-200 pt-4 text-sm text-ink/80">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-iris" /> {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
