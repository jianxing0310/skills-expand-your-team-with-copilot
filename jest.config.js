'use strict';

module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testRegex: '(/__tests__/.*|(\.|/)(test|spec))\.jsx?$','
testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
};