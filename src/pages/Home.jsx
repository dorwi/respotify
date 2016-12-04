import React from 'react';


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
             <div className="col-md-8">
              <div className="panel panel-default" style={Home.styles.panel}>
                <div className="panel-body">
<h4>Welcome to Amphoreus ! This site represents the on-line database 
of the "Bulletin Amphorologique" edited by the Revue des etudes grecques. Not only 
does it allow readers to look up all the reviews appearing in the Bulletin, it also 
announces the publication of studies dealing with amphoras and their stamps, automatically 
including them in the list of new publications ; where necessary these studies will 
also be reviewed in the Bulletin. The norms for the publication of amphora stamps and a 
list of bibliographical abbreviations are also available.</h4>
                </div>
                </div>
              </div>
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
  div: {
    textAlign: 'center',
    background: 'cover',
    opacity: 1,
  },
  panel: {
    margin: 40,
    fontFamily: "monospace",
    backgroundColor: '#f2f2f2',
    opacity: 0.9,
    clear: "both",
    textAlign: "center",
  },
};
