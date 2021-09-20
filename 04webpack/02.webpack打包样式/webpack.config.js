
/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
    // webpack配置
    // 1. 入口文件
    entry: './src/index.js',
    // 2.输出
    output: {
        // 输出文件名称
        filename: 'built.js',
        // 输出路径
        path: resolve(__dirname,'build')
    },
    // 3.loader配置
    module: {
      rules: [
          // 详细loader配置
          // 不同文件必须配置不同loader处理
          {
              //匹配到那个文件
              test: /\.css$/,
              // 使用哪些loader进行处理
              use: [
                  // use数组中loader执行顺序：从右到左，从下到上 依次执行
                  // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                  'style-loader',
                  // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                  'css-loader'
              ]
          },
          {
              test: /\.less$/,
              use: [
                  'style-loader',
                  'css-loader',
                  // 将less文件编译成css文件
                  // 需要下载 less-loader和less
                  'less-loader'
              ]
          }
      ]
    },
    // 4.plugins配置
    plugins: [

    ],
    // 模式
    mode: 'development', // 开发模式
    // mode: 'production'
}
