<template>
    <div class="category" >
        <h1>当前求和为：{{sum}}</h1>
        <h2>将求和的值扩大十倍:{{bigSum}}</h2>
        <h2>{{school}},{{hello}}</h2>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数在加</button>
        <button @click="incrementWait(n)">等一等再加</button>
        <h3 style="color:red">MyPerson的总人数是：{{personList.length}}</h3>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
export default {
    name:'MyCount',
    data(){
        return{
            n:1,
           
        }
    },
    computed:{
        //亲手写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // hello(){
        //     return this.$store.state.hello
        // },

        //借助mapState生成计算属性，从state中读取数据，（对象写法）
        // ...mapState({sum:'sum',school:'school',hello:'hello'}),
        //借助mapState生成计算属性，从state中读取数据，（数组写法)
        ...mapState(['sum','school','hello','personList']),

        /**************************/

        // bigSum(){
        //     return this.$store.getters.bigSum
        // },

        //借助mapGetters生成计算属性，从getters中读取数据，（对象写法）
        // ...mapGetters({bigSum:'bigSum'}),
        //借助mapGetters生成计算属性，从getters中读取数据，（数组写法)
        ...mapGetters(['bigSum']),
        
    },
    methods:{
        
        // increment(){
        //     // this.sum += this.n
        //     // this.$store.dispatch('jia',this.n);
        //     this.$store.commit('JIA',this.n);//跳过actions
        // },
        // decrement(){
        //     // this.sum -= this.n
        //     // this.$store.dispatch('jian',this.n);
        //     this.$store.commit('JIAN',this.n);//跳过actions

        // },
        //借助mapMutations生成对应的方法，方法中会调用commmit去联系Mutations（对象写法）
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        //借助mapMutations生成对应的方法，方法中会调用commmit去联系Mutations（数组写法）
        // ...mapMutations(['JIA','JIAN']), //方法名要和Mutations中的一致


        /**************************/

        // incrementOdd(){
        //     // if(this.sum % 2){
        //     //     this.sum += this.n
        //     // }
        //      this.$store.dispatch('odd',this.n);
        // },
        // incrementWait(){
        //     // setTimeout(()=>{
        //         // this.sum += this.n
        //         // this.$store.dispatch('jia',this.n);
        //     // },1000)
        //     this.$store.dispatch('wait',this.n);
        // },
        //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions（对象写法）
        ...mapActions({incrementOdd:'odd',incrementWait:'wait'}),
        //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions（数组写法）
        // ...mapActions(['odd','wait']),//方法名要和Actions中的一致
    },
}
</script>
<style scoped lang="css">
   button{
    margin-left: 5px;
   }

</style>
