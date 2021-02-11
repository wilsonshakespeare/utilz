echo "build multiple modules"
tsdx build \
  --entry=src/index.ts \
  --entry=src/promise.ts \
  --entry=src/validation.ts \
  --entry=src/timeconvert.ts \
  && node ./scripts/flowgen.js \
  && node ./scripts/indexify.js \