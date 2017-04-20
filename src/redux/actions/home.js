import * as utils from './com.js'
import api from '../reducers/api'

function getBannerList(res){
  return {
    type: 'HOME_GET_BANNER_LIST',
    date: res.data
  }
}

export function fetchBanner(cb){
  return (dispatch) => {
    //dispatch(utils.loading(true));
    api.getBannerList(function(res){
      dispatch(getBannerList(res));
      //dispatch(utils.loading(false));
      cb()
    })
  }
}
