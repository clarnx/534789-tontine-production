/** biome-ignore-all lint/suspicious/noConsole: <Needed for this file> */

type LogLevel = 'warn' | 'info' | 'error' | 'success'

function log({ message, logLevel, error }: { message: string; logLevel: LogLevel; error?: unknown }) {
  const prefix = { warn: 'REPRO_WARN:', info: 'REPRO_INFO:', error: 'REPRO_ERROR:', success: 'REPRO_SUCCESS:' } as const
  if (error && logLevel === 'error') { console.error(`${prefix.error} ${message}`, error); return }
  if (logLevel === 'warn') console.warn(`${prefix.warn} ${message}`)
  else if (logLevel === 'error') console.error(`${prefix.error} ${message}`)
  else console.log(`${prefix[logLevel]} ${message}`)
}

function errorResponse(variableName: string) {
  log({ message: `${variableName} not specified in environment variables, skipping rebuild`, logLevel: 'error' })
  return new Response(
    JSON.stringify({ ok: false, message: `${variableName} not specified` }),
    { status: 400, headers: { 'content-type': 'application/json' } }
  )
}

export default async () => {
  try {
    log({ message: 'Daily rebuild function initiated.', logLevel: 'info' })
    const buildHook = process?.env?.BUILD_HOOK
    const siteId = process?.env?.SITE_ID
    const apiKey = process?.env?.NETLIFY_API_TOKEN

    if (!buildHook) return errorResponse('Build hook')
    if (!siteId) return errorResponse('Site ID')
    if (!apiKey) return errorResponse('API Key')

    log({ message: 'Checking previous builds...', logLevel: 'info' })
    const buildsRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/builds`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    const builds = await buildsRes.json() as { created_at?: string }[]

    if (builds?.[0]?.created_at) {
      const lastBuildTime = new Date(builds[0].created_at)
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
      if (lastBuildTime > oneDayAgo) {
        log({ message: 'Build in last 24h, aborting.', logLevel: 'info' })
        return new Response(
          JSON.stringify({ ok: true, message: 'Build has happened in the last 24 hours, aborting.' }),
          { status: 200, headers: { 'content-type': 'application/json' } }
        )
      }
    } else {
      log({ message: 'Could not get previous builds, will attempt build.', logLevel: 'warn' })
    }

    log({ message: 'Initiating build...', logLevel: 'info' })
    const triggerRes = await fetch(buildHook, { method: 'POST' })
    log({ message: `Build hook triggered, status: ${triggerRes.status}.`, logLevel: 'success' })

    return new Response(
      JSON.stringify({ ok: true, message: `Build hook triggered. Status: ${triggerRes.status}.` }),
      { status: triggerRes.status, headers: { 'content-type': 'application/json' } }
    )
  } catch (error) {
    log({ message: 'Could not run scheduled build', logLevel: 'error', error })
    return new Response(
      JSON.stringify({ ok: false, message: 'Could not run scheduled build' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    )
  }
}
