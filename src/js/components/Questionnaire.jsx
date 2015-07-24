import React from 'react';
import Question from './Question.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';


export default React.createClass({
  getDefaultProps() {
    return {
      questions: [],
	    total:0
    };
  },

  render() {
    let {questions} = this.props;


    return (
      <form>
        <ListGroup>
          {questions.map(question =>
            <Question question={question} key={question.id}/>
          )}
        </ListGroup>
	      <div className="container">
		      <p>Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</p>
	      </div>
      </form>
    );
  }
});
