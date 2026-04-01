// Returns exit code 0 (skip) if the current branch contains '-s-', otherwise exit code 1 (build)
process.exitCode = process.env.HEAD?.includes('-s-') ? 0 : 1
