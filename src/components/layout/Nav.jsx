import React from 'react';

import { IndexLink, Link } from 'react-router';


export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div className="container">
          <ul className="nav navbar-nav">
            <li activeClassName="active" onlyActiveOnIndex={true}>
              <IndexLink to="/">Home</IndexLink>
            </li>
            <li activeClassName="active">
              <Link to="respotify">Respotify</Link>
            </li>
            <li activeClassName="active" className="navbar-right">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
