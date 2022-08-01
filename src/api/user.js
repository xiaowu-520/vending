import request from '@/utils/request'

/**
 * 获取图片验证码
 * @param {String} clientToken 验证码TOKEN
 * @returns Promise
 */
export function imageCode(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    method: 'get',
    responseType:'blob'    
  })
}

/**
 * 登录接口
 * @param {String} loginName  用户名称
 * @param {String} password 用户密码
 * @param {String} code 验证码
 * @param {String} clientToken 验证码token
 * @param {String} loginType 后台登录类型
 * @returns 
 */
export function login(loginName,password,code,clientToken,loginType) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data:{
      loginName,
      password,
      code,
      clientToken,
      loginType:0
    }
  })
}


