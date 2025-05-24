# UI-Automation-Framework-Playwright

Automation regression suite built using [Playwright](https://playwright.dev/) to validate UI workflows.

---

## ✅ Features

- Runs tests in **3 major browsers**: Chromium, Firefox & WebKit
- Supports **cross-browser** execution
- Easily extensible test structure
- Includes stability workarounds for known frontend timing issues(Added details in notes at the bottom)
- Includes cookie pop up handler which continuously monitors for cookie popups and handles them.

# Flow
Global Setup(pre req setup/mocks) -> Move old reports to ArchiveTests -> Run tests -> Generate new reports -> Global Teardown(cleanup)


# Pre requisites:
Playwright requires Node.js 16+ (we use Node 18.x.x for this project).  
Use the instructions below to install and switch to Node 18.x.x based on your OS.

# NODE SETUP 
 # MAC/Linux
            node version 18.X.X
            1. If the required node version is not available follow the below steps for setting it up

            Open your terminal and run this command:
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
            This installs the latest version of nvm. If you want to verify the latest version, check the official repo: https://github.com/nvm-sh/nvm

            2. Restart Your Terminal
            After installation, either restart your terminal or run:
                source ~/.zshrc
            3. Verify nvm is installed
            Check with:
                command -v nvm
            It should output nvm.

            4. Install Node.js 18
                nvm install 18.20.7
            Then use it:
                nvm use 18.20.7
    
 # Windows
            1. Download NVM for Windows:
                -https://github.com/coreybutler/nvm-windows/releases

            2. Install it, then open Command Prompt or PowerShell.

            3. Install and use Node.js 18:
                - nvm install 18.20.7
                - nvm use 18.20.7
            4. Confirm:
                - node -v


# Framework setup :

* Install dependencies
  - npm install
  - npx playwright install 

* To execute the Test cases:
  - npm run test

# Folder Structure
📦 ui-test-framework-playwright
 ┣ 📂 tests
 ┣ 📂 commons
 ┣ 📂 utils
 ┣ 📜 playwright.config.js
 ┣ 📜 package.json
 ┗ 📜 README.md

# Additional Tips
* To run only in Chromium:
   - npx playwright test --project=Chromium
* To exeucte specific test case group
   - npx playwright test smoke/keyword
* To run with UI (non-headless) mode:
   - npx playwright test --headed
* To run with trace viewer:
   - npx playwright test --trace on


# Reports
* Playwright report is generated and can be found in ./report/playwright-report/index.html
* Current configuration is set to open the report after every run. Flag can be turned off to not open the report every time by setting "open: 'never'" in reporter setting of playwright.config.js

* Note:
 * - A Wait for page load to complete and then 1-second delay is added between interactions intentionally to avoid a crash observed 
    when the form is filled too quickly (likely due to frontend instability).
 * - This workaround simulates a more natural user input pace, avoiding the crash while maintaining flow.
 * - Added a cookie pop up handler which continuously monitors for cookie popups and handles them.
