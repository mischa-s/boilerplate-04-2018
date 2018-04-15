const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')
const webpack = require('webpack')

const PATHS = {
  entry: path.join(__dirname, '/src/browser.js'),
  output: path.join(__dirname, '/src/public')
}

module.exports = {
  mode: 'production',

  entry: ['babel-polyfill', 'whatwg-fetch', PATHS.entry],

  output: {
    path: PATHS.output,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: PATHS.output,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(@feathersjs))/, // https://github.com/feathersjs/rest-client/issues/14#issuecomment-344400104
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // new BundleAnalyzerPlugin()
  ],

  devtool: 'source-map'
}
