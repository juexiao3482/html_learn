// 文件名字是固定的，如何不使用webpack ./src/main.js ./dist/bundle.js
// 直接输入webpack即可打包
// 依赖于path的包
// 因此在终端输入npm init
// 生成package.json
// 如果json中有一些依赖的话使用 npm install
// 然后就有path了
// 这个是node
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: './src/main.js',
  output: {
    // 动态的获取路径
    // path: './dist',
    // (__dirname node自带，获取当前文件上下文路径
    // resolve是路径拼接
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 涉及url的自动拼接，解决因为图过大，打包以后图重新编码到dist文件夹下的问题
    // 如果使用HtmlWebpackPlugin()就不需要这行
    // publicPath: 'dist/'
  },

  // 自己配置module
  module: {
    rules: [
      {
        // 这是正则，.的含义是任意字符以css结束
        test: /\.css$/,
        // 负责解析'style-loader', 
        // css-loader只加载
        // 使用多个loader时是从右向左读的
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当小于limit时，编译成base64字符串
              // 大于需要file-loader
              // 8kb
              limit: 8196,
              // 设置命名规范
              // 哈希值保留8位
              // 【】会当成变量，【name】是图片原来的名字
              // ext是扩展名
              name: 'img/[name].[hash:8].[ext]'
            },

          },
        ],
      },

      // 把es6转成es5的配置babel
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['es2015']
      //     }
      //   }
      // }

      {
        test: /\.vue$/,
        use: 'vue-loader'

      },

    ]
  },
  resolve: {
    // alias:别名
    // git commit -m ‘注释“
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }


  },

  // plugins: [
  //   new VueLoaderPlugin()
  // ]
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'output.css'
  //   })
  // ]

  plugins: [
    new webpack.BannerPlugin('最终版权归wry所有'),
    // 自动生成index.html
    new HtmlWebpackPlugin({
      template: 'index.html'

    }

    )
  ],
  // devServer: {
  //   contentBase: './dist',
  //   inline: true
  // }

}
