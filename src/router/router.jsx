import React,{ Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Home from '../components/Home.jsx'
import Layout from '../components/Layout.jsx'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


let RouteConfig = (
  <Router history = { hashHistory }>
    <Route component={ Layout }>
      <Route path="home" component={ Home }/>
    </Route>
  </Router>
);
export default RouteConfig;
