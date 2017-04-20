import fetch from 'isomorphic-fetch'

var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
  getBannerList: function(cb){
    /**
     * 根据请求的时间戳获取banner列表
     */
    fetch('http://m.maizuo.com/v4/api/' + 'billboard/home?t=' + new Date()*1 + '&callback=?',{
      method: 'GET',
      mode: 'no-cors'
    })
      .then(function(res){
        console.log(res)
        if (res.status >= 200 && res.status < 300){
          console.log(res.date)
          cb(res.date)

        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
