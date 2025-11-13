# Simple Calculator Playwright Tests

This repository contains a minimal Playwright test setup end-to-end tests against the provided simple calculator.

Hightlights
- Page object model 
- CI integration 
    - Differernt build variants run on the CI to verift across build versions. 
- Agent used to build blueprint pom to speed up creation

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers (required once):

```bash
npx playwright install
```

3. Run tests:

```bash
npm test
```

Run tests for a specific build (example: build 3):

```bash
node ./scripts/run-tests.js -build 3
# or via npm script
npm run test:build -- -build 3
```

Valid build values

- `prototype` (default) — the prototype build
- `1`..`8` — numbered builds