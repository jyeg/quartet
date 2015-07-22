import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import request from 'superagent';

export default {
	setQuestions(guides) {
		console.log('in action', guides);
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.SET_QUESTIONS,
			data: guides.questions
		});
	},

  getQuestionsFromServer() {
		let self = this;
		let destination = 'http://localhost:3000/questionnaires';
	  // request from json service.
var data =     {  "questions": [
		  {
			  "id": 1,
			  "question": "Little interest or pleasure in doing things?"
		  },
		  {
			  "id": 2,
			  "question": "Feeling down, depressed, or hopeless?"
		  },
		  {
			  "id": 3,
			  "question": "Trouble falling or staying asleep, or sleeping too much?"
		  },
		  {
			  "id": 4,
			  "question": "Feeling tired or having little energy?"
		  },
		  {
			  "id": 5,
			  "question": "Poor appetite or overeating?"
		  },
		  {
			  "id": 6,
			  "question": "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?"
		  },
		  {
			  "id": 7,
			  "question": "Trouble concentrating on things, such as reading the newspaper or watching television?"
		  },
		  {
			  "id": 8,
			  "question": "Moving or speaking so slowly that other people could have noticed? \n Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?"
		  },
		  {
			  "id": 9,
			  "question": "Thoughts that you would be better off dead, or of hurting yourself in some way?"
		  }
	  ]};
	  this.setQuestions(data);
	  //request
			//.get(destination)
		 // .set({
			//  'X-Requested-With': 'XMLHttpRequest'
		 // })
			//.end(function(res) {
			//  console.log('questions get response', res);
			//  if (res.ok) {
			//	  let guideData;
	  //
			//	  guideData = res.body;
	  //
			//	  self.setQuestions(guideData);
			//  }
		 // });
  },

	answer(number, choice) {
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.ANSWER,
			text: text
		});
	},

	tally(score) {

		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.TALLY,
			score: score
		});
	},

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...');
  }
};
