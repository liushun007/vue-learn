<template>
    <div>
        <h3 style="color:red">MyCount的求和值为：{{sum}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add()">添加</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'MyPerson',
    data(){
        return{
            name:''
        }
    },
    computed:{
        ...mapState(['personList']),  
         ...mapState(['sum']), 
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name};
            console.log(personObj);
            this.$store.commit('ADD_PERSON',personObj);
            this.name='';
        }

    }
}
</script>
