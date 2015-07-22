import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _scores = [];

// add private functions to modify data
function addScore(answer) {
  _scores[answer.number] = answer.score;
}

// Facebook style store creation.
const AnswerStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _scores
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.ANSWER_ADDED:
        let text = action.answer;

        if (!text) {
          addScore(text);
          AnswerStore.emitChange();
        }
        break;

    }
  })
});

export default AnswerStore;
