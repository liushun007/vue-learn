/*该文件是整个项目的入口文件*/
//引入Vue 残缺版vue 完整版路径:vue/dist/vue.js
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入router
import vueRouter from 'vue-router'
//使用router
import router from './router/index'
//关闭vue的生产提示 
Vue.config.productionTip = false
Vue.use(vueRouter);


new Vue({
  el:'#app',
  render: h => h(App),
  router:router
})
