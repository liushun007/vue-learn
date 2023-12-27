//该文件专门用于创建整个应用的路由器
//引入Vue插件vue-router Vue2.x版本安装vue-router@3版本 Vue3.x版本安装vue-router@4版本  npm i vue-router
import vueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyAbout from '../pages/MyAbout'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'


const router =  new vueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:MyAbout,
            meta:{
                isAuth:true,
                title:'关于',
            },
        },
        {
            name:'zhuye',
            path:'/home',
            component:MyHome,
            meta:{
                title:'主页',
            },
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:MyNews,
                    meta:{
                        isAuth:true,
                        title:'新闻',
                    },
                    beforeEnter(to,from,next){
                        console.log("独享路由守卫");
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
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:MyMessage,
                    meta:{
                        isAuth:true,
                        title:'消息',
                    },
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:MyDetail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Detail组件
                            // props:{
                            //     a:666,
                            //     b:'哈哈哈'
                            // },
                            //props的第二种写法，值为布尔值，布尔值为真，就会把该路由组件中收到的所有params参数，以props的形式传递给Detail组件
                            // props:true,
                            //props的第三种写法，值为函数
                            props($route){
                                return {id:$route.params.id,title:$route.params.title};
                                // return {id:$route.query.id,title:$route.query.title};
                            },
                            //解构赋值函数写法
                            // props({query:{id,title}}){
                            //     // return {id:$route.params.id,title:$route.params.title};
                            //     return {id,title};
                            // },
                            // props({query}){
                            //     return {id:$route.params.id,title:$route.params.title};
                            //     return {id:query.id,title:query.title};
                            // },
                            meta:{
                                title:'详情',
                            },

                        }
                    ]
                }
            ]
        }
    ]

})

//全局前置路由守卫---初始化的时候被调用、每次切换路由之前的时候被调用
// router.beforeEach((to,from,next)=>{
//     console.log(to,from);
//     // if(to.path === "/home/news" || to.path === '/home/message' ){
//     // if(to.name === "xinwen" || to.name === 'xiaoxi' ){
//     if(to.meta.isAuth){    
//         if(localStorage.getItem('school') === 'xx'){
//             next();
//         }else{
//             alert('school不匹配');
//         }
//     }else{
//         next();
//     }

// });

//全局后置路由守卫---初始化的时候被调用、每次切换路由之后的时候被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title || '哈哈';

});


//暴露（导出）vue-router
export default router;