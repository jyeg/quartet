import React from 'react';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  getDefaultProps() {
    return {
      question: {
        number: '',
        text: false
      }
    };
  },

  handleToggle(question) {
    //if (this.refs.checkbox.getChecked()) {
    //  ActionCreator.getQuestionsFromServer();
    //}
  },

  render() {
    let {number} = this.props;
	  console.log(number);
    return (
      <ListGroup>
	      <ListGroupItem href='#link1' onClick={this.handleToggle.bind(this, number)} >test1</ListGroupItem>
	      <ListGroupItem bsStyle='success'>Success</ListGroupItem>
	      <ListGroupItem bsStyle='info'>Info</ListGroupItem>
	      <ListGroupItem bsStyle='warning'>Warning</ListGroupItem>
	      <ListGroupItem bsStyle='danger'>Danger</ListGroupItem>
      </ListGroup>
    );
  }
});
