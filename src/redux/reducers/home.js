const initialState = {
  banner: [],
  nowplay: [],
  coming: []
}

export default function homeState(state = initialState,action){
  switch (action.type){
    case 'HOME_GET_BANNER_LIST':
          return Object.assign({},state,{
            banner: action.data.billboards
          });
    case 'HOME_GET_NOWPLAYING_LIST':
          return Object.assign({},state,{
            nowplay: action.date.films
          });
    case 'HOME_GET_COMINGSOON_LIST':
          return Object.assign({},state,{
            coming: action.date.films
          });
    default:
          return state;
  }
}
