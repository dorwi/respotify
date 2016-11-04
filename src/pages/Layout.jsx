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
        <div className="container" >
          <Nav/>
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
    backgroundColor: '#f2f2f2',
    marginTop: "50px",
    opacity: 0.9,
    clear: "both",
    textAlign: "center",
  },
};