'use strict'

const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname,'./src/*/index.js'))
  entryFiles.forEach((entryFile) => {
    const result = entryFile.match(/src\/(.*)\/index\.js/)
    const pageName = result && result[1]
    entry[pageName] = entryFile
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename:`${pageName}.html`,
        // html加入那些chunk
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    )
  })
  return {
    entry,
    htmlWebpackPlugins
  }
}

const  { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240            
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  // watch: true,
  // watchOptions: {
  //   ignored: /node_modules/,
  //   aggregateTimeout: 300,
  //   poll: 1000
  // }
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ].concat(htmlWebpackPlugins)
}