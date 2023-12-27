<template>
    <!-- router实例 -->
    <div>
    <div class="row">
        <MyBanner></MyBanner>
    </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- <a class="list-group-item active" href="./about.html">About</a>
                    <a class="list-group-item" href="./home.html">Home</a> -->
                    <router-link class="list-group-item" active-class="active" 
                    :to="{name:'guanyu'}"
                    >About</router-link>
                    
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import MyBanner from './components/MyBanner.vue'
export default {
    name:'App',
    components:{
        MyBanner
    }
}
</script>