module.exports = {
  collectCoverageFrom: [
    '**/(src|scripts)/**/*.{js,jsx,ts,tsx}',
    '!**/src/testHelpers/**',
    '!**/*.stories.{j,t}sx',
  ],
  setupFiles: ['./src/testHelpers/jest-setup.js'],
  testMatch: [
    '**/__tests__/**/*.{j,t}s?(x)',
    '**/?(*.)+(spec|test).{j,t}s?(x)',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./src/testHelpers/setupTests.js'],
};
