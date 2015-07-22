import React from 'react';
import Question from './Question.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';

export default React.createClass({
  getDefaultProps() {
    return {
      questions: []
    };
  },

  render() {
    let {questions} = this.props;
		console.log('in questionaire', questions);
    if (questions.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <form>
        <ListGroup>
          {questions.map(question =>
            <Question question={question} key={question.id}/>
          )}
        </ListGroup>
      </form>
    );
  }
});
