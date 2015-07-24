import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
	setQuestions(guides) {
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.SET_QUESTIONS,
			data: guides
		});
	},

	/*
	 * using json-server to simulate a api which would be used to pull n number of questionnaires from DB.
	 */
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

	/*
	 *  action to hold new answer in the store.
	 */
	answer(number, choice) {
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.ANSWERED,
			answer: [number,choice]
		});
	}

	/*
	 * Would be used to handle business logic, instead just wrote on client side.
	 */
	//tally(score) {
	//	if(score >= 10){
	//
	//	}
	//	Dispatcher.handleViewAction({
	//		type: Constants.ActionTypes.TALLY,
	//		text: score
	//	});
	//},

};
