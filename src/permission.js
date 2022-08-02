import router from "@/router";
import store from '@/store'

// 路由(全局)前置守卫
// to：去哪里的路由信息
// from：来自于哪个路由
// next：是否进入

// 定义白名单
const whiteList = ['/login','/404']
router.beforeEach((to,from,next) => {
    
    // 是否登录状态
    if(store.getters.token){
        // 获取用户信息
        // if(!store.state.user.userInfo.userId){
        //     store.dispatch('user/getUserInfo')
        // }
        // 是否进入登录页
        // if(to.path === '/login'){
        //     // 进入首页
        //    return next()
        // }else{
            // 直接进入
            next() 
        // }
    }else{
        // 未登录状态
        // 是否在白名单
        const isIncludes = whiteList.includes(to.path)
        if(isIncludes){
            next()
        }else{
            next('/login')
        }
    }
})