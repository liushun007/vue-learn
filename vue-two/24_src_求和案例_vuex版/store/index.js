//引入Vue
import Vue from 'vue'
//引入Vue插件vuex Vue2.x版本安装vuex@3版本 Vue3.x版本安装vuex@4版本  npm i vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex);

//准备actions-用于相应组件的动作
const actions = {
    // jia(context,value){
    //     console.log("actions中的jia被调用了",context,value);
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     console.log("actions中的jian被调用了");
    //     context.commit('JIAN',value)
    // },
    odd(context,value){
        if(context.state.sum % 2){
            console.log("actions中的odd被调用了");
            context.commit('JIA',value)
        }  
    },
    wait(context,value){
        setTimeout(()=>{
            console.log("actions中的wait被调用了");
            context.commit('JIA',value)
        },1000) 
    }
}

//准备mutations-用于操作数据（state）
const mutations = {
    JIA(state,value){
        console.log("mutations中的JIA被调用了");
        state.sum += value;
    },
    JIAN(state,value){
        console.log("mutations中的jian被调用了");
        state.sum -= value;
    },

}

//准备state-用于存储数据,像常量
const state = {
    sum:0,
    school:'xxx学校',
    hello:'你好',
}

//准备getters-用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters

})

//暴露（导出）store
export default store