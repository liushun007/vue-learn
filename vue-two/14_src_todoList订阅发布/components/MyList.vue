<!-- 组件的结构 内容-->
<template>
    <div>
        <ul class="todo-main">
            <!-- <MyItem 
            v-for="todoObj in  todoList" 
            :key="todoObj.id" 
            :todo="todoObj"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
            /> -->
            <MyItem 
            v-for="todoObj in  todoList" 
            :key="todoObj.id" 
            :todo="todoObj"
            />
        </ul>
    </div>  
</template>

<script>
import MyItem from "./MyItem.vue"
     // 组件交互的代码（数据、方法等等）
      export default ({
            name:'MyList', //名称和文件一致
            components:{
                MyItem,
            },
            // props:['todoList','checkTodo',"deleteTodo"],
            props:['todoList'],
            methods:{
            }

        });
</script>

<style scoped lang="css">
/*main */
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;

}
.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>