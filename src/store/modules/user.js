import {imageCode,login} from '@/api/user'
import router from '@/router'
import { Message } from 'element-ui';
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    imgCode:'', //验证码图片地址
    clientToken:'',  //验证码token
    token:''
  },
  mutations: {
    // 存储验证码数据
    upDatedClientToken(state,payload) {
      state.clientToken = payload
      state.imgCode = `http://localhost:8888/api/user-service/user/imageCode/${payload}`
    },
    //获取token
    getUserToken(state,payload){
      state.token = payload
    }
  },
  actions: {
    // 获取图片验证码
    async getClientToken(context){
      try {
        const randomNum = Math.floor(Math.random() * 100)
        await imageCode(randomNum)        
        // console.log(res);
        context.commit('upDatedClientToken',randomNum)
      } catch (error) {
        console.log(error);
      }
    },
    //发起登录请求,获取token
    async getLogin(context,payload){
      try {
        const res = await login(payload.username,payload.password,payload.verificationCode,context.state.clientToken)
        console.log(res);
        context.commit('getUserToken',res.data.token)
        setTokenTime()
        if (res.data.success) {
          Message({
            message: "登录成功",
            type: "success",
          });
          router.push("/");
        } else {
          Message.error(res.data.msg);
        }       
      } catch (error) {
        console.log(error);
      }
    },
    //退出登录
    logout(context){      
      context.commit('getUserToken')
    }
  }
}
