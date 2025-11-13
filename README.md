# Simple Calculator Playwright Tests

This repository contains a minimal Playwright test setup and a tiny static calculator app used for end-to-end tests.

What I added:

- `app/index.html` — small static calculator app (build dropdown, two inputs, operation select, integers-only toggle, answer field, clear button)
- `tests/pages/CalculatorPage.ts` — Page Object Model for the calculator UI
- `tests/calculator.spec.ts` — sample Playwright tests exercising the page object
- `playwright.config.ts` — Playwright configuration that serves `./app` on port 3000 before running tests
- `package.json` — dev dependencies and test scripts

Quick start

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

Example using the prototype build (explicit):

```bash
node ./scripts/run-tests.js -build prototype -- --version
# or via npm script
npm run test:build -- -build prototype -- --version
```

Notes

- The Playwright config uses `npx http-server ./app -p 3000` to serve the static app before the tests.
- Tests are written in TypeScript and use a small Page Object in `tests/pages/CalculatorPage.ts`.
# numan-simple-caculator-at
Automation testing framework to test the simple calculator
