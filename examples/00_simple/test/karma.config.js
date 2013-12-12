'use strict';

module.exports = function (config) {
  config.set({

    files: [
      './app/**/*.js',
    ],

    frameworks: [
      'mocha',
      'browserify',
    ],

    browsers: ['Chrome'],

    preprocessors: {
      './app/**/*.js': ['browserify'],
    },

    logLevel: config.LOG_DEBUG,

    browserify: {},
  });
};
