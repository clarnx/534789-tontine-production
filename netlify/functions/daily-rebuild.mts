import axios from 'axios'

type LogLevel = 'warn' | 'info' | 'error' | 'success'

function log({
  message,
  logLevel,
  error,
}: {
  message: string
  logLevel: LogLevel
  error?: unknown
}) {
  const logPrefix = {
    warn: 'TONTINE_WARN:',
    info: 'TONTINE_INFO:',
    error: 'TONTINE_ERROR:',
    success: 'TONTINE_SUCCESS:',
  } as const

  const logMethod = {
    warn: console.warn,
    info: console.info,
    error: console.error,
    success: console.log,
  } as const

  if (error && logLevel === 'error') {
    logMethod.error(`${logPrefix.error} ${message}`, error)
    return
  }

  logMethod[logLevel](`${logPrefix[logLevel]} ${message}`)
}

function getDailyRebuildErrorMessage(variableName: string) {
  log({
    message: `${variableName} not specified in environment variables, skipping rebuild`,
    logLevel: 'error',
  })

  return {
    statusCode: 400,
  }
}

export default async () => {
  try {
    log({
      message: 'Daily rebuild function initiated.',
      logLevel: 'info',
    })
    const buildHook = Netlify.env.get('BUILD_HOOK')
    const siteId = Netlify.env.get?.('SITE_ID')
    const apiKey = Netlify.env.get?.('NETLIFY_API_TOKEN')

    if (!buildHook) return getDailyRebuildErrorMessage('Build hook')
    if (!siteId) return getDailyRebuildErrorMessage('Site ID')
    if (!apiKey) return getDailyRebuildErrorMessage('API Key')

    log({
      message: 'Attempting to get previous builds info...',
      logLevel: 'info',
    })
    const buildsResponse = await axios.get(
      `https://api.netlify.com/api/v1/sites/${siteId}/builds`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    if (buildsResponse?.data?.[0]?.created_at) {
      const lastBuildTime = new Date(buildsResponse.data[0].created_at)
      log({
        message: `Getting build info successful, most recent build time was: ${lastBuildTime}`,
        logLevel: 'success',
      })
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
      if (lastBuildTime > oneDayAgo) {
        log({
          message: 'Build has happened in the last 24 hours, aborting...',
          logLevel: 'info',
        })
        return {
          statusCode: 200,
        }
      }
    } else {
      log({
        message:
          'Could not get previous builds info, will attempt to initiate build',
        logLevel: 'warn',
      })
    }

    log({
      message: 'Attempting to initiate build...',
      logLevel: 'info',
    })
    const { status } = await axios.post(buildHook)
    log({
      message: `Successfully initiated build hook, server responded with status: ${status}.`,
      logLevel: 'success',
    })

    return {
      statusCode: status,
    }
  } catch (error) {
    log({
      message: 'Could not run scheduled build',
      logLevel: 'error',
      error,
    })
    return {
      statusCode: 500,
    }
  }
}
