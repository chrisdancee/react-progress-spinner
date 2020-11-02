module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/assets/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.(css|less|scss|sass)$": "jest-transform-css",
  },
};
