// 求和计数管理
const countOptions = {
    namespaced:true,
    actions:{
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
    },

    //准备mutations-用于操作数据（state）
    mutations:{
        JIA(state,value){
            console.log("mutations中的JIA被调用了");
            state.sum += value;
        },
        JIAN(state,value){
            console.log("mutations中的jian被调用了");
            state.sum -= value;
        },

    },

    //准备state-用于存储数据,像常量
    state:{
        sum:0,
        school:'xxx学校',
        hello:'你好',
    },

    //准备getters-用于将state中的数据进行加工
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }

}

export default countOptions;
