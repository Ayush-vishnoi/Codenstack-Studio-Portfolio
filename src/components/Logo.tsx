import { site } from '@/config/site'

/**
 * Brand icon + wordmark. "Code" follows the background (navy on light, white on dark),
 * "n" is purple and "stack" is teal — matching /public/brand/codenstack-logo.png.
 */
export function Logo({ size = 36, tone = 'light' }: { size?: number; tone?: 'light' | 'dark' }) {
  return (
    <span className="flex items-center gap-2.5">
      <img src={site.logo.icon} alt="" width={size} height={size} style={{ width: size, height: size }} />
      <span className="text-lg font-extrabold tracking-tight">
        <span className={tone === 'dark' ? 'text-white' : 'text-navy'}>Code</span>
        <span className="text-iris">n</span>
        <span className={tone === 'dark' ? 'text-mint' : 'text-teal-600'}>stack</span>
      </span>
    </span>
  )
}
