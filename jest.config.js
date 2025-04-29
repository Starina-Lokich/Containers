export default {
    testEnvironment: 'node',
    collectCoverageFrom: ['src/**/*.js'],
    coverageReporters: ['text'],
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  };