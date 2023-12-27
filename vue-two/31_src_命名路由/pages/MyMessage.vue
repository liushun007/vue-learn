<template>
    <div>
        <ul>
            <li v-for="m in messageList"  :key="m.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link class="list-group-item" :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <router-link class="list-group-item" 
                :to="{
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                {{m.title}}
                </router-link>
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
    }
}
</script>

<style>

</style>