import React from 'react';

import Nav2 from "../components/layout/Nav";
import Footer from "../components/layout/Footer";


export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <div className="container" >
          <Nav2/>
          <div className="row" >
            <div className="col-lg-12" style={Layout.styles.div}>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}



Layout.styles = {
  div: {
    marginTop: "50px",
  },
};