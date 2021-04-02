// 文件名字是固定的，如何不使用webpack ./src/main.js ./dist/bundle.js
// 直接输入webpack即可打包
// 依赖于path的包
// 因此在终端输入npm init
// 生成package.json
// 如果json中有一些依赖的话使用 npm install
// 然后就有path了
// 这个是node
const path = require('path')
module.exports = {
  // 入口
  entry: './src/main.js',
  output: {
    // 动态的获取路径
    // path: './dist',
    // (__dirname node自带，获取当前文件上下文路径
    // resolve是路径拼接
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
//使用 npm run build 打包
// 在json中添加映射
// "scripts": {
//   "build":"webpack"
// },
// 定义这个脚本会优先查找本地的webpack，然后再找全局的
// 在终端直接写是全局的，需要/node_modules/webpack才行
// 安装本地webpack
// npm install webpack@3.6.0


// webpack这个是开发时依赖 --save-dev本地安装
// npm install webpack@3.6.0 --save-dev
// 多一个json和json中的 
// 开发时依赖 
// "devDependencies": {
//   "webpack": "^3.6.0"
// }
// dependencies运行时依赖