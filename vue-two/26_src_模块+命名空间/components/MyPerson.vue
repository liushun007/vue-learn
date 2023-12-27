<template>
    <div>
        <h3 style="color:red">MyCount的求和值为：{{sum}}</h3>
        <h3 style="color:blue">第一位的姓名是{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add()">添加</button>
        <button @click="addW()">添加W</button>

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
        ...mapState('personAbout',['personList']),  
    
        sum(){
            return this.$store.state.countAbout.sum;
        },
        firstPersonName(){
             return this.$store.getters['personAbout/firstPersonName']
        }
        
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name};
            console.log(personObj);
            this.$store.commit('personAbout/ADD_PERSON',personObj);
            this.name='';
        },
        addW(){
            const personObj = {id:nanoid(),name:this.name};
            console.log(personObj);
            this.$store.dispatch('personAbout/addPersonWang',personObj);
            this.name='';
        }

    }
}
</script>
