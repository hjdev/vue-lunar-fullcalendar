var path = require('path')
var cooking = require('cooking')
var config = require('./webpack.base.conf')

cooking.set({
  // use: 'vue',
  entry: {
    'LunarFullCalendar.min': './components/index.js'
  },
  dist: './lib',

  minimize: true,
  clean: true,
  // sourceMap: true,
  // extractCSS: true,
  publicPath: '/lib/',
  // assetsPath: 'static',
  format: 'cjs',
  extends: ['vue'],
  alias: config.resolve.alias,
  externals: {
    'vue': 'vue'
  }
})
// cooking.add('loader.js.exclude', '/node_modules/');
// cooking.add('loader.scss', {
//   test: /\.scss$/,
//   loaders: ['style-loader', 'css-loader', 'sass-loader']
// });
// cooking.add('vue.preserveWhitespace', false);

module.exports = cooking.resolve()
