// components/grid-tile-img/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    avatar: {
      type: String,
      value: '../../image/hd.png',
    },
    name: {
      type: String,
      value: '广域网',
    },
    time: {
      type: String,
      value: '1分钟前',
    },
    image:{
      type: String,
      value: '../../image/ex.png',
    },
    content:{
      type: String,
      value: '无法舞台你',
    },
    like:{
      type: Boolean,
      value: false
    },
    likeNum:{
      type: Number,
      value: 0
    },
    commentNum:{
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
