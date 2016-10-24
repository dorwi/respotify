import React from 'react';


import Img1 from '../../images/home/vide_sanitaire.jpg';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Hey</h1>
                <img
                  src={Img1}
                  alt="Not Found Img1"
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
