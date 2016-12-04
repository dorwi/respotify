import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Bulletin from './pages/Bulletin';
import RespotifyApp from './pages/RespotifyApp';
import PublicationApp from './pages/PublicationApp';
import About from './pages/About';
import PublicationNorms from './pages/PublicationNorms';
import PublicationCreate from './pages/PublicationCreate';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='bulletin' component={Bulletin}></Route>
      <Route path='publications' component={PublicationApp}></Route>
      <Route path='norms' component={PublicationNorms}></Route>
      <Route path='create' component={PublicationCreate}></Route>
      <Route path='about' component={About}></Route>
    </Route>
  </Router>,
  document.getElementById('amphoreus-app')
);
