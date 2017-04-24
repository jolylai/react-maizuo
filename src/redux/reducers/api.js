import fetchJsonp from 'fetch-jsonp'
//import fetch from 'isomorphic-fetch'

//require('es6-promise').polyfill();

//var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
  getBannerList: function(cb){
    /**
     * 根据请求的时间戳获取banner列表
     */
    fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
      .then(function(res){
        return res.json()
      })
      .then((data) => {
        cb(data)
      })
      .catch((error) => {
        console.log(error)
    })
  },
  /**
   * 获取首页热映电影
   */
  getNowPlaying: function(cb) {
    fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
    .then((res) => {
      res.json()
    })
    .then((data) => {
      console.log( data)
      cb(data)
    })
  }
}
