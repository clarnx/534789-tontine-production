import { notFound } from 'next/navigation'

const pages: Record<string, { title: string; body: string }> = {
  about: {
    title: 'About',
    body: 'This is the about page.',
  },
  contact: {
    title: 'Contact',
    body: 'This is the contact page.',
  },
}

export function generateStaticParams() {
  return Object.keys(pages).flatMap((slug) =>
    ['en', 'es', 'pt'].map((locale) => ({ locale, slug: [slug] }))
  )
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>
}) {
  const { locale, slug } = await params
  const pageSlug = slug.join('/')
  const page = pages[pageSlug]

  if (!page) notFound()

  return (
    <main>
      <h1>
        {page.title} — {locale}
      </h1>
      <p>{page.body}</p>
      <a href={`/${locale}/`}>← Home</a>
    </main>
  )
}
