import { Link } from 'react-router'
import { PageHeader, usePageMeta } from '@/components/PageHeader'

export default function NotFound() {
  usePageMeta('Page not found | Codenstack', 'This page does not exist.')
  return (
    <PageHeader eyebrow="404" title="This page doesn’t exist" description="The link may be broken or the page moved.">
      <Link to="/" className="btn-primary mt-8 px-6 py-3.5">
        Back to home
      </Link>
    </PageHeader>
  )
}
