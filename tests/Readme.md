Contains the test cases written

Test file naming should follow "modulename.test.js"
Tag the test case names with @smoke/@regression or any other flags required for test grouping based on needs

* To execute the Test cases:
  - npm run test

# Additional Tips
* To run only in Chromium:
   - npx playwright test --project=Chromium
* To exeucte specific test case group
   - npx playwright test smoke/keyword


# Note:
 * - A Wait for page load to complete and then 1-second delay is added between interactions in details filling page intentionally to avoid a crash observed 
    when the form is filled too quickly (likely due to frontend instability).
 * - This workaround simulates a more natural user input pace, avoiding the crash while maintaining flow.
 * - Added a cookie pop up handler which continuously monitors for cookie popups and handles them.


 # Reports
* Playwright report is generated and can be found in ./report/playwright-report/index.html
* Current configuration is set to open the report after every run. Flag can be turned off to not open the report every time by setting "open: 'never'" in reporter setting of playwright.config.js
