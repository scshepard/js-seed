var
  _ = require("lodash");

var
  projectConfig = require("./project.config"),
  webpackConfig = require("./webpack.config");

webpackConfig = _.clone(webpackConfig);

delete webpackConfig.entry;

module.exports = {
  basePath: projectConfig.root,
  frameworks: ["mocha"],
  files: [ "spec/frontend/test-runner.js" ],
  exclude: [],
  preprocessors: { "spec/frontend/**/*.js": ["webpack"] },
  webpack: webpackConfig,
  webpackServer: {
    hot: true,
    quiet: true,
    noInfo: false,
    stats: {
      colors: true
    }
  },
  reporters: ["mocha"],
  port: 9876,
  colors: true,
  autoWatch: true,
  captureTimeout: 60000,
  singleRun: true,

  // - Chrome (karma-chrome-launcher)
  // - Firefox (karma-firefox-launcher)
  // - Opera (karma-opera-launcher)
  // - Safari (karma-safari-launcher)
  // - PhantomJS (karma-phantomjs-launcher)
  // - IE (karma-ie-launcher)
  browsers: ["PhantomJS", "Chrome", "Firefox", "Safari"],

  plugins: [
    require("karma-mocha"),
    require("karma-phantomjs-launcher"),
    require("karma-chrome-launcher"),
    require("karma-firefox-launcher"),
    require("karma-safari-launcher"),
    require("karma-webpack"),
    require("karma-mocha-reporter")
  ]

};