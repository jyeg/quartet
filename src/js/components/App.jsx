import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Questionnaire from './Questionnaire.jsx';
import Alert from './Alert.jsx';
import Result from './Results.jsx';

export default React.createClass({
  propTypes: {
    questions: PropTypes.array.isRequired,
    onTally: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      questions: []
    }
  },

	handleAlertDismiss() {
		this.setState({onAlert: false});
	},

	handleAlertShow() {
		this.setState({onAlert: true});
	},

	render() {
    let {onTally, questions, onAlert, onHandleAlertDismiss, onResult} = this.props;
		if(onResult){
			return( <Result/>);
		}
    return (
      <div className="container">
        <Jumbotron>
          <h1>Patient Health Questionnaire (PHQ-9)</h1>
        </Jumbotron>

        <Questionnaire questions={questions} />


	      {onAlert ? <Alert onDismiss={onHandleAlertDismiss} /> : null}

        <Button onClick={onTally} bsStyle="primary">Submit</Button>
      </div>
    );
  }
});
