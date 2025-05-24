const { devices } = require('@playwright/test');

require('dotenv').config()


/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config = {
  testDir: './tests',
  
  timeout: 100000,
  
  /* enable testMatch to target only specific spec files*/
  testMatch: '*.test.js',
  
  /* Run tests in files in parallel */
  fullyParallel: false,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html',{open: 'always', outputFolder:'reports/playwright-report'}],['allure-playwright', {outputFolder: "reports/allure/allure-results"}]
],

  use: {    
    viewport: { width: 1280, height: 720 },
    trace: 'on',
    screenshot: 'on',
    video:'on',
    headless: false,
    ignoreHTTPSErrors:true
  },
  
  globalSetup: "utils/global-setup.js",
  globalTeardown: "utils/global-teardown.js",

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
}

export default config;

