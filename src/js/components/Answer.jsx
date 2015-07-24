import React from 'react';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import ListGroup from 'react-bootstrap/lib/ListGroup.js';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem.js';
import Button from 'react-bootstrap/lib/Button.js';

export default React.createClass({
  getDefaultProps() {
    return {
      question: {
        id: ''
      }
    };
  },

  handleToggle(e) {
    //if (this.refs.checkbox.getChecked()) {
    //  ActionCreator.getQuestionsFromServer();
    //}
		e.preventDefault();
	  e.target.className += " selected";
	  let splitId = e.target.id.split('.')[1];
	  ActionCreator.answer(this.props.id, splitId);
  },

  render() {
    let {id} = this.props;
    return (
      <ListGroup>
	      <ListGroupItem id='{id}.0' bsStyle='success' onClick={this.handleToggle} >Not at all</ListGroupItem>
	      <ListGroupItem id='{id}.1' bsStyle='info'  onClick={this.handleToggle}  >Several days</ListGroupItem>
	      <ListGroupItem id='{id}.2' bsStyle='warning' onClick={this.handleToggle}  >More than half the days</ListGroupItem>
	      <ListGroupItem id='{id}.3' bsStyle='danger' onClick={this.handleToggle}  >Nearly every day</ListGroupItem>
      </ListGroup>
    );
  }
});
