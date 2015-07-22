import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Questionnaire from './Questionnaire.jsx';

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

	render() {
    let {onTally, questions} = this.props;
    return (
      <div className="container">
        <Jumbotron>
          <h1>Patient Health Questionnaire (PHQ-9)</h1>
          <p>
	          his easy to use patient questionnaire is a self-administered version of the PRIME-MD diagnostic instrument for common mental disorders>
	          The PHQ-9 is the depression module, which scores each of the nine DSM-IV criteria as "0" (not at all) to "3" (nearly every day). It has been validated for use in primary care.
          </p>
        </Jumbotron>

        <Questionnaire questions={questions} />

        <Button onClick={onTally} bsStyle="primary">Submit</Button>
      </div>
    );
  }
});
