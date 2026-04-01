#!/bin/bash

set -euo pipefail

DIRECTORY="tontine/.next"

handle_error() {
    echo "[postbuild] $1"
    exit 1
}

echo "[postbuild] Removing CSS sourcemaps in ${DIRECTORY}"

find "$DIRECTORY" -name "*.css.map" -type f -delete || handle_error "Failed to delete CSS source maps"
echo "[postbuild] Deleted CSS source map files"

find "$DIRECTORY" -type f -name '*.css' -exec sed -i -E 's/sourceMappingURL=[^ ]*\.css\.map//g' {} + || handle_error "Failed to remove sourceMappingURL references from CSS files"
echo "[postbuild] Removed sourceMappingURL references from CSS files"

echo "[postbuild] CSS source maps and their references have been deleted"
