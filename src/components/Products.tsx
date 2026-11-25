import { useEffect, useRef, useState } from 'react'
import { products, type Product } from '@/config/site'
import { Link } from 'react-router'
import { Icon } from './Icons'
import { Reveal, SectionHeading } from './Reveal'

export function Products() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section id="products" className="relative py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Our work · Live demos"
          title="Products we've built and shipped"
          description="Proof of what these services look like in practice. Open any demo and click around; logins are on each card."
        />

        <Reveal className="mx-auto mb-10 flex max-w-fit items-start gap-2.5 rounded-xl border border-iris/20 bg-iris/5 px-4 py-3 text-sm text-muted">
          <Icon name="info" size={18} className="mt-0.5 shrink-0 text-iris" />
          <p>Demo servers may take ~30 seconds to wake up on first load.</p>
        </Reveal>


        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 100}>
              <ProductCard product={p} onDetails={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

function ProductCard({ product: p, onDetails }: { product: Product; onDetails: () => void }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <ProductShot product={p} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-navy">{p.title}</h3>
            <p className="mt-0.5 text-sm text-muted">{p.subtitle}</p>
          </div>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-mono text-xs text-muted transition-colors hover:text-teal-700"
          >
            {p.url.replace('https://', '')}
          </a>
        </div>

        <p className="mt-4 line-clamp-2 leading-relaxed text-ink/85">{p.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech used">
          {p.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-2 text-sm text-ink/85">
          {p.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2.5">
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-teal-700" />
              {f}
            </li>
          ))}
        </ul>

        <Credentials creds={p.credentials} />

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center px-5 py-3"
            aria-label={`Open ${p.title} live demo in a new tab`}
          >
            Live Demo <Icon name="external" size={16} />
          </a>
          <button type="button" onClick={onDetails} className="btn-secondary flex-1 justify-center px-5 py-3">
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}

function Credentials({ creds }: { creds: Product['credentials'] }) {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3.5">
      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted uppercase">
        <Icon name="lock" size={13} /> Demo credentials
      </p>
      <dl className="grid gap-1.5 font-mono text-[13px]">
        <CopyRow label="Email" value={creds.email} />
        <CopyRow label="Password" value={creds.password} />
      </dl>
    </div>
  )
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable — value is still selectable */
    }
  }
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="w-20 shrink-0 text-muted">{label}</dt>
      <dd className="min-w-0 flex-1 truncate text-ink">{value}</dd>
      <button
        type="button"
        onClick={copy}
        className="grid size-7 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-slate-100 hover:text-teal-700"
        aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
      >
        <Icon name={copied ? 'check' : 'copy'} size={14} />
      </button>
    </div>
  )
}

/** Screenshot area. Uses product.image if set, otherwise an illustrated placeholder. */
function ProductShot({ product: p }: { product: Product }) {
  const accent = p.accent === 'mint' ? 'from-mint/25 via-mint/5' : 'from-iris/30 via-iris/5'
  return (
    <div className="relative border-b border-slate-200 bg-slate-100 p-4 pb-0">
      <div className="overflow-hidden rounded-t-xl border border-b-0 border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2">
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="ml-2 truncate rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-muted">
            {p.url.replace('https://', '')}
          </span>
        </div>
        <div className="relative aspect-[16/8] overflow-hidden">
          {p.image ? (
            <img
              src={p.image}
              alt={`${p.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className={`flex h-full bg-gradient-to-br ${accent} to-transparent transition-transform duration-500 group-hover:scale-[1.03]`}
              role="img"
              aria-label={`${p.title} screenshot placeholder`}
            >
              {/* Mock UI skeleton — REPLACE by setting `image` in src/config/site.ts */}
              <div className="hidden w-1/5 flex-col gap-2 border-r border-slate-200 p-3 sm:flex">
                <div className="h-2 w-3/4 rounded bg-slate-300" />
                <div className="h-2 w-1/2 rounded bg-slate-200" />
                <div className="h-2 w-2/3 rounded bg-slate-200" />
                <div className="h-2 w-1/2 rounded bg-slate-200" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-9 place-items-center rounded-lg ${
                      p.accent === 'mint' ? 'bg-mint/15 text-teal-700' : 'bg-iris/20 text-iris'
                    }`}
                  >
                    <Icon name={p.icon} size={18} />
                  </span>
                  <div className="space-y-1.5">
                    <div className="h-2 w-24 rounded bg-slate-300" />
                    <div className="h-1.5 w-16 rounded bg-slate-200" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((n) => (
                    <div key={n} className="rounded-lg border border-slate-200 bg-white p-2">
                      <div className="h-1.5 w-1/2 rounded bg-slate-200" />
                      <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-300" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-slate-200 bg-white p-2">
                  {[40, 65, 50, 80, 60, 90, 70, 55, 85, 75].map((h, n) => (
                    <div
                      key={n}
                      className={`flex-1 rounded-sm ${p.accent === 'mint' ? 'bg-mint/40' : 'bg-iris/50'}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (product && !d.open) d.showModal()
    if (!product && d.open) d.close()
  }, [product])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="product-dialog-title"
      className="m-auto w-[min(640px,calc(100%-2rem))] rounded-2xl border border-slate-200 bg-white p-0 text-ink shadow-2xl backdrop:bg-navy/40 backdrop:backdrop-blur-sm"
    >
      {product && (
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`grid size-11 place-items-center rounded-xl ${
                  product.accent === 'mint' ? 'bg-mint/15 text-teal-700' : 'bg-iris/20 text-iris'
                }`}
              >
                <Icon name={product.icon} size={22} />
              </span>
              <div>
                <h3 id="product-dialog-title" className="text-xl font-bold text-navy">
                  {product.title}
                </h3>
                <p className="text-sm text-muted">{product.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid size-9 place-items-center rounded-lg text-muted hover:bg-slate-100 hover:text-navy"
              aria-label="Close details"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <p className="mt-6 leading-relaxed text-ink/90">{product.details}</p>

          <h4 className="mt-6 text-sm font-semibold tracking-wide text-navy uppercase">Key features</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/85">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2.5">
                <Icon name="check" size={16} className="mt-0.5 shrink-0 text-teal-700" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-sm font-semibold tracking-wide text-navy uppercase">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {product.tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          <Credentials creds={product.credentials} />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center px-5 py-3"
            >
              Open Live Demo <Icon name="external" size={16} />
            </a>
            <Link to="/contact" onClick={onClose} className="btn-secondary flex-1 justify-center px-5 py-3">
              Want something similar?
            </Link>
          </div>
        </div>
      )}
    </dialog>
  )
}
