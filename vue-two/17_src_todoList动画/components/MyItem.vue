<!-- 组件的结构 数组 -->
<template>
    <div> 
        <!-- <transition name="todo" appear> -->
            <li>
                <label>
                    <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
                    <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
                    <!-- 在语法检查没有开启的情况下，如下代码也可以实现功能，但是不太推荐，因为有些违反原则，props不可以修改 -->
                    <!-- <input type="checkbox"  v-model="todo.done"/> -->
                    <span v-show="!todo.isEdit">{{todo.title}}</span>
                    <input 
                    type="text"
                    v-show="todo.isEdit" 
                    :value="todo.title"
                    @blur="handleBlur(todo,$event)"
                    ref="inputTitle"
                    />
                </label>
                    <!-- <button class="btn btn-danger" style="display:none">删除</button> -->
                    <button class="btn btn-danger" @click="delTodo(todo.id)">删除</button>
                    <button class="btn btn-edit" @click="editTodo(todo)">编辑</button>
            </li>
        <!-- </transition> -->
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
                },
                editTodo(todo){
                    //如果下次todo.isEdit存在,则更改，否之创建
                    if(todo.hasOwnProperty.call('isEdit')){
                        todo.isEdit = true;
                    }else{
                        this.$set(todo,'isEdit',true);
                    }
                    // setTimeout(()=>{
                    //     this.$refs.inputTitle.focus();
                    // });
                    // setInterval(()=>{
                    //     this.$refs.inputTitle.focus();
                    // },200)
                    this.$nextTick(function(){
                        this.$refs.inputTitle.focus();
                    })
                    
                    
                },
                //失去焦点后回调（真正执行修改逻辑）
                handleBlur(todo,e){
                    // 隐藏
                    if(!e.target.value.trim()){
                        return alert('修改不能为空')
                    }
                    todo.isEdit = false;
                    this.$bus.$emit('updateTodo',todo.id,e.target.value);
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