// Returns code 1 if the current branch doesn't have -s- in it
// which is used in netlify.toml to determine whether or not to create build
process.exitCode = process.env.HEAD?.includes('-s-') ? 0 : 1
