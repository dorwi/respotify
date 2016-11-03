import React from 'react';


import Img1 from '../../images/home/vide_sanitaire.jpg';


export default class Home extends React.Component {
  render() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      var imgStyle = {
        width: windowWidth ,
        height: windowHeight - 20 - 60 - 10,
      }
    return (
        <div>
          <div className="row">
            <img
              src={Img1}
              alt="Not Found Img1"
              style={imgStyle} 
            />
          </div>
        </div>
    );
  }
}

Home.styles = {
  img: {
    flex: 1,
    width: 1200,
    objectFit: 'cover',
    backgroundSize: 'cover',  
  },
};
