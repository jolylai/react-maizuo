const initialState = {
  nowPlayList: []
}

const filmState = (state=initialState,action) => {
  switch (action.type){
    case "GET_NOW_PLAY_LIST":
          return Object.assign({},state,{
            nowPlayList: action.data
          })
    default:
          return state
  }
}

export default filmState;
