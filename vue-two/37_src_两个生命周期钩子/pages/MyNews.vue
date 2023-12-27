<template>
      <div>
        <ul>
            <li :style="{opacity:opacity}">学习 Vue</li>
            <li>
                news001
                <input type="text"/>
            </li>
            <li>
                news002
                <input type="text"/>
            </li>
            <li>
                news003
                <input type="text"/>
            </li>       
        </ul>
    </div>
</template>

<script>
export default {
    name:'MyNews',
    data(){
        return{
            opacity:1,
        }
    },
/*     beforeDestroy(){
        console.log("MyNews即将被销毁了");
        clearInterval(this.timer)
    },
    mounted() {
        this.timer = setInterval(() => {
            console.log('@');
            this.opacity -= 0.01;
            if(this.opacity <= 0) this.opacity = 1;
        }, 16);
    }, */
    activated(){
        console.log("MyNews组件被激活了");
        this.timer = setInterval(() => {
            console.log('@');
            this.opacity -= 0.01;
            if(this.opacity <= 0) this.opacity = 1;
        }, 16);
    },
    deactivated(){
        console.log("MyNews组件被失活了");
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>