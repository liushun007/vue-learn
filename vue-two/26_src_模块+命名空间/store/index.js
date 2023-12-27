//引入Vue
import Vue from 'vue'
//引入Vue插件vuex Vue2.x版本安装vuex@3版本 Vue3.x版本安装vuex@4版本  npm i vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 使用插件
Vue.use(Vuex);

//暴露（导出）store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    
    }

})
