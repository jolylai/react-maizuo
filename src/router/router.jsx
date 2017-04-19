import React,{ Component } from 'react'
import {Router,Route,Redirect,IndexRoute,browserHistory,hashHistory} from 'react-router'
import Home from '../page/Home.jsx'
import Layout from '../components/Layout.jsx'
import Roots from '../components/Root.jsx'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


let RouteConfig = (
  <Router history={history}>
    <Route path='/' component={Roots}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home} />
      <Redirect from='*' to='/' />
    </Route>
  </Router>
);
export default RouteConfig;
