import { combineReducers } from 'redux'
import homeState from './home'
import settingState from './com'
import filmState from './film'

export default combineReducers({
  homeState,
  settingState,
  filmState
})
