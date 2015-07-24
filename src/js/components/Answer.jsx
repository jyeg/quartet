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
	  ActionCreator.answer(this.props.id, e.target.id);
  },

  render() {
    let {id} = this.props;
    return (
      <ListGroup>
	      <ListGroupItem id='1' bsStyle='success' onClick={this.handleToggle} >Not at all</ListGroupItem>
	      <ListGroupItem id='2' bsStyle='info' onClick={this.handleToggle}  >Several days</ListGroupItem>
	      <ListGroupItem id='3' bsStyle='warning' onClick={this.handleToggle}  >More than half the days</ListGroupItem>
	      <ListGroupItem id='4' bsStyle='danger' onClick={this.handleToggle}  >Nearly every day</ListGroupItem>
      </ListGroup>
    );
  }
});
