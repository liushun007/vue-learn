<!-- 组件的结构 -->
<template>
      <div class="demo">
            <h2>学校名称：{{name}}</h2>
            <h2 class="qwe">学校地址：{{address}}</h2>
      </div>  
</template>

<script>
      import pubsub from 'pubsub-js'
     // 组件交互的代码（数据、方法等等）
     //全称export default School = Vue.extend(options)
      
      export default ({
            name:'MySchool', //名称和文件一致
            data(){
                return{
                    name:'XX学校',
                    address:'北京',
            
                }
            },
            methods:{
                  demo(msgName,data){
                        console.log(this);
                        console.log("我订阅了hello，有人发布了消息",msgName,data);
                  }
            },
            mounted(){
                  // 订阅 第一种方法
                  //  this.subId = pubsub.subscribe('hello',(msgName,data)=>{
                  //       console.log(this);
                  //       console.log("我订阅了hello，有人发布了消息",msgName,data);
                  //  })
                  // 订阅 第二种方法
                  this.subId = pubsub.subscribe('hello',this.demo);
            },
            beforeDestroy() {
                  pubsub.unsubscribe(this.subId); //取消订阅
            }
        });
      //   export default School;
</script>

<style scoped lang="less">
      /* 组件的样式 */
      .demo{
            background-color: oldlace;
            .qwe{
                  font-size: 14px;
            }
      }
</style>