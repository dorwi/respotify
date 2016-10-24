import React from 'react';

import SearchBar from '../components/SearchBar';
import AlbumList from '../components/AlbumList';
import * as musicApi from '../api/musicApi';



class RespotifyApp extends React.Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
    });
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
  }

  getAlbums(artist) {
    musicApi.getAlbums(artist, this.processAlbums);
  }

  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items,
    });
  }

  render() {
    return (
      <div>
        <SearchBar getAlbums={this.getAlbums} />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

export default RespotifyApp;
