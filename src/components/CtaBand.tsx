import { Link } from 'react-router'
import { site } from '@/config/site'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

/** Closing call-to-action shown at the bottom of most pages. */
export function CtaBand({
  title = 'Have an idea? Let’s talk it through.',
  text = 'Tell us what you want to build. You’ll get an honest answer on scope, timeline and whether we’re the right fit.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="px-5 pb-10 md:pb-12">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-8 rounded-3xl bg-navy p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div className="flex items-start gap-5">
          <img
            src={site.logo.icon}
            alt=""
            width={56}
            height={56}
            loading="lazy"
            className="hidden size-14 shrink-0 ring-1 ring-white/10 [border-radius:22%] sm:block"
          />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h2>
            <p className="mt-2 max-w-xl text-slate-400">{text}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn-primary justify-center px-6 py-3.5">
            Start a project <Icon name="arrowRight" size={18} />
          </Link>
          <a href={`mailto:${site.contact.email}`} className="btn-dark justify-center px-6 py-3.5">
            {site.contact.email}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
