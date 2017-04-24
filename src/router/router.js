import React,{ Component } from 'react'
import { Router,Route,Redirect,IndexRoute,browserHistory,hashHistory } from 'react-router'
import Home from '../page/Home.js'
import Roots from '../components/Root.jsx'
import Layout from '../components/Layout.jsx'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


let RouteConfig = (
  <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home} />
      <Redirect from='*' to='/' />
    </Route>
  </Router>
);
export default RouteConfig;
