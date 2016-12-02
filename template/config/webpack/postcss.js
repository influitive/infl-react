const resolveApp = require('./util').resolveApp;

const vars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const rucksack = require('rucksack-css');

module.exports = [
  vars({ variables: require(resolveApp('src/common/vars')) }),
  nested,
  rucksack,
  autoprefixer
];
