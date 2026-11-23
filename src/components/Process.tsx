import { process } from '@/config/site'
import { Icon } from './Icons'
import { Reveal, SectionHeading } from './Reveal'

export function Process({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="process" className="relative py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        {showHeading && (
          <SectionHeading
            eyebrow="How we work"
            title="A simple, transparent process"
            description="Four steps, clear milestones and a live preview link throughout."
          />
        )}
        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          {/* connecting line (desktop) */}
          <div
            className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-mint/50 via-iris/50 to-mint/50 lg:block"
            aria-hidden="true"
          />
          {/* connecting line (mobile) */}
          <div
            className="absolute top-7 bottom-7 left-7 w-px bg-gradient-to-b from-mint/50 to-iris/50 lg:hidden"
            aria-hidden="true"
          />
          {process.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 100} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white text-teal-700 shadow-[0_0_0_6px_var(--color-paper)]">
                  <Icon name={step.icon} size={22} />
                </span>
                <div>
                  <p className="font-mono text-xs text-iris">0{i + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[16rem]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
