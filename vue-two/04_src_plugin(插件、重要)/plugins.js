export default {
     install(Vue,x,y,z){
        console.log("@",x,y,z);
        //全局过滤器
        Vue.filter('slic',function(value){
            return value.slice(0,4);
        });
        //定义全局自定义指令
        Vue.directive('fbind',{
            //指令与元素成功绑定
            bind(element,binding){
                element.value = binding.value;
            },
            //指定元素页面插入变量时
            inserted(element){
                element.focus();
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value;
            }
        })
        //定义全局混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:120
                }
            }
        })
        //给Vue原型定义一个方法（vm和vc都可以使用了）
        Vue.prototype.hello = ()=> {alert("惊呆了！")}

     }
}
// export default plugins;