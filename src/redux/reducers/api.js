import fetchJsonp from 'fetch-jsonp'
//import fetch from 'isomorphic-fetch'

require('es6-promise').polyfill();

//var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
  getBannerList: function(cb){
    /**
     * 根据请求的时间戳获取banner列表
     */
    fetchJsonp('https://api.douban.com/v2/book/1220562').then(function(res){
      return res.json()
    })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
      return Promise.reject(error)
    })
  }
}
