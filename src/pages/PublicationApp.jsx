import React from 'react';

import PublicationSearchBar from '../components/publications/PublicationSearchBar';
import PublicationList from '../components/publications/PublicationList';
import * as publicationApi from '../api/publicationApi';



class PublicationApp extends React.Component {
  constructor() {
    super();
    this.state = ({
      publs: [],
    });
    this.getPublications = this.getPublications.bind(this);
    this.processPublications = this.processPublications.bind(this);
  }

  getPublications(author) {
    publicationApi.getPublications(author, this.processPublications);
  }

  processPublications(payload) {
    this.setState({
      publs: payload,
    });
  }

  render() {
    return (
      <div>
        <PublicationSearchBar getPublications={this.getPublications} />
        <PublicationList publs={this.state.publs} />
      </div>
    );
  }
}



export default PublicationApp;
