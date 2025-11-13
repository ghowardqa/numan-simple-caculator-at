# Simple Calculator Playwright Tests

This repository contains a minimal Playwright test setup end-to-end tests against the provided simple calculator.

#### Hightlights
- Page object model
- Verifies business logic
- CI integration 
    - Differernt build variants run on the CI to verift across build versions. 
- Agent used to build blueprint pom to speed up creation

#### Next steps
- Add visual tests for components
- Add Api test to verify status of website and that responds in a timely manner (i.e 500ms)

#### Known issue on prototype
While developing this automation framework I found a defect that should be resolved, with has been details in the github issues, issue <https://github.com/ghowardqa/numan-simple-caculator-at/issues/1>. 

## Setup 
### 1. Install dependencies:

```bash
npm install
```

### 2. Install Playwright browsers (required once):

```bash
npx playwright install
```

### 3. Run tests:

```bash
npm test
```

Run specific test
```
npx playwright test tests/functional/calculator.spec.ts 
```

Run against specific browser in headless (available project if download are: chrome, firefox, edge, safarri)
```
npm run test --project=chromium
```

Run tests for a specific build (example: build 3):

```bash
node ./scripts/run-tests.js -build 3
# or via npm script
npm run test:build -- -build 3
# or via with browser
npm run test:build -- -build 3 --project=chromium
```

Valid build values

- `prototype` (default) — the prototype build
- `1`..`8` — numbered builds
