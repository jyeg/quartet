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
var _scores = [];

// add private functions to modify data
function addScore(answer) {
  _scores[answer.number] = answer.score;
}

// Facebook style store creation.
var AnswerStore = (0, _objectAssign2['default'])({}, _BaseStore2['default'], {
  // public methods used by Controller-View to operate on data
  getAll: function getAll() {
    return {
      tasks: _scores
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: _Dispatcher2['default'].register(function (payload) {
    var action = payload.action;

    switch (action.type) {
      case _Constants2['default'].ActionTypes.ANSWER_ADDED:
        var text = action.answer;

        if (!text) {
          addScore(text);
          AnswerStore.emitChange();
        }
        break;

    }
  })
});

exports['default'] = AnswerStore;
module.exports = exports['default'];

//# sourceMappingURL=AnswerStore-compiled.js.map