#!/bin/bash
set -euo pipefail

if [ "${SKIP_TESTS:-false}" = "true" ]; then
  echo "[run-tests] SKIP_TESTS=true, skipping test run"
  exit 0
fi

echo "[run-tests] No tests configured in minimal repro — skipping"
