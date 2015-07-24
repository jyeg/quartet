import React from 'react';
import QuestionStore from '../stores/QuestionStore';
import AnswerStore from '../stores/AnswerStore.js';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import App from './App.jsx';

export default React.createClass({
	//propTypes: {
	//	// You can also specify a custom validator. It should return an Error
	//	// object if the validation fails. Don't `console.warn` or throw, as this
	//	// won't work inside `oneOfType`.
	//	scores: function(props, propName, componentName) {
	//		var keys = Object.keys(props[scores]);
	//		if(keys.length === 9){
	//		//if (!/matchme/.test(props[propName])) {
	//			return new Error('Validation failed!');
	//		}
	//	}
	//},

	_onChange() {
    this.setState(QuestionStore.getAll());
	  this.setState({scores: AnswerStore.getAll()});
  },

  getInitialState() {
    return {
	    questions: ActionCreator.getQuestionsFromServer(),
	    score: 0,
	    scores: {},
	    alertVisible: false,
	    resultVisible:false
    };
  },

  componentDidMount() {
	  QuestionStore.addChangeListener(this._onChange);
	  AnswerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
	  QuestionStore.removeChangeListener(this._onChange);
	  AnswerStore.removeChangeListener(this._onChange);
  },

  //handleAddTask(e) {
  //  let title = prompt('Enter task title:');
  //  if (title) {
  //    ActionCreator.addItem(title);
  //  }
  //},

	handleTally() {
		//var scores = AnswerStore.getAll();
		var keys = Object.keys(this.state.scores.scores);
		var allScores = this.state.scores.scores;
		if(keys.length === 9){
			// calculates score.
			var score = keys.reduce(function(sum, key){
				sum += (+allScores[key]);
				return sum;
			},0);
			//if(score > 10){
				this.setState({resultVisible: true});
				this.setState({score: score});
			//}
			//ActionCreator.tally(score);

		}else{
			this.setState({alertVisible: true});
		}
	},

	render() {
    let {questions, alertVisible, resultVisible, score} = this.state;
			return (
				<App
					onTally={this.handleTally}
					questions={questions}
					onAlert={alertVisible}
					onResult={resultVisible}
					onHandleAlertDismiss={this.handleAlertDismiss}
					onHandleAlertShow={this.handleAlertShow}
				  score={score}
					/>
			);
  }
});
