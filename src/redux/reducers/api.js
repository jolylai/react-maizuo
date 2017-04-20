import fetchJsonp from 'fetch-jsonp'
import axios from 'axios'

var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
  getBannerList: function(cb){
    /**
     * 根据请求的时间戳获取banner列表
     */
    axios.get('http://m.maizuo.com/v4/api/' + 'billboard/home?t=' + new Date()*1 + '&callback=?').then(function(res){
      console.log(res.data);
      if(res.status >= 200 && res.status <300){
        cb(res.data)
      }
    }).catch((error) => {
      // new Error('desc');
      return Promise.reject(error)
    })
  }
}
