// grid-demo-3/index.js
import { generateGridList } from '../../utils/util.js'
console.log(generateGridList)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    crossAxisCount: 2,
    crossAxisGap: 4,
    mainAxisGap: 4,
    gridList: generateGridList(10, 4),
    background: generateGridList(10, 4),
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(generateGridList,'console.log(generateGridList)')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})