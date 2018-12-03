const path = require('path');

class TestPlugin {
  constructor() {
    console.log('@plugin constructor');
  }

  apply(compiler) {
    console.log('@plugin apply');

    compiler.plugin('environment', (options) => {
      console.log(options);
      console.log('@environment');
    });

    compiler.plugin('after-environment', (options) => {
      console.log(options);
      console.log('@after-environment');
    });

    compiler.plugin('entry-option', (options) => {
      console.log(options);
      console.log('@entry-option');
    });

    compiler.plugin('after-plugins', (options) => {
      console.log(options);
      console.log('@after-plugins');
    });

    compiler.plugin('after-resolvers', (options) => {
      console.log(options);
      console.log('@after-resolvers');
    });

    compiler.plugin('before-run', (options, callback) => {
      console.log(options);
      console.log('@before-run');
      callback();
    });

    compiler.plugin('run', (options, callback) => {
      console.log(options);
      console.log('@run');
      callback();
    });

    compiler.plugin('watch-run', (options, callback) => {
      console.log(options);
      console.log('@watch-run');
      callback();
    });

    compiler.plugin('normal-module-factory', (options) => {
      console.log(options);
      console.log('@normal-module-factory');
    });

    compiler.plugin('context-module-factory', (options) => {
      console.log(options);
      console.log('@context-module-factory');
    });

    compiler.plugin('before-compile', (options, callback) => {
      console.log(options);
      console.log('@before-compile');
      callback();
    });

    compiler.plugin('compile', (options) => {
      console.log(options);
      console.log('@compile');
    });

    compiler.plugin('this-compilation', (options) => {
      console.log(options);
      console.log('@this-compilation');
    });

    compiler.plugin('compilation', (options) => {
      console.log(options);
      console.log('@compilation');
    });

    compiler.plugin('make', (options, callback) => {
      console.log(options);
      console.log('@make');
      callback();
    });

    compiler.plugin('compilation', (compilation) => {
      compilation.plugin('build-module', (options) => {
        console.log(options);
        console.log('@build-module');
      });

      compilation.plugin('normal-module-loader', (options) => {
        console.log(options);
        console.log('@normal-module-loader');
      });

      compilation.plugin('program', (options, callback) => {
        console.log(options);
        console.log('@program');
        callback();
      });

      compilation.plugin('seal', (options) => {
        console.log(options);
        console.log('@seal');
      });
    });

    compiler.plugin('after-compile', (options, callback) => {
      console.log('@after-compile');
      callback();
    });

    compiler.plugin('should-emit', (options) => {
      console.log(options);
      console.log('@should-emit');
    });

    compiler.plugin('emit', (options, callback) => {
      console.log('@emit');
      callback();
    });

    compiler.plugin('after-emit', (options, callback) => {
      console.log(options);
      console.log('@after-emit');
      callback();
    });

    compiler.plugin('done', (options) => {
      console.log(options);
      console.log('@done');
    });

    compiler.plugin('failed', (options, callback) => {
      console.log(options);
      console.log('@failed');
      callback();
    });

    compiler.plugin('invalid', (options) => {
      console.log(options);
      console.log('@invalid');
    });
  }
}

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new TestPlugin(),
  ],
};
