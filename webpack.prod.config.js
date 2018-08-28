
const webpack = require('webpack')
const base = require('./webpack.base.config')
base.output.publicPath = './'
module.exports = base ;