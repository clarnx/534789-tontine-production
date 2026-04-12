export default async (req: Request) => {
  const { next_run } = await req.json()

  console.log('[ROOT-LEVEL SCHEDULE] This function was defined with [functions."test-root-schedule"] at root level.')
  console.log('[ROOT-LEVEL SCHEDULE] Executed at:', new Date().toISOString())
  console.log('[ROOT-LEVEL SCHEDULE] Next invocation at:', next_run)
}
