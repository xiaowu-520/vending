import {imageCode,login} from '@/api/user'
export default {
  namespaced: true,
  state: {
    imgCode:'', //验证码图片地址
    clientToken:'',  //验证码token
  },
  mutations: {
    // 存储验证码数据
    upDatedClientToken(state,payload) {
      state.clientToken = payload
      state.imgCode = `http://localhost:8888/api/user-service/user/imageCode/${payload}`
    },
  },
  actions: {
    // 获取图片验证码
    async getClientToken(context){
      try {
        const randomNum = Math.floor(Math.random() * 100)
        await imageCode(randomNum)        
        // console.log(context);
        context.commit('upDatedClientToken',randomNum)
      } catch (error) {
        console.log(error);
      }
    },
    //发起登录请求
    async getLogin(context,payload){
      try {
        const res = await login(payload.username,payload.password,payload.verificationCode,context.state.clientToken)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
