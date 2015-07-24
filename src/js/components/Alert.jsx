import React from 'react';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import Alert from 'react-bootstrap/lib/Alert';

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
	  let {onDismiss} = this.props;
    return (
	    <Alert bsStyle="warning" onDismiss={onDismiss}>
		    <strong>Please answer all questions. </strong>
	    </Alert>
    );
  }
});
