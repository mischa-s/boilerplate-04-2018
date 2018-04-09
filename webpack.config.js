const webpack = require('webpack')
const path = require('path')

const PATHS = {
  entry: path.join(__dirname, '/src/index.js'),
  output: path.join(__dirname, '/public')
}

module.exports = {
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
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  devtool: 'eval-source-map'

};
