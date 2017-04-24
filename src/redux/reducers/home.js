const initialState = {
  banner: [],
  nowplay: [],
  coming: []
}

export default function homeState(state = initialState,action){
  switch (action.type){
    case 'HOME_GET_BANNER_LIST':
          return Object.assign({},state,{
            banner: action.data
          });
    case 'HOME_GET_NOWPLAYING_LIST':
          return Object.assign({},state,{
            nowplay: action.data
          });
    case 'HOME_GET_COMINGSOON_LIST':
          return Object.assign({},state,{
            coming: action.data
          });
    default:
          return state;
  }
}
