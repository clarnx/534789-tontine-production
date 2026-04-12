export default async (req: Request) => {
  const { next_run } = await req.json()

  console.log('[CONTEXT-LEVEL SCHEDULE] This function was defined with [context.production-tontine.functions."test-context-schedule"].')
  console.log('[CONTEXT-LEVEL SCHEDULE] Executed at:', new Date().toISOString())
  console.log('[CONTEXT-LEVEL SCHEDULE] Next invocation at:', next_run)
}
