import fetch from 'isomorphic-fetch'

var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
  getBannerList: function(cb){
    /**
     * 根据请求的时间戳获取banner列表
     */
    fetch(url + 'billboard/home?t=' + new Date()*1 + '&callback=?').then(function(res){
      if (res.status >= 200 && res.status < 300){
        cb(res.date)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
