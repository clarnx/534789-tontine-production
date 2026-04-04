// In actual repo this page makes a sanity call, maybe that is what is causing the cache error, but this page is needed since next won't use the other not found because of the way it's structured

export default function NotFound() {
  return (
    <html lang='en'>
      <body>
        <h1>404 - Page Not Found</h1>
      </body>
    </html>
  )
}
