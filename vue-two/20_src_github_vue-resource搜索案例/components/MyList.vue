<template>
<!-- 数据 -->
    <div class="row">
        <div class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style="width:100px"/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用</h1>
        <!-- 展示加载词 -->
        <h1 v-show="info.isLoading">加载中...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.message">{{info.message}}</h1>
    </div>
</template>

<script>
export default {
    name:'MyList',
    data(){
        return {
            info:{
                users:[],
                isFirst:true,
                isLoading:false,
                message:''
            }
        }
    },
    methods:{
        getData(dataInfo) {
            this.info = {...this.info,...dataInfo};//补全在datainfo中没有填写的变量
        }
    },
    mounted(){
           this.$bus.$on('getData',this.getData);
    }

}
</script>

<style scoped>
.album {
    min-height: 50rem;
    padding-top:3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}
.card {
    float:left;
    width:33.33%;
    padding: .75rem;
    margin-bottom: 2rem;
    border:1px solid #efefef;
    text-align: center;
}
.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}
.card-text {
    font-size: 85%;
}
</style>