import React from 'react';

import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


export default class Nav2 extends React.Component {
  render() {
    return (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Amphoreus</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/#">Home</NavItem>
      <NavItem eventKey={2} href="#bulletin">Bulletin</NavItem>
      <NavItem eventKey={3} href="#publications">Publications</NavItem>
      <NavDropdown eventKey={5} title="Publication resources" id="basic-nav-dropdown">
        <MenuItem eventKey={5.1} href="#norms">Norms</MenuItem>
        <MenuItem eventKey={5.2} href="#">Editorial sigla</MenuItem>
        <MenuItem eventKey={5.3} href="#">Arrows System</MenuItem>
        <MenuItem eventKey={5.4} href="#">Abbreviations</MenuItem>
      </NavDropdown>
      <NavItem eventKey={4} href="#about">About</NavItem>
    </Nav>
  </Navbar>
);
  }
}
