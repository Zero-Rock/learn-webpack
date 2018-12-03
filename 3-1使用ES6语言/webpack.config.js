const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // JS 执行入口文件
  entry: {
    bubbles: [
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
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  devtool: 'source-map', // 输出 source-map 方便直接调试 ES6 源码
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true,
    }),
  ],
};
