//app.js
App({
  //  1 应用第一次启动就会触发的事件  
  onLaunch() {
    //  在应用第一次启动的时候 获取用户的个人信息 
    console.log("onLaunch");

    // js的方式来跳转 不能触发onPageNotFound
    // wx.navigateTo({
    //   url: '/11/22/33'
    // });
  },

  // 2 应用被用户看到 
  onShow(){
    // 对应用的数据或者页面效果重置 
    console.log("onShow");
  },
  // 3 应用被隐藏
  onHide(){
    // 暂停或者清除定时器 
    console.log("Hide");
  },
  // 4 应用的代码发生了报错的时候 就会触发
  onError(err){
    // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求 将错误的信息发送后台去
    // console.log("onError");
    // console.log(err);
  },
  // 5 页面找不到就会触发 
  //  应用第一次启动的时候，如果找不到第一个入口页面才会触发
  onPageNotFound(){
    // 如果页面不存在了 通过js的方式来重新跳转页面 重新跳到第二个首页
    // 不能跳到tabbar页面  导航组件类似  
    wx.navigateTo({
      url: '/pages/img/img' 
    });  
      
    // console.log("onPageNotFound");
  }
})