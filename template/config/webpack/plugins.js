const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
];

if (process.env.NODE_ENV === 'production') {
  module.exports.push(
    new ManifestPlugin({ filename: 'manifest.json' }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ comments: false })
  );
}

