const webpack = require('webpack')

module.exports = {
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
