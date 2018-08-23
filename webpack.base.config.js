const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const cleanWebpackPlugin = require('clean-webpack-plugin')
const base = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  devtool: 'cheap-module-eval-source-map',
  module:{
    rules:[
      {
        test: /\.js$/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ["env"]
          }
        },
        include:path.join(__dirname,'./src'),
        exclude:/node_modules/
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(),
    new cleanWebpackPlugin(path.join(__dirname,'dist')),
  ]
}
module.exports = base