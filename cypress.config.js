const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
  reporter: 'mochawesome',
    reporterOptions: {
      // To display small circular charts regarding test results
      charts: true,
      // Generate JSON file to create custom reports
      json: true,
      // Customize the directory in which reports are saved
      reportsDir: 'reports/Reports',
      // Customize the report file name
      reportFilename: 'my-report',
      // Generate new report file or overwrite the a single file
      overwrite: false
    }
  },
})