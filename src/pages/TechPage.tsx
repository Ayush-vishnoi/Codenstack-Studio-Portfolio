import { CtaBand } from '@/components/CtaBand'
import { PageHeader, usePageMeta } from '@/components/PageHeader'
import { TechStack } from '@/components/TechStack'

export default function TechPage() {
  usePageMeta(
    'Tech Stack | Codenstack',
    'The modern, proven technologies Codenstack uses: React, Node.js, Python, FastAPI, SQL, MongoDB and more.',
  )
  return (
    <>
      <PageHeader
        eyebrow="Tech stack"
        title="Modern, proven tools"
        description="We pick reliable technology where it matters and modern tooling where it speeds you up, so your product is easy to maintain and hire for."
      />
      <TechStack showHeading={false} />
      <CtaBand />
    </>
  )
}
