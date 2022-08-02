// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store';
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(config => {
  // 在这个位置需要统一的去注入token
  if (store.getters.token) {
  // 如果token存在 注入token
  config.headers['Authorization'] = store.getters.token
  }
  return config // 必须返回配置
  }, error => {
  return Promise.reject(error)
}) // 请求拦截器
service.interceptors.response.use() // 响应拦截器
export default service // 导出axios实例