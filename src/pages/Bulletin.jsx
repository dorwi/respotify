import React from 'react';


export default class Bulletin extends React.Component {
  render() {
    return (
        <div>
          <div className="row">
             <div className="col-md-12">
              <div className="panel panel-default" style={Bulletin.styles.panel}>
                <div className="panel-body">
                  <h4><strong>Founded in 1987, the "Bulletin amphorologique" is published every five years in 
the "Bulletin archéologique" of the Revue des études grecques, in the section entitled
 "Amphores et timbres amphoriques". The first three issues were compiled by Jean-Yves Empereur 
 and Yvon Garlan. The fourth was undertaken by Yvon Garlan, while the fifth
  was compiled by both Yvon Garlan and Nathan Badoud. Entries
   of this fifth issue were in part drafted by Pierre Dupont and Antigone Marangou-Lerat.</strong></h4>
<dl class="dl-horizontal">
  <dt>Object</dt>
  <dd>Since its creation, the bulletin has focused upon Greek amphoras and their stamps, 
the only exception being that of the western productions, most notably those 
originating in Marseille. Roof tile stamps have also been included, if deemed 
to be comparable or analogous to those found on amphoras. The period taken into consideration 
has been the Archaic period up to the Byzantine era. However, as of 2007 "all reviews dealing 
with amphoras later than the late 4th or early 5th century have been omitted. In other words, 
any amphoras referred to as Late Roman, proto-Byzantine or Byzantine, which cannot be 
historically nor formally classified as belonging to Greco-Roman Antiquity will no longer be taken 
into consideration. Since the publication of such material has become increasingly numerous, 
it now needs to be treated apart".</dd>
  <dt>Aims</dt>
  <dd>The intention of the authors of the bulletin is twofold : firstly to promote international 
  research in a sector of Classical archaeology, which not long ago has obtained spectacular results 
  and which has rapidly developed its aims and methodology – and to do so to reinforce the dialogue 
  between experts across the borders, linguistic and other ; second, to allow those unfamiliar with 
  ceramic studies to become easily acquainted with the evolution of a discipline which is highly specialised».</dd>
  <dt>Approach</dt>
  <dd>The authors of the bulletin have taken advantage of the emergence in the last quarter of the 20th century of a 
new generation of "amphorologues", a neologism which is now largely accepted. 
Indeed, this new generation of amphora experts has shown itself to be much more finely 
attuned than many of their predecessors to the typology and circulation of amphoras, 
to the physical and chemical analysis of the clay, to the localisation of workshops, 
to the incisors of dies, to the various stamping systems and to their purpose(s). As a 
consequence, where reasonable, the authors of the bulletin have retained their right to make critical 
judgements in a bulletin which is not timidly descriptive and where even problems of ideology are occasionally 
liable to come to the fore!</dd>
</dl>

                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Bulletin.styles = {
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
