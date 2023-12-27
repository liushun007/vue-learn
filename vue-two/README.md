#笔记

##脚手架文件结构


##关于不同版本的Vue

##vue.config.js配置文件

##ref属性
  1.被用来给元素或子组件注册引用信息（id的替代者）
  2.应用在html标签上获取真实的dom元素，应用在组件标签上是组件实例对象（vc）
  3.使用方式：
            打标识：<h1 ref="xxx"></h1> 或 <MySchool ref="xxx"></MySchool>
            获取：this.$refs.xxx

##配置项props
           功能：让组件接受外部传递过来的数据   
           (1)传递数据：
                     <Demo name="xxx">
           (2)接收数据：
              第一种方式(只接收)：
                       props:['name']
              第二种方式(限制类型)：
                        props:{name:String,age:Number}
              第三种方式(限制类型、限制必要性、指定默认值)   
                        props:{
                          name:{
                            type:String,//类型
                            required:true,//必填
                            default:"张三"//默认值
                          }
                        }   
            备注： props是只读的， Vue底层会检测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，
                  那么请复制props的内容到data中一份，然后去修改data中的数据。                
 
 ##mixin(混合；混入)：
                  功能：可以把多个组件共用的配置提取成一个混入对象；
                   使用方式：
                         第一步定义混合，例如：
                                     {
                                      data(){.....},
                                      methods:{.....},
                                      .....
                                     }        
                          第二步使用混合，例如：
                                     (1)全局混入：Vue.mixin(xxx),
                                     (2)局部混入：minxins:[xxx]                                    
 
 ##插件：
       功能：用于增强Vue；
       本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据；
       定义插件： 
               对象.install = function(Vue,options){
                //1.添加过滤器
                Vue.filter(...),
                //2.添加全局指令
                Vue.directive(...)
                //3.配置全局混入
                Vue.mixin(...)
                //4.添加实例方法
                Vue.prototype.$myMethod = function () {...}
                Vue.prototype.$myProperty = xxx
               }
        使用插件：Vue.use();//在main.js使用，全局都可以用到       

##scoped样式：
            作用：让样式在局部生效，防止冲突；
            写法：<style scoped></style> 
            npm安装less命令 ：npm i less-loader ;查看所有版本命令 npm view less-loader versions  npm view webpack versions

##总结TodoList案例：
                 1.组件化编码流程：
                                （1）拆分静态组件：组件要按照功能点拆分，命名不要与html冲突；
                                （2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
                                     1）一个组件再用：放在组件自身即可；
                                     2）一些组件再用：放在它们共同的父组件上（状态提升）。
                                （3）实现交互：从绑定事件开始。
                 2.props适用于：
                              （1）父组件 ==》 子组件 通信
                              （2）子组件 ==》 父组件 通信（要求父给子一个函数）
                 3.使用v-model时要切记：v-model绑定的值不能是props传递的值，因为props是不能被修改的！
                 4.props传过来的若是对象类型的值，修改对象的属性Vue不会报错，但不推荐这样做                     

##webStorage
            1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）；
            2.浏览器通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
            3.相关API：
                       1.xxxxStorage.setItem('xx','xx');
                         该方法接受一个键和值作为参数，会把键值对添加存储中，如果键名存在，则更新其对应值；
                       2.xxxxStorage.getItem('xx');  
                         该方法接受一个键名作为参数，返回键对应的值；     
                       3.xxxxStorage.removeItem('xx');    
                         该方法接受一个键名作为参数，并把该键名从存储中删除；
                       4.xxxxStorage.clear(); 
                         该方法会清空存储中的所有数据
            4. 备注：
                   1.SessionStorage存储的内容会随着浏览器关闭而消失；
                   2.localStorage存储的内容,需要手动清除才会消失；
                   3.xxxxStorage.getItem('xxx')如果xxx对应的value获取不到，那么getItem的返回值为null；
                   4.JSON.parse(null)的结果依然是null。                                                              

##组件的自定义事件：
                  1.一种组件间通信的方式，适用于:子组件 => 父组件
                  2、使用场景：A是父组件，B是子组件，B想给A传递数据，那么就需要在A中给B绑定自定义事件（事件的回调在A中）
                  3.绑定自定义事件：
                                1.第一种方式：在父组件中：<Demo @getStudentName="getStudentName"/>
                                  或<Demo v-on:getStudentName="getStudentName">          
                                2.第二种方式：<Demo ref="demos">   
                                              mounted(){
                                                this.$refs.demos.$on('getStudentName',this.test)
                                              }
                                3.若想让自定义事件只触发一次，可以使用once修饰符，或者$once方法。
                  4.触发自定义事件：this.$emit('getStudentName',data);
                  5.解绑自定义事件：this.$off('getStudentName')；
                  6.组件上也可以绑定原生DOM事件，需要用native修饰符；
                  7.注意：通过this.$refs.xxx.$on('xxx',回调)绑定自定义事件时，回调要么配置在methods中，
                          要么使用箭头函数，否则this指向会出现问题                         

##全局事件总线：
              1.一种组件间通信的方式，适用于任意组件间通信；
              2.安装全局事件总线；在main.js
              new Vue({
                ...
                beforeCreate(){
                  //bus:总线；
                  Vue.prototype.$bus = this;//安装全局事件总线
                }
              })   
              3.使用事件总线
                          1.接受数据
                            this.$bus.$on('xxx',data)
                          2.提供数据
                            this.$bus.$emit('xxx',this.data)
              4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件  

##消息订阅与发布（pubsub）
                        1.一种组件间通信的方式，适用于任意组件间通信；
                        2.使用步骤：
                                  1.安装pubsub：npm i pubsub-js
                                  2.引入： import pubsub from 'pubsub-js'
                                  3.接收数据： A组件想接收数据，则A组件中订阅消息，订阅的回调留在A组自身
                                  methods：{
                                    demo(msgName,data){...}
                                  }                    
                                  mounted() {
                                    this.pid = pubsub.subscribe('xxx',this.demo);
                                  }                                
                                  4.提供数据：pubsub.publish('xxx',data)
                                  5.最好在beforedestroy钩子中，用pubsub.unsubscribe(pid)去取消订阅

##nextTick(生命周期钩子)
          1.语法：this.$nextTick(回调函数)；
          2.作用：在下一次DOM更新结束后执行其指定的回调；
          3.什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数执行 

##Vue封装的过度与动画
                    1.作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加类名样式；
                    2.写法：
                           1.准备好样式：
                                       1.v-enter：进入的起点
                                       2.v-enter-active:进入过程中
                                       3.v-enter-to:进入的终点
                            元素离开的样式： 
                                       1.v-leave：离开的起点
                                       2.v-leave-active:离开过程中
                                       3.v-leave_to:离开的终点
                            2.使用<transition>包裹要过度的元素，并匹配name属性；
                                    <transition appear>
                                        <h1 v-show="isShow">你好啊</h1>
                                    </transition>
                            3.备注：若有多个元素需要过度，则需要使用： <transition-group> 且每个元素都要指定key值。    

##Vue脚手架配置代理
                    1.在vue.config.js中添加如下配置  
                    devServer: {
                      proxy: 'http://localhost:5000'
                    }  
                    说明：
                         (1)优点：配置简单，请求资源时直接发送给前端（8080）即可;
                         (2)缺点：不能配置多个代理，不能灵活的控制请求是否走了代理；
                         (3)工作方式：若按照上述代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）。  
                    2.在vue.config.js中配置如下规则
                         devServer: {
                            proxy: {
                              '/demo1': {
                                target: 'http://localhost:5000',
                                pathRewrite:{'^/demo1':''},//代理时不加该前缀
                                ws: true,//开启websocket
                                changeOrigin: true//为true欺骗服务端ip地址
                              },
                              '/demo2': {
                                target: 'http://localhost:5001',
                                pathRewrite:{'^/demo2':''},//代理时不加该前缀
                                ws: true,//开启websocket
                                changeOrigin: true //为true欺骗服务端ip地址
                              }
                            }
                          }
                      说明：
                           (1)优点：可以配置多个代理，且可以灵活的控制请求是否走代理；
                           (2)缺点：配置略微繁琐，请求资源必须加前缀。    

##Vue中常用的两个ajax库：
                      axios:通用的ajax请求库，运用广泛；  npm i axios  安装
                      vue-resource:vue插件库，官方已不维护。 npm i vue-resource 安装

##插槽
      1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件===>子组件；
      2.分类：默认插槽、具名插槽、作用域插槽；
      3.使用方式：1.默认插槽
                 2.具名插槽
                 3.作用域插槽
                   理解：数据在自身的自身，但根据数据生成的结构需要组件的使用者来决定。

##Vuex
      1.概念：专门在vue中实现集中式状态（数据）管理的Vue插件，对vue应用中多个组件的共享状态进行集中式的管理
            （读/写），也是一种组件间通信的方式，自适应用于任意组件通信。
      2.Github地址：https://github.com/vuejs/vuex                    

      什么时候使用vuex
          1.多个组件依赖同一种状态；
          2.来自不同组件的行为需要变更同一状态   

      概念：在Vue中实现集中式状态（数据）管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式管理（读/写）,也是一种组件间通信的方式，且适用于任意组件间通信。
      何时使用：多个组件需要共享数据时；
      搭建vuex环境（看实践store/index.js和main.js配置）

      四种map方法的使用
      1.mapState方法：用于帮助我们映射state中的数据为计算属性
      2.mapGetters方法：用于帮助我们映射getters中的数据为计算属性
      3.mapActions方法：用于帮助我们生成actions对话的方法，即包含$store.dispatch(xxx)的函数
      4.mapMutations方法：用于帮助我们生成mutations对话的方法，即包含$store.commit(xxx)的函数

      模块化+命名空间
      目的：让代码更好维护，让多种数据分类更明确。
      具体写法参考 src_模块+命名空间

##相关理解：
          vue-router的理解：Vue的一个插件库，专门用来实现SPA应用
          对SPA应用的理解：
                         1.单页web应用（single page web application SPA）；
                         2.整个应用只有一个完整的页面；
                         3.点击页面中导航链接不会刷新页面，只会做页面的局部刷新；
                         4.数据需要通过ajax请求获取
          路由的理解：
                    什么是路由？ 
                               1）一个路由就是一组映射关系（key-value）；
                               2）key为路径，value可能是function或component；
                    路由分类：
                            后端路由：
                                    1）理解：value是function，用于处理客户端提交的请求；
                                    2）工作过程：服务器接收到一个请求时，根据请求路径找到匹配的
                                                函数来处理请求，返回响应数据 
                            前端路由：
                                     理解：value是component，用于展示页面内容；
                                     工作过程：当浏览器的路径改变时，对应的组件就会显示
          几个注意点：
                  1.路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹；
                  2.通过切换，隐藏了的路由组件，默认是被销毁掉的，需要的时候再去挂载； 
                  3.每个组件都有自己的$route属性，里面存储着自己的路由信息；
                  4.整个应用只有一个router，可以通过组件$router属性获取列。
          嵌套（多级）路由                                                
                  用chilidren配置，path不要加'/'
          路由的query参数：
                         1.传递参数；
                         2.接受参数: $.route.query.xxx      
          命名路由：
                  1.作用：简化路由的跳转
                  2.如何使用，简化跳转（看实例） 
          路由的params参数：
                         1.配置路由，声明参数 /:id/:title
                         2.传递参数
                          特别注意：路由携带params参数时，若使用to的对象写法，则不能直接使用path配置项，必须使用name配置！
                         3.接收参数 $route.params.xxx 
          props的路由配置：
                         作用：让路由组件更方便接收到参数
          <router-link>的replace属性：
                                    1.作用：控制路由跳转时操作浏览器历史记录的模式；
                                    2.浏览器的历史记录有两种写入方式：分别push和replace，push是追加历史记录（压栈），replace是替换当前记录，路由跳转时候默认为push
                                    3.如何开启replace默认 在<router-link>标签中加入replace 或 :replace="true"
          编程式路由导航：
                        1.作用：不借助<router-link>实现路由跳转，让路由跳转更加灵活
                        2.具体编码（看实例）   
          缓存路由组件：
                      1.作用让不展示的路由组件保持挂载，不被销毁   
                      2.实例/pages/MyHome.vue
                      3.标签<keep-alive include="MyNews">

##两个新的生命周期钩子：
                    1.作用：路由组件独有的两个钩子，用于捕获路由组件的激活状态；
                    2.具体名字：
                              activated：路由组件被激活时触发；
                              deactivated：路由组件失活时触发。

##路由守卫：
          1.作用：对路由进行权限控制；
          2.分类：全局路由守卫（beforeEach、afterEach）、独享路由守卫（beforeEnter）、组件内路由守卫
          3.参数：
                to：路由的终点
                meta（路由元信息/路由自定义信息）：可以存放一些特殊的自定义数据，标识等等，但是必须放在mata里，属性名必须是meta。
                from：路由的起点
                next：放行

##路由器的两种工作模式：
                    hash模式：
                    1.对于一个url来说，什么是hash值？-----/#及其后面的内容就是hash值；
                    2.hash值不会包含在http请求中，即：hash值不会带给服务器；
                    3.hash模式：
                              1.地址中永远带着#号，不美观；
                              2.若以后将地址通过第三方手机app分享，若app校验严格，则地址会标记为不合法；
                              3.兼容性较好。
                    history模式：
                    1.地址干净、美观；
                    2.兼容性和hash模式相比略差；
                    3.应用部署上线需要后端人员支持，解决刷新页面服务器404问题    


##Vue UI组件库      
             1.移动端常用UI组件库：
                                 1）Vant  https://vant-ui.github.io/
                                 2）Cube UI https://didi.github.io/cube-ui/
                                 3）Mint UI https://mint-ui.github.io/
                                 4）NutUI(京东) https://nutui.jd.com/
             2.PC端常用UI组件库：
                                 1）Element UI https://element.eleme.cn/
                                 2）IView UI   https://www.iviewui.com/
                                 3）Antdv UI   https://www.antdv.com/docs/vue/introduce-cn
                                  
                             


                                                                                      