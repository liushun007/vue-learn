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
            <transition-group name="todo" appear>
            <MyItem 
            v-for="todoObj in  todoList" 
            :key="todoObj.id" 
            :todo="todoObj"
            />
            </transition-group>
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
.todo-enter-active, .todo-leave-active{
    transition: 0.5s linear;

}
/* 进入的起点，离开的终点 */
.todo-enter,.todo-leave-to{
    transform: translateX(100%);
}
/* 进入的终点，离开的起点 */
.todo-enter-to,.todo-leave{
    transform: translateX(0);
}
</style>