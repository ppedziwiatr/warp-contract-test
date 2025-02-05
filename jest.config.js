// jest.config.js
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', 'join.test.js'],
};
