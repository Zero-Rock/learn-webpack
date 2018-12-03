const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // JS 执行入口文件
  entry: {
    bundles: [
      './main.js',
    ],
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name].[chunkhash:16].js?v=[chunkhash:8]',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 css 文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // 转换 .css 文件需要使用的 Loader
          use: ['css-loader'],
        }),
      },
    ],
  },
  devtool: 'source-map', // 输出 source-map 方便直接调试 ES6 源码
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: '[name].[contenthash:16].css?v=[contenthash:8]',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true,
      title: '1234567',
    }),
  ],
};
