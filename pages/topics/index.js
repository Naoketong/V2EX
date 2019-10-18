Page({
  data:{
    
    topics:{},
  },
  onLoad:function(options){
    this.getTopics(options.id);
    
  },
  getTopics:function(id){
    console.log(id)
    wx.request({
      url:'https://www.v2ex.com/api/topics/show.json?node_id=' +id,
      success:(res)=>{
        this.setData({
          topics:res.data
        })
      }
    })
  },
  
})