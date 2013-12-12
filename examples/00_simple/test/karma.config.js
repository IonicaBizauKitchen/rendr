'use strict';

module.exports = function (config) {
  config.set({

    files: [
      '../app/**/*.js',
      './app/**/*.js',
    ],

    frameworks: [
      'mocha',
      'commonjs',
    ],

    browsers: ['Chrome'],

    preprocessors: {
      '../app/**/*.js': ['commonjs'],
      './app/**/*.js': ['commonjs'],
    },

    logLevel: config.LOG_DEBUG,
  });
};
