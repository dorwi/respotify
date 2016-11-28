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
            <li activeClassName="active" onlyActiveOnIndex={true}>
              <Link to="bulletin">Bulletin</Link>
            </li>
            <li activeClassName="active">
              <Link to="publications">Publications</Link>
            </li>
            <li activeClassName="active">
              <Link to="norms">Publications Norms</Link>
            </li>
            <li activeClassName="active" className="navbar-right">
              <Link to="about">About</Link>
            </li>
            <li className="dropdown">
              <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Publication helper<span className="caret"></span></Link>
              <ul className="dropdown-menu">
                <li><Link to="sigla">Editorial sigla</Link></li>
                <li><Link to="#">Another action</Link></li>
                <li><Link to="#">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
