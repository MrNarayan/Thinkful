const defaultConfig = require('@indeed/node-common-npm-scripts/config/jest.config');

const config = {
    ...defaultConfig,
    testEnvironment: 'node',
    collectCoverageFrom: ['<rootDir>/src/**/*.ts']
};

module.exports = config;
