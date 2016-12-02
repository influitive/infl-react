const urlJoin = require('url-join');
const path = require('path');

const resolveApp = require('./util').resolveApp;

module.exports = {
  entry: {
    bundle: resolveApp('src/index.js')
  },
  resolve: {
    root: [path.resolve('.')],
    modulesDirectories: ['node_modules']
  }
};

if (process.env.npm_lifecycle_event === 'build') {
  module.exports.output = {
    publicPath: process.env.CDN_URL ? urlJoin(process.env.CDN_URL, '/') : '/',
    path: resolveApp('build'),
    filename: '[name].[hash].js'
  };
} else {
  module.exports.output = {
    filename: '[name].js'
  };
}
