/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
var path = require('path');
var glob = require('glob');
// eslint-disable-next-line no-undef
module.exports = {
  watch: false,
  target: 'electron-renderer',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    login_window: `./dist/events/login.event.js`,
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'public/events'),
    filename: '[name].event.js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
