<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    name:'MyAbout',
    beforeDestroy(){
        console.log("MyAbout组件要被销毁了");
    },
    mounted(){
      console.log("MyAbout组件挂载完毕了",this);  
      window.aboutRoute = this.$route;
      window.aboutRouter = this.$router;
    }
}
</script>
