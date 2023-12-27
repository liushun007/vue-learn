<template>
     
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- todoList pubsub订阅发布 -->
            <MyHeader @addTodo="addTodo"/>
            <!-- <MyList 
            :todoList="todoList" 
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
            /> -->
            <MyList 
            :todoList="todoList" 
            />
            <MyFooter 
            :todoList="todoList"
            @checkDone="checkDone"
            @clearAll="clearAll"
            />
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';
import pubsub from 'pubsub-js';
export default {
    name:'App',
    data(){
        return{
            // todoList:[
            //     {id:'001',title:'吃',done:true},
            //     {id:'002',title:'喝',done:true},
            //     {id:'003',title:'玩',done:false},
            // ]
            todoList: JSON.parse(localStorage.getItem('todoList')) || []
        }
        
    },
    components:{
        MyHeader,
        MyList,
        MyFooter
    },
    methods:{
        //添加一个爱好
        addTodo(value){
            this.todoList.unshift(value);
        },
        //勾选or取消勾选 前面是msgName ，占位
        checkTodo(_,id){
            this.todoList.forEach((todo) => {
                if(todo.id === id) todo.done = !todo.done;
            });
        },
        //前面是msgName ，占位
        deleteTodo(_,id){
            //删除todo
            this.todoList = this.todoList.filter((todo) => {
                return todo.id !== id
            })
        },
        // 全选\非全选
        checkDone(done){
            this.todoList.forEach((todo) => {
                todo.done = done;
            });
        },
        clearAll(){
            this.todoList = this.todoList.filter((todo) => {
                return !todo.done
            })
        }
    },
    //监视属性
    watch:{
        todoList:{
            deep:true,
            handler(value){
                localStorage.setItem('todoList',JSON.stringify(value));
            }
        }
    },
    mounted(){
        this.pid = pubsub.subscribe('checkTodo',this.checkTodo)
        this.pid2 = pubsub.subscribe('deleteTodo',this.deleteTodo)

    },
    beforeDestroy(){
        //取消订阅
        pubsub.unsubscribe([this.pid,this.pid2]);
    }

    
}
</script>

<style>
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn-danger{
    color: #fff;
    background-color: #da4f49;
    border:#bd362f;
}
.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn:focus {
    outline: none;
}
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-warp {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
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

/* main
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

footer
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
} */

</style>
