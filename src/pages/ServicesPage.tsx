import { CtaBand } from '@/components/CtaBand'
import { PageHeader, usePageMeta } from '@/components/PageHeader'
import { Products } from '@/components/Products'
import { Services } from '@/components/Services'

export default function ServicesPage() {
  usePageMeta(
    'Services | Codenstack',
    'Web application development, AI & voice automation, custom dashboards and API development, with live demos of products we have built.',
  )
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we can build for you"
        description="From the first sketch to production, focused on software that solves a real business problem. Below are the services we offer and live products that show them in action."
      />
      <Services showHeading={false} />
      <Products />
      <CtaBand title="Want something like this for your business?" />
    </>
  )
}
