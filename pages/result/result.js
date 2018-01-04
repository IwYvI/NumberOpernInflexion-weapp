Page({
  data: {
    result: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    let result = wx.getStorageSync("lastOpern") || "";
    this.setData({
      result
    })
  },

  copy(e) {
    wx.setClipboardData({
      data: this.data.result,
      success: function (res) {
        wx.showToast({
          title: '已复制到剪贴板',
          icon: 'success',
          duration: 2000
        })
      },
    })
  },

  save(e) {
    wx.navigateTo({
      url: "/pages/detail/detail?saveFromResult=true"
    })
  }
})