Page({
  data: {
      inputShowed: false,
      inputVal: "",
      list:[1,2,3,4]
  },
  onLoad() {
      this.setData({
          search: this.search.bind(this)
      })
  },
  search: function (value) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
          }, 200)
      })
  },
  selectResult: function (e) {
      console.log('select result', e.detail)
  },
});