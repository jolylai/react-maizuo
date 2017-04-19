import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import store from './reudx/stores/store.jsx'
import router from './router/router.jsx'

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
