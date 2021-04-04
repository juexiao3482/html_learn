// const { add, mul } = require('./mathUtils.js')
// commonjs
import { add, mul } from './js/mathUtils.js';
console.log(add(20, 30));
console.log(mul(20, 30));

// es6
import { name, age, height } from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3、依赖
require('./css/normal.css')

require('./css/special.less')
document.writeln('<h3>你好</h3>')