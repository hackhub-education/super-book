//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  pushItem: function(item) {
    this.globalData.bookInfo.history.push(item)
    console.log(this.globalData.bookInfo.history)
  },
  globalData:{
    userInfo:null,
    bookInfo: {
      total: 0,
      history: [
        {
          id: 0,
          name: "电脑",
          value: -1500,
          date: "2017-06-05"
        },
        {
          id: 1,
          name: "网站开发",
          value: 2000,
          date: "2017-06-06"
        },

      ]
    }
  }
})