<!-- 组件的结构 尾 -->
<template>
<!-- v-show为0直接隐藏 -->
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> /{{total}}
        </span>
        <button class="btn btn-anger" @click="clearCheckAll">清除勾选的爱好</button>
    </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
      export default ({
            name:'MyStudent', //名称和文件一致
            props:['todoList','checkDone','clearAll'],
            computed:{
                total(){
                    return this.todoList.length;
                },
                doneTotal(){
                    // let i = 0;
                    // this.todoList.forEach((todo) => {
                    //     if(todo.done) i++
                    // });
                    // return i;

                    return this.todoList.reduce((pre,todo) => {
                        return pre + (todo.done ? 1:0);
                    },0)
                    // console.log("@",x);
                },
                // isAll(){
                //     return this.total === this.doneTotal && this.total > 0;
                // },
                isAll:{
                    get(){
                        return this.total === this.doneTotal && this.total > 0;
                    },
                    set(done){
                        //全部选中/全部不选中
                        this.checkDone(done);
                    }
                    
                }
            },
            methods:{
                //全部选中/全部不选中
                checkAll(event){
                    console.log(event.target.checked);
                    this.checkDone(event.target.checked);
                },
                //清除勾选的todo
                clearCheckAll(){
                    this.clearAll();
                }
            }

        });
</script>

<style scoped lang="css">
/*footer*/
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
}
</style>