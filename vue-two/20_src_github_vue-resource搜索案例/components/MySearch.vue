<template>
<!-- 搜索栏 -->
    <div class="container">
        <section>
            <h3 class="jumbotron">Search Github Users</h3>
            <input type="text" v-model="keyWord" placeholder="enter the name you search" />&nbsp;<button @click="getData">Search</button>
        </section>
    </div>
</template>

<script>
export default {
    name:'MySearch',
    data(){
        return {
            keyWord:''
        }
    },
    methods:{
        getData(){
            this.$bus.$emit('getData',{users:[],isFirst:false,isLoading:true});
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('请求成功了');
                    this.$bus.$emit('getData',{users:response.data.items,isLoading:false,message:''});
                   
                },
                error => {
                    console.log('请求失败了',error.message);
                    this.$bus.$emit('getData',{users:[],isLoading:false,message:error.message});
                }
            )
        }
    }

}
</script>

<style scoped>
