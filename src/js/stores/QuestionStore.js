import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _questions = [];

// add private functions to modify data
function addItem(title, completed=false) {
  _questions.push({title, completed});
}

// Facebook style store creation.
const QuestionStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
	  console.log('in question store', _questions);
    return {
      questions: _questions
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.TALLY:
        let score = action.score;
        // NOTE: if this action needs to wait on another store:
        // Dispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (score) {
          addItem(text);
					QuestionStore.emitChange();
        }
        break;
			case Constants.ActionTypes.SET_QUESTIONS:
				let data = action.data;
				if(data){
					_questions = data;
				}
				QuestionStore.emitChange();
				break;

      // add more cases for other actionTypes...
    }
  })
});

export default QuestionStore;
