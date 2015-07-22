'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Dispatcher = require('../Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Constants = require('../Constants');

var _Constants2 = _interopRequireDefault(_Constants);

var _BaseStore = require('./BaseStore');

var _BaseStore2 = _interopRequireDefault(_BaseStore);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

// data storage
var _questions = [];

// add private functions to modify data
function addItem(title) {
  var completed = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  _questions.push({ title: title, completed: completed });
}

// Facebook style store creation.
var QuestionStore = (0, _objectAssign2['default'])({}, _BaseStore2['default'], {
  // public methods used by Controller-View to operate on data
  getAll: function getAll() {
    console.log('in question store', _questions);
    return {
      questions: _questions
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: _Dispatcher2['default'].register(function (payload) {
    var action = payload.action;

    switch (action.type) {
      case _Constants2['default'].ActionTypes.TALLY:
        var score = action.score;
        // NOTE: if this action needs to wait on another store:
        // Dispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (score) {
          addItem(text);
          QuestionStore.emitChange();
        }
        break;
      case _Constants2['default'].ActionTypes.SET_QUESTIONS:
        var data = action.data;
        if (data) {
          _questions = data;
        }
        QuestionStore.emitChange();
        break;

        // add more cases for other actionTypes...
    }
  })
});

exports['default'] = QuestionStore;
module.exports = exports['default'];

//# sourceMappingURL=QuestionStore-compiled.js.map