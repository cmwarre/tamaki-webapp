// src/routes.js
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppLayout from './components/layouts/AppLayout';

import HomeContainer from './components/containers/Home-Container';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

export default (
  <Router history={browserHistory}>
      <Route component={AppLayout}>
        <Route path="/" component={HomeContainer} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Route>
  </Router>
);
