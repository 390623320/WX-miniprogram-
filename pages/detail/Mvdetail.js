const reSetData = (params)=>{
        var MvData = {}
        MvData.title = params.videoInfo.coreVideoInfo.videoName
        MvData.artistNames = params.videoInfo.coreVideoInfo.artistNames
        MvData.videoUrl = params.videoInfo.coreVideoInfo.videoUrlModels
        return MvData
}
const reSetCommentData = (params)=>{
  var arr = params.videos.data
  var data = arr.slice(0, arr.length > 12 ? 12 : arr.length)
  var mvArr = []
  data.forEach((item,index)=>{
    var obj = {}
    obj.id = item.id
    obj.headImg = item.headImg
    obj.title = item.title
    obj.playCount = item.value
    obj.duration = item.duration
    obj.artist = item.artists[0].name
    mvArr.push(obj)
  })
  return mvArr
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    MvData:{},
    MvRecommentData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var _this = this
    wx.request({
      url: 'https://api.mlwei.com/music/api/mv/?key=523077333&mv=tai&type=info&id=' + options.id,
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        _this.setData({
          MvData: reSetData(res.data)
        }) 
      }
    })

    var keyWord = options.keyword.replace(/\s*/g, "")
    wx.request({
      url: 'https://api.mlwei.com/music/api/mv/?key=523077333&mv=tai&type=so&word=' + keyWord,
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        _this.setData({
          MvRecommentData: reSetCommentData(res.data)
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  click: function () {
    
  },
  changeContent: function(event){
    console.log("jiebin", event.currentTarget.id)
    var _this = this
    wx.request({
      url: 'https://api.mlwei.com/music/api/mv/?key=523077333&mv=tai&type=info&id=' + event.currentTarget.id,
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        _this.setData({
          MvData: reSetData(res.data)
        })
      }
    })
  }
})