const resolveApp = require('./util').resolveApp;

const vars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

module.exports = [
  vars({ variables: require(resolveApp('src/common/vars')) }),
  nested,
  autoprefixer
];
