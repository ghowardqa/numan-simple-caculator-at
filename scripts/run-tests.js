#!/usr/bin/env node
// Simple wrapper to accept -build or --build and forward remaining args to Playwright
const { spawn } = require('child_process');

const args = process.argv.slice(2);
// Allowed builds: 'prototype' or numbered builds '1'..'8'
const allowedBuilds = new Set(['prototype', '1', '2', '3', '4', '5', '6', '7', '8']);
let build = process.env.BUILD || 'prototype';
const forwarded = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '-build' || a === '--build') {
    const v = args[i + 1];
    if (v) {
      build = v;
      if (!allowedBuilds.has(String(build))) {
        console.error(`Invalid build value: ${build}. Allowed: prototype, 1-8`);
        process.exit(2);
      }
      i++; // skip value
    }
    continue;
  }
  forwarded.push(a);
}

// export BUILD so child process sees it
process.env.BUILD = build;

console.log(`Running Playwright tests with BUILD=${build}`);

// spawn Playwright test runner and pass any forwarded args (e.g. --project, --grep, --timeout)
const child = spawn('npx', ['playwright', 'test', ...forwarded], {
  stdio: 'inherit',
  env: process.env,
  shell: process.platform === 'win32'
});

child.on('exit', (code) => process.exit(code));
