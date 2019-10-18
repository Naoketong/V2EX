Page({
  data:{
    nodes:[],
  },
  onLoad: function(options){
    this.getData();
  },
  getData:function(){
    wx.request({
      url:"https://www.v2ex.com/api/nodes/all.json",
      success:(res)=>{
        // console.log(res)
        this.setData({
          nodes:res.data
        })
      }
    })
  },
})