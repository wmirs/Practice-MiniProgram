// page/example/day2/e1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: "init data",
    iamgeUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.dtstatic.com%2Fuploads%2Fblog%2F202010%2F06%2F20201006130538_eecaa.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.dtstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667971942&t=3addd676d86c43cf685848edc0790402",
    msgList: [
      {msg: "Hello"},
      {msg: "World"}
    ],
    randomNum: Math.random().toFixed(2) * 10,
    count: 1,
    msg: "Hello World",
    type: 3,
    arr1: ["苹果", "华为", "小米"]
  },
  btnTapHandler(e) {
    console.log(e)
  },
  increaseCount(e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  decreaseCount(e) {
    this.setData({
      count: this.data.count - 1
    })
  },
  showInputHandler(e) {
    console.log(e)
    this.setData({
      msg: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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