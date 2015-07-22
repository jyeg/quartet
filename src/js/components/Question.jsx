import React from 'react';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Answer from './Answer.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      question: {
        number: 0,
        text: ''
      }
    };
  },

  handleToggle(question) {
    //if (this.refs.checkbox.getChecked()) {
    //  ActionCreator.getQuestionsFromServer();
    //}
  },

  render() {
    let {question} = this.props;
    return (
      <ListGroupItem>

	      <label>{question.text}</label>
				<Answer number={question.number}/>
      </ListGroupItem>
    );
  }
});
