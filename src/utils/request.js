// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui';
import store from '@/store';
import { getTokenTime } from './auth';
import router from "@/router";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(async config => {
      // 在这个位置需要统一的去注入token
      if (store.getters.token) {
        // 定义token存在的时间
        const currentTime = Date.now()
        const tokenTime = getTokenTime()
        const timeout = 2*1000
        if(currentTime - tokenTime > timeout){
          // 判断token是否过期，过期跳到登录页面
          console.log(111);
          await store.dispatch('user/logout')
          router.push('/login')
          return Promise.reject(new Error('请重新登录'))
        }else{
          // 如果token存在 注入token
          config.headers.Authorization = store.getters.token
        }    
      }
      return config // 必须返回配置
    }, (error) => {
      return Promise.reject(error)
}) // 请求拦截器
service.interceptors.response.use(
//   (res) => {},
//   async (error) => {
//     if(error?.response?.status === 401){
//       Message.error('登录过期')
//       await store.dispatch('user/logout')
//       router.push('/login')
//     }else{
//       Message.error(error.message)
//     }
//     return Promise.reject(error)
// }
) // 响应拦截器
export default service // 导出axios实例