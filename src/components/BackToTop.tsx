import { useEffect, useState } from 'react'
import { Icon } from './Icons'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-slate-200 bg-white/90 text-teal-700 shadow-lg backdrop-blur transition-all duration-300 hover:border-teal-400 hover:shadow-md ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <Icon name="arrowUp" size={18} />
    </button>
  )
}
