import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/stores/store.js'
import router from './router/router.js'
import { Provider } from 'react-redux'
import 'babel-polyfill';

//监听store的state
store.subscribe(() => {
  console.log(store.getState())
});
// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>
  , document.getElementById('app')
);
