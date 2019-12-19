const webpack = require('webpack')
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const version = process.env.VERSION || require('../package.json').version

let banner =
  'vue-lunar-fullcalendar v' + version + '\n' +
  '(c) ' + new Date().getFullYear() + ' h j <https://hjdev.github.io> \n' +
  '@license MIT'

module.exports = {
  mode: 'production',
  entry: {
    app: ['./components/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'LunarFullCalendar.min.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'LunarFullCalendar',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: ['node_modules']
  },
  externals: [{
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }, nodeExternals()],
  performance: {
    hints: false
  },
  // stats: {
  //   children: false
  // },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [{
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner
    })
  ]
}
