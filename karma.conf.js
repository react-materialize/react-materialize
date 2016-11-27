// Karma configuration
// Generated on Tue Nov 03 2015 15:53:18 GMT+0100 (CET)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'jquery-2.1.0'],

    // list of files / patterns to load in the browser
    files: [
      'test/*Spec.js',
      'node_modules/materialize-css/bin/materialize.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js': ['babel', 'webpack'],
      'test/*Spec.js': ['babel', 'webpack']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react', 'stage-0'],
        sourceMap: 'inline'
      }
    },

    // reporters configuration
    reporters: ['mocha'],

    // reporter options
    mochaReporter: {
      showDiff: true
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /\/node_modules\//,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react', 'stage-0']
            }
          }
        ]
      },
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
      output: {
        pathinfo: true
      }
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher',
      'karma-babel-preprocessor',
      'karma-jquery',
      'karma-mocha-reporter'
    ]
  });
};
