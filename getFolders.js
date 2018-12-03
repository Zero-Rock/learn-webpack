/**
 * Created by PanJiankang on 2018/8/5 下午5:39.
 */
const path = require('path');
const fs = require('fs');

const rootPaths = __dirname;
const promiseArr = [];
const getFolders = (rootPath) => {
  fs.readdir(rootPath, (err, folders) => {
    if (err) {
      console.log(err);
      return false;
    }
    const newList = folders.filter(item => item.indexOf('node_modules') === -1);
    if (folders.includes('package.json')) {
      // console.log( `<excludeFolder url="file://$MODULE_DIR$${rootPath.replace( __dirname, "" )}/node_modules" />` );
      const content = `<excludeFolder url="file://$MODULE_DIR$${rootPath.replace(__dirname, '')}/dist" />`;
      promiseArr.push(Promise.resolve(content));
    }
    newList.forEach((item) => {
      const filePaths = path.resolve(rootPath, item);
      fs.stat(filePaths, (er, stats) => {
        const isDir = stats.isDirectory();
        if (isDir) {
          getFolders(filePaths);
        }
      });
    });
  });
};

Promise.resolve(getFolders(rootPaths)).then(() => {
  console.log(promiseArr);
});
setTimeout(() => {
  console.log(promiseArr);
}, 10000);
