import * as utils from './com.js'
import api from '../reducers/api'

function getBannerList(res){
  return {
    type: 'HOME_GET_BANNER_LIST',
    data: res.subjects
  }
}

export function fetchBanner(){
  return (dispatch) => {
    api.getBannerList(function(res){
      dispatch(getBannerList(res));
    })
  }
}



const getNowPlaying = (res) => {
  return {
    type: 'HOME_GET_NOWPLAYING_LIST',
    data: res.data
  }
}

export const fetchNowPlaying = () => {
  return (dispatch) => {
    api.getNowPlaying(function (res){
      dispatch(getNowPlaying(res))
    })
  }
}
