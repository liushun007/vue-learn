const { defineConfig } = require('@vue/cli-service')
// 配置文件更改
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查
  // 开启代理服务器 方法一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  //开启代理服务器 方法二
  // devServer: {
  //   proxy: {
  //     '/demo1': {
  //       target: 'http://localhost:5000',
  //       pathRewrite:{'^/demo1':''},//代理时不加该前缀
  //       ws: true,//开启websocket
  //       changeOrigin: true//为true欺骗服务端ip地址
  //     },
  //     '/demo2': {
  //       target: 'http://localhost:5001',
  //       pathRewrite:{'^/demo2':''},//代理时不加该前缀
  //       ws: true,//开启websocket
  //       changeOrigin: true //为true欺骗服务端ip地址
  //     }
  //   }
  // }
})
