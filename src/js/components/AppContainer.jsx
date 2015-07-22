import React from 'react';
import QuestionStore from '../stores/QuestionStore';
import ActionCreator from '../actions/QuestionnaireActionCreators';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    this.setState(QuestionStore.getAll());
  },

  getInitialState() {
    return {
	    questions: ActionCreator.getQuestionsFromServer()
    };
  },

  componentDidMount() {
	  QuestionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
	  QuestionStore.removeChangeListener(this._onChange);
  },

  //handleAddTask(e) {
  //  let title = prompt('Enter task title:');
  //  if (title) {
  //    ActionCreator.addItem(title);
  //  }
  //},

  handleTally(e) {
    ActionCreator.tally(e);
  },

  render() {
    let {questions} = this.state;
	  console.log('in App Container', questions);

	  return (
      <App
        //onAddTask={this.handleAddTask}
        //onClear={this.handleClear}
	      onTally={this.handleTally}
        questions={questions} />
    );
  }
});
