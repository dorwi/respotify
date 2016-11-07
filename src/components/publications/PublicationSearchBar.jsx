import React from 'react';

class PublicationSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.getPublications(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div style={PublicationSearchBar.styles.div}>
        <h3> Search for a publication </h3>
        <input
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={PublicationSearchBar.styles.input}
        />
      </div>
    );
  }
}


PublicationSearchBar.propTypes = {
  getPublications: React.PropTypes.func.isRequired,
};

PublicationSearchBar.styles = {
  div: {
    margin: 30,
    textAlign: 'center',
  },
  input: {
    width: '60%',
  },
};

export default PublicationSearchBar;
