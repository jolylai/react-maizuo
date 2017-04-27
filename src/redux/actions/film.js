import api from '../api'

const getNowPlayList = (res) => {
  return {
    type: 'GET_NOW_PLAY_LIST',
    data: res.subjects
  }
}

export const fetchNowPlayList = () => {
  return (dispatch) => {
    api.getNowPlaying((res) => {
      dispatch(getNowPlayList(res))
    })
  }
}
