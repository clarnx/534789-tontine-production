const pages = [
  {
    slug: 'home',
    title: 'Home',
    description: 'Welcome to the home page.',
  },
  {
    slug: 'about',
    title: 'About',
    description: 'Learn more about us.',
  },
  {
    slug: 'contact',
    title: 'Contact',
    description: 'Get in touch with us.',
  },
]

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <main>
      <h1>Home — {locale}</h1>
      <p>Welcome to the minimal Netlify reproduction.</p>
      <ul>
        {pages.map((page) => (
          <li key={page.slug}>
            <a href={`/${locale}/${page.slug}/`}>{page.title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
