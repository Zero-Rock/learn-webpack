/**
 * Created by PanJiankang on 2018/8/8 下午8:07.
 */
const config = require('./webpack.config.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: 'build/',
  publicPath: '/assets/',
});
server.listen(8080);
