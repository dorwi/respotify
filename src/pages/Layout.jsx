import React from 'react';

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";


export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <div className="container" style={containerStyle}>
          <Nav/>
          <div className="row">
            <div className="col-lg-12">

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}