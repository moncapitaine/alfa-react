/* eslint-disable unicorn/prefer-module */
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    '\\.(js|ts|jsx|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|webmanifest|xml)$':
      '<rootDir>/jest/fileTransformer.js'
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [ "@testing-library/jest-dom/extend-expect" ]
}