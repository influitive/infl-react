module.exports = [
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.(jpg|png)$/,
    loader: 'file-loader'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },
  {
    test:   /\.css$/,
    // We don't use style loader because we want our styles loaded into the appFrame iframe not the
    // iframe that the react app is actually running in
    /*eslint max-len: 0 */
    loader: 'style-loader!css-loader?modules!postcss-loader'
  },
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel'
  }
];
