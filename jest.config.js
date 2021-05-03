module.exports = {
  // verbose: true,
  // preset: 'ts-jest',
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.ts$': 'ts-jest', // "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ['./jest.setup.js', 'expect-playwright'],
  testEnvironment: 'node',
  testEnvironmentOptions: {
    'jest-playwright': {
      // TODO:
      // browsers: ["chromium"],
      // launchOptions: {
      //   headless: false,
      //   args: [
      //     '--use-fake-device-for-media-stream',
      //     '--use-fake-ui-for-media-stream'
      //   ]
      // },
      // contextOptions: {
      //   recordVideo: {
      //     dir: 'videos/'
      //   }
      // }
    },
  },
  testMatch: ['**/?(*.)+(spec).ts'], // or... "**/?(*.)+(spec|test).[tj]s?(x)"
  testPathIgnorePatterns: ['/node_modules/'],
}
