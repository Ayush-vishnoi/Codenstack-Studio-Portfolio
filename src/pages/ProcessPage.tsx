import { CtaBand } from '@/components/CtaBand'
import { PageHeader, usePageMeta } from '@/components/PageHeader'
import { Process } from '@/components/Process'

export default function ProcessPage() {
  usePageMeta(
    'How We Work | Codenstack',
    'Discover, Design, Build, Deploy & Support: a simple, transparent four-step process.',
  )
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="A simple, transparent process"
        description="Four steps, clear milestones and a live preview link throughout. You always know what’s happening and what comes next."
      />
      <Process showHeading={false} />
      <CtaBand />
    </>
  )
}
