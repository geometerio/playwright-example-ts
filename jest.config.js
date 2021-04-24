module.exports = {
  // verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec).ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  // setupFilesAfterEnv: ['expect-playwright', './jest.setup.js']
  setupFilesAfterEnv: ['./jest.setup.js']
}
