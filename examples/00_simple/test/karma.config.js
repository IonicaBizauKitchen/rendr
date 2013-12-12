'use strict';

module.exports = function (config) {
  config.set({

    files: [
      './app/**/*.js',
    ],

    frameworks: [
      'mocha',
      'commonjs',
    ],

    browsers: ['Chrome'],

    preprocessors: {
      './app/**/*.js': ['commonjs'],
    },

    logLevel: config.LOG_DEBUG,
  });
};
