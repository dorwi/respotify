import React from 'react';
import Publication from './Publication';

const PublicationList = (props) => {
  const publs = props.publs.map((publ) => <Publication  publ={publ} />);

  return (
      <table className="table">
        <thead>
        <tr>
        	<th>Author</th>
        	<th>Title</th>
     	</tr>
     	</thead>
     	<tbody>
        	{publs}
        </tbody>
      </table>
  );
};


PublicationList.propTypes = {
  publs: React.PropTypes.array.isRequired,
};


export default PublicationList;
