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
    gridList: [],
    background: [],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    isTriggered:false
  },
  onLoad(options) {
    this.init()
  },
  init(){
    this.setData({
      gridList: generateGridList(10, 4),
      background: generateGridList(10, 4)
    })
  },
  handleRefresher(){
    setTimeout(() => {
      this.init()
      this.setData({
        isTriggered:false
      })
    }, 400)
  }
})