import { useEffect, type ReactNode } from 'react'

/** Sets the browser tab title and meta description for each page (basic per-page SEO). */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}

/** Top banner used by every inner page. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 md:pt-20 md:pb-10">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-in relative mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs tracking-[0.25em] text-teal-700 uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-navy text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
        {children}
      </div>
    </section>
  )
}
