const path = require('path')
const webpack = require('C:/Users/pc/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/webpack')
const HtmlWebpackPlugin = require("C:/Users/pc/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/html-webpack-plugin")
const cleanWebpackPlugin = require('C:/Users/pc/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/clean-webpack-plugin')
const MiniCssExtractPlugin = require('C:/Users/pc/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/mini-css-extract-plugin')
const base = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
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
        loader: 'url-loader'
      }
    ]
  },
  // optimization:{
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {   // 抽离第三方插件
  //           test: /node_modules/,   // 指定是node_modules下的第三方包
  //           chunks: 'initial',
  //           name: 'vendor',  // 打包后的文件名，任意命名    
  //           // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
  //           priority: 10    
  //       }
  //     }
  //   }
  // },
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