import { createStore,applyMiddleware,combineReducers } from 'redux'
// 中间件，有了这个就可以支持异步action
import thunk from 'redux-thunk';
import reducer from '../reducers/index'

var store = createStore(
  reducer,
  applyMiddleware(thunk)
);
export default store;
