import { About } from '@/components/About'
import { CtaBand } from '@/components/CtaBand'
import { PageHeader, usePageMeta } from '@/components/PageHeader'

export default function AboutPage() {
  usePageMeta('About | Codenstack', 'Codenstack is a small software studio founded by developer Ayush Vishnoi.')
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The people behind Codenstack"
        description="A small, independent studio that cares about doing honest, careful work."
      />
      <About />
      <CtaBand />
    </>
  )
}
