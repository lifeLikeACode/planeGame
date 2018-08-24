
const webpack = require('webpack')
const base = require('./webpack.base.config')
base.plugins.push(new webpack.HotModuleReplacementPlugin())
base.devServer = {
  port: '8989',
  inline: true,
  hot: true,
  open: false
}
module.exports = base ;