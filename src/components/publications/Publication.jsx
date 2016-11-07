import React from 'react';

const Publication = (props) => {
  return (
    <li>
      {props.publ.auteur} - {props.publ.titre}
    </li>
  );
};


Publication.propTypes = {
  publ: React.PropTypes.object.isRequired,
};


export default Publication;
