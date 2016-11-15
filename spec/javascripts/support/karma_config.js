module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '../../..',

    port: 9876,

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'vendor/assets/javascripts/angular.js',

      // Promise polyfill:
      // phantomjs 2.1 lacks implementaion of native Promises
      'node_modules/es6-promise/dist/es6-promise.min.js',

      'vendor/assets/javascripts/**/*.js',

      'app/assets/javascripts/**/*.js',

      'spec/javascripts/support/*.js',
      'spec/javascripts/support/**/*.js',

      'spec/javascripts/**/*_spec.js',

      {pattern: 'spec/javascripts/fixtures/**/*', watched: false, included: false, served: true},
    ],

    proxies: { },

    // list of files to exclude
    exclude: [
      'spec/javascripts/support/karma_config.js',
    ],

    // Default is {'**/*.coffee': 'coffee'}
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots'],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
  });
};
