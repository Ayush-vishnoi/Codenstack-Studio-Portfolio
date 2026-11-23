import { Contact } from '@/components/Contact'
import { PageHeader, usePageMeta } from '@/components/PageHeader'

export default function ContactPage() {
  usePageMeta(
    'Contact | Codenstack',
    'Get in touch with Codenstack. Email ayush.vishnoi@codenstack.in or send us a message.',
  )
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something together"
        description="Tell us a little about your project. No sales pitch, just a straight answer on whether we can help."
      />
      <Contact showHeading={false} />
    </>
  )
}
