import React from 'react';
import Publication from './Publication';

const PublicationList = (props) => {
  const publs = props.publs.map((publ) => <Publication  publ={publ} />);

  return (
      <ul >
        {publs}
      </ul>
  );
};


PublicationList.propTypes = {
  publs: React.PropTypes.array.isRequired,
};


export default PublicationList;
