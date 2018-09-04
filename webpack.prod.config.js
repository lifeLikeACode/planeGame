
const webpack = require('webpack')
const base = require('./webpack.base.config')
process.env.NODE_ENV = 'production'
base.output.publicPath = './'
module.exports = base ;