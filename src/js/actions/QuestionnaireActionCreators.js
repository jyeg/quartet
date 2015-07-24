import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
	setQuestions(guides) {
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.SET_QUESTIONS,
			data: guides
		});
	},

  getQuestionsFromServer() {
		let self = this;
		let destination = 'http://localhost:3000/questionnaires';
	  // request from json service.response.json()
	  fetch(destination)
			.then(response => response.json())
	    .then(data => {
			  this.setQuestions(data[0].questions);
		  })
		  .catch(e => console.log("Error", e));
  },

	answer(number, choice) {
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.ANSWERED,
			answer: [number,choice]
		});
	},

	//tally(score) {
	//	if(score >= 10){
	//
	//	}
	//	Dispatcher.handleViewAction({
	//		type: Constants.ActionTypes.TALLY,
	//		text: score
	//	});
	//},

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...');
  }
};
