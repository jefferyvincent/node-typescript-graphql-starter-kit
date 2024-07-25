module.exports = {
    // A list of paths to modules that run some code
    // to configure or set up the testing framework before each test
    preset: 'ts-jest',
    //----------------------------------------------
    //   config files if needed afterwards
    //----------------------------------------------
    setupFilesAfterEnv: ['./__tests__/config/setup.js'],
    // globalTeardown: './__test__/config/teardown.js',
  
    // Stop running tests after `n` failures
    bail: 1,
  
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['/node_modules/'],
  
    // testEnvironment: "./test/config/mongoEnvironment",
    testEnvironment: 'node',
  
    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},
  
    // Adds a location field to test results
    // testLocationInResults: false,
  
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  
    // An array of regexp pattern strings that are
    // matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['/node_modules/', '/__tests__/config/'],
  
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.ts$': 'ts-jest',
    },
  
    // An array of regexp pattern strings that are matched
    // against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };