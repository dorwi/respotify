import React from 'react';

import { IndexLink, Link } from 'react-router';


export default class Nav3 extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" >
        <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li >
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li>
                <Link to="bulletin">Bulletin</Link>
              </li>
              <li>
                <Link to="publications">Publications</Link>
              </li>
              <li>
                <Link to="norms">Publications Norms</Link>
              </li>
              <li activeClassName="active" className="navbar-right">
                <Link to="about">About</Link>
              </li>
              <li activeClassName="active"  className="dropdown">
                <Link to="" className="dropdown-toggle" data-toggle="dropdown">Publication helper<span className="caret"></span></Link>
                <ul className="dropdown-menu">
                  <li><Link to="#">Editorial sigla</Link></li>
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
