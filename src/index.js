import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import Dashboard from './modules/dashboard/DashboardContainer';
import './index.css';

render(
  <Provider store="">
    <Router history={hashHistory}>
      <Route path="/" component={Dashboard}/>
        <Route path="/inventory"/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
