const webpackMerge = require('webpack-merge')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config')


module.exports = {
  devServer: {
    contentBase: './dist',
    inline: true
  }

}
