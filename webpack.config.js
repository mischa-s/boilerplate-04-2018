const HtmlWebPackPlugin = require("html-webpack-plugin");
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
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  devtool: 'eval-source-map'

};
