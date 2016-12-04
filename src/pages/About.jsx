import React from 'react';


export default class About extends React.Component {
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
              <div className="panel panel-default" style={About.styles.panel}>
                <div className="panel-body">
<h4>
From the bulletin...
</h4>
<p>
Although every bulletin attempts to both announce and review a given number of 
publications, these two objectives are chronologically contradictory: for if it 
matters to announce a work as quickly as possible, it is necessary to stand back 
to review it. Furthermore, since the bulletin is actually able to provide a regular 
and comprehensive overview of the current state of research, it serves as a buffer 
against the growing dispersal of publications. With regard to amphoras, the multiplication 
of publications is such, however, that the scope of the overview provided is in constant 
need of being reduced, certain sectors being abandoned in favour of others. Since the 
pertinence of the publications is increasingly variable, the amount of critical 
analysis has also had to be reduced concomitantly.
</p>
<h4>
...to the site
</h4>
<p>
In order to remedy these problems, the site Amphoreus proposes to announce as quickly 
as possible all the publications which are relevant to the Bulletin amphorologique and 
to eventually forgo reviewing everything that would have thus been announced. The bulletin 
also places various resources at the disposition of all those who consult it : an index 
of the 1825 entries of the bulletin, the norms for the publication of amphora 
stamps, conventions for transcriptions, a system of bibliographical abbreviations.
</p>

<p>
The entire site is accessible in the five languages that are the most currently 
used by archaeologists working in the Mediterranean and the Black Sea : French, Greek, Turkish, Russian and English.
</p>

<p>
The site’s contents have been compiled and edited by Nathan Badoud, who has 
co-written the presentation of the bulletin with Yvon Garlan. The translations have 
been made by Antigone Marangou-Lerat (Greek), Melek Tugru, Tuna Turgay, Ali Ozcan (Turkish), 
Natacha Guenther, Anna Kondratieva (Russian) and Philip Ditchfield (English). The website logo has been designed by Ivan Ebel.
</p>


                </div>
                </div>
              </div>

            <div className="col-md-4">
            <div className="panel panel-default" style={About.styles.panel}>
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

About.styles = {
  img: {
    flex: 1,
    width: 1200,
    objectFit: 'cover',
    backgroundSize: 'cover',  
  },
  div: {
    marginTop: "50px",
    opacity: 0.9,
    clear: "both",
    textAlign: "center",
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
