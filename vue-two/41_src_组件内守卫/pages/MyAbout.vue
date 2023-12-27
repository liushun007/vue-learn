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
    },
    //通过路由规则，进入该组件时被调用（进入守卫）
    beforeRouteEnter(to,from,next){ 
        console.log("组件内路由守卫---beforeRouteEnter");
        if(to.meta.isAuth){    
            if(localStorage.getItem('school') === 'xx'){
                next();
            }else{
                alert('school不匹配');
            }
        }else{
            next();
        }
    },
    //通过路由规则，离开该组件时被调用(离开守卫)
    beforeRouteLeave(to,from,next){
         console.log("组件内路由守卫---beforeRouteLeave");
         next()
    },
}
</script>
