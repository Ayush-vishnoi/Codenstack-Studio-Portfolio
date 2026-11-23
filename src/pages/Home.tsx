import { Link } from 'react-router'
import { principles, process, services } from '@/config/site'
import { CtaBand } from '@/components/CtaBand'
import { Hero } from '@/components/Hero'
import { Icon } from '@/components/Icons'
import { usePageMeta } from '@/components/PageHeader'
import { Reveal, SectionHeading } from '@/components/Reveal'

export default function Home() {
  usePageMeta(
    'Codenstack | Software studio for growing businesses',
    'Codenstack is a small, focused software studio building custom web apps, dashboards and AI automation for growing businesses.',
  )

  return (
    <>
      <Hero />

      {/* Brand statement */}
      <section className="py-10 md:py-12">
        <Reveal className="mx-auto max-w-4xl px-5">
          <p className="font-mono text-xs tracking-[0.25em] text-teal-700 uppercase">Why Codenstack</p>
          <p className="mt-6 text-2xl leading-snug font-semibold tracking-tight text-navy text-pretty md:text-[2.1rem] md:leading-[1.3]">
            We’re a small studio on purpose. That means fewer meetings, faster decisions, and the person you talk to is{' '}
            <span className="mark mark-teal">the person writing your code</span>. We’d rather build one thing well than
            promise ten.
          </p>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="What you can expect"
            title="How we earn your trust"
            description="Simple commitments we keep on every engagement, big or small."
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80} className="h-full">
                <div className="h-full bg-white p-7 md:p-9">
                  <span className="grid size-11 place-items-center rounded-xl bg-mint/15 text-teal-700">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.25em] text-teal-700 uppercase">What we do</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">Services</h2>
            </Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-iris hover:text-indigo-700"
            >
              See services & our work <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {services.map((s, i) => (
              <li key={s.title}>
                <Link
                  to="/services"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 md:grid-cols-[3rem_1fr_1.2fr_auto] md:gap-8"
                >
                  <span className="font-mono text-sm text-slate-400">0{i + 1}</span>
                  <span className="text-lg font-bold text-navy transition-colors group-hover:text-teal-700 md:text-xl">
                    {s.title}
                  </span>
                  <span className="hidden text-muted md:block">{s.description}</span>
                  <Icon
                    name="arrowRight"
                    size={20}
                    className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-teal-700"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process snapshot */}
      <section className="pb-10 md:pb-12">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="card p-7 md:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <h2 className="text-2xl font-bold tracking-tight text-navy">A clear, four-step process</h2>
              <Link
                to="/process"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-iris hover:text-indigo-700"
              >
                How we work <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <li key={step.title} className="border-l-2 border-mint/60 pl-4">
                  <p className="font-mono text-xs text-iris">0{i + 1}</p>
                  <p className="mt-1 font-bold text-navy">{step.title}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
