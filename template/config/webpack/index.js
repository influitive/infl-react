require('dotenv').config({ silent: true });
const paths = require('./paths');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: paths.entry,
  output: paths.output,
  resolve: paths.resolve,
  module: {
    loaders: require('./loaders')
  },
  plugins: require('./plugins'),
  postcss: require('./postcss')
};

