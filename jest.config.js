module.exports = {
  // verbose: true,
  // preset: 'ts-jest',
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.ts$': 'ts-jest', // "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec).ts'], // or... "**/?(*.)+(spec|test).[tj]s?(x)"
  testPathIgnorePatterns: ['/node_modules/'],
  // setupFilesAfterEnv: ['expect-playwright', './jest.setup.js'],
  setupFilesAfterEnv: ['./jest.setup.js', 'expect-playwright'],
}
