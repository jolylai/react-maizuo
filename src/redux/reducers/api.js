import fetch from 'isomorphic-fetch'

var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
  getBannerList: function(cb){
    /**
     * 根据请求的时间戳获取banner列表
     */
    fetch('http://m.maizuo.com/v4/api/' + 'billboard/home?t=' + new Date()*1 + '&callback=?',{
      mode: 'no-cors'
    })
      .then(function(res){
        alert(res.msg)
        return res.data
      }).then(function(text){
      alert( text.length)})
      .catch((err) => {
        console.log(err)
      })
  }
}
