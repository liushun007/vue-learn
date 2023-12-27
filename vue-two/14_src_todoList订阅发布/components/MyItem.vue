<!-- 组件的结构 数组 -->
<template>
    <div> 
        <li>
            <label>
                <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
                <!-- 在语法检查没有开启的情况下，如下代码也可以实现功能，但是不太推荐，因为有些违反原则，props不可以修改 -->
                <!-- <input type="checkbox"  v-model="todo.done"/> -->
                <span>{{todo.title}}</span>
            </label>
            <!-- <button class="btn btn-danger" style="display:none">删除</button> -->
            <button class="btn btn-danger" @click="delTodo(todo.id)">删除</button>
        </li>
    </div>  
</template>

<script>
    import pubsub from 'pubsub-js';
     // 组件交互的代码（数据、方法等等）
      export default ({
            name:'MyItem', //名称和文件一致
            // props:['todo',"checkTodo",'deleteTodo'],
            props:['todo'],
            methods:{
                handleCheck(id){
                    //勾选or不勾选
                    // this.checkTodo(id);
                    // this.$bus.$emit('checkTodo',id)
                    pubsub.publish('checkTodo',id)
                },
                delTodo(id){
                    if(confirm('确定删除吗？')){
                        //删除todo
                        // this.deleteTodo(id);
                        // this.$bus.$emit('deleteTodo',id)
                        pubsub.publish('deleteTodo',id)
                    }
                }
            }

        });
</script>

<style scoped lang="css">
/*item*/
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial
}

li:last-child {
    border-bottom: none;
}

/* li:hover {
    background-color: #ddd;
} */
li:hover button{
    display: block;
}
</style>