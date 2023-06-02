const host = "https://xiaofangzi.store:8080";

function request(url, data, method) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
      duration: 3000
    })
    wx.request({
      url: host + url,
      data: data || {},
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
        'token':wx.getStorageSync('token')
      },
      method: method || 'GET',
      success: (res) => {
        wx.hideLoading()
        let statusCode = res.statusCode
        if (statusCode === 200 ) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: '网络异常，请检查网络状态',
            icon: 'none',
            duration: 3000
          })
          reject(res)
        }
      },
      fail: (res) => {
        wx.hideLoading()
        wx.showToast({
          title: '网络异常，请检查网络状态',
          icon: 'none',
          duration: 3000
        })
        reject(res)
      }
    })
  })
}

module.exports={
    request:request
}