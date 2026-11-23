import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Subtle fade-up when an element scrolls into view. Respects reduced motion via CSS. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
      <p className="font-mono text-xs tracking-[0.2em] text-teal-700 uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>}
    </Reveal>
  )
}
