import { useState, type FormEvent, type ReactNode } from 'react'
import { site } from '@/config/site'
import { Icon } from './Icons'
import { Reveal, SectionHeading } from './Reveal'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [usedMailto, setUsedMailto] = useState(false)
  const { contact } = site

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Honeypot: bots fill hidden fields
    if (data.botcheck) return

    // No endpoint configured — hand the message to the visitor's email client.
    if (!contact.formEndpoint) {
      const subject = `New enquiry from ${data.name}`
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Project type: ${data.projectType}`,
        '',
        String(data.message ?? ''),
      ].join('\n')
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setUsedMailto(true)
      setStatus('success')
      return
    }

    setStatus('sending')
    setError('')
    try {
      const payload: Record<string, unknown> = {
        ...data,
        _subject: `New enquiry from ${data.name}`,
      }
      if (contact.web3formsKey) payload.access_key = contact.web3formsKey
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      setUsedMailto(false)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setError(`Something went wrong. Please try again or email ${contact.email}.`)
    }
  }

  const hasSocial = Boolean(contact.linkedin || contact.github)

  return (
    <section id="contact" className="relative py-10 md:py-12">
      <div className="relative mx-auto max-w-6xl px-5">
        {showHeading && (
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            description="Tell us a little about your project. No sales pitch — just a straight answer on whether we can help."
          />
        )}

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="relative flex flex-col gap-7 overflow-hidden rounded-2xl bg-navy p-6 text-slate-300 md:p-8">
            <img
              src="/brand/codenstack-icon.svg"
              alt=""
              width={56}
              height={56}
              loading="lazy"
              className="size-14 rounded-xl ring-1 ring-white/10"
            />
            <div>
              <p className="text-sm text-slate-400">Email us directly</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white underline-offset-4 hover:text-mint hover:underline"
              >
                <Icon name="mail" size={18} className="text-mint" /> {contact.email}
              </a>
            </div>
            {hasSocial && (
              <div>
                <p className="text-sm text-slate-400">Find us on</p>
                <div className="mt-2 flex gap-2">
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark px-4 py-2 text-sm"
                    >
                      <Icon name="linkedin" size={16} /> LinkedIn
                    </a>
                  )}
                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark px-4 py-2 text-sm"
                    >
                      <Icon name="github" size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
            <p className="mt-auto flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-slate-300">
              <Icon name="clock" size={16} className="text-mint" /> {contact.replyTime}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="card grid gap-5 p-6 md:p-8" noValidate={false}>
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input id="name" name="name" required autoComplete="name" className="input" placeholder="Your name" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="input"
                    placeholder="you@company.com"
                  />
                </Field>
              </div>
              <Field label="Project type" htmlFor="projectType">
                <select id="projectType" name="projectType" required defaultValue="" className="input">
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {contact.projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input resize-y"
                  placeholder="What are you looking to build?"
                />
              </Field>

              <button type="submit" disabled={status === 'sending'} className="btn-primary justify-center py-3.5">
                {status === 'sending' ? 'Sending…' : 'Send message'}
                {status !== 'sending' && <Icon name="arrowRight" size={18} />}
              </button>

              <p aria-live="polite" className="min-h-5 text-sm">
                {status === 'success' && (
                  <span className="text-teal-700">
                    {usedMailto
                      ? `Your email app should open with the message ready to send. If it didn't, email us at ${contact.email}.`
                      : "Thanks! Your message has been sent — we'll get back to you soon."}
                  </span>
                )}
                {status === 'error' && <span className="text-rose-600">{error}</span>}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  )
}
