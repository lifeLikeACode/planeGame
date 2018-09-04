const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const cleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
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
        test: /\.(styl|stylus)$/,
        use:[
          'style-loader',
          'css-hot-loader', //支持热更新
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          "stylus-loader"
        ],
        include:path.join(__dirname,'./src'),
        exclude:/node_modules/
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:base64:5].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      }
      
    ]
  },

  plugins:[
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'planeGame',
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    }),
    new cleanWebpackPlugin(path.join(__dirname,'dist')),
    // new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = base