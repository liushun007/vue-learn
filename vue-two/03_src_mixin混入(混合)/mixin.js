// 混入
export const mixin= {
    methods:{
        show(){
            alert(this.name);
            console.log("我是混入方法");
        }
    },
    //生命周期
    mounted(){
        console.log("混入","你好1");
    }
}
export const mixin2= {
    methods:{
        show2(){
            alert("哈哈");
        }
    },
    data(){
        return{
            x:100,
            y:200
        }
    }
}