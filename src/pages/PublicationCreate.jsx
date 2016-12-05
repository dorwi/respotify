import React from 'react';

import * as publicationApi from '../api/publicationApi';



import { Button, Form, FormGroup, ButtonInput, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


class PublicationCreate extends React.Component {
  constructor() {
    super();
    this.state = ({
      author: '',
      title: '',
    });
    this.getAuthorValidation = this.getAuthorValidation.bind(this);
    this.getTitleValidation = this.getTitleValidation.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  getAuthorValidation() {
    const length = this.state.author.length;
    if (length > 2) return 'success';
  }


  getTitleValidation() {
    const length = this.state.title.length;
    if (length > 2) return 'success';
  }

  handleAuthor(e) {
    this.setState({ author: e.target.value });
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  submitButton() {
    const data = {
      "auteur" : this.state.author,
      "titre" : this.state.title
    }
    publicationApi.createPublication(data, function (e){
      console.log(e);
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.submitButton}>
          <FormGroup role="form">
            <FormGroup controlId="formAuthor" validationState={this.getAuthorValidation()}>
              <ControlLabel>Author(s)</ControlLabel>
              <FormControl
                type="text"
                value={this.state.author}
                placeholder="Enter text"
                onChange={this.handleAuthor}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formTitle" validationState={this.getTitleValidation()}>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Enter text"
                onChange={this.handleTitle}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button type="submit">
              Submit
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}



export default PublicationCreate;
