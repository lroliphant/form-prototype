var webpackConfig = require('./webpack.config.js');

module.exports = config => {
    config.set({
        autoWatch: false,
        singleRun: true,
        browsers: ['Chrome'],
        basePath: '.',
        /*
         * list of files to load in the browser is built via spec-bundle.js
         */
        files: [
          'assets/js/tests/**/*.spec.js'
        ],
        exclude: [],
        frameworks: [
          'jasmine'
        ],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
          exitOnResourceError: true
        },
        port: 9876,
        colors: true,
        preprocessors: {
          'assets/js/tests/**/*.spec.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackServer: {
          noInfo: true
        }
    });
};
