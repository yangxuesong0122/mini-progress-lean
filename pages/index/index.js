Page({
  data: {
    num: 0
  },
  // input事件
  handleInput(e) {
    console.log(e.detail.value)
    this.setData({
      num: e.detail.value
    })
  },
  // 加减回调
  handletap(e) {
    console.log(e)
    const operation = e.currentTarget.dataset.operation
    this.setData({
      num: this.data.num + operation
    })
  }
})