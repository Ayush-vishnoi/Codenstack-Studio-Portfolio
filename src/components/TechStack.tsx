import { techStack } from '@/config/site'
import { Reveal, SectionHeading } from './Reveal'

export function TechStack({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="tech" className="relative py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-5">
        {showHeading && (
          <SectionHeading
            eyebrow="Tech stack"
            title="Modern, proven tools"
            description="We pick boring, reliable technology where it matters and modern tooling where it speeds you up."
          />
        )}
        <Reveal className="card divide-y divide-slate-200 p-2">
          {techStack.map((g) => (
            <div key={g.group} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-6">
              <h3 className="w-28 shrink-0 font-mono text-xs tracking-widest text-muted uppercase">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-[13px] text-ink transition-colors hover:border-mint/40 hover:text-teal-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
