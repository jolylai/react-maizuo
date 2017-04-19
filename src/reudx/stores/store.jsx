import { createStore,applyMiddleware,combineReducers } from 'redux'
// 中间件，有了这个就可以支持异步action
import thunk from 'redux-thunk';
import reudcer from '../reducers/reducer.jsx'

var store = createStore(
  //combineReducers(reudcer),
  applyMiddleware(thunk)
);
export default store;
