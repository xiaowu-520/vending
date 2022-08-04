// 创建自定义指令 参数1:指令名称 参数2:配置对象
export const imgError = {  //头像加载失败就执行该指令
    // 当被绑定的元素插入到dom中时
    // 第二个参数是options，指令中的变量的解释  其中有一个属性叫做 value
    // el表示当前指令作用的dom对象
    // dom认为此时就是图片    
    inserted:function(el,{value}){  
      // 聚焦元素
      // 当图片有地址 但是地址没有加载成功的时候 会报错 会触发图片的一个事件 => onerror
      el.onerror = function() {
        el.src = value
      }
    }
}