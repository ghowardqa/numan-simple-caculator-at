import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30_000,
    expect: { timeout: 5_000 },

    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    reporter: [['list'], ['html', { open: 'never' }]],

    use: {
        actionTimeout: 0,
        baseURL: 'https://testsheepnz.github.io',
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
    },

    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },

        // Mobile emulation
        { name: 'Pixel 5', use: { ...devices['Pixel 5'] } },
        { name: 'iPhone 12', use: { ...devices['iPhone 12'] } },
    ],

    outputDir: 'test-results/',
});