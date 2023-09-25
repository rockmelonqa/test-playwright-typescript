## Sample Playwright Typescript Test Project

A sample project that follows RockmelonQA convention

## Running Tests

With this command

```
.\.env\rmv.env.bat && .\.env\run.default.env.bat &&  npx playwright test  -c playwright.config.ts d:\\Zap\\sandbox\\playwright-typescript\\test-suites\\Screenshooting\\TwoTestSuite\.spec\.ts:9 --headed --project=chromium --repeat-each 1 --retries 0 --timeout 0 --workers 1
```

On Windows, we want the classical way of handling evironment variables, so please use default Windows CMD; Or if you run the tests in VS Code, use the CMD terminal; Don't use the Powershell.
