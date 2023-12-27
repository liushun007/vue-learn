<template>
    <div>
        <ul>
            <li v-for="m in messageList"  :key="m.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link class="list-group-item" :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->
                <!-- 跳转路由并携带params参数，to的对象写法 不可以使用path-->
                <router-link class="list-group-item" 
                :to="{
                    name:'xiangqing',
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }">
                {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>     
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'MyMessage',
    data(){
        return{
            messageList:[
                {id:'001',title:'message001'},
                {id:'002',title:'message002'},
                {id:'003',title:'message003'}
            ]
        }
    },
    beforeDestroy(){
        // console.log("MyMessage即将被销毁了");
    },
    methods:{
        pushShow(m){
            this.$router.push({
                    name:'xiangqing',
                    params:{
                        id:m.id,
                        title:m.title
                    }
            })
        },
        replaceShow(m){
            this.$router.replace({
                    name:'xiangqing',
                    params:{
                        id:m.id,
                        title:m.title
                    }
            })
        }
    }
}
</script>

<style>

</style>