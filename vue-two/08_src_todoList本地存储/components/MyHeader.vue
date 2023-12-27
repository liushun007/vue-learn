<!-- 组件的结构 头 -->
<template>
      <div class="todo-header">
            <input type="text" placeholder="输入爱好回车添加" v-model="title" @keyup.enter="add"/>
      </div>  
</template>

<script>
import {nanoid} from 'nanoid'
     // 组件交互的代码（数据、方法等等）      
      export default ({
            name:'MyHeader', //名称和文件一致
            data(){
                  return{
                        title:''
                  }
            },
            props:["addTodo"],
            methods:{
                  // add(event)
                  add(){
                        //包装成一个todo对象
                        // const todoObj = {id:nanoid(),title:event.target.value,done:false};
                        const todoObj = {id:nanoid(),title:this.title,done:false};
                        this.addTodo(todoObj);
                        this.title = '';

                  }
            }
        });
</script>

<style scoped lang="css">
/*header */
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>