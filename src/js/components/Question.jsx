import React from 'react';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Answer from './Answer.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      question: {
        id: 0,
	      question: ''
      }
    };
  },

  render() {
    let {question} = this.props;
    return (
      <ListGroupItem>
	      <p>{question.question}</p>
				<Answer id={question.id}/>
      </ListGroupItem>
    );
  }
});
