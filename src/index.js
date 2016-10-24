import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/Layout';
import Home from './pages/Home';
import RespotifyApp from './pages/RespotifyApp';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='respotify' component={RespotifyApp}></Route>
    </Route>
  </Router>,
  document.getElementById('amphoreus-app')
);
