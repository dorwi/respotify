import React from 'react';

const Publication = (props) => {
  return (
    <tr>
      <td>{props.publ.auteur}</td>
      <td>{props.publ.titre}</td>
    </tr>
  );
};


Publication.propTypes = {
  publ: React.PropTypes.object.isRequired,
};


export default Publication;
