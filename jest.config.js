module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  testEnvironmentOptions: {
    'jest-playwright': {
      launchOptions: {
        // headless: false,
        // slowMo: 50
      }
    }
  },
  testMatch: ['**/?(*.)+(spec).js'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['expect-playwright', './jest.setup.js'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './.local/spec-results/',
        filename: 'report.html',
        expand: true
      }
    ]
  ]
}

