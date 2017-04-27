const  initialState = {

}

const settingState  = (state=initialState,action) => {
  switch (action.type){
    case 'COM_LOADING_STATUS':
      return Object.assign({},state,{
        loading: action.loading
      });
    default:
          return state
  }
}
export default settingState;
