//该文件专门用于创建整个应用的路由器
//引入Vue插件vue-router Vue2.x版本安装vue-router@3版本 Vue3.x版本安装vue-router@4版本  npm i vue-router
import vueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyAbout from '../pages/MyAbout'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'

//暴露（导出）vue-router
export default new vueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:MyAbout
        },
        {
            path:'/home',
            component:MyHome,
            children:[
                {
                    path:'news',
                    component:MyNews
                },
                {
                    path:'message',
                    component:MyMessage,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:MyDetail,
                        }
                    ]
                }
            ]
        }
    ]

})
