// 通过 ES6 模块化规范导入 show 函数
import { show } from './show';
// 通过 common 模块化规范导入 a 函数
const a = require('./a');

// 执行 show 函数
show('Webpack');
a();
