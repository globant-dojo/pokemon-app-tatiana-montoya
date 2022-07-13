module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/jest-setup.js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/config/css-stub.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
