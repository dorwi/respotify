import React from 'react';


export default class PublicationNorms extends React.Component {
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
             <div className="col-md-8">
              <div className="panel panel-default" style={PublicationNorms.styles.panel}>
                <div className="panel-body">
<h4>
Fundamental principles
</h4>


                </div>
                </div>
              </div>

            <div className="col-md-4">
            <div className="panel panel-default" style={PublicationNorms.styles.panel}>
                <div className="panel-body">
                <h4>Contact us at:</h4>
                <p>
                bulletin@amphoreus.org
                </p>
                </div>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

PublicationNorms.styles = {
  img: {
    flex: 1,
    width: 1200,
    objectFit: 'cover',
    backgroundSize: 'cover',  
  },
  div: {
    textAlign: 'center',
    background: 'cover',
    opacity: 1,
  },
  panel: {
    margin: 40,
    fontFamily: "monospace"
  },
};
