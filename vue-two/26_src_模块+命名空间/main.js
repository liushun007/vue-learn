/*该文件是整个项目的入口文件*/
//引入Vue 残缺版vue 完整版路径:vue/dist/vue.js
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入store 没有写js路径默认引用包下的index.js
import store from './store/index.js'
//关闭vue的生产提示 
Vue.config.productionTip = false


new Vue({
  el:'#app',
  render: h => h(App),
  store:store,
  // mounted(){
  //   console.log("App",this);
  // },
  beforeCreate(){
    //bus:总线；
    Vue.prototype.$bus = this;//安装全局事件总线
  }
})
