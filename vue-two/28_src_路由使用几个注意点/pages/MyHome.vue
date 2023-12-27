<template>
    <div>
        <h2>我是Home的内容</h2>
    </div>
</template>

<script>

export default {
    name:'MyHome',
    beforeDestroy(){
        console.log("MyHome组件要被销毁了");
    },
    mounted(){
      console.log("MyHome组件挂载完毕了",this);  
      window.homeRoute = this.$route;
      window.homeRouter = this.$router;
    }
}
</script>
