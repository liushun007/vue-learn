// 人员管理
export default {
    namespaced:true,
    //准备mutations-用于操作数据（state）
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value);
            }else{
                alert('必须姓王');
            }
        }
    },
    mutations:{
        ADD_PERSON(state,value){  
            console.log("mutations中的ADD_PERSON被调用了");
            state.personList.unshift(value);
        }
    
    },
    
    //准备state-用于存储数据,像常量
    state:{
        personList:[
            {id:'001',name:'张三'}
        ],
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name;
        }
    }
}