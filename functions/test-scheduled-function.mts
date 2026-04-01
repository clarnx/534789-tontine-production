/** biome-ignore-all lint/suspicious/noConsole: <test> */

import type { Config } from '@netlify/functions'

export default async (req: Request) => {
  const payload = await req.json().catch(() => ({}))
  const nextRun =
    payload && typeof payload === 'object' && 'next_run' in payload
      ? payload.next_run
      : null

  console.log('Received event! Next invocation at:', nextRun)

  return new Response(
    JSON.stringify({ ok: true, message: 'test-scheduled-function invoked', nextRun }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  )
}

export const config: Config = {
  schedule: '@hourly',
}
