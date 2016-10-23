import React from 'react';

import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Hey</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}